"use strict";(self.webpackChunkreact_test_task=self.webpackChunkreact_test_task||[]).push([[840],{6316:function(n,r,e){e.d(r,{Z:function(){return P}});var i,t,o=e(9439),s=e(168),c=e(7924),a=c.ZP.button(i||(i=(0,s.Z)(["\n  padding: 12px, 99px, 12px, 99px;\n\n  background-color: rgba(52, 112, 255, 1);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: rgba(255, 255, 255, 1);\n\n  border: 0;\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n\n  width: 274px;\n  height: 44px;\n\n  &:hover {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"]))),l=e(184);function u(n){var r=n.onClick;return(0,l.jsx)(a,{onClick:r,type:"button",children:"Learn more"})}var d,x=c.ZP.button(t||(t=(0,s.Z)(["\n  margin: 0 auto;\n  border: 0;\n  text-decoration: none;\n\n  cursor: pointer;\n"])));function p(n){var r=n.onClick;return(0,l.jsx)(x,{onClick:r,type:"button",children:"X"})}var h=c.ZP.a(d||(d=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 50px;\n\n  width: 68px;\n  height: 20px;\n\n  border-radius: 24px;\n  border: 0;\n\n  background-color: rgba(52, 112, 255, 1);\n  color: rgba(255, 255, 255, 1);\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"])));function f(n){var r=n.data;return(0,l.jsx)(h,{href:r,children:"Rental car"})}var j=e(7948),g=e.n(j);g().setAppElement("#root");var m,b=function(n){var r=n.car,e=n.isOpen,i=n.closeModal,t=r.address.split(","),o=t[1].trim(),s=t[2].trim(),c=r.rentalConditions.split("\n"),a=c[0].split(":"),u=c.slice(1);return(0,l.jsxs)(g(),{isOpen:e,onRequestClose:i,contentLabel:r.make,ariaHideApp:!1,style:{content:{width:"600px",height:"400px",margin:"auto"}},children:[(0,l.jsx)(p,{onClick:i}),(0,l.jsx)("img",{src:r.img||r.photoLink,alt:r.make}),(0,l.jsxs)("h2",{children:[r.make," ",r.model,", ",r.year]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:o}),(0,l.jsx)("li",{children:s}),(0,l.jsxs)("li",{children:["id: ",r.id]}),(0,l.jsxs)("li",{children:["Year: ",r.year]}),(0,l.jsxs)("li",{children:["Type: ",r.type]}),(0,l.jsxs)("li",{children:["Fuel Consumption: ",r.fuelConsumption]}),(0,l.jsxs)("li",{children:["Engine Size: ",r.engineSize]})]}),(0,l.jsx)("h4",{children:r.description}),(0,l.jsx)("h4",{children:"Accessories and functionalities:"}),(0,l.jsxs)("ul",{children:[r.accessories.map((function(n,r){return(0,l.jsx)("li",{children:n},r)})),r.functionalities.map((function(n,r){return(0,l.jsx)("li",{children:n},r)}))]}),(0,l.jsx)("h4",{children:"Rental Conditions:"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[a[0],":",a[1]]}),u.map((function(n,r){return(0,l.jsx)("li",{children:n},r)}))]}),(0,l.jsxs)("p",{children:["Mileage: ",r.mileage]}),(0,l.jsxs)("p",{children:["Price: ",r.rentalPrice,"$"]}),(0,l.jsx)(f,{data:"tel:+380730000000"})]})},k=e(2791),v=e(3071),y=(0,c.ZP)(v.$0H)(m||(m=(0,s.Z)(["\n  fill: ",";\n  stroke: ",";\n  stroke-width: ",";\n  cursor: pointer;\n"])),(function(n){return n.$isFavorite?"rgba(52, 112, 255, 1)":"transparent"}),(function(n){return n.$isFavorite?"rgba(52, 112, 255, 1)":"grey"}),(function(n){return n.$isFavorite?"0px":"20px"})),C=e(4420),Z=e(1534),w=e(4528);var P=function(n){var r=n.car,e=r.address.split(","),i=e[1].trim(),t=e[2].trim(),s=(0,k.useState)(!1),c=(0,o.Z)(s,2),a=c[0],d=c[1],x=(0,k.useState)(!1),p=(0,o.Z)(x,2),h=p[0],f=p[1],j=(0,C.I0)(),g=(0,C.v9)(w.eA);return(0,l.jsxs)("div",{children:[(0,l.jsx)("buttron",{onClick:function(){g.some((function(n){return n.id===r.id}))?(j((0,Z.e3)(r.id)),f(!1)):(j((0,Z.a3)(r)),f(!0))},children:(0,l.jsx)(y,{$isFavorite:h})}),(0,l.jsx)("img",{src:r.img||r.photoLink,alt:r.make}),(0,l.jsxs)("h3",{children:[r.make," ",r.model,", ",r.year]}),(0,l.jsxs)("p",{children:["$",r.rentalPrice]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:r.type}),(0,l.jsx)("li",{children:i}),(0,l.jsx)("li",{children:t}),(0,l.jsx)("li",{children:r.rentalCompany}),(0,l.jsx)("li",{children:r.model}),(0,l.jsx)("li",{children:r.id}),(0,l.jsx)("li",{children:r.functionalities[0]})]}),(0,l.jsx)(u,{onClick:function(){return d(!0)}}),a&&(0,l.jsx)(b,{car:r,isOpen:a,closeModal:function(){return d(!1)}})]})}},8109:function(n,r,e){e.d(r,{t:function(){return c}});var i,t=e(168),o=e(7924).ZP.button(i||(i=(0,t.Z)(["\n  /* padding: 4px 8px; */\n  border-radius: 5px;\n  background-color: #555555;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n\n  cursor: pointer;\n\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: 400;\n  max-width: 180px;\n  height: 35px;\n\n  &:hover {\n    background-color: rgb(51, 102, 153);\n  }\n"]))),s=e(184),c=function(n){var r=n.onClick;return(0,s.jsx)(o,{onClick:r,type:"button",children:"Load More"})}},8840:function(n,r,e){e.r(r);var i=e(6316),t=e(8109),o=e(4528),s=e(4420),c=e(184);r.default=function(){var n=(0,s.v9)(o.eA);return(0,c.jsxs)("div",{children:[n.map((function(n){return(0,c.jsx)(i.Z,{car:n},n.id)})),n.length>=12&&(0,c.jsx)(t.t,{})]})}},4528:function(n,r,e){e.d(r,{B$:function(){return o},Wz:function(){return i},aG:function(){return s},eA:function(){return t}});var i=function(n){return n.cars.cars},t=function(n){return n.cars.favorite},o=function(n){return n.cars.pagination},s=function(n){var r=i(n),e=function(n){return n.cars.filters}(n),t=e.make,o=e.pricePerHour,s=e.minMileage,c=e.maxMileage;return r.filter((function(n){var r=n.make,e=n.rentalPrice,i=n.mileage;return(""===t||r===t)&&(""===o||e<=o)&&(0===parseInt(s)||i>=parseInt(s))&&(0===parseInt(c)||i<=parseInt(c))}))}}}]);
//# sourceMappingURL=840.338d577a.chunk.js.map