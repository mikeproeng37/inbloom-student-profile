define(['studentModel', 'viewFactory'], 
	function(StudentModel, ViewFactory) {
		var StudentProfileMainView = Backbone.View.extend({
			el: $('#studentProfileContainer'),

			/**
			 *
			 */
			initialize: function() {
				// make AJAX call to get student information
				this.model = new StudentModel(studentData[0]);
				
				// view factory helps us create views
				this.viewFactory = new ViewFactory();
				
				// render the main view upon initialize
				this.render();
			},

			/**
			 *
			 */
			render: function() {
				var student = this.model,
					views = student.get('views'),
					numViews = views.length;
					
				for (var i = 0; i < numViews; i++) {					
					var view = views[i],
						viewId = view.viewId,
					 	viewName = view.viewType,
					 	viewOptions = view.options,
					 	viewDomId = viewOptions ? viewOptions.chartType + '-' + viewName : viewName,					 	
						viewInstance = this.viewFactory.getView(viewId, viewName, { model: student, id: viewDomId, options: viewOptions });
					$(this.el).append(viewInstance.render().el);
					viewInstance.trigger('renderComplete');
				}
				
				return this;
			},			
		});

		return StudentProfileMainView;
	}
);