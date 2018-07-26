# Burgers!!!
## What it is
A basic web app using node, mysql, express, and handlebars to create a "restaurant" where customers can input the burger they would like to eat. When a customer inputs a burger, it shows in a queue of burgers waiting to be devoured. You can then devour your burger. Once devoured, you of course need to digest it. 

Deployed app: https://nameless-bastion-25401.herokuapp.com/

## How it works
Using an ORM and the MVC model: 

* CREATES a burger using an ajax post to ad the new burger to the database
* READS all burgers and uses handlebars to apply them to the proper place in the DOM
* UPDATES the state of the burger when it's devoured
* DELETES the burger from the database when it's digested

API routes were created for the POST, PUT, and DELETE ajax calls. PUT and DELETE use the same route, but use different functions within the ORM and controllers to execute different tasks.

## Screenshot
![screenshot](/public/assets/images/screenshot.jpg)