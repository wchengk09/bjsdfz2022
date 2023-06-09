function LOAD(){
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        if (!ajax.responseText)
            location.href = '/login';
        else{
            var obj = QS2JSON(ajax.responseText);
            getObj('username').value = decodeURIComponent(obj.username);
            getObj('name').value = decodeURIComponent(obj.realname);
            getObj('class').value = decodeURIComponent(obj.class) || '';
            getObj('year').value = decodeURIComponent(obj.enrollmentYear) || '';
            getObj('code').value = decodeURIComponent(obj.stuCode) || '';
        }
    }
    ajax.open('POST',getIP(17668) + '/userinfo');
    ajax.send(queryString({sessionid: sessID()}));
}
LOAD();

function logOut(){
    if (!confirm('确定要退出登录吗？'))return;
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        alert(ajax.responseText);
        if (ajax.responseText === '退出登录成功！')
            location.href += '';
    }
    ajax.open('POST',getIP(17668) + '/logout');
    ajax.send('sessionid=' + sessID());
}

function modifyInfo(){
    const elems = ['username','name','class','year','code'];
    for (var i = 0;i < elems.length;i ++)
        getObj(elems[i]).disabled = false;
    getObj('bt-modify').style.display = 'none';
    getObj('bt-post').style.display = 'inline-block';
    getObj('bt-cancel').style.display = 'inline-block';
}

function cancelModify(){
    const elems = ['username','name','class','year','code'];
    for (var i = 0;i < elems.length;i ++)
        getObj(elems[i]).disabled = true;
    getObj('bt-modify').style.display = 'inline-block';
    getObj('bt-post').style.display = 'none';
    getObj('bt-cancel').style.display = 'none';
    LOAD();
}

function postInfo(){
    if (!getObj('username').value){
        alert('诶呦没写名~\n用户名为必填项哦！');
        return;
    }
    if (!getObj('name').value){
        alert('诶呦没写名~\n姓名为必填项哦！');
        return;
    }
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        alert(ajax.responseText);
        if (ajax.responseText === '修改信息成功！')
            location.href += '';
    }
    ajax.open('POST',getIP(17668) + '/modifyuserinfo');
    ajax.send(queryString({
        username: encodeURIComponent(getObj('username').value),
        realname: encodeURIComponent(getObj('name').value),
        class: encodeURIComponent(getObj('class').value),
        enrollmentyear: encodeURIComponent(getObj('year').value),
        stuCode: encodeURIComponent(getObj('code').value),
        sessionid: sessID()
    }));
}

function modifyPassword(){
    if (!getObj('password0').value){
        alert('原密码为必填项哦！');
        return;
    }
    if (!getObj('password').value){
        alert('密码为必填项哦！');
        return;
    }
    if (getObj('password').value !== getObj('password2').value){
        alert('两次输入的密码不一致！');
        return;
    }
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        alert(ajax.responseText);
        if (ajax.responseText === '修改密码成功！')
            location.href += '';
    }
    ajax.open('POST',getIP(17668) + '/modifypassword');
    ajax.send(queryString({
        oldpassword: encodeURIComponent(getObj('password0').value),
        newpassword: encodeURIComponent(getObj('password').value),
        sessionid: sessID()
    }));
}