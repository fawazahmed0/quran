!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=a.parcelRequire24c7;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var a=n[e];delete n[e];var t={id:e,exports:{}};return r[e]=t,a.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){n[e]=a},a.parcelRequire24c7=t);var o=t("kAkBg"),i=t("jO2Au");function l(){return(l=o.asyncToGenerator(e(i).mark((function a(){var r,n,t,l,h,u,d,A,p,f,T,m,b,y,w,S,x,k,C,j,H,O,D,N,F,L,z,R,E,P,I,Q,B,J,G,W,_,U,V,Y,K;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector("#mycontainer").insertAdjacentHTML("beforeend",c),r=new URLSearchParams(document.location.search),n=r.get("chapter"),t=r.get("verse"),e.t0=o,e.next=7,g(["editions","isocodes/iso-codes"]);case 7:for(e.t1=e.sent,l=e.t0.slicedToArray.call(e.t0,e.t1,2),h=l[0],u=l[1],d=Object.values(h).map((function(e){return[e.name,e.language,e.direction,e.author]})),A=[],p=q(s).querySelector(".table"),f=o.toConsumableArray(new Set(d.map((function(e){return e[1]})))),T=!0,m=!1,b=void 0,e.prev=16,y=f[Symbol.iterator]();!(T=(w=y.next()).done);T=!0)S=w.value,(x=v("a",{href:"#".concat(S.toLowerCase())})).innerText=S,k=v("tr"),(C=v("td",{class:"text-center"})).appendChild(x),k.appendChild(C),p.querySelector("tbody").appendChild(k);e.next=24;break;case 20:e.prev=20,e.t2=e.catch(16),m=!0,b=e.t2;case 24:e.prev=24,e.prev=25,T||null==y.return||y.return();case 27:if(e.prev=27,!m){e.next=30;break}throw b;case 30:return e.finish(27);case 31:return e.finish(24);case 32:for(j=!0,H=!1,O=void 0,e.prev=33,D=d[Symbol.iterator]();!(j=(N=D.next()).done);j=!0)F=o.slicedToArray(N.value,1),L=F[0],A.push("editions/".concat(L,"/").concat(n,"/").concat(t));e.next=41;break;case 37:e.prev=37,e.t3=e.catch(33),H=!0,O=e.t3;case 41:e.prev=41,e.prev=42,j||null==D.return||D.return();case 44:if(e.prev=44,!H){e.next=47;break}throw O;case 47:return e.finish(44);case 48:return e.finish(41);case 49:return document.querySelector("#mycontainer").appendChild(p),e.next=52,g(A);case 52:for(z=e.sent,R=0,E=[],P=!0,I=!1,Q=void 0,e.prev=56,B=d[Symbol.iterator]();!(P=(J=B.next()).done);P=!0)G=o.slicedToArray(J.value,4),W=G[0],_=G[1],U=G[2],V=G[3],E.includes(_)||(Y=v("h2",{id:_.toLowerCase(),class:"text-center"}),(K=v("a",{href:"#".concat(_.toLowerCase()),class:"link-dark"})).innerText=_,Y.appendChild(K),document.querySelector("#mycontainer").appendChild(Y)),document.querySelector("#mycontainer").appendChild(M(z[R],W,U,_,V,u)),E.push(_),R++;e.next=64;break;case 60:e.prev=60,e.t4=e.catch(56),I=!0,Q=e.t4;case 64:e.prev=64,e.prev=65,P||null==B.return||B.return();case 67:if(e.prev=67,!I){e.next=70;break}throw Q;case 70:return e.finish(67);case 71:return e.finish(64);case 72:case"end":return e.stop()}}),a,null,[[16,20,24,32],[25,,27,31],[33,37,41,49],[42,,44,48],[56,60,64,72],[65,,67,71]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return l.apply(this,arguments)}));for(var s='\n<table class="table table-hover  table-striped">\n  <tbody>\n\n  </tbody>\n</table>\n',c='\n<div class="m-3 d-none">\n<form class="d-flex" onsubmit="beginSearch(); return false">\n  <input id="searchquery" class="form-control mr-2" type="search" placeholder="Search Quran Verse" aria-label="Search Quran Verse" />\n  <button id="searchbtn" class="btn btn-outline-info" type="button" onclick="beginSearch(); return false">\n    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"\n      xmlns="http://www.w3.org/2000/svg">\n      <path fill-rule="evenodd"\n        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />\n      <path fill-rule="evenodd"\n        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />\n    </svg>\n  </button>\n</form>\n</div>\n',h=[7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6],u=[],d=[],A=1;A<=114;A++)for(var p=1;p<=h[A-1];p++)u.push([A,p]),d.push(A+","+p);var f={"Al-Faatiha":"The Opening","Al-Baqara":"The Cow","Aal-i-Imraan":"The Family of Imraan","An-Nisaa":"The Women","Al-Maaida":"The Table","Al-An'aam":"The Cattle","Al-A'raaf":"The Heights","Al-Anfaal":"The Spoils of War","At-Tawba":"The Repentance",Yunus:"Jonas",Hud:"Hud",Yusuf:"Joseph","Ar-Ra'd":"The Thunder",Ibrahim:"Abraham","Al-Hijr":"The Rock","An-Nahl":"The Bee","Al-Israa":"The Night Journey","Al-Kahf":"The Cave",Maryam:"Mary","Taa-Haa":"Taa-Haa","Al-Anbiyaa":"The Prophets","Al-Hajj":"The Pilgrimage","Al-Muminoon":"The Believers","An-Noor":"The Light","Al-Furqaan":"The Criterion","Ash-Shu'araa":"The Poets","An-Naml":"The Ant","Al-Qasas":"The Stories","Al-Ankaboot":"The Spider","Ar-Room":"The Romans",Luqman:"Luqman","As-Sajda":"The Prostration","Al-Ahzaab":"The Clans",Saba:"Sheba",Faatir:"The Originator",Yaseen:"Yaseen","As-Saaffaat":"Those drawn up in Ranks",Saad:"The letter Saad","Az-Zumar":"The Groups",Ghafir:"The Forgiver",Fussilat:"Explained in detail","Ash-Shura":"Consultation","Az-Zukhruf":"Ornaments of gold","Ad-Dukhaan":"The Smoke","Al-Jaathiya":"Crouching","Al-Ahqaf":"The Dunes",Muhammad:"Muhammad","Al-Fath":"The Victory","Al-Hujuraat":"The Inner Apartments",Qaaf:"The letter Qaaf","Adh-Dhaariyat":"The Winnowing Winds","At-Tur":"The Mount","An-Najm":"The Star","Al-Qamar":"The Moon","Ar-Rahmaan":"The Beneficent","Al-Waaqia":"The Inevitable","Al-Hadid":"The Iron","Al-Mujaadila":"The Pleading Woman","Al-Hashr":"The Exile","Al-Mumtahana":"She that is to be examined","As-Saff":"The Ranks","Al-Jumu'a":"Friday","Al-Munaafiqoon":"The Hypocrites","At-Taghaabun":"Mutual Disillusion","At-Talaaq":"Divorce","At-Tahrim":"The Prohibition","Al-Mulk":"The Sovereignty","Al-Qalam":"The Pen","Al-Haaqqa":"The Reality","Al-Ma'aarij":"The Ascending Stairways",Nooh:"Noah","Al-Jinn":"The Jinn","Al-Muzzammil":"The Enshrouded One","Al-Muddaththir":"The Cloaked One","Al-Qiyaama":"The Resurrection","Al-Insaan":"Man","Al-Mursalaat":"The Emissaries","An-Naba":"The Announcement","An-Naazi'aat":"Those who drag forth",Abasa:"He frowned","At-Takwir":"The Overthrowing","Al-Infitaar":"The Cleaving","Al-Mutaffifin":"Defrauding","Al-Inshiqaaq":"The Splitting Open","Al-Burooj":"The Constellations","At-Taariq":"The Morning Star","Al-A'laa":"The Most High","Al-Ghaashiya":"The Overwhelming","Al-Fajr":"The Dawn","Al-Balad":"The City","Ash-Shams":"The Sun","Al-Lail":"The Night","Ad-Dhuhaa":"The Morning Hours","Ash-Sharh":"The Consolation","At-Tin":"The Fig","Al-Alaq":"The Clot","Al-Qadr":"The Power, Fate","Al-Bayyina":"The Evidence","Az-Zalzala":"The Earthquake","Al-Aadiyaat":"The Chargers","Al-Qaari'a":"The Calamity","At-Takaathur":"Competition","Al-Asr":"The Declining Day, Epoch","Al-Humaza":"The Traducer","Al-Fil":"The Elephant",Quraish:"Quraysh","Al-Maa'un":"Almsgiving","Al-Kawthar":"Abundance","Al-Kaafiroon":"The Disbelievers","An-Nasr":"Divine Support","Al-Masad":"The Palm Fibre","Al-Ikhlaas":"Sincerity","Al-Falaq":"The Dawn","An-Naas":"Mankind"},T=Object.keys(f);Object.values(f);var m=new DOMParser;function v(e,a){a||(a={});var r=document.createElement(e),n=!0,t=!1,i=void 0;try{for(var l,s=Object.entries(a)[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=o.slicedToArray(l.value,2),h=c[0],u=c[1];r.setAttribute(h,u)}}catch(e){t=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(t)throw i}}return r}var b=["https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/","https://raw.githubusercontent.com/fawazahmed0/quran-api/1/"],y=[".min.json",".json"];function g(e,a){return w.apply(this,arguments)}function w(){return(w=o.asyncToGenerator(e(i).mark((function a(r,n){var t,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,Array.isArray(r)||(r=[r],t=!0),e.next=4,Promise.all(r.map((function(e){return S(k(e,n)).then((function(e){return e.json()}))}))).catch(console.error);case 4:if(o=e.sent,!t){e.next=7;break}return e.abrupt("return",o[0]);case 7:return e.abrupt("return",o);case 8:case"end":return e.stop()}}),a)})))).apply(this,arguments)}function S(e,a){return x.apply(this,arguments)}function x(){return(x=o.asyncToGenerator(e(i).mark((function a(r,n){var t,o,l,s,c,h,u;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=!0,l=!1,s=void 0,e.prev=2,c=r[Symbol.iterator]();case 4:if(o=(h=c.next()).done){e.next=19;break}return u=h.value,e.prev=6,e.next=9,fetch(u,n);case 9:if(!(t=e.sent).ok){e.next=12;break}return e.abrupt("return",t);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:o=!0,e.next=4;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),l=!0,s=e.t1;case 25:e.prev=25,e.prev=26,o||null==c.return||c.return();case 28:if(e.prev=28,!l){e.next=31;break}throw s;case 31:return e.finish(28);case 32:return e.finish(25);case 33:return e.abrupt("return",t);case 34:case"end":return e.stop()}}),a,null,[[2,21,25,33],[6,14],[26,,28,32]])})))).apply(this,arguments)}function k(e,a){return a=a||b,y.map((function(r){return a.map((function(a){return a+e+r}))})).flat()}function q(e){return m.parseFromString(e,"text/html")}function M(e,a,r,n,t,o){var i=n.toLowerCase(),l=q('    \n<div class="card text-dark bg-light m-3">\n<div class="card-body">\n<div class="card-text lead m-1"></div>\n</div>\n\n<span id="footercontainer">\n</span>\n\n</div>\n').querySelector(".card");l.querySelector(".card-text").innerText=e.text;var s=v("div",{class:"card-footer"}),c="quran:".concat(a,":").concat(e.chapter,":").concat(e.verse);return l.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(l.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend","<a href=#".concat(c,' class="link-dark text-decoration-none" >').concat(t,"</a> <br>")),l.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(l.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend","<a href=#".concat(c,' class="link-dark text-decoration-none" >Chapter ').concat(e.chapter," ").concat(T[e.chapter-1],", Verse ").concat(e.verse,"</a> <br>")),l.setAttribute("id",c),l.querySelector(".card-text").setAttribute("dir",r),l.querySelector(".card-text").setAttribute("lang",o[i].iso1?o[i].iso1:o[i].iso2),l}window.beginSearch=function(){var e=new URLSearchParams,a=document.getElementById("searchquery").value;e.set("q","site:fawazahmed0.github.io/quran ".concat(a)),window.open("https://www.google.com/search?"+e.toString(),"_blank")}}();
//# sourceMappingURL=data.1520a7d6.js.map
