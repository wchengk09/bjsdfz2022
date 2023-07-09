const R = 6371;

function degToRad(x){
    return x * Math.PI / 180;
}

function convert(x,y){
    var ret = new Object();
    var 
}

function getDis(x1,y1,x2,y2){
    x1 = degToRad(x1);
    x2 = degToRad(x2);
    y1 = degToRad(y1);
    y2 = degToRad(y2);

    var dx = x2 - x1;
    var dy = y2 - y1;

}