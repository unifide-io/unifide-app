import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import '/node_modules/@polymer/iron-pages/iron-pages.js';

// import '/src/unifide-proxy.js';
import '/src/unifide-landing.js';
import '/src/unifide-app.js';

// Import Unifide Components

Polymer({
  is: 'unifide-reverse-proxy',

  properties: {
    isAnonymous: {
      type: Boolean,
    },
    subdomain:{
      type: String,
    },
    domains: {
      type: Array,
      value: [ "app", "login", "dashboard"],
    },

  },

  observers: [
    // 'render(_light)',
    '_noShadow()',
    '_checkIsAnonymous()',
    '_getSubdomain()',


  ],

  // render: function(inner) {
  //   this.innerHTML = inner;
  // },

  _checkIsAnonymous: function(){
    if (firebase.auth().R === null){
      this.isAnonymous = true;
    } else {
      this.isAnonymous = false;
    }
  },

  _getSubdomain: function(){
    if (/^(.*?)\./.exec(window.location.hostname) === null){
      this.subdomain = ''
    } else {
      this.subdomain = /^(.*?)\./.exec(window.location.hostname)[1];
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

    <div id="debug" style="display:none">
      <div>isAnonymous: [[this.isAnonymous]]</div>
      <div>subdomain: [[subdomain]]</div>
      <div>domains: [[domains]]</div>
    </div>

    <iron-pages
          selected="{{subdomain}}"
          attr-for-selected="current-domain"
          fallback-selection="view404"
          role="main">


      <unifide-landing current-domain=""></unifide-landing>
      <unifide-app current-domain="app"></unifide-app>
      <div current-domain="admin">Admin Subdomain</div>
      <div current-domain="help">help Subdomain</div>
    </iron-pages>



    `,

});
