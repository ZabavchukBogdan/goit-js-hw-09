const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(a){r=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(d){t.removeAttribute("disabled"),e.setAttribute("disabled","disabled"),clearInterval(r)}));let r=null;
//# sourceMappingURL=01-color-switcher.d547ae13.js.map
