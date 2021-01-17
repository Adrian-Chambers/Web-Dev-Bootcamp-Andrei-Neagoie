//Evaluate these:
//#1  Answer: both are false, because they're different objects with different references
[2] === [2]     
{} === {}        

//#2 what is the value of property a for each object.
const object1 = { a: 5 };   // Answer: 4
const object2 = object1;    // Answer: 4
const object3 = object2;    // Answer: 4
const object4 = { a: 5};    // Answer: 5
object1.a = 4;              


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(){
        console.log(`Moooo! My name is ${name}. I am a ${color} ${type}.`)
    }
}

const cow = new Mamal("Spot", "cow", "white")