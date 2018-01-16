import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import '/node_modules/@polymer/app-route/app-route.js';
import '/node_modules/@polymer/app-route/app-location.js';
import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js';
import '/node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '/node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '/node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';

import '/node_modules/@polymer/iron-pages/iron-pages.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js'

import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';

import '/node_modules/@polymer/platinum-sw/platinum-sw-elements.js';

import '/src/unifide-landing.js';
import '/src/unifide-login.js';
import '/src/unifide-404.js';

Polymer({
  is: 'unifide-app',

  properties:{

    isAnonymous: {
      type: Boolean,
      reflectToAttribute: true,
      observer: '_notifyIsAnonymous'
    },
    route: {
      type: String,
    },
    prop: {
      type: String,
      value: 'test'
    }
  },
  observers: [
    '_routePageChanged(routeData.page)',
    '_checkUserStatus()',
    '_routeIfLoggedIn()',
    '_updateIsAnonymous()',
    '_forceLogin()'
  ],



  _routePageChanged:function (page) {
    // If no page was found in the route data, page will be an empty string.
    // Default to 'view1' in that case.
    this.page = page || 'landing';

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  },

  _pageChanged:function (page) {
    // Load page import on demand. Show 404 page if fails
    var resolvedPageUrl = this.resolveUrl('my-' + page + '.html');
    Polymer.importHref(
        resolvedPageUrl,
        null,
        this._showPage404.bind(this),
        true);
  },

  _showPage404:function() {
    this.page = 'view404';
  },

  _notifyIsAnonymous: function(){
    console.log(this.isAnonymous);
  },
  _updateIsAnonymous: function(){
    if(firebase.auth().R == null){
      unifideApp.isAnonymous = true;
    }else{
      unifideApp.isAnonymous = false;
    };
  },

  _forceLogin: function() {
    if(firebase.auth().R == null){
      unifideApp.isAnonymous = true;
    }else{
      unifideApp.isAnonymous = false;
    };

    if(unifideApp.isAnonymous == true){

      console.log("You're not logged in!");
      if( unifideApp.pageData.page == " "){

        console.log("You're at landing");

      }if(unifideApp.pageData.page == "login") {

        console.log("You're at login");

      }else{
        console.log("You're in elsewhere!");
        window.location = "/login";
      }

    }else{
      console.log("you're logged in!");
    }

  },

  _template: `

  <style>
    :host{
      display: block;
      margin: 0;
      font-family: 'Nunito';
      height:100vh;
      width:100vw;

    }
    app-header {
      display: block;
      @apply --layout-fixed-top;
      color: #fff;
      background-color:#f44336;
    }
    a {
      color: #fff;
    }
    iron-pages{
      padding-top: 64px;
    }
    .centered-container {
      margin-top: 40px;
      max-width: 1000px;
      margin: 0 auto;
    }
  </style>
  <platinum-sw-register
        auto-register
        skip-waiting
        clients-claim
        reload-on-install
        href="../sw-import.js">
    <platinum-sw-cache
        default-cache-strategy="networkFirst">
    </platinum-sw-cache>
  </platinum-sw-register>

  <app-location route="{{route}}"></app-location>
    <app-route  route="{{route}}"
                pattern="/:page"
                data="{{pageData}}"
                active="{{pageActive}}"
                tail="{{subroute}}"></app-route>

  <app-drawer-layout>
    <app-header-layout>
      <app-header reveals>
        <app-toolbar>
          <div main-title>Unifide</div>
          <a href="/"><paper-icon-button icon="power-settings-new"></paper-icon-button></a>
        </app-toolbar>
      </app-header>
      <iron-pages
            selected="{{pageData.page}}"
            attr-for-selected="data-page"
            fallback-selection="view404"
            role="main">

        <unifide-landing data-page=""></unifide-landing>
        <unifide-login id="unifide-login" data-page="login"></unifide-login>
        <unifide-dashboard data-page="dashboard"></unifide-dashboard>
        <unifide-404 data-page="view404"></unifide-404>
      </iron-pages>
    </app-header-layout>
  </app-drawer-layout>

  `



});
