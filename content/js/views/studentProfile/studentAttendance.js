define(['jqplot'], 
	function() {
		var StudentAttendanceView = Backbone.View.extend({
			/**
			 * Container element for this view
			 */
			tagName: 'div',

			/**
			 *
			 */
			className: 'attendanceChart',

			/**
			 * Rendering logic
			 */
			 render: function() {
			 	var model = this.model,
			 		attendanceData = model.getAttendanceData();

			 	$(this.el).jqplot(attendanceData,
			 	{
			 		seriesDefaults: {
			 			renderer: jQuery.jqplot.PieRenderer,
			 			rendererOptions: {
			 				showDataLabels: true
			 			}
			 		},
			 		legend: { show:true, location: 'e' }
			 	});
			 	
			 	return this;
			 }
		});

		return StudentAttendanceView;
	}
)