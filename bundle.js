(()=>{"use strict";var e=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function i(e){try{l(o.next(e))}catch(e){c(e)}}function a(e){try{l(o.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((o=o.apply(e,t||[])).next())}))};function t(t){return e(this,void 0,void 0,(function*(){switch(Math.floor(3*Math.random())){case 0:return yield function(t){return e(this,void 0,void 0,(function*(){try{const e=yield fetch("https://api.chucknorris.io/jokes/random"),n=yield e.json();return t.length>0&&console.log(t),console.log(n.value),n.value}catch(e){return console.error("Error al obtener el chiste:",e),null}}))}(t);case 1:return yield function(t){return e(this,void 0,void 0,(function*(){try{const e=yield fetch("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}}),n=yield e.json();return t.length>0&&console.log(t),console.log(n.joke),n.joke}catch(e){return console.error("Error al obtener el chiste:",e),null}}))}(t);case 2:return yield function(t){return e(this,void 0,void 0,(function*(){try{const e=yield fetch("https://v2.jokeapi.dev/joke/Any?type=single"),n=yield e.json();return t.length>0&&console.log(t),console.log(n.joke),n.joke}catch(e){return console.error("Error al obtener el chiste:",e),null}}))}(t);default:return"No joke found."}}))}function n(){switch(Math.floor(6*Math.random())){case 0:return"magicpattern";case 1:return"magicpattern2";case 2:return"magicpattern3";case 3:return"magicpattern4";case 4:return"magicpattern5";case 5:return"magicpattern6";default:return""}}var o=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function i(e){try{l(o.next(e))}catch(e){c(e)}}function a(e){try{l(o.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((o=o.apply(e,t||[])).next())}))};let r=[];const c=document.getElementById("chiste"),i=document.getElementById("city-name"),a=document.getElementById("btn"),l=document.getElementById("temperature"),u=document.getElementById("image-temp"),d=document.querySelectorAll('input[name="rating"]'),s=document.getElementById("card-form");d.forEach((e=>{e.addEventListener("change",(()=>{d.forEach((t=>{e!=t&&(t.checked=!1)}))}))})),a.addEventListener("click",(e=>o(void 0,void 0,void 0,(function*(){e.preventDefault(),h(c.textContent),c.textContent=yield t(r),null==s||s.setAttribute("class",`card-chiste ${n()}`),m()}))));const h=e=>{let t={joke:null!=e?e:"",score:"",date:(new Date).toISOString()};d.forEach((e=>{e.checked&&(t.score=Number(e.value))})),r.push(t)},m=()=>{d.forEach((e=>e.checked=!1))};o(void 0,void 0,void 0,(function*(){c.textContent=yield t(r),null==s||s.setAttribute("class",`card-chiste ${n()}`);const o=yield function(){return e(this,void 0,void 0,(function*(){try{const e=yield fetch("https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=93b7d700335e20d50fbed4f29e09c2ea"),t=yield e.json();return{temp:(Number(t.main.temp)-273.15).toFixed(2)+"ºC",icon:t.weather[0].icon,alt:t.weather[0].description,cityName:t.name}}catch(e){return console.error("Error al obtener el clima:",e),null}}))}();o?(l.textContent=o.temp,u.setAttribute("src",`https://openweathermap.org/img/w/${o.icon}.png`),u.setAttribute("alt",o.alt),i.textContent=o.cityName):l.textContent="Error obteniendo los datos del clima"}))})();