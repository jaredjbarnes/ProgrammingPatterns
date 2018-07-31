"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _Person = require("../observable/Person");

var _Person2 = _interopRequireDefault(_Person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["Person: Change first name."] = function () {
    var person = new _Person2.default();
    var notifiedCount = 0;

    person.firstName = "John";
    person.lastName = "Doe";

    var observer = person.observe("propertyChange", function (event) {
        _assert2.default.equal(event.property, "firstName");
        _assert2.default.equal(event.newValue, "Jane");
        _assert2.default.equal(event.oldValue, "John");

        notifiedCount++;
    });

    person.firstName = "Jane";

    observer.dispose();

    person.firstName = "John";

    _assert2.default.equal(notifiedCount, 1);
};
//# sourceMappingURL=Observable.js.map