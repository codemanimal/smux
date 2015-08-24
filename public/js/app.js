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
		console.log('mouseenter');
		$('#nav1').text('see');
	});

	$('#nav1').on('mouseleave', function() {
		console.log('mouseleave');
		$('#nav1').text('voir');
	});
	
	$('#nav2').on('mouseenter', function() {
		console.log('mouseenter');
		$('#nav2').text('read');
	});

	$('#nav2').on('mouseleave', function() {
		console.log('mouseleave');
		$('#nav2').text('lire');
	});
	
	$('#nav3').on('mouseenter', function() {
		console.log('mouseenter');
		$('#nav3').text('know');
	});

	$('#nav3').on('mouseleave', function() {
		console.log('mouseleave');
		$('#nav3').text('connaître');
	});

});
