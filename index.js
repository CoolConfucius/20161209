// var mongoose = require( 'mongoose' ),
var express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});


// var express = require("express");

// var app = express(); 

// app.use(express.static(__dirname + "/client"));

// app.listen(8000, function() {
//   console.log("listening on port 8000");
// })