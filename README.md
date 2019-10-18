# Vodafone Test

This application has just two components and one service.

### app.component.ts
this is the root component and has the API access logic.

### object-display.component.ts
This component takes and object and displays its content as a list.
It has a deep display capability to display sub objects recursively. 
Defaul call stack of the application is set to 20000. So if the object 
tree goes as deep as 20000 children, the app will break.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.



## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
