import { locales } from "@/i18n.config";
import * as puppeteer from "puppeteer";

const renderPDF = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (const locale of locales) {
    await page.goto(`http://localhost:3000/${locale}`, {
      waitUntil: "networkidle0",
    });

    const title = await page.title();
    const LOCALE = locale.toUpperCase();

    await page.pdf({
      path: `${LOCALE}-${title}.pdf`,
      format: "A4",
    });
  }

  await browser.close();
};

renderPDF();
