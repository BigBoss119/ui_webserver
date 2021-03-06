# ui_webserver

User Information App - Web Server

Create a Node.js application that is the beginning of a user management system. Your users are all saved in a "users.json" file, and you can currently do the following:
- search for users
- add new users to your users file.
- get your starter file here: users.jsonView in a new window

Part 0
Create one route:
- route 1: renders a page that displays all your users.

Part 1
Create two more routes:
- route 2: renders a page that displays a form which is your search bar.
- route 3: takes in the post request from your form, then displays matching users on a new page. Users should be matched based on whether either their first or last name contains the input string.

Part 2
Create two more routes:
- route 4: renders a page with a form with three inputs on it (first name, last name, and email) that allows you to add new users to the users.json file.
- route 5: takes in the post request from the 'create user' form, then adds the user to the users.json file. Once that is complete, redirects to the route that displays all your users (from part 0).



-AJAX ASSIGNMENT

Starting with your previous website, create a new branch to preserve the old site.
Your site has a form on it that acts like a search bar. When someone types into the search bar, it should retrieve a list of matching users and list them by name on the same page, similar to how the search bars on airbnb.com or hipmunk.com function.

Once the user submits the search bar, it should exhibit the same behavior as the previous assignment, i.e. display a new page with the search results.

Hints:

use https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf (Links to an external site.)Links to an external site.
you cannot send or render a response more than once per request.
you must find a way to capture whenever the user's input changes in the search bar. This will trigger your Ajax request to your server.

Part 1: Autocomplete
Modify your form so that every time the user enters a key, it makes an AJAX call that populates the search results.
Do this work in a git branch called "autocomplete". Then, merge this branch into master with a pull request.

Part 2: Bandwidth optimization
Modify your form again so that AJAX requests happen at most once every 300 milliseconds.
Do this work in a git branch called "bandwidth-optimization". Then, merge this branch into master with a pull request.
