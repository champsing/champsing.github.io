import{d as X,J as N,r as S,K as k,L as I,M as i,N as d,O as n,P as B,Q as s,F as j,R as ie,c as F,S as L,U as oe,V as re,W as O,X as se,Y as le}from"./@vue-DyGxBzHj.js";import"./d3-transition-Bm5e6Jw0.js";import"./d3-zoom-Dx5EVu_o.js";import{D as pe}from"./vue-chartjs-BNVX9Rda.js";import{C as ce,p as me,a as ue,b as fe,B as he,L as ve,P as ye,c as ge,d as _e,e as be,T as xe,A as Fe}from"./chart.js-BE7QLV1R.js";import{b as Ce}from"./d3-scale-kiidEho7.js";import{N as R,a as De,b as z,c as Te,d as J,e as we,f as Ae,g as Ne,B as K,h as Se,i as H,j as U,k as W,l as Y,m as Be}from"./naive-ui-m_AbirPL.js";import{d as q}from"./d3-selection-Bj1BqfTz.js";import{a as Le}from"./d3-axis-BP2mIVY3.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-BbFwFWjk.js";import"./d3-color-9lF95FHy.js";import"./d3-ease-DRPgKoYJ.js";import"./@kurkle-BZxJdD1U.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-OtVwhkKS.js";import"./vooks-DYvfa0u-.js";import"./evtd-CI_DDEu_.js";import"./seemly-BhfRfwPE.js";import"./vueuc-D9hE43Tw.js";import"./@css-render-CiSa1CNV.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./css-render-BDrvWz3H.js";import"./@emotion-WldOFDRm.js";import"./lodash-es-DTlJs5sU.js";import"./treemate-HRdUPn5m.js";import"./date-fns-B1ODJYzN.js";import"./@babel-Bh3gSK7O.js";import"./date-fns-tz-BmLiaeDK.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&f(y)}).observe(document,{childList:!0,subtree:!0});function m(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function f(o){if(o.ep)return;o.ep=!0;const h=m(o);fetch(o.href,h)}})();const Q=[{id:7,date:"2023-01-29",name:"用變聲器直播1天",done:1,description:""},{id:18,date:"2023-01-29",name:"玩《女鬼橋》",done:1,description:""},{id:73,date:"2023-01-29",name:"通過ManaCube Insane難度任一關卡",done:1,description:""},{id:26,date:"2023-02-05",name:"玩ALTF4",done:1,description:""},{id:39,date:"2023-02-05",name:"玩RL Craft",done:0,description:"🆙增加"},{id:27,date:"2023-03-05",name:"玩ALTF4 2",done:0,description:""},{id:86,date:"2023-03-05",name:"繼續玩ALTF4",done:1,description:""},{id:28,date:"2023-03-11",name:"玩At Dead of Night",done:1,description:""},{id:21,date:"2023-03-12",name:"玩一張恐怖地圖",done:1,description:""},{id:12,date:"2023-03-19",name:"抽Nitro",done:1,description:""},{id:76,date:"2023-03-19",name:"速通到終界2小時20分鐘",done:1,description:""},{id:16,date:"2023-03-26",name:"玩 Hypixel",done:1,description:""},{id:17,date:"2023-03-26",name:"玩 Poppy Playtime",done:1,description:""},{id:15,date:"2023-03-28",name:"玩 Garten of Banban",done:1,description:""},{id:63,date:"2023-04-02",name:"計畫《監控圍城2》",done:1,description:""},{id:97,date:"2023-04-09",name:"SkyBlock 100等",done:2,description:""},{id:69,date:"2023-04-10",name:"剪自己的嬌喘影片發DC群",done:1,description:""},{id:3,date:"2023-04-23",name:"加班台2小時",done:1,description:""},{id:79,date:"2023-04-23",name:"開加班台",done:1,description:""},{id:55,date:"2023-04-29",name:"直播禁止講跟黃色有關的東西",done:1,description:""},{id:36,date:"2023-04-30",name:"玩Poppy Playtime 第二章",done:1,description:""},{id:44,date:"2023-04-30",name:"直播兩小時Hypixel",done:1,description:""},{id:77,date:"2023-04-30",name:"開亡國之戰公共伺服器",done:1,description:""},{id:35,date:"2023-05-07",name:"玩PIEN",done:1,description:""},{id:70,date:"2023-05-10",name:"唱 Tunak Tunak Tun",done:1,description:""},{id:64,date:"2023-05-21",name:"破黑暗詭計鴨子關 👻",done:1,description:""},{id:62,date:"2023-05-31",name:"城市天際線2人口3萬或者解鎖高級商業區",done:0,description:""},{id:14,date:"2023-06-05",name:"玩 Franchise Half Life",done:0,description:""},{id:32,date:"2023-06-11",name:"玩Metro: Last Night",done:0,description:""},{id:71,date:"2023-06-11",name:"唱小蠻腰",done:1,description:""},{id:78,date:"2023-06-25",name:"開亡國伺服器",done:1,description:""},{id:96,date:"2023-06-25",name:"SkyBlock 100等",done:1,description:""},{id:74,date:"2023-07-02",name:"通關《佛萊迪的五夜驚魂：安全漏洞》",done:3,description:""},{id:6,date:"2023-07-09",name:"用腳畫畫",done:1,description:""},{id:8,date:"2023-07-23",name:"把歌詞都改成喵",done:1,description:""},{id:10,date:"2023-07-23",name:"每10分鐘嬌喘一次",done:1,description:""},{id:41,date:"2023-07-23",name:"玩slimemo",done:1,description:""},{id:68,date:"2023-07-23",name:"做出1.20所有鍛造模板的鎖鏈靴子",done:0,description:""},{id:5,date:"2023-07-30",name:"打完星鐵主線 (⚔️ 雅利洛-VI)",done:3,description:""},{id:72,date:"2023-07-30",name:"深夜台玩恐怖遊戲",done:1,description:""},{id:75,date:"2023-08-06",name:"通關《壺男》",done:2,description:""},{id:95,date:"2023-08-13",name:"Project 2M 16目標全達成",done:0,description:""},{id:29,date:"2023-08-20",name:"玩CTM大地復甦",done:1,description:""},{id:33,date:"2023-08-20",name:"玩Muse Dash",done:0,description:""},{id:66,date:"2023-08-20",name:"破Garten of Banban 2 👻",done:0,description:""},{id:91,date:"2023-08-20",name:"Hypixel 與觀眾同樂時一場內弄死所有觀眾",done:1,description:""},{id:0,date:"2023-09-10",name:"五個觀眾出高中數學題 二十分鐘內答出來 不能作弊 超時懲罰+1",done:1,description:""},{id:19,date:"2023-09-10",name:"玩1個小時only up",done:2,description:""},{id:24,date:"2023-09-10",name:"玩迷你世界",done:1,description:""},{id:40,date:"2023-09-10",name:"玩roblox 一個熱門rp遊戲",done:0,description:""},{id:65,date:"2023-09-10",name:"破關死亡與稅賦",done:0,description:""},{id:80,date:"2023-09-10",name:"開加班台",done:1,description:""},{id:93,date:"2023-09-10",name:"nitro",done:1,description:""},{id:94,date:"2023-09-10",name:"pjskmaster 拿到fullcombo",done:0,description:""},{id:46,date:"2023-09-17",name:"直播玩螃蟹遊戲",done:1,description:""},{id:57,date:"2023-09-17",name:"直播遊玩鬥陣特攻2直到上升通行證等級20級（超過十級可累積）",done:1,description:""},{id:90,date:"2023-09-17",name:"display entity 做惡靈玩偶",done:0,description:""},{id:92,date:"2023-09-17",name:"Hypixel觀眾場2小時",done:1,description:""},{id:4,date:"2023-09-24",name:"加班台2小時",done:1,description:""},{id:42,date:"2023-09-24",name:"直播不能講到d開頭的字 五次懲罰加一 加到懲罰就解禁",done:1,description:""},{id:48,date:"2023-09-24",name:"直播玩LOL隨機單中直到擊殺+助攻50以上",done:0,description:""},{id:88,date:"2023-09-24",name:"讓ChatGPT同時給小學數學、科學、文學、歷史、地理 各一題選擇題 2分鐘內沒解出來懲罰+1",done:1,description:""},{id:59,date:"2023-10-01",name:"直播遊玩踩地雷高級版直到破關",done:1,description:""},{id:84,date:"2023-10-01",name:"錄下自己打呼的聲音 沒有聲音或太小懲罰+1",done:1,description:""},{id:30,date:"2023-10-08",name:"玩Escape the backrooms👻",done:0,description:""},{id:34,date:"2023-10-08",name:"玩party animals",done:0,description:""},{id:49,date:"2023-10-08",name:"直播玩project playtime",done:0,description:""},{id:52,date:"2023-10-08",name:"直播唱軌跡",done:1,description:""},{id:54,date:"2023-10-08",name:"直播教大家怎麼用Premiere",done:1,description:""},{id:58,date:"2023-10-08",name:"直播遊玩德州電鋸殺人狂擊殺10人or逃出5場",done:0,description:""},{id:60,date:"2023-10-08",name:"直播遊玩黎明死線倖存者或殺手，直到熒虹徽章20個 (⚔️ 已完成 **4** /20個)",done:3,description:""},{id:67,date:"2023-10-08",name:"破Joyville第一章👻",done:0,description:""},{id:83,date:"2023-10-08",name:"監控圍城新增一張地圖，主題由觀眾決定",done:0,description:""},{id:2,date:"2023-10-22",name:"加班台+2小時",done:1,description:""},{id:1,date:"2023-11-05",name:"水平射30格外的標靶10支箭 沒中紅心-中紅心=加的懲罰",done:1,description:""},{id:9,date:"2023-11-05",name:"把Outlast 2剩下的部分玩完👻",done:1,description:""},{id:11,date:"2023-11-05",name:"每隔10分鐘說一次 瑪卡巴卡",done:1,description:""},{id:13,date:"2023-11-05",name:"泡一碗很辣的泡麵邊吃邊玩",done:1,description:""},{id:23,date:"2023-11-05",name:"玩心跳水立方",done:1,description:""},{id:38,date:"2023-11-05",name:"玩PVZ",done:0,description:""},{id:51,date:"2023-11-05",name:"直播唱完一首哈哈歌",done:1,description:""},{id:81,date:"2023-11-05",name:"開建築大賽觀眾場",done:1,description:""},{id:82,date:"2023-11-05",name:"跟觀眾打桌遊兩小時",done:1,description:""},{id:85,date:"2023-11-05",name:"懲罰五色選一個 電繪一個以那個色為主題的惡靈",done:1,description:""},{id:31,date:"2023-11-19",name:"玩Hypixel陰屍路5場成功逃出",done:1,description:""},{id:43,date:"2023-11-19",name:"直播同樂MC Bingo 2小時",done:0,description:""},{id:20,date:"2023-11-26",name:"玩一次恐怖遊戲時 死幾次下一次直播就要喵幾次",done:1,description:""},{id:37,date:"2023-11-26",name:"玩Poppy Playtime 第三章 👻",done:1,description:""},{id:47,date:"2023-11-26",name:"直播玩Do Not Feed the Monkeys 2099 單局解完三個籠子",done:0,description:""},{id:53,date:"2023-11-26",name:"直播唱聽我說謝謝你",done:1,description:""},{id:56,date:"2023-11-26",name:"直播遊玩 完蛋！我被美女包圍了 破關",done:0,description:""},{id:61,date:"2023-11-26",name:"直播遊玩Bloons TD 6",done:0,description:""},{id:87,date:"2023-11-26",name:"釋出監控圍城2",done:0,description:""},{id:45,date:"2023-12-17",name:"直播玩大富翁10勝利",done:0,description:""},{id:50,date:"2023-12-24",name:"直播唱何日君再來",done:0,description:""},{id:89,date:"2023-12-24",name:"DC overcook 破紀錄",done:0,description:""},{id:98,date:"2023-12-24",name:"valorant五連殺或四連殺一次(或三連殺三次)",done:0,description:""},{id:22,date:"2024-01-06",name:"玩八號出口",done:1,description:""},{id:25,date:"2024-01-06",name:"玩深夜放送",done:0,description:""},{id:99,date:"2024-02-04",name:"出影片介紹指令的macros",done:0,description:""},{id:100,date:"2024-04-14",name:"唱HEYYEYAAEYAAAEYAEYAA",done:1,description:""},{id:101,date:"2024-04-14",name:"玩Box: the game",done:0,description:""},{id:102,date:"2024-05-05",name:"唱《水龍吟》",done:0,description:""},{id:103,date:"2024-05-05",name:"通關At Dead of Night",done:0,description:""},{id:104,date:"2024-05-27",name:"yt与dc各至少5個貼圖（若空位不足则新增至上限）",done:0,description:""},{id:105,date:"2024-05-27",name:"玩city skyline II",done:0,description:""},{id:106,date:"2024-05-27",name:"通關冰與火之歌前七關卡",done:0,description:""}],D=[{id:0,color:"#922B21",name:"未開始"},{id:1,color:"#196F3D",name:"已完成"},{id:2,color:"#9D9D9D",name:"勉強過"},{id:3,color:"#4DFFFF",name:"進行中"}],v=u=>(oe("data-v-d6f260a0"),u=u(),re(),u),ke={class:"filter"},Pe=v(()=>i("label",{style:{"font-size":"18px"}},"起始日期:",-1)),Ee=v(()=>i("label",{style:{"font-size":"18px"}},"结束日期:",-1)),Me=v(()=>i("label",{style:{"font-size":"18px"}},"完成状态:",-1)),Ie=v(()=>i("label",{style:{"font-size":"18px"}},"搜索:",-1)),Oe=v(()=>i("hr",{class:"rounded"},null,-1)),ze=v(()=>i("thead",null,[i("tr",null,[i("td",{style:{"font-size":"18px"}},"日期"),i("td",{style:{"font-size":"18px"}},"惩罚内容"),i("td",{style:{"font-size":"18px"}},"完成状况")])],-1)),He=v(()=>i("div",{class:"time"},[i("svg",{id:"barChart",height:"90%"})],-1)),Ue=v(()=>i("hr",{class:"rounded"},null,-1)),We=v(()=>i("br",null,null,-1)),Ye={style:{overflow:"auto"}},Ve=v(()=>i("br",null,null,-1)),Ge=X({__name:"HelloWorld",props:{filterBegTs:{default:16725024e5},filterBegTsModifiers:{},filterEndTs:{default:Date.now()},filterEndTsModifiers:{},filterFinish:{default:-1},filterFinishModifiers:{},filterSearch:{default:""},filterSearchModifiers:{}},emits:["update:filterBegTs","update:filterEndTs","update:filterFinish","update:filterSearch"],setup(u){ce.register(me,ue,fe,he,ve,ye,ge,_e,be,xe,Fe);var c=N(u,"filterBegTs",{set(e){return T(e,m.value,f.value,o.value),e}}),m=N(u,"filterEndTs",{set(e){return T(c.value,e,f.value,o.value),e}}),f=N(u,"filterFinish",{set(e){return T(c.value,m.value,e,o.value),e}}),o=N(u,"filterSearch",{set(e){return T(c.value,m.value,f.value,e),e}}),h=[{label:"",value:-1},{label:"未開始",value:0},{label:"已完成",value:1},{label:"勉強過",value:2},{label:"進行中",value:3}],y=S([]);let Z={maintainAspectRatio:!1,plugins:{legend:{display:!1}},layout:{padding:20}};const V=S({labels:D.map(e=>e.name),datasets:[{label:null,data:D.map(e=>Q.filter(r=>e.id==r.done).length),backgroundColor:D.map(e=>e.color),borderWidth:0,hoverOffset:50}]});function T(e,r,a,g){y.value=Q.filter(p=>p.date>=new Date(e).toISOString().slice(0,10)&&p.date<=new Date(r).toISOString().slice(0,10)).filter(p=>a==-1||a==p.done).filter(p=>g==""||p.name.toLowerCase().includes(g.toLowerCase())).sort((p,x)=>p.date.localeCompare(x.date)),V.value={labels:D.map(p=>p.name),datasets:[{label:null,data:D.map(p=>y.value.filter(x=>p.id==x.done).length),backgroundColor:D.map(p=>p.color),borderWidth:0,hoverOffset:50}]},ee(y.value)}T(c.value,m.value,f.value,o.value);function $(e){return e==0?"未开始":e==1?"已完成":e==2?"勉强过":e==3?"进行中":"undefined"}function b(e){return e==0?"#922B21":e==1?"#196F3D":e==2?"#9D9D9D":e==3?"#4DFFFF":"#000000"}function P(e){return e==0||e==1?"#FFFFFF":"#000000"}function G(e){return e.length>32?e.substring(0,30)+"...":e}function ee(e){var r=Array.from(Map.groupBy(e,t=>t.date),([t,l])=>[t,l]).map(function(t){return{date:t[0],s0:t[1].filter(l=>l.done==0).length,s1:t[1].filter(l=>l.done==1).length,s2:t[1].filter(l=>l.done==2).length,s3:t[1].filter(l=>l.done==3).length}});let a=40,g=10,p=27,x=200,C=x-50,M=a*r.length,ne=M/x*p,_=Math.max(...r.map(t=>t.s0+t.s1+t.s2+t.s3))/C;q("#barChart").selectAll("*").remove();const w=q("#barChart").attr("width",ne+"vh").attr("viewBox","0 0 "+M+" "+x);w.selectAll("s0").data(r).enter().append("rect").attr("x",(t,l)=>l*a).attr("y",t=>C-t.s0/_).attr("width",a-g).attr("height",t=>t.s0/_).attr("fill",b(0)),w.selectAll("s1").data(r).enter().append("rect").attr("x",(t,l)=>l*a).attr("y",t=>C-(t.s0+t.s1)/_).attr("width",a-g).attr("height",t=>t.s1/_).attr("fill",b(1)),w.selectAll("s2").data(r).enter().append("rect").attr("x",(t,l)=>l*a).attr("y",t=>C-(t.s0+t.s1+t.s2)/_).attr("width",a-g).attr("height",t=>t.s2/_).attr("fill",b(2)),w.selectAll("s3").data(r).enter().append("rect").attr("x",(t,l)=>l*a).attr("y",t=>C-(t.s0+t.s1+t.s2+t.s3)/_).attr("width",a-g).attr("height",t=>t.s3/_).attr("fill",b(3));const de=Ce().domain(r.map(t=>t.date)).range([0,M]).padding(.1);w.append("g").attr("transform","translate(0,"+C+")").call(Le(de)).selectAll("text").style("text-anchor","end").attr("transform","rotate(-45)")}const te=e=>{E.value=!0,A.value=e},ae=e=>{window.open(e)},E=S(!1),A=S({id:"",date:"",youtube_vod:"",name:"",done:"",description:""});return(e,r)=>(k(),I(j,null,[i("div",ke,[i("div",null,[Pe,d(n(R),{type:"date",value:n(c),"onUpdate:value":r[0]||(r[0]=a=>B(c)?c.value=a:c=a)},null,8,["value"])]),i("div",null,[Ee,d(n(R),{type:"date",value:n(m),"onUpdate:value":r[1]||(r[1]=a=>B(m)?m.value=a:m=a)},null,8,["value"])]),i("div",null,[Me,d(n(z),{vertical:""},{default:s(()=>[d(n(De),{value:n(f),"onUpdate:value":r[2]||(r[2]=a=>B(f)?f.value=a:f=a),options:n(h),"consistent-menu-width":!1},null,8,["value","options"])]),_:1})]),i("div",null,[Ie,d(n(z),{vertical:""},{default:s(()=>[d(n(Te),{round:"",placeholder:"輸入懲罰內容來搜尋",value:n(o),"onUpdate:value":r[3]||(r[3]=a=>B(o)?o.value=a:o=a),type:"text"},null,8,["value"])]),_:1})])]),Oe,d(n(Ae),{"x-gap":"12",cols:3,class:"main"},{default:s(()=>[d(n(J),{class:"detail",span:2},{default:s(()=>[d(n(we),{bordered:!0,size:"small",style:{"text-align":"center"}},{default:s(()=>[ze,i("tbody",null,[(k(!0),I(j,null,ie(n(y),a=>(k(),I("tr",null,[i("td",{style:O({"background-color":b(a.done),color:P(a.done)})},L(a.date),5),i("td",{style:O({"background-color":b(a.done),color:P(a.done)})},[d(n(K),{onClick:g=>te(a),text:!0,focusable:!1,"text-color":"#FFFFFF"},{default:s(()=>[F(L(G(a.name)),1)]),_:2},1032,["onClick"])],4),i("td",{style:O({"background-color":b(a.done),color:P(a.done)})},L($(a.done)),5)]))),256))])]),_:1})]),_:1}),d(n(J),null,{default:s(()=>[d(n(pe),{ref:"pieChart",options:n(Z),data:V.value,class:"pie"},null,8,["options","data"])]),_:1})]),_:1}),d(n(Se),{show:E.value,"onUpdate:show":r[5]||(r[5]=a=>E.value=a),width:502,placement:"right"},{default:s(()=>[d(n(Ne),{title:G(A.value.name)},{default:s(()=>[F(L(A.value.description)+" ",1),d(n(K),{onClick:r[4]||(r[4]=a=>ae(A.value.youtube_vod))},{default:s(()=>[F(" 直播連結 ")]),_:1})]),_:1},8,["title"])]),_:1},8,["show"]),He,Ue,d(n(z),null,{default:s(()=>[We]),_:1}),d(n(Be),{"arrow-placement":"right",style:{"--n-title-font-size":"24px","--n-title-text-color":"rgb(11,118,225)"}},{default:s(()=>[d(n(H),{title:"懲罰語法",name:"punish_syntax"},{default:s(()=>[i("div",Ye,[d(n(U),{bordered:""},{default:s(()=>[d(n(W),null,{default:s(()=>[d(n(Y),{style:{"text-align":"left","font-size":"18px"}},{default:s(()=>[F(" <日期>: Unix Timestamp"),Ve,F(" <編號>: int <懲罰主文>: string 〔詳細資料〕: additionalMetaData（執行狀態）: statusMetaData ")]),_:1})]),_:1})]),_:1})])]),_:1}),d(n(H),{title:"詳細資料",name:"more_information"},{default:s(()=>[i("div",null,[d(n(U),{bordered:""},{default:s(()=>[d(n(W),null,{default:s(()=>[d(n(Y),{style:{"font-size":"18px"}},{default:s(()=>[F(" 🆙增加、🔁重抽、2️⃣備案、📝原主人修改n次、➕其他後來增加的條件 ")]),_:1})]),_:1})]),_:1})])]),_:1}),d(n(H),{title:"完成狀態",name:"punish_status"},{default:s(()=>[i("div",null,[d(n(U),{bordered:""},{default:s(()=>[d(n(W),null,{default:s(()=>[d(n(Y),{style:{"font-size":"18px"}},{default:s(()=>[F(" ✅完成、✅已抽、🏁原主人或投票給過、⏲️ ⚔️目前已完成進度 ")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})],64))}}),je=(u,c)=>{const m=u.__vccOpts||u;for(const[f,o]of c)m[f]=o;return m},Re=je(Ge,[["__scopeId","data-v-d6f260a0"]]),Je=X({__name:"App",setup(u){return(c,m)=>(k(),se(Re))}});le(Je).mount("#app");
