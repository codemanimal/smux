var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    // models           = require('./models'),
    // Photo 					 = models.photos,
    photoRouter 		 = require('./routers/photo_router.js');

var app = express();

// Server Configuration
if (process.env.NODE_ENV !== "test") {
  app.use( logger('dev') );
}
// set up request parsing
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
// set up method override for PUT and DELETE
// app.use( methodOverride() );
// set up serving of static assets
app.use( express.static( path.join( application_root, 'public' ) ) );
app.use( express.static( path.join( application_root, 'browser' ) ) );

// Routes
// app.use('/photos', photoRouter);

// Export app as module
module.exports = app;