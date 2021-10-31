# meet-App by Kittekat14
The goal is to build a serverless, progressive web application (PWA) with React using a test-driven 
development (TDD) technique. The application uses the Google Calendar API to fetch 
upcoming events. Also, I will add some graphs to the app and use visualization techniques, that will output two charts -one that show how many events will take place in one city and another that visualizes the popularity of event genres in the form of a pie chart.

![screenshot](/src/images/Final-Screenshot.PNG)

# Key Features 
1. Filter events by city. 
2. Show/hide event details. 
3. Specify number of events. 
4. Use the app when offline. 
5. Add an app shortcut to the home screen. 
6. View a chart showing the number of upcoming events by city. 
 
# User Stories 
1.	As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city.
2.	As a user
I should be able to read details about an searched event or hide its details
So that I can better inform myself about that selected event and hide event’s details if I don’t need them anymore.
3.	As a user
I should be able to see the exact number of events taking place in my selected city
So that I can see the list of events that take place in that said city.
4.	As a user
I should be able to see search results even if I’m offline
So that I can see my cached web pages.
5.	As a user
I should be able to add a shortcut of the app to my home screen
So that I can call the page faster.
6.	As a user
I should be able to look at all upcoming events in a city on a chart
So that I have a better and faster overview of all upcoming events.

# User Scenarios (Given-When-Then-Syntax/Gherkin-Syntax)
# Feature 1
## Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
* Given user hasn’t searched for any city
* When the user opens the app
* Then the user should see a list of all upcoming events
## Scenario 2: User should see a list of suggestions when they search for a city.
* Given the main page is open
* When user starts typing in the city textbox
* Then the user should see a list of cities (suggestions) that match what they’ve typed
## Scenario 3: User can select a city from the suggested list.
* Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
* When the user selects a city (e.g., “Berlin, Germany”) from the list
* Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city
# Feature 2
## Scenario 1: An event element is collapsed by default
* Given the user has browsed through events of a city
* When the User wants to read more details about this event and clicks on it
* Then the event element expands 
## Scenario 2: User can expand an event to see its details
* Given a user has found an event about which he wants to read more 
* When the user clicks on said element
* Then the events details expand
## Scenario 3: User can collapse an event to hide its details
* Given a user has read details about an event he wanted to know more about
* When the user clicks on said element
* Then the events details collapse
# Feature 3
## Scenario 1: When user hasn’t specified a number, 32 is the default number
* Given a user hasn’t specified a number of events to show up
* When the user does nothing
* Then the default number of shown events is 32
## Scenario 2: User can change the number of events they want to see
* Given a user wants to see a specific number of events to show up
* When the user goes to the settings and specifies a number
* Then there will be as much events shown as the user has specified 
# Feature 4 
## Scenario 1: Show cached data when there’s no internet connection
* Given the user has looked at events for a city
* When the User has no internet connection   
* Then the cached data will be shown by the app
## Scenario 2: Show error when user changes the settings (city, time range)
* Given the user has searched for details about an event in a specified city
* When User changes the setting  
* Then an error message occurs showing him that he lost connection to internet
# Feature 5
## Scenario 1: Show a chart with the number of upcoming events in each city
* Given the user hasn’t searched for a city
* When the User sees the overview of all cities and he clicks a button  
* Then a chart with all upcoming events will be shown by the app
