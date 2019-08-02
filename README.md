# Ponder

Welcome to Ponder. Ponder is a simple text scratchpad that saves your thoughts.

# Planned Versions

* Web app
* Chrome app
* MacOS app
* Windows app
* iOS app
* Android app

Ponder is free for individual users. Pay $9 per year for a subscription that sync's your notes to the cloud and other devices running ponder.

## Compile

First, start Ponder in a local web server. I'm using PHP for that.

`php -S localhost:8080`

Next, convert it to an app using _nativefier_.

`nativefier --name Ponder http://localhost:8080`