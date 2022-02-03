class Animal{
    constructor(name){
    this._name = name;
    this._hunger = 50;
    this._thirst = 50;
    this._boredom = 50
    this._energy = 50
    }
    get name(){
    return this._name;
    }
    get hunger(){
    return this._hunger;
    }
    get thirst(){
    return this._thirst;
    }
    get boredom(){
        return this._boredom
    }
    get energy(){
        return this._energy
    }
    eat() {
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
            console.log(`${this._name} passed out...`);
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
    constructor(name, loveWalk){
        super(name)
        this._loveWalks = loveWalk
    }
    get lovesWalks(){
        return this._loveWalks
    }
}

const bruce = new Dog("Bruce", true)

console.log(bruce)