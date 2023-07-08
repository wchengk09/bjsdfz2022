var base64=[];
var sizesum=0;

function txtCount(){
    var val = getObj('title').value.length;
    getObj('txt-count').innerHTML = val + '/256';
    getObj('title').value=getObj('title').value.slice(0,256);
    if (val > 256){
        getObj('txt-count').style.color = 'red';
        txtCount();
    }
    else
        getObj('txt-count').style.color = 'black';
}
txtCount();

function contentCount(){
    var val = getObj('content').value.length;
    getObj('content-count').innerHTML = val + '/4096';
    getObj('content').value=getObj('content').value.slice(0,4096);
    if (val > 4096){
        getObj('content-count').style.color = 'red';
        contentCount();
    }
    else
        getObj('content-count').style.color = 'black';
}
contentCount();

function addrows(){
    var val=getObj('content').value;
    var rows = 0;
    for (var i = 0;i < val.length;i ++)
        if (val[i] == '\n')rows ++;
    getObj('content').rows = Math.max(Math.min(rows,20),6);
    setTimeout(addrows,50);
}
addrows();

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

function edit(){
    getObj('editContent').className="bold underline";
    getObj('previewContent').className="";
    getObj('content-div').style="";
    getObj('preview-div').style="display: none;";
}
function preview(){
    getObj('previewContent').className="bold underline";
    getObj('editContent').className="";
    getObj('content-div').style="display: none;";
    getObj('preview-div').style="";
    var converter=new showdown.Converter({parseImgDimensions: true, simplifiedAutoLink: true, strikethrough: true, tables: true, simpleLineBreaks: true, underline: true, moreStyling: true});
    getObj('preview-div').innerHTML=converter.makeHtml(getObj('content').value);
    renderMathInElement(getObj('preview-div'), {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: true},
            {left: '\\[', right: '\\]', display: false}
        ],
        throwOnError : true,
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"]
    });
    hljs.highlightAll();
}

async function loadfile(){
    var files=getObj('upload-file').files;
    if(window.FileReader){
        for(var i=0;i<files.length;i++){
            var fr=new FileReader();
            fr.readAsDataURL(files[i]);
            await new Promise(function(res){
                fr.onloadend=function(e){
                    if(sizesum+files[i].size>1048576){
                        alert("您上传的文件总大小已超过1MB，请停止上传");
                    }
                    else{
                        base64[base64.length]=e.target.result;
                        getObj('file-titles').innerHTML+='<button id=\"'+(base64.length-1)+'\" class=\"upload-file-buttons white-button\">'+files[i].name+'<i class="fa fa-times" onclick=\"delfile('+(base64.length-1)+')\"></i>'+'</button>';
                    }
                    res();
                }
            });
        }
        console.log(base64);
    }
    else{
        alert('非常抱歉，您的浏览器不支持上传文件');
    }
}
function delfile(id){
    getObj(String(id)).style='display: none;';
    getObj(String(id)).id='-1';
    base64.splice(id,1);
}