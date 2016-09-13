var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var heh;
var n;
heh = 'a';
n = heh.length;
var Person = (function () {
    function Person(name) {
        this._name = name;
    }
    Person.prototype.speak = function () {
        console.log("...");
    };
    return Person;
}());
var p1 = new Person("Mr");
p1.speak;
var Batman = (function (_super) {
    __extends(Batman, _super);
    function Batman(name, realName) {
        _super.call(this, name);
        this._realName = realName;
    }
    Batman.prototype.speak2 = function () {
        console.log("I'm BATMAN!");
    };
    return Batman;
}(Person));
var batman = new Batman("Bruce", "Wayne");
batman.speak2();
//# sourceMappingURL=games.js.map