import '/node_modules/@polymer/polymer/polymer.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';

import '/node_modules/@polymer/paper-card/paper-card.js';

import '/src/unifide-icons.js';
import { Polymer } from '/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'unifide-games',

  properties: {


  },

  _template: `
    <style>
      :host{
        display: block;
        color: #fff;
      }
      paper-card{
        color: #000;
        max-width: 50vw;
      }
      code{
        display: block;
        margin: 8px 0;
        padding: 8px;

      }
    </style>
    <paper-card image="https://minecraft.net/static/pages/img/minecraft-hero-og.c5517b7973e1.jpg" alt="Minecraft" title="Minecraft">
      <div class="card-content">
        <div class="game-title">
          Minecraft
        </div>
        <div class="game-info">
          <h2>Client Setup</h2>
          <p>

          </p>

          <h2>Server Setup</h2>
          <p>
            set up a user and group for minecraft so that it doesn't run as root
            <code>
            mkdir /minecraft<br>
            apt-get update<br>
            apt-get upgrade<br>
            apt-get install sun-java6-jre
            </code>


            <h5>/minecraft/update-minecraft-server.sh</h5>
            <code>
            #!/bin/bash<br>
            rm /minecraft/minecraft_server.jar<br>
            cd /minecraft<br>
            wget https://s3.amazonaws.com/Minecraft.Download/versions/1.12.2/minecraft_server.1.12.2.jar -O minecraft_server.jar
            </code>
            <h5>/minecraft/start-minecraft-server.sh</h5>
            <code>
            #!/bin/bash<br>
            java -Xmx2048M -Xms2048M -jar minecraft_server.jar nogui<br>
            </code>


            <code>
            chmod 755 update-minecraft-server.sh
            chmod 755 start-minecraft-server.sh
            adduser --system --home /minecraft minecraft<br>
            addgroup --system minecraft<br>
            adduser minecraft minecraft # this adds user "minecraft" the group "minecraft"
            </code>
            hand your server-installation over to our new user, I have mine in /minecraft
            <code>
            chown -R minecraft.minecraft /minecraft
            </code>
            setup the systemd service

            <h5>/etc/systemd/system/minecraft-server.service</h5>
            <code>
            [Unit]<br>
            Description=start and stop the minecraft-server<br>
            <br>
            [Service]<br>
            WorkingDirectory=/minecraft<br>
            User=minecraft<br>
            Group=minecraft<br>
            Restart=on-failure<br>
            RestartSec=20 5<br>
            ExecStart=/usr/bin/java -Xms1536M -Xmx1536M -jar minecraft_server.jar nogui<br>
            <br>
            [Install]<br>
            WantedBy=multi-user.target<br>
            </code>
            To start the service :
            <code>
            sudo service minecraft-server start
            </code>
            To start after boot:
            <code>
            sudo systemctl enable minecraft-server
            </code>

          </p>
        </div>
      </div>
      <div class="card-actions">
        <paper-button>Share</paper-button>
        <paper-button>Explore!</paper-button>
      </div>
    </paper-card>
  `,

});
