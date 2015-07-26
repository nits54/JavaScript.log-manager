(function($,window){
var defaultOpt={
              pro:{
			               show_log:false,
					   color:{
						           log:{
								        bc:'#cecece',   
								        fc:'black',
                                        bold:true   
								       },
								   warn:{
								        bc:'orange',   
								        fc:'black',
                                        bold:true   
								       },
								   error:{
								        bc:'red',   
								        fc:'black',
                                        bold:true
								       }	   
						        	   
						         }
						 },
              dev:{
			               show_log:true,
		   				   color:{
						           log:{
								        bc:'#cecece',   
								        fc:'black',
                                        bold:true										
								       },
								  warn:{
								        bc:'orange',   
								        fc:'black',
                                        bold:true																				
								       },
						          error:{
								        bc:'red',   
								        fc:'black',
                                        bold:true   
								       }
						           
						         }
			       },
			  mode:'dev',
			  color:true
            };
			
function getInlineStyle(color,errorType){
colorArray=Object.keys(color[errorType]);
var $string='';
if(colorArray.indexOf("bc")!= -1){
       $string += 'background-color:'+color[errorType].bc+';';	
}
if(colorArray.indexOf("bold")!= -1){
       $string += 'font-weight:bold;';	
}
if(colorArray.indexOf("fc")!= -1){
       $string += 'color:'+color[errorType].fc+';';	
}
return $string;
}
var prefixFillZero=function(str){
if(str<10){
str='0'+str;
}
return str;
}
var getCurrentDate=function(){
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
h=d.getHours();
m=d.getMinutes();
i=d.getSeconds();
date=d.getDate();
date=prefixFillZero(date);
h=prefixFillZero(h);
m=prefixFillZero(m);
i=prefixFillZero(i);
$date='['+d.getFullYear()+' '+date+' '+monthNames[d.getMonth()]+','+' '+h+':'+m+':'+i+'] ';
return $date;
}
			
function fn_NN_JS_Log(updateOpt){
var self=this;
self.newOpt=$.extend( true, defaultOpt, updateOpt );  
  if('dev'==self.newOpt.mode){
    self.isLogEnable=self.newOpt.dev.show_log;
	self.isColorEnable=self.newOpt.color;
	//getCurrentProperty mode property
	self.getCurrentProperty=self.newOpt.dev;
  }else if('pro'==self.newOpt.mode){
	self.isLogEnable=self.newOpt.pro.show_log;
	self.isColorEnable=self.newOpt.color;
	//getCurrentProperty mode property
	self.getCurrentProperty=self.newOpt.pro;
  }else{
    console.error('Please select correct mode: dev, pro or you can make your own mode.');
	return false;
  }
  
self.prefix=null;
self.suffix=null;
self.repeat=1;  
self.pre=function(whichConsole,errorType){
if((self.prefix) != undefined){
repNumber=Math.abs(parseInt(self.repeat)) || 1;
preT=(self.prefix).repeat(repNumber); 
self.printMsg(whichConsole,preT,errorType);
}
};
self.post=function(whichConsole,errorType){
if((self.suffix) != undefined){
repNumber=Math.abs(parseInt(self.repeat)) || 1;
self.repeat=Math.abs(parseInt(self.repeat));
postT=(self.suffix).repeat(repNumber); 
self.printMsg(whichConsole,postT,errorType);
}
};
self.run=function(whichConsole,msg,errorType){
self.pre(whichConsole,errorType);
self.printMsg(whichConsole,msg,errorType);
self.post(whichConsole,errorType);
};
self.printMsg=function(whichConsole,msg,errorType){
$date=getCurrentDate();
if(self.isColorEnable){
inlineStyleCss=getInlineStyle(self.getCurrentProperty.color,errorType);
whichConsole((errorType.charAt(0)).toUpperCase()+': '+$date+"%c"+msg,inlineStyleCss);
}else{
whichConsole((errorType.charAt(0)).toUpperCase()+': '+$date+' '+msg);
}
}
self.global=function(vari,val){
if(self.isLogEnable){
 if(vari != undefined){
    window['nn_js_global_'+vari]=val;
  }
}
};
self.log=function(msg){
if(self.isLogEnable){
   self.run(console.log,msg,'log');
}
};
self.warn=function(msg){
if(self.isLogEnable){
self.run(console.warn,msg,'warn');
}
};
self.error=function(msg){
if(self.isLogEnable){
self.run(console.error,msg,'error');
}
};
 return self;
}
window.NN_JS_Log=function(updateOpt){
 return new fn_NN_JS_Log(updateOpt)
};
})(jQuery,window);