import '/node_modules/@polymer/polymer/polymer.js';
import '/src/unifide-landing-layout-box.js';
import '/src/unifide-landing-logo.js';
import '/src/unifide-landing-slogan.js';
import '/src/unifide-landing-social.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'unifide-splash',

  properties:{

  },
  _template: `
  <style>
    :host{
      display:block;
    }
    h1 {
      margin:24px 0 64px;
      font-family: : 'Nunito';
      font-size:100px;
      color: #fff;
    }
    h2{
      font-family: 'Montserrat';
      font-size: 28px;
      color:#fff;
    }
    .landing-first{

    }

  </style>

  <unifide-landing-layout-box padding-top="52px" padding-bottom="52px" class="landing-first">

    <unifide-landing-logo logo-source="/img/unifide-logo.png" logo-size="320px"></unifide-landing-logo>
    <h1>Unifide</h1>
    <unifide-landing-slogan landing-slogan="Browse. Meet. Chat. Learn."></unifide-landing-slogan>
    <unifide-landing-social margin-top="48px"
                            margin-bottom=""
                            facebook="http://facebook.com/unifide"
                            twitter="http://twitter.com/unifide"
                            instagram="http://instagr.am/unifide"
                            github="http://github.com/unifide-io"
                            youtube="https://www.youtube.com/channel/UCozPZb3HDV959i-ygcQaNAw">
  </unifide-landing-layout-box>
  `,

});
