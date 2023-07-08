function txtCount(){
    var val = getObj('title').value.length;
    getObj('txt-count').innerHTML = val + '/256';
    getObj('title').value=getObj('title').value.slice(0,256);
    if (val > 256)
        getObj('txt-count').style.color = 'red';
    else
        getObj('txt-count').style.color = 'black'; 
    setTimeout(txtCount,50);
}
txtCount();

function contentCount(){
    var val = getObj('content').value.length;
    getObj('content-count').innerHTML = val + '/4096';
    getObj('content').value=getObj('content').value.slice(0,4096);
    if (val > 4096)
        getObj('content-count').style.color = 'red';
    else
        getObj('content-count').style.color = 'black'; 
    setTimeout(contentCount,50);
}
contentCount();

function addrows(){
    var val=getObj('content').value;
    var rows = 0;
    for (var i = 0;i < val.length;i ++)
        if (val[i] == '\n')rows ++;
    if (rows)console.log(rows);
    getObj('content').rows = Math.min(rows,17) + 3;
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