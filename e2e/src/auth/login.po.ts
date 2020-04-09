import { browser, by, element, ElementFinder } from 'protractor';

export class LoginPo {
  public getEmailInput(): ElementFinder {
    return element(by.name('email'));
  }

  public getPasswordInput(): ElementFinder {
    return element(by.name('password'));
  }

  public getSignInButton(): ElementFinder {
    return element(by.id('crm-sign-in'));
  }

  public navigateTo(): void {
    browser.getCurrentUrl().then(url => {
      if (!/\/login$/i.test(url)) {
        browser.get(browser.baseUrl + 'login');
        browser.waitForAngular();
        browser.sleep(500);
      }
    });
  }

  public waitToLeaveThisPage() {
    browser.wait(async () => {
        return browser.getCurrentUrl().then(url => !/\/login$/i.test(url));
      }, 10000).catch(() => {});
  }

  public doLoginAsUser(): void {
    this.navigateTo();

    browser.waitForAngular();
    const emailInput = this.getEmailInput();
    const pwdInput = this.getPasswordInput();
    emailInput.sendKeys('armen@gmail.com');
    pwdInput.sendKeys('secret');

    const loginButton = this.getSignInButton();
    loginButton.click();

    this.waitToLeaveThisPage();
    browser.waitForAngular();
  }

  public doNavigateToRegisterPageFromLoginPage() {
    const registerButton = element(by.id('crm-go-sign-up'));
    registerButton.click();
    browser.waitForAngular();
  }
}
