const mypromise = new Promise((resolve,reject)=>{
    let marks = 80;
    if(marks>33){
        resolve("pass");
    }else{
        reject("fail");
    }

})
const myPromise = new promise((resolve,reject)=>{
    let marks = 80;
    if(marks>33){
        resolve("pass");
    }else{
        reject("fail");
    }

})

myPromise.then((msg) =>console.log(msg))
.catch((error)=>console.log("some error occured."))
//console.log(myPromise)

constf1 = async() =>{
    const msg = await myPromise;
    console.log(msg);
}
f1();