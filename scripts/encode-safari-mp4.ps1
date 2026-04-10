# Erzeugt H.264/AAC-MP4 für Safari/iOS (Fallback neben .webm).
# Nutzung: .\scripts\encode-safari-mp4.ps1
# Voraussetzung: ffmpeg mit libx264

param(
    [string] $VideoDir = ""
)

$ErrorActionPreference = "Stop"
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Error "ffmpeg nicht im PATH (z. B. winget install ffmpeg)."
}

$dir = if ($VideoDir) { $VideoDir } else { Join-Path $PSScriptRoot "..\public\video" }
$dir = Resolve-Path $dir

$inputs = @(
    @{ In = "Video_08.webm"; Out = "video_08.mp4" },
    @{ In = "video_02.webm"; Out = "video_02.mp4" }
)

foreach ($pair in $inputs) {
    $src = Join-Path $dir $pair.In
    $dst = Join-Path $dir $pair.Out
    if (-not (Test-Path -LiteralPath $src)) {
        Write-Warning "Überspringe (fehlt): $src"
        continue
    }
    Write-Host "Encode: $($pair.In) -> $($pair.Out)"
    & ffmpeg -hide_banner -y -i $src `
        -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 23 -preset medium `
        -c:a aac -b:a 128k `
        -movflags +faststart `
        $dst
    if ($LASTEXITCODE -ne 0) { Write-Error "ffmpeg fehlgeschlagen für $($pair.In)" }
}

Write-Host "Fertig. Dateien in: $dir"
