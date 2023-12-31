import{S as h,i as m}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const i=document.querySelector(".form"),y=document.querySelector(".gallery"),p=new h(".gallery a",{captionsData:"alt",captionDelay:250});i.addEventListener("submit",g);function g(s){s.preventDefault();const o=i.search.value,a=new URL("https://pixabay.com/api/");a.searchParams.append("key","41563330-08ed4e1341b4edecabdae7272"),a.searchParams.append("q",o),a.searchParams.append("image_type","photo"),a.searchParams.append("orientation","horizontal"),a.searchParams.append("safesearch",!0),fetch(a).then(t=>{if(!t.ok)throw new Error("Your request is not ok!");return t.json()}).then(t=>{t.hits.length===0&&m.error({title:"Nothing found!",message:"Sorry, there are no images matching your search query. Please try again!"}),y.innerHTML=t.hits.reduce((e,{webformatURL:r,largeImageURL:l,tags:n,likes:c,views:u,comments:d,downloads:f})=>e+`<li class='gallery-item'>
            <a class='gallery-link' href='${l}'>
              <img
                  class='gallery-image'
                  src='${r}'
                  alt='${n}'
                  width='360'
                  height='200'
                  />
            </a>
            <ul class='gallery-statistic'>
                <li class='gallery-likes'>${c}</li>
                <li class='gallery-views'>${u}</li>
                <li class='gallery-comments'>${d}</li>
                <li class='gallery-downloads'>${f}</li>
            </ul>
          </li>`,""),p.refresh()}).catch(t=>console.log(t))}
//# sourceMappingURL=commonHelpers.js.map
