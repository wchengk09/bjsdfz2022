function getChange(){
    var idx = getObj('mode').selectedIndex;
    if (idx == 0)location.href = '../';
    if (idx == 2)location.href = './average-speed';
    if (idx == 3)location.href = './distance';
}

var prev_wei,prev_jing;
var prev_time;

function dispLocation(p){
    var wei = p.coords.latitude;
    var jing = p.coords.longitude;
    var tm = Date.now();
    if (prev_wei !== undefined && prev_jing != undefined){
        var speed_ms = getDis(wei,jing,prev_wei,prev_jing) / (tm - prev_time);
        getObj('speed-m-s').innerHTML = speed_ms * 1000000;
        getObj('speed-km-h').innerHTML = speed_ms * 3600000;
        prev_wei = wei;
        prev_jing = jing;
        prev_tm = tm;
    }
    setTimeout(getJingWei,1000);
}

function err(){
    getObj('speed-km-h').innerHTML 
        = getObj('speeed-m-s').innerHTML
        = '浏览器不支持';
}

function getJingWei(){
    console.log('Getting JingWei...');
    var loc = window.navigator.geolocation;
    if (loc)loc.getCurrentPosition(dispLocation,err,{enableHighAccuracy: true, maximumAge: 0});
    else err();
}

getJingWei();