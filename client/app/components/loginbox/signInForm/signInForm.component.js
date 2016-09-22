import template from './signInForm.html';
import controller from './signInForm.controller';
import './signInForm.styl';

let signInFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default signInFormComponent;
