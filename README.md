

# devTinder -> Frontend 

## Tech Stack 
- React libray for building frontend
- Tailwind css for style
- React Redux ToolKit -> for store management
- React Router Dom -> for client side Routing
- bundlers -> vite

## Overall Progress
- create a scaffolding app using vite 
- remove all the uneccessary code from the app
- tailwind css configuration also done 
- initialize te project as github repo to track the code changes
- create a navbar component and several other component like feed , connection , profile , login , signup
- create a routing for my react app using react-router-dom package
- created a login page and implement logic to login user and redirect them to feed page
- create a centralised store for my components
- use react-redux and @redux-tool-kit
- congigured store -> store pass to the provider -> created a user slice and added slice to the store
- after login and login details are stored inside the store so my various component can access the store
- created a notification component showecase the notification list (50% work has done)
- create a store and slice for notification , request , connnection , feed and added them to store
- created a feed page , connection , request pages for ui
- added a logic to send connection request or to ignore user from the feed
- request pages -> after accepting or rejecting the request and update the store
- created a signup page and logic to signup new user (onboarding new user)
- fix minor bugs
  - add key to children
  - fix some ui
- E2E testing

## tasks

- make it responsive 



## Designing of the component


- Navbar 

- body -> outlet -> based on path my outlet will filled with regarding component
  - component login -> path /login
  - component signup -> path /signup
  - component feed -> path /feed
    - component feedNotification -> /feed/notification

  - component profile -> path /profile
    - component Request -> path /profile/request
    - component connection -> path /profile/connection
  - component connection -> path /connection

- footer

