$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sucessful Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@a"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Initialize_the_browser_with_chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens \"https://admin-demo.nopcommerce.com\" site",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_something_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username as \"admin@yourstore.com\" and Password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Username_as_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login page Title Should be \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.login_page_Title_Should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_logout_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for invisibility of [[ChromeDriver: chrome on WINDOWS (ddac02a12f8df962ca5d074dda248a11)] -\u003e xpath: //*[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0B249GS5\u0027, ip: \u0027169.254.134.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.131, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Pramodh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:61864}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ddac02a12f8df962ca5d074dda248a11\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utilities.WaitHelper.WaitForElement(WaitHelper.java:15)\r\n\tat pageObjects.LoginPage.clickLogout(LoginPage.java:51)\r\n\tat stepDefinitions.Steps.user_click_on_logout_link(Steps.java:98)\r\n\tat ✽.User click on Logout link(file:src/test/java/features/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Logout page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.logout_page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browsers",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});