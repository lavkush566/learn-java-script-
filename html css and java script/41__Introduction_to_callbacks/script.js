// Callback

function loadScript(src, callback){
    const script =document.createElement("script");
    script.src= src;
    script.onload = function(){
        console.log("Loaded script with SRC; " + src);
        callback(null,src);
    }
    script.onerror = function() {
        console.log("Error loading script with SRC:" + src);
        callback(new Error("src got some error"))
    }


    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error);
        return;
    }
    alert ('hello world' + src)

}

function goodMorning(src){
    if(error){
        console.log(error);
        return;
    }
    alert('goodMorning' + src);

}

loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",hello);