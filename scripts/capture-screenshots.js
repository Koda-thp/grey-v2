import { mkdirSync } from "fs";
import puppeteer from "puppeteer";

const sites = [
  {
    url: "https://www.orastudioreformer.fr",
    output: "public/images/projects/ora-studio-reformer.jpg",
  },
  {
    url: "https://www.pole-dance-troyes.fr",
    output: "public/images/projects/pole-dance-troyes.jpg",
  },
];

async function captureScreenshots() {
  console.log("Lancement de Puppeteer...");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const site of sites) {
    console.log(`Capture de ${site.url}...`);
    const page = await browser.newPage();

    // Définir la taille de la fenêtre
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2,
    });

    try {
      // Naviguer vers le site
      await page.goto(site.url, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      // Attendre un peu pour les animations
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Prendre le screenshot
      await page.screenshot({
        path: site.output,
        type: "jpeg",
        quality: 85,
        fullPage: false,
      });

      console.log(`✓ ${site.output} capturé`);
    } catch (error) {
      console.error(`✗ Erreur pour ${site.url}:`, error.message);
    }

    await page.close();
  }

  await browser.close();
  console.log("Terminé !");
}

captureScreenshots();
