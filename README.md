# Welcome to My slack Bot 

This slackbot is only availbable for hackclub.

# Commands

1. /bot_name-ping - Checks bot latency

2. /bot_name-catfact - a cat fact

3. /about - About

4. /hello - say hello

5. /whoami - hack

# install

Run git clone https://github.com/JazilJafar/my-slack-bot.git for getting this and get tokens and e=ind=sert in .env file and add command in the slack dashboard and use it

##  Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* [Git](https://git-scm.com/)
* A Slack workspace with a configured Slack App (Bot Token & App Token enabled for Socket Mode)
* An active [Hack Club Nest](https://nest.hackclub.com) container account

1. After you clonning cd Slack bot or to your folder

2. Create a .env file in the root directory

3. add this 
  
  SLACK_BOT_TOKEN=xoxb-your-bot-token
  SLACK_APP_TOKEN=xapp-your-app-token

 with your information in slack dashboard

4. Run the bot locally

   add in Bash

   node index.js
   
   and run

5. for 24/7

  Open your terminal and SSH into your Nest server:

  Bash
  ssh root@nest.hackclub.com

  then:

  Clone the Repository & Install Dependencies
  Bash
  git clone [https://github.com/JazilJafar/my-slack-bot.git](https://github.com/JazilJafar/my-slack-bot.git)
  cd my-slack-bot
  npm install

  then 

  Create the .env File on Nest

  Bash

  nano .env

  then Paste your Slack tokens (SLACK_BOT_TOKEN and SLACK_APP_TOKEN), save with Ctrl + O, hit Enter, and exit with Ctrl + X

  Create the systemd configuration directory and service file:

  Bash
  mkdir -p ~/.config/systemd/user
  nano ~/.config/systemd/user/slackbot.service

Paste the following configuration:

"Ini, TOML
[Unit]
Description=Slack Bot 24/7 Service
After=network.target

[Service]
Type=simple
WorkingDirectory=/root/my-slack-bot
ExecStart=/usr/bin/node index.js
Restart=always
RestartSec=5

[Install]
WantedBy=default.target"
Save and exit (Ctrl + O, Enter, Ctrl + X)

5. Start and Enable the Service
    Bash
   systemctl --user daemon-reload
   systemctl --user enable --now slackbot.service
   loginctl enable-linger

6. Verify Service Status
   Bash
   systemctl --user status slackbot.service

    If the status displays active (running), the bot is successfully deployed and running 24/7

7. to update

 On your local computer:

  Bash
  git add .
  git commit -m "Update bot features"
  git push

On the Nest server:

Bash
cd my-slack-bot
git pull
systemctl --user restart slackbot.service

# thanks

Why this big thanks because you read my best words