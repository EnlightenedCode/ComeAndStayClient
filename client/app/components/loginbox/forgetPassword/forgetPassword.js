import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forgetPasswordComponent from './forgetPassword.component';
import forgetPasswordForm from './forgetPasswordForm/forgetPasswordForm';

let forgetPasswordModule = angular.module('forgetPassword', [
  uiRouter,
  forgetPasswordForm.name
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('login.forgetPassword', {
      url: '/forgetPassword',
      template: '<forget-password></forget-password>'
    });
})
  
.component('forgetPassword', forgetPasswordComponent);

export default forgetPasswordModule;
