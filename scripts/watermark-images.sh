#!/usr/bin/env bash
set -euo pipefail

# Usage:
# ./scripts/watermark-images.sh ./public/profile.png ./public/profile-watermarked.png "aqsa-zam-zam-mirza-johar-baig-const.vercel.app"

INPUT_IMAGE="${1:-}"
OUTPUT_IMAGE="${2:-}"
WATERMARK_TEXT="${3:-aqsa-zam-zam-mirza-johar-baig-const.vercel.app}"

if [[ -z "$INPUT_IMAGE" || -z "$OUTPUT_IMAGE" ]]; then
  echo "Usage: $0 <input-image> <output-image> [watermark-text]"
  exit 1
fi

magick "$INPUT_IMAGE" \
  \( +clone \
    -gravity center \
    -fill "rgba(255,255,255,0.18)" \
    -font Arial \
    -pointsize 42 \
    -annotate +0+0 "$WATERMARK_TEXT" \
  \) \
  -compose over \
  -composite \
  "$OUTPUT_IMAGE"

echo "Watermarked image written to: $OUTPUT_IMAGE"
