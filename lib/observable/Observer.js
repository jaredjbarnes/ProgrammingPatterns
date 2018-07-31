"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STOPPED = "stopped";
var STARTED = "started";
var DISPOSED = "disposed";
var EMPTY_FUCNTION = function EMPTY_FUCNTION() {};

var Observer = function () {
    function Observer(_ref) {
        var type = _ref.type,
            dispose = _ref.dispose,
            callback = _ref.callback;

        _classCallCheck(this, Observer);

        this.config = {
            type: type || null,
            onDispose: typeof onDispose === "function" ? onDispose : EMPTY_FUCNTION,
            callback: typeof callback === "function" ? callback : EMPTY_FUCNTION
        };

        this.state = STARTED;
    }

    _createClass(Observer, [{
        key: "start",
        value: function start() {
            if (this.state === STOPPED) {
                this.state = STARTED;
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            if (this.state === STARTED) {
                this.state = STOPPED;
            }
        }
    }, {
        key: "dispose",
        value: function dispose() {
            if (this.state === STARTED || this.state === STOPPED) {
                this.state = DISPOSED;
                this.config.onDispose();
            }
        }
    }, {
        key: "notify",
        value: function notify(event) {
            if (event.type === this.config.type && this.state === STARTED) {
                this.config.callback(event);
            }
        }
    }]);

    return Observer;
}();

exports.default = Observer;
//# sourceMappingURL=Observer.js.map