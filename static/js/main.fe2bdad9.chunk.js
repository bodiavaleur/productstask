(this.webpackJsonpproductstask=this.webpackJsonpproductstask||[]).push([[0],{22:function(e,n,t){"use strict";t.r(n);var i,r,a,c,o,s,l,d,b,h,g,j,p,m=t(0),u=t.n(m),f=t(9),O=t.n(f),x=t(4),w=t(1),v=t(2),y=Object(v.a)(i||(i=Object(w.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html, body {\n    height: 100%;\n  }\n\n  html{\n    font-size: 16px;\n  }\n  \n  #root {\n    height: 100vh;\n  }\n\n  .pagination {\n    width: 10rem;\n    height: 3rem;\n    display: flex;\n    justify-self: center;\n    justify-content: space-between;\n    align-items: center;\n    list-style: none;\n    font-family: "Roboto",sans-serif;\n    color: #333;\n\n\n    &__page {\n      width: 1.5rem;\n      height: 1.5rem;\n      font-weight: bold;\n      font-size: 0.9rem;\n      line-height: 1.5rem;\n      text-align: center;\n      border-radius: 100%;\n\n      a {\n        cursor: pointer;\n        outline: none;\n      }\n\n      &--active {\n        color: rgb(255,204,0);\n      }\n    }\n  }\n']))),_=v.c.div(r||(r=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 3rem auto;\n  padding: 0 1rem;\n"]))),C=v.c.div(a||(a=Object(w.a)(["\n  display: grid;\n  grid-template-rows: 3rem auto;\n"]))),k=v.c.header(c||(c=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),z=v.c.div(o||(o=Object(w.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 10rem);\n  grid-gap: 0.25rem;\n  justify-content: center;\n  align-content: center;\n"]))),L=v.c.a(s||(s=Object(w.a)(["\n  width: 10rem;\n  height: 15rem;\n  display: grid;\n  grid-template-rows: 7.5rem 2rem auto;\n  justify-items: center;\n  align-items: center;\n  border: 1px solid #e9e9e9;\n  border-radius: 0.5rem;\n  text-decoration: none;\n  overflow: hidden;\n"]))),N=v.c.input(l||(l=Object(w.a)(["\n  width: 7rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  border-bottom: 1px solid #e6e6e6;\n\n  &::placeholder {\n    color: #e6e6e6;\n  }\n"]))),S=v.c.img(d||(d=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]))),P=Object(v.b)(b||(b=Object(w.a)(['\n  font-family: "Roboto", sans-serif;\n  font-weight: 300;\n  color: #333;\n']))),R=Object(v.b)(h||(h=Object(w.a)(['\n  font-family: "Lora", serif;\n  font-weight: 400;\n  color: #333;\n']))),D=v.c.h1(g||(g=Object(w.a)(["\n  ",";\n  font-size: 2rem;\n  color: rgb(255, 204, 0);\n"])),R),E=v.c.h4(j||(j=Object(w.a)(["\n  ",";\n  font-size: 1rem;\n"])),R),F=v.c.p(p||(p=Object(w.a)(["\n  ",";\n  width: 90%;\n  text-align: center;\n  font-size: 0.9rem;\n"])),P),J=t(13),B=t.n(J);var I=t(3);function M(){var e=function(){var e=Object(m.useState)([]),n=Object(x.a)(e,2),t=n[0],i=n[1];return Object(m.useEffect)((function(){fetch("https://json.extendsclass.com/bin/6de06b67fdc0").then((function(e){return e.json()})).then((function(e){for(var n=[];e.products.length;)n.push(e.products.splice(0,10));i(n)}))}),[]),t}(),n=Object(m.useState)(0),t=Object(x.a)(n,2),i=t[0],r=t[1],a=Object(m.useState)(""),c=Object(x.a)(a,2),o=c[0],s=c[1],l=o?e[i].filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})):e[i];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(y,{}),Object(I.jsxs)(_,{children:[Object(I.jsxs)(k,{children:[Object(I.jsx)(D,{children:"Products"}),Object(I.jsx)(N,{placeholder:"Search",onChange:function(e){return s(e.target.value)}})]}),Object(I.jsx)(C,{children:l&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(B.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",pageCount:e.length,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var n=e.selected;return r(n)},containerClassName:"pagination",activeClassName:"pagination__page--active",pageClassName:"pagination__page",previousClassName:"pagination__previous",nextClassName:"pagination__next"}),Object(I.jsx)(z,{children:l.map((function(e){return Object(I.jsxs)(L,{href:e.link,target:"_blank",children:[Object(I.jsx)(S,{src:e.img}),Object(I.jsxs)(E,{children:[e.price,"$"]}),Object(I.jsx)(F,{children:(n=e.name,n.length>50?n.slice(0,50)+"...":n)})]},e.asin);var n}))})]})})]})]})}O.a.render(Object(I.jsx)(u.a.StrictMode,{children:Object(I.jsx)(M,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fe2bdad9.chunk.js.map