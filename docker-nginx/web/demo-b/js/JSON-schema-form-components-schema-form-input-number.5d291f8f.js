(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["JSON-schema-form-components-schema-form-input-number"],{"09d9":function(t,e,n){"use strict";var i=n("7a23"),r=n("4d91"),o=n("1d6f"),a=n("1d19"),s=n("4f82"),u=n("35c8"),c=n("b488"),l=n("18a7"),h=n("7b05"),p=n("6a21"),d={disabled:r["a"].looseBool,activeClassName:r["a"].string,activeStyle:r["a"].any};function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},f.apply(this,arguments)}var b=Object(i["defineComponent"])({name:"TouchFeedback",mixins:[c["a"]],inheritAttrs:!1,props:Object(o["o"])(d,{disabled:!1}),data:function(){return this.child=null,{active:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.disabled&&t.active&&t.setState({active:!1})}))},methods:{triggerEvent:function(t,e,n){var i="on".concat(t),r=this.child;r.props[i]&&r.props[i](n),e!==this.active&&this.setState({active:e})},onTouchStart:function(t){this.triggerEvent("Touchstart",!0,t)},onTouchMove:function(t){this.triggerEvent("Touchmove",!1,t)},onTouchEnd:function(t){this.triggerEvent("Touchend",!1,t)},onTouchCancel:function(t){this.triggerEvent("Touchcancel",!1,t)},onMouseDown:function(t){this.triggerEvent("Mousedown",!0,t)},onMouseUp:function(t){this.triggerEvent("Mouseup",!1,t)},onMouseLeave:function(t){this.triggerEvent("Mouseleave",!1,t)}},render:function(){var t=this.$props,e=t.disabled,n=t.activeClassName,i=void 0===n?"":n,r=t.activeStyle,s=void 0===r?{}:r,u=Object(o["l"])(this);if(1!==u.length)return Object(p["a"])(!1,"m-feedback组件只能包含一个子元素"),null;var c=e?void 0:{onTouchstart:this.onTouchStart,onTouchmove:this.onTouchMove,onTouchend:this.onTouchEnd,onTouchcancel:this.onTouchCancel,onMousedown:this.onMouseDown,onMouseup:this.onMouseUp,onMouseleave:this.onMouseLeave};if(u=u[0],this.child=u,!e&&this.active){var l=u.props,d=l.style,b=l.class;return!1!==s&&(s&&(d=f(f({},d),s)),b=Object(a["a"])(b,i)),Object(h["a"])(u,f({class:b,style:d},c))}return Object(h["a"])(u,c)}}),v=b,m={name:"InputHandler",inheritAttrs:!1,props:{prefixCls:r["a"].string,disabled:r["a"].looseBool},render:function(){var t=this,e=this.$props,n=e.prefixCls,r=e.disabled,a={disabled:r,activeClassName:"".concat(n,"-handler-active")};return Object(i["createVNode"])(v,a,{default:function(){return[Object(i["createVNode"])("span",t.$attrs,[Object(o["l"])(t)])]}})}},g=m;function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(){return w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},w.apply(this,arguments)}function C(t){t.preventDefault()}function V(t){return t.replace(/[^\w\.-]+/g,"")}var x=200,N=600,P=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,S=function(t){return void 0!==t&&null!==t},T=function(t,e){return e===t||"number"===typeof e&&"number"===typeof t&&isNaN(e)&&isNaN(t)},M={value:r["a"].oneOfType([r["a"].number,r["a"].string]),defaultValue:r["a"].oneOfType([r["a"].number,r["a"].string]),focusOnUpDown:r["a"].looseBool,autofocus:r["a"].looseBool,prefixCls:r["a"].string,tabindex:r["a"].oneOfType([r["a"].string,r["a"].number]),placeholder:r["a"].string,disabled:r["a"].looseBool,readonly:r["a"].looseBool,max:r["a"].number,min:r["a"].number,step:r["a"].oneOfType([r["a"].number,r["a"].string]),upHandler:r["a"].any,downHandler:r["a"].any,useTouch:r["a"].looseBool,formatter:r["a"].func,parser:r["a"].func,precision:r["a"].number,required:r["a"].looseBool,pattern:r["a"].string,decimalSeparator:r["a"].string,autocomplete:r["a"].string,title:r["a"].string,name:r["a"].string,id:r["a"].string,type:r["a"].string,maxlength:r["a"].any},E=Object(i["defineComponent"])({name:"VCInputNumber",mixins:[c["a"]],inheritAttrs:!1,props:Object(o["o"])(M,{focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number",min:-P,step:1,parser:V,required:!1,autocomplete:"off"}),data:function(){var t,e=Object(o["j"])(this);this.prevProps=w({},e),t="value"in e?this.value:this.defaultValue;var n=this.getValidValue(this.toNumber(t));return{inputValue:this.toPrecisionAsStep(n),sValue:n,focused:this.autofocus}},mounted:function(){var t=this;this.$nextTick((function(){t.updatedFunc()}))},updated:function(){var t=this,e=this.$props,n=e.value,i=e.max,r=e.min,a=this.$data.focused,s=this.prevProps,u=Object(o["j"])(this);if(s){if(!T(s.value,n)||!T(s.max,i)||!T(s.min,r)){var c,l=a?n:this.getValidValue(n);c=this.pressingUpOrDown?l:this.inputting?this.rawInput:this.toPrecisionAsStep(l),this.setState({sValue:l,inputValue:c})}var h="value"in u?n:this.$data.sValue;"max"in u&&s.max!==i&&"number"===typeof h&&h>i&&(this.__emit("update:value",i),this.__emit("change",i)),"min"in u&&s.min!==r&&"number"===typeof h&&h<r&&(this.__emit("update:value",r),this.__emit("change",r))}this.prevProps=w({},u),this.$nextTick((function(){t.updatedFunc()}))},beforeUnmount:function(){this.stop()},methods:{updatedFunc:function(){var t=this.inputRef;try{if(void 0!==this.cursorStart&&this.$data.focused)if(this.partRestoreByAfter(this.cursorAfter)||this.$data.sValue===this.value){if(this.currentValue===t.value)switch(this.lastKeyCode){case l["a"].BACKSPACE:this.fixCaret(this.cursorStart-1,this.cursorStart-1);break;case l["a"].DELETE:this.fixCaret(this.cursorStart+1,this.cursorStart+1);break;default:}}else{var e=this.cursorStart+1;this.cursorAfter?this.lastKeyCode===l["a"].BACKSPACE?e=this.cursorStart-1:this.lastKeyCode===l["a"].DELETE&&(e=this.cursorStart):e=t.value.length,this.fixCaret(e,e)}}catch(n){}this.lastKeyCode=null,this.pressingUpOrDown&&(this.focusOnUpDown&&this.$data.focused&&document.activeElement!==t&&this.focus(),this.pressingUpOrDown=!1)},onKeyDown:function(t){if(t.keyCode===l["a"].UP){var e=this.getRatio(t);this.up(t,e),this.stop()}else if(t.keyCode===l["a"].DOWN){var n=this.getRatio(t);this.down(t,n),this.stop()}else t.keyCode===l["a"].ENTER&&this.__emit("pressEnter",t);this.recordCursorPosition(),this.lastKeyCode=t.keyCode;for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];this.__emit.apply(this,["keydown",t].concat(r))},onKeyUp:function(t){this.stop(),this.recordCursorPosition();for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];this.__emit.apply(this,["keyup",t].concat(n))},onTrigger:function(t){if(t.target.composing)return!1;this.onChange(t)},onChange:function(t){this.$data.focused&&(this.inputting=!0),this.rawInput=this.parser(this.getValueFromEvent(t)),this.setState({inputValue:this.rawInput});var e=this.toNumber(this.rawInput);this.__emit("update:value",e),this.__emit("change",e)},onFocus:function(){this.setState({focused:!0});for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.__emit.apply(this,["focus"].concat(e))},onBlur:function(){this.inputting=!1,this.setState({focused:!1});var t=this.getCurrentValidValue(this.$data.inputValue),e=this.setValue(t);if(this.$attrs.onBlur){var n=this.inputRef.value,i=this.getInputDisplayValue({focused:!1,sValue:e});this.inputRef.value=i;for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];this.__emit.apply(this,["blur"].concat(o)),this.inputRef.value=n}},getCurrentValidValue:function(t){var e=t;return e=""===e?"":this.isNotCompleteNumber(parseFloat(e,10))?this.$data.sValue:this.getValidValue(e),this.toNumber(e)},getRatio:function(t){var e=1;return t.metaKey||t.ctrlKey?e=.1:t.shiftKey&&(e=10),e},getValueFromEvent:function(t){var e=t.target.value.trim().replace(/。/g,".");return S(this.decimalSeparator)&&(e=e.replace(this.decimalSeparator,".")),e},getValidValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.min,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.max,i=parseFloat(t,10);return isNaN(i)?t:(i<e&&(i=e),i>n&&(i=n),i)},setValue:function(t,e){var n=this.$props.precision,i=this.isNotCompleteNumber(parseFloat(t,10))?null:parseFloat(t,10),r=this.$data,a=r.sValue,s=void 0===a?null:a,u=r.inputValue,c=void 0===u?null:u,l="number"===typeof i?i.toFixed(n):"".concat(i),h=i!==s||l!=="".concat(c);return Object(o["n"])(this,"value")?this.setState({inputValue:this.toPrecisionAsStep(this.$data.sValue)},e):this.setState({sValue:i,inputValue:this.toPrecisionAsStep(t)},e),h&&(this.__emit("update:value",i),this.__emit("change",i)),i},getPrecision:function(t){if(S(this.precision))return this.precision;var e=t.toString();if(e.indexOf("e-")>=0)return parseInt(e.slice(e.indexOf("e-")+2),10);var n=0;return e.indexOf(".")>=0&&(n=e.length-e.indexOf(".")-1),n},getMaxPrecision:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(S(this.precision))return this.precision;var n=this.step,i=this.getPrecision(e),r=this.getPrecision(n),o=this.getPrecision(t);return t?Math.max(o,i+r):i+r},getPrecisionFactor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.getMaxPrecision(t,e);return Math.pow(10,n)},getInputDisplayValue:function(t){var e,n=t||this.$data,i=n.focused,r=n.inputValue,o=n.sValue;e=i?r:this.toPrecisionAsStep(o),void 0!==e&&null!==e||(e="");var a=this.formatWrapper(e);return S(this.$props.decimalSeparator)&&(a=a.toString().replace(".",this.$props.decimalSeparator)),a},recordCursorPosition:function(){try{var t=this.inputRef;this.cursorStart=t.selectionStart,this.cursorEnd=t.selectionEnd,this.currentValue=t.value,this.cursorBefore=t.value.substring(0,this.cursorStart),this.cursorAfter=t.value.substring(this.cursorEnd)}catch(e){}},fixCaret:function(t,e){if(void 0!==t&&void 0!==e&&this.inputRef&&this.inputRef.value)try{var n=this.inputRef,i=n.selectionStart,r=n.selectionEnd;t===i&&e===r||n.setSelectionRange(t,e)}catch(o){}},restoreByAfter:function(t){if(void 0===t)return!1;var e=this.inputRef.value,n=e.lastIndexOf(t);if(-1===n)return!1;var i=this.cursorBefore.length;return this.lastKeyCode===l["a"].DELETE&&this.cursorBefore.charAt(i-1)===t[0]?(this.fixCaret(i,i),!0):n+t.length===e.length&&(this.fixCaret(n,n),!0)},partRestoreByAfter:function(t){var e=this;return void 0!==t&&Array.prototype.some.call(t,(function(n,i){var r=t.substring(i);return e.restoreByAfter(r)}))},focus:function(){this.inputRef.focus(),this.recordCursorPosition()},blur:function(){this.inputRef.blur()},formatWrapper:function(t){return this.formatter?this.formatter(t):t},toPrecisionAsStep:function(t){if(this.isNotCompleteNumber(t)||""===t)return t;var e=Math.abs(this.getMaxPrecision(t));return isNaN(e)?t.toString():Number(t).toFixed(e)},isNotCompleteNumber:function(t){return isNaN(t)||""===t||null===t||t&&t.toString().indexOf(".")===t.toString().length-1},toNumber:function(t){var e=this.$props,n=e.precision,i=e.autofocus,r=this.$data.focused,o=void 0===r?i:r,a=t&&t.length>16&&o;return this.isNotCompleteNumber(t)||a?t:S(n)?Math.round(t*Math.pow(10,n))/Math.pow(10,n):Number(t)},upStep:function(t,e){var n=this.step,i=this.getPrecisionFactor(t,e),r=Math.abs(this.getMaxPrecision(t,e)),o=((i*t+i*n*e)/i).toFixed(r);return this.toNumber(o)},downStep:function(t,e){var n=this.step,i=this.getPrecisionFactor(t,e),r=Math.abs(this.getMaxPrecision(t,e)),o=((i*t-i*n*e)/i).toFixed(r);return this.toNumber(o)},stepFn:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0;if(this.stop(),e&&e.preventDefault(),!this.disabled){var o=this.max,a=this.min,s=this.getCurrentValidValue(this.$data.inputValue)||0;if(!this.isNotCompleteNumber(s)){var u=this["".concat(t,"Step")](s,i),c=u>o||u<a;u>o?u=o:u<a&&(u=a),this.setValue(u),this.setState({focused:!0}),c||(this.autoStepTimer=setTimeout((function(){n[t](e,i,!0)}),r?x:N))}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(t,e,n){this.pressingUpOrDown=!0,this.stepFn("down",t,e,n)},up:function(t,e,n){this.pressingUpOrDown=!0,this.stepFn("up",t,e,n)},handleInputClick:function(){this.__emit("click")},saveUp:function(t){this.upHandlerRef=t},saveDown:function(t){this.downHandlerRef=t},saveInput:function(t){this.inputRef=t},onCompositionstart:function(t){t.target.composing=!0},onCompositionend:function(t){this.onChange(t),t.target.composing=!1}},render:function(){var t,e=w(w({},this.$props),this.$attrs),n=e.prefixCls,r=e.disabled,o=e.readonly,s=e.useTouch,u=e.autocomplete,c=e.upHandler,l=e.downHandler,h=e.class,p=Object(a["a"])((t={},j(t,h,h),j(t,n,!0),j(t,"".concat(n,"-disabled"),r),j(t,"".concat(n,"-focused"),this.$data.focused),t)),d="",f="",b=this.$data.sValue;if(b||0===b)if(isNaN(b))d="".concat(n,"-handler-up-disabled"),f="".concat(n,"-handler-down-disabled");else{var v=Number(b);v>=this.max&&(d="".concat(n,"-handler-up-disabled")),v<=this.min&&(f="".concat(n,"-handler-down-disabled"))}var m={};for(var O in e)!e.hasOwnProperty(O)||"data-"!==O.substr(0,5)&&"aria-"!==O.substr(0,5)&&"role"!==O||(m[O]=e[O]);var V,x,N=!this.readonly&&!this.disabled,P=this.getInputDisplayValue();s?(V={onTouchstart:N&&!d&&this.up,onTouchend:this.stop},x={onTouchstart:N&&!f&&this.down,onTouchend:this.stop}):(V={onMousedown:N&&!d&&this.up,onMouseup:this.stop,onMouseleave:this.stop},x={onMousedown:N&&!f&&this.down,onMouseup:this.stop,onMouseleave:this.stop});var S=!!d||r||o,T=!!f||r||o,M=w(w({disabled:S,prefixCls:n,unselectable:"unselectable",role:"button","aria-label":"Increase Value","aria-disabled":!!S,class:"".concat(n,"-handler ").concat(n,"-handler-up ").concat(d)},V),{ref:this.saveUp}),E=w(w({disabled:T,prefixCls:n,unselectable:"unselectable",role:"button","aria-label":"Decrease Value","aria-disabled":!!T,class:"".concat(n,"-handler ").concat(n,"-handler-down ").concat(f)},x),{ref:this.saveDown});return Object(i["createVNode"])("div",{class:p,style:e.style,title:e.title,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onMouseover:e.onMouseover,onMouseout:e.onMouseout},[Object(i["createVNode"])("div",{class:"".concat(n,"-handler-wrap")},[Object(i["createVNode"])("span",null,[Object(i["createVNode"])(g,y(y({},M),{},{key:"upHandler"}),{default:function(){return[c||Object(i["createVNode"])("span",{unselectable:"unselectable",class:"".concat(n,"-handler-up-inner"),onClick:C},null)]}})]),Object(i["createVNode"])(g,y(y({},E),{},{key:"downHandler"}),{default:function(){return[l||Object(i["createVNode"])("span",{unselectable:"unselectable",class:"".concat(n,"-handler-down-inner"),onClick:C},null)]}})]),Object(i["createVNode"])("div",{class:"".concat(n,"-input-wrap")},[Object(i["createVNode"])("input",y({role:"spinbutton","aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":b,required:this.required,type:e.type,placeholder:this.placeholder,onClick:this.handleInputClick,class:"".concat(n,"-input"),tabindex:this.tabindex,autocomplete:u,onFocus:this.onFocus,onBlur:this.onBlur,onKeydown:N&&this.onKeyDown,onKeyup:N&&this.onKeyUp,autofocus:this.autofocus,maxlength:this.maxlength,readonly:this.readonly,disabled:this.disabled,max:this.max,min:this.min,step:this.step,name:this.name,title:this.title,id:this.id,onInput:this.onTrigger,onCompositionstart:this.onCompositionstart,onCompositionend:this.onCompositionend,ref:this.saveInput,value:P,pattern:this.pattern},m),null)])])}}),D=n("4df5"),A=n("46b7");function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F(){return F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},F.apply(this,arguments)}var B=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n},R={prefixCls:r["a"].string,min:r["a"].number,max:r["a"].number,value:r["a"].oneOfType([r["a"].number,r["a"].string]),step:r["a"].oneOfType([r["a"].number,r["a"].string]).def(1),defaultValue:r["a"].oneOfType([r["a"].number,r["a"].string]),tabindex:r["a"].number,disabled:r["a"].looseBool,size:r["a"].oneOf(Object(A["a"])("large","small","default")),formatter:r["a"].func,parser:r["a"].func,decimalSeparator:r["a"].string,placeholder:r["a"].string,name:r["a"].string,id:r["a"].string,precision:r["a"].number,autofocus:r["a"].looseBool,onPressEnter:{type:Function},onChange:Function},I=Object(i["defineComponent"])({name:"AInputNumber",inheritAttrs:!1,props:R,setup:function(t){var e=Object(i["ref"])(null),n=function(){e.value.focus()},r=function(){e.value.blur()};return Object(i["onMounted"])((function(){Object(i["nextTick"])((function(){0}))})),{configProvider:Object(i["inject"])("configProvider",D["b"]),inputNumberRef:e,focus:n,blur:r}},render:function(){var t,e=F(F({},Object(o["j"])(this)),this.$attrs),n=e.prefixCls,r=e.size,c=e.class,l=B(e,["prefixCls","size","class"]),h=this.configProvider.getPrefixCls,p=h("input-number",n),d=Object(a["a"])((t={},k(t,"".concat(p,"-lg"),"large"===r),k(t,"".concat(p,"-sm"),"small"===r),t),c),f=Object(i["createVNode"])(s["a"],{class:"".concat(p,"-handler-up-inner")},null),b=Object(i["createVNode"])(u["a"],{class:"".concat(p,"-handler-down-inner")},null),v=F(F({prefixCls:p,upHandler:f,downHandler:b},l),{class:d});return Object(i["createVNode"])(E,_(_({},v),{},{ref:"inputNumberRef"}),null)}});e["a"]=Object(A["b"])(I)},"1fcc":function(t,e,n){"use strict";n.r(e);var i=n("7a23");function r(t,e,n,r,o,a){var s=Object(i["resolveComponent"])("a-input-number");return Object(i["openBlock"])(),Object(i["createBlock"])(s,Object(i["mergeProps"])({value:t.modelValue,"onUpdate:value":e[1]||(e[1]=function(e){return t.modelValue=e})},t.formItem.props,Object(i["toHandlers"])(t.formItem.eventObject)),null,16,["value"])}var o=n("ade3"),a=(n("922d"),n("09d9")),s=(n("b0c0"),Object(i["defineComponent"])({name:"schema-form-input-number",emits:["update:value"],components:Object(o["a"])({},a["a"].name,a["a"]),props:{formItem:{type:Object,default:function(){return{}}},value:void 0},setup:function(t,e){e.attrs;var n=e.emit,r=Object(i["computed"])({get:function(){return t.value},set:function(t){return n("update:value",t)}});return{modelValue:r}}}));s.render=r;e["default"]=s},"8d1e":function(t,e,n){},"922d":function(t,e,n){"use strict";n("b2a3"),n("8d1e")}}]);