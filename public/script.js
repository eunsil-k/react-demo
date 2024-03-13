const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, 'ecos.png');
const imageBuffer = fs.readFileSync(imagePath);
const base64Image = imageBuffer.toString('base64');

console.log(`data:image/png;base64,${base64Image}`);