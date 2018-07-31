import Visitor from "./Visitor";

export default class JavascriptVisitor extends Visitor {
    and(...args) {
        return `(${args.join(" && ")})`;
    }

    or (...args) {
        return `(${args.join(" || ")})`;
    }

    contains(property, value){
        return `${property}.toLowerCase().indexOf(${JSON.stringify(value.toLowerCase())}) >= 0`;
    }

    isEqualTo(property, value){
        return `${property} === ${value}`;
    }

    isNotEqualTo(property, value){
        return `${property} !== ${value}`;
    }

    isGreaterThan(property, value){
        return `${property} > ${value}`;
    }

    isGreaterThanOrEqualTo(property, value){
        return `${property} >= ${value}`;
    }

    isLessThan(property, value){
        return `${property} < ${value}`;
    }

    isLessThanOrEqualTo(property, value){
        return `${property} <= ${value}`;
    }

    string(value){
        return JSON.stringify(value);
    }

    boolean(value){
        return value.toString();
    }

    number(value){
        return value;
    }

    array(){
        throw new Error("Not yet Implemented");
    }

    object(){
        throw new Error("Not yet Implemented");
    }

    propertyName(name){
        return name;
    }

    property(type, name){
        return `${type}[${JSON.stringify(name)}]`;
    }

    type(){
        return "entity";
    }

    createFilter(node){

        const condition = this.visit(node);
        const body = `return ${condition}`;

        return new Function("entity", body);

    }
}
