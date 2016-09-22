import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forgetPasswordFormComponent from './forgetPasswordForm.component';

let forgetPasswordFormModule = angular.module('forgetPasswordForm', [
  uiRouter
])

.component('forgetPasswordForm', forgetPasswordFormComponent);

export default forgetPasswordFormModule;
