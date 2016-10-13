(function (app) {
    app.factory('commonService', commonService);

    commonService.$inject = ['$rootScope'];
    function commonService($rootScope) {
        var data = null;

        function setValue(value) {
            data = value;
        }

        function getValue() {
            return data;
        }

        var util = {
            getCurrentDateTime: function () {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();

                var hh = today.getHours();
                var mmm = today.getMinutes();
                var ss = today.getSeconds();

                if (dd < 10) {
                    dd = '0' + dd
                }

                if (mm < 10) {
                    mm = '0' + mm
                }

                today = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + mmm + ':' + ss;
                return today;
            }
        }

        return {
            setValue: setValue,
            getValue: getValue,
            util: util
        }
    }
})(angular.module('common.core'));