import '/node_modules/@polymer/polymer/polymer.js';
import '/src/unifide-landing-layout-box.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({
  properties:{

  },
  _template: `
  <style>
    :host{
      color: #fff;
      background-color: rgba(36, 41, 47,.5);
      background-size: cover;
      display: block;
    }
    h2{
      font-size: 58px;
      margin-top: 0px;
      font-family: 'Montserrat';
    }
    .centered-container {
      margin-top: 40px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .about-content{
      font-size:24px;
      font-family: 'Nunito';
      margin-bottom: 16px;
      font-weight: 100;
      margin: 24px 80px;
      line-height: 48px;

    }
    .about-layer{
    width: 100%;
    height: 100%;
    }
  </style>
  <div class="about-layer">
  <unifide-landing-layout-box padding-top="64px" padding-bottom="64px" class="centered-container">

    <h2>Do What You Do - Better</h2>

    <div class="about-content">
      We combine different features in a way that requires less juggling. Video chat, messaging, and media streaming presented in a way that is easier to manage. We want to allow people to interact online in ways that no single communication method can keep up with. We want Unifide to be the glue that connects people, projects, and ideas to make the world feel a little smaller. What makes us unique is that we aren’t bound to a single type of media. We combine video chat, messaging, and media streaming customized to the way that works best for you.
    </div>

    <div class="about-content">
      We live to hear people passionately discussing topics they love and making new connections in their fields of interest. We love when people chase the things that they are passionate about. It’s the whole reason why our company exists. We want to redefine how people have those discussions by providing a more expressive way to do so.
    </div>

  </unifide-landing-layout-box>
  <div>

  `,


  is: 'unifide-landing-about'
});
