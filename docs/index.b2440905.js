let a,e;async function n(){document.querySelector("#mycontainer").insertAdjacentHTML("afterbegin",t),[a]=await p(["editions"]),await async function(){const e=[];for(const n of Object.values(a)){let a;a=/\-la$/i.test(n.name)?n.language+" Latin - "+n.author:/\-lad$/i.test(n.name)?n.language+" LatinD - "+n.author:n.language+" - "+n.author,e.push([a,n.name,n.direction])}e.sort();for(const[a,n,t]of e)$("#translationdropdown").append('<option value="'+n+'" data-dir="'+t+'">'+a+"</option>");for(let a=1;a<=o;a++)$("#chapter").append('<option value="'+a+'">'+a+" - "+h[a-1]+" ("+d[a-1]+")</option>")}(),function(){const a=new URL(window.location).searchParams;if(null!==a.get("editions"))return void a.get("editions").split(",").map((a=>$('#translationdropdown option[value="'+a+'"]').prop("selected",!0)));const e=Cookies.get("editions");if(void 0!==e)return void JSON.parse(e).map((a=>$('#translationdropdown option[value="'+a+'"]').prop("selected",!0)));$('#translationdropdown option[value="eng-mustafakhattabg"]').prop("selected",!0)}(),function(){if(""!==window.location.hash){const a=window.location.hash.substring(1).split(":");return void $('#chapter option[value="'+a[0]+'"]').prop("selected",!0)}const a=Cookies.get("chapter");if(void 0!==a)return void $('#chapter option[value="'+a+'"]').prop("selected",!0);$('#chapter option[value="1"]').prop("selected",!0)}(),await window.showTranslations(),window.location.hash.substring(1).split(":").length>1&&(window.location=window.location.hash,$('#verse option[value="'+window.location.hash+'"]').prop("selected",!0)),$("select").select2({theme:"bootstrap4"}),$("#verse").on("select2:select",(function(a){location=location.hash}))}window.showTranslations=async function(){$("#versescolumn").empty(),$("#versescolumn").append('<div id="verseslist" class="card list-group list-group-flush"></div>');const a=$("#translationdropdown").val().filter((a=>!/^\s*$/.test(a)));let e=[];const n=$("#chapter").val(),t=[];if(""===n)return;var o,r;a.length>0&&(Cookies.set("editions",JSON.stringify(a),{expires:1e3,path:""}),Cookies.set("chapter",n,{expires:1e3,path:""}),o="#versescolumn",r="afterbegin",document.body.contains(document.querySelector("#spinningwheel"))||document.querySelector(o).insertAdjacentHTML(r,'<div  id="spinningwheel">\n    <div class="text-center">\n      <div class="spinner-border m-5" role="status">\n      </div>\n      </div>\n      </div>\n      '));for(const e of a){const a="editions/"+e+"/"+n;t.push(a)}const l=await async function(a){return(await p(a)).map((a=>a.chapter.map((a=>a.text))))}(t);e=l.map(((e,n)=>[e,a[n],$('#translationdropdown option[value="'+a[n]+'"]').attr("data-dir"),$('#translationdropdown option[value="'+a[n]+'"]').text()]));let s;$("#verseslist").append('<span id="'+n+':1"> </span>'),document.body.contains(document.querySelector("#spinningwheel"))&&document.querySelector("#spinningwheel").remove();for(let a=1;a<=i[n-1];a++)for(const[t,o,i,r]of e){const e=n+":"+(a+1);s=o+" list-group-item p-2",$("#verseslist").append('<div class="'+s+'" dir="'+i+'" id="'+e+'"><span class="badge bg-light text-dark" data-bs-toggle="tooltip" title="'+r+'">'+a+"</span> - "+t[a-1]+"</div>")}[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(a){return new bootstrap.Tooltip(a)})),function(){$("#verse").empty(),$("#verse").append('<option value="" selected>Verse</option>');const a=$("#chapter").val();for(let e=1;e<=i[a-1];e++){const n="#"+a+":"+e;$("#verse").append('<option value="'+n+'">'+e+"</option>")}}()},window.addEventListener("DOMContentLoaded",(a=>{e=n()}));const t='\n<div class="m-3 d-none">\n<form class="d-flex" onsubmit="beginSearch(); return false">\n  <input id="searchquery" class="form-control mr-2" type="search" placeholder="Search Quran Verse" aria-label="Search Quran Verse" />\n  <button id="searchbtn" class="btn btn-outline-info" type="button" onclick="beginSearch(); return false">\n    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"\n      xmlns="http://www.w3.org/2000/svg">\n      <path fill-rule="evenodd"\n        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />\n      <path fill-rule="evenodd"\n        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />\n    </svg>\n  </button>\n</form>\n</div>\n',o=114,i=[7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6],r=[],l=[];for(let a=1;a<=o;a++)for(let e=1;e<=i[a-1];e++)r.push([a,e]),l.push(a+","+e);const s={"Al-Faatiha":"The Opening","Al-Baqara":"The Cow","Aal-i-Imraan":"The Family of Imraan","An-Nisaa":"The Women","Al-Maaida":"The Table","Al-An'aam":"The Cattle","Al-A'raaf":"The Heights","Al-Anfaal":"The Spoils of War","At-Tawba":"The Repentance",Yunus:"Jonas",Hud:"Hud",Yusuf:"Joseph","Ar-Ra'd":"The Thunder",Ibrahim:"Abraham","Al-Hijr":"The Rock","An-Nahl":"The Bee","Al-Israa":"The Night Journey","Al-Kahf":"The Cave",Maryam:"Mary","Taa-Haa":"Taa-Haa","Al-Anbiyaa":"The Prophets","Al-Hajj":"The Pilgrimage","Al-Muminoon":"The Believers","An-Noor":"The Light","Al-Furqaan":"The Criterion","Ash-Shu'araa":"The Poets","An-Naml":"The Ant","Al-Qasas":"The Stories","Al-Ankaboot":"The Spider","Ar-Room":"The Romans",Luqman:"Luqman","As-Sajda":"The Prostration","Al-Ahzaab":"The Clans",Saba:"Sheba",Faatir:"The Originator",Yaseen:"Yaseen","As-Saaffaat":"Those drawn up in Ranks",Saad:"The letter Saad","Az-Zumar":"The Groups",Ghafir:"The Forgiver",Fussilat:"Explained in detail","Ash-Shura":"Consultation","Az-Zukhruf":"Ornaments of gold","Ad-Dukhaan":"The Smoke","Al-Jaathiya":"Crouching","Al-Ahqaf":"The Dunes",Muhammad:"Muhammad","Al-Fath":"The Victory","Al-Hujuraat":"The Inner Apartments",Qaaf:"The letter Qaaf","Adh-Dhaariyat":"The Winnowing Winds","At-Tur":"The Mount","An-Najm":"The Star","Al-Qamar":"The Moon","Ar-Rahmaan":"The Beneficent","Al-Waaqia":"The Inevitable","Al-Hadid":"The Iron","Al-Mujaadila":"The Pleading Woman","Al-Hashr":"The Exile","Al-Mumtahana":"She that is to be examined","As-Saff":"The Ranks","Al-Jumu'a":"Friday","Al-Munaafiqoon":"The Hypocrites","At-Taghaabun":"Mutual Disillusion","At-Talaaq":"Divorce","At-Tahrim":"The Prohibition","Al-Mulk":"The Sovereignty","Al-Qalam":"The Pen","Al-Haaqqa":"The Reality","Al-Ma'aarij":"The Ascending Stairways",Nooh:"Noah","Al-Jinn":"The Jinn","Al-Muzzammil":"The Enshrouded One","Al-Muddaththir":"The Cloaked One","Al-Qiyaama":"The Resurrection","Al-Insaan":"Man","Al-Mursalaat":"The Emissaries","An-Naba":"The Announcement","An-Naazi'aat":"Those who drag forth",Abasa:"He frowned","At-Takwir":"The Overthrowing","Al-Infitaar":"The Cleaving","Al-Mutaffifin":"Defrauding","Al-Inshiqaaq":"The Splitting Open","Al-Burooj":"The Constellations","At-Taariq":"The Morning Star","Al-A'laa":"The Most High","Al-Ghaashiya":"The Overwhelming","Al-Fajr":"The Dawn","Al-Balad":"The City","Ash-Shams":"The Sun","Al-Lail":"The Night","Ad-Dhuhaa":"The Morning Hours","Ash-Sharh":"The Consolation","At-Tin":"The Fig","Al-Alaq":"The Clot","Al-Qadr":"The Power, Fate","Al-Bayyina":"The Evidence","Az-Zalzala":"The Earthquake","Al-Aadiyaat":"The Chargers","Al-Qaari'a":"The Calamity","At-Takaathur":"Competition","Al-Asr":"The Declining Day, Epoch","Al-Humaza":"The Traducer","Al-Fil":"The Elephant",Quraish:"Quraysh","Al-Maa'un":"Almsgiving","Al-Kawthar":"Abundance","Al-Kaafiroon":"The Disbelievers","An-Nasr":"Divine Support","Al-Masad":"The Palm Fibre","Al-Ikhlaas":"Sincerity","Al-Falaq":"The Dawn","An-Naas":"Mankind"},h=Object.keys(s),d=Object.values(s);new DOMParser;let u=["https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/","https://raw.githubusercontent.com/fawazahmed0/quran-api/1/"],c=[".min.json",".json"];async function p(a,e){let n=!1;Array.isArray(a)||(a=[a],n=!0);let t=await Promise.all(a.map((a=>async function(a,e){let n;for(let t of a)try{if(n=await fetch(t,e),n.ok)return n}catch(a){}return n}(function(a,e){return e=e||u,c.map((n=>e.map((e=>e+a+n)))).flat()}(a,e)).then((a=>a.json()))))).catch(console.error);return n?t[0]:t}window.beginSearch=function(){let a=new URLSearchParams,e=document.getElementById("searchquery").value;a.set("q",`site:fawazahmed0.github.io/quran ${e}`),window.open("https://www.google.com/search?"+a.toString(),"_blank")};
//# sourceMappingURL=index.b2440905.js.map