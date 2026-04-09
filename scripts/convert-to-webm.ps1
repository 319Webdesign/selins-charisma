# Konvertiert MP4 (oder andere ffmpeg-taugliche Formate) nach WebM (VP9 + Opus).
# Voraussetzung: ffmpeg im PATH (z. B. winget install ffmpeg / choco install ffmpeg)
#
# Beispiele:
#   .\scripts\convert-to-webm.ps1
#   .\scripts\convert-to-webm.ps1 -InputPath "public\video\Video_08.mp4"
#   .\scripts\convert-to-webm.ps1 -InputPath "public\video" -Crf 28

param(
    [string] $InputPath = "",
    [string] $OutputPath = "",
    [ValidateRange(0, 63)]
    [int] $Crf = 32,
    [int] $AudioKbps = 96
)

$ErrorActionPreference = "Stop"

function Test-Ffmpeg {
    $cmd = Get-Command ffmpeg -ErrorAction SilentlyContinue
    if (-not $cmd) {
        Write-Error "ffmpeg wurde nicht gefunden. Bitte installieren und zum PATH hinzufügen (z. B. winget install ffmpeg)."
    }
}

function Convert-One {
    param([string] $Src, [string] $Dst)

    if (-not (Test-Path -LiteralPath $Src)) {
        Write-Error "Datei nicht gefunden: $Src"
    }

    $dir = Split-Path -Parent $Dst
    if ($dir -and -not (Test-Path -LiteralPath $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    Write-Host "Konvertiere: $Src -> $Dst"

    & ffmpeg -hide_banner -y -i $Src `
        -c:v libvpx-vp9 -crf $Crf -b:v 0 -row-mt 1 `
        -c:a libopus -b:a "${AudioKbps}k" `
        $Dst

    if ($LASTEXITCODE -ne 0) {
        Write-Error "ffmpeg ist mit Code $LASTEXITCODE beendet worden."
    }
}

Test-Ffmpeg

$resolved = if ($InputPath) { $InputPath } else { Join-Path $PSScriptRoot "..\public\video" }

if (Test-Path -LiteralPath $resolved -PathType Container) {
    $mp4s = Get-ChildItem -LiteralPath $resolved -Filter "*.mp4" -File
    if (-not $mp4s) {
        Write-Host "Keine MP4-Dateien in: $resolved"
        exit 0
    }
    foreach ($f in $mp4s) {
        $out = [System.IO.Path]::ChangeExtension($f.FullName, ".webm")
        Convert-One -Src $f.FullName -Dst $out
    }
    Write-Host "Fertig."
    exit 0
}

if (-not (Test-Path -LiteralPath $resolved -PathType Leaf)) {
    Write-Error "Pfad ist weder Datei noch Ordner: $resolved"
}

if ($OutputPath) {
    $out = $OutputPath
} else {
    $out = [System.IO.Path]::ChangeExtension($resolved, ".webm")
}

Convert-One -Src $resolved -Dst $out
Write-Host "Fertig: $out"
