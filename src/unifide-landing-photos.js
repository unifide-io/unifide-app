import '/node_modules/@polymer/polymer/polymer.js';
import '/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '/node_modules/@polymer/app-layout/app-grid/app-grid-style.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import '/node_modules/@polymer/iron-icons/social-icons.js';
import '/node_modules/@polymer/iron-icons/places-icons.js';
import '/src/unifide-landing-photo.js';


import '/src/unifide-landing-layout-box.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({
  properties:{

  },
  _template: `
  <style include="app-grid-style">
  :host {
    --app-grid-columns: 3;
    --app-grid-item-height: auto;
    color: #24292F;
    margin-top:0px!important;
    margin-bottom:0px!important;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  .item {
    font-family: 'Nunito';
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
  @media(max-width: 799px) {

    .centered-container {
      margin: 0 5px;
    }
    .item{

    }
    :host {
      --app-grid-columns: 3;
      --app-grid-gutter: 12px;
      --app-grid-item-height: auto;
    }

  }

</style>
<style>
  :host{
    display: block;
    background-color: rgba(255,255,255,.9);
    color: #24292F;
  }
  .spacer{
    display: block;
    line-height: 64px;
    height: 4px;
    width: 17%;
    margin: 30px auto 30px;
    background-color: #24292F;

  }
  h3{
    font-family: 'Nunito';
    font-size: 24px!important;
    font-weight: 100;
    margin-bottom: 0px;
    margin-bottom: 64px;

  }
</style>
<unifide-landing-layout-box padding-top="64px" padding-bottom="64px" class="centered-container">

  <h2>Come Together</h2>

  <div class="spacer"> </div>

  <h3>Work, Play, Create, Wonder</h3>

  <ul class="app-grid">

    <unifide-landing-photo class="item" img-url="/img/unifide-landing-photo-01.jpg">
    </unifide-landing-photo>

    <unifide-landing-photo class="item" img-url="/img/unifide-landing-photo-02.jpg">
    </unifide-landing-photo>

    <unifide-landing-photo class="item" img-url="/img/unifide-landing-photo-03.jpg">
    </unifide-landing-photo>

    <unifide-landing-photo class="item" img-url="/img/unifide-landing-photo-04.jpg">
    </unifide-landing-photo>

    <unifide-landing-photo class="item" img-url="/img/unifide-landing-photo-05.jpg">
    </unifide-landing-photo>

    <unifide-landing-photo class="item" img-url="/img/unifide-landing-photo-06.jpg">
    </unifide-landing-photo>


  </ul>

</unifide-landing-layout-box>
  `,


  is: 'unifide-landing-photos'
});
