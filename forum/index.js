window.addEventListener('load',function(){
    const IP = getIP(17668);
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        getObj('forumList').innerHTML = '';
        var spl1 = ajax.responseText.split('&');
        console.log(spl1);
        if (!spl1[0])return;
        for (var i = spl1.length - 1;i >= 0;i --){
            ajax.onload = function(){
                var spl2 = ajax.responseText.split('&');
                getObj('forumList').innerHTML += 
                '<div class="forum-container">'
                + '<h2 class="blue">' + decodeURIComponent(spl2[0]) + '</h2>'
                + '<p>' + decodeURIComponent(spl2[1])
                + '</div>';
            }
            ajax.open('POST',IP + '/forum/content');
            ajax.send('id=' + spl1[i]);
        }
    }
    ajax.open('POST',IP + '/forum/childs');
    ajax.send('fa=0');
})