function resLayout(){
    var w=window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    let func=document.getElementById("functions");
    var h1 = document.getElementById('title-h1');
    var img = getObj('title-ico-img');
    var menu = getObj('title-menu');
    var login = getObj('login-a');
    if(w <= 950){
        func.style.display="none";
        menu.style.display = 'inline-block';
        login.style.display = 'none';
    }
    else{
        func.style.display="inline-flex";
        menu.style.display = 'none';
        login.style.display = 'inline-block';
    }
    if (w <= 595){
        h1.style.display = 'none';
    }else{
        h1.style.display = 'inline-block';
    }
}

window.addEventListener('resize',resLayout);
window.addEventListener('load',resLayout);

function showContent(){
    getObj('half-dark').style.display = 'block';
    document.getElementById("functions-content").style.display="inline-block";
}
function hideContent(){
    getObj('half-dark').style.display = 'none';
    document.getElementById("functions-content").style.display="none";
}

function changeContent(){
    if (getObj('functions-content').style.display === 'inline-block')
        hideContent();
    else showContent();
}

function setBottomBar(){
    getObj('bottom-bar').style.top = (Math.max(window.innerHeight - getObj('bottom-bar').offsetHeight,document.body.clientHeight + 20) ) + 'px';
}

window.addEventListener('load',setBottomBar);
window.addEventListener('resize',setBottomBar);
window.addEventListener('DOMSubtreeModified',setBottomBar);