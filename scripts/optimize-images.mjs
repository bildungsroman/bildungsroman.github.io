// Converts images to WebP, resizing anything wider than --width.
// Usage: npm run optimize-images -- <input...> --out <dir> [--width 1600]
import { mkdir } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { parseArgs } from "node:util";
import sharp from "sharp";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    out: { type: "string", default: "src/assets/img" },
    width: { type: "string", default: "1600" },
    quality: { type: "string", default: "80" },
  },
});

if (positionals.length === 0) {
  console.error(
    "Usage: npm run optimize-images -- <input...> --out <dir> [--width 1600]"
  );
  process.exit(1);
}

await mkdir(values.out, { recursive: true });

for (const input of positionals) {
  const output = join(values.out, `${basename(input, extname(input))}.webp`);
  const info = await sharp(input)
    .rotate()
    .resize({ width: Number(values.width), withoutEnlargement: true })
    .webp({ quality: Number(values.quality) })
    .toFile(output);
  console.warn(
    `${output} ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`
  );
}
