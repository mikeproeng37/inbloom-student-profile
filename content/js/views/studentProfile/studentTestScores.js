define(['jQuery.jqplot.BarRenderer', 'jQuery.jqplot.CategoryAxisRenderer', 'jQuery.jqplot.PointLabels'],
	function() {
		var StudentTestScoresView = Backbone.View.extend({
			
			id: 'testScoresChart',
			
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
					testData = model.get('testScores');
				var ticks = ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4'];
				$.jqplot(this.id, testData,
					{
						title: {
							text: this.title
						},
						seriesDefaults: {
							renderer: jQuery.jqplot.BarRenderer,
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
				                renderer: jQuery.jqplot.CategoryAxisRenderer,
				                ticks: ticks
				            },
				            // Pad the y axis just a little so bars can get close to, but
				            // not touch, the grid boundaries.  1.2 is the default padding.
				            yaxis: {
				                pad: 1.05
				            }
				        }
					}
				);
			}
		});
		
		return StudentTestScoresView;
	}
);
