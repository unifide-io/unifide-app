import '/node_modules/@polymer/polymer/polymer.js';
import '/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '/node_modules/@polymer/app-layout/app-grid/app-grid-style.js';
import '/src/unifide-landing-logo.js';
import '/src/unifide-landing-social.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({
  properties:{
    name: {
      type: String,
      value: 'nick'
    },
  },
  _template: `
  <style>
    :host{
      display: block;
      color:#fff;
      font-family: 'Nunito';
      padding:64px 0;
      background-color: rgba(36, 41, 47, 1);

    }

    :host .centered-container {
      margin-top: 40px;
      max-width: 1000px;
      margin: 0 auto;
      -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
    }
    :host a{
      color: #fff;
    }

    :host a iron-icon{
      width:32px;
      height:auto;
      color:#fff;
      margin:8px;
    }
    :host .footer-social{
      margin-bottom:48px;
    }
    :host .unifide-company{
      margin-bottom: 32px;
    }
    :host unifide-landing-logo{
      display: inline-block;
      max-width: 128px;
      margin: 0;
    }
    :host .unifide-name {
      display: inline-block;
      font-size: 64px;
      max-width: 256px;
      color: #fff;
      line-height: 64px;
      margin: 36px 0 0 32px;
      vertical-align: top;
    }
  </style>
  <unifide-landing-layout-box padding-top="" padding-bottom="" class="centered-container">
    <div class="unifide-company centered-container">
      <unifide-landing-logo logo-source="/img/unifide-logo.png" logo-size="128px"></unifide-landing-logo>
      <div class="unifide-name">Unifide</div>
    </div>
    <unifide-landing-social margin-top="24px"
                            margin-bottom="48px" 
                            facebook="http://facebook.com/unifide"
                            twitter="http://twitter.com/unifide"
                            instagram="http://instagr.am/unifide"
                            github="http://github.com/unifide-io"
                            youtube="https://www.youtube.com/channel/UCozPZb3HDV959i-ygcQaNAw">
    </unifide-landing-social>


    <div>© 2017 by Unifide Technologies Inc. Proudly created with Polymer.</div>
  </unifide-landing-layout-box>

  `,

  is: 'unifide-landing-footer'
});
