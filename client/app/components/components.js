/**
 * Created by tommy on 6/27/16.
 */

import angular from 'angular';
//import Home from './home/home';
//import About from './about/about';
import Login from './loginbox/loginbox';

let componentModule = angular.module('app.components', [
  //Home.name,
  Login.name
]);

export default componentModule;
