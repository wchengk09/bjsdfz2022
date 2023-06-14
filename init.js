//Already login
(function(){
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        if (ajax.responseText)
            document.documentElement.innerHTML = document.documentElement.innerHTML.replaceAll('注册/登录','用户管理&nbsp;');
    }
    ajax.open('POST',getIP(17668) + '/userinfo');
    ajax.send(queryString({sessionid: sessID()}));
})();