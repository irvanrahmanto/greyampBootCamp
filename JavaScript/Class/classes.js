// Define a class
class Actor {
    // Do The enkapsulation in javaScript
    // Private properties
    #name;
    #address;

    // Static properties
    static active = true;

    // Public properties
    age = 57;

    // Define a constructor of the class
    constructor(name, address){
        console.log("Actor class initialized!");
        this.#name = name;
        this.#address = address;
    }

    #getInfo(){
        return `${this.#name} lives in ${this.#address}.`;
    }

    printInfo(){
        console.log(this.#getInfo());
    }
}

const actor = new Actor("Irvan Rahmanto!", "Malang!");
console.log(actor.printInfo());
// console.log(Actor.active);