!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequire24c7;function i(e,t,r,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){i(o,n,a,s,u,"next",e)}function u(e){i(o,n,a,s,u,"throw",e)}s(void 0)}))}}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire24c7=o),o.register("gm4sb",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("gm4sb").register(JSON.parse('{"6kJx8":"index.075a4d00.js","fEJDW":"service-worker.js"}'));var l={},c=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n=h;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return $()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=c(e,t,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",v={};function g(){}function m(){}function y(){}var w={};u(w,o,(function(){return this}));var A=Object.getPrototypeOf,T=A&&A(A(O([])));T&&T!==r&&n.call(T,o)&&(w=T);var b=y.prototype=g.prototype=Object.create(w);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(a,o,i,s){var u=c(e[a],e,o);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(h).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(u.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=c(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function O(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:$}}function $(){return{value:t,done:!0}}return m.prototype=y,u(b,"constructor",y),u(y,"constructor",m),m.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(k.prototype),u(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new k(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(b),u(b,s,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(l);try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var h,p,f="https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@latest/editions";function d(){return(d=s(t(l).mark((function e(){var r;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,k([f+".min.json"]);case 3:return r=e.sent,h=r[0],e.next=8,w();case 8:return v(),g(),e.next=12,window.showTranslations();case 12:m(),$("select").select2({theme:"bootstrap4"}),$("#verse").on("select2:select",(function(e){location=location.hash}));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){var e=new URL(window.location).searchParams;if(null===e.get("editions")){var t=Cookies.get("editions");void 0===t?$('#translationdropdown option[value="eng-mustafakhattabg"]').prop("selected",!0):JSON.parse(t).map((function(e){return $('#translationdropdown option[value="'+e+'"]').prop("selected",!0)}))}else e.get("editions").split(",").map((function(e){return $('#translationdropdown option[value="'+e+'"]').prop("selected",!0)}))}function g(){if(""===window.location.hash){var e=Cookies.get("chapter");void 0===e?$('#chapter option[value="1"]').prop("selected",!0):$('#chapter option[value="'+e+'"]').prop("selected",!0)}else{var t=window.location.hash.substring(1).split(":");$('#chapter option[value="'+t[0]+'"]').prop("selected",!0)}}function m(){window.location.hash.substring(1).split(":").length>1&&(window.location=window.location.hash,$('#verse option[value="'+window.location.hash+'"]').prop("selected",!0))}function y(){return(y=s(t(l).mark((function e(){var r,n,a,o,i,s,c,p,f,d,v,g,m,y,w,A,T,b;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],n=!0,a=!1,o=void 0,e.prev=2,i=Object.values(h)[Symbol.iterator]();!(n=(s=i.next()).done);n=!0)c=s.value,p=/\-la$/i.test(c.name)?c.language+" Latin - "+c.author:/\-lad$/i.test(c.name)?c.language+" LatinD - "+c.author:c.language+" - "+c.author,r.push([p,c.name,c.direction]);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,n||null==i.return||i.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:for(r.sort(),f=!0,d=!1,v=void 0,e.prev=20,g=r[Symbol.iterator]();!(f=(m=g.next()).done);f=!0)y=u(m.value),w=y[0],A=y[1],T=y[2],$("#translationdropdown").append('<option value="'+A+'" data-dir="'+T+'">'+w+"</option>");e.next=28;break;case 24:e.prev=24,e.t1=e.catch(20),d=!0,v=e.t1;case 28:e.prev=28,e.prev=29,f||null==g.return||g.return();case 31:if(e.prev=31,!d){e.next=34;break}throw v;case 34:return e.finish(31);case 35:return e.finish(28);case 36:for(b=1;b<=114;b++)$("#chapter").append('<option value="'+b+'">'+b+" - "+F[b-1]+" ("+P[b-1]+")</option>");case 37:case"end":return e.stop()}}),e,null,[[2,6,10,18],[11,,13,17],[20,24,28,36],[29,,31,35]])})))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function A(){$("#verse").empty(),$("#verse").append('<option value="" selected>Verse</option>');for(var e=$("#chapter").val(),t=1;t<=L[e-1];t++){var r="#"+e+":"+t;$("#verse").append('<option value="'+r+'">'+t+"</option>")}}function T(){return(T=s(t(l).mark((function e(r){var n;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(r);case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return e.chapter.map((function(e){return e.text}))})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return T.apply(this,arguments)}function x(){return(x=s(t(l).mark((function e(r){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(r.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).catch(console.error);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return x.apply(this,arguments)}function S(){0===$("#spinningwheel").length&&$("#versescolumn").prepend('<div  id="spinningwheel">\n    <div class="text-center">\n      <div class="spinner-border m-5" role="status">\n      </div>\n      </div>\n      </div>\n      ')}window.showTranslations=(p=s(t(l).mark((function e(){var r,n,a,o,i,s,c,h,p,d,v,g,m,y,w,T,x,k,E,j,O,M,N,C,F,P;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($("#versescolumn").empty(),$("#versescolumn").append('<ul id="verseslist" class="card list-group list-group-flush"></ul>'),r=$("#translationdropdown").val().filter((function(e){return!/^\s*$/.test(e)})),n=[],a=$("#chapter").val(),o=[],""!==a){e.next=8;break}return e.abrupt("return");case 8:for(r.length>0&&(Cookies.set("editions",JSON.stringify(r),{expires:1e3,path:""}),Cookies.set("chapter",a,{expires:1e3,path:""}),S()),i=!0,s=!1,c=void 0,e.prev=10,h=r[Symbol.iterator]();!(i=(p=h.next()).done);i=!0)d=p.value,v=f+"/"+d+"/"+a+".min.json",o.push(v);e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,c=e.t0;case 18:e.prev=18,e.prev=19,i||null==h.return||h.return();case 21:if(e.prev=21,!s){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return e.next=28,b(o);case 28:g=e.sent,n=g.map((function(e,t){return[e,r[t],$('#translationdropdown option[value="'+r[t]+'"]').attr("data-dir"),$('#translationdropdown option[value="'+r[t]+'"]').text()]})),m=1,$("#verseslist").append('<span id="'+a+':1"> </span>'),$("#spinningwheel").remove(),w=!0,T=!1,x=void 0,k=1;case 36:if(!(k<=L[a-1])){e.next=56;break}for(e.prev=37,E=n[Symbol.iterator]();!(w=(j=E.next()).done);w=!0)O=u(j.value),M=O[0],N=O[1],C=O[2],F=O[3],P=a+":"+(k+m),y="rtl"===C?N+" text-right list-group-item p-2":N+" list-group-item p-2",$("#verseslist").append('<li class="'+y+'" dir="auto" id="'+P+'"><span class="badge bg-light text-dark" data-bs-toggle="tooltip" title="'+F+'">'+k+"</span> - "+M[k-1]+"</li>");e.next=45;break;case 41:e.prev=41,e.t1=e.catch(37),T=!0,x=e.t1;case 45:e.prev=45,e.prev=46,w||null==E.return||E.return();case 48:if(e.prev=48,!T){e.next=51;break}throw x;case 51:return e.finish(48);case 52:return e.finish(45);case 53:k++,e.next=36;break;case 56:void 0,[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)})),A();case 58:case"end":return e.stop()}}),e,null,[[10,14,18,26],[19,,21,25],[37,41,45,53],[46,,48,52]])}))),function(){return p.apply(this,arguments)});for(var L=[7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6],E=[],j=[],O=1;O<=114;O++)for(var M=1;M<=L[O-1];M++)E.push([O,M]),j.push(O+","+M);var N,C={"Al-Faatiha":"The Opening","Al-Baqara":"The Cow","Aal-i-Imraan":"The Family of Imraan","An-Nisaa":"The Women","Al-Maaida":"The Table","Al-An'aam":"The Cattle","Al-A'raaf":"The Heights","Al-Anfaal":"The Spoils of War","At-Tawba":"The Repentance",Yunus:"Jonas",Hud:"Hud",Yusuf:"Joseph","Ar-Ra'd":"The Thunder",Ibrahim:"Abraham","Al-Hijr":"The Rock","An-Nahl":"The Bee","Al-Israa":"The Night Journey","Al-Kahf":"The Cave",Maryam:"Mary","Taa-Haa":"Taa-Haa","Al-Anbiyaa":"The Prophets","Al-Hajj":"The Pilgrimage","Al-Muminoon":"The Believers","An-Noor":"The Light","Al-Furqaan":"The Criterion","Ash-Shu'araa":"The Poets","An-Naml":"The Ant","Al-Qasas":"The Stories","Al-Ankaboot":"The Spider","Ar-Room":"The Romans",Luqman:"Luqman","As-Sajda":"The Prostration","Al-Ahzaab":"The Clans",Saba:"Sheba",Faatir:"The Originator",Yaseen:"Yaseen","As-Saaffaat":"Those drawn up in Ranks",Saad:"The letter Saad","Az-Zumar":"The Groups",Ghafir:"The Forgiver",Fussilat:"Explained in detail","Ash-Shura":"Consultation","Az-Zukhruf":"Ornaments of gold","Ad-Dukhaan":"The Smoke","Al-Jaathiya":"Crouching","Al-Ahqaf":"The Dunes",Muhammad:"Muhammad","Al-Fath":"The Victory","Al-Hujuraat":"The Inner Apartments",Qaaf:"The letter Qaaf","Adh-Dhaariyat":"The Winnowing Winds","At-Tur":"The Mount","An-Najm":"The Star","Al-Qamar":"The Moon","Ar-Rahmaan":"The Beneficent","Al-Waaqia":"The Inevitable","Al-Hadid":"The Iron","Al-Mujaadila":"The Pleading Woman","Al-Hashr":"The Exile","Al-Mumtahana":"She that is to be examined","As-Saff":"The Ranks","Al-Jumu'a":"Friday","Al-Munaafiqoon":"The Hypocrites","At-Taghaabun":"Mutual Disillusion","At-Talaaq":"Divorce","At-Tahrim":"The Prohibition","Al-Mulk":"The Sovereignty","Al-Qalam":"The Pen","Al-Haaqqa":"The Reality","Al-Ma'aarij":"The Ascending Stairways",Nooh:"Noah","Al-Jinn":"The Jinn","Al-Muzzammil":"The Enshrouded One","Al-Muddaththir":"The Cloaked One","Al-Qiyaama":"The Resurrection","Al-Insaan":"Man","Al-Mursalaat":"The Emissaries","An-Naba":"The Announcement","An-Naazi'aat":"Those who drag forth",Abasa:"He frowned","At-Takwir":"The Overthrowing","Al-Infitaar":"The Cleaving","Al-Mutaffifin":"Defrauding","Al-Inshiqaaq":"The Splitting Open","Al-Burooj":"The Constellations","At-Taariq":"The Morning Star","Al-A'laa":"The Most High","Al-Ghaashiya":"The Overwhelming","Al-Fajr":"The Dawn","Al-Balad":"The City","Ash-Shams":"The Sun","Al-Lail":"The Night","Ad-Dhuhaa":"The Morning Hours","Ash-Sharh":"The Consolation","At-Tin":"The Fig","Al-Alaq":"The Clot","Al-Qadr":"The Power, Fate","Al-Bayyina":"The Evidence","Az-Zalzala":"The Earthquake","Al-Aadiyaat":"The Chargers","Al-Qaari'a":"The Calamity","At-Takaathur":"Competition","Al-Asr":"The Declining Day, Epoch","Al-Humaza":"The Traducer","Al-Fil":"The Elephant",Quraish:"Quraysh","Al-Maa'un":"Almsgiving","Al-Kawthar":"Abundance","Al-Kaafiroon":"The Disbelievers","An-Nasr":"Divine Support","Al-Masad":"The Palm Fibre","Al-Ikhlaas":"Sincerity","Al-Falaq":"The Dawn","An-Naas":"Mankind"},F=Object.keys(C),P=Object.values(C);o.register("5waPY",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),N=o("5waPY").getBundleURL("6kJx8")+o("gm4sb").resolve("fEJDW"),"serviceWorker"in navigator&&navigator.serviceWorker.register(N);window.addEventListener("DOMContentLoaded",(function(e){(function(){return d.apply(this,arguments)})()}))}();
//# sourceMappingURL=index.075a4d00.js.map