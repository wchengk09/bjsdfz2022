function txtCount(){
    var val = getObj('title').value.length;
    getObj('txt-count').innerHTML = val + '/1024';
    if (val > 1024)
        getObj('txt-count').style.color = 'red';
    else
        getObj('txt-count').style.color = 'black'; 
    setTimeout(txtCount,50);
}
txtCount();

function submit(){
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        alert(ajax.responseText);
        if (ajax.responseText == '成功！')
            location.href = '/forum/';
    }
    ajax.open('POST',getIP(17668) + '/forum/insert');
    ajax.send(queryString({
        fa: 0,
        sessionid: sessID(),
        content: encodeURIComponent(getObj('title').value)
    }));
}