// object function
let course={
    name:"javascript",
    add:function (a,b) {
        console.log("add",30+70);
        
    },
    word:function(name1,name2){
        return name1+name2;

    }
}
course.add(10,20);
console.log(course.word("good","day"));
console.log(course);
// /object
  class person{
constructor(name) {
this. name=name;
}

display=function(){
console.log("outptut", this.name);
}
}
const terms =new person("arun");
console.log(terms.name);
terms.Constructor("good");
console.log(terms.thing);
terms.display();
let name="10";
console.log("===",name===10);
console.log("!==","5"!==5);  
// assignment op
let a=10;
a+=10;
a-=10;

console.log(a);
// logical = and , or , not
let value=20;
console.log(value<25 && 10<value);
console.log(value>25 || 10<value);
console.log(value<25 && 10<value);
console.log(value!=20);

// bitwise opeator true-0 false-1 (or xor not)
console.log(20<30 & 20>21) //and
console.log(20<30 | 20>21)
console.log(20<30 ^ 20<21)

 let vote=10;
 console.log(vote>=18?"eligible to vote":"not eligible")


