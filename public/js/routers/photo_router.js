App.Routers.PhotosRouter = Backbone.Router.extend({
	routes: {
		'': 'index'
	},

	initialize: function() {
	App.photos = new App.Collections.Photos;
	App.photosView = new App.Views.Photos({ collection: App.photos });
	App.photos.fetch({ reset: true });
	},

	index: function() {
		console.log("photos router hit")
	}

});