#!/usr/bin/env node
/**
 * Image compression script for portfolio site.
 * Converts JPEG/PNG images to WebP format with automatic sizing.
 *
 * Usage:
 *   node compress-images.js                          # Process all images at 800px
 *   node compress-images.js --featured <image>       # Create featured-project-pic.webp at 1200px
 *   node compress-images.js --quality 90             # Higher quality
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SKIP_FILES = [];
const FEATURED_FILENAME = 'featured-project-pic.webp';
const FEATURED_WIDTH = 1200;
const FEATURED_HEIGHT = 600;
const THUMBNAIL_WIDTH = 800;
const THUMBNAIL_HEIGHT = 450;

function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size / (1024 * 1024);
}

async function compressImage(inputPath, outputPath, maxWidth = 800, maxHeight = null, quality = 85, deleteOriginal = true) {
  const originalSize = getFileSizeMB(inputPath);
  
  let image = sharp(inputPath);
  const metadata = await image.metadata();
  
  let wasResized = false;
  
  if (maxHeight) {
    image = image.resize(maxWidth, maxHeight, {
      fit: 'cover',
      position: 'center',
      kernel: sharp.kernel.lanczos3
    });
    wasResized = true;
  } else {
    if (metadata.width > maxWidth || metadata.height > maxHeight) {
      image = image.resize(maxWidth, maxHeight, {
        fit: 'inside',
        kernel: sharp.kernel.lanczos3
      });
      wasResized = true;
    }
  }
  
  await image
    .webp({ quality: quality })
    .toFile(outputPath);
  
  const compressedSize = getFileSizeMB(outputPath);
  
  if (deleteOriginal && inputPath !== outputPath) {
    fs.unlinkSync(inputPath);
  }
  
  return { originalSize, compressedSize, wasResized };
}

async function createFeaturedImage(imageName, inputDir, outputDir, quality = 85) {
  const files = fs.readdirSync(inputDir);
  const targetFile = files.find(f => f === imageName || f.startsWith(imageName));
  
  if (!targetFile) {
    console.log(`✗ Image not found: ${imageName}`);
    return false;
  }
  
  const inputPath = path.join(inputDir, targetFile);
  const outputPath = path.join(outputDir, FEATURED_FILENAME);
  const isAlreadyCompressed = path.extname(targetFile).toLowerCase() === '.webp';
  
  console.log(`Creating featured image from ${targetFile}...`);
  
  try {
    // Check if thumbnail version exists
    const thumbnailName = path.basename(targetFile, path.extname(targetFile)) + '.webp';
    const thumbnailPath = path.join(outputDir, thumbnailName);
    
    if (!fs.existsSync(thumbnailPath) && !isAlreadyCompressed) {
      console.log(`Creating thumbnail version: ${thumbnailName}`);
      const { originalSize: thumbOriginal, compressedSize: thumbCompressed } = await compressImage(
        inputPath,
        thumbnailPath,
        THUMBNAIL_WIDTH,
        THUMBNAIL_HEIGHT,
        quality,
        false // Don't delete original yet
      );
      
      const thumbReduction = thumbOriginal > 0 
        ? ((thumbOriginal - thumbCompressed) / thumbOriginal * 100) 
        : 0;
      console.log(`  ${thumbOriginal.toFixed(2)} MB → ${thumbCompressed.toFixed(2)} MB (${thumbReduction.toFixed(1)}% reduction)`);
    }
    
    // Create featured version
    const { originalSize, compressedSize, wasResized } = await compressImage(
      inputPath,
      outputPath,
      FEATURED_WIDTH,
      FEATURED_HEIGHT,
      quality,
      !isAlreadyCompressed
    );
    
    const reduction = originalSize > 0 
      ? ((originalSize - compressedSize) / originalSize * 100) 
      : 0;
    const resizeNote = wasResized ? ' (resized)' : '';
    const deleteNote = !isAlreadyCompressed ? ' (original deleted)' : '';
    
    console.log(`✓ Created ${FEATURED_FILENAME} from ${targetFile}`);
    console.log(`  ${originalSize.toFixed(2)} MB → ${compressedSize.toFixed(2)} MB (${reduction.toFixed(1)}% reduction)${resizeNote}${deleteNote}`);
    return true;
    
  } catch (error) {
    console.log(`✗ Error creating featured image: ${error.message}`);
    return false;
  }
}

async function compressImages(inputDir, outputDir, quality = 85, overwrite = false) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const supportedExtensions = ['.jpg', '.jpeg', '.png'];
  
  const files = fs.readdirSync(inputDir);
  const images = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const isSupported = supportedExtensions.includes(ext);
    const isSkipped = SKIP_FILES.includes(file.toLowerCase());
    const isFeaturedOutput = file === FEATURED_FILENAME;
    return isSupported && !isSkipped && !isFeaturedOutput;
  });
  
  if (images.length === 0) {
    console.log(`No JPEG/PNG images found in ${inputDir}`);
    return;
  }
  
  console.log(`Found ${images.length} images to compress`);
  console.log(`Thumbnail dimensions: ${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}px (max) | Quality: ${quality}`);
  console.log('-'.repeat(70));
  
  let totalOriginal = 0;
  let totalCompressed = 0;
  let processed = 0;
  let skipped = 0;
  
  for (const imgName of images.sort()) {
    const imgPath = path.join(inputDir, imgName);
    const outputName = path.basename(imgName, path.extname(imgName)) + '.webp';
    const outputPath = path.join(outputDir, outputName);
    
    if (fs.existsSync(outputPath) && !overwrite) {
      console.log(`⊘ Skipped (exists): ${imgName}`);
      skipped++;
      continue;
    }
    
    try {
      const { originalSize, compressedSize, wasResized } = await compressImage(
        imgPath,
        outputPath,
        THUMBNAIL_WIDTH,
        THUMBNAIL_HEIGHT,
        quality
      );
      
      totalOriginal += originalSize;
      totalCompressed += compressedSize;
      processed++;
      
      const reduction = originalSize > 0 
        ? ((originalSize - compressedSize) / originalSize * 100) 
        : 0;
      const resizeNote = wasResized ? ' (resized)' : '';
      
      console.log(`✓ ${imgName}`);
      console.log(`  ${originalSize.toFixed(2)} MB → ${compressedSize.toFixed(2)} MB (${reduction.toFixed(1)}% reduction)${resizeNote} (original deleted)`);
      
    } catch (error) {
      console.log(`✗ Error processing ${imgName}: ${error.message}`);
    }
  }
  
  console.log('-'.repeat(70));
  console.log(`Processed: ${processed} images`);
  console.log(`Skipped: ${skipped} images`);
  
  if (processed > 0) {
    const totalReduction = totalOriginal > 0 
      ? ((totalOriginal - totalCompressed) / totalOriginal * 100) 
      : 0;
    console.log(`Total: ${totalOriginal.toFixed(2)} MB → ${totalCompressed.toFixed(2)} MB (${totalReduction.toFixed(1)}% reduction)`);
  }
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    featured: null,
    quality: 85,
    inputDir: '../assets/images',
    outputDir: '../assets/images',
    overwrite: false
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--featured' && args[i + 1]) {
      options.featured = args[i + 1];
      i++;
    } else if (arg === '--quality' && args[i + 1]) {
      options.quality = parseInt(args[i + 1], 10);
      i++;
    } else if (arg === '--input-dir' && args[i + 1]) {
      options.inputDir = args[i + 1];
      i++;
    } else if (arg === '--output-dir' && args[i + 1]) {
      options.outputDir = args[i + 1];
      i++;
    } else if (arg === '--overwrite') {
      options.overwrite = true;
    } else if (arg === '--help' || arg === '-h') {
      console.log(`
Image compression script for portfolio site.

Usage:
  node compress-images.js                          # Process all images at ${THUMBNAIL_WIDTH}px
  node compress-images.js --featured <image>       # Create ${FEATURED_FILENAME} at ${FEATURED_WIDTH}px
  node compress-images.js --quality 90             # Higher quality
  node compress-images.js --overwrite              # Overwrite existing files

Options:
  --featured <name>   Create featured image from source (saves as ${FEATURED_FILENAME})
  --quality <1-100>   WebP quality (default: 85)
  --input-dir <path>  Input directory (default: ../assets/images)
  --output-dir <path> Output directory (default: ../assets/images)
  --overwrite         Overwrite existing WebP files
  --help, -h          Show this help message

Behavior:
  - Default run: All images compressed to fit within ${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}px (preserves aspect ratio)
  - Featured: Creates ${FEATURED_FILENAME} at exactly ${FEATURED_WIDTH}x${FEATURED_HEIGHT}px (crops to fit)
  - Skips: ${SKIP_FILES.join(', ')}
      `);
      process.exit(0);
    }
  }
  
  return options;
}

async function main() {
  const options = parseArgs();
  
  if (options.featured) {
    const success = await createFeaturedImage(
      options.featured,
      options.inputDir,
      options.outputDir,
      options.quality
    );
    if (!success) {
      process.exit(1);
    }
  } else {
    await compressImages(
      options.inputDir,
      options.outputDir,
      options.quality,
      options.overwrite
    );
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
