"use strict";

angular.module('PopupService',['ui.bootstrap'])

.factory('Popup',['$modal',function($modal)
{	
	var Popup = {};

	var options = 
	{
		template :
		'<div class="modal-header">'+
			'<h3 class="modal-title">&nbsp;{{title}}'+
			'<a style="text-decoration: none; cursor: pointer;" '+
				'class="glyphicon glyphicon-remove pull-right" '+
				'ng-click="close()"></a></h3>'+
		'</div>'+
		'<div class="modal-body">'+
			'{{message}}'+
		'</div>' +
		'<div class="modal-footer">'+
			'<button type="button" class="btn btn-danger btn-xs" '+
			'ng-click="close()">Cerrar</button>'+
		'</div>',
		size : 'sm',
		controller : function($scope, $modalInstance, message, title)
		{
			$scope.message = message;

			$scope.title = title;

			$scope.close = function()
			{
				$modalInstance.close();
			};
		}
	};

	Popup.alert = function(message,title)
	{
		this.open('alert',message,title);
	};

	Popup.open = function(type, message, title)
	{
		var resolves = 
		{
			resolve: 
			{
				title: function(){
					return title;
				},
				message : function()
				{
					return message;
				}
			}
		};

		angular.extend(options, resolves);

		switch(type)
		{
			case ('alert'):
				$modal.open(options);
		}
	};

	return Popup;
	
}]);
