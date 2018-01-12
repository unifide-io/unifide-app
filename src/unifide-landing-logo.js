import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'unifide-landing-logo',

  properties: {

    logoSource: {
      type: String
    },

    logoSize: {
      type: String
    }

  },

  observers: [

  ],

  _template: `
    <style>
      img{
        width: [[logoSize]];
        height: auto;
      }
    </style>
    <img src="[[logoSource]]">
  `,

});
