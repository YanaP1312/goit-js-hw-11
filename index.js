import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function d(o){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"47110078-1dfbe4a00d7fe250476d6992f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function f(o){const a=document.querySelector(".gallery"),s=o.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}"
        alt="${e.tags}" />
        </a>
        <div class="descr-list">
        <div class="descr-item">
        <b class="info">Likes</b>
        <span class="value">${e.likes}</span>
        </div>
        <div class="descr-item">
        <b class="info">Views</b>
        <span class="value">${e.views}</span>
        </div>
        <div class="descr-item">
        <b class="info">Comments</b>
        <span class="value">${e.comments}</span>
        </div>
        <div class="descr-item">
        <b class="info">Downloads</b>
        <span class="value">${e.downloads}</span>
        </div>
        </div>
        </li>`).join("");a.innerHTML=s}function m(){const o=document.querySelector(".gallery");o.innerHTML=""}const c=document.querySelector(".search-form"),n=document.querySelector(".loader");n.hidden=!0;c.addEventListener("submit",h);function h(o){o.preventDefault();const a=o.target.elements.image.value.trim();m(),c.reset(),n.hidden=!1,d(a).then(s=>{if(s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(s.hits),new u(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>{l.error({message:"Error!",position:"topRight"}),console.error(s)}).finally(()=>{n.hidden=!0})}
//# sourceMappingURL=index.js.map
