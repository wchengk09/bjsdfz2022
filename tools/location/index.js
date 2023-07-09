function getChange(){
    var idx = getObj('mode').selectedIndex;
    if (idx == 1)location.href = './speed';
    if (idx == 2)location.href = './average-speed';
    if (idx == 3)location.href = './distance';
}

function dispLocation(p){
    getObj('wei').innerHTML = p.coords.latitude;
    getObj('jing').innerHTML = p.coords.longitude;
    getObj('haiba').innerHTML = p.coords.altitude;
    setTimeout(getJingWei,0);
}

function err(){
    getObj('wei').innerHTML 
        = getObj('jing').innerHTML
        = getObj('haiba').innerHTML
        = '浏览器不支持';
}

function getJingWei(){
    console.log('Getting JingWei...');
    var loc = window.navigator.geolocation;
    if (loc)loc.getCurrentPosition(dispLocation,err,{enableHighAccuracy: true, maximumAge: 0});
    else err();
}

getJingWei();