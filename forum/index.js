window.addEventListener('load',function(){
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        var spl1 = ajax.responseText.split('&');
        for (var i = 0;i < spl1.length;i ++){
            ajax.onload = function(){
                var spl2 = ajax.responseText.split('&');
                
            }
        }
    }
})