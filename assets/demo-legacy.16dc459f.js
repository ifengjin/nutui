System.register(["./mobile-legacy.e480dcc3.js","./vendor-legacy.2021e78c.js","./index-legacy.cb3db0cd.js"],(function(e){"use strict";var n,c,l,t,u,s;return{setters:[function(e){n=e.c},function(e){c=e.r,l=e.o,t=e.c,u=e.f,s=e.i},function(){}],execute:function(){const{createDemo:r}=n("price");var i=e("default",r({props:{}}));const o={class:"demo"},d=u("h2",null,"基本用法",-1),a=u("h2",null,"无人民币符号，有千位分隔",-1),f=u("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1);i.render=function(e,n,r,i,p,m){const y=c("nut-price"),b=c("nut-cell");return l(),t("div",o,[d,u(b,null,{default:s((()=>[u(y,{price:1010,"need-symbol":!1,thousands:!0})])),_:1}),a,u(b,null,{default:s((()=>[u(y,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),f,u(b,null,{default:s((()=>[u(y,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])}}}}));