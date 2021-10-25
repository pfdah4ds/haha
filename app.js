let str = require("./tuts");
//console.log(str)
// console.log(new str.class());
// console.log(str.str); 
// console.log(str.sum(4,6));


//EventEmitter Module
const EventEmitter = require('events');
const { emit } = require("process");
const eventEm = new EventEmitter();

eventEm.on('tuts',(num1,num2)=>{
    console.log(`${num1+num2} Tuts Events Occured`);
    
});
eventEm.emit('tuts',5,5);

class Person extends EventEmitter{
    constructor(name){
        super();
        this.__name = name;
    }
    get name(){
        return this.__name;
    }
}
let pratik =  new Person("Pratik");
let bips = new Person("Bipana"); 
bips.on('name',()=>{
    console.log(`My girls name is ${bips.name}`)
});
pratik.on('name',()=>{
    console.log("My Name is " + pratik.name);
});
function emitShit(){
    bips.emit('name');
    //Both of these occur simultaneously but in the order of emmission
    pratik.emit('name');
}
setTimeout(emitShit,3000);
