# Telegram bot for getting new VPN clients config

### How to use
 - rent some VDS server
 - install Wireguard server by https://github.com/hwdsl2/wireguard-install
 - install node >= 18
- download this repo to folder /root/bot
- npm i
- create new file `/lib/systemd/system/vpnbot.service`:

```bash
# copy this file to /lib/systemd/system/

[Unit]
Description=VPN Telegram bot
After=network-online.target

[Service]
Restart=always
Type=notify
WorkingDirectory=/root/bot/
ExecStart=/snap/bin/npm start
Environment="BOT_TOKEN=0000000000:AAAAAAAAA"
Environment="ALLOWED_CLIENTS=000000,1111111"

[Install]
WantedBy=default.target
RequiredBy=network.target
```

 - run commands
 ```bash
 systemctl daemon-reload
 systemctl enable vpnbot
 systemctl restart vpnbot
 ```

### How to use
In the telegram bot chat send `/new clientname`