var screencapture = require('screencapture')

screencapture(function(err, imagePath) {
  // then you have imagePath as png.
  //
  // When an user exits screencapture without taking a screenshot,
  // imagePath == null
  console.log('err ' + err);
  console.log('wow ' + imagePath);
})