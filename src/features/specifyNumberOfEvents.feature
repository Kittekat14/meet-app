Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given a user hasn’t specified a number of events to show up
When the user does nothing
Then the default number of shown events is 32
Scenario: User can change the number of events they want to see
Given a list of 32 events is shown to the user
When the user specifies a number
Then there will be as many events shown as the user has specified 
