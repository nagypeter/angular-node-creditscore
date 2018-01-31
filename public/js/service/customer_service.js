'use strict';

angular.module('myApp').factory('CreditService', ['$http', '$q', function($http, $q){

  var REST_SERVICE_URI = './creditscoreV2';

  var factory = {
    creditScore: creditScore,
  };

  return factory;

  function creditScore(user) {
    var deferred = $q.defer();
    
    $http.post(REST_SERVICE_URI, JSON.stringify(user))
        .then(
        function (response) {
            deferred.resolve(response.data);
        },
        function(errResponse){
            console.error('Error while determine credit score');
            deferred.reject(errResponse);
        }
    );
    return deferred.promise;
  }

}]);
