/******************************

脚本功能∶ 方弗相机——解锁会员
下载地址：https://is.gd/rQMOpW
软件版本：1.6.0
脚本作者：彭于晏💞
更新时间：2023-2-25
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
  
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/FFXJ.js


^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]
 
hostname=api.revenuecat.com


***********************************/



var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf5fb9=["\x32\x30\x32\x32\x2D\x30\x39\x2D\x30\x38\x54\x30\x31\x3A\x30\x35\x3A\x32\x30\x5A","\x32\x30\x32\x32\x2D\x30\x39\x2D\x30\x38\x54\x30\x31\x3A\x30\x34\x3A\x30\x33\x5A","\x38","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x73\x2E\x61\x70\x70\x6C\x65\x2E\x63\x6F\x6D\x2F\x61\x63\x63\x6F\x75\x6E\x74\x2F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x50\x55\x52\x43\x48\x41\x53\x45\x44","\x6E\x6F\x72\x6D\x61\x6C","\x32\x30\x32\x39\x2D\x31\x32\x2D\x31\x38\x54\x30\x31\x3A\x30\x34\x3A\x31\x37\x5A","\x32\x30\x32\x32\x2D\x30\x39\x2D\x30\x38\x54\x30\x31\x3A\x30\x34\x3A\x31\x38\x5A","\x32\x30\x32\x32\x2D\x30\x39\x2D\x30\x38\x54\x30\x31\x3A\x30\x34\x3A\x31\x37\x5A","\x61\x70\x70\x5F\x73\x74\x6F\x72\x65","\x63\x6F\x6D\x2E\x75\x7A\x65\x72\x6F\x2E\x66\x75\x6E\x66\x6F\x72\x63\x61\x6D\x2E\x6D\x6F\x6E\x74\x68\x6C\x79\x73\x75\x62","\x32\x30\x32\x32\x2D\x30\x39\x2D\x30\x37\x54\x31\x33\x3A\x30\x35\x3A\x34\x33\x5A","\x24\x52\x43\x41\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x49\x44\x3A\x64\x64\x67\x6B\x73\x66\x32\x30\x31\x33","\u606D\u559C\u4F60\u6293\u5230\u5143\u6570\u636E\uFF01\u7531\u58A8\u9C7C\u5206\u4EAB\uFF0C\u8BF7\u52FF\u552E\u5356\u6216\u5206\u4EAB\u4ED6\u4EBA\uFF01","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var obj={"\x72\x65\x71\x75\x65\x73\x74\x5F\x64\x61\x74\x65\x5F\x6D\x73":1662599120248,"\x72\x65\x71\x75\x65\x73\x74\x5F\x64\x61\x74\x65":__Oxf5fb9[0x0],"\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72":{"\x6C\x61\x73\x74\x5F\x73\x65\x65\x6E":__Oxf5fb9[0x1],"\x66\x69\x72\x73\x74\x5F\x73\x65\x65\x6E":__Oxf5fb9[0x1],"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x5F\x76\x65\x72\x73\x69\x6F\x6E":__Oxf5fb9[0x2],"\x6F\x74\x68\x65\x72\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x73":{},"\x6D\x61\x6E\x61\x67\x65\x6D\x65\x6E\x74\x5F\x75\x72\x6C":__Oxf5fb9[0x3],"\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73":{"\x63\x6F\x6D\x2E\x64\x64\x67\x6B\x73\x66\x32\x30\x31\x33\x2E\x70\x72\x65\x6D\x69\x75\x6D\x2E\x79\x65\x61\x72\x6C\x79":{"\x69\x73\x5F\x73\x61\x6E\x64\x62\x6F\x78":false,"\x6F\x77\x6E\x65\x72\x73\x68\x69\x70\x5F\x74\x79\x70\x65":__Oxf5fb9[0x4],"\x62\x69\x6C\x6C\x69\x6E\x67\x5F\x69\x73\x73\x75\x65\x73\x5F\x64\x65\x74\x65\x63\x74\x65\x64\x5F\x61\x74":null,"\x70\x65\x72\x69\x6F\x64\x5F\x74\x79\x70\x65":__Oxf5fb9[0x5],"\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":__Oxf5fb9[0x6],"\x67\x72\x61\x63\x65\x5F\x70\x65\x72\x69\x6F\x64\x5F\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":null,"\x75\x6E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5F\x64\x65\x74\x65\x63\x74\x65\x64\x5F\x61\x74":null,"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf5fb9[0x7],"\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf5fb9[0x8],"\x73\x74\x6F\x72\x65":__Oxf5fb9[0x9]},"\x63\x6F\x6D\x2E\x75\x7A\x65\x72\x6F\x2E\x66\x75\x6E\x66\x6F\x72\x63\x61\x6D\x2E\x6D\x6F\x6E\x74\x68\x6C\x79\x73\x75\x62":{"\x69\x73\x5F\x73\x61\x6E\x64\x62\x6F\x78":false,"\x6F\x77\x6E\x65\x72\x73\x68\x69\x70\x5F\x74\x79\x70\x65":__Oxf5fb9[0x4],"\x62\x69\x6C\x6C\x69\x6E\x67\x5F\x69\x73\x73\x75\x65\x73\x5F\x64\x65\x74\x65\x63\x74\x65\x64\x5F\x61\x74":null,"\x70\x65\x72\x69\x6F\x64\x5F\x74\x79\x70\x65":__Oxf5fb9[0x5],"\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":__Oxf5fb9[0x6],"\x67\x72\x61\x63\x65\x5F\x70\x65\x72\x69\x6F\x64\x5F\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":null,"\x75\x6E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5F\x64\x65\x74\x65\x63\x74\x65\x64\x5F\x61\x74":null,"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf5fb9[0x7],"\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf5fb9[0x8],"\x73\x74\x6F\x72\x65":__Oxf5fb9[0x9]}},"\x65\x6E\x74\x69\x74\x6C\x65\x6D\x65\x6E\x74\x73":{"\x50\x72\x6F\x56\x65\x72\x73\x69\x6F\x6E":{"\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":__Oxf5fb9[0x6],"\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf5fb9[0x8],"\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf5fb9[0xa],"\x67\x72\x61\x63\x65\x5F\x70\x65\x72\x69\x6F\x64\x5F\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":null},"\x45\x6E\x74\x69\x74\x6C\x65\x6D\x65\x6E\x74\x2E\x50\x72\x6F":{"\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":__Oxf5fb9[0x6],"\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf5fb9[0x8],"\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf5fb9[0xa],"\x67\x72\x61\x63\x65\x5F\x70\x65\x72\x69\x6F\x64\x5F\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":null}},"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf5fb9[0xb],"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x70\x70\x5F\x75\x73\x65\x72\x5F\x69\x64":__Oxf5fb9[0xc],"\x6E\x6F\x6E\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73":{}},"\x41\x74\x74\x65\x6E\x74\x69\x6F\x6E":__Oxf5fb9[0xd]};$done({body:JSON[__Oxf5fb9[0xe]](obj)});;;(function(_0x6f5ex2,_0x6f5ex3,_0x6f5ex4,_0x6f5ex5,_0x6f5ex6,_0x6f5ex7){_0x6f5ex7= __Oxf5fb9[0xf];_0x6f5ex5= function(_0x6f5ex8){if( typeof alert!== _0x6f5ex7){alert(_0x6f5ex8)};if( typeof console!== _0x6f5ex7){console[__Oxf5fb9[0x10]](_0x6f5ex8)}};_0x6f5ex4= function(_0x6f5ex9,_0x6f5ex2){return _0x6f5ex9+ _0x6f5ex2};_0x6f5ex6= _0x6f5ex4(__Oxf5fb9[0x11],_0x6f5ex4(_0x6f5ex4(__Oxf5fb9[0x12],__Oxf5fb9[0x13]),__Oxf5fb9[0x14]));try{_0x6f5ex2= __encode;if(!( typeof _0x6f5ex2!== _0x6f5ex7&& _0x6f5ex2=== _0x6f5ex4(__Oxf5fb9[0x15],__Oxf5fb9[0x16]))){_0x6f5ex5(_0x6f5ex6)}}catch(e){_0x6f5ex5(_0x6f5ex6)}})({})