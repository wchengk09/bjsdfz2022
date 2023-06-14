function getLoc(){
    var url = location.href;
    var arrUrl = url.split("/");
    var ret = "";
    for (var i = 3;i < arrUrl.length;i ++)
        ret += "/" + arrUrl[i];
    return ret;
}

function getObj(id){
    return document.getElementById(id);
}
function getParam(key){
    var spl1 = location.href.split("?");
    if (spl1.length < 2)
        return "";
    var spl2 = spl1[1].split("&");
    if (spl2.length == 0)
        return "";
    for (var i = 0;i < spl2.length;i ++){
        var spl3 = spl2[i].split("=");
        if (spl3.length < 2)return "";
        if (spl3[0] == key)
            return spl3[1];
    }
    return "";
}
function Play(url){
    var voice = new Audio(url);
    voice.play();
}
function setChar(str,idx,ch){
    return str.slice(0,idx) + ch + str.slice(idx + 1,str.length);
}
function setCookie(key,value,sec,path){
    document.cookie = key + '=' + value + ";" + "max-age=" + (sec * 24 * 60 * 60) + ";path=" + path + ';';
}
function getCookie(key){
    var cook = document.cookie;
    var spl1 = cook.split(";");
    for (var i = 0;i < spl1.length;i ++){
        var spl2 = spl1[i].split("=");
        if (spl2.length < 2)return "";
        if (spl2[0] == key || spl2[0] == ' ' + key)
            return spl2[1];
    }
    return "";
}
function Sleep(ms){
    var stdt = new Date();
    var sttm = stdt.getTime();
   	while (1){
        var eddt = new Date();
        var edtm = eddt.getTime();
        if (edtm - sttm >= ms)break;
    }
}

function getIP(port){
    var ajax = new XMLHttpRequest();
    ajax.open('GET','/domain/' + port + '.txt?' + Math.random(),false);
    ajax.send();
    return ajax.responseText;
}

function isPhone() {
    //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
    var info = navigator.userAgent;
    //通过正则表达式的test方法判断是否包含“Mobile”字符串
    var isPhone = /mobile/i.test(info);
    //如果包含“Mobile”（是手机设备）则返回true
    return isPhone;
}

//Generate Session id
(function(){
    if (getCookie('WCKSESSID'))return;
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        setCookie('WCKSESSID',ajax.responseText,3600*24*30,'/');
    }
    ajax.open('POST',getIP(17666) + '/sessionid');
    ajax.send();
})();

function sessID(){
    return getCookie('WCKSESSID');
}

function cleanArray_JSONQS(actual) {
    const newArray = []
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i])
      }
    }
    return newArray
  }
 
function queryString(json) {
    if (!json) return ''
    return cleanArray_JSONQS(Object.keys(json).map(key => {
        if (json[key] === undefined) return ''
        return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key])
    })).join('&')
}

function QS2JSON(qs){
    var obj = new Object();
    var spl1 = qs.split('&');
    for (var i = 0;i < spl1.length;i ++){
        var spl2 = spl1[i].split('=');
        obj[spl2[0]] = spl2[1];
    }
    return obj;
}