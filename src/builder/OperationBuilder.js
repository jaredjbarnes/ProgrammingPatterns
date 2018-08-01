import QueryFactory from "../factory/QueryFactory";

export default class OperationBuilder {

    constructor(queryBuilder, rootNode, propertyName) {
        this.factory = new QueryFactory();
        this.rootNode = rootNode;
        this.propertyName = propertyName;
        this.queryBuilder = queryBuilder;
    }

    getQuery() {
        return this.rootNode;
    }

    contains(value) {
        const node = this.factory.createContainsNode();
        const valueNode = this.factory.createValueNode(value);
        const propertyNode = this.factory.createPropertyNode(this.queryBuilder.type, this.propertyName);

        node.children.push(propertyNode, valueNode);
        this.rootNode.children.push(node);

        return this.queryBuilder;
    }

    equalTo(value) {
        const node = this.factory.createIsEqualToNode();
        const valueNode = this.factory.createValueNode(value);
        const propertyNode = this.factory.createPropertyNode(this.queryBuilder.type, this.propertyName);

        node.children.push(propertyNode, valueNode);
        this.rootNode.children.push(node);

        return this.queryBuilder;
    }

    notEqualTo(value) {
        const node = this.factory.createIsNotEqualToNode();
        const valueNode = this.factory.createValueNode(value);
        const propertyNode = this.factory.createPropertyNode(this.queryBuilder.type, this.propertyName);

        node.children.push(propertyNode, valueNode);
        this.rootNode.children.push(node);

        return this.queryBuilder;
    }

    greaterThan(value) {
        const node = this.factory.createIsGreaterThanNode();
        const valueNode = this.factory.createValueNode(value);
        const propertyNode = this.factory.createPropertyNode(this.queryBuilder.type, this.propertyName);

        node.children.push(propertyNode, valueNode);
        this.rootNode.children.push(node);

        return this.queryBuilder;
    }

    greaterThanOrEqualTo(value) {
        const node = this.factory.createIsGreaterThanOrEqualToNode();
        const valueNode = this.factory.createValueNode(value);
        const propertyNode = this.factory.createPropertyNode(this.queryBuilder.type, this.propertyName);

        node.children.push(propertyNode, valueNode);
        this.rootNode.children.push(node);

        return this.queryBuilder;
    }

    lessThan(value) {
        const node = this.factory.createIsLessThanNode();
        const valueNode = this.factory.createValueNode(value);
        const propertyNode = this.factory.createPropertyNode(this.queryBuilder.type, this.propertyName);

        node.children.push(propertyNode, valueNode);
        this.rootNode.children.push(node);

        return this.queryBuilder;
    }

    lessThanOrEqualTo(value) {
        const node = this.factory.createIsLessThanOrEqualToNode();
        const valueNode = this.factory.createValueNode(value);
        const propertyNode = this.factory.createPropertyNode(this.queryBuilder.type, this.propertyName);

        node.children.push(propertyNode, valueNode);
        this.rootNode.children.push(node);

        return this.queryBuilder;
    }

}