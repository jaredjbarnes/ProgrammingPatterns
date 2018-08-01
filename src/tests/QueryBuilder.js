import QueryBuilder from "../builder/QueryBuilder";

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