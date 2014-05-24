var hilink = require('hilink');
var config = require('./config');

hilink.listInbox(function( response ){

    if( response["response"]["Count"][0] > 0 ){

        response["response"]["Messages"].forEach( function( sms ){

            var id = sms["Message"][0]["Index"][0];

            var phone = sms["Message"][0]["Phone"][0];

            var text = sms["Message"][0]["Content"][0];

            if( config.numbers.indexOf( phone ) ){

                hilink.delete( id, function( status ){

                    if( status == "OK" ){

                        console.log( text );

                    }

                });

            }

        });

    }

});