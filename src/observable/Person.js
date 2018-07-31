import Observable from "./Observable";

export default class Person extends Observable {
    constructor(){
        super();
        this._firstName = null;
        this._lastName = null;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        const oldValue = this._firstName;
        this._firstName = value;

        this.notify({
            type: "propertyChange",
            property: "firstName",
            oldValue: oldValue,
            newValue: value
        });
    }

    get lastName(){
        return this._firstName;
    }

    set lastName(value){
        const oldValue = this._lastName;
        this._lastName = value;

        this.notify({
            type: "propertyChange",
            property: "lastName",
            oldValue: oldValue,
            newValue: value
        });
    }
}