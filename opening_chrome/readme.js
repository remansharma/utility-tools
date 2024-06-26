/*

Certainly! To achieve similar automation using JavaScript with Node.js, 
you can use the puppeteer library, which provides a high-level API to 
control headless Chrome or Chromium over the DevTools Protocol. Here's 
how you can automate opening Chrome, navigating to http://192.168.1.1:8090/, 
and logging in with your username and password:

npm install puppeteer

node automate_chrome_login.js



Notes:

    Headless Mode: By default, headless is set to false in puppeteerOptions, so you can see the browser GUI. Change it to true if you want to run Chrome in headless mode.
    Error Handling: Ensure your script includes appropriate error handling to manage potential issues such as network errors, element not found errors, or incorrect credentials.
    Security Considerations: Avoid hardcoding sensitive information like passwords directly in scripts intended for distribution or production environments. Consider using environment variables or secure storage solutions.

Using Puppeteer with Node.js provides a robust way to automate browser actions like logging in. It allows you to interact with web pages programmatically, making it suitable for various automation tasks including login processes. Adjustments may be necessary based on the specific structure of your login page and any additional requirements for your automation scenario.

 */



const puppeteer = require('puppeteer');

// URL of the login page
const loginUrl = 'http://192.168.1.1:8090/';

// Your username and password
const username = 'your_username';
const password = 'your_password';

// Puppeteer launch options
const puppeteerOptions = {
    headless: false, // Set to true to run in headless mode (no GUI)
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Required if running as root user
};

(async () => {
    try {
        // Launch browser and open a new page
        const browser = await puppeteer.launch(puppeteerOptions);
        const page = await browser.newPage();

        // Navigate to the login page
        await page.goto(loginUrl);

        // Wait for the login page to load (adjust timeout as needed)
        await page.waitForSelector('input[name="username"]');

        // Enter username and password
        await page.type('input[name="username"]', username);
        await page.type('input[name="password"]', password);

        // Click login button (adjust selector as needed)
        await page.click('button[type="submit"]');

        // Wait for navigation to complete (adjust timeout as needed)
        await page.waitForNavigation();

        // Verification or further actions after login
        console.log('Login successful!');

        // Close the browser
        await browser.close();

    } catch (error) {
        console.error('Error:', error);
    }
})();
