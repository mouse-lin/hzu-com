//---------------------------------------------
// 用于初始化所有的函数, 这里的函数将直接在html页面调用

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
