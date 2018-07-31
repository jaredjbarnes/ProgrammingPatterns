import QueryBuilder from "../fluent/QueryBuilder";
import assert from "assert";

exports["QueryBuilder"] = () => {

    const builder = new QueryBuilder();
    builder.isProperty("firstName")
        .equalTo("John")
        .and()
        .isProperty("lastName")
        .equalTo("Doe")
        .or()
        .isProperty("firstName")
        .equalTo("Jane")
        .and()
        .isProperty("lastName")
        .equalTo("Doe");

}