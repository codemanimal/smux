App.Views.Photo = Backbone.View.extend({

	className: 'photo',

	initialize: function() {
		this.template = HandlebarsTemplates['photos/photo'];
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}

});