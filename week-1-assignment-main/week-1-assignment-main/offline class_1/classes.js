class Animal {
    constructor(name){ // to initialise the object
        this.name = name;
    }

    talk() {
        console.log(this.name +" " + "can Bhow"); //method in the class
    }

    static exists() { // these are class methods, can be accessed with the class name.
        console.log("Animals exists!")
    }
}

dog = new Animal("Bobby"); //new object created.
dog.talk(); //method called.
