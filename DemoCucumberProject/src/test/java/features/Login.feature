Feature: Login 

@a
Scenario: Sucessful Login with valid credentials
	Given User Initialize the browser with chrome
	When User opens "https://admin-demo.nopcommerce.com" site
	And  User enters Username as "admin@yourstore.com" and Password "admin" 
	And Click on Login
	Then Login page Title Should be "Dashboard"
	When User click on Logout link
	Then Logout page Title should be "Your store. Login"
	And Close browsers
@b	
Scenario Outline: Login with Data driven
	Given User Initialize the browser with chrome
	When User opens "https://admin-demo.nopcommerce.com" site
	And  User enters Username as "<userName>" and Password "<password>"
	And Click on Login
	Then Login page Title Should be "Dashboard"
	When User click on Logout link
	Then Logout page Title should be "Your store. Login"
	And Close browsers

Examples: 
      | userName          | password | 
      | admin@yourstore.com   |   admin  |        
      | abc@gmail.com     |     7    | 