import ForgetPasswordFormModule from './forgetPasswordForm'
import ForgetPasswordFormController from './forgetPasswordForm.controller';
import ForgetPasswordFormComponent from './forgetPasswordForm.component';
import ForgetPasswordFormTemplate from './forgetPasswordForm.html';

describe('ForgetPasswordForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ForgetPasswordFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForgetPasswordFormController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ForgetPasswordFormTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ForgetPasswordFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ForgetPasswordFormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ForgetPasswordFormController);
      });
  });
});
