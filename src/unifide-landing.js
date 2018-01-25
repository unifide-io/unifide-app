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

import '/src/unifide-landing-first.js';
import '/src/unifide-landing-services.js';
import '/src/unifide-landing-photos.js';
import '/src/unifide-landing-about.js';
import '/src/unifide-landing-centerfold.js';
import '/src/unifide-landing-footer.js';


Polymer({
  properties:{

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
  <app-toolbar>
    <div main-title>Unifide</div>
    <a href="/login"><paper-icon-button icon="power-settings-new"></paper-icon-button></a>
  </app-toolbar>
  <landing-layout>
    <unifide-landing-first></unifide-landing-first>
    <unifide-landing-services></unifide-landing-services>
    <unifide-landing-photos></unifide-landing-photos>
    <unifide-landing-about></unifide-landing-about>
    <unifide-landing-centerfold></unifide-landing-centerfold>
    <unifide-landing-footer></unifide-landing-footer>
  </landing-layout>


  <app-drawer-layout>
    <app-header-layout>
      <app-header reveals>
        <app-toolbar>
          <div main-title>Unifide</div>
          <a href="/login"><paper-icon-button icon="power-settings-new"></paper-icon-button></a>
        </app-toolbar>
      </app-header>

      <landing-layout>
        <unifide-landing-first></unifide-landing-first>
        <unifide-landing-services></unifide-landing-services>
        <unifide-landing-photos></unifide-landing-photos>
        <unifide-landing-about></unifide-landing-about>
        <unifide-landing-centerfold></unifide-landing-centerfold>
        <unifide-landing-footer></unifide-landing-footer>
      </landing-layout>

    </app-header-layout>

  </app-drawer-layout>

  `,


  is: 'unifide-landing'
});
