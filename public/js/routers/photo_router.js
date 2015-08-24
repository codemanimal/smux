var express = require('express'),
		models  = require('..models'),
		Photo   = models.photos;

var photoRouter = express.Router();

photoRouter.get('/', function(req, res) {
	Photo
		.findAll()
		.then(function(photos) {
			res.send(photos);
		});
});