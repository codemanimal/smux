App.Models.Photo = Backbone.Model.extend({
	urlRoot: '/photos',

	initialize: function() {
		console.log('new photo model created, bro')
	}
});