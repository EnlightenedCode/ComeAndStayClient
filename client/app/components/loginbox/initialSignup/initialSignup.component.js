import template from './initialSignup.html';
import controller from './initialSignup.controller';
import './initialSignup.styl';

let initialSignupComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default initialSignupComponent;
