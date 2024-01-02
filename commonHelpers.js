import{S as h,i as y}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".form"),o=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new h(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",L);function L(l){l.preventDefault(),o.innerHTML="";const a=n.search.value.trim(),s=new URL("https://pixabay.com/api/");s.searchParams.append("key","41563330-08ed4e1341b4edecabdae7272"),s.searchParams.append("q",a),s.searchParams.append("image_type","photo"),s.searchParams.append("orientation","horizontal"),s.searchParams.append("safesearch",!0),c.classList.remove("hide"),fetch(s).then(r=>{if(!r.ok)throw new Error("Your request is not ok!");return c.classList.add("hide"),r.json()}).then(r=>{r.hits.length===0&&y.error({title:"Nothing found!",message:"Sorry, there are no images matching your search query. Please try again!"}),o.innerHTML="",o.innerHTML=r.hits.reduce((e,{webformatURL:t,largeImageURL:i,tags:u,likes:d,views:p,comments:m,downloads:f})=>e+`<li class='gallery-item'>
              <a class='gallery-link' href='${i}'>
                <img
                    class='gallery-image'
                    src='${t}'
                    alt='${u}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${d}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${p}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${m}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${f}</span></p></li>
              </ul>
            </li>`,""),g.refresh()}).catch(r=>console.log(r)).finally(()=>n.reset())}
//# sourceMappingURL=commonHelpers.js.map
