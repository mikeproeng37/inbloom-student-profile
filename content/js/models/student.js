define([],
	function() {
		var StudentModel = Backbone.Model.extend({

			/**
			 *
			 */
			getFields: function(fieldNames) {
				var self = this;
				var fields = _.map(fieldNames, function(fieldName) {
					var fieldObj = {
						'studentDataLabel' : fieldName,
						'studentDataValue' : self.get(fieldName)
					}
					return fieldObj;
				});
				return fields;
			},

			getStudentInfo: function(fieldNames) {
				var studentInfoObject = {
					'studentIconSource' : this.get('iconSrc'),
					'fields' : this.getFields(fieldNames)
				}

				return studentInfoObject;
			},
			
			/**
			 * 
 			 * @param {Object} datasetName
			 */
			getChartData: function(datasetName) {
				if (datasetName) {
					return this.get(datasetName);
				}
			}

		});

		return StudentModel;
	}
);