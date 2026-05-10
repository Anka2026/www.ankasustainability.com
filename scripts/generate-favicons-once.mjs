/** Regenerate public favicon assets from `public/brand/anka-mark.png`.
 * Run: npm install sharp png-to-ico --no-save && node scripts/generate-favicons-once.mjs && npm uninstall sharp png-to-ico
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public", "brand", "anka-mark.png");
const tmp = path.join(root, "scripts", ".tmp-favicon-pngs");
const white = { r: 255, g: 255, b: 255, alpha: 1 };

fs.mkdirSync(tmp, { recursive: true });

async function writeSized(name, size) {
  const out = path.join(tmp, `${name}.png`);
  await sharp(src)
    .resize(size, size, { fit: "contain", background: white })
    .png()
    .toFile(out);
  return out;
}

const icon512 = await writeSized("512", 512);
const apple180 = await writeSized("180", 180);
fs.copyFileSync(icon512, path.join(root, "public", "icon.png"));
fs.copyFileSync(apple180, path.join(root, "public", "apple-touch-icon.png"));

const p16 = await writeSized("16", 16);
const p32 = await writeSized("32", 32);
const p48 = await writeSized("48", 48);
const icoBuf = await pngToIco([p16, p32, p48]);
fs.writeFileSync(path.join(root, "public", "favicon.ico"), icoBuf);

fs.rmSync(tmp, { recursive: true, force: true });
console.log("OK: favicon.ico (16/32/48), icon.png (512), apple-touch-icon.png (180)");
