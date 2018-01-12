import '/node_modules/@polymer/polymer/polymer.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import '/src/unifide-icons.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'unifide-landing-social',

  properties: {

    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    },
    youtube: {
      type: String
    },
    github: {
      type: String
    },
    marginTop: {
      type: String,
    },
    marginBottom: {
      type: String
    }

  },

  _template: `
    <style>
      :host{
        margin-top: [[marginTop]];
        margin-bottom: [[marginBottom]];
        display: block;
      }
      a{
        text-decoration: none;
      }
      iron-icon{
        width:32px;
        height:auto;
        margin:8px;
        color: #fff;
      }
    </style>

    <a href="[[facebook]]"><iron-icon icon="landing:facebook"></iron-icon></a>
    <a href="[[twitter]]"><iron-icon icon="landing:twitter"></iron-icon></a>
    <a href="[[instagram]]"><iron-icon icon="landing:instagram"></iron-icon></a>
    <a href="[[youtube]]"><iron-icon icon="landing:youtube"></iron-icon></a>
    <a href="[[github]]"><iron-icon icon="landing:github"></iron-icon></a>
  `,

});
