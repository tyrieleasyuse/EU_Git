var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
    }
    MyClass.prototype.run = function (speed) {
        console.log('Hello ' + this.name + '. Your Speed is ' + speed);
    };
    return MyClass;
}());
var o = new MyClass("Tyriel");
o.run(100);
//# sourceMappingURL=Hello World.js.map