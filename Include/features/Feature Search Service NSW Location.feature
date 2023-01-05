#Author: mulkhiputral@gmail.com
Feature: Search Service NSW Location
  I want to Search Service NSW Location

  Background: Open browser Service Centre page
    Given I Open Browser Service Centre page

  @Positive
  Scenario Outline: Search Service NSW Location named as 'Marrickville Service Centre' with some suburb data
    When Input some suburb data <Suburb>
    And Click Search Location Button
    Then Verify I Get Location Service Named as 'Marrickville Service Centre'

    Examples: 
      | Suburb                        |
      | Sydney 2000                   |
      | Sydney South 2000             |
      | Sydney University 2006        |
      | Sydney Olympic Park 2127      |
      | Sydney Domestic Airport 2020  |
      | Unsw Sydney 2052              |
      | North Sydney 2060             |
      | The University Of Sydney 2006 |

  @Negative
  Scenario Outline: Search Find Service NSW location using invalid Suburb
    When Input Invalid suburb data <InvalidSearch>
    And Click Search Location Button
    Then Verify I Get Error Message 'We couldn't find that suburb or postcode.'

    Examples: 
      | InvalidSearch |
      | Jakarta 2000  |
