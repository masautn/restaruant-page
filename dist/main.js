(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const t=document.querySelector("#content"),n=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div");n.setAttribute("id","home-btn"),c.setAttribute("id","menu-btn"),d.setAttribute("id","contact-btn"),n.classList.add("tab"),c.classList.add("tab"),d.classList.add("tab"),n.textContent="Home",c.textContent="Menu",d.textContent="Contact",t.appendChild(n),t.appendChild(c),t.appendChild(d),n.addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg",t.appendChild(n);const c=document.createElement("h1");c.textContent="Welcome",t.appendChild(c);const d=document.createElement("p");d.textContent="Servimos comida, veni a disfrutar",t.appendChild(d),e.appendChild(t)})()})),c.addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Nuestro Menu";const c=document.createElement("ul"),d=document.createElement("li");d.textContent="Gnocci";const o=document.createElement("li");o.textContent="Tallarines";const a=document.createElement("li");a.textContent="Ravioles",c.appendChild(d),c.appendChild(o),c.appendChild(a),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),d.addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const c=document.createElement("input");c.type="text",c.placeholder="Enter heading",n.appendChild(c);const d=document.createElement("input");d.type="text",d.placeholder="Enter address",n.appendChild(d);const o=document.createElement("input");o.type="text",o.placeholder="Enter phone",n.appendChild(o);const a=document.createElement("input");a.type="submit",a.valure="Submit",n.appendChild(a),t.appendChild(n),e.appendChild(t)})()}))})()})();