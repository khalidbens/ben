"use strict";

const main = document.querySelector('main');

const routes = {
  "/": "./pages/home.html",
  "/index.html": "./pages/home.html",
  "/about": "./pages/about.html",
  "404": "./pages/404.html",
  "/contact": "./pages/contact.html",
}
setLinks(document);
// window.history.pushState({}, "", "/");
loadPage();



function setLinks(parent) {
  const tags = parent.querySelectorAll('a:not([href^="http"])');
  tags.forEach(a=>a.addEventListener("click", router));
}

function router(e) {
  e.preventDefault();
  // je change le l'url de la page ainsi que l'historique avec le href du lien cliqué
  window.history.pushState({}, "", e.target.href);
  // je charge la page correspondante :
  loadPage();
}

function loadPage() {
  const path = window.location.pathname;
  console.log(window.location);
  const route = routes[path] || routes[404];
  console.log(route);
  fetch(route).then(resp=>{
    if(!resp.ok) return;
    resp.text().then(data=>{
      main.innerHTML = data;
      setLinks(main)
    })
  })
}
