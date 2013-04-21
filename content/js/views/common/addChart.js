define(['mustache!templates/common/addChart.hbs'],
	function(addChartTemplate) {
		var AddChartView = Backbone.View.extend({
			
			events: {
				
			},
			
			render: function() {
				var html = addChartTemplate(this.model.attributes);
				$(this.el).html(html);
				
				return this;
			}
		});
		
		return AddChartView;
	}	
)
