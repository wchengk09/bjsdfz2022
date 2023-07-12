const R = 6371;

function degToRad(x){
    return x * Math.PI / 180;
}

function convert(x,y){
    var ret = new Object();
    ret.z = R * Math.sin(x);
    var r = R * Math.cos(x);
    ret.x = r * Math.sin(y);
    ret.y = r * Math.cos(y);
    console.log(ret);
    return ret;
}

function getDis(x1,y1,x2,y2){
    x1 = degToRad(x1);
    x2 = degToRad(x2);
    y1 = degToRad(y1);
    y2 = degToRad(y2);
    var p1 = convert(x1,y1);
    var p2 = convert(x2,y2);
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    var dz = p2.z - p1.z;
    var dis_line = Math.sqrt(dx * dx + dy * dy + dz * dz);
    var ang = 2 * Math.asin(dis_line / 2 / R);
    return ang * R;
}