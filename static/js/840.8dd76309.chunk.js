"use strict";(self.webpackChunkreact_test_task=self.webpackChunkreact_test_task||[]).push([[840],{6316:function(n,r,e){e.d(r,{Z:function(){return P}});var i,t,o=e(9439),s=e(2791),l=e(4420),c=e(1534),a=e(4528),u=e(168),d=e(7924),x=d.ZP.button(i||(i=(0,u.Z)(["\n  margin: 0 auto;\n  border: 0;\n  text-decoration: none;\n\n  cursor: pointer;\n"]))),p=e(184);function h(n){var r=n.onClick;return(0,p.jsx)(x,{onClick:r,type:"button",children:"X"})}var f=d.ZP.a(t||(t=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 50px;\n\n  width: 68px;\n  height: 20px;\n\n  border-radius: 24px;\n  border: 0;\n\n  background-color: rgba(52, 112, 255, 1);\n  color: rgba(255, 255, 255, 1);\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"])));function j(n){var r=n.data;return(0,p.jsx)(f,{href:r,children:"Rental car"})}var g=e(7948),m=e.n(g);m().setAppElement("#root");var b,k=function(n){var r=n.car,e=n.isOpen,i=n.closeModal,t=r.address.split(","),o=t[1].trim(),s=t[2].trim(),l=r.rentalConditions.split("\n"),c=l[0].split(":"),a=l.slice(1);return(0,p.jsxs)(m(),{isOpen:e,onRequestClose:i,contentLabel:r.make,ariaHideApp:!1,style:{content:{width:"600px",height:"400px",margin:"auto"}},children:[(0,p.jsx)(h,{onClick:i}),(0,p.jsx)("img",{src:r.img||r.photoLink,alt:r.make}),(0,p.jsxs)("h2",{children:[r.make," ",r.model,", ",r.year]}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:o}),(0,p.jsx)("li",{children:s}),(0,p.jsxs)("li",{children:["id: ",r.id]}),(0,p.jsxs)("li",{children:["Year: ",r.year]}),(0,p.jsxs)("li",{children:["Type: ",r.type]}),(0,p.jsxs)("li",{children:["Fuel Consumption: ",r.fuelConsumption]}),(0,p.jsxs)("li",{children:["Engine Size: ",r.engineSize]})]}),(0,p.jsx)("h4",{children:r.description}),(0,p.jsx)("h4",{children:"Accessories and functionalities:"}),(0,p.jsxs)("ul",{children:[r.accessories.map((function(n,r){return(0,p.jsx)("li",{children:n},r)})),r.functionalities.map((function(n,r){return(0,p.jsx)("li",{children:n},r)}))]}),(0,p.jsx)("h4",{children:"Rental Conditions:"}),(0,p.jsxs)("ul",{children:[(0,p.jsxs)("li",{children:[c[0],":",c[1]]}),a.map((function(n,r){return(0,p.jsx)("li",{children:n},r)}))]}),(0,p.jsxs)("p",{children:["Mileage: ",r.mileage]}),(0,p.jsxs)("p",{children:["Price: ",r.rentalPrice,"$"]}),(0,p.jsx)(j,{data:"tel:+380730000000"})]})},v=d.ZP.button(b||(b=(0,u.Z)(["\n  padding: 12px, 99px, 12px, 99px;\n\n  background-color: rgba(52, 112, 255, 1);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: rgba(255, 255, 255, 1);\n\n  border: 0;\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n\n  width: 274px;\n  height: 44px;\n\n  &:hover {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"])));function y(n){var r=n.onClick;return(0,p.jsx)(v,{onClick:r,type:"button",children:"Learn more"})}var C,Z=e(3071),w=(0,d.ZP)(Z.$0H)(C||(C=(0,u.Z)(["\n  fill: ",";\n  stroke: ",";\n  stroke-width: ",";\n  cursor: pointer;\n"])),(function(n){return n.$isFavorite?"rgba(52, 112, 255, 1)":"transparent"}),(function(n){return n.$isFavorite?"rgba(52, 112, 255, 1)":"grey"}),(function(n){return n.$isFavorite?"0px":"20px"}));var P=function(n){var r=n.car,e=r.address.split(","),i=e[1].trim(),t=e[2].trim(),u=(0,s.useState)(!1),d=(0,o.Z)(u,2),x=d[0],h=d[1],f=(0,s.useState)(!1),j=(0,o.Z)(f,2),g=j[0],m=j[1],b=(0,l.I0)(),v=(0,l.v9)(a.eA);return(0,p.jsxs)("div",{style:{position:"relative",width:"500px",height:"500px"},children:[(0,p.jsx)("button",{onClick:function(){v.some((function(n){return n.id===r.id}))?(b((0,c.e3)(r.id)),m(!1)):(b((0,c.a3)(r)),m(!0))},style:{border:"none",backgroundColor:"transparent",position:"absolute",top:"15px",right:"16px"},children:(0,p.jsx)(w,{$isFavorite:g})}),(0,p.jsx)("img",{src:r.img||r.photoLink,alt:r.make}),(0,p.jsx)("h3",{children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:r.make}),(0,p.jsx)("li",{children:r.model}),(0,p.jsx)("li",{children:r.year}),(0,p.jsx)("li",{children:r.rentalPrice})]})}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:r.type}),(0,p.jsx)("li",{children:i}),(0,p.jsx)("li",{children:t}),(0,p.jsx)("li",{children:r.rentalCompany}),(0,p.jsx)("li",{children:r.model}),(0,p.jsx)("li",{children:r.id}),(0,p.jsx)("li",{children:r.functionalities[0]})]}),(0,p.jsx)(y,{onClick:function(){return h(!0)}}),x&&(0,p.jsx)(k,{car:r,isOpen:x,closeModal:function(){return h(!1)}})]})}},8109:function(n,r,e){e.d(r,{t:function(){return l}});var i,t=e(168),o=e(7924).ZP.button(i||(i=(0,t.Z)(["\n  /* padding: 4px 8px; */\n  border-radius: 5px;\n  background-color: #555555;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n\n  cursor: pointer;\n\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: 400;\n  max-width: 180px;\n  height: 35px;\n\n  &:hover {\n    background-color: rgb(51, 102, 153);\n  }\n"]))),s=e(184),l=function(n){var r=n.onClick;return(0,s.jsx)(o,{onClick:r,type:"button",children:"Load More"})}},8840:function(n,r,e){e.r(r);var i=e(6316),t=e(8109),o=e(4528),s=e(4420),l=e(184);r.default=function(){var n=(0,s.v9)(o.eA);return(0,l.jsxs)("div",{children:[n.map((function(n){return(0,l.jsx)(i.Z,{car:n},n.id)})),n.length>=12&&(0,l.jsx)(t.t,{})]})}},4528:function(n,r,e){e.d(r,{aG:function(){return o},eA:function(){return t}});var i=e(3553),t=function(n){return n.cars.favorite},o=(0,i.P1)([function(n){return n.cars.cars},function(n){return n.cars.filters}],(function(n,r){var e=r.make,i=r.pricePerHour,t=r.minMileage,o=r.maxMileage;return n.filter((function(n){var r=n.make,s=n.rentalPrice,l=n.mileage;return(""===e||r===e)&&(""===i||s<=i)&&(0===parseInt(t)||l>=parseInt(t))&&(0===parseInt(o)||l<=parseInt(o))}))}))}}]);
//# sourceMappingURL=840.8dd76309.chunk.js.map