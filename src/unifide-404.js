import '/node_modules/@polymer/polymer/polymer.js';
import '/node_modules/@polymer/paper-card/paper-card.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  properties:{

  },
  _template: `
  <style>
    :host{
      display: block;
      margin: 0;
      font-family: Inconsolata;
      text-align:center;
      padding: 12px;
      --paper-card-background-color: #616161;
      --paper-card-header-color: #fff;
      color: #fff;
      background-image: url('/img/unifide-404-01.gif');
      background-size: cover;
      height: 90vh;
      background-position: center;
      background-attachment: fixed;
      overflow-y:hidden;


    }
    .centered-container {
      margin-top: 40px;
      max-width: 1000px;
      margin: 0 auto;
    }
    @media(max-width: 799px) {
      :host{
        height:86vh;
      }
    }
  </style>
  <div class="centered-container">

    <paper-card heading="404 File Not Found" alt="404" elevated="1" width="100%">
      <div class="card-content">
        <p>You're still connected to Unifide but the page you're looking for could not be found.</p>
      </div>
      <div class="card-actions">
        <paper-button>Home</paper-button>
        <paper-button>Refresh</paper-button>
      </div>
    </paper-card>
  </div>

\

  `,


  is: 'unifide-404'
});
