!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=a.parcelRequire24c7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var a=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,a.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){r[e]=a},a.parcelRequire24c7=t);var i,o,s=t("kAkBg"),l=t("jO2Au");function u(){return(u=s.asyncToGenerator(e(l).mark((function a(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector("#mycontainer").insertAdjacentHTML("afterbegin",w),e.t0=s,e.next=5,D(["editions"]);case 5:return e.t1=e.sent,n=e.t0.slicedToArray.call(e.t0,e.t1,1),i=n[0],e.next=11,d();case 11:return h(),c(),e.next=15,window.showTranslations();case 15:p(),$("select").select2({theme:"bootstrap4"}),$("#verse").on("select2:select",(function(e){location=location.hash}));case 18:case"end":return e.stop()}}),a)})))).apply(this,arguments)}function h(){var e=new URL(window.location).searchParams;if(null===e.get("editions")){var a=Cookies.get("editions");void 0===a?$('#translationdropdown option[value="eng-mustafakhattabg"]').prop("selected",!0):JSON.parse(a).map((function(e){return $('#translationdropdown option[value="'+e+'"]').prop("selected",!0)}))}else e.get("editions").split(",").map((function(e){return $('#translationdropdown option[value="'+e+'"]').prop("selected",!0)}))}function c(){if(""===window.location.hash){var e=Cookies.get("chapter");void 0===e?$('#chapter option[value="1"]').prop("selected",!0):$('#chapter option[value="'+e+'"]').prop("selected",!0)}else{var a=window.location.hash.substring(1).split(":");$('#chapter option[value="'+a[0]+'"]').prop("selected",!0)}}function p(){window.location.hash.substring(1).split(":").length>1&&(window.location=window.location.hash,$('#verse option[value="'+window.location.hash+'"]').prop("selected",!0))}function d(){return f.apply(this,arguments)}function f(){return(f=s.asyncToGenerator(e(l).mark((function a(){var n,r,t,o,u,h,c,p,d,f,v,A,T,m,w,b,y,x;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],r=!0,t=!1,o=void 0,e.prev=2,u=Object.values(i)[Symbol.iterator]();!(r=(h=u.next()).done);r=!0)c=h.value,p=/\-la$/i.test(c.name)?c.language+" Latin - "+c.author:/\-lad$/i.test(c.name)?c.language+" LatinD - "+c.author:c.language+" - "+c.author,n.push([p,c.name,c.direction]);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),t=!0,o=e.t0;case 10:e.prev=10,e.prev=11,r||null==u.return||u.return();case 13:if(e.prev=13,!t){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:for(n.sort(),d=!0,f=!1,v=void 0,e.prev=20,A=n[Symbol.iterator]();!(d=(T=A.next()).done);d=!0)m=s.slicedToArray(T.value,3),w=m[0],b=m[1],y=m[2],$("#translationdropdown").append('<option value="'+b+'" data-dir="'+y+'">'+w+"</option>");e.next=28;break;case 24:e.prev=24,e.t1=e.catch(20),f=!0,v=e.t1;case 28:e.prev=28,e.prev=29,d||null==A.return||A.return();case 31:if(e.prev=31,!f){e.next=34;break}throw v;case 34:return e.finish(31);case 35:return e.finish(28);case 36:for(x=1;x<=g;x++)$("#chapter").append('<option value="'+x+'">'+x+" - "+q[x-1]+" ("+C[x-1]+")</option>");case 37:case"end":return e.stop()}}),a,null,[[2,6,10,18],[11,,13,17],[20,24,28,36],[29,,31,35]])})))).apply(this,arguments)}function v(){$("#verse").empty(),$("#verse").append('<option value="" selected>Verse</option>');for(var e=$("#chapter").val(),a=1;a<=b[e-1];a++){var n="#"+e+":"+a;$("#verse").append('<option value="'+n+'">'+a+"</option>")}}function A(e){return T.apply(this,arguments)}function T(){return(T=s.asyncToGenerator(e(l).mark((function a(n){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(n);case 2:return r=e.sent,e.abrupt("return",r.map((function(e){return e.chapter.map((function(e){return e.text}))})));case 4:case"end":return e.stop()}}),a)})))).apply(this,arguments)}function m(){0===$("#spinningwheel").length&&$("#versescolumn").prepend('<div  id="spinningwheel">\n    <div class="text-center">\n      <div class="spinner-border m-5" role="status">\n      </div>\n      </div>\n      </div>\n      ')}window.showTranslations=(o=s.asyncToGenerator(e(l).mark((function a(){var n,r,t,i,o,u,h,c,p,d,f,T,w,g,y,x,k,S,M,q,C,j,O,D,H,N;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($("#versescolumn").empty(),$("#versescolumn").append('<div id="verseslist" class="card list-group list-group-flush"></div>'),n=$("#translationdropdown").val().filter((function(e){return!/^\s*$/.test(e)})),r=[],t=$("#chapter").val(),i=[],""!==t){e.next=8;break}return e.abrupt("return");case 8:for(n.length>0&&(Cookies.set("editions",JSON.stringify(n),{expires:1e3,path:""}),Cookies.set("chapter",t,{expires:1e3,path:""}),m()),o=!0,u=!1,h=void 0,e.prev=10,c=n[Symbol.iterator]();!(o=(p=c.next()).done);o=!0)d=p.value,f="editions/"+d+"/"+t,i.push(f);e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,h=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!u){e.next=24;break}throw h;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return e.next=28,A(i);case 28:T=e.sent,r=T.map((function(e,a){return[e,n[a],$('#translationdropdown option[value="'+n[a]+'"]').attr("data-dir"),$('#translationdropdown option[value="'+n[a]+'"]').text()]})),w=1,$("#verseslist").append('<span id="'+t+':1"> </span>'),$("#spinningwheel").remove(),y=!0,x=!1,k=void 0,S=1;case 36:if(!(S<=b[t-1])){e.next=56;break}for(e.prev=37,M=r[Symbol.iterator]();!(y=(q=M.next()).done);y=!0)C=s.slicedToArray(q.value,4),j=C[0],O=C[1],D=C[2],H=C[3],N=t+":"+(S+w),g=O+" list-group-item p-2",$("#verseslist").append('<div class="'+g+'" dir="'+D+'" id="'+N+'"><span class="badge bg-light text-dark" data-bs-toggle="tooltip" title="'+H+'">'+S+"</span> - "+j[S-1]+"</div>");e.next=45;break;case 41:e.prev=41,e.t1=e.catch(37),x=!0,k=e.t1;case 45:e.prev=45,e.prev=46,y||null==M.return||M.return();case 48:if(e.prev=48,!x){e.next=51;break}throw k;case 51:return e.finish(48);case 52:return e.finish(45);case 53:S++,e.next=36;break;case 56:void 0,[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)})),v();case 58:case"end":return e.stop()}}),a,null,[[10,14,18,26],[19,,21,25],[37,41,45,53],[46,,48,52]])}))),function(){return o.apply(this,arguments)}),window.addEventListener("DOMContentLoaded",(function(e){(function(){return u.apply(this,arguments)})()}));for(var w='\n<div class="m-3 d-none">\n<form class="d-flex" onsubmit="beginSearch(); return false">\n  <input id="searchquery" class="form-control mr-2" type="search" placeholder="Search Quran Verse" aria-label="Search Quran Verse" />\n  <button id="searchbtn" class="btn btn-outline-info" type="button" onclick="beginSearch(); return false">\n    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"\n      xmlns="http://www.w3.org/2000/svg">\n      <path fill-rule="evenodd"\n        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />\n      <path fill-rule="evenodd"\n        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />\n    </svg>\n  </button>\n</form>\n</div>\n',g=114,b=[7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6],y=[],x=[],k=1;k<=g;k++)for(var S=1;S<=b[k-1];S++)y.push([k,S]),x.push(k+","+S);var M={"Al-Faatiha":"The Opening","Al-Baqara":"The Cow","Aal-i-Imraan":"The Family of Imraan","An-Nisaa":"The Women","Al-Maaida":"The Table","Al-An'aam":"The Cattle","Al-A'raaf":"The Heights","Al-Anfaal":"The Spoils of War","At-Tawba":"The Repentance",Yunus:"Jonas",Hud:"Hud",Yusuf:"Joseph","Ar-Ra'd":"The Thunder",Ibrahim:"Abraham","Al-Hijr":"The Rock","An-Nahl":"The Bee","Al-Israa":"The Night Journey","Al-Kahf":"The Cave",Maryam:"Mary","Taa-Haa":"Taa-Haa","Al-Anbiyaa":"The Prophets","Al-Hajj":"The Pilgrimage","Al-Muminoon":"The Believers","An-Noor":"The Light","Al-Furqaan":"The Criterion","Ash-Shu'araa":"The Poets","An-Naml":"The Ant","Al-Qasas":"The Stories","Al-Ankaboot":"The Spider","Ar-Room":"The Romans",Luqman:"Luqman","As-Sajda":"The Prostration","Al-Ahzaab":"The Clans",Saba:"Sheba",Faatir:"The Originator",Yaseen:"Yaseen","As-Saaffaat":"Those drawn up in Ranks",Saad:"The letter Saad","Az-Zumar":"The Groups",Ghafir:"The Forgiver",Fussilat:"Explained in detail","Ash-Shura":"Consultation","Az-Zukhruf":"Ornaments of gold","Ad-Dukhaan":"The Smoke","Al-Jaathiya":"Crouching","Al-Ahqaf":"The Dunes",Muhammad:"Muhammad","Al-Fath":"The Victory","Al-Hujuraat":"The Inner Apartments",Qaaf:"The letter Qaaf","Adh-Dhaariyat":"The Winnowing Winds","At-Tur":"The Mount","An-Najm":"The Star","Al-Qamar":"The Moon","Ar-Rahmaan":"The Beneficent","Al-Waaqia":"The Inevitable","Al-Hadid":"The Iron","Al-Mujaadila":"The Pleading Woman","Al-Hashr":"The Exile","Al-Mumtahana":"She that is to be examined","As-Saff":"The Ranks","Al-Jumu'a":"Friday","Al-Munaafiqoon":"The Hypocrites","At-Taghaabun":"Mutual Disillusion","At-Talaaq":"Divorce","At-Tahrim":"The Prohibition","Al-Mulk":"The Sovereignty","Al-Qalam":"The Pen","Al-Haaqqa":"The Reality","Al-Ma'aarij":"The Ascending Stairways",Nooh:"Noah","Al-Jinn":"The Jinn","Al-Muzzammil":"The Enshrouded One","Al-Muddaththir":"The Cloaked One","Al-Qiyaama":"The Resurrection","Al-Insaan":"Man","Al-Mursalaat":"The Emissaries","An-Naba":"The Announcement","An-Naazi'aat":"Those who drag forth",Abasa:"He frowned","At-Takwir":"The Overthrowing","Al-Infitaar":"The Cleaving","Al-Mutaffifin":"Defrauding","Al-Inshiqaaq":"The Splitting Open","Al-Burooj":"The Constellations","At-Taariq":"The Morning Star","Al-A'laa":"The Most High","Al-Ghaashiya":"The Overwhelming","Al-Fajr":"The Dawn","Al-Balad":"The City","Ash-Shams":"The Sun","Al-Lail":"The Night","Ad-Dhuhaa":"The Morning Hours","Ash-Sharh":"The Consolation","At-Tin":"The Fig","Al-Alaq":"The Clot","Al-Qadr":"The Power, Fate","Al-Bayyina":"The Evidence","Az-Zalzala":"The Earthquake","Al-Aadiyaat":"The Chargers","Al-Qaari'a":"The Calamity","At-Takaathur":"Competition","Al-Asr":"The Declining Day, Epoch","Al-Humaza":"The Traducer","Al-Fil":"The Elephant",Quraish:"Quraysh","Al-Maa'un":"Almsgiving","Al-Kawthar":"Abundance","Al-Kaafiroon":"The Disbelievers","An-Nasr":"Divine Support","Al-Masad":"The Palm Fibre","Al-Ikhlaas":"Sincerity","Al-Falaq":"The Dawn","An-Naas":"Mankind"},q=Object.keys(M),C=Object.values(M);new DOMParser;var j=["https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/","https://raw.githubusercontent.com/fawazahmed0/quran-api/1/"],O=[".min.json",".json"];function D(e,a){return H.apply(this,arguments)}function H(){return(H=s.asyncToGenerator(e(l).mark((function a(n,r){var t,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,Array.isArray(n)||(n=[n],t=!0),e.next=4,Promise.all(n.map((function(e){return N(F(e,r)).then((function(e){return e.json()}))}))).catch(console.error);case 4:if(i=e.sent,!t){e.next=7;break}return e.abrupt("return",i[0]);case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),a)})))).apply(this,arguments)}function N(e,a){return z.apply(this,arguments)}function z(){return(z=s.asyncToGenerator(e(l).mark((function a(n,r){var t,i,o,s,u,h,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=!0,o=!1,s=void 0,e.prev=2,u=n[Symbol.iterator]();case 4:if(i=(h=u.next()).done){e.next=19;break}return c=h.value,e.prev=6,e.next=9,fetch(c,r);case 9:if(!(t=e.sent).ok){e.next=12;break}return e.abrupt("return",t);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:i=!0,e.next=4;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),o=!0,s=e.t1;case 25:e.prev=25,e.prev=26,i||null==u.return||u.return();case 28:if(e.prev=28,!o){e.next=31;break}throw s;case 31:return e.finish(28);case 32:return e.finish(25);case 33:return e.abrupt("return",t);case 34:case"end":return e.stop()}}),a,null,[[2,21,25,33],[6,14],[26,,28,32]])})))).apply(this,arguments)}function F(e,a){return a=a||j,O.map((function(n){return a.map((function(a){return a+e+n}))})).flat()}window.beginSearch=function(){var e=new URLSearchParams,a=document.getElementById("searchquery").value;e.set("q","site:fawazahmed0.github.io/quran ".concat(a)),window.open("https://www.google.com/search?"+e.toString(),"_blank")}}();
//# sourceMappingURL=index.30e9703c.js.map
