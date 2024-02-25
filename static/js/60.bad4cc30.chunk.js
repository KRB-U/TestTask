"use strict";(self.webpackChunkreact_test_task=self.webpackChunkreact_test_task||[]).push([[60],{8121:function(n,e,r){r.d(e,{Z:function(){return rn}});var i,t,o=r(9439),a=r(2791),l=r(4420),s=r(1534),c=r(4528),d=r(168),p=r(7924),x=p.ZP.button(i||(i=(0,d.Z)(["\n  border: none;\n  background-color: transparent;\n  top: 15px;\n  right: 16px;\n  cursor: pointer;\n"]))),u=r(184);function h(n){var e=n.onClick;return(0,u.jsx)(x,{onClick:e,type:"button",children:"X"})}var g=p.ZP.a(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 50px;\n\n  width: 68px;\n  height: 20px;\n\n  border-radius: 24px;\n  border: 0;\n\n  background-color: rgba(52, 112, 255, 1);\n  color: rgba(255, 255, 255, 1);\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"])));function f(n){var e=n.data;return(0,u.jsx)(g,{href:e,children:"Rental car"})}var m,b,j,Z,k,v,y,P,M=r(7948),w=r.n(M),C=p.ZP.div(m||(m=(0,d.Z)(["\n  width: 500px;\n  /* margin-right: 20px; */\n"]))),z=p.ZP.img(b||(b=(0,d.Z)(["\n  /* display: inline-block; */\n  width: 461px;\n  border-radius: 10px;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(18, 20, 23, 0.5),\n    rgba(18, 20, 23, 0)\n  );\n"]))),F=p.ZP.ul(j||(j=(0,d.Z)(["\n  display: flex;\n\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]))),N=p.ZP.li(Z||(Z=(0,d.Z)(["\n  padding-right: 10px;\n\n  &:nth-child(2) {\n    color: rgba(52, 112, 255, 1);\n  }\n"]))),S=p.ZP.ul(k||(k=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  padding-bottom: 25px;\n"]))),A=p.ZP.li(v||(v=(0,d.Z)(["\n  position: relative;\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    transform: translateY(-50%);\n    width: 1px;\n    height: 90%;\n    background-color: #d9d9d9;\n    margin-left: 7px;\n  }\n  margin-right: 15px;\n"]))),H=p.ZP.ul(y||(y=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding-bottom: 20px;\n"]))),I=p.ZP.li(P||(P=(0,d.Z)(["\n  background-color: #f9f9f9;\n  border-radius: 20px;\n  padding: 8px;\n"])));w().setAppElement("#root");var L,$=function(n){var e=n.car,r=n.isOpen,i=n.closeModal,t=e.address.split(","),o=t[1].trim(),a=t[2].trim(),l=e.rentalConditions.split("\n"),s=l[0].split(":"),c=l.slice(1);return(0,u.jsx)(w(),{isOpen:r,onRequestClose:i,contentLabel:e.make,ariaHideApp:!1,style:{content:{width:"541px",height:"752px",margin:"auto"}},children:(0,u.jsxs)(C,{children:[(0,u.jsx)(h,{onClick:i}),(0,u.jsx)(z,{src:e.img||e.photoLink,alt:e.make}),(0,u.jsx)("h2",{children:(0,u.jsxs)(F,{children:[(0,u.jsx)(N,{children:e.make}),(0,u.jsxs)(N,{children:[e.model,","]}),(0,u.jsx)(N,{children:e.year})]})}),(0,u.jsxs)(S,{children:[(0,u.jsx)(A,{children:o}),(0,u.jsx)(A,{children:a}),(0,u.jsxs)(A,{children:["id: ",e.id]}),(0,u.jsxs)(A,{children:["Year: ",e.year]}),(0,u.jsxs)(A,{children:["Type: ",e.type]}),(0,u.jsxs)(A,{children:["Fuel Consumption: ",e.fuelConsumption]}),(0,u.jsxs)(A,{children:["Engine Size: ",e.engineSize]})]}),(0,u.jsx)("h4",{children:e.description}),(0,u.jsx)("h4",{children:"Accessories and functionalities:"}),(0,u.jsxs)(S,{children:[e.accessories.map((function(n,e){return(0,u.jsx)(A,{children:n},e)})),e.functionalities.map((function(n,e){return(0,u.jsx)(A,{children:n},e)}))]}),(0,u.jsx)("h4",{children:"Rental Conditions:"}),(0,u.jsxs)(H,{children:[(0,u.jsxs)(I,{children:[s[0],":"," ",(0,u.jsx)("span",{style:{color:"#3470FF",fontWeight:"bold"},children:s[1]})]}),c.map((function(n,e){return(0,u.jsx)(I,{children:n},e)})),(0,u.jsxs)(I,{children:["Mileage:"," ",(0,u.jsx)("span",{style:{color:"#3470FF",fontWeight:"bold"},children:e.mileage})]}),(0,u.jsxs)(I,{children:["Price:"," ",(0,u.jsxs)("span",{style:{color:"#3470FF",fontWeight:"bold"},children:[e.rentalPrice,"$"]})]})]}),(0,u.jsx)(f,{data:"tel:+380730000000"})]})})},E=p.ZP.button(L||(L=(0,d.Z)(["\n  padding: 12px, 99px, 12px, 99px;\n\n  background-color: rgba(52, 112, 255, 1);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: rgba(255, 255, 255, 1);\n\n  border: 0;\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n\n  width: 270px;\n  height: 44px;\n\n  &:hover {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"])));function R(n){var e=n.onClick;return(0,u.jsx)(E,{onClick:e,type:"button",children:"Learn more"})}var B,O,W,_,G,J,T,Y,V=r(3071),q=p.ZP.div(B||(B=(0,d.Z)(["\n  /* display: flex; */\n  /* justify-content: center */\n  /* align-items: center; */\n  /* position: relative; */\n  width: 274px;\n  margin-right: 20px;\n"]))),K=p.ZP.button(O||(O=(0,d.Z)(["\n  /* position: absolute; */\n  border: none;\n  background-color: transparent;\n  top: 15px;\n  right: 16px;\n"]))),U=(0,p.ZP)(V.$0H)(W||(W=(0,d.Z)(["\n  fill: ",";\n  stroke: ",";\n  stroke-width: ",";\n  cursor: pointer;\n"])),(function(n){return n.$isFavorite?"rgba(52, 112, 255, 1)":"transparent"}),(function(n){return n.$isFavorite?"rgba(52, 112, 255, 1)":"grey"}),(function(n){return n.$isFavorite?"0px":"20px"})),X=p.ZP.img(_||(_=(0,d.Z)(["\n  display: inline-block;\n  width: 270px;\n  height: 203px;\n  border-radius: 15px;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(18, 20, 23, 0.5),\n    rgba(18, 20, 23, 0)\n  );\n"]))),D=p.ZP.ul(G||(G=(0,d.Z)(["\n  display: flex;\n\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]))),Q=p.ZP.li(J||(J=(0,d.Z)(["\n  padding-right: 10px;\n\n  &:nth-child(2) {\n    color: rgba(52, 112, 255, 1);\n  }\n\n  &:last-child {\n    padding-right: 0;\n    margin-left: auto;\n  }\n"]))),nn=p.ZP.ul(T||(T=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  padding-bottom: 25px;\n"]))),en=p.ZP.li(Y||(Y=(0,d.Z)(["\n  position: relative;\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    transform: translateY(-50%);\n    width: 1px;\n    height: 90%;\n    background-color: #d9d9d9;\n    margin-left: 7px;\n  }\n  margin-right: 15px;\n"])));var rn=function(n){var e=n.car,r=e.address.split(","),i=r[1].trim(),t=r[2].trim(),d=(0,a.useState)(!1),p=(0,o.Z)(d,2),x=p[0],h=p[1],g=(0,a.useState)(!1),f=(0,o.Z)(g,2),m=f[0],b=f[1],j=(0,l.I0)(),Z=(0,l.v9)(c.eA);return(0,u.jsxs)(q,{children:[(0,u.jsx)(K,{onClick:function(){Z.some((function(n){return n.id===e.id}))?(j((0,s.e3)(e.id)),b(!1)):(j((0,s.a3)(e)),b(!0))},children:(0,u.jsx)(U,{$isFavorite:m})}),(0,u.jsx)(X,{src:e.img||e.photoLink,alt:e.make,width:"270px",height:"203px"}),(0,u.jsx)("h3",{children:(0,u.jsxs)(D,{children:[(0,u.jsx)(Q,{children:e.make}),(0,u.jsx)(Q,{children:e.model}),(0,u.jsx)(Q,{children:e.year}),(0,u.jsxs)(Q,{children:["$",e.rentalPrice]})]})}),(0,u.jsxs)(nn,{children:[(0,u.jsx)(en,{children:e.type}),(0,u.jsx)(en,{children:i}),(0,u.jsx)(en,{children:t}),(0,u.jsx)(en,{children:e.rentalCompany}),(0,u.jsx)(en,{children:e.model}),(0,u.jsx)(en,{children:e.id}),(0,u.jsx)(en,{children:e.functionalities[0]})]}),(0,u.jsx)(R,{onClick:function(){return h(!0)}}),x&&(0,u.jsx)($,{car:e,isOpen:x,closeModal:function(){return h(!1)}})]})}},8109:function(n,e,r){r.d(e,{t:function(){return l}});var i,t=r(168),o=r(7924).ZP.button(i||(i=(0,t.Z)(["\n  /* padding: 4px 8px; */\n  border-radius: 5px;\n  background-color: #555555;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n\n  cursor: pointer;\n\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: 400;\n  max-width: 180px;\n  height: 35px;\n\n  &:hover {\n    background-color: rgb(51, 102, 153);\n  }\n"]))),a=r(184),l=function(n){var e=n.onClick;return(0,a.jsx)(o,{onClick:e,type:"button",children:"Load More"})}},3060:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var i,t=r(2791),o=r(4420),a=r(4528),l=r(5605),s=r(8121),c=r(8109),d=r(5705),p=r(168),x=r(7924),u=x.ZP.button(i||(i=(0,p.Z)(["\n  width: 136px;\n  height: 48px;\n\n  border-radius: 15px;\n  border: 0;\n\n  background-color: #3470ff;\n  color: rgba(255, 255, 255, 1);\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  font-family: Manrope;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: center;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(11, 68, 205, 1);\n  }\n"]))),h=r(184);function g(){return(0,h.jsx)(u,{type:"submit",children:"Search"})}var f,m,b,j,Z,k=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"]'),v=JSON.parse('["30","40","50","60","70","80","90","100","110","120","130","140","150","160","170","180","190","200"]'),y=r(1534),P=x.ZP.div(f||(f=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),M=((0,x.ZP)(d.gN)(m||(m=(0,p.Z)(["\n  width: 170px;\n  height: 48px;\n  border: none;\n  padding: 10px;\n\n  border-radius: 7px;\n  background-color: #f7f7fb;\n\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n"]))),(0,x.ZP)(d.gN)(b||(b=(0,p.Z)(["\n  width: 100px;\n  height: 48px;\n  border: none;\n  padding: 10px;\n\n  border-radius: 7px;\n  background-color: #f7f7fb;\n\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n"]))),(0,x.ZP)(d.gN)(j||(j=(0,p.Z)(["\n  width: 100px;\n  height: 28px;\n  border: none;\n  padding: 10px;\n\n  border-radius: 7px;\n  background-color: #f7f7fb;\n\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n"]))),r(8007)),w=r(2564),C=(r(5462),M.Ry().shape({maxMileage:M.Rx().min(0,"Max mileage cannot be negative").nullable().typeError("Max mileage must be a number"),minMileage:M.Rx().min(0,"Min mileage cannot be negative").nullable().typeError("Min mileage must be a number")}));function z(){var n=(0,o.I0)();return(0,h.jsx)(d.J9,{initialValues:{make:"",pricePerHour:"",minMileage:"",maxMileage:""},validationSchema:C,onSubmit:function(e){n((0,y.a8)(e))},children:(0,h.jsxs)(P,{children:[(0,h.jsxs)(d.l0,{children:[(0,h.jsx)("label",{htmlFor:"make",children:"Car brand"}),(0,h.jsxs)(d.gN,{as:"select",name:"make",id:"make",children:[(0,h.jsx)("option",{value:"",children:"Enter the text"}),k.map((function(n){return(0,h.jsx)("option",{value:n,children:n},n)}))]}),(0,h.jsx)("label",{htmlFor:"pricePerHour",children:"Price/ 1 hour"}),(0,h.jsxs)(d.gN,{as:"select",name:"pricePerHour",id:"pricePerHour",children:[(0,h.jsx)("option",{value:"",children:"To $"}),v.map((function(n){return(0,h.jsx)("option",{value:n,children:n},n)}))]}),(0,h.jsx)("label",{htmlFor:"Mileage"}),"\u0421ar mileage / km",(0,h.jsx)(d.gN,{type:"number",name:"minMileage",id:"minMileage",placeholder:"From"}),(0,h.jsx)(d.gN,{type:"number",name:"maxMileage",id:"maxMileage",placeholder:"To"}),(0,h.jsx)(d.Bc,{name:"minMileage",render:function(n){return w.Am.error(n)}}),(0,h.jsx)(d.Bc,{name:"maxMileage",render:function(n){return w.Am.error(n)}}),(0,h.jsx)(g,{})]}),(0,h.jsx)(w.Ix,{autoClose:2e3,closeOnClick:!0})]})})}var F=x.ZP.div(Z||(Z=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"])));var N=function(){var n=(0,o.v9)(a.aG),e=(0,o.I0)();return(0,t.useEffect)((function(){e((0,l.x)())}),[e]),(0,h.jsxs)("div",{children:[(0,h.jsx)(z,{}),(0,h.jsxs)(F,{children:[n.map((function(n){return(0,h.jsx)(s.Z,{car:n},n.id)})),n.length<=32&&(0,h.jsx)(c.t,{onClick:function(){e((0,y.fz)(1)),e((0,l.x)())}})]})]})}},4528:function(n,e,r){r.d(e,{aG:function(){return o},eA:function(){return t}});var i=r(3553),t=function(n){return n.cars.favorite},o=(0,i.P1)([function(n){return n.cars.cars},function(n){return n.cars.filters}],(function(n,e){var r=e.make,i=e.pricePerHour,t=e.minMileage,o=e.maxMileage;return n.filter((function(n){var e=n.make,a=n.rentalPrice,l=n.mileage;return(""===r||e===r)&&(""===i||a<=i)&&(""===t||l>=parseInt(t))&&(""===o||l<=parseInt(o))}))}))}}]);
//# sourceMappingURL=60.bad4cc30.chunk.js.map