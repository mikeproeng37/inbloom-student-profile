define(['jQuery.jqplot.PieRenderer'], 
	function() {
		var StudentAttendanceView = Backbone.View.extend({
			// id of the dom element containing the chart
			id: 'attendanceChart',
			// title of the chart
			title: 'Student Attendance',			
			// Container element for this view			
			tagName: 'div',
			
			/**
			 *
			 */
			initialize: function() {
				this.on('renderComplete', this.initChart);
			},

			/**
			 *
			 */
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