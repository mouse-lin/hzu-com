// forked from m_hijazee's "rain" http://jsdo.it/m_hijazee/cB1q
var canvas = document.getElementById("show-rain");
canvas.width = "800";
canvas.height = "600";
var ctx = canvas.getContext("2d");
var drops = [];

var MAX_DROPS = 500;

var lineargradient = ctx.createLinearGradient(canvas.width/2,0,canvas.width/2,canvas.height);  
/* Drop Class. Lets being the digital rain! */
function Drop(){
  
   
  this.x = Math.floor(Math.random()*canvas.width);
  this.y = 0;
  this.width = Math.floor(Math.random()*4+1);
  this.shade = Math.floor(Math.random()*180+50);
  this.color = "rgba(" + this.shade + "," + this.shade + "," + this.shade + ", 0.5)";
  
  this.vy = 3 + this.width*Math.random()*12;
    
  this.vx = 0;

  
  this.draw = function(ctx){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  
  this.fall = function(ctx){
    
    
    if(this.y >= canvas.height){
      this.x = Math.floor(Math.random()*canvas.width);
      this.y = 0;
      this.width = Math.floor(Math.random()*1+1);
      this.vy = 3 + this.width*Math.random()*20;
      this.height = this.vy*0.75;
    }
    
    this.y += this.vy;
    this.x += this.vx;
    
     this.draw(ctx);
  };
}

var lightning = false;
function doLightning(){
    lightning = true;
    setTimeout(function(){
    	lightning = false;
	setTimeout(function(){
    	 lightning = true;
	    	setTimeout(function(){
    		 lightning = false;
		},  100);
	},  100);
    },  100);
    setTimeout(doLightning, 5000 + Math.random() * 10000);
};
//doLightning();

function Update(){
  ctx.clearRect(0, 0,canvas.width, canvas.height);
    if(lightning){
	  ctx.fillStyle = "#fff";
    } else {
      ctx.fillStyle = lineargradient;
    }
  ctx.fillRect(0,0,canvas.width, canvas.height);
  for(var i =0; i < MAX_DROPS; i++)
    drops[i].fall(ctx);
}


function init(){
   for(var i =0; i < MAX_DROPS; i++)
     drops[i] = new Drop();
  setInterval(Update, 20);
}


function cleanUp(){
  
  for(var i =0; i < MAX_DROPS; i++)
    delete drops[i];
}


init();

