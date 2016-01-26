Accounts.ui.config({passwordSignupFields: 'USERNAME_AND_EMAIL'});

sAlert.config({
        effect: 'jelly',
        position: 'top-right',
        timeout: 4000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0, 
        beep: false,
        onClose: _.noop
    });

Template.home.onCreated(function() {
	var self = this;
	// get location and set latlng Session variable. If no location (e.g. user blocked it) return Portland.
	navigator.geolocation.getCurrentPosition(function(data) {Session.set('latlng',{lat:data.coords.latitude, lng:data.coords.longitude}) }, function(error) { Session.set('latlng',{lat:45.52,lng:-122.68})} );
	self.autorun(function() { self.subscribe('allItems'); });
});

Template.home.helpers({
	cards: function() { return Items.find(); },
	city: function() { geocoded = ReactiveMethod.call('city', Session.get('latlng')); 
		if (geocoded) return geocoded[0].city; }
});

Template.view.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var item_id = FlowRouter.getParam('item_id');
    self.subscribe('singleItem', item_id);  
  });
});

Template.view.helpers({
	item: function() { var item_id = FlowRouter.getParam('item_id'); var item = Items.findOne({itemID:item_id}); return item; }
});

/*Template.hello.events({
    'click #myh1': function() {alert('asdasddasdas');}
  });
*/
