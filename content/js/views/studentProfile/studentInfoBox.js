define(["mustache!templates/studentProfile/studentInfoBox.hbs"],
	function(studentInfoBoxTemplate) {
		var studentDataFieldClass = '.student-data-field',
			editBtn = $('#edit-btn'),
			doneBtn = $('#done-btn'),
			StudentInfoBoxView = Backbone.View.extend({
			tagName: 'div',

			events: {
				'click #edit-btn' : 'toggleEditable',
				'click #done-btn' : 'toggleEditable'
			},

			render: function(studentData) {
				var html = studentInfoBoxTemplate(studentData);
				$(this.el).html(html);
				return this;
			},

			toggleEditable: function(event) {
				var sourceBtn = event.currentTarget,
					editing = $(sourceBtn).data('edit') === true;
				
				$(studentDataFieldClass).toggleClass('edit-mode', editing);
				
			} 
		});

		return StudentInfoBoxView;
	}
);