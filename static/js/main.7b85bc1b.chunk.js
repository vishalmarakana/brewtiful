(this.webpackJsonpbrewtiful=this.webpackJsonpbrewtiful||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(15),a(16),a(2)),i=(a(17),a(4)),m=a(5),s=(a(23),function(e){var t=e.brewery,a=e.index,n=e.onSelect,c=Math.floor(200*Math.random());return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"card brewery-card"},r.a.createElement("div",{className:"d-flex flex-wrap"},r.a.createElement("div",{className:"flex-item p-2"},r.a.createElement("img",{src:"https://picsum.photos/id/".concat(c,"/200/200"),alt:"beer"})),r.a.createElement("div",{className:"flex-item p-2"},r.a.createElement("h5",{className:"brewery-name"},a+1,". ",t.name),r.a.createElement("p",null,t.brewery_type.replace(t.brewery_type.charAt(0),t.brewery_type.charAt(0).toUpperCase())," ","brewery"),r.a.createElement("p",null,r.a.createElement(i.a,{icon:m.b})," ",t.street,r.a.createElement("br",null),t.city,", ",t.state,r.a.createElement("br",null),t.postal_code),r.a.createElement("p",null,r.a.createElement(i.a,{icon:m.c})," ",t.phone),r.a.createElement("p",null,t.website_url&&r.a.createElement(i.a,{icon:m.a})," ",r.a.createElement("a",{href:t.website_url},t.website_url)),t.latitude&&t.longitude&&r.a.createElement("button",{className:"btn btn-sm btn-dark location-button",onClick:function(){return function(e){e.latitude&&e.longitude?n([e.latitude,e.longitude]):alert("Location not available for ".concat(e.name))}(t)}},"Location"),t.latitude&&t.longitude&&r.a.createElement("a",{href:"https://www.google.com/maps/place/".concat(t.latitude,",").concat(t.longitude),className:"btn btn-sm btn-dark m-3 directions-button",target:"_blank",rel:"noopener noreferrer"},"Get Directions")))))}),u=(a(24),{breweryUrl:"https://api.openbrewerydb.org/breweries",tileLayer:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",defaultCity:"Ann Arbor",defaultPosition:[42.25362,-83.7343],breweryTypes:["micro","regional","brewpub","large","planning","bar","contract","proprietor"]}),b=function(e){var t=e.name,a=e.city,c=e.onSelect,o=Object(n.useState)([]),i=Object(l.a)(o,2),m=i[0],b=i[1];Object(n.useEffect)((function(){var e="".concat(u.breweryUrl,"?by_name=").concat(t,"&by_city=").concat(a);console.log("fetching data from ".concat(e)),fetch(e).then((function(e){return e.json()})).then((function(e){b(e)}))}),[t,a]);var d=function(e,t){c(e,t)};return r.a.createElement(r.a.Fragment,null,0!==m.length?m.map((function(e,t){return r.a.createElement(s,{key:e.id,index:t,brewery:e,onSelect:d})})):r.a.createElement("h5",{className:"error-message"},"No Results for ".concat(t," ").concat(a)))},d=(a(25),function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),s=m[0],u=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search-box",onSubmit:function(t){t.preventDefault(),e.onSearch(c,s)}},r.a.createElement("div",{className:"search-item"},r.a.createElement("input",{type:"text",className:"form-control",id:"brewery-name",placeholder:"\uf0fc  Search breweries",onChange:function(e){o(e.target.value)}})),r.a.createElement("div",{className:"search-item"},r.a.createElement("input",{type:"text",className:"form-control",id:"brewery-location",placeholder:"\uf041  Search by city",onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-dark search-button"},"Search"))))}),f=a(3),p=a.n(f),E=(a(26),a(27),a(28),function(e){var t=e.position;return Object(n.useEffect)((function(){var e=p.a.map("map",{center:t||u.defaultPosition,zoom:17,zoomControl:!1});return p.a.tileLayer(u.tileLayer,{maxZoom:19}).addTo(e),t&&p.a.marker(t).addTo(e),function(){e.remove()}}),[t]),r.a.createElement("div",{id:"map"})}),h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(u.defaultCity),i=Object(l.a)(o,2),m=i[0],s=i[1],f=Object(n.useState)(),p=Object(l.a)(f,2),h=p[0],y=p[1];return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 col-sm-12 breweries"},r.a.createElement(d,{onSearch:function(e,t){c(e),s(t)}}),r.a.createElement(b,{name:a,city:m,onSelect:function(e){y(e)}})),r.a.createElement("div",{className:"col-lg-7 col-sm-12"},r.a.createElement(E,{position:h})))};var y=function(){return r.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(29),a(30);o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7b85bc1b.chunk.js.map