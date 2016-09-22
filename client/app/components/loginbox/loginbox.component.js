import template from './loginbox.html';
import controller from './loginbox.controller';
import './loginbox.styl';

let loginboxComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default loginboxComponent;
