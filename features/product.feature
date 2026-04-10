Feature: Product functionality for an e-commerce site

  As a user of the shopping cart website
  I want to login to the e-commerce site
  and validate the product items


  Background:
    Given User is able to view the login page
    Then User is logged in to the application

  @regression
  Scenario: Validate product list
    Then I am able to validate product list count
      |Sauce Labs Backpack|
      |Sauce Labs Bike Light|
      |Sauce Labs Bolt T-Shirt|
      |Sauce Labs Fleece Jacket|
      |Sauce Labs Onesie|
      |Test.allTheThings() T-Shirt (Red)|
    Given I am able to validate a product price