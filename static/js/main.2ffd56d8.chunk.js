(this.webpackJsonpbrewtiful=this.webpackJsonpbrewtiful||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(15),a(16),a(2)),i=(a(17),a(3)),m=a(4);a(23);function s(e){return e.replace(e.charAt(0),e.charAt(0).toUpperCase())}var u=Object(n.createContext)(null),b=function(e){var t=e.brewery,a=e.index,c=(e.onSelect,Object(n.useState)("https://picsum.photos/id/".concat(Math.floor(200*Math.random()),"/200/200"))),l=Object(o.a)(c,1)[0],b=Object(n.useContext)(u).setBrewery;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"card brewery-card"},r.a.createElement("div",{className:"d-flex flex-wrap"},r.a.createElement("div",{className:"flex-item p-2"},r.a.createElement("img",{src:l,alt:"beer"})),r.a.createElement("div",{className:"flex-item p-2"},r.a.createElement("h5",{className:"brewery-name"},a+1,". ",t.name),r.a.createElement("p",null,s(t.brewery_type)," brewery"),r.a.createElement("p",null,r.a.createElement(i.a,{icon:m.e})," ",t.street,r.a.createElement("br",null),t.city,", ",t.state,r.a.createElement("br",null),t.postal_code),t.phone&&r.a.createElement("p",null,r.a.createElement("a",{href:"tel:".concat(t.phone)},r.a.createElement(i.a,{icon:m.f})," ",t.phone)),r.a.createElement("p",null,t.website_url&&r.a.createElement(i.a,{icon:m.c})," ",r.a.createElement("a",{href:t.website_url},t.website_url)),t.latitude&&t.longitude&&r.a.createElement("button",{className:"btn btn-sm btn-dark location-button",onClick:function(){return b(t)}},r.a.createElement(i.a,{icon:m.a})," Location"),t.latitude&&t.longitude&&r.a.createElement("a",{href:"https://www.google.com/maps/place/".concat(t.latitude,",").concat(t.longitude),className:"btn btn-sm btn-dark m-3 directions-button",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:m.b})," Get Directions")))))},f=(a(24),{breweryUrl:"https://api.openbrewerydb.org/breweries",tileLayer:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",defaultCity:"Ann Arbor",defaultPosition:[42.25362,-83.7343],breweryTypes:["all","micro","regional","brewpub","large","planning","bar","contract","proprietor"]}),d=function(e){var t=e.name,a=e.city,c=e.filter,l=Object(n.useState)([]),i=Object(o.a)(l,2),m=i[0],s=i[1];return Object(n.useEffect)((function(){console.log("Fetching breweries ",t,a,c),function(e,t,a){var n="all"===a?"":a,r="".concat(f.breweryUrl,"?by_name=").concat(e,"&by_city=").concat(t,"&by_type=").concat(n,"&sort=name&per_page=50");return fetch(r).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()}))}(t,a,c).then((function(e){return s(e)})).catch((function(e){return alert(e)}))}),[t,a,c]),r.a.createElement(r.a.Fragment,null,0!==m.length?m.map((function(e,t){return r.a.createElement(b,{key:e.id,index:t,brewery:e})})):r.a.createElement("h5",{className:"error-message"},"No Results for ".concat(t," ").concat(a," ").concat(c)))},p=(a(25),function(e){var t=e.onSearch,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],s=c[1],u=Object(n.useState)(""),b=Object(o.a)(u,2),f=b[0],d=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search-box",onSubmit:function(e){e.preventDefault(),t(l,f)}},r.a.createElement("div",{className:"search-item"},r.a.createElement("input",{type:"text",className:"form-control",id:"brewery-name",placeholder:"\uf0fc  Search breweries",onChange:function(e){s(e.target.value)}})),r.a.createElement("div",{className:"search-item"},r.a.createElement("input",{type:"text",className:"form-control",id:"brewery-location",placeholder:"\uf041  Search by city",onChange:function(e){d(e.target.value)}})),r.a.createElement("div",{className:"search-button"},r.a.createElement("button",{type:"submit",className:"btn btn-dark"},r.a.createElement(i.a,{icon:m.g})," ",r.a.createElement("span",{className:"search-button-text"},"Search")))))}),E=a(5),h=a.n(E),y=(a(26),a(27),a(28),function(){var e=Object(n.useContext)(u).brewery;return Object(n.useEffect)((function(){var t=h.a.map("map",{center:e?[e.latitude,e.longitude]:f.defaultPosition,zoom:17});return h.a.tileLayer(f.tileLayer,{maxZoom:19}).addTo(t),e&&h.a.marker([e.latitude,e.longitude]).addTo(t),function(){t.remove()}}),[e]),r.a.createElement("div",{id:"map"})}),w=(a(29),function(e){var t=e.onFilter,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],u=c[1],b=Object(n.useState)(f.breweryTypes[0]),d=Object(o.a)(b,2),p=d[0],E=d[1],h=function(e){E(e.target.value),t(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"filter-button"},r.a.createElement("button",{className:"btn btn-dark",onClick:function(){u(!l)}},r.a.createElement(i.a,{icon:m.d})," Filter")),l&&r.a.createElement("div",{className:"filter-card d-flex flex-wrap"},f.breweryTypes.map((function(e){return r.a.createElement("div",{className:"flex-item radio-item",key:e},r.a.createElement("input",{value:e,type:"radio",onChange:h,checked:p===e}),r.a.createElement("label",{className:"pl-2"},s(e)))}))))}),v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],s=i[1],b=Object(n.useState)(),f=Object(o.a)(b,2),E=f[0],h=f[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),j=g[0],N=g[1];return r.a.createElement("div",{className:"row"},r.a.createElement(u.Provider,{value:{brewery:E,setBrewery:h}},r.a.createElement("div",{className:"col-lg-5 col-sm-12 breweries"},r.a.createElement(p,{onSearch:function(e,t){c(e),s(t)}}),r.a.createElement(w,{onFilter:function(e){N(e)}}),r.a.createElement(d,{name:a,city:m,filter:j})),r.a.createElement("div",{className:"col-lg-7 col-sm-12"},r.a.createElement(y,null))))};var g=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30),a(31);l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2ffd56d8.chunk.js.map