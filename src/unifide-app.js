import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import '/node_modules/@polymer/app-route/app-route.js';
import '/node_modules/@polymer/app-route/app-location.js';
import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js';
import '/node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '/node_modules/@polymer/app-layout/app-drawer/app-drawer.js';
import '/node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '/node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';

import '/node_modules/@polymer/iron-pages/iron-pages.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js'

import '/node_modules/@polymer/paper-item/paper-item.js';
import '/node_modules/@polymer/paper-item/paper-icon-item.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';

import '/node_modules/@polymer/platinum-sw/platinum-sw-elements.js';

import '/src/unifide-splash.js';
import '/src/unifide-404.js';
import '/src/unifide-login.js';
import '/src/unifide-dashboard.js';
import '/src/unifide-games.js';
import '/src/unifide-account.js';

Polymer({
  is: 'unifide-app',


  properties:{

    currentUser: {
      type: Object,
      reflectToAttribute: true,
      value:{
        userName: '',
        firstName: '',
        lastName: '',
        photoURL: '',

      }

    },
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
    },
    rerouteExceptions:{
      type: Array,
      value: ['login', 'view404']
    }
  },

  observers: [
    '_routePageChanged(routeData.page)',
    '_updateIsAnonymous()',
    '_forceLogin()',
    'getUser()',
  ],



  _routePageChanged:function (page) {
    // If no page was found in the route data, page will be an empty string.
    // Default to 'view1' in that case.
    this.page = page || 'login';

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
    var drawerLayout = unifideApp.shadowRoot.querySelector('#drawerLayout');

    if(firebase.auth().R === null){
      this.isAnonymous = true;
      drawerLayout.forceNarrow = true;
    }else{
      this.isAnonymous = false;

    };
  },

  _forceLogin: function() {
    if (this.isAnonymous === true){
      console.log('Not logged in');
      if (this.pageData.page === 'view404') {
        console.log('404');
      } else if (this.rerouteExceptions.indexOf(this.pageData.page)) {
        console.log(this.rerouteExceptions);
        window.location = 'login';
      }
    }
  },

  signOut: function() {
    console.log(this.shadowRoot.querySelector('#drawerLayout').toggle());
  },

  toggleMenu: function(){

    var drawerLayout = unifideApp.shadowRoot.querySelector('#drawerLayout');
    if (this.isAnonymous === false){
      if (drawerLayout.forceNarrow || !drawerLayout.narrow) {
        drawerLayout.forceNarrow = !drawerLayout.forceNarrow;
      } else {
        drawerLayout.drawer.toggle();
      }
    };

  },
  getUser: function(){
    var userID = firebase.auth().R;
    var userRef = db.collection("users").doc(userID);

    userRef.get().then(function(doc) {
        if (doc.exists) {
            console.log(userID);
            console.log(doc.data().userName);
            unifideApp.currentUser = doc.data();

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  },

  _template: `
  <style>
    :host{
      display: block;
      margin: 0;
      font-family: 'Nunito';
      height:100vh;
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
      padding-top: 8px;
    }
    .centered-container {
      margin-top: 40px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .menu-button{
      margin-right:16px;
    }
    app-drawer-layout {
      --app-drawer-layout-content-transition: margin 0.2s;
    }

    app-drawer {
      --app-drawer-content-container: {
        background-color: none;
      }
    }
    .drawer-content {
      margin-top: 80px;
      height: calc(100% - 80px);
      overflow: auto;
      color: #fff;
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

  <app-header-layout>

    <app-header fixed effects="waterfall" slot="header">
      <app-toolbar>
        <iron-icon class="menu-button" icon="menu" on-tap="toggleMenu"></iron-icon>
        <div class="main-title" main-title>[[pageData.page]]</div>
        <paper-icon-button on-tap="signOut" icon="power-settings-new"></paper-icon-button>

      </app-toolbar>
    </app-header>

    <app-drawer-layout id="drawerLayout">

      <app-drawer slot="drawer">
        <div class="drawer-content">
          <a href="/dashboard">
            <paper-icon-item>
              <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Home</span>
            </paper-icon-item>
          </a>
          <a href="/public">
            <paper-icon-item>
              <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Public</span>
            </paper-icon-item>
          </a>
          <a href="/rooms">
            <paper-icon-item>
              <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Rooms</span>
            </paper-icon-item>
          </a>
          <a href="/games">
            <paper-icon-item>
              <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Games</span>
            </paper-icon-item>
          </a>
          <a href="/admin">
            <paper-icon-item>
              <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Admin</span>
            </paper-icon-item>
          </a>
          <a href="/account">
            <paper-icon-item>
              <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Account</span>
            </paper-icon-item>
          </a>
        </div>
      </app-drawer>

      <iron-pages
            selected="{{pageData.page}}"
            attr-for-selected="data-page"
            fallback-selection="view404"
            role="main">
        <unifide-login data-page="login"></unifide-login>
        <unifide-dashboard data-page="dashboard"></unifide-dashboard>
        <unifide-404 data-page="view404"></unifide-404>

        <unifide-games data-page="games"></unifide-games>
        <unifide-account id="unifideAccount" data-page="account" current-user="{{currentUser}}"></unifide-account>
      </iron-pages>

    </app-drawer-layout>

  </app-header-layout>

  `



});
