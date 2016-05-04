###Description
This is a boilerplate for starting a react redis application.

###Tech Stack
node.js + webpack + babel + react + redis

###Installation
Run `npm install`. Now you will need to install redis http://redis.io/topics/quickstart .Redis code was copy & pasted from http://redis.js.org/ as a usage example.

###Start Dev Server & Redis
`npm start`

###Minify and Production
`webpack --config webpack-production.config.js -p --bail`
Files will be produced to `static/public/build`

### Notes
Json seed data can be stored in seeds dir and loaded with webpack's json-loader. Just 'import' the json files.

###Seed Locations & Resources
http://www.gps-coordinates.net/
http://opendata.arcgis.com/
https://www.movebank.org/
https://www.mockaroo.com/
