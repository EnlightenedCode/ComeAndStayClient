import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginboxComponent from './loginbox.component';
import forgetPassword from './forgetPassword/forgetPassword';
import signinForm from './signInForm/signInForm';
import initialSignup from './initialSignup/initialSignup';

let loginboxModule = angular.module('loginbox', [
  uiRouter,
  forgetPassword.name,
  signinForm.name,
  initialSignup.name
])
.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('login.signin', {
      url: '/signin',
      template: '<loginbox></loginbox>'
    });
})
.component('loginbox', loginboxComponent);

export default loginboxModule;
