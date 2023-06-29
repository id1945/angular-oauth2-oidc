import { browser } from 'protractor';

import { AppPage } from './app.po';
import { DemoIdentityServerPage } from './demo-identityserver.po';
import { assertNoUnexpectedBrowserErrorsOnConsole } from './util';

describe('Happy Path Flow', () => {
  let appPage: AppPage;
  let identityServerPage: DemoIdentityServerPage;

  beforeEach(() => {
    appPage = new AppPage();
    identityServerPage = new DemoIdentityServerPage();
  });

  it('should start at home', async () => {
    await appPage.navigateTo();
    expect(await appPage.getTitleText()).toEqual('Welcome');
  });

  it('should be able to navigate to a public page', async () => {
    await appPage.clickMenuLinkTo('basics/public');
    expect(await appPage.getTitleText()).toEqual('Welcome');
    expect(await appPage.getMainContentText()).toContain('🌐 PUBLIC');
  });

  it('should see user is not logged in', async () => {
    expect(await appPage.getShownDebugValue('isAuthenticated')).toBe('false');
    expect(await appPage.getShownDebugValue('hasValidToken')).toBe('false');
    expect(await appPage.getShownDebugValue('isDoneLoading')).toBe('true');
    expect(await appPage.getShownDebugValue('canActivateProtectedRoutes')).toBe('false');
  });

  it('should be able to navigate to IDS4', async () => {
    await appPage.clickLoginButton();
    browser.waitForAngularEnabled(false);
    expect(await identityServerPage.isReadyForLoginInputs()).toBe(true);
  });

  it('should be able to log in on IDS4', async () => {
    await identityServerPage.enterCredentials('bob', 'bob');
    browser.waitForAngularEnabled(true);
  });

  it('should initialize the application again', async () => {
    await appPage.waitForAppPageLoaded();
  });

  it('should have silently refreshed and show being logged in', async () => {
    expect(await appPage.getEmailText()).toBe('BobSmith@email.com');
  });

  it('should show expected debug booleans', async () => {
    expect(await appPage.getShownDebugValue('isAuthenticated')).toBe('true');
    expect(await appPage.getShownDebugValue('hasValidToken')).toBe('true');
    expect(await appPage.getShownDebugValue('isDoneLoading')).toBe('true');
    expect(await appPage.getShownDebugValue('canActivateProtectedRoutes')).toBe('true');
  });

  it('should show expected identity claims', async () => {
    const identityClaims = await appPage.getShownDebugValue('identityClaims');
    expect(identityClaims).toContain('"iss": "https://demo.duendesoftware.com"');
    expect(identityClaims).toContain('"name": "Bob Smith"');
  });

  it('should be able to navigate to Admin-1 page', async () => {
    await appPage.clickMenuLinkTo('basics/admin1');
    expect(await appPage.getTitleText()).toEqual('Welcome');
    expect(await appPage.getMainContentText()).toContain('ADMIN');
    expect(await appPage.getMainContentText()).toContain('API Success');
  });

  it('should be able to log out via IDS4', async () => {
    await appPage.clickLogoutButton();
    browser.waitForAngularEnabled(false);
    expect(await identityServerPage.isShowingLoggedOutMessage()).toBe(true);
  });

  it('should be able to return to the app', async () => {
    await identityServerPage.clickReturnToAppUrl();
    browser.waitForAngularEnabled(true);
  });

  it('should initialize the application again', async () => {
    await appPage.waitForAppPageLoaded();
  });

  it('should see user is not logged in', async () => {
    expect(await appPage.getShownDebugValue('isAuthenticated')).toBe('false');
    expect(await appPage.getShownDebugValue('hasValidToken')).toBe('false');
    expect(await appPage.getShownDebugValue('isDoneLoading')).toBe('true');
    expect(await appPage.getShownDebugValue('canActivateProtectedRoutes')).toBe('false');
  });

  afterEach(async () => {
    await assertNoUnexpectedBrowserErrorsOnConsole();
  });
});
