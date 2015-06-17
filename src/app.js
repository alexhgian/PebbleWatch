/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var wind = new UI.Window({
    fullscreen: true,
  });

var timeText = new UI.TimeText({
  position: new Vector2(0, 0),
   size: new Vector2(144, 168),
  text: "%I:%M %p %m/%d",
   font: 'gothic-18-bold',
  color: 'black',
  textAlign: 'center'
});
var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/miku3_cc.png'
});
  wind.add(image);
  wind.add(timeText);
  wind.show();

