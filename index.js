const Imgs = 3;
var curImg = Imgs - 1;
(function switchImage(){
    curImg ++;
    curImg %= Imgs;
    getObj('img').src = '//kevinwu521.gitee.io/res/fz/' + curImg + '.jpg';
    setTimeout(switchImage,4000);
})();

function setWidth(){
    const wid = window.innerWidth;
    const cnt = Math.floor(wid / 250);
    const every = wid / cnt;
    console.log(every);
    const doms = document.querySelectorAll('.index-block-out');
    console.log(doms);
    for (var i = 0;i < doms.length;i ++){
        doms[i].style.width = every + '';
        console.log(doms[i].style);
    }

}
window.addEventListener('load',setWidth);
window.addEventListener('resize',setWidth);