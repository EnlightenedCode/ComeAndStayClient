import angular from 'angular';
import Home from './home/home';
//import About from './about/about';
import Login from './login/login';

let viewModule = angular.module('app.views', [
  Home.name,
  Login.name
]);

export default viewModule;
