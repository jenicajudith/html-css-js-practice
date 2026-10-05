let arr=["hello",90,true,"9","78",["one","two",4,6,7]];
console.log(arr[5][1][2]);
// last in first out 
arr.push("judi");
console.log("push",arr);
arr.pop();
console.log(arr);

// first in first out 
let arr1=["one"];
arr1.unshift("teow");
// arr1.shift();
console.log(arr1);

let arr2=[1,2,3,4,5,6];
 //start , length remove, replace
arr2.splice(3,2,7,8,9)
console.log(arr2);

let set1= new Set([10,20,23,83,10]);
set1.add(30);
console.log(set1.size);
set1.delete(20);
console.log(set1);
// set1.clear();
console.log(set1.values());
console.log(set1.has(23));
console.log(set1.entries());
console.log(set1.keys());

let map=new Map([[1,"judi"],[2,"welcome"],[3,40]]);

console.log(map.get(1));

for(let [productkey, productvalue] of map){
    console.log("map", productvalue,productkey);
}
for(let result of set1){
    console.log("set1",result)

}
for(let r in arr1){
    // console.log("arr",arr1[r]=="three");
    if(arr1=="three"){
        console.log(r)
    }
}
