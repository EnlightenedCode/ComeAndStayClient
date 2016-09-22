
class SignInFormController {
  constructor(SignInFormService, $state) {
    'ngInject';
    this.signInFormService = SignInFormService;
    this.name = 'signInForm';
    this.state = $state;
  }

  submitLogin() {
    var controllerThis = this;
    return this.signInFormService.login().then(function(res){
      console.log(res);
      console.log('logged in successfully');
      controllerThis.state.go('home');
    });
  }
}

export default SignInFormController;
