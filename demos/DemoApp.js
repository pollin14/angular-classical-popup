"use strict";

angular.module('DemoApp',['PopupService'])

.controller('DemoController', ['$scope', 'Popup',
	function($scope,Popup)
	{
		$scope.open = function(type)
		{
			switch(type)
			{
				case ('alert'):
					Popup.alert('I am a fancy alert');
					break;
			}
		}
	}]);