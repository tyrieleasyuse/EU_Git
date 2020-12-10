var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
    }
    MyClass.prototype.Say = function () {
        var sentence = "Hello World. " + this.name; //要用這個奇怪的符號才能做StringFormat
        console.log(sentence);
    };
    MyClass.prototype.run = function (speed) {
        console.log('Your Speed is ' + speed);
    };
    return MyClass;
}());
var o = new MyClass("Tyriel");
o.Say();
o.run(100);
//# sourceMappingURL=Hello World.js.map