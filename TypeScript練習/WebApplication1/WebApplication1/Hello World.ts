
class MyClass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    run(speed: number) {
        console.log('Hello ' + this.name + '. Your Speed is ' + speed);
    }
}

var o = new MyClass("Tyriel");

o.run(100);