import {browser, by, element} from 'protractor';
import {LoginPo} from './login.po';

describe('Login Component', () => {
  const loginPage = new LoginPo();

  beforeAll(() => {
    browser.get(browser.baseUrl);
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
  });

  beforeEach(() => {
    browser.waitForAngular();
  });

  it('Should have a title', () => {
    expect(browser.getTitle()).toEqual('Messenger App');
  });

  it('should log in successfully', () => {
    const email = element(by.name('email'));
    const password = element(by.name('password'));
    const loginButton = element(by.id('crm-sign-in'));
    email.clear();
    password.clear();
    email.sendKeys('decpereira');
    password.sendKeys('k00l41d');
    loginButton.click();
    browser.waitForAngular();
  });

  it('should navigate to register page from login page', () => {
    loginPage.doNavigateToRegisterPageFromLoginPage();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'register');
  });

  it('should redirect to profile page after login', () => {
    loginPage.doLoginAsUser();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'profile');
  });
});
