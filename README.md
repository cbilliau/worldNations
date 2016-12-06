# World Nations App - React App

![screenshot](/public/assets/worldNations.png "screenshot")


## Overview

This app demonstrates the use of React in collecting, displaying and sorting collected via a RESTful API. The app displays a table containing all the countries of the world sorted by region then name. Additional data for each country is displayed upon clicking anywhere in the row for that country. Additional data displayed includes:

* Name
* alpha2Code
* Capital
* Region
* Population
* Area (in km2)
* Number of timezones
* List of languages spoken


## Design

This app was visually designed to match the sample image provided in the task's instructions. Visual design was further enhanced by inspection of the company's website and, where practical, features were copied to correspond and match the company's current UI practices.


## Tech notes

* The app is built using Node and Angular. The front-end is built using AngularJS, the back-end using NodeJS with ExpressJS as the web server and Socket.io for real-time event-based communication.

* Bootstrap was used as the front-end framework of choice.

* Socket.io is used in the server to establish event-based communication between the server and client. A 5 second interval is triggered upon page-load which increases the variable holding the number of offline devices. As the variable is changed an event is emitted to the client.

* An Angular app on the client establishes a connection with socket.io on the server. As socket.io emits data to the client, Angular binds the changed data to the view via the $apply function.

* Express is used to serve static files which include all files in the public and node_modules folders.

* This app uses a css file to provide additional styles not included with bootstrap.



### Installing

A step by step series of examples that tell you have to get a development env running.

1. Clone this repo.

2. cd into the project directory and run 'npm install'.

4. Run 'npm start' or 'node server.js'.

5. Open a browser at localhost:8080.
