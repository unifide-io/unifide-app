import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '/node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';


import '/node_modules/@polymer/iron-icons/iron-icons.js';

import '/src/unifide-icons.js';



Polymer({
  is: 'unifide-header-anonymous',

  properties: {


  },

  _template: `
    <style>
      :host{
        display: block;
        color: #fff;
      }
      app-header {
        display: block;
        @apply --layout-fixed-top;
        color: #fff;
        background-color:#f44336;
      }
    </style>

    <app-toolbar>
      <div main-title>Unifide</div>
      <a href="/login"><paper-icon-button icon="power-settings-new"></paper-icon-button></a>
    </app-toolbar>
    `,

});
