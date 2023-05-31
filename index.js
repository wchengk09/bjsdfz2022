const Imgs = 3;
var curImg = Imgs - 1;
(function switchImage(){
    curImg ++;
    curImg %= Imgs;
    getObj('img').src = '//kevinwu521.gitee.io/res/fz/' + curImg + '.jpg';
    setTimeout(switchImage,4000);
})();