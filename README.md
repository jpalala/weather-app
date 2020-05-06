# WeatherApp

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3. It has since been updated to angular 8.2.6.


TODO: deploy a working app on heroku


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy to Cloud Foundry
Login using the Cloud Foundry CLI

`cf login -a api.run.pivotal.io`

Change directory to `dist/weather-app`

`cf push gg-weather-app -b staticfile_buildpack`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
