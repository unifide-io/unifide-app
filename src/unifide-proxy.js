import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import '/node_modules/@polymer/iron-icons/iron-icons.js';

// Import Unifide Components



Polymer({
  is: 'unifide-proxy',
  properties: {
    subdomain: {
      type: String,
    },

  },
  

  _template: `
    <style>
      :host{
        display: block;
      }

    </style>

    `,

});
