import{S as p,i as y}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),a=document.querySelector(".search-input"),l=document.querySelector(".loader"),c=document.querySelector(".gallery"),h=new p(".gallery a",{captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});g.addEventListener("submit",n=>{n.preventDefault();const o=a.value.trim();o&&(l.classList.remove("hidden"),c.innerHTML="",a.value="",b(o).then(({hits:t})=>{v(t)}).catch(t=>console.log(t)).finally(()=>{l.classList.add("hidden")}))});function b(n){const o=`https://pixabay.com/api/?key=41700733-d920d8ba94f63c82daa7e2416&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()})}function v(n){if(n.length>0){const o=n.reduce((t,s)=>{const{webformatURL:e,largeImageURL:r,tags:i,likes:d,views:u,comments:f,downloads:m}=s;return t+`
        <li class="gallery-item">
          <a href="${r}">
            <img src="${e}" alt="${i}" " >
          </a>
          <div class="gallery-item-info">
            <div>
            <p><b>Likes</b></p>
            <p>${d}</p>
            </div>
            <div>
            <p><b>Views</b></p>
            <p>${u}</p>
            </div>
            <div>
            <p><b>Comments</b></p>
            <p>${f}</p>
            </div>
            <div>
            <p><b>Downloads</b></p>
            <p>${m}</p>
            </div>
          </div>
        </li>
      `},"");c.insertAdjacentHTML("beforeend",o),h.refresh()}else y.error({messageColor:"rgb(255, 255, 255)",backgroundColor:"red",timeout:"3000",message:"Sorry, there are no images matching your search query. Please try again.",position:"center"})}
//# sourceMappingURL=commonHelpers.js.map
