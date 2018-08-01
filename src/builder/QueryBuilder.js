import QueryFactory from "../factory/QueryFactory";
import OperationBuilder from "./OperationBuilder";

export default class QueryBuilder {

    constructor(type) {
        this.type = type;
        this.rootNode = null;
        this.factory = new QueryFactory();
    }

    and() {
        if (this.rootNode && this.rootNode.type !== "and") {

            const node = this.factory.createAndNode();

            node.children.push(this.rootNode);
            this.rootNode = node;

        } else {
            this.rootNode = this.factory.createAndNode();
        }

        return this;
    }

    or() {
        if (this.rootNode && this.rootNode.type !== "or") {

            const node = this.factory.createOrNode();

            node.children.push(this.rootNode);
            this.rootNode = node;

        } else {
            this.rootNode = this.factory.createOrNode();
        }

        return this;
    }

    isProperty(propertyName) {
        if (this.rootNode == null) {
            this.rootNode = this.factory.createAndNode();
        }

        const builder = new OperationBuilder(this, this.rootNode, propertyName);
        return builder;
    }

    getQuery() {
        return this.rootNode;
    }

}
