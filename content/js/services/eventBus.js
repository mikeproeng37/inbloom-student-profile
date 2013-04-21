define([], function() {
	$.StudentProfile = $.StudentProfile || {};
	
	var EventBus = _.extend({}, Backbone.Events);
	$.StudentProfile.EventBus = EventBus;
});
