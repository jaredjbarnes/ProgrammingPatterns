import Node from "./Node";

export default class ValueNode extends Node {
    constructor(type, value) {
        super(type);

        this.value = value || null;
    }
}