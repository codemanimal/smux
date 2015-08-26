App.Views.Photo = Backbone.View.extend({

	initialize: function() {
		this.template = Handlebars.compile($('#photo-template').html());
		this.render();
	},

	render: function() {
		$('#main-container').html( this.template() );
	}

});