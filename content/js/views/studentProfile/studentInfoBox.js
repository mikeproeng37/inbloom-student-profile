define(['mustache!templates/studentProfile/studentInfoBox.hbs', 'jRumble'],
	function(studentInfoBoxTemplate) {
		
		var studentDataFieldClass = '.student-data-field',
			editBtn,
			doneBtn,
			editControls,
			editableFields,
			StudentInfoBoxView = Backbone.View.extend({
			tagName: 'div',			
			
			/**
			 * Event handlers for this view
			 */
			events: {
				'click #btn-edit' : 'toggleEditable',
				'click #btn-done' : 'toggleEditable',
				'click .remove-btn' : 'removeDataField'
			},
			
			/**
			 * 
 			 * @param {Object} studentData
			 */
			render: function() {
				var	fields = ['name', 'grade'],
					html = studentInfoBoxTemplate(this.model.getStudentInfo(fields));
				$(this.el).html(html);
				
				// cache DOM elements
				editableFields = $(this.el).find('.student-data-field');
				editBtn = $(this.el).find('#btn-edit');
				editControls = $(this.el).find('.js-edit-controls');
								
				return this;
			},
			
			/**
			 * 
 			 * @param {Object} event
			 */
			toggleEditable: function(event) {
				var sourceBtn = event.currentTarget,
					editing = $(sourceBtn).data('edit') === true,
					triggerAction = editing ? 'startRumble' : 'stopRumble';
				
				editBtn.toggle(!editing);
				editControls.toggle(editing);
				
				$(studentDataFieldClass).toggleClass('edit-mode jiggly', editing);						
			},
			
			/**
			 * 
 			 * @param {Object} event
			 */
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