#Author: mulkhiputral@gmail.com
Feature: Search
  I want to use Search Feature for find existing content
  
  Background: Open browser home page
  Given I Open Browser

  @Positive
  Scenario: Search using keyword match existing content
    When Input keyword match existing content 'Apply for a number plate'
    And Click Search Button
    Then Verify Users Get Some Related Content

  @Negative
  Scenario: Search using keyword not match existing content
    When Input keyword NOT match existing content 'Indonesia' 
    And Click Search Button
    Then Verify Users NOT Get Some Related Content
