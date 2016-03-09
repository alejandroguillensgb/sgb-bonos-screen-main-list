'use strict';

angular.module('sgb-bonos-screen-main-list', ['megazord'])
    .controller('sgb-bonos-screen-main-list-controller', ['$scope', '_router', '_screen', '_screenParams', '$ionicPlatform', '$state', 
        function ($scope, _router, _screen, _screenParams, $ionicPlatform, $state) {
        _screen.initialize($scope, _screenParams);

        $scope.params = _screenParams;

        $scope.title = '<img class="title-header" src="resources/Logos/componente-16.svg">';

        $ionicPlatform.registerBackButtonAction(function () {
            if ($state.$current.name == "header.indicadores") {
                navigator.app.exitApp();
            } else {
                $ionicHistory.goBack();
            }
        }, 100);

        $scope.goTo = function(event){
            _router.fireEvent({
                name: event
            });
        };
    }]);