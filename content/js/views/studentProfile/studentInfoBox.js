define(["mustache!templates/studentProfile/studentInfoBox.hbs", 'jRumble'],
	function(studentInfoBoxTemplate) {
		var studentDataFieldClass = '.student-data-field',
			editBtn = $('#edit-btn'),
			doneBtn = $('#done-btn'),
			editableFields,
			StudentInfoBoxView = Backbone.View.extend({
			tagName: 'div',

			events: {
				'click #edit-btn' : 'toggleEditable',
				'click #done-btn' : 'toggleEditable',
				'click .remove-btn' : 'removeDataField'
			},

			render: function(studentData) {
				var html = studentInfoBoxTemplate(studentData);
				$(this.el).html(html);
				editableFields = $(this.el).find('.student-data-field');
				this.initRumble();
				return this;
			},

			toggleEditable: function(event) {
				var sourceBtn = event.currentTarget,
					editing = $(sourceBtn).data('edit') === true,
					triggerAction = editing ? 'startRumble' : 'stopRumble';
				
				$(studentDataFieldClass).toggleClass('edit-mode', editing);
				editableFields.trigger(triggerAction);				
			},
			
			/**
			 *
			 */
			initRumble: function() {
				editableFields.jrumble({
					speed: 100,
					rotate: 0.2,
					x: 1,
					y: 1
				})
			},
			
			removeDataField: function(event) {
				var button = event.currentTarget,
					dataFieldElem = $(button).parent(),
					dataFieldName = dataFieldElem.data('field-name');
				
				dataFieldElem.remove();
			}
		});
		return StudentInfoBoxView;
	}
);