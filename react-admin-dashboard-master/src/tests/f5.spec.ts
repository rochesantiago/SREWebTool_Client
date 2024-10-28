import { test, expect } from '@playwright/test';

test('test', async ({ browser }) => {

  const SNATPool = "SNAT_INDO_TEST";
  const currentOutgoingIp = "202.47.204.136";
  const newOutgoingIp = "202.47.197.37";

  const username = "roche.santiago";
  const password = "PsXXdt2w";
  
  const context = await browser.newContext({
    ignoreHTTPSErrors: true, 
  });
  const page = await context.newPage();

  await page.goto("https://172.20.240.47/tmui/login.jsp");
  await page.locator('#username').click();
  await page.locator('#username').fill(username);
  await page.locator('#passwd').click();
  await page.locator('#passwd').fill(password);
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.locator("(//a[@title='Control the delivery of application traffic for a local area network.'])[1]").click();
  await page.locator("(//a[normalize-space()='Address Translation'])[1]").click();
  await page.locator("(//a[@href='/tmui/Control/jspmap/tmui/locallb/snat/snatpool/list.jsp'])[1]").click();

  await page.locator("(//body)[1]").click();

  // const iframeSelector = "//iframe[@id='contentframe']";
  // const iframe = await page.frameLocator(iframeSelector);
  // if(iframe){
  //   const xpathSnatPoolLocator = `//a[normalize-space()='${SNATPool}']`;
  //   const xpathOutgoingLocator = `(//option[@value='${currentOutgoingIp}'])[1]`;
  //   await iframe.locator(xpathSnatPoolLocator).click();
  //   await iframe.locator(xpathOutgoingLocator).click();
  //   await iframe.locator("(//input[@id='edit_address'])[1]").click();
  //   await iframe.locator("(//input[@id='member_ip_addr'])[1]").click();
  //   await iframe.locator("(//input[@id='member_ip_addr'])[1]").fill(newOutgoingIp);
  //   await iframe.locator("(//input[@id='address_add_button'])[1]").click();
  //   await iframe.locator("(//input[@id='update'])[1]").click();
  // }
});


