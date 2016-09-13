var heh : string;
var n : number;
heh='a';
n=heh.length;

class Person{
    protected _name : string;

    constructor(name:string){
        this._name=name;
    }

    public speak():void{
        console.log("...");
    }
}

var p1: Person = new Person("Mr");
p1.speak;

class Batman extends Person{

    private _realName:string;

    public speak2():void{
        console.log("I'm BATMAN!");
    }

    constructor(name:string, realName:string){
       super(name);
        this._realName=realName;

    }
}

var batman: Batman = new Batman("Bruce","Wayne");
batman.speak2();