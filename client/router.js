FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
	BlazeLayout.render('MainLayout', {main: 'home'});
  }
});

FlowRouter.route('/:item_id', {
  name: 'view',
  action: function(params) {
	BlazeLayout.render('MainLayout', {main: 'view'});
  }
});

FlowRouter.route('/contribute/:item_id', {
  name: 'contribute',
  action: function(params) {
	BlazeLayout.render('MainLayout', {main: 'contribute'});
	}
});
