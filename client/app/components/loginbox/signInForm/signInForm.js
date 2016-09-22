import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signInFormComponent from './signInForm.component';
import signinFormService from './signInForm.service';

let signInFormModule = angular.module('signInForm', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('login.signinform', {
        url: '/signinform',
        template: '<sign-in-form></sign-in-form>'
      });
  })
.service('SignInFormService', signinFormService)
.component('signInForm', signInFormComponent);

export default signInFormModule;
