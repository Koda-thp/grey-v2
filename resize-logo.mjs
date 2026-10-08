import sharp from "sharp";

await sharp("public/image/logo agence charte ok (1).png")
  .resize(200, 200, { fit: "inside", withoutEnlargement: true })
  .png()
  .toFile("public/image/logo.png");
console.log("Done");
