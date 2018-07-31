import Node from "./Node";

export default class CompositeNode extends Node {
    constructor(type) {
        super(type);
        this.isComposite = true;
        this.children = [];
    }
}