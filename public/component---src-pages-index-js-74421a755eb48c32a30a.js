(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return w}));var t=a("MUpH"),r=a("q1tI"),l=a.n(r),o=a("vOnD"),i=a("Wbzz");function c(){var e=Object(t.a)(["\n  margin: 2rem auto;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  .beer__image {\n    max-width: 120px;\n  }\n\n  .beer__info {\n    padding: 1rem 1rem;\n  }\n\n  .beer__title {\n    font-size: 18px;\n  }\n\n  .beer__brewery {\n    font-size: 14px;\n    font-weight: bold;\n\n    span {\n      font-weight: normal;\n    }\n  }\n\n  .beer__abv {\n    font-size: 14px;\n    font-weight: bold;\n\n    span {\n      font-weight: normal;\n    }\n  }\n\n  .beer__price {\n    font-size: 14px;\n    font-weight: bold;\n\n    span {\n      font-weight: normal;\n    }\n  }\n\n  .beer__price {\n    font-size: 14px;\n    font-weight: bold;\n\n    span {\n      font-weight: normal;\n    }\n  }\n\n  .beer__link {\n    font-size: 14px;\n    color: #333;\n    text-decoration: none;\n    background-color: var(--yellow);\n    padding: 1.2rem 2.4rem;\n    border-radius: 0.8rem;\n    margin-right: 1.4rem;\n\n    @media (max-width: 500px) {\n      display: none;\n    }\n  }\n\n  .beer__link--2 {\n    display: none;\n    @media (max-width: 500px) {\n      display: inline-block;\n    }\n  }\n"]);return c=function(){return e},e}var s=o.b.div(c()),m=function(e){var n=e.beer;return console.log(n),l.a.createElement(s,null,l.a.createElement("img",{src:n.image,alt:n.name,className:"beer__image"}),l.a.createElement("div",{className:"beer__info"},l.a.createElement("h2",{className:"beer__title"},n.name),l.a.createElement("p",{className:"beer__price"},"Precio: ",l.a.createElement("span",null,"$",n.price),"  -  Contenido:"," ",l.a.createElement("span",null,n.content,"ml")),l.a.createElement("p",{className:"beer__brewery"},"Cervecería: ",l.a.createElement("span",null,n.brewery)),l.a.createElement("p",{className:"beer__abv"},"ABV: ",l.a.createElement("span",null,n.alcohol,"%")),l.a.createElement(i.a,{to:"/cheves/"+n.slug,className:"beer__link beer__link--2"},"Ver más")),l.a.createElement(i.a,{to:"/cheves/"+n.slug,className:"beer__link"},"Ver más"))};function u(){var e=Object(t.a)(["\n  margin: 2rem auto;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  .beer__title {\n    font-size: 18px;\n  }\n\n  .beer__info {\n    padding: 1rem 1rem;\n  }\n\n  .beer__price {\n    font-size: 14px;\n    font-weight: bold;\n\n    span {\n      font-weight: normal;\n    }\n  }\n\n  .beer__content {\n    font-size: 14px;\n    font-weight: bold;\n\n    span {\n      font-weight: normal;\n    }\n  }\n\n  .beer__image {\n    max-width: 120px;\n  }\n\n  .beer__link {\n    font-size: 14px;\n    color: #333;\n    text-decoration: none;\n    background-color: var(--yellow);\n    padding: 1.2rem 2.4rem;\n    border-radius: 0.8rem;\n    margin-right: 1.4rem;\n\n    @media (max-width: 700px) {\n      display: none;\n    }\n  }\n\n  .beer__link--2 {\n    display: none;\n    @media (max-width: 700px) {\n      display: inline-block;\n    }\n  }\n"]);return u=function(){return e},e}var p=o.b.div(u()),d=function(e){var n=e.pack;return console.log(n),l.a.createElement(p,null,l.a.createElement("img",{src:n.image,alt:n.name,className:"beer__image"}),l.a.createElement("div",{className:"beer__info"},l.a.createElement("h2",{className:"beer__title"},n.name),l.a.createElement("p",{className:"beer__price"},"Precio: ",l.a.createElement("span",null,"$",n.price)),l.a.createElement("p",{className:"beer__content"},"Contenido: ",l.a.createElement("span",null,n.content.map((function(e){return e.name})).join(", "))),l.a.createElement(i.a,{to:"/packs/"+n.slug,className:"beer__link beer__link--2"},"Ver más")),l.a.createElement(i.a,{to:"/packs/"+n.slug,className:"beer__link"},"Ver más"))},b=[{name:"4-Pack Variado",slug:"4-pack-variado",price:265,image:"images/banana.webp",stock:4,content:[{name:"Xakutella",slug:"xakutella"},{name:"Banana bread",slug:"banana-bread"},{name:"Cafe de Olla",slug:"cafe-de-olla"},{name:"Chocolate Mexicano",slug:"chocolate-mexicano"}]}],g=[{name:"Xakutella",slug:"xakutella",description:"Xakúa Xakutella es una cerveza estilo stout de perfil maltoso con notas a chocolate y avellanas, de amargor bajo.",brewery:"Xakúa",image:"images/xakutella.webp",ingredients:"Cacao, avellanas, maltas, lúpulo, levadura",style:"Stout",alcohol:6,content:473,price:70,stock:0},{name:"Banana Bread",slug:"banana-bread",description:"De sabor a plátano maduro, aroma a plátano y a miel, acentuado con un toque de amargura.",brewery:"Eagle Brewery",image:"images/banana.webp",ingredients:"Agua, maltas, lúpulo, levadura",style:"English Ale",alcohol:5.2,content:500,price:75,stock:6},{name:"Cafe de Olla",slug:"cafe-de-olla",description:"Xakúa Café de Olla es una cerveza estilo Stout, de color negro profundo, con notas intensas a café y canela que te hará recordad momentos maravillosos entorno a una buena olla de café.",brewery:"Xakúa",image:"images/xakutella.webp",ingredients:"Cacao, avellanas, maltas, lúpulo, levadura",style:"Stout",alcohol:6,content:473,price:70,stock:6},{name:"Chocolate Mexicano",slug:"chocolate-mexicano",description:"Xakúa Chocolate Mexicano es una cerveza estilo Stout, elaborada con adiciones de cacao y canela, cerveza de color negro que presenta notas a malta tostada cacao y canela.",brewery:"Xakúa",image:"images/banana.webp",ingredients:"Cacao, avellanas, maltas, lúpulo, levadura",style:"Stout",alcohol:6,content:473,price:70,stock:6}];function _(){var e=Object(t.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 6rem 2rem 0 2rem;\n  margin: 0 auto;\n  max-width: 70rem;\n\n  h1 {\n    font-size: 22px;\n  }\n"]);return _=function(){return e},e}function f(){var e=Object(t.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 6rem 2rem;\n  margin: 0 auto;\n  max-width: 70rem;\n\n  h1 {\n    font-size: 22px;\n  }\n"]);return f=function(){return e},e}var x=o.b.div(f()),h=o.b.div(_());function w(){var e=g,n=b;return console.log(e,n),l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null,l.a.createElement("h1",null,"Packs:"),n.map((function(e){return l.a.createElement(d,{pack:e})}))),l.a.createElement(x,null,l.a.createElement("h1",null,"Cheves:"),e.map((function(e){return l.a.createElement(m,{beer:e})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-74421a755eb48c32a30a.js.map