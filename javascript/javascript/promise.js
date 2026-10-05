//promise =>resove reject ,pending

//  then catch finally

//promise1
 function promise1(){
    return new Promise(function(reslove,reject){
let name="a";
        if(name==="an"){
            setTimeout(()=>{
          reslove("true state: "+name); //then
            },5000)
        }else{
            setTimeout(()=>{
       reject("false state");// catch
            },5000)
        }

    })
 }

 //single promise
// promise1()
//  .then(function(response){
//     console.log("then",response);
//  })
//  .catch(function(data){
//  console.log("catch",data);  
//  })
//  .finally(
//     function(){
//         console.log("thank you for the time");
//     }
//  )

//  promise 2
 
function promise2(){
    return new Promise(function(trues,falses){
        setTimeout( ()=>{
      let num=32;
      if(num%2===0) {
        trues("even");
      }else{
    falses("false =>")
      }
    },3001)}

)
}

const states=()=>{
    return new Promise((success,fail)=>{

        setTimeout(()=>{
        let num=1;
        if(num===1){
success("success 3")
        }else{
fail("failure");
        }
    },3000)
}
    );
}

// chaining 

promise1().then((response)=>{
console.log("one",response);

return promise2();
})
.then((data)=>{
console.log("two",data);
})
.catch((data)=>{
    console.log(data);
    promise2().then(
        (team)=>{
            console.log(team);
        }
    ).catch(
        (team)=>{
            console.log(team);
        }
        )
    
})


// // short
// const adds=(a=10,b=20)=>a+b;
// console.log(adds());
//allsetteled  =>true or flase all function


//all=> true all, one flase
 Promise.all([promise2(),promise1(),states()])
 .then(function(response){
    console.log("then",response);
 })
 .catch(function(data){
 console.log("catch",data);  
 })
 .finally(
    function(){
        console.log("thank you for the time");
    }
 )

//  Promise.all([promise2().,promise1(),states()])
//  .then(function(response){
//     console.log("then",response);
//  })
//  .catch(function(data){
//  console.log("catch",data);  
//  })
//  .finally(
//     function(){
//         console.log("thank you for the time");
//     }
//  )


//  Promise.race([promise2(),promise1(),states()])
//  .then(function(response){
//     console.log("then",response);
//  })
//  .catch(function(data){
//  console.log("catch",data);  
//  })
//  .finally(
//     function(){
//         console.log("thank you for the time");
//     }
//  )

// Promise.any([promise2(),promise1(),states()])
//  .then(function(response){
//     console.log("then",response);
//  })
//  .catch(function(data){
//  console.log("catch",data);  
//  })
//  .finally(
//     function(){
//         console.log("thank you for the time");
//     }
//  )


 //


//  function add(){
//     console.log(10+20);
//  }
//  add();