const fs = require("fs");
const { createCanvas } = require("canvas");

const colors = [
  "#FFB6C1", // Light pink
  "#98FB98", // Pale green
  "#87CEEB", // Sky blue
  "#DDA0DD", // Plum
];

const sizes = {
  hero: { width: 1920, height: 1080 },
  gallery: { width: 800, height: 600 },
};

function generatePlaceholder(width, height, color, text, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Fill background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 48px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  // Save to file
  const buffer = canvas.toBuffer("image/jpeg");
  fs.writeFileSync(`public/${filename}`, buffer);
}

// Generate hero image
generatePlaceholder(
  sizes.hero.width,
  sizes.hero.height,
  colors[0],
  "Allerhand Tageskinder",
  "placeholder-hero.jpg"
);

// Generate gallery images
for (let i = 1; i <= 4; i++) {
  generatePlaceholder(
    sizes.gallery.width,
    sizes.gallery.height,
    colors[i % colors.length],
    `Räumlichkeit ${i}`,
    `placeholder-${i}.jpg`
  );
}

console.log("Placeholder images generated successfully!");
