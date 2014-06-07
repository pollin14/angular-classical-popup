angular-popup-service
=======================

Modern, simple and fancy popup (alert, prompt, info) for Angular, for not using the javascript's native popups.

What does it do?
-----------

This service create a classical popup box (alert, prompt and info) as native**JavaScript** pops but using the modal service of [angular-ui-bootstraps](http://angular-ui.github.io/bootstrap/). So the script execution is not stopped and the experience visual is got better.

This service uses **bootstrap 3**, **angular** and **angular-ui**.

Installation
------------

Usage
---

1. Include the _PopupService_ as dependency for you app.

```javascript

angular.module('PopupApp',['PopupService']);
```

2. Inject the _PopupService_ in you controller or service.

```javascript

// By example, in a controller
angular.module('PopupController',['$scope', 'Popup', function($scope, Popup)
{
    $scope.showAlert = function()
    {
        Popup.alert('Title', 'This is an alert','alert alert-success');
    }
}]);

```




