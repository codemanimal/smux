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

	App.Routers.photosRouter = new App.Routers.PhotosRouter();
	Backbone.history.start();

	$('#nav-container').fadeOut(1000);

	// debugger;
	


	// $('#nav1').removeClass('fadeIn');
	// $('#nav1').addClass('fadeOut');

};

App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};
