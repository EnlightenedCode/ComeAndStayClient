import angular from 'angular';
import uiRouter from 'angular-ui-router';
import initialSignupComponent from './initialSignup.component';

let initialSignupModule = angular.module('initialSignup', [
  uiRouter
])


  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('login.initialSignup', {
        url: '/initialSignup',
        template: '<initial-signup></initial-signup>'
      });
  })

.component('initialSignup', initialSignupComponent);

export default initialSignupModule;
