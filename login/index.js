function login(){
    var username = getObj('username').value;
    var password = getObj('password').value;
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        alert(ajax.responseText);
        /*if (ajax.responseText === '登录成功！')
            location.href = '/';*/
    }
    ajax.open('POST',getIP(18667));
    ajax.send(queryString({
        mode: 'user',
        type: 'login',
        username: username,
        password: password,
        sessionid: sessID()
    }));
}