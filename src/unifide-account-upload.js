import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import '/node_modules/@polymer/paper-button/paper-button.js'

Polymer({
  is: 'unifide-account-upload',

  properties: {
    files: {
      type: Object,
    }

  },

  _openDialog: function(){
    this.$.uploadInput.click();
  },

  _handleFiles(e) {
    this.files = this.$.uploadInput.files;
    console.log(this.files);
    var photoFiletype = this.files[0].type.split("/").pop();
    console.log(photoFiletype);
    var photoPath = 'profilePhotos/'+firebase.auth().R+'.'+photoFiletype;
    console.log('photoPath: '+photoPath);
    var upload = storageRef.child(photoPath);

    upload.put(this.files[0]).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });

    storageRef.child(photoPath).getDownloadURL().then(function(url) {
      db.collection("users").doc(firebase.auth().currentUser.uid).update({
          photoURL: url
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    }).catch(function(error) {
      // Handle any errors
    });


  },

  _template: `
    <style>
      :host{
        display: block;
        color: #fff;
      }
      :host paper-button{
        width:100%;
        margin:0px;
      }
    </style>

    <paper-button type="button" id="photoUpload" on-tap="_openDialog">Upload</paper-button>
    <input id="uploadInput" type="file" on-change="_handleFiles" style="display: none;" />

  `,

});
