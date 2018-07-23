let AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    console.log("Commit successfull for the same repo");
    callback(null,'Successfully executed');
}