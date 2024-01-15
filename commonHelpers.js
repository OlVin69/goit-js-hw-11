import{S as p,i as a}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y=document.querySelector(".form"),l=document.querySelector(".search-input"),c=document.querySelector(".loader"),d=document.querySelector(".gallery"),h=new p(".gallery a",{captionDelay:250,captionsData:"alt"});y.addEventListener("submit",i=>{i.preventDefault();const t=l.value.trim();if(!t){a.info({messageColor:"rgb(255, 255, 255)",backgroundColor:"blue",timeout:"5000",message:"Please fill out search field",position:"bottomRight"});return}c.classList.remove("hidden"),d.innerHTML="",l.value="",b(t).then(({hits:o})=>{v(o)}).catch(o=>a.error({title:"Error",messageColor:"rgb(255, 255, 255)",backgroundColor:"red",timeout:"5000",message:"Something went wrong",position:"center"})).finally(()=>{c.classList.add("hidden")})});function b(i){const t=`https://pixabay.com/api/?key=41700733-d920d8ba94f63c82daa7e2416&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(o=>{if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()})}function v(i){if(i.length>0){const t=i.reduce((o,s)=>{const{webformatURL:e,largeImageURL:r,tags:n,likes:u,views:m,comments:f,downloads:g}=s;return o+`
        <li class="gallery-item">
          <a href="${r}">
            <img src="${e}" alt="${n}" " >
          </a>
          <div class="gallery-item-info">
            <div>
            <p><b>Likes</b></p>
            <p>${u}</p>
            </div>
            <div>
            <p><b>Views</b></p>
            <p>${m}</p>
            </div>
            <div>
            <p><b>Comments</b></p>
            <p>${f}</p>
            </div>
            <div>
            <p><b>Downloads</b></p>
            <p>${g}</p>
            </div>
          </div>
        </li>
      `},"");d.insertAdjacentHTML("beforeend",t),h.refresh()}else a.error({messageColor:"rgb(255, 255, 255)",backgroundColor:"red",timeout:"3000",message:"Sorry, there are no images matching your search query. Please try again.",position:"center"})}
//# sourceMappingURL=commonHelpers.js.map
