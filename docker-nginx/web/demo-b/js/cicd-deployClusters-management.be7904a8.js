(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cicd-deployClusters-management","dynamic-table"],{1016:function(e,t,r){"use strict";r.r(t);var n=r("6c0e");r.d(t,"DynamicTable",(function(){return n["default"]}))},"13d5":function(e,t,r){"use strict";var n=r("23e7"),a=r("d58f").left,u=r("a640"),c=r("2d00"),i=r("605d"),l=u("reduce"),o=!i&&c>79&&c<83;n({target:"Array",proto:!0,forced:!l||o},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},b465:function(e,t,r){"use strict";r.r(t);var n=r("7a23");function a(e,t,r,a,u,c){var i=Object(n["resolveComponent"])("dynamic-table");return Object(n["openBlock"])(),Object(n["createBlock"])(i,{ref:"tableRef",columns:e.columns,"get-list-func":e.GET_DEPLOYCLUSTERS,rowKey:"id",addItemFunc:e.addItem},{status:Object(n["withCtx"])((function(e){var t=e.record;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.statusItem.value),1)]})),_:1},8,["columns","get-list-func","addItemFunc"])}var u=r("1da1"),c=(r("96cf"),r("b0c0"),r("1016")),i=r("d80d"),l=[{title:"ID",dataIndex:"id"},{title:"集群名称",dataIndex:"name"},{title:"集群api地址",dataIndex:"url"},{title:"创建时间",dataIndex:"createTime"},{title:"最后更新时间",dataIndex:"updateTime"},{title:"状态",dataIndex:"status",slots:{customRender:"status"}}],o=r("76b3"),d=function(){return{formItem:[{type:"input",label:"名称",field:"name",value:"",props:{placeholder:"请输入名称"},rules:[{required:!0,message:"名称不能为空"}]},{type:"input",label:"地址",field:"url",value:"",props:{placeholder:"请输入地址"},rules:[{required:!0,message:"地址不能为空"}]}]}},s=Object(n["defineComponent"])({name:"cicd-deployClusters",components:{DynamicTable:c["DynamicTable"]},setup:function(){var e=Object(n["ref"])(null),t=function(){Object(o["a"])({title:"添加物理集群",formSchema:d(),handleOk:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(r,n){var a,u,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=r.name,u=r.url,c={name:a,url:u},t.next=4,Object(i["a"])(c);case 4:e.value.refreshTableData();case 5:case"end":return t.stop()}}),t)})));function r(e,r){return t.apply(this,arguments)}return r}()})};return{columns:l,tableRef:e,GET_DEPLOYCLUSTERS:i["b"],CREATE_DEPLOYCLUSTER:i["a"],addItem:t}}});s.render=a;t["default"]=s},d58f:function(e,t,r){var n=r("1c0b"),a=r("7b0b"),u=r("44ad"),c=r("50c4"),i=function(e){return function(t,r,i,l){n(r);var o=a(t),d=u(o),s=c(o.length),f=e?s-1:0,m=e?-1:1;if(i<2)while(1){if(f in d){l=d[f],f+=m;break}if(f+=m,e?f<0:s<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:s>f;f+=m)f in d&&(l=r(l,d[f],f,o));return l}};e.exports={left:i(!1),right:i(!0)}},d80d:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return c}));var n=r("a526"),a=r("3bb8");function u(e){return n["a"].request({url:"/devops/cluster/getDeployClusters",method:a["b"].GET,params:e})}function c(e){return n["a"].request({url:"/devops/cluster/createDeployCluster",method:a["b"].POST,params:e})}}}]);