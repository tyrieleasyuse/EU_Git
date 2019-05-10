
class MyClass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    Say() {
        var sentence: string = `Hello World. ${this.name}`; //要用這個奇怪的符號才能做StringFormat
        console.log(sentence);
    }

    run(speed: number) {
        console.log('Your Speed is ' + speed);
    }
}

let o = new MyClass("Tyriel");

o.Say();
o.run(100);