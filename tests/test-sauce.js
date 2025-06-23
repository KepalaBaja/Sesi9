const {
    Builder,
    By,
    until
} = require('selenium-webdriver');

const {
    Select
} = require('selenium-webdriver/lib/select');

const fs = require('fs');
const assert = require('assert');
const {
    dir
} = require('console');

describe('Test Case 1 - Sorting Produk Z-A', function () {
    let driver;

    it('Melakukan login dan sorting produk A-Z dan Z-A', async function () {
        driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');

        // Hasil screenshot Halaman Login
        const HalamanLogin = await driver.takeScreenshot();
        fs.writeFileSync('Halaman Login.png', HalamanLogin, 'base64');

        // Login
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'));
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'));
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'));

        await inputUsername.sendKeys('standard_user');
        await inputPassword.sendKeys('secret_sauce');
        await buttonLogin.click();

        // Hasil screenshot setelah Login
        const MenuBeranda = await driver.takeScreenshot();
        fs.writeFileSync('Menu Beranda.png', MenuBeranda, 'base64');

        // Temukan dropdown sorting Z - A 
        await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]')).click();

        // Assert Product
        let Gambar = await driver.findElement(By.xpath('//*[@id="item_3_img_link"]/img'));
        const cekGambar = await Gambar.isDisplayed()
        assert.strictEqual(cekGambar, true);

        // Hasil screenshot produk Z - A
        const HasilShorting = await driver.takeScreenshot();
        fs.writeFileSync('Hasil Shorting Z - A.png', HasilShorting, 'base64');


        await driver.quit();
    });
});