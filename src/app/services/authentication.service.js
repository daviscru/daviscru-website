(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory('authentication', ["firebaseUrl", "$firebaseAuth",
      function (firebaseUrl, $firebaseAuth){
        var factory = {};

        factory.signedIn = false;

        var ref = new Firebase(firebaseUrl);
        var auth = $firebaseAuth(ref);

        auth.$onAuth(function(authData) {
          if (authData) {
            factory.signedIn = true;
            factory.name = authData.google.displayName;
            factory.email = authData.google.email;
            factory.profilePicture = authData.google.profileImageURL;
          } else {
            factory.signedIn = false;
          }
        });

        factory.login = function(){
          auth.$authWithOAuthPopup("google", { scope: 'email' }).then(function(authData) {
            //everything is handled in $onAuth function above
          }).catch(function(error) {
            console.error("Authentication failed:", error);
          });
        };

        factory.logout = function(){
          auth.$unauth();
        };

        return factory;
      }
    ]);
})();
