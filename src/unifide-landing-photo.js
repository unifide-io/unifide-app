import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({
  properties:{
    imgUrl: {
      type: String
    }
  },
  _template: `
  <style>
    :host{
      margin: 0;
      font-family: '';
      background-image: url('[[imgUrl]]');
      background-size: cover;
      background-position: center center;
      height: auto;
    }
    :host:before{
    	content: "";
    	display: block;
    	padding-top: 100%; 	/* initial ratio of 1:1*/
    }
  </style>

  `,

  is: 'unifide-landing-photo'
});
