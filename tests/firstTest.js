const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const {printTest} = require("./util");

async function loginToOrangeHRM() {
    // Create a WebDriver instance (e.g., for the Chrome browser)
    const driver = new Builder().forBrowser(Browser.FIREFOX).build();

    try {
        // Navigate to the OrangeHRM login page
        await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Wait for the login page to load (you can adjust the time based on your needs)
        await driver.sleep(2000);

        // Find the username input element using XPath
        const usernameInput = await driver.findElement(By.xpath("//input[@name='username']"));

        // Clear existing text in the username input (optional)
        await usernameInput.clear();

        // Set text in the username input
        await usernameInput.sendKeys('Admin');

        console.log('Username set successfully!');
        printTest();

    } catch (error) {
        console.error('Error:', error);

    } finally {
        // Close the WebDriver session
        await driver.quit();
    }
}

// Call the function to login to OrangeHRM and set username
loginToOrangeHRM();
