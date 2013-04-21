define(['studentInfoBoxView', 'studentChartView'],
	function(StudentInfoBoxView, StudentChartView) {
		var viewMap = {
			'studentInfoBoxView' : StudentInfoBoxView,
			'studentChartView' : StudentChartView
		}
		
		/**
		 * View factory class 
		 */
		function ViewFactory() {
			this.cachedViews = [];	
		}
		
		/**
		 *  
 		 * @param {Object} viewName
		 */
		ViewFactory.prototype.getView = function(viewId, viewName, options) {
			var cachedViews = this.cachedViews;
			if (cachedViews[viewId]) {
				return cachedViews[viewId];
			} else {
				var newView = this.createView(viewId, viewName, options);
				cachedViews[viewId] = newView;
				return newView;
			}
		}
		
		/**
		 * 
 		 * @param {Object} viewName
		 */
		ViewFactory.prototype.createView = function(viewId, viewName, options) {
			var viewClass = viewMap[viewName],
				view = new viewClass(options);
			this.cachedViews[viewId] = view;
			return view;
		}
		
		return ViewFactory;
	}
);
