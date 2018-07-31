import Observer from "./Observer";

export default class Observable {
    constructor() {
        this.observers = [];
    }

    notify(event) {
        this.observers.forEach((observer) => {
            observer.notify(event);
        });
    }

    observe(type, callback) {
        const observers = this.observers;

        const observer = new Observer({
            dispose() {
                const index = observers.indexOf(observer);

                if (index > -1) {
                    observers.splice(index, 1);
                }
            },
            type,
            callback
        });

        observers.push(observer);

        return observer;
    }
}