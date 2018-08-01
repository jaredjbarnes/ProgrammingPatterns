import JavascriptVisitor from "../visitor/JavascriptVisitor";
import QueryBuilder from "../builder/QueryBuilder";
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

    assert.equal(results.length, 1);
    assert.equal(results[0].firstName, "John");
}