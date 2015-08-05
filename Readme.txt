                  JavaScript Log 


--------------- V1.0.0 ----------------------------------


1) Easy show/hide log in console area.
2) Easy to maintain.
3) Easy to switch the mode like Production(pro) or Development(dev). 
4) Easy colour map for dev and pro for log/warn/error. Color map is only available when log is enable.      
5) Easy to set prefix and postfix message in log/warn/error message.
6) Easy to set a global variable to check in console area(F12). Global variable functionality only work. When log is  enabled. All global variable start with nn_js_global_.
7) Easy to show alert. Alert only available when log is enable.

Pro:
 Error log is Disable.
 
Dev:
 Error log is Enable.

mode: dev
color:true


--------------- Requirements: ----------------------------
 
=> Install Jquery (https://jquery.com/download/)
=> Install Javascript Log manager js of specific version.


---------------------- Property --------------------------------------
[v1.0.0]
{
pro:{show_log:false,color:{log:{bc:'#cecece',fc:'black',bold:true},warn:{bc:'orange',fc:'black',bold:true},error:{bc:'red',fc:'black',bold:true}}},
dev:{show_log:true,color:{log:{bc:'#cecece',fc:'black',bold:true},warn:{bc:'orange',fc:'black',bold:true},error:{bc:'red',fc:'black',bold:true}}},
mode:'dev',
color:true
}

mode:  Tell which mode should be loaded.
color: Color log/warn/error should be enable or not.
show_log: Log should be enable or not. 
Note:
 show_log is enable:
   => You can make global variable and test in console.
   => log/warn/error will be printed on console otherwise it will not.
   
prefix: Set message for prefix. What to show before console. (default: null) 
repeat: How many time to repeat the message of prefix and suffix. (default: 1) 
suffix: Set message for suffix. What to show after console. (default: null) 

------------------------ Method --------------------------------------

[v1.0.0]
log(mgs): Print mgs on console.
warn(mgs): Print mgs on console.
error(mgs): Print mgs on console.
global(variableName,variableValue): Create global variable, when log is enable. Global name start with nn_js_global_{variableName}.
alert(mgs): Show the alert.
globalDef(void): Show all the global variable in console(Array).

    
   


-------------------- Create a variable ----------------------------
=> var logObj=NN_JS_Log(); //default mode: dev and color: true

If your testing code then switch the mode from dev to pro.
=> var logObj=NN_JS_Log({mode:'pro'}); //mode: pro



