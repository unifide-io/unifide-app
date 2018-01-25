import '/node_modules/@polymer/polymer/polymer.js';
import '/src/unifide-landing-first.js';
import '/src/unifide-landing-services.js';
import '/src/unifide-landing-photos.js';
import '/src/unifide-landing-about.js';
import '/src/unifide-landing-centerfold.js';
import '/src/unifide-landing-footer.js';
import '/node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '/node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
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
    }

  </style>

  <landing-layout>
    <unifide-landing-first></unifide-landing-first>
    <unifide-landing-services></unifide-landing-services>
    <unifide-landing-photos></unifide-landing-photos>
    <unifide-landing-about></unifide-landing-about>
    <unifide-landing-centerfold></unifide-landing-centerfold>
    <unifide-landing-footer></unifide-landing-footer>
  </landing-layout>

  `,


  is: 'unifide-landing'
});
