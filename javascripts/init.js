//---------------------------------------------
// 用于初始化所有的函数, 这里的函数将直接在html页面调用

// 时间判断初始化
function timeInit(){ 
   var date = new Date();
   var hour = date.getHours();
   var sunHour = [6,7,8,9,10,11,12,13,14,15,16,17,18];
   Weather.dayTime = "night";
   if($.inArray(hour,sunHour) != -1 ){  
       Weather.dayTime = "sun";
       $("#day_change").html("黑夜");
   }else{ 
       $("#day_change").html("白天");
   };
   Weather.weather = $("#weather");
   Weather.weatherHtmlFile = Weather.dayTime == "sun"? "sun.html" : "night.html"; 
}

//back-to-top
function backToTop(){ 
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }); 
}

// 白天黑夜切换功能初始化
function weatherChangeInit(dayTime,weather,weatherHtmlFile){ 
    $("#day_change").click(function(){ 
        if(dayTime == "sun"){ 
           dayTime = "night";
           changeBackGround(dayTime);
           $("#day_change").html("白天");
           weatherHtmlFile = "night.html";
           weather.load(weatherHtmlFile,function(){ 
               start(dayTime)
           });
        }else{ 
           dayTime = "sun";
           changeBackGround(dayTime);
           $("#day_change").html("黑夜");
           weatherHtmlFile = "sun.html";
           weather.load(weatherHtmlFile,function(){ 
               start(dayTime)
           });

        }
    })
}

function loginClick(){ 
    $("#login").click(function(){ 
        $("#myModal").modal();
    });
}


// 隐藏功能函数初始化
function hideActionInit(){ 
   $("#hide_class").toggle(function(){ 
       $("#top_content").hide("slow");
       $("#hide_class").html("显示") ;
   },function(){ 
      $("#top_content").show("slow"); 
      $("#hide_class").html("隐藏");
   });
}

function photoShowInit(){ 
     // buttons for next and previous item						 
     var buttons = { previous:$('#jslidernews1 .button-previous'),next:$('#jslidernews1 .button-next') };			
      $('#jslidernews1').lofJSidernews( { interval : 4000,
                       direction		: 'opacitys',	
                       easing			: 'easeInOutExpo',
                       duration		: 1200,
                       auto		 	: false,
                       maxItemDisplay  : 4,
                       navPosition     : 'horizontal', // horizontal
                       navigatorHeight : 32,
                       navigatorWidth  : 80,
                       mainWidth		: 980,
                       buttons			: buttons 
     });	
}

// 获取前台url
function GetRequest() {
     var url = location.search; //获取url中"?"符后的字串
     var theRequest = new Object();
     if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
           theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
     }
     return theRequest;
}

