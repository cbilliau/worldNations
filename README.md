# World Nations App - React App

![screenshot](/public/assets/WorldNations.png "screenshot")


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

This app was visually designed to complete the exercise as given while being visually pleasant convey data.


## Tech notes

The app is built using the Facebook Incubator for React. Information specific to the use of and adaptation of the incubator can be found at the link in the credits section below.

The app's functionality is based around the [*component pattern*](http://reactpatterns.com/#container-component). The basis of this patter is that the container does data fetching and then renders its corresponding sub-components. A very well written of the component pattern can be found [here](https://medium.com/@learnreact/container-components-c0e67432e005#.jm3h1gm7e).

Sorting functions were taken out of components and placed in there own modules inside the *utils* folder under "src". These modules now able to be called into any component as needed.


### Installing

A step by step series of examples that tell you have to get a development env running.

1. Clone this repo.

2. cd into the project directory and run 'npm install'.

4. Run 'npm start'.

5. Browser will automatically open to localhost:3000.


### Credits

- REST Countries https://restcountries.eu/

- Facebook Incubator https://github.com/facebookincubator/create-react-app
