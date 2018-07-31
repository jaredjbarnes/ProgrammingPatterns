"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Observer = require("./Observer");

var _Observer2 = _interopRequireDefault(_Observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable = function () {
    function Observable() {
        _classCallCheck(this, Observable);

        this.observers = [];
    }

    _createClass(Observable, [{
        key: "notify",
        value: function notify(event) {
            this.observers.forEach(function (observer) {
                observer.notify(event);
            });
        }
    }, {
        key: "observe",
        value: function observe(type, callback) {
            var observers = this.observers;

            var observer = new _Observer2.default({
                dispose: function dispose() {
                    var index = observers.indexOf(observer);

                    if (index > -1) {
                        observers.splice(index, 1);
                    }
                },

                type: type,
                callback: callback
            });

            observers.push(observer);

            return observer;
        }
    }]);

    return Observable;
}();

exports.default = Observable;
//# sourceMappingURL=Observable.js.map