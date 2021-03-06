import { browser, element, By } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am on google page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Google");
});

Given(/^I am on cucumber search results page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Cucumber - Google Search");
});

Given(/^I am on protractor search results page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Protractor - Google Search");
    element(By.xpath(search.searchButton)).click();
});

When(/^Test step$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Protractor - Google Search");
    element(By.xpath(search.searchButton)).click();
});