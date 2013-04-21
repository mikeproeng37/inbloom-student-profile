var studentData = [
	{
		'name' : 'Mike',
		'grade': '8th',
		'iconSrc' : 'data:image/png;base64,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',
		// note attendance data is nested 3 lvls
		'attendance' : [[['Attendance', 13], ['Tardy', 2], ['Absent', 4]]],
		'testScores' : [[80, 76, 85, 91], [90, 94, 88, 96], [84, 79, 94, 97]],
		'views' : [
			{
				'viewId'  : '1',
				'viewType': 'studentInfoBoxView',
				'options' : null
			}, 
			{
				'viewId'  : '2',
				'viewType': 'studentChartView',
				'options' : {								
					'chartType' : 'barChart',
					'dataset' : 'testScores',
					'chartOptions' : {
										title: {
											text: 'Student Test Scores'
										},
										seriesDefaults: {
											renderer: 'BarRenderer',
				            				rendererOptions: {fillToZero: true}
										},
										// Custom labels for the series are specified with the "label"
								        // option on the series option.  Here a series option object
								        // is specified for each series.
								        series:[
								            {label:'Math'},
								            {label:'Physics'},
								            {label:'Chemistry'}
								        ],
								        // Show the legend and put it outside the grid, but inside the
								        // plot container, shrinking the grid to accomodate the legend.
								        // A value of "outside" would not shrink the grid and allow
								        // the legend to overflow the container.
								        legend: {
								            show: true,
								            placement: 'outsideGrid'
								        },
								        axes: {
								            // Use a category axis on the x axis and use our custom ticks.
								            xaxis: {
								                renderer: 'CategoryAxisRenderer',
								                ticks: ['Jan', 'Feb', 'Mar', 'Apr']
								            },
								            // Pad the y axis just a little so bars can get close to, but
								            // not touch, the grid boundaries.  1.2 is the default padding.
								            yaxis: {
								                pad: 1.05
								            }
								        }								       
									}
				}
			},
			{
				'viewId' : '3',
				'viewType': 'studentChartView',
				'options' : {
					'chartType' : 'pieChart',
					'dataset' : 'attendance',
					'chartOptions' : {
										title: {
							 				text: 'Student Attendance'
								 		},
								 		seriesDefaults: {
								 			renderer: 'PieRenderer',
								 			rendererOptions: {
								 				showDataLabels: true
								 			}
								 		},
								 		legend: { show:true, location: 'e' }
									}
				}
			}
		]
	}
],

chartableData = ['learningStyles', 'attendance', ''];