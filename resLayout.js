function resLayout(){
    var w=window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    let func=document.getElementById("functions");
    let h1 = document.getElementById('title-h1');
    if(w<=850){
        func.style.display="none";
        h1.style.display = 'none';
    }
    else{
        func.style.display="inline-flex";
        h1.style.display = 'none';
    }
}

window.addEventListener('resize',resLayout);
window.addEventListener('load',resLayout);