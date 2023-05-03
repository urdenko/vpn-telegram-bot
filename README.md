# Telegram bot for getting new VPN clients config

### How to use
 - rent some VDS server
 - install Wireguard server by https://github.com/hwdsl2/wireguard-install
 - install node >= 18
- download this repo
- npm i
- create new file `/lib/systemd/system/vpnbot.service`:

```bash
# copy this file to /lib/systemd/system/

[Unit]
Description=VPN Telegram bot
After=network-online.target

[Service]
Restart=on-failure
WorkingDirectory=/api/bot/
ExecStart=npm start

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