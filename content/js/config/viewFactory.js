define(['studentInfoBoxView', 'studentAttendanceView'],
	function(StudentInfoBoxView, StudentAttendanceView) {
		var viewMap = {
			
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
		ViewFactory.prototype.getView = function(viewName) {
			var cachedViews = this.cachedViews;
			if (cachedViews[viewName]) {
				return cachedViews[viewName];
			} else {
				
			}
		}
		
		ViewFactory.prototype.createView = function(viewName) {
			
		}
		
		return ViewFactory;
	}
);
