const namePet = document.getElementById("name").value;
const petType = document.getElementById("petType").value;
const input = document.querySelector("input");
const createPet = document.getElementById("createPet")

createPet.addEventListener(`click`, () =>{
    if (petType = "Dog"){
        namePet = new Dog;
    }   else if (petType = "Snake") {
        namePet = new Snake;
    } else if (petType = "Goat") {
        namePet = new Goat;
    }
})

class Animal{
    constructor(name, petType){
    this._name = name;
    this._petType = petType
    this._hunger = 50;
    this._thirst = 50;
    this._happiness = 50
    this._energy = 50
    }
    get name(){
    return this._name;
    }
    get petType(){
        return this._petType
    }
    get hunger(){
    return this._hunger;
    }
    get thirst(){
    return this._thirst;
    }
    get boredom(){
        return this._happiness
    }
    get energy(){
        return this._energy
    }
    feed(){
        this._hunger-=30;
        this._thirst+=5;
        this._energy+=30;
        this._happiness+=10;
        if (this._hunger==100) {
            console.log(`${this._name} ran away to find food`);
        } else {
            console.log(`${this._name} is fuller!`);
            console.log(`${this._name}'s hunger level is ${this._hunger}`);
        }
    }
    drink(){
        this._hunger+=5;
        this._thirst-=30;
        this._energy+=10;
        if (this._thirst==100) {
            console.log(`${this._name} ran away to find water`);
        } else {
            console.log(`${this._name} is hydrated!`);
            console.log(`${this._name}'s thirst level is ${this._thirst}`);
        }
    }
    play(){
        this._hunger+=30;
        this._thirst+=30;
        this._energy-=30;
        this._happiness+=30;
        if (this._energy==0) {
            console.log(`${this._name} has passed out`);
        } else {
            console.log(`${this._name} is playing!`);
            console.log(`${this._name}'s happiness level is ${this._happiness}`);
        }
    }
    sleep(){
        this._hunger+=20;
        this._thirst+=20;
        this._energy+=60;
        if (this._energy==100) {
            console.log(`${this._name} woke up`);
        } else {
            console.log(`${this._name} is still sleepy`);
            console.log(`${this._name}'s energy level is ${this._energy}`);
        }
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
        this._petType = "Dog"
    }
}

class Snake extends Animal{
    constructor(name){
        super(name)
        this._petType = "Snake"
    }
}

class Goat extends Animal{
    constructor(name){
        super(name)
        this._petType = "Goat"
    }
}
