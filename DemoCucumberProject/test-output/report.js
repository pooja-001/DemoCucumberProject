$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6268795700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Add a new Customer",
  "description": "",
  "id": "customers;add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@b"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens \"https://admin-demo.nopcommerce.com\" site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Username as \"admin@yourstore.com\" and Password \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Login page Title Should be \"Dashboard\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Customers menu item",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Add new buttom",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can view Add new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enter customer information",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User can view confirmation massage \"The new customer has been added sucessfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close browsers",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 809095400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com",
      "offset": 12
    }
  ],
  "location": "Steps.user_opens_something_site(String)"
});
formatter.result({
  "duration": 5205259100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 25
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Username_as_and_Password(String,String)"
});
formatter.result({
  "duration": 648485100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 37003052100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 28
    }
  ],
  "location": "Steps.login_page_Title_Should_be(String)"
});
formatter.result({
  "duration": 560485800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Customers_menu_item()"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_new_buttom()"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Add_new_customer_page()"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_information()"
});
formatter.result({
  "duration": 49000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Save_button()"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added sucessfully",
      "offset": 36
    }
  ],
  "location": "Steps.user_can_view_confirmation_massage(String)"
});
formatter.result({
  "duration": 97900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browsers()"
});
formatter.result({
  "duration": 2714559700,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
