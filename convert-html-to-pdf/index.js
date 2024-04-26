import puppeteer from 'puppeteer';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// IIFE
(async () => {

    let injectedData = {};

    // launch a new chrome instance
    const browser = await puppeteer.launch({
        headless: true
    });

    // create a new page
    const page = await browser.newPage();

    // set the content of the page
    const htmlPath = path.resolve(__dirname, "index.html");
    // console.log(htmlPath);
    // process.exit(0);

    const templateContent = fs.readFileSync(htmlPath, "utf8");

    // Compile the template
    const template = Handlebars.compile(templateContent);

    // Render the template with data
    const renderedHtmlContent = template(injectedData);

    await page.setContent(renderedHtmlContent, {
        waitUntil: 'domcontentloaded'
    });

    // create a pdf buffer
    const pdfBuffer = await page.pdf({
        format: 'A4'
    });

    console.log(`${__dirname}/output.pdf`);

    // or a .pdf file
    await page.pdf({
        format: 'A4',
        scale: 1.5,
        path: `${__dirname}/output.pdf`,
        // waitUntil: 'networkidle0' // Wait until there are no more than 0 network connections for at least 500 ms.
    });

    // close the browser
    await browser.close();

})();