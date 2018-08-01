import SqlVisitor from "../visitor/SqlVisitor";
import QueryBuilder from "../builder/QueryBuilder";
import assert from "assert";

exports["SqlVisitor: Simple"] = () => {
    const queryBuilder = new QueryBuilder("person");
    const query = queryBuilder
        .isProperty("firstName")
        .equalTo("John")
        .getQuery();

    const visitor = new SqlVisitor();
    const selectStatement = visitor.createSql(query);

    assert.equal(selectStatement, "SELECT * FROM person WHERE (firstName = \"John\")");
}