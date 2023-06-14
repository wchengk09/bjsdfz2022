function signUp(){
    if (!getObj('username').value){
        alert('诶呦没写名~\n用户名为必填项哦！');
        return;
    }
    if (!getObj('password').value){
        alert('密码为必填项哦！');
        return;
    }
    if (!getObj('name').value){
        alert('诶呦没写名~\n姓名为必填项哦！');
        return;
    }
    if (getObj('password').value !== getObj('password2').value){
        alert('两次输入的密码不一致！');
        return;
    }
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        alert(ajax.responseText);
        if (ajax.responseText === '注册成功！')
            location.href = '/login';
    }
    ajax.open('POST',getIP(18667));
    ajax.send(queryString({
        mode: 'user',
        type: 'signup',
        username: encodeURIComponent(getObj('username').value),
        password: encodeURIComponent(getObj('password').value),
        realname: encodeURIComponent(getObj('name').value),
        class: encodeURIComponent(getObj('class').value),
        enrollmentyear: encodeURIComponent(getObj('year').value),
        stuCode: encodeURIComponent(getObj('code').value)
    }));
}

(function(){
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        if (ajax.responseText)
            location.href = '/userinfo';
    }
    ajax.open('POST',getIP(17668) + '/userinfo');
    ajax.send(queryString({sessionid: sessID()}));
})();