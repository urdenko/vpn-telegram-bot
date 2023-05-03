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
Restart=on-failure
WorkingDirectory=/root/bot/
ExecStart=/usr/bin/npm start

[Install]
WantedBy=multi-user.target
```

 - run commands
 ```bash
 systemctl daemon-reload
 systemctl enable vpnbot
 systemctl restart vpnbot
 ```

### How to use
In the telegram bot chat send `/new clientname`