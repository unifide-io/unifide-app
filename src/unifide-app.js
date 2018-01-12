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

Polymer({
  is: 'unifide-app',

  properties:{

    signedIn: {
      type: Boolean,
      value: false
    },
    route: {
      type: String
    },
    prop: {
      type: String,
      value: 'test'
    }
  },
  observers: [
    '_routePageChanged(routeData.page)',
    '_checkUserStatus()'
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

  _checkStatus: function(){
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        window.location = '/'; //After successful login, user will be redirected to home.html
      }
    });
  },

  _template: `

  <style>
    :host{
      display: block;
      margin: 0;
      font-family: 'Nunito';
      background-image: url('/img/unifide-landing-tunnel.gif');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
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
        <unifide-dashboard data-page="dashboard"></unifide-social>
        <unifide-404 data-page="view404"></my-view404>
      </iron-pages>
    </app-header-layout>
  </app-drawer-layout>

  `



});
