//function setTime(){ 
//   //判断时间
//   var date = new Date();
//   var hour = date.getHours();
//   var sunHour = [6,7,8,9,10,11,12,13,14,15,16,17,18];
//   var dayTime = "night";
//   if($.inArray(hour,sunHour) != -1 )
//     dayTime = "sun";
//   var weather = $("#weather");
//   var weatherHtmlFile = dayTime == "sun"? "sun.html" : "night.html"; 
//   weather.load(weatherHtmlFile);
//};

//白天云朵移动效果
function cloudMoveLeft(cloud){ 
    cloud.animate({ left: "+=30" },4000,function(){ 
        cloudMoveRight(cloud);
    })
}
function cloudMoveRight(cloud){ 
    cloud.animate({ left: "-=30" },4000,function(){ 
        cloudMoveLeft(cloud);
    })
};

//黑夜星星移动效果
function startMove(start){ 
    start.animate({ left: "+=30" },4000);  
};

// 启动天气
function start(dayTime){  
   //白天情景
   if(dayTime == "sun"){  
       $("#body").css("background-image","url(images/weather/sun/sun.jpg)")
       //weather.load("sun.html");
       var cloudRed = $('#cloud-red');
       var cloudGreen = $('#cloud-green');
       var elSunRays = $('#sun-rays');
       var sunFace = $('#sun-face');
       var sunRotation = 0;
       cloudMoveRight(cloudRed);
       cloudMoveLeft(cloudGreen);
       setInterval(function() {
           if (elSunRays) {
               sunRotation ++;
               //cloudRed.css("width")
               if (sunRotation >= 361) sunRotation = 0;
               elSunRays.css('-webkit-transform', 'rotate(' + sunRotation + 'deg)');
               elSunRays.css('-moz-transform', 'rotate(' + sunRotation + 'deg)');
               elSunRays.css('-ms-transform', 'rotate(' + sunRotation + 'deg)');
               elSunRays.css('transform', 'rotate(' + sunRotation + 'deg)');
           }
       }, 30);
   }else{ 
       //weather.load("night.html");
      //---------------------------------------------
      // 晚上情景
      $("#body").css("background-image","url(images/weather/night/night.jpg)")
      var moon = $('#moon');
      var starF = $('#star_f');
      var starFi = $('#star_fi');
      var moonMove = 0, time = 0;
      setInterval(function(){ 
         if(moon){  
             if( time == 30 && moonMove > 0 ) 
             {  
               moonMove --;
             }
             else
             {  
               moonMove ++;
               time == 30? time = 1 : time ++;
             };
             moon.css('-webkit-transform', 'rotate(' + moonMove + 'deg)');
             moon.css('-moz-transform', 'rotate(' + moonMove + 'deg)');
             moon.css('-ms-transform', 'rotate(' + moonMove + 'deg)');
             moon.css('transform', 'rotate(' + moonMove + 'deg)');

             starF.css('-webkit-transform', 'rotate(' + (moonMove - 60) + 'deg)');
             starF.css('-moz-transform', 'rotate(' + (moonMove - 60) + 'deg)');
             starF.css('-ms-transform', 'rotate(' + (moonMove -60) + 'deg)');
             starF.css('transform', 'rotate(' + (moonMove -60) + 'deg)');

             starFi.css('-webkit-transform', 'rotate(' + moonMove + 'deg)');
             starFi.css('-moz-transform', 'rotate(' + moonMove + 'deg)');
             starFi.css('-ms-transform', 'rotate(' + moonMove + 'deg)');
             starFi.css('transform', 'rotate(' + moonMove + 'deg)');
         };
       },50);
   };
};
