import Visitor from "./Visitor";

export default class SqlVisitor extends Visitor {
    and(...args) {
        return `(${args.join(" AND ")})`;
    }

    or(...args) {
        return `(${args.join(" OR ")})`;
    }

    endsWith(property, value){
        return `${property} LIKE %${value}`; 
    }

    startsWith(property, value){
        return `${property} LIKE ${value}%`; 
    }

    contains(property, value) {
        return `${property} LIKE %${value}%`;
    }

    isEqualTo(property, value) {
        return `${property} = ${value}`;
    }

    isNotEqualTo(property, value) {
        return `${property} != ${value}`;
    }

    isGreaterThan(property, value) {
        return `${property} > ${value}`;
    }

    isGreaterThanOrEqualTo(property, value) {
        return `${property} >= ${value}`;
    }

    isLessThan(property, value) {
        return `${property} < ${value}`;
    }

    isLessThanOrEqualTo(property, value) {
        return `${property} <= ${value}`;
    }

    string(value) {
        return JSON.stringify(value);
    }

    boolean(value) {
        return value.toString();
    }

    number(value) {
        return value;
    }

    array() {
        throw new Error("Not yet Implemented");
    }

    object() {
        throw new Error("Not yet Implemented");
    }

    propertyName(name) {
        return name;
    }

    property(type, name) {
        return `${name}`;
    }

    type(value) {
        this.table = value;
        return value;
    }

    createSql(node) {

        const where = this.visit(node);
        return `SELECT * FROM ${this.table} WHERE ${where}`;

    }
}
