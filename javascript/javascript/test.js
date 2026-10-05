let strs="this is string";
console.log(typeof(strs),strs);
let bol=true;
console.log(typeof(bol),bol);
let num=20;
console.log(typeof(num),num);


function mini(a,b){
    console.log((Math.max(a,b)));

}
mini(10,40);

let arr=[1,2,3,4,5];
let count=0;
for( let i=0;i<arr.length;i++){
    count=count+arr[i];
   
}
console.log(count)

let set=new Set([1,2,3,4,5,1,2]);
console.log(set);

let map=new Map([[91,"sam"],[89,"judi"],[93,"epi"],[74,"mano"]]);
for(let [productkey, productvalue] of map){
    console.log([productvalue,productkey]);
}

let str="hello this is judith";
let sum=0;
for(let j =0;j<str.length;j++){
if(str[j]=="a"||str[j]=="e"||str[j]=="i"||str[j]=="o"||str[j]=="u"){
    sum=sum+1;
}
}
console.log("vowels in the string",str , "is",sum);

let name="JavaScript";
console.log(name.split("").reverse().join(""))


let a=144;
let b=12.78;
console.log(Math.sqrt(a));
console.log(Math.round(b));

let c=12;
if(c%2==0){
    console.log(c+" "+'is even');
}
else{
     console.log(c+" "+"is odd");
}

let array=[10,20,30,40,50,60];


 let r=Math.min(...array);
 let t=Math.max(...array);

console.log("min is" +" "+r);
console.log("max is" +" "+t);


let arr1=["chennai","trichy","coimbatore","nagercoil","madurai"];
arr1.push("chennai");
arr1.reverse();
arr1.pop();
console.log(arr1)

let que=[];
que.unshift("B","A","C");
que.shift(1);
console.log(que);

let ar=["HTML","CSS","JavaScript","React"];
ar.splice(1,1, "Bootstrap", "Tailwind")
console.log(ar)

let set1=new Set([10,20,30,20,40,10,50]);
set1.add(100);
set1.delete(30);
set1.has(50);
for(let result of set1){
console.log(result);
}
let map1=new Map([[1,"arun"],[2,"anand"],[3,"joe"]])
map1.set(4,"judi");
map1.delete(2);

for(let [productkey,productvalue] of map1){
    console.log([productkey,productvalue]);
}
 let el=["Arun", "Anand", "Joe", "Rahul", "Kiran"];
 let ell=console.log(el.splice(2,2,"Priya","Suresh"));
 console.log(el);


let arr_m=[5,10,15,20,25];
let j=arr_m.map((t) => t*2);
console.log(j);


let pro=["Laptop", "Mouse", "Keyboard", "Monitor", "Printer", "Speaker"];
pro.splice(2,3,"Webcam","Microphone");
pro.splice(0,0,"SSD");
pro.splice(6,0,"Router")
console.log(pro);


// reduce   sum of an array
let arr_re=[10,20,30];
let g=arr_re.reduce((currentstate,nextstate)=>currentstate+nextstate,10);
console.log(g);

let k=["hello","world"];
let l=k.reduce((f,n)=>f+n,100);
console.log(l);

// find 
let find=[10,20,30,40];
let f=find.find((t)=>t===40);
console.log(f);

// filter
let fil=[10,20,30,40,20,50];
let fi=fil.filter(f=>f==20);
console.log(fi);
// includes
console.log(fil.includes(40));



