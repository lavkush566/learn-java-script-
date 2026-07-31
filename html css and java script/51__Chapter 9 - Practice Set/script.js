
/*const loadscript = async(src)=>{
    return new Promise((resolve,reject) => {
        let script = document.createElement("Script");
        script.src = src
        script.onload = ()=>{
            resolve(src + "done succes")
        }
        document.head.append(script)

    })
}
let a=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js");
a.then((value)=>{
    console.log(value);
});*/



// =========Qus2========
//==============solution======
/*const main2 = async () => {
    console.log(new Date())
    let a= await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js");
    console.log(a)
    console.log(new Date())
}

main2()*/


// =============QUESTION 3 SOLUTION=======

/*let p= () =>{
    return new Promise((resolve,rekect) =>{
        setTimeout(()=>{
            reject(new Error("pless this is not accetable"))
        },3000)
    })
}

let a = async () =>{
    try{
        let c = await p()
        console.log(c)
    }
    catch(err){
        console.log("this erroe has been handled")
    }
}*/
  //=============QUESTION 4 SOLUTION=============
let p1 =async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000);
    });
}

let p2 =async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },2000);
    });
}


let p3 =async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(40)
        },4000);
    });
}

const run = async () =>{
    console.time("run")
    let a1 =  p1()
    let a2 =  p2()
    let a3 =  p3()
    let a1a2a3 = await Promise.all([a1,a2,a3]);
    console.log(a1a2a3)
    // console.log(a1,a2,a3)
    console.timeEnd("run");
}

run()



