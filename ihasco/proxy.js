function sendScormMessage(msg,vars){

    var id = "proxyframe", //The name of the frame
        proxy = frames[id], //Look for existing frame with name "proxyframe"
        url_array,
        pairs,
        url;

    if(!msg){
        return false;
    }

    msg = msg.replace(/\?/gi, "%3F");
    msg = encodeURI(msg);

    url = scorm_root+"proxy.html?msg=" +msg;

    if(vars) {
        vars = encodeURI(vars);
        url +="&vars=" +vars;
    }


    if(proxy){
        proxy.location.href = url;
    } else {
        var iframe = document.createElement("iframe");
        iframe.id = id;
        iframe.name = id;
        iframe.src = url;
        iframe.style.display = "none";
        document.body.appendChild(iframe);
    }
    return false;
}