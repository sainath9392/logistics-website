/**
 * Image Optimization Script for Chrome Sai Express Service
 * Compresses all images in public/assets/images/
 * Run once: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR = './public/assets/images';

const settings = {
  // Logo PNG — compress heavily, keep PNG for transparency
  logo: { quality: 85, effort: 6 },
  // Hero JPEGs — high quality, good compression
  jpg: { quality: 72, progressive: true },
};

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const fileName = basename(filePath);
  const before = statSync(filePath).size;

  try {
    const tempPath = filePath + '.tmp';

    if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 85, compressionLevel: 9, effort: 6 })
        .toFile(tempPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 72, progressive: true, mozjpeg: true })
        .toFile(tempPath);
    } else {
      console.log(`  ⏭  Skipped (unsupported): ${fileName}`);
      return;
    }

    const after = statSync(tempPath).size;
    const saved = ((before - after) / before * 100).toFixed(1);

    // Replace original with compressed version
    renameSync(tempPath, filePath);

    const beforeKB = (before / 1024).toFixed(0);
    const afterKB = (after / 1024).toFixed(0);
    console.log(`  ✅ ${fileName}: ${beforeKB}KB → ${afterKB}KB (saved ${saved}%)`);

  } catch (err) {
    console.error(`  ❌ Failed: ${fileName} — ${err.message}`);
  }
}

async function main() {
  console.log('\n🔧 Chrome Sai — Image Optimizer\n');

  const files = readdirSync(INPUT_DIR);
  let count = 0;

  for (const file of files) {
    const filePath = join(INPUT_DIR, file);
    const stat = statSync(filePath);
    if (stat.isFile()) {
      await optimizeImage(filePath);
      count++;
    }
  }

  console.log(`\n✨ Done! Optimized ${count} files.`);
  console.log('👉 Now run: npm run build\n');
}

main();
