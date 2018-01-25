import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import '/node_modules/@polymer/iron-icons/iron-icons.js';

// Import Unifide Components
import '/src/unifide-icons.js';
import '/src/unifide-header-user.js';
import '/src/unifide-header-anonymous.js';



Polymer({
  is: 'unifide-header',

  properties: {
    isAnonymous: {
      type: Boolean,
      reflectToAttribute: true
    },
    headerTitle: {
      type: String,
    }


  },
  observers: [
    'echoHeader(isAnonymous)'
  ],
  echoHeader: function(isAnonymous){
    if (isAnonymous){
      console.log('user: ' + isAnonymous);
    } else {
      console.log('user: ' + isAnonymous);
    }
  },
  _template: `
    <style>
      :host{
        display: block;
        color: #fff;
      }
      [hidden]{
        display: none;
      }

    </style>
    <unifide-header-anonymous hidden$="[[!isAnonymous]]"></unifide-header-anonymous>

    <unifide-header-user hidden$="[[isAnonymous]]" header-title="[[headerTitle]]"></unifide-header-user>
    `,

});
