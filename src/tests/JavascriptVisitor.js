import JavascriptVisitor from "../visitor/JavascriptVisitor";
import QueryBuilder from "../fluent/QueryBuilder";
import assert from "assert";

exports["JavascrptVisitor: Simple"] = () => {
    const queryBuilder = new QueryBuilder("person");
    const query = queryBuilder
        .isProperty("firstName")
        .equalTo("John")
        .getQuery();

    const visitor = new JavascriptVisitor();
    const filter = visitor.createFilter(query);

    const array = [{firstName: "Jared"}, {firstName: "John"}];
    const results = array.filter(filter);

}