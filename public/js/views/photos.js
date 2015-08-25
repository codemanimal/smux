App.Views.Photos = Backbone.View.extend({
	el: "#photos-container",

	initialize: function() {
		this.listenTo(this.collection, 'reset', this.renderAll);
	},

	renderAll: function() {
		this.$el.empty();
		this.collection.each(this.renderOne, this);
	},

	renderOne: function(photo) {
		this.$el.append(new App.Views.Photo({ model: photo }).$el);
	}

});