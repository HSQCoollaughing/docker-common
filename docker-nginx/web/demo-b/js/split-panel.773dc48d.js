(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["split-panel"],{"0f32":function(e,t,n){var c=n("b047c"),o=n("1a8c"),a="Expected a function";function r(e,t,n){var r=!0,l=!0;if("function"!=typeof e)throw new TypeError(a);return o(n)&&(r="leading"in n?!!n.leading:r,l="trailing"in n?!!n.trailing:l),c(e,t,{leading:r,maxWait:t,trailing:l})}e.exports=r},7370:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=Object(c["withScopeId"])("data-v-c0dec78c");Object(c["pushScopeId"])("data-v-c0dec78c");var a={class:"split-wrapper"},r={ref:"scalable",class:"scalable"},l={class:"left-content"},u=Object(c["createTextVNode"])(" 右边内容区 "),d=Object(c["createVNode"])("i",null,null,-1),i=Object(c["createVNode"])("i",null,null,-1),s={class:"right-content"},p=Object(c["createTextVNode"])(" 右边内容区 ");Object(c["popScopeId"])();var m=o((function(e,t,n,o,m,f){return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",l,[Object(c["renderSlot"])(e.$slots,"left-content",{},(function(){return[u]}),{},!0)]),Object(c["createVNode"])("div",{ref:"separator",onMousedown:t[1]||(t[1]=function(){return e.startDrag&&e.startDrag.apply(e,arguments)}),class:"separator"},[d,i],544)],512),Object(c["createVNode"])("div",s,[Object(c["renderSlot"])(e.$slots,"right-content",{},(function(){return[p]}),{},!0)])])})),f=n("0f32"),v=n.n(f),b=Object(c["defineComponent"])({name:"split-panel",setup:function(){var e,t,n=Object(c["ref"])(null),o=v()((function(c){n.value&&(n.value.style.width=t+c.clientX-e+"px")}),20),a=function e(){document.documentElement.style.userSelect="unset",document.documentElement.removeEventListener("mousemove",o),document.documentElement.removeEventListener("mouseup",e)},r=function(c){e=c.clientX,n.value&&(t=parseInt(window.getComputedStyle(n.value).width,10)),document.documentElement.style.userSelect="none",document.documentElement.addEventListener("mousemove",o),document.documentElement.addEventListener("mouseup",a)};return{startDrag:r,scalable:n}}});n("ad2e");b.render=m,b.__scopeId="data-v-c0dec78c";t["default"]=b},7470:function(e,t,n){},ad2e:function(e,t,n){"use strict";n("7470")}}]);