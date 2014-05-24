var hilink = require('hilink');


hilink.listInbox(function( response ){

    if( response["response"]["Count"][0] > 0 ){

        response["response"]["Messages"].forEach( function( sms ){

            console.log( sms["Message"][0]["Content"][0] );

        });

    }
});