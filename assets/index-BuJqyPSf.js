import{d as q,K as D,r as P,L as f,M as k,N as i,O as n,P as t,F as M,Q as S,R as r,S as I,c as v,U as g,V as R,W as X,X as Y,Y as nt}from"./@vue-d8yKmr6U.js";import{N as w,a as at,b as it,c as V,d as _,e as dt,f as j,B as H,g as lt,h as ot,i as F,j as B,k as U,l as Q,m as ut,n as J,o as rt,p as ct,q as pt}from"./naive-ui-CXYFnep3.js";import{C as mt,p as ht,b as ft,c as gt,A as yt,d as vt,L as bt,T as kt}from"./chart.js-BdzsiJWJ.js";import{D as wt,B as Ct}from"./vue-chartjs-BPnA49UC.js";import"./chartjs-adapter-date-fns-CusFIq6q.js";import"./vooks-JWyZJI3y.js";import"./evtd-CI_DDEu_.js";import"./seemly-yM8CafJ6.js";import"./lodash-es-CcwrBayY.js";import"./@emotion-WldOFDRm.js";import"./vueuc-CUqRRkyc.js";import"./@css-render-CscasePV.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./css-render-BDrvWz3H.js";import"./treemate-HRdUPn5m.js";import"./date-fns-CRMvfexS.js";import"./@babel-Bh3gSK7O.js";import"./date-fns-tz-DYExW1Oh.js";import"./@kurkle-BZxJdD1U.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}})();function st(a){window.open(a)}function Mt(a){for(let e=0;e<a.length;e++)st(a[e])}function A(a){let[e=0,s=0,d=0]=a.split(":").reverse();return+d*3600+ +s*60+ +e}function E(a){let e=a%60,s=Math.floor(a/60)%60;return Math.floor(a/3600).toString().padStart(2,"0")+":"+s.toString().padStart(2,"0")+":"+e.toString().padStart(2,"0")}const x=[{id:0,date:"2020-03-09",link:"https://www.youtube.com/watch?v=JNDva-0fPK4",title:"【惡靈】第一次深夜台",tags:["MC游乐园生存"],duration:"01:01:15"},{id:1,date:"2020-05-31",link:"https://www.youtube.com/watch?v=IYK5__0IXy0",title:"【惡靈】來耍廢廢咯",tags:["MC游乐园生存","MC地下城"],duration:"02:34:32"},{id:2,date:"2021-01-10",link:"https://www.youtube.com/watch?v=_6jm7wAPdGw",title:"【惡靈】新年新絕望",tags:["MC方格生存"],duration:"03:11:34"},{id:3,date:"2021-03-04",link:"https://www.youtube.com/watch?v=a2F9dW-SODQ",title:"【惡靈】我怎麼每次在情人節開台啊",tags:["MC游乐园生存"],duration:"02:15:26"},{id:4,date:"2021-04-11",link:"https://www.youtube.com/watch?v=npt1EELQRwQ",title:"【惡靈】想不到標題啦",tags:["MC游乐园生存"],duration:"02:33:33"},{id:5,date:"2021-05-02",link:"https://www.youtube.com/watch?v=Vy-dUa8CX5g",title:"【惡靈】 (,,・ω・,,)",tags:["MC游乐园生存","MC制作地图"],duration:"02:32:17"},{id:6,date:"2021-05-09",link:"https://www.youtube.com/watch?v=9vaXDcm-k88",title:"【惡靈】一起頹廢",tags:["MC游乐园生存","MC制作地图"],duration:"02:34:01"},{id:7,date:"2021-07-04",link:"https://www.youtube.com/watch?v=_cp96tH51aQ",title:"【惡靈】不知不覺混過半個2021年了",tags:["MC游乐园生存"],duration:"02:02:04"},{id:8,date:"2021-07-25",link:"https://www.youtube.com/watch?v=9x91crDVlTs",title:"【惡靈】想不到標題啦",tags:["MC空岛生存"],duration:"01:53:03"},{id:9,date:"2021-08-01",link:"https://www.youtube.com/watch?v=sV_Ywb9wWV4",title:"【惡靈】新的一月，爛的開始",tags:["MC空岛生存"],duration:"01:57:44"},{id:10,date:"2021-08-22",link:"https://www.youtube.com/watch?v=1ySDWr4uFbU",title:"【惡靈】養動物時間",tags:["MC空岛生存"],duration:"02:00:55"},{id:11,date:"2021-09-05",link:"https://www.youtube.com/watch?v=2Rj059hDBjg",title:"【惡靈】遲到五分鐘應該沒人發現吧",tags:["MC空岛生存"],duration:"02:01:43"},{id:12,date:"2021-09-12",link:"https://www.youtube.com/watch?v=CdTQXLh9nSk",title:"【惡靈】繼續照顧可愛的動物",tags:["MC空岛生存"],duration:"02:01:15"},{id:13,date:"2021-09-26",link:"https://www.youtube.com/watch?v=XCkvt4pneMI",title:"【惡靈】2021年剩下不到100天了喔喔喔",tags:["MC空岛生存"],duration:"02:00:48"},{id:14,date:"2021-10-10",link:"https://www.youtube.com/watch?v=K12bZD-oZlE",title:"【惡靈】一週一度直菠蘿",tags:["MC空岛生存"],duration:"01:58:56"},{id:15,date:"2021-10-17",link:"https://www.youtube.com/watch?v=emCnDYg4gno",title:"【惡靈】耍廢廢時間",tags:["MC空岛生存"],duration:"01:58:29"},{id:16,date:"2021-11-28",link:"https://www.youtube.com/watch?v=MK0v7biF9AY",title:"【惡靈】大家會不會想念我",tags:["MC游乐园生存"],duration:"02:04:47"},{id:17,date:"2021-12-05",link:"https://www.youtube.com/watch?v=3x07ndhgguQ",title:"【惡靈】我絕對沒遲到喔",tags:["MC游乐园生存"],duration:"02:00:27"},{id:18,date:"2021-12-26",link:"https://www.youtube.com/watch?v=DZc3M9bi4j0",title:"【惡靈】最後的直播",tags:["MC空岛生存"],duration:"01:45:27"},{id:19,date:"2022-01-02",link:"https://www.youtube.com/watch?v=kdtxRUkOSIs",title:"【惡靈】新年新絕望",tags:["MC游乐园生存"],duration:"01:58:49"},{id:20,date:"2022-01-16",link:"https://www.youtube.com/watch?v=fh527FMVznc",title:"【惡靈】 希望網路別爆掉",tags:["MC游乐园生存"],duration:"02:03:00"},{id:21,date:"2022-01-23",link:"https://www.youtube.com/watch?v=890NXbzTLY8",title:"【惡靈】 我就說我會補回來吧",tags:["MC空岛生存"],duration:"02:50:31"},{id:22,date:"2022-02-06",link:"https://youtu.be/Zih-03zb1uc",title:"【惡靈】 大家新年胖了多少呢",tags:["MC游乐园生存"],duration:"02:00:44"},{id:23,date:"2022-02-13",link:"https://youtu.be/pVanNQQ-bEo",title:"【惡靈】 明天情人節，但我沒情人嗚嗚",tags:["MC游乐园生存"],duration:"03:00:41"},{id:24,date:"2022-02-19",link:"https://youtu.be/0Oa6m1kn4HM",title:"【惡靈】 偷偷開直播應該沒人會發現吧",tags:["Dying Light 2"],duration:"02:51:50"},{id:25,date:"2022-02-20",link:"https://youtu.be/QT5mvk5UZso",title:"【惡靈】 來蓋遊樂園咯",tags:["MC游乐园生存"],duration:"03:25:10"},{id:26,date:"2022-03-05",link:"https://youtu.be/t6dL6HteoO0",title:"【惡靈】明天沒直播所以改到今天爽",tags:["MC游乐园生存"],duration:"2:00:28"},{id:27,date:"2022-03-13",link:"https://youtu.be/z78wJORdV40",title:"【惡靈】遊樂園時間",tags:["MC游乐园生存"],duration:"02:05:34"},{id:28,date:"2022-03-20",link:"https://youtu.be/837r7uqswWY",title:"【惡靈】遊樂園耍廢日",tags:["MC游乐园生存"],duration:"02:01:22"},{id:29,date:"2022-03-27",link:"https://youtu.be/UFL3h4mWygs",title:"【惡靈】聽說這種封面是流量密碼",tags:["MC游乐园生存"],duration:"02:02:08"},{id:30,date:"2022-04-03",link:"https://youtu.be/Ev1EMbXK_VM",title:"【惡靈】怎麼還感覺到愚人節的餘溫",tags:["MC游乐园生存","MC跑酷"],duration:"02:01:32"},{id:31,date:"2022-04-10",link:"https://youtu.be/qwFO5D-a4I0",title:"【惡靈】挖山填地咯",tags:["MC游乐园生存","MercuryLand服务器"],duration:"02:02:04"},{id:32,date:"2022-04-17",link:"https://youtu.be/MWI3slVtFfE",title:"【惡靈】來蓋水上雲霄飛車",tags:["MC游乐园生存"],duration:"02:01:29"},{id:33,date:"2022-05-01",link:"https://youtu.be/vvxml4WmIvo",title:"【惡靈】一起來勞動",tags:["MC游乐园生存"],duration:"02:02:31"},{id:34,date:"2022-05-15",link:"https://youtu.be/97CE_TfLKs8",title:"【惡靈】絕對沒遲到啦 爽",tags:["MC游乐园生存"],duration:"02:01:20"},{id:35,date:"2022-06-05",link:"https://youtu.be/ZzslOjUEmo8",title:"【惡靈】大家有吃粽子吃到吐嗎",tags:["MC游乐园生存"],duration:"02:00:56"},{id:36,date:"2022-06-19",link:"https://youtu.be/Y5fIR0DEqK4",title:"【惡靈】天啊是1.19欸",tags:["MC游乐园生存"],duration:"03:01:12"},{id:37,date:"2022-07-10",link:"https://www.youtube.com/watch?v=PPEg-_pcf9g",title:"【惡靈】繼續補直播嗚嗚",tags:["MC空岛生存"],duration:"01:57:49"},{id:38,date:"2022-07-17",link:"https://youtu.be/3n3fiuAWOf8",title:"【惡靈】大家最愛的探險來了",tags:["MC游乐园生存"],duration:"03:01:51"},{id:39,date:"2022-07-24",link:"https://youtu.be/icK0LNWay6E",title:"【惡靈】遲到五分鐘應該沒人發現吧",tags:["MC游乐园生存"],duration:"02:56:21"},{id:40,date:"2022-08-14",link:"https://youtu.be/OW2hLIkGiCg",title:"【惡靈】遲到五分鐘 我就爛",tags:["MC游乐园生存"],duration:"01:56:05"},{id:41,date:"2022-09-04",link:"https://youtu.be/_deYQHtiAKM",title:"【惡靈】直播看黑歷史啦",tags:["MC游乐园生存","恶灵黑历史","Outlast 2"],duration:"02:33:11"},{id:42,date:"2022-09-11",link:"https://youtu.be/oHAYpWrTY4M",title:"【惡靈】大家昨天有吃到烤肉嗎",tags:["MC游乐园生存"],duration:"02:05:30"},{id:43,date:"2022-09-18",link:"https://youtu.be/C-XvRn91Axs",title:"【惡靈】遠古城speed run",tags:["MC游乐园生存"],duration:"02:01:40"},{id:44,date:"2022-09-25",link:"https://youtu.be/kkGgB6QDtqc",title:"【惡靈】不知道要幹嘛",tags:["Hypixel","MercuryLand服务器"],duration:"02:03:34"},{id:45,date:"2022-10-02",link:"https://youtu.be/zxBNtW4LNuQ",title:"【惡靈】2022只剩下3個月了 哭哭",tags:["MC游乐园生存"],duration:"02:33:28"},{id:46,date:"2022-10-23",link:"https://youtu.be/BPCV1URsw_E",title:"【惡靈】希望別再被網路霸凌了",tags:["MC游乐园生存"],duration:"02:02:13"},{id:47,date:"2022-12-04",link:"https://youtu.be/ZAuEHv0elYQ",title:"【惡靈】偷偷改成晚上直播不知道會不會有人發現",tags:["MC跑酷"],duration:"02:28:41"},{id:48,date:"2022-12-11",link:"https://youtu.be/Ewx6cEGXlD4",title:"【惡靈】我叒被網路搞了",tags:["MC游乐园生存"],duration:"02:00:24"},{id:49,date:"2022-12-25",link:"https://youtu.be/rVmAHiqetCU",title:"【惡靈】來送大家聖誕禮物咯",tags:["Dark Deception"],duration:"01:58:05"},{id:50,date:"2023-01-08",link:"https://youtube.com/live/MJ7xYSKukC4",title:"【惡靈】新年新絕望",tags:["MC游乐园生存","MC跑酷"],duration:"03:05:36"},{id:51,date:"2023-01-29",link:"https://youtube.com/live/GXeBeivObm8",title:"【惡靈】大家收到了多少紅包呢",tags:["MC跑酷"],duration:"01:52:02"},{id:52,date:"2023-01-29",link:"https://youtube.com/live/6E8njTHjYpI",title:"【惡靈】直播到停電，我應該是史上第一位",tags:[],duration:"00:21:43"},{id:53,date:"2023-02-05",link:"https://youtube.com/live/CfR4Aus6_Z8",title:"【惡靈】希望今天不要再直播到停電了",tags:["MC跑酷"],duration:"03:00:41"},{id:54,date:"2023-02-19",link:"https://youtube.com/live/gX59yDQZNPs",title:"【惡靈】大家有沒有想念我啊",tags:["MC跑酷","ALTF4"],duration:"03:04:22"},{id:55,date:"2023-02-26",link:"https://youtube.com/live/c1zqQ3YP2oY",title:"【惡靈】直播廢廢時間",tags:["MC跑酷"],duration:"02:02:05"},{id:56,date:"2023-03-05",link:"https://youtube.com/live/qL-H0G983uM",title:"【惡靈】廉價加班台",tags:["MC跑酷"],duration:"01:47:39"},{id:57,date:"2023-03-05",link:"https://youtube.com/live/n60no_132Fw",title:"【惡靈】在晚上開台會發生什麼事呢",tags:["MC跑酷","MC解謎"],duration:"02:03:36"},{id:58,date:"2023-03-12",link:"https://youtube.com/live/hM1-zsgG0dM",title:"【惡靈】直播耍廢廢時間",tags:["MC跑酷","MC解謎"],duration:"03:08:21"},{id:59,date:"2023-03-19",link:"https://youtube.com/live/_LdCpuW3Pyk",title:"【惡靈】直播播咯",tags:["MC跑酷","MC速通"],duration:"04:03:29"},{id:60,date:"2023-03-26",link:"https://youtube.com/live/nPudgIJ22Xo",title:"【惡靈】網路別80我啊",tags:["MC跑酷"],duration:"01:38:19"},{id:61,date:"2023-04-02",link:"https://youtube.com/live/IlJOqQuIWtQ",title:"【惡靈】遲到五分鐘已經是慣例了",tags:["Hypixel","Poppy Playtime"],duration:"02:29:12"},{id:62,date:"2023-04-09",link:"https://youtube.com/live/-wB2gydPOV4",title:"【惡靈】每週快樂直播時間",tags:["MC速通"],duration:"02:36:18"},{id:63,date:"2023-04-16",link:"https://youtube.com/live/TyVp2Tp4WoY",title:"【惡靈】今天會不會又有懲罰呢？",tags:["MC边界生存"],duration:"02:05:11"},{id:65,date:"2023-04-23",link:"https://youtube.com/live/19gWUf51--0",title:"【惡靈】一直遲到一直爽",tags:["MC边界生存"],duration:"02:07:10"},{id:66,date:"2023-04-30",link:"https://youtube.com/live/wbP0AY1gy3E",title:"【惡靈】直播播播播",tags:["MC跑酷"],duration:"02:19:52"},{id:67,date:"2023-05-07",link:"https://youtube.com/live/l-4-qV3JiEM",title:"【惡靈】懲罰還債日",tags:["Hypixel","MC跑酷"],duration:"03:06:23"},{id:68,date:"2023-05-14",link:"https://youtube.com/live/-hQm2O1uVrM",title:"【惡靈】我前五分鐘才知道今天是母親節",tags:["MC跑酷"],duration:"02:22:03"},{id:69,date:"2023-05-21",link:"https://youtube.com/live/J768F0gEwwo",title:"【惡靈】會考加油",tags:["MC边界生存"],duration:"02:22:18"},{id:70,date:"2023-05-28",link:"https://youtube.com/live/mzhqj9SO070",title:"【惡靈】快樂直播時間",tags:["MC解謎","MC跑酷"],duration:"02:09:34"},{id:71,date:"2023-06-04",link:"https://youtube.com/live/YR38fO2P_ac",title:"【惡靈】在今天開台算不算辱華？",tags:["MC边界生存"],duration:"02:05:46"},{id:72,date:"2023-06-11",link:"https://youtube.com/live/9ENyADbuTjs",title:"【惡靈】直播啵啵啵",tags:["Garten of Banban 2","Hypixel"],duration:"02:27:49"},{id:73,date:"2023-06-18",link:"https://youtube.com/live/Qsj0oHA3Da0",title:"【惡靈】直播播耍廢廢",tags:["MC边界生存"],duration:"02:03:41"},{id:74,date:"2023-06-25",link:"https://youtube.com/live/fuuOcny-yiY",title:"【惡靈】大家有吃月餅嗎？",tags:["MC猎杀"],duration:"02:23:55"},{id:75,date:"2023-07-02",link:"https://youtube.com/live/TLY9QqfNw7g",title:"【惡靈】與世無爭的清流台",tags:["MC跑酷","女鬼桥"],duration:"02:33:08"},{id:76,date:"2023-07-09",link:"https://www.youtube.com/live/E6dawndYra0",title:"【惡靈】我不邊緣了？",tags:["MC服务器","PXJ Server"],duration:"02:00:03"},{id:77,date:"2023-07-23",link:"https://youtube.com/live/pLasYnl98a0",title:"【惡靈】大家有沒有想念我",tags:["MC跑酷","Hypixel","Pien&Paon"],duration:"03:04:57"},{id:78,date:"2023-07-30",link:"https://youtube.com/live/Q35WoMVriLI",title:"【惡靈】禁用工作台去打龍！",tags:["MC速通"],duration:"03:27:41"},{id:79,date:"2023-08-13",link:"https://youtube.com/live/j-Rw2-3F4nI",title:"【惡靈】每次直播標題都放耍廢會不會很老梗",tags:["MC跑酷","MC解謎","Slimemo"],duration:"02:03:34"},{id:80,date:"2023-08-20",link:"https://youtube.com/live/WVe7z0FJL8Y",title:"【惡靈】直播播播播",tags:["MC解謎","Hypixel"],duration:"02:21:55"},{id:81,date:"2023-08-27",link:"https://youtube.com/live/VtUW72gWyT4",title:"【惡靈】暑假要結束了 笑你們",tags:["MC冒险","Hypixel"],duration:"02:01:36"},{id:82,date:"2023-09-10",link:"https://youtube.com/live/kRYh3y4mjqs",title:"【惡靈】祝大家開學快樂",tags:["Hypixel","MC猎杀"],duration:"02:17:29"},{id:84,date:"2023-09-17",link:"https://youtube.com/live/l-LdlzEnWaA",title:"【惡靈】遲到一小時 有人會發現嗎？",tags:["MC跑酷","Getting Over It"],duration:"02:33:58"},{id:85,date:"2023-09-17",link:"https://youtube.com/live/Fw-lxbF1FLc",title:"【惡靈】遲到一小時 有人會發現嗎？PART2",tags:[],duration:"00:17:05"},{id:86,date:"2023-09-24",link:"https://youtube.com/live/KYVAL5jUNjk",title:"【惡靈】抽獎活動最後一天！不要錯過！",tags:["Hypixel"],duration:"02:30:41"},{id:87,date:"2023-10-01",link:"https://youtube.com/live/MTHcHAHU4bM",title:"【惡靈】不知不覺2023年剩下三個月了",tags:["MC猎杀"],duration:"02:31:36"},{id:88,date:"2023-10-08",link:"https://youtube.com/live/nQEpuqD1hOw",title:"【惡靈】直播虛度光陰時間",tags:["扫雷","雀魂日麻"],duration:"02:37:47"},{id:89,date:"2023-10-15",link:"https://youtube.com/live/8NJ-1RtPKk0",title:"【惡靈】直播耍廢咯",tags:["MC跑酷","Hypixel","ALTF4"],duration:"03:02:58"},{id:90,date:"2023-10-22",link:"https://youtube.com/live/xMY3HtUpZd4",title:"【惡靈】這個男人會遲到，但他從不缺席",tags:["MC跑酷","Getting Over It"],duration:"03:15:11"},{id:117,date:"2023-10-29",link:"#",title:"3̧̮͎ͧ̄̅̔͑͘d͈̦͔̎̄͋ͮ̓͋a̸̧̡͙̗̻̣̩̓v͕͈̯̟̳̤̀̾ͦ̈Ṅ͙͙̬̝̝̈̀9̴̭̮͈̍ͥ̓͛Gͨ͂ͫ̅͟r̩̟͎̺̜̝͙̓̓ͩC͖̣̓͐̅͛̐̈́͢͞D͚̲̳̈͒̋͑ͧ̚q͓̖ͪ͌̚c͕͓̻̬͇̊̓͟ͅȩ̥̮͖͔͉̉̊́͛b̦̜̦̏͟7̷̛͍͔̅ͤm̨̤̹ͤ̑ͤ͡",tags:[],duration:"00:55:00"},{id:91,date:"2023-10-29",link:"https://youtube.com/live/xhJAvTOX1CE",title:"【惡靈】萬聖節就是要深夜恐怖遊戲台",tags:["Poppy Playtime"],duration:"02:29:37"},{id:92,date:"2023-11-05",link:"https://youtube.com/live/bRMGRMhFXsA",title:"【惡靈】我今天沒有遲到喔",tags:["MC边界生存"],duration:"03:28:21"},{id:93,date:"2023-11-13",link:"https://youtube.com/live/w01-i4dbHQU",title:"【惡靈】我是深夜台開上癮了嗎",tags:["MercuryLand服务器","Five Nights at Freddy's"],duration:"02:27:39"},{id:94,date:"2023-11-19",link:"https://youtube.com/live/6H8rztj3Xss",title:"【惡靈】一起來玩大逃殺觀眾場",tags:["MC猎杀"],duration:"02:02:31"},{id:95,date:"2023-12-03",link:"https://youtube.com/live/hXR3bh1f2J4",title:"【惡靈】2023年不知不覺就混到最後一個月了！！",tags:["MC猎杀"],duration:"02:02:52"},{id:96,date:"2023-12-17",link:"https://youtube.com/live/BvMrH2QBdr4",title:"【惡靈】最喜歡在奇怪的時間直播了",tags:["MC跑酷","迷你世界"],duration:"03:10:28"},{id:97,date:"2023-12-24",link:"https://youtube.com/live/XUtnUFNTGwI",title:"【惡靈】平安夜的白天是不是叫平安日啊",tags:["MC跑酷","Hypixel"],duration:"02:26:36"},{id:98,date:"2023-12-25",link:"https://youtube.com/live/ITTr5E3a968",title:"【惡靈】大家有收到聖誕禮物嗎？",tags:["Five Nights at Freddy's","Dead by Daylight"],duration:"02:04:53"},{id:99,date:"2024-01-07",link:"https://youtube.com/live/nQ7JRHEslhk",title:"【惡靈】新年第一播就是要遲到",tags:["MC跑酷","守望先锋"],duration:"02:13:03"},{id:100,date:"2024-01-13",link:"https://youtube.com/live/2QInBuPg8NI",title:"【惡靈】第一次開深夜台😳😳",tags:["扫雷","8號出口","MC跑酷"],duration:"02:11:05"},{id:101,date:"2024-01-21",link:"https://youtube.com/live/rBrKkNhXpaw",title:"【惡靈】我的觀眾強迫我星鐵啟動",tags:["崩壞：星穹鐵道"],duration:"02:31:14"},{id:102,date:"2024-01-28",link:"https://youtube.com/live/odmbc0mFOgQ",title:"【惡靈】2024年不知不覺混過一個月了",tags:["MC解謎"],duration:"00:57:37"},{id:103,date:"2024-01-28",link:"https://youtube.com/live/UOOPf8u3nRc",title:"【惡靈】我求你別再停電了",tags:["MC解謎","螃蟹遊戲"],duration:"01:03:54"},{id:104,date:"2024-02-04",link:"https://youtube.com/live/Sw3ATFiwvvg",title:"【惡靈】大家要給我紅包嗎🧧",tags:["Hypixel"],duration:"02:12:51"},{id:118,date:"2024-02-18",link:"#",title:"3̧̮͎ͧ̄̅̔͑͘d͈̦͔̎̄͋ͮ̓͋a̸̧̡͙̗̻̣̩̓v͕͈̯̟̳̤̀̾ͦ̈Ṅ͙͙̬̝̝̈̀9̴̭̮͈̍ͥ̓͛Gͨ͂ͫ̅͟r̩̟͎̺̜̝͙̓̓ͩC͖̣̓͐̅͛̐̈́͢͞D͚̲̳̈͒̋͑ͧ̚q͓̖ͪ͌̚c͕͓̻̬͇̊̓͟ͅȩ̥̮͖͔͉̉̊́͛b̦̜̦̏͟7̷̛͍͔̅ͤm̨̤̹ͤ̑ͤ͡",tags:[],duration:"01:00:00"},{id:105,date:"2024-03-03",link:"https://youtube.com/live/Hv-TnfYx-Vw",title:"【惡靈】該來的還是要面對",tags:["Poppy Playtime"],duration:"02:10:15"},{id:106,date:"2024-03-09",link:"https://youtube.com/live/vV57pMYQfEc",title:"【惡靈】我不想玩這遊戲了啦 😭",tags:["Poppy Playtime"],duration:"02:39:02"},{id:118,date:"2024-03-24",link:"#",title:"3̧̮͎ͧ̄̅̔͑͘d͈̦͔̎̄͋ͮ̓͋a̸̧̡͙̗̻̣̩̓v͕͈̯̟̳̤̀̾ͦ̈Ṅ͙͙̬̝̝̈̀9̴̭̮͈̍ͥ̓͛Gͨ͂ͫ̅͟r̩̟͎̺̜̝͙̓̓ͩC͖̣̓͐̅͛̐̈́͢͞D͚̲̳̈͒̋͑ͧ̚q͓̖ͪ͌̚c͕͓̻̬͇̊̓͟ͅȩ̥̮͖͔͉̉̊́͛b̦̜̦̏͟7̷̛͍͔̅ͤm̨̤̹ͤ̑ͤ͡",tags:[],duration:"02:30:00"},{id:119,date:"2024-03-31",link:"#",title:"3̧̮͎ͧ̄̅̔͑͘d͈̦͔̎̄͋ͮ̓͋a̸̧̡͙̗̻̣̩̓v͕͈̯̟̳̤̀̾ͦ̈Ṅ͙͙̬̝̝̈̀9̴̭̮͈̍ͥ̓͛Gͨ͂ͫ̅͟r̩̟͎̺̜̝͙̓̓ͩC͖̣̓͐̅͛̐̈́͢͞D͚̲̳̈͒̋͑ͧ̚q͓̖ͪ͌̚c͕͓̻̬͇̊̓͟ͅȩ̥̮͖͔͉̉̊́͛b̦̜̦̏͟7̷̛͍͔̅ͤm̨̤̹ͤ̑ͤ͡",tags:[],duration:"02:00:00"},{id:107,date:"2024-04-07",link:"https://youtube.com/live/0zWI8BpgZhw",title:"【惡靈】猜猜今天是誰的生日",tags:["Dark Deception"],duration:"02:11:51"},{id:108,date:"2024-04-14",link:"https://youtube.com/live/KjdKIDSPPIQ",title:"【惡靈】猜猜上禮拜是誰的生日",tags:["Hypixel","Dark Deception"],duration:"01:57:07"},{id:109,date:"2024-04-14",link:"https://youtube.com/live/-EjPh5C6N70",title:"【惡靈】電腦藍屏 哭啊",tags:[],duration:"00:13:13"},{id:110,date:"2024-04-21",link:"https://youtube.com/live/0_Fn0Ao3HvQ",title:"【惡靈】我是不是快轉型成恐怖遊戲台了",tags:["Dark Deception","扫雷"],duration:"02:08:10"},{id:111,date:"2024-04-28",link:"https://youtube.com/live/K4hriatrg24",title:"【惡靈】我是不是快晚上直播上癮了",tags:["At Dead of Night"],duration:"02:01:58"},{id:112,date:"2024-05-05",link:"https://youtube.com/live/D3x2qhjWsG8",title:"【惡靈】我的美麗星期天只剩下3個小時了",tags:["MC游乐园生存"],duration:"02:39:06"},{id:113,date:"2024-05-12",link:"https://youtube.com/live/5W18rksF2fo",title:"【惡靈】父親節快樂",tags:["MC游乐园生存"],duration:"02:07:43"},{id:114,date:"2024-05-19",link:"https://youtube.com/live/3mn_vup52vY",title:"【惡靈】直菠時間",tags:["MC跑酷","At Dead of Night"],duration:"02:09:59"},{id:115,date:"2024-05-26",link:"https://youtube.com/live/5LZ5OzhI-ok",title:"【惡靈】2024年不知不覺就快過一半了",tags:["MC跑酷","MC游乐园生存"],duration:"02:26:24"},{id:116,date:"2024-06-02",link:"https://youtube.com/live/JNUhgi6v4J8",title:"【惡靈】2024年已經一半了，我的人生卻一樣廢",tags:["MC游乐园生存"],duration:"02:33:37"}],Dt="02:30:00",_t=[{date:"2023-10-18",duration:"02:00:00"}],xt=[{date:"2023-10-22",duration:"2:00:00",reason:"惩罚"}],z={initial:Dt,schedule:_t,override:xt},St=r("thead",null,[r("tr",null,[r("td",{class:"font-bold"},"日期"),r("td",{class:"font-bold"},"直播連結"),r("td",{class:"font-bold"},"TAG"),r("td",{class:"font-bold"},"直播时数")])],-1),Tt={class:"text-right"},Nt={class:"w-1/5 inline-block font-bold",style:{width:"20%"}},Lt={class:"inline-block font-bold"};function W(a,e,s){return a.filter(d=>d.date>=new Date(e[0]).toISOString().slice(0,10)&&d.date<=new Date(e[1]).toISOString().slice(0,10)).filter(d=>s==null||d.tags.includes(s)).sort((d,l)=>l.date.localeCompare(d.date))}function K(a,e){let s=a.filter(l=>l.date>=new Date(e[0]).toISOString().slice(0,10)&&l.date<=new Date(e[1]).toISOString().slice(0,10)),d=s.findIndex(l=>l.divider);return d==null?Array():s.slice(d)}function Z(){let a=[],e=z.schedule,s=z.override,d=0,l=0,o=0,h=new Date(Date.now()),c=new Date(Math.min((e.length==0?h:new Date(e[0].date)).getTime(),(s.length==0?h:new Date(s[0].date)).getTime())),y=x.filter(C=>C.date>c.toISOString().slice(0,10)),u=A(z.initial);for(;c<h;){for(d+1<e.length&&e[d+1].date>=c.toISOString().slice(0,10)&&(d=d+1),a.push({date:c.toISOString().slice(0,10),offset:A(e[d].duration),previous:u,reason:"计划",divider:!0}),u=u+a[a.length-1].offset,c.setDate(c.getDate()+7);o<y.length&&new Date(y[o].date)<c;)a.push({date:y[o].date,offset:-A(y[o].duration),previous:u,reason:"直播",divider:!1}),u=u+a[a.length-1].offset,o=o+1;for(;l<s.length&&new Date(s[l].date)<c;)a.push({date:s[l].date,offset:A(s[l].duration),previous:u,reason:s[l].reason,divider:!1}),u=u+a[a.length-1].offset,l=l+1}return a}function $(a){return a>0?"+ "+E(a):"− "+E(-a)}function Pt(a){let e=a.previous+a.offset;return e>0?E(e):E(0)}const At=q({__name:"Vod",props:{filterDate:{default:[15778368e5,Date.now()]},filterDateModifiers:{},filterTag:{default:null},filterTagModifiers:{},filteredVodLink:{default:W(x,[0,Date.now()],null)},filteredVodLinkModifiers:{},filteredVodTime:{default:K(Z(),[0,Date.now()])},filteredVodTimeModifiers:{}},emits:["update:filterDate","update:filterTag","update:filteredVodLink","update:filteredVodTime"],setup(a){const e=Z();let s=D(a,"filterDate",{set(c){return o.value=W(x,c,d.value),h.value=K(e,c),c}}),d=D(a,"filterTag",{set(c){return o.value=W(x,s.value,c),c}}),l=P([{label:"",value:null}].concat([...new Set(x.flatMap(c=>c.tags))].sort().map(c=>({label:c,value:c})))),o=D(a,"filteredVodLink"),h=D(a,"filteredVodTime");return(c,y)=>(f(),k(M,null,[i(t(V),{"x-gap":"12",cols:4,class:"w-11/12"},{default:n(()=>[i(t(w),{span:2},{default:n(()=>[i(t(at),{type:"daterange",value:t(s),"onUpdate:value":y[0]||(y[0]=u=>S(s)?s.value=u:s=u)},null,8,["value"])]),_:1}),i(t(w),null,{default:n(()=>[i(t(it),{value:t(d),"onUpdate:value":y[1]||(y[1]=u=>S(d)?d.value=u:d=u),options:t(l),placeholder:"请选择直播的TAG","consistent-menu-width":!1},null,8,["value","options"])]),_:1})]),_:1}),i(t(_),{class:"!mt-2 !mb-2"}),i(t(V),{"x-gap":"12",cols:3,class:"w-11/12 h-80vh overflow-y-hidden"},{default:n(()=>[i(t(w),{span:2,class:"w-full h-full p-0 m-0 overflow-y-scroll"},{default:n(()=>[i(t(dt),{bordered:!0,size:"small",class:"text-center"},{default:n(()=>[St,r("tbody",null,[(f(!0),k(M,null,I(t(o),u=>(f(),k("tr",null,[r("td",null,g(u.date),1),r("td",null,[i(t(H),{onClick:C=>t(st)(u.link),text:!0,focusable:!1},{default:n(()=>[v(g(u.title),1)]),_:2},1032,["onClick"])]),r("td",null,[(f(!0),k(M,null,I(u.tags,(C,N)=>(f(),k(M,null,[N>0?(f(),R(t(_),{key:0,vertical:""})):X("",!0),r("span",null,[i(t(H),{onClick:L=>S(d)?d.value=C:d=C,text:!0,focusable:!1},{default:n(()=>[v(g(C),1)]),_:2},1032,["onClick"])])],64))),256))]),r("td",null,g(u.duration),1)]))),256))])]),_:1})]),_:1}),i(t(w),{class:"overflow-y-hidden"},{default:n(()=>[i(t(j),{title:"剩余时间",class:"font-bold text-center h-1/3",style:{"--n-font-size":"5vw"}},{default:n(()=>[v(g(Pt(t(e)[t(e).length-1])),1)]),_:1}),i(t(j),{title:"计算明细",class:"text-center h-2/3 overflow-y-scroll"},{default:n(()=>[(f(!0),k(M,null,I(t(h),u=>(f(),k(M,null,[u.divider?(f(),R(t(_),{key:0,"title-placement":"left",class:"!mt-0 !mb-0"},{default:n(()=>[v(g(u.date)+" ",1),i(t(_),{vertical:""}),v(" "+g($(u.previous)),1)]),_:2},1024)):X("",!0),r("div",Tt,[r("div",Nt,g(u.reason),1),i(t(_),{vertical:""}),r("div",Lt,g($(u.offset)),1)])],64))),256))]),_:1})]),_:1})]),_:1})],64))}}),Ot=[{id:7,date:"2023-01-29",name:"用變聲器直播1天",status:"已完成",description:""},{id:18,date:"2023-01-29",name:"玩《女鬼橋》",status:"已完成",description:""},{id:73,date:"2023-01-29",name:"通過ManaCube Insane難度任一關卡",status:"已完成",description:""},{id:26,date:"2023-02-05",name:"玩ALTF4",status:"已完成",description:""},{id:39,date:"2023-02-05",name:"玩RL Craft",status:"未開始",description:"🆙 增加"},{id:27,date:"2023-03-05",name:"玩ALTF4 2",status:"未開始",description:""},{id:86,date:"2023-03-05",name:"繼續玩ALTF4",status:"已完成",description:""},{id:28,date:"2023-03-11",name:"玩At Dead of Night",status:"已完成",description:""},{id:21,date:"2023-03-12",name:"玩一張恐怖地圖",status:"已完成",description:""},{id:12,date:"2023-03-19",name:"抽Nitro",status:"已完成",description:""},{id:76,date:"2023-03-19",name:"速通到終界2小時20分鐘",status:"已完成",description:""},{id:16,date:"2023-03-26",name:"玩 Hypixel",status:"已完成",description:""},{id:17,date:"2023-03-26",name:"玩 Poppy Playtime",status:"已完成",description:""},{id:15,date:"2023-03-28",name:"玩 Garten of Banban",status:"已完成",description:""},{id:63,date:"2023-04-02",name:"計畫《監控圍城2》",status:"已完成",description:""},{id:97,date:"2023-04-09",name:"SkyBlock 100等",status:"勉強過",description:"🏁 投票給過 https://discord.com/channels/506120681495199756/566611073977942017/1188877921608286260 "},{id:69,date:"2023-04-10",name:"剪自己的嬌喘影片發DC群",status:"已完成",description:"https://youtube.com/clip/Ugkx8GkjUNA3Hxn9jyJcbuvJSme8jY9CFRzC"},{id:3,date:"2023-04-23",name:"加班台2小時",status:"已完成",description:""},{id:79,date:"2023-04-23",name:"開加班台",status:"已完成",description:""},{id:55,date:"2023-04-29",name:"直播禁止講跟黃色有關的東西",status:"已完成",description:""},{id:36,date:"2023-04-30",name:"玩Poppy Playtime 第二章",status:"已完成",description:""},{id:44,date:"2023-04-30",name:"直播兩小時Hypixel",status:"已完成",description:""},{id:77,date:"2023-04-30",name:"開亡國之戰公共伺服器",status:"已完成",description:""},{id:35,date:"2023-05-07",name:"玩PIEN",status:"已完成",description:""},{id:70,date:"2023-05-10",name:"唱 Tunak Tunak Tun",status:"已完成",description:""},{id:64,date:"2023-05-21",name:"破黑暗詭計鴨子關 👻",status:"已完成",description:""},{id:62,date:"2023-05-31",name:"城市天際線2人口3萬或者解鎖高級商業區",status:"未開始",description:""},{id:14,date:"2023-06-05",name:"玩 Franchise Half Life",status:"未開始",description:""},{id:32,date:"2023-06-11",name:"玩Metro: Last Night",status:"未開始",description:"2️⃣ 備案: 玩Super Animal Royale"},{id:71,date:"2023-06-11",name:"唱小蠻腰",status:"已完成",description:"https://youtube.com/clip/UgkxrMznUtBi4zOBP4D20WPqbkatV5-cMLS9"},{id:78,date:"2023-06-25",name:"開亡國伺服器",status:"已完成",description:""},{id:96,date:"2023-06-25",name:"SkyBlock 100等",status:"已完成",description:""},{id:74,date:"2023-07-02",name:"通關《佛萊迪的五夜驚魂：安全漏洞》",status:"進行中",description:""},{id:6,date:"2023-07-09",name:"用腳畫畫",status:"已完成",description:"https://discord.com/channels/506120681495199756/529184173680885780/1132606696892674099"},{id:8,date:"2023-07-23",name:"把歌詞都改成喵",status:"已完成",description:"https://youtube.com/clip/UgkxvS7iudvzdTxYpVYb2yGZN21AqydW6zsm"},{id:10,date:"2023-07-23",name:"每10分鐘嬌喘一次",status:"已完成",description:""},{id:41,date:"2023-07-23",name:"玩slimemo",status:"已完成",description:""},{id:68,date:"2023-07-23",name:"做出1.20所有鍛造模板的鎖鏈靴子",status:"未開始",description:""},{id:5,date:"2023-07-30",name:"打完星鐵主線",status:"進行中",description:"🆙 增加 ⚔️ 雅利洛-VI"},{id:72,date:"2023-07-30",name:"深夜台玩恐怖遊戲",status:"已完成",description:"🆙 增加"},{id:75,date:"2023-08-06",name:"通關《壺男》",status:"勉強過",description:"🏁 懲罰主人給過"},{id:95,date:"2023-08-13",name:"Project 2M 16目標全達成",status:"未開始",description:""},{id:29,date:"2023-08-20",name:"玩CTM大地復甦",status:"已完成",description:""},{id:33,date:"2023-08-20",name:"玩Muse Dash",status:"未開始",description:""},{id:66,date:"2023-08-20",name:"破Garten of Banban 2 👻",status:"未開始",description:""},{id:91,date:"2023-08-20",name:"Hypixel 與觀眾同樂時一場內弄死所有觀眾",status:"已完成",description:"🔄 重抽"},{id:0,date:"2023-09-10",name:"五個觀眾出高中數學題 二十分鐘內答出來 不能作弊 超時懲罰+1",status:"已完成",description:""},{id:19,date:"2023-09-10",name:"玩1個小時only up",status:"勉強過",description:"🏁 玩盜版"},{id:24,date:"2023-09-10",name:"玩迷你世界",status:"已完成",description:""},{id:40,date:"2023-09-10",name:"玩roblox 一個熱門rp遊戲",status:"未開始",description:""},{id:65,date:"2023-09-10",name:"破關死亡與稅賦",status:"未開始",description:""},{id:80,date:"2023-09-10",name:"開加班台",status:"已完成",description:"🆙 增加"},{id:93,date:"2023-09-10",name:"nitro",status:"已完成",description:"🆙 增加"},{id:94,date:"2023-09-10",name:"pjskmaster 拿到fullcombo",status:"未開始",description:""},{id:46,date:"2023-09-17",name:"直播玩螃蟹遊戲",status:"已完成",description:"📝 原主人修改1次"},{id:57,date:"2023-09-17",name:"直播遊玩鬥陣特攻2直到上升通行證等級20級（超過十級可累積）",status:"已完成",description:"📝 原主人修改1次"},{id:90,date:"2023-09-17",name:"display entity 做惡靈玩偶",status:"未開始",description:""},{id:92,date:"2023-09-17",name:"Hypixel觀眾場2小時",status:"已完成",description:""},{id:4,date:"2023-09-24",name:"加班台2小時",status:"已完成",description:""},{id:42,date:"2023-09-24",name:"直播不能講到d開頭的字 五次懲罰加一 加到懲罰就解禁",status:"已完成",description:"🆙 增加"},{id:48,date:"2023-09-24",name:"直播玩LOL隨機單中直到擊殺+助攻50以上",status:"未開始",description:""},{id:88,date:"2023-09-24",name:"讓ChatGPT同時給小學數學、科學、文學、歷史、地理 各一題選擇題 2分鐘內沒解出來懲罰+1",status:"已完成",description:"🆙 增加"},{id:59,date:"2023-10-01",name:"直播遊玩踩地雷高級版直到破關",status:"已完成",description:""},{id:84,date:"2023-10-01",name:"錄下自己打呼的聲音 沒有聲音或太小懲罰+1",status:"已完成",description:""},{id:30,date:"2023-10-08",name:"玩Escape the backrooms👻",status:"未開始",description:""},{id:34,date:"2023-10-08",name:"玩party animals",status:"未開始",description:""},{id:49,date:"2023-10-08",name:"直播玩project playtime",status:"未開始",description:"📝 原主人修改1次"},{id:52,date:"2023-10-08",name:"直播唱軌跡",status:"已完成",description:""},{id:54,date:"2023-10-08",name:"直播教大家怎麼用Premiere",status:"已完成",description:""},{id:58,date:"2023-10-08",name:"直播遊玩德州電鋸殺人狂擊殺10人or逃出5場",status:"未開始",description:""},{id:60,date:"2023-10-08",name:"直播遊玩黎明死線倖存者或殺手，直到熒虹徽章20個",status:"進行中",description:"⚔️ 已完成 4 /20個"},{id:67,date:"2023-10-08",name:"破Joyville第一章👻",status:"未開始",description:""},{id:83,date:"2023-10-08",name:"監控圍城新增一張地圖，主題由觀眾決定",status:"未開始",description:""},{id:2,date:"2023-10-22",name:"加班台+2小時",status:"已完成",description:""},{id:1,date:"2023-11-05",name:"水平射30格外的標靶10支箭 沒中紅心-中紅心=加的懲罰",status:"已完成",description:""},{id:9,date:"2023-11-05",name:"把Outlast 2剩下的部分玩完👻",status:"已完成",description:""},{id:11,date:"2023-11-05",name:"每隔10分鐘說一次 瑪卡巴卡",status:"已完成",description:""},{id:13,date:"2023-11-05",name:"泡一碗很辣的泡麵邊吃邊玩",status:"已完成",description:"https://discord.com/channels/506120681495199756/566611073977942017/1188882035645890691"},{id:23,date:"2023-11-05",name:"玩心跳水立方",status:"已完成",description:""},{id:38,date:"2023-11-05",name:"玩PVZ",status:"未開始",description:""},{id:51,date:"2023-11-05",name:"直播唱完一首哈哈歌",status:"已完成",description:""},{id:81,date:"2023-11-05",name:"開建築大賽觀眾場",status:"已完成",description:""},{id:82,date:"2023-11-05",name:"跟觀眾打桌遊兩小時",status:"已完成",description:""},{id:85,date:"2023-11-05",name:"懲罰五色選一個 電繪一個以那個色為主題的惡靈",status:"已完成",description:"https://discord.com/channels/506120681495199756/566611073977942017/1189169405679112222"},{id:31,date:"2023-11-19",name:"玩Hypixel陰屍路5場成功逃出",status:"已完成",description:""},{id:43,date:"2023-11-19",name:"直播同樂MC Bingo 2小時",status:"未開始",description:""},{id:20,date:"2023-11-26",name:"玩一次恐怖遊戲時 死幾次下一次直播就要喵幾次",status:"已完成",description:""},{id:37,date:"2023-11-26",name:"玩Poppy Playtime 第三章 👻",status:"已完成",description:""},{id:47,date:"2023-11-26",name:"直播玩Do Not Feed the Monkeys 2099 單局解完三個籠子",status:"未開始",description:""},{id:53,date:"2023-11-26",name:"直播唱聽我說謝謝你",status:"已完成",description:""},{id:56,date:"2023-11-26",name:"直播遊玩 完蛋！我被美女包圍了 破關",status:"未開始",description:""},{id:61,date:"2023-11-26",name:"直播遊玩Bloons TD 6",status:"未開始",description:""},{id:87,date:"2023-11-26",name:"釋出監控圍城2",status:"未開始",description:""},{id:45,date:"2023-12-17",name:"直播玩大富翁10勝利",status:"未開始",description:""},{id:50,date:"2023-12-24",name:"直播唱何日君再來",status:"未開始",description:""},{id:89,date:"2023-12-24",name:"DC overcook 破紀錄",status:"未開始",description:""},{id:98,date:"2023-12-24",name:"valorant五連殺或四連殺一次(或三連殺三次)",status:"未開始",description:""},{id:22,date:"2024-01-06",name:"玩八號出口",status:"已完成",description:""},{id:25,date:"2024-01-06",name:"玩深夜放送",status:"未開始",description:""},{id:99,date:"2024-02-04",name:"出影片介紹指令的macros",status:"未開始",description:""},{id:100,date:"2024-04-14",name:"唱HEYYEYAAEYAAAEYAEYAA",status:"已完成",description:""},{id:101,date:"2024-04-14",name:"玩Box: the game",status:"未開始",description:""},{id:102,date:"2024-05-05",name:"唱《水龍吟》",status:"未開始",description:""},{id:103,date:"2024-05-05",name:"通關At Dead of Night",status:"未開始",description:""},{id:104,date:"2024-05-27",name:"yt与dc各至少5個貼圖（若空位不足则新增至上限）",status:"未開始",description:""},{id:105,date:"2024-05-27",name:"玩city skyline II",status:"未開始",description:""},{id:106,date:"2024-05-27",name:"通關冰與火之歌前七關卡",status:"未開始",description:""},{id:107,date:"2024-06-02",name:"跟觀眾比賽猜歌",status:"已完成",description:""}],T=[{id:0,color:"#b91c1c",name:"未開始"},{id:1,color:"#4d7c0f",name:"已完成"},{id:2,color:"#047857",name:"勉強過"},{id:3,color:"#b45309",name:"進行中"}],It=r("thead",null,[r("tr",null,[r("td",{class:"font-bold"},"日期"),r("td",{class:"font-bold"},"惩罚内容"),r("td",{class:"font-bold"},"完成状况")])],-1),Vt={style:{overflow:"auto"}},Ht=r("br",null,null,-1);function O(a,e,s){return Ot.filter(d=>d.date>=new Date(a[0]).toISOString().slice(0,10)&&d.date<=new Date(a[1]).toISOString().slice(0,10)).filter(d=>e==""||e==d.status).filter(d=>s==""||d.name.toLowerCase().includes(s.toLowerCase())).sort((d,l)=>d.date.localeCompare(l.date))}function tt(a){return{labels:T.map(e=>e.name),datasets:[{label:null,data:T.map(e=>a.filter(s=>e.name==s.status).length),backgroundColor:T.map(e=>e.color),borderWidth:0,hoverOffset:50}]}}function et(a){return{labels:a.map(e=>new Date(e.date).getTime()).filter((e,s,d)=>e!==d[s-1]),datasets:T.map(e=>({label:e.name,data:Array.from(Map.groupBy(a,s=>s.date)).sort((s,d)=>s[0].localeCompare(d[0])).map(([s,d])=>d.filter(l=>e.name==l.status).length),backgroundColor:e.color,stack:"0"}))}}function G(a){return T.filter(e=>e.name==a)[0]}function Et(a){return x.filter(e=>e.date==a).map(e=>e.link)}const Yt=q({__name:"Penalty",props:{filterDate:{default:[15778368e5,Date.now()]},filterDateModifiers:{},filterStatus:{default:null},filterStatusModifiers:{},filterSearch:{default:""},filterSearchModifiers:{},filteredData:{default:O([0,Date.now()],"","")},filteredDataModifiers:{}},emits:["update:filterDate","update:filterStatus","update:filterSearch","update:filteredData"],setup(a){mt.register(ht,ft,gt,yt,vt,bt,kt);let e=D(a,"filterDate",{set(p){return o.value=O(p,s.value,d.value),p}}),s=D(a,"filterStatus",{set(p){return o.value=O(e.value,p,d.value),p}}),d=D(a,"filterSearch",{set(p){return o.value=O(e.value,s.value,p),p}}),l=T.map(p=>p.name).concat([""]).sort().map(p=>({label:p,value:p})),o=D(a,"filteredData",{set(p){return h.value=tt(p),y.value=et(p),p}}),h=P(tt(o.value)),c={maintainAspectRatio:!1,plugins:{legend:{display:!1}},layout:{padding:20}},y=P(et(o.value)),u={maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{type:"time",grid:{display:!1},time:{minUnit:"day"}},y:{grid:{display:!1}}}};const C=p=>{N.value=!0,L.value=p},N=P(!1),L=P({id:"",date:"",name:"",status:"",description:""});return(p,b)=>(f(),k(M,null,[i(t(V),{"x-gap":"12",cols:4,class:"w-11/12"},{default:n(()=>[i(t(w),{span:2},{default:n(()=>[i(t(at),{type:"daterange",value:t(e),"onUpdate:value":b[0]||(b[0]=m=>S(e)?e.value=m:e=m)},null,8,["value"])]),_:1}),i(t(w),null,{default:n(()=>[i(t(it),{value:t(s),"onUpdate:value":b[1]||(b[1]=m=>S(s)?s.value=m:s=m),options:t(l),placeholder:"請選擇一種完成狀態","consistent-menu-width":!1},null,8,["value","options"])]),_:1}),i(t(w),null,{default:n(()=>[i(t(lt),{round:"",placeholder:"輸入懲罰內容來搜尋",value:t(d),"onUpdate:value":b[2]||(b[2]=m=>S(d)?d.value=m:d=m),type:"text"},null,8,["value"])]),_:1})]),_:1}),i(t(_),{class:"!mt-2 !mb-2"}),i(t(V),{"x-gap":"12",cols:3,class:"w-11/12 h-80vh overflow-y-hidden"},{default:n(()=>[i(t(w),{span:2,class:"h-40vh w-full p-0 m-0 overflow-y-scroll"},{default:n(()=>[i(t(dt),{bordered:!0,size:"small",class:"text-center w-full"},{default:n(()=>[It,r("tbody",null,[(f(!0),k(M,null,I(t(o),m=>(f(),k("tr",null,[r("td",{class:Y(`!bg-[${G(m.status).color}]`)},g(m.date),3),r("td",{class:Y(`!bg-[${G(m.status).color}]`)},[i(t(H),{onClick:Bt=>C(m),text:!0,focusable:!1},{default:n(()=>[v(g(m.name),1)]),_:2},1032,["onClick"])],2),r("td",{class:Y(`!bg-[${G(m.status).color}]`)},g(m.status),3)]))),256))])]),_:1})]),_:1}),i(t(w),null,{default:n(()=>[i(t(wt),{options:t(c),data:t(h),class:"h-40vh w-full p-0 m-0"},null,8,["options","data"])]),_:1}),i(t(w),{span:3},{default:n(()=>[i(t(Ct),{options:t(u),data:t(y),class:"h-40vh w-full p-0 m-0"},null,8,["options","data"])]),_:1})]),_:1}),i(t(ot),{show:N.value,"onUpdate:show":b[4]||(b[4]=m=>N.value=m)},{default:n(()=>[i(t(j),{style:{width:"600px"},title:L.value.name,bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":n(()=>[i(t(H),{onClick:b[3]||(b[3]=m=>t(Mt)(Et(L.value.date)))},{default:n(()=>[v(" 直播转盘連結 ")]),_:1})]),default:n(()=>[v(" "+g(L.value.description),1)]),_:1},8,["title"])]),_:1},8,["show"]),i(t(_)),i(t(ut),{"arrow-placement":"right",style:{"--n-title-font-size":"24px","--n-title-text-color":"rgb(11, 118, 225)"}},{default:n(()=>[i(t(F),{title:"懲罰語法",name:"punish_syntax"},{default:n(()=>[r("div",Vt,[i(t(B),{bordered:""},{default:n(()=>[i(t(U),null,{default:n(()=>[i(t(Q),{style:{"text-align":"left","font-size":"18px"}},{default:n(()=>[v(" <日期>: Unix Timestamp"),Ht,v(" <編號>: int <懲罰主文>: string 〔詳細資料〕: additionalMetaData（執行狀態）: statusMetaData ")]),_:1})]),_:1})]),_:1})])]),_:1}),i(t(F),{title:"詳細資料",name:"more_information"},{default:n(()=>[r("div",null,[i(t(B),{bordered:""},{default:n(()=>[i(t(U),null,{default:n(()=>[i(t(Q),{style:{"font-size":"18px"}},{default:n(()=>[v(" 🆙增加、🔁重抽、2️⃣備案、📝原主人修改n次、➕其他後來增加的條件 ")]),_:1})]),_:1})]),_:1})])]),_:1}),i(t(F),{title:"完成狀態",name:"punish_status"},{default:n(()=>[r("div",null,[i(t(B),{bordered:""},{default:n(()=>[i(t(U),null,{default:n(()=>[i(t(Q),{style:{"font-size":"18px"}},{default:n(()=>[v(" ✅完成、✅已抽、🏁原主人或投票給過、⏲️ ⚔️目前已完成進度 ")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})],64))}}),Ft=q({__name:"App",setup(a){return(e,s)=>(f(),R(t(pt),{theme:t(ct)},{default:n(()=>[i(t(rt),{type:"line","default-value":"vod",animated:""},{default:n(()=>[i(t(J),{name:"vod",tab:"直播"},{default:n(()=>[i(At)]),_:1}),i(t(J),{name:"penalty",tab:"惩罚"},{default:n(()=>[i(Yt)]),_:1})]),_:1})]),_:1},8,["theme"]))}});nt(Ft).mount("#app");
