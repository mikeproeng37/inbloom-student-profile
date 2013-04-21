define([],
	function() {
		var AddChartViewModel = Backbone.Model.extend({
			
			defaults: {
				chartTypes: [
					{ value: 'lineChart', name: 'Line Chart'},
					{ value: 'barChart', name: 'Bar Chart'},
					{ value: 'pieChart', name: 'Pie Chart'}
				],
				studentData: [
					{ value: 'attendance', name: 'Attendance'},
					{ value: 'testScores', name: 'Test Scores'},
					{ value: 'learningStyles', name: 'Learning Styles'}
				],
				pieDataFormat: [				
					{ value: 'number', name: 'Number'},
					{ value: 'percentage', name: 'Percentage'}
				],
				axisOptions: {
					
				}
			}
		});
		
		return AddChartViewModel;	
	}
)
