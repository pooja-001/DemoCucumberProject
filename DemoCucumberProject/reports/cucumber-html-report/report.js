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
  "status": "passed"
});
formatter.step({
  "name": "Logout page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.logout_page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browsers",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browsers()"
});
formatter.result({
  "status": "passed"
});
});