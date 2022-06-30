class Person {
    #address;
    #age;

    name;

    constructor(name, address, age){
        this.name=name;
        this.#address = address;
        this.#age = age;
    }

    isAgeGreaterThan(number){
        return this.#age > number;
    }

    /*
    #getInfo(){
        // return this.isAgeGreaterThan(5);
        // return this.isAgeGreaterThan(15);
        return `This person have address in ${this.#address} and his age is ${this.#age}`;
    }

    printInfo(){
        console.log(this.#getInfo());
        // this.isAgeGreaterThan(5);
        // this.isAgeGreaterThan(20);
    }
    */

}

const obj = new Person("Irvan", "Jakarta", 20);
// console.log(obj.printInfo());
console.log(obj.isAgeGreaterThan(17));