class SignInFormService {
  constructor($http) {
    this.$http = $http;
  }

  login() {
    var data = {
      Username: 'andrew4336',
      Password: 'pasdasda'
    };

    return this.$http({
      url: 'http://localhost:9999/login',
      method: "POST",
      data: serialize(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => response.data);

  }
}

SignInFormService.$inject = ['$http'];

export default SignInFormService;

function serialize( obj ) {
  return '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
}
