(this["webpackJsonpbucket-app"]=this["webpackJsonpbucket-app"]||[]).push([[0],{219:function(e,t){},221:function(e,t){},234:function(e,t){},236:function(e,t){},264:function(e,t){},265:function(e,t){},270:function(e,t){},272:function(e,t){},279:function(e,t){},298:function(e,t){},335:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(55),o=n.n(c),i=n(54),s=n(14),u=n(200),l=n(32),j=n(358),d=n(338),b=n(25),O="/auth",m="".concat(O,"/LOGIN"),h="".concat(O,"/LOGOUT"),f=Object(b.b)(m),v=Object(b.b)(h),x=n(26),g=n(191);function p(e){var t=localStorage.getItem(e);return t?JSON.parse(t)||{}:null}var w=function(){var e=p(O);return e||{user:null,users:null}},S=Object(b.c)(w(),(function(e){e.addCase(f,(function(e,t){var n=t.payload.username.toLowerCase(),r=t.payload.password.toLowerCase(),a=w(),c=Object(g.sign)(n.toLowerCase(),r),o=a.user||{},i=a.users||{};if(i[n]||(i[n]=c),i[n]&&i[n]===c){o.username=n,o.hash=c;var s={users:i,user:o};localStorage.setItem(O,JSON.stringify(s)),e.user=o}e.errors={isInvalid:!0}})).addCase(v,(function(e,t){var n=Object(x.a)(Object(x.a)({},p(O)),{},{user:null});localStorage.setItem(O,JSON.stringify(n)),e.user=null,e.errors=null}))})),y=function(e){var t;return null===(t=e.auth)||void 0===t?void 0:t.user},C=function(e){var t,n;return null===(t=e.auth)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.username},k=function(e){var t;return null===(t=e.auth)||void 0===t?void 0:t.errors},I="/resources",L="".concat(I,"/INCLUDE"),N="".concat(I,"/CHANGE"),R=Object(b.b)(L),B=Object(b.b)(N),J=function(){var e=p(I);return e||{resources:{}}},A=Object(b.c)(J(),(function(e){e.addCase(R,(function(e,t){var n=t.payload,r=J().resources;r[n.id]=n,localStorage.setItem(I,JSON.stringify({resources:r})),e.resources=r})).addCase(B,(function(e,t){var n=t.payload,r=J().resources,a=r[n.resourceId];a.amount=a.amount+n.amount,localStorage.setItem(I,JSON.stringify({resources:r})),e.resources=r}))})),E=function(e){var t;return(null===(t=e.resource)||void 0===t?void 0:t.resources)||{}},U="/history",V="".concat(U,"/INCLUDE"),W=Object(b.b)(V),D=n(90),q=function(){var e=p(U);return e||{list:[]}},F=Object(b.c)(q(),(function(e){e.addCase(W,(function(e,t){var n=t.payload,r=q();r.list=[].concat(Object(D.a)(r.list),[n]),localStorage.setItem(U,JSON.stringify(r)),e.list=r.list}))})),T=function(e){var t;return(null===(t=e.history)||void 0===t?void 0:t.list)||[]},K=Object(b.a)({reducer:{auth:S,resource:A,history:F}}),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=n(10),z=n(35),M=n(363),$=n(8),Q=n(367),X=n(36),Y=n(194),Z=n(365),_=n(354),ee=Object(l.c)("div",{display:"flex",justifyContent:"space-between",alignItems:"baseline"}),te=n(201),ne=n(2);function re(e){var t=e.items,n=e.onSelect,r=e.Component;return Object(ne.jsx)(te.a,{items:t,overrides:{Option:{props:{overrides:{ListItem:{component:a.a.forwardRef((function(e,t){return Object(ne.jsx)(r,Object(x.a)(Object(x.a)({},e),{},{ref:t,onSelect:n}))}))}}}}}})}function ae(e){var t=e.title,n=e.items,r=e.Viewer,c=e.Item,o=a.a.useState(null),i=Object(z.a)(o,2),s=i[0],u=i[1],l=!!s;return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Y.b,{children:Object(ne.jsxs)(ee,{children:[Object(ne.jsx)(Z.a,{children:t}),Object(ne.jsx)(M.a,{shape:$.b.circle,onClick:function(){return u({})},children:Object(ne.jsx)(_.a,{})})]})}),Object(ne.jsx)(re,{items:n,onSelect:function(e){var t=e.item;return u(t)},Component:c}),Object(ne.jsx)(Q.a,{onClose:function(){return u(null)},closeable:!0,isOpen:l,animate:!0,autoFocus:!0,size:X.c.full,role:X.b.dialog,children:Object(ne.jsx)(r,{item:s,onClose:function(){return u(null)}})})]})}function ce(e){var t=e.children;return Object(s.c)(y)?t:Object(ne.jsx)(P.a,{to:"/login"})}var oe=n(360);function ie(e){e.onRestore;function t(e){var t=JSON.parse(e.target.result);for(var n in t)[O,U,I].includes(n)&&localStorage.setItem(n,t[n]);window.location.reload()}return Object(ne.jsx)(oe.a,{overrides:{ContentMessage:function(){return"Load database..."}},accept:[".json"],multiple:!1,onDrop:function(e){console.log(e),function(e){var n=new FileReader;n.onload=t,n.readAsText(e[0])}(e)}})}function se(){return Object(s.c)(y)?Object(ne.jsx)(P.a,{to:"/home"}):Object(ne.jsx)(P.a,{to:"/login"})}var ue=n(366),le=n(20),je=Object(l.c)("div",{width:"80%",margin:"10% auto 0 auto"}),de=n(59),be=n(361),Oe=n(368),me=function(e){var t=e.onSubmit;return Object(ne.jsx)(de.a,{initialValues:{username:"",password:""},validate:function(e){var t={};return e.username||(t.username="Required"),e.password||(t.password="Required"),t},onSubmit:t,children:function(e){var t=e.values,n=e.errors,r=e.touched,a=e.handleChange,c=e.handleBlur,o=e.handleSubmit,i=e.isSubmitting;return Object(ne.jsxs)("form",{onSubmit:o,children:[Object(ne.jsx)(Oe.a,{label:"Username",children:Object(ne.jsx)(be.a,{type:"text",name:"username",error:n.username&&r.username&&n.username,onChange:a,onBlur:c,value:t.username})}),Object(ne.jsx)(Oe.a,{label:"Password",children:Object(ne.jsx)(be.a,{type:"password",name:"password",error:n.password&&r.password&&n.password,onChange:a,onBlur:c,value:t.password})}),Object(ne.jsx)(M.a,{type:"submit",disabled:i,isLoading:i,onClick:o,overrides:{BaseButton:{style:{width:"100%"}}},children:"Submit"})]})}})};function he(){var e=Object(s.c)(y),t=Object(s.c)(k),n=Object(s.b)();return e?Object(ne.jsx)(P.a,{to:"/home"}):Object(ne.jsxs)(je,{children:[Object(ne.jsx)("h1",{children:"Resources manager"}),Object(ne.jsx)(me,{onSubmit:function(e,t){var r=t.setSubmitting;n(f(e)),r(!1)}}),Object(ne.jsx)("br",{}),t&&t.isInvalid&&Object(ne.jsx)(ue.a,{kind:le.a.negative,overrides:{Body:{style:{width:"auto"}}},children:"Invalid password"}),Object(ne.jsx)(ie,{})]})}var fe=n(364),ve=n(357),xe=n(91),ge=n(369),pe=n(356),we=n(355),Se=["ref"],ye=function(e){var t,n=e.ref,r=Object(xe.a)(e,Se),a=Object(s.c)(E),c=(r.item.resource||[]).map((function(e){return e.id})).join();return Object(ne.jsx)(ge.a,Object(x.a)(Object(x.a)({},r),{},{onClick:function(){return r.onSelect(r)},ref:n,endEnhancer:function(){return Object(ne.jsx)(we.a,{})},children:Object(ne.jsx)(pe.a,{description:"Total amount: ".concat(r.item.amount),children:(null===(t=a[c])||void 0===t?void 0:t.name)||"Not fount"})}))},Ce=["ref"],ke=function(e){var t=e.ref,n=Object(xe.a)(e,Ce);return Object(ne.jsx)(ge.a,Object(x.a)(Object(x.a)({},n),{},{onClick:function(){return n.onSelect(n)},ref:t,endEnhancer:function(){return Object(ne.jsx)(we.a,{})},children:Object(ne.jsx)(pe.a,{description:"Total amount: ".concat(n.item.amount),children:n.item.name})}))},Ie=n(62),Le=n(359);function Ne(e){var t=e.item,n=e.onClose,r=Object(s.c)(C),a=Object(s.c)(E),c=Object(s.b)(),o=Object.keys(t||{}).length>0,i=o?t:{resource:[],amount:0};return Object(ne.jsx)(de.a,{initialValues:i,validate:function(e){var t={};return e.resource||(t.resource="Required"),e.amount||(t.amount="Required"),t},onSubmit:function(e,t){var a=t.setSubmitting,o=e.resource.map((function(e){return e.id})).join(),i=Object(x.a)({id:(new Date).toISOString(),username:r,resourceId:o},e);c(W(i)),c(B(i)),a(!1),n()},children:function(e){var t=e.values,r=e.errors,c=e.touched,i=e.handleChange,s=e.handleBlur,u=e.setFieldValue,l=e.handleSubmit,j=e.isSubmitting;return Object(ne.jsxs)("form",{onSubmit:l,children:[Object(ne.jsx)(Ie.g,{children:o?"View":"New"}),Object(ne.jsxs)(Ie.e,{children:[Object(ne.jsx)(Oe.a,{label:"Resouce",children:Object(ne.jsx)(Le.a,{options:Object.values(a),placeholder:"Select resource",name:"resource",labelKey:"name",valueKey:"id",onChange:function(e){var t=e.value;return u("resource",t)},error:r.resource&&c.resource&&r.resource,onBlur:s,value:t.resource,disabled:o})}),Object(ne.jsx)(Oe.a,{label:"Amount",children:Object(ne.jsx)(be.a,{type:"number",name:"amount",error:r.amount&&c.amount&&r.amount,onChange:i,onBlur:s,value:t.amount,disabled:o})}),o&&Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Oe.a,{label:"Created by",children:Object(ne.jsx)(be.a,{type:"text",name:"username",value:t.username,disabled:o})}),Object(ne.jsx)(Oe.a,{label:"Created at",children:Object(ne.jsx)(be.a,{type:"text",name:"id",value:new Date(t.id).toLocaleString(),disabled:o})})]})]}),Object(ne.jsxs)(Ie.f,{children:[Object(ne.jsx)(M.a,{type:"button",kind:$.a.tertiary,disabled:j,isLoading:j,onClick:n,children:"Cancel"}),!o&&Object(ne.jsx)(M.a,{type:"submit",disabled:j,isLoading:j,onClick:l,children:"Save"})]})]})}})}function Re(e){var t=e.item,n=e.onClose,r=Object(s.c)(C),a=Object(s.b)(),c=Object.keys(t||{}).length>0,o=c?t:{name:"",amount:""};return Object(ne.jsx)(de.a,{initialValues:o,validate:function(e){var t={};return e.name||(t.name="Required"),e.amount||(t.amount="Required"),t},onSubmit:function(e,t){var c=t.setSubmitting,o=Object(x.a)({id:(new Date).toISOString(),username:r},e);a(R(o)),c(!1),n()},children:function(e){var t=e.values,r=e.errors,a=e.touched,o=e.handleChange,i=e.handleBlur,s=e.handleSubmit,u=e.isSubmitting;return Object(ne.jsxs)("form",{onSubmit:s,children:[Object(ne.jsx)(Ie.g,{children:c?"View":"New"}),Object(ne.jsxs)(Ie.e,{children:[Object(ne.jsx)(Oe.a,{label:"Name",children:Object(ne.jsx)(be.a,{type:"text",name:"name",error:r.name&&a.name&&r.name,onChange:o,onBlur:i,value:t.name})}),Object(ne.jsx)(Oe.a,{label:"Amount",children:Object(ne.jsx)(be.a,{type:"number",name:"amount",error:r.amount&&a.amount&&r.amount,onChange:o,onBlur:i,value:t.amount,disabled:c})}),c&&Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Oe.a,{label:"Created by",children:Object(ne.jsx)(be.a,{type:"text",name:"username",value:t.username,disabled:c})}),Object(ne.jsx)(Oe.a,{label:"Created at",children:Object(ne.jsx)(be.a,{type:"text",name:"id",value:new Date(t.id).toLocaleString(),disabled:c})})]})]}),Object(ne.jsxs)(Ie.f,{children:[Object(ne.jsx)(M.a,{kind:$.a.tertiary,disabled:u,isLoading:u,onClick:n,children:"Cancel"}),Object(ne.jsx)(M.a,{type:"submit",disabled:u,isLoading:u,onClick:s,children:"Save"})]})]})}})}function Be(){var e=a.a.useState("0"),t=Object(z.a)(e,2),n=t[0],r=t[1],c=Object(s.c)(E),o=Object(s.c)(T),i=Object(s.b)();var u=function(){var e=Object.keys(localStorage).reduce((function(e,t){return e[t]=localStorage.getItem(t),e}),{});!function(e,t,n){var r=document.createElement("a"),a=new Blob([e],{type:n});r.href=URL.createObjectURL(a),r.download=t,r.click()}(JSON.stringify(e),"database.json","text/plain")};return Object(ne.jsxs)(fe.a,{activeKey:n,onChange:function(e){var t=e.activeKey;return r(t)},children:[Object(ne.jsx)(ve.a,{title:"Resources",children:Object(ne.jsx)(ae,{title:"Resources",items:Object.values(c),Viewer:Re,Item:ke})}),Object(ne.jsx)(ve.a,{title:"Historic",children:Object(ne.jsx)(ae,{title:"Historic",items:Object(D.a)(o).reverse(),Viewer:Ne,Item:ye})}),Object(ne.jsxs)(ve.a,{title:"Setting",children:[Object(ne.jsx)(ie,{}),Object(ne.jsx)("br",{}),Object(ne.jsx)(M.a,{onClick:function(){return u()},children:"Backup"}),Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),Object(ne.jsx)(M.a,{onClick:function(){return i(v())},children:"Logoff"})]})]})}function Je(){return Object(ne.jsxs)(P.d,{children:[Object(ne.jsx)(P.b,{path:"/",element:Object(ne.jsx)(se,{})}),Object(ne.jsx)(P.b,{path:"/login",element:Object(ne.jsx)(he,{})}),Object(ne.jsx)(P.b,{path:"/home",element:Object(ne.jsx)(ce,{children:Object(ne.jsx)(Be,{})})})]})}n(335);var Ae=new u.a;o.a.render(Object(ne.jsx)(i.a,{children:Object(ne.jsx)(l.a,{value:Ae,children:Object(ne.jsx)(j.a,{theme:d.a,children:Object(ne.jsx)(s.a,{store:K,children:Object(ne.jsx)(Je,{})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()}},[[337,1,2]]]);
//# sourceMappingURL=main.a586a2c1.chunk.js.map