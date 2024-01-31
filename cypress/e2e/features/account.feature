Feature: account
  Scenario: Go to Login page
    When I visit homepage
    Then I click on Reject Unnecessary Cookies
    Then I click on Sign in button
    Then I fill username input with userDetails data