Feature: Show or Hide an event's details

Scenario: An event element is collapsed by default
Given the user hasn’t expanded an event to see its details
When the user opens the app
Then the user should see a list of all the events without details
Scenario: User can expand an event to see its details
Given a user has found an event which he wants to read more about
When the user clicks on the show details button of said element
Then the event's details expand
Scenario: User can collapse an event to hide its details
Given the user has read details about an event he wanted to know more about
When the user clicks on the hide details button of said element
Then the event details collapse
