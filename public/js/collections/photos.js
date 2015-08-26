App.Collections.Photos = Backbone.Collection.extend({
	model: App.Models.Photo,

	initialize: function() {
		console.log('new photos collection created, bro')
	}

});