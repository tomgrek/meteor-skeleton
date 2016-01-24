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
	self.autorun(function() { self.subscribe('allItems'); });
});

Template.home.helpers({
	cards: function() { return Items.find(); }
});

Template.view.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var item_id = FlowRouter.getParam('item_id');
    self.subscribe('singleItem', item_id);  
  });
});

Template.view.helpers({
	//nb params are strings, nothing will return if you're searching for an int in mongo. use parseInt.
	item: function() { var item_id = FlowRouter.getParam('item_id'); var item = Items.findOne({itemID:item_id}); return item; }
});

/*Template.hello.events({
    'click #myh1': function() {alert('asdasddasdas');}
  });
*/
