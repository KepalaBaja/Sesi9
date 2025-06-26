const {
    Builder,
    By,
    until,
} = require('selenium-webdriver');

const {
    Select
} = require('selenium-webdriver/lib/select');
const fs = require('fs');
const assert = require('assert');
const {
    dir
} = require('console');

const chrome = require('selenium-webdriver/chrome');

describe('Sesi 10', function () {
    let driver;

    beforeEach(async function () {
        const chromeOptions = new chrome.Options();
        chromeOptions.addArguments("--headless");
        driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    });

    it('Headless Chrome - Visit SauceDemo web', async function () {
        await driver.get('https://www.saucedemo.com');
        await driver.quit();
    });

    it('Headless Chrome - Visit Gmail web', async function () {
        await driver.get('https://mail.google.com');
        await driver.quit();
    });

});