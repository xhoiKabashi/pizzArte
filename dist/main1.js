(()=>{"use strict";const e=document.querySelector("#content"),n=document.createElement("div"),t=()=>{n.classList.add("main"),n.innerHTML="<p>Hey</p>",e.appendChild(n)};(()=>{const e=document.querySelector("#content"),n=document.createElement("ul"),t=new Date;n.classList.add("nav"),n.innerHTML='<a href="#" id="home">Home</a>\n    <a href="#" id="menu">Menu</a>\n    <a href="#" id="contact">Contact</a>',e.appendChild(n);const d=document.createElement("ul");d.classList.add("footer"),d.innerHTML=`<a href="#">xKabashi ${t.getFullYear()}</a>`,e.appendChild(d)})();const d=document.getElementById("home"),a=document.getElementById("menu"),c=document.getElementById("contact");t(),d.addEventListener("click",(()=>{t()})),a.addEventListener("click",(()=>{n.innerHTML="<p>MENU</p>",e.appendChild(n)})),c.addEventListener("click",(()=>{n.innerHTML="<p>Contact</p>",e.appendChild(n)}))})();