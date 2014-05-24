var hilink = require('hilink');
var childProcess = require('child_process');
var config = require('./config');
var email = require('emailjs');

var server  = email.server.connect( config.email.settings );

hilink.listInbox(function( response ){

    if( response["response"]["Count"][0] > 0 ){

        response["response"]["Messages"].forEach( function( sms ){

            var id = sms["Message"][0]["Index"][0];

            var phone = sms["Message"][0]["Phone"][0];

            var text = sms["Message"][0]["Content"][0];

            if( config.numbers.indexOf( phone ) ){

                hilink.delete( id, function( status ){

                    if( status.response == "OK" ){

                        if( text.match(/camera/g) ){

                            childProcess.exec('fswebcam -r 800x600 -p YUYV camera.jpeg', function (error, stdout, stderr) {

                                var emailMessage = config.email.message;

                                server.send(emailMessage, function(err, message) { console.log(err || message); });

                            });

                        }

                    }

                });

            }

        });

    }

});