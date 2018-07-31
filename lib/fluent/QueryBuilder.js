"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QueryFactory = require("../factory/QueryFactory");

var _QueryFactory2 = _interopRequireDefault(_QueryFactory);

var _OperationBuilder = require("./OperationBuilder");

var _OperationBuilder2 = _interopRequireDefault(_OperationBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryBuilder = function () {
    function QueryBuilder() {
        _classCallCheck(this, QueryBuilder);

        this.rootNode = null;
        this.factory = new _QueryFactory2.default();
    }

    _createClass(QueryBuilder, [{
        key: "and",
        value: function and() {
            if (this.rootNode && this.rootNode.type !== "and") {

                var node = this.factory.createAndNode();

                node.children.push(this.rootNode);
                this.rootNode = node;
            } else {
                this.rootNode = this.factory.createAndNode();
            }

            return this;
        }
    }, {
        key: "or",
        value: function or() {
            if (this.rootNode && this.rootNode.type !== "or") {

                var node = this.factory.createOrNode();

                node.children.push(this.rootNode);
                this.rootNode = node;
            } else {
                this.rootNode = this.factory.createOrNode();
            }

            return this;
        }
    }, {
        key: "isProperty",
        value: function isProperty(propertyName) {
            if (this.rootNode == null) {
                this.rootNode = this.factory.createAndNode();
            }

            var builder = new _OperationBuilder2.default(this, this.rootNode, propertyName);
            return builder;
        }
    }, {
        key: "getQuery",
        value: function getQuery() {
            return this.rootNode;
        }
    }]);

    return QueryBuilder;
}();

exports.default = QueryBuilder;
//# sourceMappingURL=QueryBuilder.js.map