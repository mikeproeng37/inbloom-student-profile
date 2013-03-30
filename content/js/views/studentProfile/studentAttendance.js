define(['jQuery.jqplot.PieRenderer'], 
	function() {
		var StudentAttendanceView = Backbone.View.extend({
			
			title: 'Student Attendance',
			/**
			 * Container element for this view
			 */
			tagName: 'div',

			/**
			 *
			 */
			id: 'attendanceChart',
			 
			initChart: function() {
			 	var model = this.model,
			 		attendanceData = model.get('attendance');
			 		
			 	$.jqplot(this.id, [attendanceData],
			 	{
			 		title: {
			 			text: this.title
			 		},
			 		seriesDefaults: {
			 			renderer: jQuery.jqplot.PieRenderer,
			 			rendererOptions: {
			 				showDataLabels: true
			 			}
			 		},
			 		legend: { show:true, location: 'e' }
			 	});
			 }
		});

		return StudentAttendanceView;
	}
)