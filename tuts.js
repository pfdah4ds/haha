const str = "from the module side......";
module.exports.sum = (n1,n2) => n1+ n2;

class SomeClass{
 constructor(){
    console.log("Hello ");
 }
};
module.exports.str = str;
module.exports.class = SomeClass;