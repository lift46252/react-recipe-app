(this["webpackJsonpreactjs-recipe-app"]=this["webpackJsonpreactjs-recipe-app"]||[]).push([[0],{26:function(e,t,a){},33:function(e,t,a){e.exports=a(43)},38:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(38),a(26),a(22)),o=a.n(i),s=a(27),m=a(13),u=(a(19),a(48)),p=a(49),d=a(45),E=a(46),f=a(32),h=a(50),y=a(47);function g(e){return r.a.createElement(y.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,{id:"contained-modal-title-vcenter"},e.recipe.label)),r.a.createElement(y.a.Body,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a,{md:6},r.a.createElement("ul",{style:{listStyleType:"none",padding:0}},e.recipe.ingredients.map((function(e,t){return r.a.createElement("li",{key:t},e.text)})))),r.a.createElement(f.a,{md:6},r.a.createElement("img",{src:e.recipe.image,alt:e.recipe.label,style:{padding:0,width:"100%"}}))))),r.a.createElement(y.a.Footer,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a,{md:6},r.a.createElement("p",{className:"text-muted",style:{fontSize:12}},"Calories ",e.recipe.calories.toFixed(0)," kcal")),r.a.createElement(f.a,{md:6,style:{textAlign:"right"}},r.a.createElement(p.a,{onClick:e.onHide},"Close"))))))}var b=function(e){var t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"primary",onClick:function(){return c(!0)}},"View More"),r.a.createElement(g,{show:n,onHide:function(){return c(!1)},recipe:e.recipe}))},v=function(e){return r.a.createElement(f.a,{md:6,lg:4},r.a.createElement(h.a,{style:{width:"18rem",height:"35rem",overflow:"hidden",borderRadius:15,display:"inline-block"}},r.a.createElement(h.a.Img,{variant:"top",src:e.recipe.image,alt:e.recipe.label}),r.a.createElement(h.a.Body,{style:{padding:10}},r.a.createElement(h.a.Title,null,e.recipe.label),r.a.createElement("p",null,"Calories ",e.recipe.calories.toFixed(0)," kcal"),r.a.createElement(b,{recipe:e.recipe},"view More"),r.a.createElement("ul",{style:{listStyleType:"none",padding:0}},e.recipe.ingredients.map((function(e,t){return r.a.createElement("li",{key:t},e.text)}))))))},w=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),f=i[0],h=i[1],y=Object(n.useState)("chicken"),g=Object(m.a)(y,2),b=g[0],w=g[1];Object(n.useEffect)((function(){x()}),[b]);var x=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("da34ab48","&app_key=").concat("ad18c26e653fded574b59174184599f5"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"bg-gradient"},r.a.createElement(u.a,{className:"search-form",style:{display:"flex",justifyContent:"center",padding:" 20px 0px 20px 0px "},onSubmit:function(e){e.preventDefault(),w(f),h("")}},r.a.createElement(u.a.Control,{style:{width:"60vh",marginRight:5},type:"text",className:"search-bar",value:f,onChange:function(e){h(e.target.value)}}),r.a.createElement(p.a,{variant:"primary",type:"submit",className:"search-btn"},"Search")),r.a.createElement(d.a,{style:{textAlign:"center"}},r.a.createElement(E.a,null,a.map((function(e){return r.a.createElement(v,{key:e.recipe.label,recipe:e.recipe})})))))};var x=function(){return r.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.62203418.chunk.js.map