/*
For some reason, the first time you run the project you'll need to insert a sample unit of data as below.
Then, to access the data outside of the web app, use 'meteor mongo' from the command line.
'show collections' will show you a collection called 'Items' and one called 'items'. Use the lowercase one!
Items.insert({
  itemID: "first",
  name: "First name",
  miniText: "Some text extract"
});*/

var geo = new GeoCoder({geocoderProvider:"google", httpAdapter:"https",apiKey:"APIKEY"});

Meteor.methods({
	'city': function(latlng) { 
		if (latlng)
		{		
		location= geo.reverse(latlng.lat,latlng.lng);
		if (location)
			return location;
		else
			return {city:'Portland'};
		}
		else
			return {city:'Loading'};
	}
});

Meteor.publish('singleItem', function(item_id) {	
	return Items.find({itemID:item_id});
});

Meteor.publish('allItems', function() {	
	return Items.find({});
});

Meteor.startup(function () {

});
