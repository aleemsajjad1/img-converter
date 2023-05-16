const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const fs=require("fs");

const paths = [];

const addRoutePath = (path) => {
  paths.push({ path, priority:1 });
};

// png
addRoutePath('/');
addRoutePath('/subscription');
addRoutePath('/support');
addRoutePath('/convert-to-png');
addRoutePath('/heic-to-png');
addRoutePath('/jpg-to-png');
addRoutePath('/gif-to-png');
addRoutePath('/avif-to-png');
addRoutePath('/tiff-to-png');
addRoutePath('/svg-to-png');
addRoutePath('/webp-to-png');
addRoutePath('/ico-to-png');
addRoutePath('/jpeg-to-png');
addRoutePath('/convert-to-avif');
addRoutePath('/jpg-to-avif');
addRoutePath('/gif-to-avif');
addRoutePath('/png-to-avif');
addRoutePath('/tiff-to-avif');
addRoutePath('/svg-to-avif');
addRoutePath('/webp-to-avif');
addRoutePath('/ico-to-avif');
addRoutePath('/jpeg-to-avif');
addRoutePath('/convert-to-gif');
addRoutePath('/jpg-to-gif');
addRoutePath('/png-to-gif');
addRoutePath('/avif-to-gif');
addRoutePath('/tiff-to-gif');
addRoutePath('/svg-to-gif');
addRoutePath('/webp-to-gif');
addRoutePath('/ico-to-gif');
addRoutePath('/jpeg-to-gif');
addRoutePath('/convert-to-ico');
addRoutePath('/jpg-to-ico');
addRoutePath('/png-to-ico');
addRoutePath('/avif-to-ico');
addRoutePath('/tiff-to-ico');
addRoutePath('/svg-to-ico');
addRoutePath('/webp-to-ico');
addRoutePath('/gif-to-ico');
addRoutePath('/jpeg-to-ico');
addRoutePath('/convert-to-jpg');
addRoutePath('/gif-to-jpg');
addRoutePath('/png-to-jpg');
addRoutePath('/avif-to-jpg');
addRoutePath('/tiff-to-jpg');
addRoutePath('/svg-to-jpg');
addRoutePath('/webp-to-jpg');
addRoutePath('/ico-to-jpg');
addRoutePath('/heic-to-jpg');
addRoutePath('/jpeg-to-jpg');
addRoutePath('/convert-to-svg');
addRoutePath('/gif-to-svg');
addRoutePath('/png-to-svg');
addRoutePath('/avif-to-svg');
addRoutePath('/tiff-to-svg');
addRoutePath('/jpg-to-svg');
addRoutePath('/webp-to-svg');
addRoutePath('/ico-to-svg');
addRoutePath('/jpeg-to-svg');
addRoutePath('/convert-to-tif');
addRoutePath('/gif-to-tiff');
addRoutePath('/png-to-tiff');
addRoutePath('/avif-to-tiff');
addRoutePath('/svg-to-tiff');
addRoutePath('/jpg-to-tiff');
addRoutePath('/webp-to-tiff');
addRoutePath('/ico-to-tiff');
addRoutePath('/jpeg-to-tiff');
addRoutePath('/convert-to-webp');
addRoutePath('/gif-to-webp');
addRoutePath('/png-to-webp');
addRoutePath('/avif-to-webp');
addRoutePath('/svg-to-webp');
addRoutePath('/jpg-to-webp');
addRoutePath('/tiff-to-webp');
addRoutePath('/ico-to-webp');
addRoutePath('/jpeg-to-webp');
addRoutePath('/heic');
addRoutePath('/heic-to-jpeg');
addRoutePath('*');


const generateSitemap = async () => {
  const smStream = new SitemapStream({
    hostname: 'https://www.converterzu.com', // Replace with your website's URL
  });

  paths.forEach(({ path, priority }) => {
    smStream.write({ url: path, priority });
  });

  smStream.end();

  const sitemap = await streamToPromise(smStream);
  const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml'); // Change the output path as needed

  fs.writeFileSync(outputPath, sitemap);
};

generateSitemap();
