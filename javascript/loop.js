
let input=10;
console.log(input/2);
if(input%2==0){
    console.log("even");
}
else{
    console.log("odd");
  }


  let int=8;
  if(int<=100&& 90<=int){
    console.log("O grade")
  }
  else if(int<=90&&int>=80){
    console.log("A+ grade");
  }
  else if(int<=80&&int>=70){
    console.log("A grade");
  }
  else{
    console.log("fail");
  }

  // let num1=Number(prompt("enter value"));
  // let num2=Number(prompt("enter value"));
  // let option=prompt("entr option");
  //   switch(option){
  //       case"+":
  //         console.log("add",num1+num2);
  //         break;
  //       case"-":
  //         console.log("sub",num1-num2);
  //         break;
  //         case"*":
  //         console.log("mul",num1*num2);
  //         break;
  //         case"/":
  //         console.log("div",num1/num2);
  //         break;
  //   }

let str="hello";
let sum=0;
for(let j=0;j<str.length;j++){
    if((str.charAt(j)=="a")||(str.charAt(j)=="e")||(str.charAt(j)=="i")||(str.charAt(j)=="o")||(str.charAt(j)=="u")){
    sum=sum+1;
}
}

console.log(sum);

for(let i=0;i<=10;i++){
  
  if(i==1){
    continue;
  }
  if(i==4){
    break;
  }

  console.log(i);
}
let inputs=10;
while(inputs>5){
  console.log(inputs--);

}
let i=0;
let intt=75;
for(let j=0;j<=100;j++){
while(j==75){
  
  console.log(i+1);
}
}