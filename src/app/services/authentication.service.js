(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory('authentication', ["$log", "envService", "$firebaseAuth", "$firebaseObject",
      function ($log, envService, $firebaseAuth, $firebaseObject){
        var factory = {};

        factory.signedIn = false;

        var ref = new Firebase(envService.read('firebaseUrl'));
        var auth = $firebaseAuth(ref);

        factory.login = function(){
          auth.$authWithOAuthPopup("google", { scope: 'email' }).then(function() {
            //everything is handled in $onAuth function below
          }).catch(function(error) {
            $log.error("Authentication failed:", error);
          });
        };

        factory.logout = function(){
          factory.user.$destroy();
          auth.$unauth();
        };

        auth.$onAuth(function(authData) {
          if (authData) {
            var userRef = ref.child('users').child(authData.uid);
            factory.user = new User(userRef);
            factory.user.$loaded().then(function() {
              factory.user.name = authData.google.displayName;
              factory.user.email = authData.google.email;
              factory.user.profilePicture = authData.google.profileImageURL;
              factory.user.$save().then(function() {
                factory.signedIn = true;
              }, function (error) {
                $log.error("Failed to save user data to Firebase:", error);
                factory.signedIn = false;
              });
            });
          } else {
            factory.signedIn = false;
          }
        });

        var User = $firebaseObject.$extend({
          isAdmin: function() {
            return this.role === 'admin';
          }
        });

        return factory;
      }
    ]);
})();
