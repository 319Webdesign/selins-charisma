#!/usr/bin/env bash
# Konvertiert MP4 nach WebM (VP9 + Opus). Voraussetzung: ffmpeg im PATH.
#
# Nutzung:
#   ./scripts/convert-to-webm.sh
#   ./scripts/convert-to-webm.sh public/video/Video_08.mp4
#   ./scripts/convert-to-webm.sh public/video 32   # zweites Arg = CRF (optional)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CRF="${2:-32}"
AUDIO_KBPS="${3:-96}"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg nicht gefunden. Bitte installieren (z. B. winget/choco/brew)." >&2
  exit 1
fi

convert_one() {
  local src="$1"
  local dst="${src%.*}.webm"
  echo "Konvertiere: $src -> $dst"
  ffmpeg -hide_banner -y -i "$src" \
    -c:v libvpx-vp9 -crf "$CRF" -b:v 0 -row-mt 1 \
    -c:a libopus -b:a "${AUDIO_KBPS}k" \
    "$dst"
}

INPUT="${1:-$ROOT/public/video}"

if [[ -d "$INPUT" ]]; then
  shopt -s nullglob
  for f in "$INPUT"/*.mp4; do
    convert_one "$f"
  done
  echo "Fertig."
elif [[ -f "$INPUT" ]]; then
  convert_one "$INPUT"
  echo "Fertig."
else
  echo "Pfad nicht gefunden: $INPUT" >&2
  exit 1
fi
