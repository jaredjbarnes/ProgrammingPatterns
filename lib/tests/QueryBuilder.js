"use strict";

var _QueryBuilder = require("../fluent/QueryBuilder");

var _QueryBuilder2 = _interopRequireDefault(_QueryBuilder);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["QueryBuilder: Simple AST."] = function () {

    var builder = new _QueryBuilder2.default();
    builder.isProperty("firstName").equalTo("John").and().isProperty("lastName").equalTo("Doe").or().isProperty("firstName").equalTo("Jane").and().isProperty("lastName").equalTo("Doe");

    _assert2.default.equal();
};
//# sourceMappingURL=QueryBuilder.js.map