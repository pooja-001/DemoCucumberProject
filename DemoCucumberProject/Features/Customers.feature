Feature: Customers
@b
Scenario: Add a new Customer
	Given User Initialize the browser with chrome
	When User opens "https://admin-demo.nopcommerce.com" site
	And  User enters Username as "admin@yourstore.com" and Password "admin" 
	And Click on Login
	Then Login page Title Should be "Dashboard"
	When User click on Customers menu item
	And Click on Add new buttom
	Then User can view Add new customer page
	When User enter customer information
	And Click on Save button
	Then User can view confirmation massage "The new customer has been added sucessfully"
	And Close browsers
	
	