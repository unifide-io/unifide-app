import '/node_modules/@polymer/polymer/polymer.js';
import '/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '/node_modules/@polymer/app-layout/app-grid/app-grid-style.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import '/node_modules/@polymer/iron-icons/social-icons.js';
import '/node_modules/@polymer/iron-icons/places-icons.js';
import '/src/unifide-icons.js';


import '/src/unifide-landing-layout-box.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({
  properties:{

  },
  _template: `
  <style include="app-grid-style">
  :host {
    --app-grid-columns: 3;
    --app-grid-gutter: 32px;
    --app-grid-item-height: auto;
    color: #fff;
    margin-top:0px!important;
    margin-bottom:0px!important;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  .item {
    font-family: 'Nunito';
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .item iron-icon{
    width:128px;
    height:auto;
  }
  h2{
    font-family: 'Montserrat';
    font-size: 72px;
    margin: 0px;
    font-weight: 100;
  }
  h3{
    font-family: Montserrat;
    font-size: 32px;
    margin: 12px 0 24px;
  }
  iron-icon{
    width:128px;
    height:auto;
    margin:0px 16px
  }
  .centered-container {
    margin-top: 40px;
    max-width: 1000px;
    margin: 0 auto;
  }
  .spacer{
    display: block;
    height: 4px;
    width: 17%;
    margin: 32px auto 64px;
    background-color: #fff;

  }
  .landing-features-text{
    line-height: 32px;
  }
  @media(max-width: 799px) {

    .centered-container {
      margin: 0 5px;
    }

    .landing-features-text{
      margin: 0 64px;
      line-height: 32px;
    }

    :host {
      --app-grid-columns: 1;
      --app-grid-gutter: 4px;
      --app-grid-item-height: auto;
    }

  }
</style>
<style>
  :host{
    display: block;
    background-color: rgba(244,67,54,1);
  }
</style>
<unifide-landing-layout-box padding-top="96px" padding-bottom="96px" class="centered-container">

  <h2>Services</h2>

  <div class="spacer"> </div>

  <ul class="app-grid">

    <li class="item">
      <iron-icon icon="landing:video"></iron-icon>
      <h3>Video</h3>
      <div class="landing-features-text">
        Video chat with your friends & share your screen while simultaneously streaming your favorite media.
      </div>
    </li>

    <li class="item">
      <iron-icon icon="landing:messaging"></iron-icon>
      <h3>Messaging</h3>
      <div class="landing-features-text">
        Don't feel like video chatting? Text chat & voice chat while collaborating on projects or sharing your screen.
      </div>
    </li>

    <li class="item">
      <iron-icon icon="landing:media"></iron-icon>
      <h3>Media Streaming</h3>
      <div class="landing-features-text">
        Stream music & video from your favorite services such as Youtube and Spotify, all in one place.
      </div>
    </li>


  </ul>

</unifide-landing-layout-box>
  `,


  is: 'unifide-landing-services'
});
