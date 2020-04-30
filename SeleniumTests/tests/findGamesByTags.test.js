const { Builder, By, until, Capabilities } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const chai = require("chai");

const URL = "https://store.steampowered.com/search";

describe("Find game with tags and filters", () => {
  const driver = global.driver;

  before(async () => {
    await driver.get(URL);
    await driver.manage().window().maximize();
  });
  

  it('should find game by tag', async () => {
    const search = await driver.findElement(By.id('TagSuggest'));
    search.sendKeys('RPG');
    const rpgTag = await driver.findElement(By.xpath('/html/body/div[1]/div[7]/div[4]/form/div[1]/div/div[2]/div[2]/div[2]/div/div[6]'));
    await rpgTag.click();

    await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div[7]/div[4]/form/div[1]/div/div[1]/div[3]/div/div[3]/a[1]/div[2]/div[1]/span')),10000);
    const expected = 'Borledlands 3';
    const actual = await( await driver.findElement(By.xpath('/html/body/div[1]/div[7]/div[4]/form/div[1]/div/div[1]/div[3]/div/div[3]/a[1]/div[2]/div[1]/span'))).getText();

    chai.assert.equal(expected, actual);
  });

  it('should find game by tags', async () =>{
    const search = await driver.findElement(By.id('TagSuggest'));
    await search.sendKeys('Singleplayer');
    
    const singleTag = await driver.findElement(By.xpath('/html/body/div[1]/div[7]/div[4]/form/div[1]/div/div[2]/div[2]/div[2]/div/div[5]/span[1]/span/span[1]'));
    await singleTag.click();

    await search.sendKeys('Open Wolrd');
    const openTag = await driver.findElement(By.xpath('/html/body/div[1]/div[7]/div[4]/form/div[1]/div/div[2]/div[2]/div[2]/div/div[21]/span[1]/span/span[1]'));
    await openTag.click();

    await search.sendKeys('Action');
    const actionTag = await driver.findElement(By.xpath('/html/body/div[1]/div[7]/div[4]/form/div[1]/div/div[2]/div[2]/div[2]/div/div[5]/span[1]/span/span[1]'));
    await actionTag.click();

    const expected = 'Borledlands 3';
    const actual = await( await driver.findElement(By.xpath('/html/body/div[1]/div[7]/div[4]/form/div[1]/div/div[1]/div[3]/div/div[3]/a[1]/div[2]/div[1]/span'))).getText();

    chai.assert.equal(expected, actual);

  });

  after(async () => { await driver.quit()});
});