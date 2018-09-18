function uniq(array){
    var temp = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i]);
        }
    }
    return temp;
}



function modifyResponse(response) {

    var original_response, modified_response;
   /* console.log(this);
    console.log(response);*/
    if (true) {
        console.log(this);
        var url = this.responseURL;
        var urlarr = localStorage.getItem("edmajaxurl");
         urlarr = JSON.parse( urlarr );
        if(!urlarr)
        {
            urlarr = [];
        }

        console.log(urlarr);
        urlarr.push(url);
        urlarr = uniq(urlarr);

         localStorage.setItem("edmajaxurl",JSON.stringify(urlarr));
        console.log(url+"jsons_temp3");
        allItem = localStorage.getItem(url+"jsons_temp3");
        
         allItem = JSON.parse( allItem );

         if(allItem)
         {
            var name = localStorage.getItem(url+"jsons_temp3_xz");
            allItem = allItem[name];
             console.log("------------------------>");
              console.log(allItem);
            if(allItem)
            {
               Object.defineProperty(this, "responseText", {writable: true});
               console.log(this.responseText = (allItem)) 
            }
         }
    
    }
}

function openBypass(original_function) {

    return function(method, url, async) {
        // 保存请求相关参数
        this.requestMethod = method;
        this.requestURL = url;

        this.addEventListener("readystatechange", modifyResponse);
        return original_function.apply(this, arguments);
    };

}

function sendBypass(original_function) {
    return function(data) {
        // 保存请求相关参数
        this.requestData = data;
        return original_function.apply(this, arguments);
    };
}

XMLHttpRequest.prototype.open = openBypass(XMLHttpRequest.prototype.open);
XMLHttpRequest.prototype.send = sendBypass(XMLHttpRequest.prototype.send);