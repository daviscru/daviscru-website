(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory('authentication', ["firebaseUrl", "$firebaseAuth", "$firebaseObject",
      function (firebaseUrl, $firebaseAuth, $firebaseObject){
        var factory = {};

        factory.signedIn = false;

        var ref = new Firebase(firebaseUrl);
        var auth = $firebaseAuth(ref);

        factory.login = function(){
          auth.$authWithOAuthPopup("google", { scope: 'email' }).then(function(authData) {
            //everything is handled in $onAuth function below
          }).catch(function(error) {
            console.error("Authentication failed:", error);
          });
        };

        factory.logout = function(){
          factory.user.$destroy();
          auth.$unauth();
        };

        auth.$onAuth(function(authData) {
          if (authData) {
            var userRef = ref.child('users').child(authData.uid);
            factory.user = $firebaseObject(userRef);
            factory.user.name = authData.google.displayName;
            factory.user.email = authData.google.email;
            factory.user.profilePicture = authData.google.profileImageURL;
            factory.user.$save().then(function(ref) {
              factory.signedIn = true;
            }, function(error) {
              factory.signedIn = false;
            });
          } else {
            factory.signedIn = false;
          }
        });

        return factory;
      }
    ]);
})();
