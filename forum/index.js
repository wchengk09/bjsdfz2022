const IP = getIP(17668);

function getContent(spl1){
    return new Promise(function(resolve){
        var ajax = new XMLHttpRequest();
        ajax.onload = function(){
            var spl2 = ajax.responseText.split('&');
            resolve(spl2);
        }
        ajax.open('POST',IP + '/forum/content');
        ajax.send('id=' + spl1);
    })
}

window.addEventListener('load',function(){
    var ajax = new XMLHttpRequest();
    ajax.onload = async function(){
        getObj('forumList').innerHTML = '';
        var spl1 = ajax.responseText.split('&');
        if (!spl1[0])return;
        for (var i = spl1.length - 1;i >= 0;i --){
            var spl2 = await getContent(spl1[i]);
            console.log(spl2);
            getObj('forumList').innerHTML += 
            '<div class="forum-container">'
            + '<h2>' + decodeURIComponent(spl2[0]) + '</h2>'
            + '<p>' + decodeURIComponent(spl2[1])
            + '</div>';
        }
    }
    ajax.open('POST',IP + '/forum/childs');
    ajax.send('fa=0');
})

async function addForum(){
    if (!await logined()){
        if (confirm('请先登录！是否立即跳转登录？'))location.href = '/login';
        return;
    }
    location.href = '/forum/newforum/';
}