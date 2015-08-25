var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');

	// controlling nav menu hover events
	$('#nav1').on('mouseenter', function() {
		$('#nav1').text('see');
	});

	$('#nav1').on('mouseleave', function() {
		$('#nav1').text('voir');
	});
	
	$('#nav2').on('mouseenter', function() {
		$('#nav2').text('read');
	});

	$('#nav2').on('mouseleave', function() {
		$('#nav2').text('lire');
	});
	
	$('#nav3').on('mouseenter', function() {
		$('#nav3').text('know');
	});

	$('#nav3').on('mouseleave', function() {
		$('#nav3').text('connaître');
	});

	$('#nav1').on('click', voir);

});

var voir = function() {
	console.log('clicked');

	App.photoRouter = new App.Routers.Photo();
	Backbone.history.start();

	// $('#nav1').removeClass('fadeIn');
	// $('#nav1').addClass('fadeOut');

};
