import assert from "assert";
import Person from "../observable/Person";

exports["Person: Change first name."] = ()=>{
    const person = new Person();
    let notifiedCount = 0;

    person.firstName = "John";
    person.lastName = "Doe";

    const observer = person.observe("propertyChange", (event)=>{
        assert.equal(event.property, "firstName");
        assert.equal(event.newValue, "Jane");
        assert.equal(event.oldValue, "John");

        notifiedCount++;
    });

    person.firstName = "Jane";

    observer.dispose();

    person.firstName = "John";

    assert.equal(notifiedCount, 1);
}