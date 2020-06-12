## Holiday Road Team Lovelace

A website to allow a user to create a trip itinerary starting in Nashville, TN and ending at a National Park of their choosing. The user can also select a restaurant and attraction pit stop along the way.

## Team Lovelace

* Anthony Johnson
* Amanda King
* Patrick Murphy
* James Su-Shum

## Installation

Steps to get started:
1. ```git clone git@github.com:nss-day-cohort-41/Holiday-Road-Lovelace.git```
2. ```cd``` into the directory it creates.
3. ```mkdir api```
4. ```touch api/db.json```
5. ```json-server-p 8088 w- db.json```
6. Open localhost:8088 in browser.
7. Open new terminal window.
8. ```cd``` in directory created.
9. ```serve```
10. Open localhost:5000 in browser.

## Overview

This app is an easy to use trip creator allowing our user to create a trip starting in Nashville, TN that will take them to any National Park in the U.S. When the user accesses the site they will begin at "Start Your Adventure Here" to select a state they want to go to, then a drop down of available parks in that state becomes available. Once a park is selected, the user can then choose an attraction, and restaurant as pit stops. The user is given preview options, and can select a "Details" button. If a details button is chosen, the user is able to see a description of the park, restaurant, or attraction chosen. The user has the option to name and save the trip once details have been chosen. As soon as a park is chosen the user can see the 5 day forecast, and also a map with detailed directions for the trip. The user is able to see any trips they have saved in the top right of the page.

## Technologies Used

This project utilizes the following:

* [HTML](https://www.w3schools.com/html/default.asp)
* [CSS](https://www.w3schools.com/css/default.asp)
* [JavaScript](https://www.w3schools.com/js/)


## APIS and Databases Utilized

This project was made possible from data made available by:

* [National Park Service](https://www.nps.gov/subjects/digital/nps-data-api.htm)
* [Open Weather Map](https://openweathermap.org/api)
* GraphHopper
* [Restaurants](http://holidayroad.nss.team/eateries)
* [Attractions](http://holidayroad.nss.team/bizarreries)


## External Libraries

We utilized the following external libraries:

* [Leaflet JS](https://leafletjs.com/
)


## Skills Utilized

We utilized all skills and concepts learned up to this point in our time here at NSS, including:

1. Modular Code
2. Semantic HTML
3. JavaScript: functions, objects, arrays
4. Persistent data storage with JSON Server
5. Scrum workflow
6. CSS Styling
7. API calls with: POST, GET, FETCH
8. [The power of friendship](https://www.youtube.com/watch?v=oHg5SJYRHA0)