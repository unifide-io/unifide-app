import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';

import '/node_modules/@polymer/iron-icons/iron-icons.js';

import '/src/unifide-icons.js';



Polymer({
  is: 'unifide-header-user',

  properties: {
    headerTitle: {
      type: String,
    }
  },
  _toggleMenu: function() {
    var drawerLayout = unifideApp.shadowRoot.getElementById('drawerLayout');

    if (drawerLayout.forceNarrow || !drawerLayout.narrow) {
      drawerLayout.forceNarrow = !drawerLayout.forceNarrow;
    } else {
      drawerLayout.querySelector('iron-pages').querySelector('#drawer')

    }
  },

  _template: `
    <style>
      :host{
        display: block;
        color: #fff;
      }
      .menu-button{
        margin-right: 16px;
      }
      .main-title{
        text-transform: capitalize;
      }
    </style>

    <app-toolbar>
      <iron-icon class="menu-button" icon="menu" on-tap="_toggleMenu"></iron-icon>
      <div class="main-title" main-title>[[headerTitle]]</div>
      <a href="/login"><paper-icon-button icon="power-settings-new"></paper-icon-button></a>
    </app-toolbar>



    `,

});
