var models = require("./models");
var Photo = models.photos;

var seedArray = [
	{
		title:"",
		location:"",
		tags:"",
		photo_date:"",
		photo_url:""
	}

]

var seedDatabase = function() {
	seedArray.forEach( function(seed) {
		Photo.create({
			title:seed.title,
			location:seed.location,
			tags:seed.tags,
			photo_date:seed.photo_date,
			photo_url:seed.photo_url
		})
	});
}