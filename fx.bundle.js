const dictionary = {"gIsTeamGame":"ic","game":"a7","playerId":"eD","playerData":"aa","playerNames":"a39","gameState":"wD","fontSize":"fontSize","x":"ea","y":"ec","canvas":"hF","gHumans":"jc","playerStates":"zi","fontGeneratorFunction":"b6.pF.qW","rawPlayerNames":"x5","playerBalances":"gX","playerTerritories":"gJ","data":"data","playerCount":"a0x","gBots":"k0","strs":"a7F","gIsSingleplayer":"jy","uiSizes":"bX","gap":"gap","gMaxPlayers":"eQ","i":"a5","MenuManager":"aU","getState":"xT"};
(()=>{"use strict";function e(e){const t=document.createElement("p");t.innerText="Attack Percentage Keybinds";const n=document.createElement("div");n.className="arrayinput";const o=document.createElement("button");return o.innerText="Add",e.append(t,n,o),this.container=n,this.keys=["key","type","value"],this.objectArray=[],this.addObject=function(){this.objectArray.push({key:"",type:"absolute",value:.8}),this.displayObjects(),o.scrollIntoView(!1)},this.update=function(e){this.objectArray=e.attackPercentageKeybinds,this.displayObjects()},o.addEventListener("click",this.addObject.bind(this)),this.displayObjects=function(){if(this.container.innerHTML="",0===this.objectArray.length)return this.container.innerText="No custom attack percentage keybinds added";for(var e=0;e<this.objectArray.length;e++){var t=document.createElement("div");this.keys.forEach((function(n){let o=document.createElement("type"===n?"select":"input");if("type"===n)o.innerHTML='<option value="absolute">Absolute</option><option value="relative">Relative</option>',o.addEventListener("change",this.updateObject.bind(this,e,n));else if("key"===n)o.type="text",o.setAttribute("readonly",""),o.setAttribute("placeholder","No key set"),o.addEventListener("click",this.startKeyInput.bind(this,e,n));else{const t="absolute"===this.objectArray[e].type;o.type=t?"text":"number",t?o.addEventListener("click",this.convertIntoNumberInput.bind(this,e,n),{once:!0}):o.setAttribute("step","0.1"),o.addEventListener("input",this.updateObject.bind(this,e,n))}"value"===n&&"absolute"===this.objectArray[e].type?o.value=100*this.objectArray[e][n]+"%":o.value=this.objectArray[e][n],t.appendChild(o)}),this);var n=document.createElement("button");n.textContent="Delete",n.addEventListener("click",this.deleteObject.bind(this,e)),t.appendChild(n),this.container.appendChild(t)}},this.startKeyInput=function(e,t,n){n.target.value="Press any key";const o=this.updateObject.bind(this,e,t);n.target.addEventListener("keydown",o,{once:!0}),n.target.addEventListener("blur",(()=>{n.target.removeEventListener("keydown",o),n.target.value=this.objectArray[e][t]}),{once:!0})},this.convertIntoNumberInput=function(e,t,n){n.target.value=n.target.value.slice(0,-1),n.target.type="number",n.target.addEventListener("blur",(()=>{this.displayObjects()}),{once:!0})},this.updateObject=function(e,t,n){if(e>=this.objectArray.length)return;const o="value"===t?"absolute"===this.objectArray[e].type?parseFloat(n.target.value)/100:parseFloat(n.target.value):"key"===t?n.key:n.target.value;this.objectArray[e][t]=o,"key"===t&&this.displayObjects()},this.deleteObject=function(e){this.objectArray.splice(e,1),this.displayObjects()},this}const t={count:0,removeWins:function(){confirm("Do you really want to reset your wins?")&&(t.count=0,localStorage.removeItem("fx_winCount"),alert("Successfully reset wins"))}};null!==localStorage.getItem("fx_winCount")&&(t.count=localStorage.getItem("fx_winCount"));const n=t;var o={};const a=document.getElementById("windowContainer");function s(e){o[e.name]=e,o[e.name].isOpen=!1}function i(e){!1!==o[e].isOpen&&(o[e].isOpen=!1,o[e].element.style.display="none",void 0!==o[e].onClose&&o[e].onClose())}function l(){Object.values(o).forEach((function(e){!1!==e.closable&&i(e.name)}))}document.addEventListener("mousedown",(e=>{a.contains(e.target)||l(),m().useFullscreenMode&&h()}),{passive:!0,capture:!0}),document.getElementById("canvasA").addEventListener("touchstart",l,{passive:!0}),document.addEventListener("keydown",(e=>{"Escape"===e.key&&l()}));const r={create:function(e){const t=document.createElement("div");return e.element=t,t.className="window"+(void 0!==e.classes?" "+e.classes:" scrollable selectable"),t.style.display="none",a.appendChild(t),s(e),t},add:s,openWindow:function(e,...t){!0!==o[e].isOpen&&(void 0!==o[e].beforeOpen&&o[e].beforeOpen(...t),o[e].isOpen=!0,o[e].element.style.display=null)},closeWindow:i,closeAll:l};window.__fx=window.__fx||{};const c=window.__fx;var d={displayWinCounter:!0,useFullscreenMode:!1,hoveringTooltip:!0,realisticNames:!1,showPlayerDensity:!0,coloredDensity:!0,densityDisplayStyle:"percentage",hideBotNames:!1,highlightClanSpawns:!1,customBackgroundUrl:"",attackPercentageKeybinds:[]};c.settings=d;const u=["hideAllLinks","fontName"];c.makeMainMenuTransparent=!1;const p=new function(){const t=[{for:"displayWinCounter",type:"checkbox",label:"Display win counter",note:"The win counter tracks multiplayer solo wins (not in team games)"},{type:"button",text:"Reset win counter",action:n.removeWins},{for:"useFullscreenMode",type:"checkbox",label:"Use fullscreen mode",note:"Note: fullscreen mode will trigger after you click anywhere on the page due to browser policy restrictions."},{for:"hoveringTooltip",type:"checkbox",label:"Hovering tooltip",note:"Display map territory info constantly (on mouse hover) instead of only when right clicking on the map"},{for:"realisticNames",type:"checkbox",label:"Realistic Bot Names"},{for:"showPlayerDensity",type:"checkbox",label:"Show player density"},{for:"coloredDensity",type:"checkbox",label:"Colored density",note:"Display the density with a color between red and green depending on the density value"},{for:"densityDisplayStyle",type:"selectMenu",label:"Density value display style:",tooltip:"Controls how the territorial density value should be rendered",options:[{value:"percentage",label:"Percentage"},{value:"absoluteQuotient",label:"Value from 0 to 150 (BetterTT style)"}]},{for:"hideBotNames",type:"checkbox",label:"Hide bot names"},{for:"highlightClanSpawns",type:"checkbox",label:"Highlight clan spawnpoints",note:"Increases the spawnpoint glow size for members of your clan"},{for:"customBackgroundUrl",type:"textInput",label:"Custom main menu background:",placeholder:"Enter an image URL here",tooltip:"A custom image to be shown as the main menu background instead of the currently selected map."},e],o=document.querySelector(".settings .scrollable");var a={},s={},i=[];t.forEach((e=>{if("function"==typeof e){const t=document.createElement("div");return i.push(new e(t)),o.append(t)}const t=document.createElement("label");e.tooltip&&(t.title=e.tooltip);const n=e.type.endsWith("Input"),l=document.createElement(n||"checkbox"===e.type?"input":"selectMenu"===e.type?"select":"button");if("textInput"===e.type&&(l.type="text"),e.placeholder&&(l.placeholder=e.placeholder),(n||"selectMenu"===e.type)&&(a[e.for]=l),e.text&&(l.innerText=e.text),e.action&&l.addEventListener("click",e.action),e.label&&t.append(e.label+" "),e.note){const n=document.createElement("small");n.innerText=e.note,t.append(document.createElement("br"),n)}if(e.options&&e.options.forEach((e=>{const t=document.createElement("option");t.setAttribute("value",e.value),t.innerText=e.label,l.append(t)})),t.append(l),"checkbox"===e.type){l.type="checkbox";const n=document.createElement("span");n.className="checkmark",t.className="checkbox",t.append(n),s[e.for]=l}else t.append(document.createElement("br"));o.append(t,document.createElement("br"))})),this.save=function(){Object.keys(a).forEach((function(e){d[e]=a[e].value.trim()})),Object.keys(s).forEach((function(e){d[e]=s[e].checked})),this.applySettings(),r.closeWindow("settings"),u.forEach((e=>delete d[e])),localStorage.setItem("fx_settings",JSON.stringify(d)),window.location.reload()};const l=document.createElement("input");function p(e){const t=e.target,n=t.files[0];if(!n)return;if(t.removeEventListener("change",p),t.value="",!n.name.endsWith(".json"))return alert("Invalid file format");const o=new FileReader;o.onload=function(){let e;try{e=JSON.parse(o.result),confirm('Warning: This will override all current settings, click "OK" to confirm')&&(c.settings=d=e),localStorage.setItem("fx_settings",JSON.stringify(d)),window.location.reload()}catch(e){alert("Error\n"+e)}},o.readAsText(n)}l.type="file",this.importFromFile=function(){l.click(),l.addEventListener("change",p)},this.exportToFile=function(){var e,t,n;e=JSON.stringify(d),t=document.createElement("a"),n=new Blob([e],{type:"application/json"}),t.href=URL.createObjectURL(n),t.download="FX_client_settings.json",t.click(),URL.revokeObjectURL(t.href)},this.syncFields=function(){Object.keys(a).forEach((function(e){a[e].value=d[e]})),Object.keys(s).forEach((function(e){s[e].checked=d[e]})),i.forEach((e=>e.update(d)))},this.resetAll=function(){confirm("Are you Really SURE you want to RESET ALL SETTINGS back to the default?")&&(localStorage.removeItem("fx_settings"),window.location.reload())},this.applySettings=function(){""!==d.customBackgroundUrl&&(document.body.style.backgroundImage="url("+d.customBackgroundUrl+")",document.body.style.backgroundSize="cover",document.body.style.backgroundPosition="center"),c.makeMainMenuTransparent=""!==d.customBackgroundUrl},d.useFullscreenMode&&h()};function h(){null===document.fullscreenElement&&document.fullscreenEnabled&&document.documentElement.requestFullscreen({navigationUI:"hide"}).then((()=>{console.log("Fullscreen mode activated")})).catch((e=>{console.warn("Could not enter fullscreen mode:",e)}))}r.add({name:"settings",element:document.querySelector(".settings"),beforeOpen:function(){p.syncFields()}}),null!==localStorage.getItem("fx_settings")&&(c.settings=d={...d,...JSON.parse(localStorage.getItem("fx_settings"))}),p.applySettings();const y=p;function m(){return d}const b=["playerTerritories","playerBalances","rawPlayerNames"],f=["playerId","gIsTeamGame","gHumans","gLobbyMaxJoin","gameState","gIsSingleplayer"],g=e=>b.includes(e)?window[dictionary.playerData]?.[dictionary[e]]:f.includes(e)?window[dictionary.game]?.[dictionary[e]]:window[dictionary[e]],v=new function(){this.playersToInclude=[],this.tabLabels=["ALL","CLAN"],this.filteredLeaderboard=[],this.tabBarOffset=0,this.windowWidth=0,this.verticalClickThreshold=1e3,this.hoveringOverTabs=!1,this.scrollToTop=()=>{},this.repaintLeaderboard=()=>{},this.setUpdateFlag=()=>{},this.parseClanFromPlayerName=()=>{console.warn("parse function not set")},this.selectedTab=0,this.tabHovering=-1,this.enabled=!1,this.drawTabs=function(e,t,n,o){e.textBaseline="middle",e.textAlign="center";const a=t/this.tabLabels.length,s=n+this.tabBarOffset/2;this.tabLabels.forEach(((t,i)=>{0!==i&&e.fillRect(a*i,n,1,this.tabBarOffset),this.selectedTab===i&&(e.fillStyle=o,e.fillRect(a*i,n,a,this.tabBarOffset),e.fillStyle="rgb(255,255,255)"),this.tabHovering===i&&(e.fillStyle="rgba(255,255,255,0.3)",e.fillRect(a*i,n,a,this.tabBarOffset),e.fillStyle="rgb(255,255,255)"),e.fillText(t,a*i+a/2,s)}))},this.setHovering=(e,t)=>{let n=!1;if(e){const e=Math.floor(t/(this.windowWidth/this.tabLabels.length));this.tabHovering!==e&&(this.tabHovering=e,n=!0)}return e!==this.hoveringOverTabs&&(this.hoveringOverTabs=e,!1===e&&(this.tabHovering=-1),e||(n=!0)),n&&this.repaintLeaderboard(),e},this.handleMouseDown=e=>{const t=Math.floor(e/(this.windowWidth/this.tabLabels.length));return this.selectedTab!==t&&(this.selectedTab=t,0===this.selectedTab?this.clearFilter():1===this.selectedTab&&(this.filterByOwnClan(),this.setUpdateFlag()),this.repaintLeaderboard()),!0},this.filterByOwnClan=()=>{this.playersToInclude=[];const e=g("playerId"),t=this.parseClanFromPlayerName(g("rawPlayerNames")[e]);g("rawPlayerNames").forEach(((n,o)=>{o!==e&&this.parseClanFromPlayerName(n)!==t||this.playersToInclude.push(o)})),this.enabled=!0,this.scrollToTop()},this.clearFilter=()=>{this.enabled=!1},this.reset=()=>{this.enabled=!1,this.selectedTab=0,w.refresh()}},w=new function(){this.inOwnClan=new Array(512),this.inOwnClan.fill(!1),this.refresh=()=>{const e=g("gHumans"),t=v.parseClanFromPlayerName(g("rawPlayerNames")[g("playerId")]);null===t?this.inOwnClan.fill(!1):g("rawPlayerNames").forEach(((n,o)=>{this.inOwnClan[o]=o<e&&v.parseClanFromPlayerName(n)===t}))}};function E(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}r.add({name:"donationHistory",element:document.querySelector("#donationhistory"),beforeOpen:function(e){document.getElementById("donationhistory_note").style.display="none"},onClose:function(){k.openedWindowPlayerID=null}});const k=new function(){function e(e,t,n,o){const a=g("rawPlayerNames"),s=document.createElement("tr");o&&s.setAttribute("class","new");let i=`<td><span class="color-light-gray">${t}.</span> `;return n===e[1]?i+=`Received <span class="color-green">${e[2]}</span> resources from ${E(a[e[0]])}`:i+=`Sent <span class="color-red">${e[2]}</span> resources to ${E(a[e[1]])}`,i+="</td>",s.innerHTML=i,s}this.openedWindowPlayerID=null,this.contentElement=document.querySelector("#donationhistory_content"),this.donationHistory=Array(512),this.getHistoryOf=function(e){return this.donationHistory[e].toReversed()},this.reset=function(){for(var e=0;e<512;e++)this.donationHistory[e]=[]},this.logDonation=function(t,n,o){const a=[t,n,o];if(this.donationHistory[n].push(a),this.donationHistory[t].push(a),this.openedWindowPlayerID===t||this.openedWindowPlayerID===n){const o=this.donationHistory[this.openedWindowPlayerID===t?t:n].length;this.contentElement.prepend(e(a,o,this.openedWindowPlayerID,!0))}},this.displayHistory=function(t,n=g("rawPlayerNames"),o=g("gIsSingleplayer")){var a=k.getHistoryOf(t);console.log("History for "+n[t]+":"),console.log(a),document.querySelector("#donationhistory h1").innerHTML="Donation history for "+E(n[t]),this.contentElement.innerHTML="",a.length>0?a.forEach(((n,o)=>{this.contentElement.appendChild(e(n,a.length-o,t))})):this.contentElement.innerText="Nothing to display",this.openedWindowPlayerID=t,r.openWindow("donationHistory",o)}},x=k,L=new function(){const e=document.createElement("img");e.setAttribute("src","assets/players_icon.png"),document.getElementById("playerlist_content").addEventListener("click",(e=>{const t=e.target.closest("tr[data-player-id]")?.getAttribute("data-player-id");t&&g("gIsTeamGame")&&(r.closeWindow("playerList"),x.displayHistory(t))})),this.display=function(e){const t=g("gHumans"),n=g("gLobbyMaxJoin");let o=`<h3>Players (${t})</h3>`;for(let a=0;a<n;a++)a===t&&(o+=`<h3>Bots (${n-t})</h3>`),o+=`<tr data-player-id="${a}"><td><span class="color-light-gray">${a+1}.</span> ${E(e[a])}</td></tr>`;document.getElementById("playerlist_content").innerHTML=o,document.getElementById("playerlist_content").setAttribute("class",g("gIsTeamGame")?"clickable":""),r.openWindow("playerList")},this.hoveringOverButton=!1,this.drawButton=(t,n,o,a)=>{t.fillRect(n,o,a,a),t.fillStyle=this.hoveringOverButton?"#aaaaaaaa":"#000000aa",t.clearRect(n+1,o+1,a-2,a-2),t.fillRect(n+1,o+1,a-2,a-2),t.fillStyle="#ffffff",t.imageSmoothingEnabled=!0,t.drawImage(e,n+2,o+2,a-4,a-4),t.imageSmoothingEnabled=!1}};r.add({name:"playerList",element:document.getElementById("playerlist")});const T=L,I=new function(){this.getMaxTroops=function(e,t){return(150*e[t]).toString()},this.getDensity=function(e,t=g("playerBalances"),n=g("playerTerritories")){return"percentage"===m().densityDisplayStyle?(t[e]/(150*(0===n[e]?1:n[e]))*100).toFixed(1)+"%":(t[e]/(0===n[e]?1:n[e])).toFixed(1)},this.isPointInRectangle=function(e,t,n,o,a,s){return e>=n&&e<=n+a&&t>=o&&t<=o+s},this.fillTextMultiline=function(e,t,n,o,a){const s=parseInt(e.font.split(" ").find((e=>e.endsWith("px"))).slice(0,-2));t.split("\n").forEach(((t,i)=>e.fillText(t,n,o+i*s,a)))},this.textStyleBasedOnDensity=function(e){const t=g("playerBalances"),n=g("playerTerritories");return`hsl(${t[e]/(1.5*n[e])}, 100%, 50%, 1)`}},S=new function(){let e=!1;function t(t){if(!m().hoveringTooltip||!g("gameState")||e)return;let n,o;if(t.type.includes("touch")){const{touches:e,changedTouches:a}=t.originalEvent??t,s=e[0]??a[0];n=s.pageX,o=s.pageY}else t.type.includes("mouse")&&(n=t.clientX,o=t.clientY);e=!0;try{this.display(this.canvasPixelScale*n,this.canvasPixelScale*o)}catch(t){console.error(t)}setTimeout((()=>e=!1),100)}this.display=()=>{},this.canvasPixelScale=1,document.getElementById("canvasA").addEventListener("mousemove",t.bind(this)),document.getElementById("canvasA").addEventListener("touchstart",t.bind(this))},O={setAbsolute:()=>{},setRelative:()=>{}};let C=!1,B="",A=()=>{},N=()=>{},H=(e,t)=>{};const j=new TextEncoder,M=new TextDecoder;r.add({name:"lobbyJoinMenu",element:document.getElementById("customLobbyJoinMenu")});const P=r.create({name:"customLobby",classes:"scrollable selectable flex-column text-align-center",closable:!1}),F=document.createElement("h2");F.textContent="Custom Lobby";const W=document.createElement("div");W.className="customlobby-main";const D=document.createElement("div"),_=document.createElement("p");_.textContent="0 Players";const R=document.createElement("div");D.append(_,R);const U=document.createElement("div");U.className="text-align-left";const J={mode:{label:"Mode:",type:"selectMenu",options:[{value:0,label:"2 Teams"},{value:1,label:"3 Teams"},{value:2,label:"4 Teams"},{value:3,label:"5 Teams"},{value:4,label:"6 Teams"},{value:5,label:"7 Teams"},{value:6,label:"8 Teams"},{value:7,label:"Battle Royale"},{value:10,label:"No Fullsend Battle Royale"},{value:9,label:"Zombie mode"}]},map:{label:"Map:",type:"selectMenu"},difficulty:{label:"Difficulty:",type:"selectMenu",options:[{value:0,label:"Very Easy (Default)"},{value:1,label:"Easy (1v1)"},{value:2,label:"Normal"},{value:3,label:"Hard"},{value:4,label:"Very Hard"},{value:5,label:"Impossible"}]},spawnSelection:{label:"Spawn selection",type:"checkbox"},botCount:{label:"Bot & player count:",type:"numberInput",attributes:{min:"1",max:"512"}}},$={},G={};function K(e,t){"checkbox"===J[e].type?$[e].checked=0!==t:$[e].value=t.toString(),G[e]=t}function q(e,t){Z("options",[e,parseInt(t.target.value)])}function V(e,t){Z("options",[e,t.target.checked?1:0])}Object.entries(J).forEach((([e,t])=>{const n=document.createElement("label");t.tooltip&&(n.title=t.tooltip);const o=t.type.endsWith("Input"),a=document.createElement(o||"checkbox"===t.type?"input":"selectMenu"===t.type?"select":"button");if($[e]=a,"textInput"===t.type&&(a.type="text"),"numberInput"===t.type&&(a.type="number"),t.placeholder&&(a.placeholder=t.placeholder),(o||"selectMenu"===t.type)&&a.addEventListener("change",q.bind(void 0,e)),t.text&&(a.innerText=t.text),t.action&&a.addEventListener("click",t.action),t.label&&n.append(t.label+" "),t.note){const e=document.createElement("small");e.innerText=t.note,n.append(document.createElement("br"),e)}if(t.options&&Q(t.options,a),t.attributes&&Object.entries(t.attributes).forEach((([e,t])=>a.setAttribute(e,t))),n.append(a),"checkbox"===t.type){a.type="checkbox";const t=document.createElement("span");t.className="checkmark",n.className="checkbox",n.append(t),a.addEventListener("change",V.bind(void 0,e))}else n.append(document.createElement("br"));U.append(n)})),W.append(D,U);const X=document.createElement("footer");X.style.marginTop="10px";const z=document.createElement("button"),Y=document.createElement("button");function Q(e,t){e.forEach((e=>{const n=document.createElement("option");n.setAttribute("value",e.value),n.textContent=e.label,t.append(n)}))}function Z(e,t){const n=void 0!==t?{t:e,d:t}:{t:e},o=j.encode(JSON.stringify(n)),a=new ArrayBuffer(o.length+1);new DataView(a).setUint8(0,120),new Uint8Array(a,1).set(o),H(1,a)}z.textContent="Start game",Y.textContent="Leave lobby",z.addEventListener("click",(function(){r.closeWindow("customLobby"),Z("startGame")})),Y.addEventListener("click",(()=>N())),X.append(z,Y),P.append(F,W,X),document.getElementById("lobbyCode").addEventListener("input",(({target:e})=>{5===e.value.length&&(B=e.value.toLowerCase(),e.value="",r.closeWindow("lobbyJoinMenu"),C=!0,A())})),document.getElementById("createLobbyButton").addEventListener("click",(()=>{B="",r.closeWindow("lobbyJoinMenu"),C=!0,A()}));let ee=!1,te=[];function ne(e,t){const n=document.createElement("span");return n.textContent=e,n.className=t?"":"d-none",n}function oe(e){const t=document.createElement("div");t.className="lobby-player",t.textContent=e.name;const n=document.createElement("button");n.textContent="Kick",n.className=ee&&!e.isHost?"":"d-none",n.addEventListener("click",ae);const o=ne("Host",e.isHost),a=ne("In Game",e.inGame);t.append(o,a,n),R.append(t),te.push({element:t,hostBadge:o,inGameBadge:a,kickButton:n,isHost:e.isHost})}function ae(e){const t=e.target;for(let e=0;e<te.length;e++)if(te[e].kickButton===t){Z("kick",e);break}}function se(){_.textContent=`${te.length} Player${1===te.length?"":"s"}`}const ie={gameInfo:G,showJoinPrompt:function(){r.openWindow("lobbyJoinMenu")},isCustomMessage:function(e){if(120!==e[0])return!1;if(1===e.length)return!0;const t=new Uint8Array(e.buffer,1),n=JSON.parse(M.decode(t)),{t:o,d:a}=n;if("lobby"===o)r.openWindow("customLobby"),F.textContent="Custom Lobby "+a.code,B=a.code,ee=a.isHost,z.disabled=!ee,ee?U.classList.remove("disabled"):U.classList.add("disabled"),Object.entries(a.options).forEach((([e,t])=>K(e,t))),s=a.players,te=[],R.innerHTML="",s.forEach(oe),se();else if("addPlayer"===o)oe(a),se();else if("removePlayer"===o){const e=a;te[e].element.remove(),te.splice(e,1),se()}else if("inLobby"===o)te[a].inGameBadge.className="d-none";else if("options"===o){const[e,t]=a;K(e,t)}else if("setHost"===o){const e=a;te[e].isHost=!0,te[e].hostBadge.className=""}else"host"===o?(ee=!0,z.disabled=!1,U.classList.remove("disabled"),te.forEach((e=>{e.isHost||(e.kickButton.className="")}))):"serverMessage"===o&&alert(a);var s;return!0},getSocketURL:function(){return"wss://fx.peshomir.workers.dev/"+(""===B?"create":"join?"+B)},setJoinFunction:function(e){A=e},setLeaveFunction:function(e){N=e},setSendFunction:function(e){H=e},setMapInfo:function(e){setTimeout((()=>Q(e.map(((e,t)=>({value:t.toString(),label:e.name}))),$.map)),0)},rejoinLobby:function(){A()},hideWindow:function(){r.closeWindow("customLobby")},isActive:()=>C,setActive:function(e){C=e,!1===e&&r.closeWindow("customLobby")}};window.__fx=window.__fx||{};const le=window.__fx;le.version="0.6.6.9 Dec 24",le.settingsManager=y,le.leaderboardFilter=v,le.utils=I,le.WindowManager=r,le.keybindFunctions=O,le.keybindHandler=e=>{const t=m().attackPercentageKeybinds.find((t=>t.key===e));return void 0!==t&&("absolute"===t.type?O.setAbsolute(t.value):O.setRelative(t.value),!0)},le.donationsTracker=x,le.playerList=T,le.hoveringTooltip=S,le.clanFilter=w,le.wins=n,le.customLobby=ie,console.log("Successfully loaded FX Client")})();