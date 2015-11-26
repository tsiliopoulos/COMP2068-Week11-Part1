/// <reference path="_reference.ts"/>
(function () {
    var mainApplicationName = "app";
    var app = angular.module(mainApplicationName, []);
    // wait until the web page is loaded...
    angular.element(document).ready(function () {
        //manually boostrapping angularJS
        angular.bootstrap(document, [mainApplicationName]);
    });
})();
//# sourceMappingURL=app.js.map