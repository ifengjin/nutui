var t=Object.assign;import{c as a}from"./mobile.c3875bc0.js";import{a as i,r as c,o as b,c as r,f as o}from"./vendor.91b30fe3.js";import"./index.00b2b72d.js";const{createDemo:n}=a("tabbar");var l=n({props:{},setup:()=>t(t({},i({tabList:[{tabTitle:"首页",curr:!1,icon:"home"},{tabTitle:"分类",curr:!1,icon:"category"},{tabTitle:"发现",curr:!1,icon:"find"},{tabTitle:"购物车",curr:!1,icon:"cart"},{tabTitle:"我的",curr:!1,icon:"my"}],tabList1:[{tabTitle:"首页",curr:!1,icon:"home"},{tabTitle:"分类",curr:!1,icon:"category"},{tabTitle:"发现",curr:!1,icon:"find"},{tabTitle:"购物车",curr:!0,icon:"cart",num:"12"},{tabTitle:"我的",curr:!1,icon:"my"}],tabList2:[{tabTitle:"首页",curr:!1,icon:"home"},{tabTitle:"分类",curr:!1,icon:"category"},{tabTitle:"我的",curr:!1,icon:"my"}],tabList3:[{tabTitle:"首页",curr:!1,icon:"home"},{tabTitle:"分类",curr:!1,icon:"category"},{tabTitle:"发现",curr:!1,icon:"find"},{tabTitle:"购物车",curr:!1,icon:"cart",num:"122"},{tabTitle:"我的",curr:!1,icon:"my"}]})),{tabSwitch:function(t,a){console.log(t,a)}})});const e={class:"demo full"},u=o("h2",null,"基础用法",-1),s=o("h2",null,"徽标提示",-1),T=o("h2",null,"自定义颜色",-1),h=o("h2",null,"三个icon的tabbar",-1),m=o("h2",null,"固定底部，可自由跳转",-1);l.render=function(t,a,i,n,l,L){const w=c("nut-tabbar");return b(),r("div",e,[u,o(w,{"tabbar-List":t.tabList,onTabSwitch:t.tabSwitch},null,8,["tabbar-List","onTabSwitch"]),s,o(w,{"tabbar-List":t.tabList1,onTabSwitch:t.tabSwitch},null,8,["tabbar-List","onTabSwitch"]),T,o(w,{unactiveColor:"#7d7e80",activeColor:"#1989fa","tabbar-List":t.tabList,onTabSwitch:t.tabSwitch},null,8,["tabbar-List","onTabSwitch"]),h,o(w,{unactiveColor:"#7d7e80",activeColor:"#1989fa","tabbar-List":t.tabList2,onTabSwitch:t.tabSwitch},null,8,["tabbar-List","onTabSwitch"]),m,o(w,{"tabbar-List":t.tabList3,onTabSwitch:t.tabSwitch,bottom:!0},null,8,["tabbar-List","onTabSwitch"])])};export default l;