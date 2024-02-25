"use strict";(self.webpackChunkreact_test_task=self.webpackChunkreact_test_task||[]).push([[840],{8121:function(n,r,i){i.d(r,{Z:function(){return en}});var e,t,o=i(9439),a=i(2791),l=i(4420),s=i(1534),c=i(4528),d=i(168),p=i(7924),x=p.ZP.button(e||(e=(0,d.Z)(["\n  border: none;\n  background-color: transparent;\n  top: 15px;\n  right: 16px;\n  cursor: pointer;\n"]))),h=i(184);function u(n){var r=n.onClick;return(0,h.jsx)(x,{onClick:r,type:"button",children:"X"})}var g=p.ZP.a(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 50px;\n\n  width: 68px;\n  height: 20px;\n\n  border-radius: 24px;\n  border: 0;\n\n  background-color: rgba(52, 112, 255, 1);\n  color: rgba(255, 255, 255, 1);\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"])));function f(n){var r=n.data;return(0,h.jsx)(g,{href:r,children:"Rental car"})}var b,m,j,Z,k,v,y,P,w=i(7948),C=i.n(w),F=p.ZP.div(b||(b=(0,d.Z)(["\n  width: 500px;\n  /* margin-right: 20px; */\n"]))),z=p.ZP.img(m||(m=(0,d.Z)(["\n  /* display: inline-block; */\n  width: 461px;\n  border-radius: 10px;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(18, 20, 23, 0.5),\n    rgba(18, 20, 23, 0)\n  );\n"]))),M=p.ZP.ul(j||(j=(0,d.Z)(["\n  display: flex;\n\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]))),$=p.ZP.li(Z||(Z=(0,d.Z)(["\n  padding-right: 10px;\n\n  &:nth-child(2) {\n    color: rgba(52, 112, 255, 1);\n  }\n"]))),A=p.ZP.ul(k||(k=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  padding-bottom: 25px;\n"]))),L=p.ZP.li(v||(v=(0,d.Z)(["\n  position: relative;\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    transform: translateY(-50%);\n    width: 1px;\n    height: 90%;\n    background-color: #d9d9d9;\n    margin-left: 7px;\n  }\n  margin-right: 15px;\n"]))),S=p.ZP.ul(y||(y=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding-bottom: 20px;\n"]))),_=p.ZP.li(P||(P=(0,d.Z)(["\n  background-color: #f9f9f9;\n  border-radius: 20px;\n  padding: 8px;\n"])));C().setAppElement("#root");var H,I=function(n){var r=n.car,i=n.isOpen,e=n.closeModal,t=r.address.split(","),o=t[1].trim(),a=t[2].trim(),l=r.rentalConditions.split("\n"),s=l[0].split(":"),c=l.slice(1);return(0,h.jsx)(C(),{isOpen:i,onRequestClose:e,contentLabel:r.make,ariaHideApp:!1,style:{content:{width:"541px",height:"752px",margin:"auto"}},children:(0,h.jsxs)(F,{children:[(0,h.jsx)(u,{onClick:e}),(0,h.jsx)(z,{src:r.img||r.photoLink,alt:r.make}),(0,h.jsx)("h2",{children:(0,h.jsxs)(M,{children:[(0,h.jsx)($,{children:r.make}),(0,h.jsxs)($,{children:[r.model,","]}),(0,h.jsx)($,{children:r.year})]})}),(0,h.jsxs)(A,{children:[(0,h.jsx)(L,{children:o}),(0,h.jsx)(L,{children:a}),(0,h.jsxs)(L,{children:["id: ",r.id]}),(0,h.jsxs)(L,{children:["Year: ",r.year]}),(0,h.jsxs)(L,{children:["Type: ",r.type]}),(0,h.jsxs)(L,{children:["Fuel Consumption: ",r.fuelConsumption]}),(0,h.jsxs)(L,{children:["Engine Size: ",r.engineSize]})]}),(0,h.jsx)("h4",{children:r.description}),(0,h.jsx)("h4",{children:"Accessories and functionalities:"}),(0,h.jsxs)(A,{children:[r.accessories.map((function(n,r){return(0,h.jsx)(L,{children:n},r)})),r.functionalities.map((function(n,r){return(0,h.jsx)(L,{children:n},r)}))]}),(0,h.jsx)("h4",{children:"Rental Conditions:"}),(0,h.jsxs)(S,{children:[(0,h.jsxs)(_,{children:[s[0],":"," ",(0,h.jsx)("span",{style:{color:"#3470FF",fontWeight:"bold"},children:s[1]})]}),c.map((function(n,r){return(0,h.jsx)(_,{children:n},r)})),(0,h.jsxs)(_,{children:["Mileage:"," ",(0,h.jsx)("span",{style:{color:"#3470FF",fontWeight:"bold"},children:r.mileage})]}),(0,h.jsxs)(_,{children:["Price:"," ",(0,h.jsxs)("span",{style:{color:"#3470FF",fontWeight:"bold"},children:[r.rentalPrice,"$"]})]})]}),(0,h.jsx)(f,{data:"tel:+380730000000"})]})})},O=p.ZP.button(H||(H=(0,d.Z)(["\n  padding: 12px, 99px, 12px, 99px;\n\n  background-color: rgba(52, 112, 255, 1);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: rgba(255, 255, 255, 1);\n\n  border: 0;\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n\n  width: 270px;\n  height: 44px;\n\n  &:hover {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"])));function R(n){var r=n.onClick;return(0,h.jsx)(O,{onClick:r,type:"button",children:"Learn more"})}var W,Y,E,q,G,T,X,B,D=i(3071),J=p.ZP.div(W||(W=(0,d.Z)(["\n  /* display: flex; */\n  /* justify-content: center */\n  /* align-items: center; */\n  /* position: relative; */\n  width: 274px;\n  margin-right: 20px;\n"]))),K=p.ZP.button(Y||(Y=(0,d.Z)(["\n  /* position: absolute; */\n  border: none;\n  background-color: transparent;\n  top: 15px;\n  right: 16px;\n"]))),N=(0,p.ZP)(D.$0H)(E||(E=(0,d.Z)(["\n  fill: ",";\n  stroke: ",";\n  stroke-width: ",";\n  cursor: pointer;\n"])),(function(n){return n.$isFavorite?"rgba(52, 112, 255, 1)":"transparent"}),(function(n){return n.$isFavorite?"rgba(52, 112, 255, 1)":"grey"}),(function(n){return n.$isFavorite?"0px":"20px"})),Q=p.ZP.img(q||(q=(0,d.Z)(["\n  display: inline-block;\n  width: 270px;\n  height: 203px;\n  border-radius: 15px;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(18, 20, 23, 0.5),\n    rgba(18, 20, 23, 0)\n  );\n"]))),U=p.ZP.ul(G||(G=(0,d.Z)(["\n  display: flex;\n\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]))),V=p.ZP.li(T||(T=(0,d.Z)(["\n  padding-right: 10px;\n\n  &:nth-child(2) {\n    color: rgba(52, 112, 255, 1);\n  }\n\n  &:last-child {\n    padding-right: 0;\n    margin-left: auto;\n  }\n"]))),nn=p.ZP.ul(X||(X=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  padding-bottom: 25px;\n"]))),rn=p.ZP.li(B||(B=(0,d.Z)(["\n  position: relative;\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    transform: translateY(-50%);\n    width: 1px;\n    height: 90%;\n    background-color: #d9d9d9;\n    margin-left: 7px;\n  }\n  margin-right: 15px;\n"])));var en=function(n){var r=n.car,i=r.address.split(","),e=i[1].trim(),t=i[2].trim(),d=(0,a.useState)(!1),p=(0,o.Z)(d,2),x=p[0],u=p[1],g=(0,a.useState)(!1),f=(0,o.Z)(g,2),b=f[0],m=f[1],j=(0,l.I0)(),Z=(0,l.v9)(c.eA);return(0,h.jsxs)(J,{children:[(0,h.jsx)(K,{onClick:function(){Z.some((function(n){return n.id===r.id}))?(j((0,s.e3)(r.id)),m(!1)):(j((0,s.a3)(r)),m(!0))},children:(0,h.jsx)(N,{$isFavorite:b})}),(0,h.jsx)(Q,{src:r.img||r.photoLink,alt:r.make,width:"270px",height:"203px"}),(0,h.jsx)("h3",{children:(0,h.jsxs)(U,{children:[(0,h.jsx)(V,{children:r.make}),(0,h.jsx)(V,{children:r.model}),(0,h.jsx)(V,{children:r.year}),(0,h.jsxs)(V,{children:["$",r.rentalPrice]})]})}),(0,h.jsxs)(nn,{children:[(0,h.jsx)(rn,{children:r.type}),(0,h.jsx)(rn,{children:e}),(0,h.jsx)(rn,{children:t}),(0,h.jsx)(rn,{children:r.rentalCompany}),(0,h.jsx)(rn,{children:r.model}),(0,h.jsx)(rn,{children:r.id}),(0,h.jsx)(rn,{children:r.functionalities[0]})]}),(0,h.jsx)(R,{onClick:function(){return u(!0)}}),x&&(0,h.jsx)(I,{car:r,isOpen:x,closeModal:function(){return u(!1)}})]})}},8109:function(n,r,i){i.d(r,{t:function(){return l}});var e,t=i(168),o=i(7924).ZP.button(e||(e=(0,t.Z)(["\n  /* padding: 4px 8px; */\n  border-radius: 5px;\n  background-color: #555555;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n\n  cursor: pointer;\n\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: 400;\n  max-width: 180px;\n  height: 35px;\n\n  &:hover {\n    background-color: rgb(51, 102, 153);\n  }\n"]))),a=i(184),l=function(n){var r=n.onClick;return(0,a.jsx)(o,{onClick:r,type:"button",children:"Load More"})}},8840:function(n,r,i){i.r(r);var e=i(8121),t=i(8109),o=i(4528),a=i(4420),l=i(184);r.default=function(){var n=(0,a.v9)(o.eA);return(0,l.jsxs)("div",{children:[n.map((function(n){return(0,l.jsx)(e.Z,{car:n},n.id)})),n.length>=12&&(0,l.jsx)(t.t,{})]})}},4528:function(n,r,i){i.d(r,{aG:function(){return o},eA:function(){return t}});var e=i(3553),t=function(n){return n.cars.favorite},o=(0,e.P1)([function(n){return n.cars.cars},function(n){return n.cars.filters}],(function(n,r){var i=r.make,e=r.pricePerHour,t=r.minMileage,o=r.maxMileage;return n.filter((function(n){var r=n.make,a=n.rentalPrice,l=n.mileage;return(""===i||r===i)&&(""===e||a<=e)&&(""===t||l>=parseInt(t))&&(""===o||l<=parseInt(o))}))}))}}]);
//# sourceMappingURL=840.197337b8.chunk.js.map