import '/node_modules/@polymer/polymer/polymer.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({
  properties:{

  },
  _template: `
  <style>
    :host{
      display: block;
      margin: 0;
      font-family: 'Inconsolata';
      background-image: url('/img/unifide-landing-centerfold-01.jpg');
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
      min-height: 960px;
    }

  </style>


  `,


  is: 'unifide-landing-centerfold'
});
