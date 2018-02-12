import '/node_modules/@polymer/polymer/polymer.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';

import '/node_modules/@polymer/paper-input/paper-input.js';
import '/node_modules/@polymer/paper-button/paper-button.js';

import '/src/unifide-icons.js';
import '/src/unifide-account-upload.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'unifide-account',

  properties: {
    currentUser:{
      type: Object,
      reflectToAttribute: true,

    },
    test:{
      type: String,
      value: "This is a test",
    }

  },

  observers: [
    'getUser()',
  ],

  getUser: function(){

  },

  _updateAccount: function(){
    var profilePhoto = this.$.profilePhoto;

    db.collection("users").doc(firebase.auth().currentUser.uid).set({
        userName: this.currentUser.userName,
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        photoURL: this.currentUser.photoURL
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    if(profilePhoto != null){
      console.log('There\'s a photo!');
    }else {
      console.log('No Photo.');
    }

  },

  _template: `
    <style>
      :host{
        display: block;
        color: #fff;
      }
      paper-input{
        --paper-input-container-color: #fff;
        --paper-input-container-focus-color: #f44336;
        --paper-input-container-invalid-color: green;
        --paper-input-container-input-color: #FFF;
      }
      .user-icon{
        width:128px;
        text-align:center;
        float:left;
        margin-right:16px;
      }
      .user-icon paper-button{
        width:100%;
        margin:0px;
      }
      .user-icon img{
        width:100%;
        height:auto;
      }
      .user-info{
        float:left;
      }
    </style>
    <div>
      <h2>Account</h2>
      <div class="user-icon">
        <img src="{{currentUser.photoURL}}">
        <unifide-account-upload id=profilePhoto></unifide-account-upload>
      </div>
      <dic class="user-info">
        <paper-input always-float-label label="Display Name" value="{{currentUser.userName}}"></paper-input>
        <paper-input always-float-label label="First Name" value="{{currentUser.firstName}}"></paper-input>
        <paper-input always-float-label label="Last Name" value="{{currentUser.lastName}}"></paper-input>
      </div>
      <paper-button on-tap="_updateAccount">save</paper-button>
    </div>
  `,

});
