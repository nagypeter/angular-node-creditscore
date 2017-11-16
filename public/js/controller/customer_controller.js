'use strict';

angular.module('myApp').controller('CreditController', ['$scope', 'CreditService', function($scope, CreditService) {
  var self = this;
  self.user={id:null,firstname:"",lastname:"",dateofbirth:"",ssn:"", score:""};
  self.score='';

  self.submit = submit;
  self.reset = reset;


  function creditScore(user){
    CreditService.creditScore(user)
      .then(
        function(d) {
          self.user.score = d.score;
        },
        function(errResponse){
          console.error('Error while getting credit score');
        }
      );
  }

  function submit() {
    console.log('Getting ', self.user);
     creditScore(self.user);
     //reset();
  }


  function reset(){
    self.user={id:null,firstname:'',lastname:'',dateofbirth:'',ssn:'', score:''};
    $scope.myForm.$setPristine(); //reset Form
  }

}]);
