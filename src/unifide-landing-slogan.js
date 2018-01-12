import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'unifide-landing-slogan',

  properties: {

    landingSlogan: {
      type: String
    }

  },

  observers: [
    '_render(landingSlogan)'
  ],

  ready: function() {
    this.style.display = 'block';
    this.style.textAlign = 'center';
    this.style.color = '#fff';
  },
  
  _render: function() {
    this.innerHTML = '<h2>'+this.landingSlogan+'</h2>';

  }

});
