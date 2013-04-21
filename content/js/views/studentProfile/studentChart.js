define(['jQuery.jqplot'],
	function() {
		var chartModuleMap = {
				'lineChart': ['jQuery.jqplot.CanvasTextRenderer', 'jQuery.jqplot.CanvasAxisLabelRenderer'],
				'pieChart' : ['jQuery.jqplot.PieRenderer'],
				'barChart' : ['jQuery.jqplot.BarRenderer', 'jQuery.jqplot.CategoryAxisRenderer', 'jQuery.jqplot.PointLabels']
			}, 
			StudentChartView = Backbone.View.extend({
						
				// Container element for this view
				tagName: 'div',
				
				/**
				 * Initialization/Contructor logic
				 */
				initialize: function(options) {
					this.on('renderComplete', this.initChart);
					this.options = options.options;
				},
				
				/**
				 * Initialize the chart by plotting it with the specified data
				 */
				initChart: function() {
					var self = this,
						chartId = this.id,
						chartType = this.options.chartType,
						chartModules = chartModuleMap[chartType],
						chartOptions = this.options.chartOptions,
						datasetName = this.options.dataset,														
						// grab the data from the student model
						data = this.model.getChartData(datasetName);
						
					// bring in the specified chart modules					
					require(chartModules, function() {
						// the renderers are stored as string (representing the name of the renderer),
						// which we need to map back to a jqplot renderer function
						self.substituteRenderers(chartOptions);
						
						// create and plot the chart
						$.jqplot(chartId, data, chartOptions);
					});
				},
				
				/**
				 * Substitute the name of the renderers for the actually renderer function (i.e. "BarRenderer" -> jQuery.jqplot.BarRenderer)
 				 * @param {Object} chartOptions
				 */
				substituteRenderers: function(chartOptions) {
					var option, chartType, chartOption;					
					for (option in chartOptions) {
						// make sure we are only looking at the properties that belong to the chart options object
						if (chartOptions.hasOwnProperty(option)) {
							chartOption = chartOptions[option]; 
							if (option === 'renderer') { 
								chartOptions[option] = jQuery.jqplot[chartOption];
							} else if (chartOption instanceof Object) {
								this.substituteRenderers(chartOption);
							}
						}
					}
				}
				
		});
		
	return StudentChartView;
	}	
)
