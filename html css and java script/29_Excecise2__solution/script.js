let user=prompt("enter s,w or g")
let cpuI=Math.random() * 3;
let cpu=[S,W,G][cpuI]

const match= (cpu, user) => {
    if(cpu===user ){
        return 0
    }
    else if(cpu==="s" && user==="w" || cpu==="w" && user==="g" || cpu==="g" && user==="s"){
        return -1
    }
    else{
        return 1
    }
}
let result=match(cpu,user)
document.write(`cpu:${cpu} user:${user} \n the winner is:${result}`)