const STOPPED = "stopped";
const STARTED = "started";
const DISPOSED = "disposed";
const EMPTY_FUCNTION = ()=>{};

export default class Observer {
    constructor({type, dispose, callback}) {

        this.config = {
            type: type || null,
            onDispose: typeof onDispose === "function" ? onDispose : EMPTY_FUCNTION,
            callback: typeof callback === "function" ? callback : EMPTY_FUCNTION
        };

        this.state = STARTED;
    }

    start(){
        if (this.state === STOPPED){
            this.state = STARTED;
        }
    }

    stop(){
        if (this.state === STARTED){
            this.state = STOPPED;
        }
    }

    dispose(){
        if (this.state === STARTED || this.state === STOPPED){
            this.state = DISPOSED;
            this.config.onDispose();
        }
    }

    notify(event){
        if (event.type === this.config.type && this.state === STARTED){
            this.config.callback(event);
        }
    }
}