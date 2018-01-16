import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import '/node_modules/@polymer/paper-button/paper-button.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/node_modules/@polymer/paper-card/paper-card.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/node_modules/@polymer/paper-styles/paper-styles.js';
import '/src/unifide-icons.js';


Polymer({
  is: 'unifide-login',

  properties: {
    userEmail:{
      type: String
    },
    userPass:{
      type: String
    },
    userStatus: {
      type: String,
      notify: true,
    }
  },
  redirectAfterLogin: function(destinationIn){

  },
  redirectAfterLogout: function(destinationOut){
    var userStatus = firebase.auth().currentUser;
    if (userStatus == null){
      console.log("You're logged out!");
      window.location = destinationOut;
    };
  },
  _login: function(){
    var email = this.userEmail;
    var password = this.userPass;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        unifideApp.isAnonymous = false;
        window.location = "/dashboard";
      }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  },

  _logout: function(){

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      unifideApp.isAnonymous = true;
    }).catch(function(error) {
      // An error happened.
    });


  },
  setIsAnonymous: function(){
    console.log(unifideApp.isAnonymous);
  },


  _register: function(){
    var email = this.userEmail;
    var password = this.userPass;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
    if (firebase.auth().currentUser == null){
      console.log("You're logged in!");
      window.location = '/dashboard';
    };
  },
  _googleSingleSignOn: function(){
    var redirect = this.redirectAfterLogin();
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    }).then
    if (firebase.auth().currentUser == null){
      console.log("You're logged in!");
      window.location = '/dashboard';
    };

  },
  _facebookSingleSignOn: function(){

    console.log('twitter');

  },
  _twitterSingleSignOn: function(){

    console.log('twitter');

  },
  _githubSingleSignOn: function(){

    console.log('github');

  },
  _template: `
    <style>
      :host{
        display: block;
        margin: 0;
        font-family: 'Inconsolata';
        background-color: ;
      }
      h2{
        margin: 0;
        font-family: 'Inconsolata';

      }
      paper-input iron-icon{
        margin-right: 8px;
      }
      paper-button{
        margin-top: 24px;
        margin-bottom: 12px;
      }
      .centered-container {
        display: block;
        margin-top: 40px;
        max-width: 1000px;
        margin: 0 auto;
      }
      .login-card{
        padding: 24px;
      }
    </style>
    <div>
      <paper-card class="centered-container login-card">
        <h2>Unifide Login</h2>

        <paper-input label="email" value="{{userEmail}}">
          <iron-icon icon="mail" slot="prefix"></iron-icon>
        </paper-input>
        <paper-input label="password" type="password" value="{{userPass}}">
          <iron-icon icon="https" slot="prefix"></iron-icon>
        </paper-input>
        <div>
        <paper-button raised on-click="_login"><iron-icon icon="icons:lock-open"></iron-icon>login</paper-button>
        <paper-button raised on-click="_register"><iron-icon icon="icons:create"></iron-icon>register</paper-button>
        <paper-button raised on-click="_googleSingleSignOn"><iron-icon icon="landing:twitter"></iron-icon>social</paper-button>

        </div>

      </paper-card
    </div>
  `,

});
