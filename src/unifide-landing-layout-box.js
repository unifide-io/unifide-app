import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'unifide-landing-layout-box',

  properties: {

    height: {
      type: Number,
      value: 128
    },
    paddingTop: {
      type: String,
    },
    paddingBottom: {
      type: String,
    },
    backgroundColor:{
      type: String
    }

  },

  observers: [
    '_render()'
  ],

  ready: function() {
    this.style.display = 'block';
    this.style.textAlign = 'center';
    this.style.paddingTop = this.paddingTop;
    this.style.paddingBottom = this.paddingBottom;
    this.style.backgroundColor = this.backgroundColor;
  },

  _render: function() {

  }

});
