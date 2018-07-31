"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QueryFactory = require("../factory/QueryFactory");

var _QueryFactory2 = _interopRequireDefault(_QueryFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OperationBuilder = function () {
    function OperationBuilder(queryBuilder, rootNode, propertyName) {
        _classCallCheck(this, OperationBuilder);

        this.factory = new _QueryFactory2.default();
        this.rootNode = rootNode;
        this.propertyName = propertyName;
        this.queryBuilder = queryBuilder;
    }

    _createClass(OperationBuilder, [{
        key: "getQuery",
        value: function getQuery() {
            return this.rootNode;
        }
    }, {
        key: "contains",
        value: function contains(value) {
            var node = this.factory.createContainsNode();
            var valueNode = this.factory.createValueNode(value);
            var propertyNode = this.factory.createPropertyNode(valueNode.type, this.propertyName);

            node.children.push(propertyNode, valueNode);
            this.rootNode.children.push(node);

            return this.queryBuilder;
        }
    }, {
        key: "equalTo",
        value: function equalTo(value) {
            var node = this.factory.createIsEqualToNode();
            var valueNode = this.factory.createValueNode(value);
            var propertyNode = this.factory.createPropertyNode(valueNode.type, this.propertyName);

            node.children.push(propertyNode, valueNode);
            this.rootNode.children.push(node);

            return this.queryBuilder;
        }
    }, {
        key: "notEqualTo",
        value: function notEqualTo(value) {
            var node = this.factory.createIsNotEqualToNode();
            var valueNode = this.factory.createValueNode(value);
            var propertyNode = this.factory.createPropertyNode(valueNode.type, this.propertyName);

            node.children.push(propertyNode, valueNode);
            this.rootNode.children.push(node);

            return this.queryBuilder;
        }
    }, {
        key: "greaterThan",
        value: function greaterThan(value) {
            var node = this.factory.createIsGreaterThanNode();
            var valueNode = this.factory.createValueNode(value);
            var propertyNode = this.factory.createPropertyNode(valueNode.type, this.propertyName);

            node.children.push(propertyNode, valueNode);
            this.rootNode.children.push(node);

            return this.queryBuilder;
        }
    }, {
        key: "greaterThanOrEqualTo",
        value: function greaterThanOrEqualTo(value) {
            var node = this.factory.createIsGreaterThanOrEqualToNode();
            var valueNode = this.factory.createValueNode(value);
            var propertyNode = this.factory.createPropertyNode(valueNode.type, this.propertyName);

            node.children.push(propertyNode, valueNode);
            this.rootNode.children.push(node);

            return this.queryBuilder;
        }
    }, {
        key: "lessThan",
        value: function lessThan(value) {
            var node = this.factory.createIsLessThanNode();
            var valueNode = this.factory.createValueNode(value);
            var propertyNode = this.factory.createPropertyNode(valueNode.type, this.propertyName);

            node.children.push(propertyNode, valueNode);
            this.rootNode.children.push(node);

            return this.queryBuilder;
        }
    }, {
        key: "lessThanOrEqualTo",
        value: function lessThanOrEqualTo(value) {
            var node = this.factory.createIsLessThanOrEqualToNode();
            var valueNode = this.factory.createValueNode(value);
            var propertyNode = this.factory.createPropertyNode(valueNode.type, this.propertyName);

            node.children.push(propertyNode, valueNode);
            this.rootNode.children.push(node);

            return this.queryBuilder;
        }
    }]);

    return OperationBuilder;
}();

exports.default = OperationBuilder;
//# sourceMappingURL=OperationBuilder.js.map