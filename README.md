This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary

The goal of this test is to make a simple web app with authentication.

We have prepared the code using Create React App, but please change whatever you want (CSS files, HTML structure, JS structure...).

There are two pages on this app:

- Homepage: showing the current user information (email, first name, etc…)
- Administration page: listing all the users

Both pages must be protected by a login page, as designed below:

![Login design](design.png?raw=true)

## Task requirements

- Use semantic, accessible and valid HTML mark-up.
- Style the login page so that it looks like the design. This can be done in CSS or SCSS.
- Mock API calls and keeps a logic similar as if you were using a real API. See Example below.

```javascript
function getUsers () {
  return [{id: 1, ... }]
}
```

## Features

- Can sign in with [user@mail.com](mailto:user@mail.com) and be able to see the homepage only
- Can sign in with [admin@mail.com](mailto:admin@mail.com) and be able to see the homepage and administration page
- Can log out from the application

## Important considerations

- We are not looking for pixel-perfect design. Please just do CSS for the login page and show us your approach of styling components.
- Don’t use CSS library or grid system.
- Don’t overcomplicate the JavaScript and please don’t use unnecessary plugins.
- We recommend to do the test in ~1-2 hours depending on your level – if you want to spend more or less time on it, that’s completely up to you.

## Questions

Please edit the README file to answer the question below:

How much time did you spend on this test?

Can you explain the technical choice you made for the CSS and JavaScript?

If you had more time to spend on the test, what would you like to add to your solution?


## Submission

Please fork this repository and send us a pull request.
