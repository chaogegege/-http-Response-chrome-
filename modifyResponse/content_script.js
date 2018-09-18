var s = document.createElement("script");
s.src = chrome.extension.getURL("xml.js");
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);


function isJSON(str) {
    if (typeof str == 'string') {
        try {
            var obj=JSON.parse(str);
            if(typeof obj == 'object' && obj ){
                return true;
            }else{
                return false;
            }

        } catch(e) {
            //console.log('error：'+str+'!!!'+e);
            return false;
        }
    }
    //console.log('It is not a string!')
}


var url = location.href;

setTimeout(function()
  {






var urlarr = localStorage.getItem("edmajaxurl");
urlarr = JSON.parse( urlarr );
console.log(urlarr);
var allItem = [];
if(urlarr&&urlarr.indexOf(url)>=0)
{
     console.log(url);
     $("body").html("");
     allItem = localStorage.getItem(url+"jsons_temp3");
     allItem = JSON.parse( allItem );
     if(!allItem)
     {
         allItem = {};
     }

      what = localStorage.getItem(url+"jsons_temp3_xz");


    console.log(what);
    for(var i in allItem)
    {
        if(i == what)
        {
           $("body").append("<input name='edmradio' id='edmjbnxz' checked='checked' type='radio'></input><input data-id='"+i+"' value='"+i+"'><textarea>"+allItem[i]+"</textarea><button id='edmjbnxiug'>修改</button><br/>")

        }
        else
        {
            $("body").append("<input name='edmradio' id='edmjbnxz' type='radio'></input><input data-id='"+i+"' value='"+i+"'><textarea>"+allItem[i]+"</textarea><button id='edmjbnxiug'>修改</button><br/>")

        }
    }

    if(!what)
    {
        $("body").append("<input name='edmradio' checked='checked'  id='edmjbnxzno' type='radio'>一个都不选</input><br/>");
    }
    else
    {
        $("body").append("<input name='edmradio' id='edmjbnxzno' type='radio'>一个都不选</input><br/>");
    }
    
    console.log("yesyes")
    $("body").append("<input id='edmjbnname'><textarea id='contentshell'></textarea><button id='addOne'>add</button><input name='edmradio' id='edmjbnxz' type='radio'>选择</input>");
}

$("#addOne").click(function(e)
{
      var txt = $("#contentshell").val();
      var name = $("#edmjbnname").val();
      
      if(isJSON(txt)&&name)
      {
         allItem[name] = txt;
         console.log(allItem);
         localStorage.setItem(url+"jsons_temp3",JSON.stringify(allItem));
      }
})

$("#edmjbnxiug").click(function(e)
{
      var name = $(this).prev().prev().val();
      var txt = $(this).prev().val();
      var bie = $(this).prev().prev().data("id");
      console.log(txt)
      console.log(name)
      console.log(bie)
      delete allItem[bie];
      
      if(isJSON(txt)&&name)
      {
         allItem[name] = txt;
         console.log(allItem);
         localStorage.setItem(url+"jsons_temp3",JSON.stringify(allItem));
      }
})


$("#edmjbnxz").click(function(e)
{
      var name = $(this).next().val();
    
      localStorage.setItem(url+"jsons_temp3_xz",name);
      
})


$("#edmjbnxzno").click(function(e)
{
  
      localStorage.setItem(url+"jsons_temp3_xz","");
      
})












  },1000)


