(this["webpackJsonpresources-manager-app"]=this["webpackJsonpresources-manager-app"]||[]).push([[0],{219:function(e,t){},221:function(e,t){},234:function(e,t){},236:function(e,t){},264:function(e,t){},265:function(e,t){},270:function(e,t){},272:function(e,t){},279:function(e,t){},298:function(e,t){},335:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(55),o=n.n(c),i=n(14),s=n(200),u=n(32),l=n(358),j=n(338),b=n(25),d="/auth",O="".concat(d,"/LOGIN"),m="".concat(d,"/LOGOUT"),h=Object(b.b)(O),v=Object(b.b)(m),f=n(26),x=n(191);function g(e){var t=localStorage.getItem(e);return t?JSON.parse(t)||{}:null}var p=function(){var e=g(d);return e||{user:null,users:null}},S=Object(b.c)(p(),(function(e){e.addCase(h,(function(e,t){var n=t.payload.username.toLowerCase(),r=t.payload.password.toLowerCase(),a=p(),c=Object(x.sign)(n.toLowerCase(),r),o=a.user||{},i=a.users||{};if(i[n]||(i[n]=c),i[n]&&i[n]===c){o.username=n,o.hash=c;var s={users:i,user:o};localStorage.setItem(d,JSON.stringify(s)),e.user=o}e.errors={isInvalid:!0}})).addCase(v,(function(e,t){var n=Object(f.a)(Object(f.a)({},g(d)),{},{user:null});localStorage.setItem(d,JSON.stringify(n)),e.user=null,e.errors=null}))})),y=function(e){var t;return null===(t=e.auth)||void 0===t?void 0:t.user},w=function(e){var t,n;return null===(t=e.auth)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.username},C=function(e){var t;return null===(t=e.auth)||void 0===t?void 0:t.errors},I="/resources",k="".concat(I,"/INCLUDE"),L="".concat(I,"/CHANGE"),B=Object(b.b)(k),N=Object(b.b)(L),R=function(){var e=g(I);return e||{resources:{}}},J=Object(b.c)(R(),(function(e){e.addCase(B,(function(e,t){var n=t.payload,r=R().resources;r[n.id]=n,localStorage.setItem(I,JSON.stringify({resources:r})),e.resources=r})).addCase(N,(function(e,t){var n=t.payload,r=R().resources,a=r[n.resourceId];a.amount=a.amount+n.amount,localStorage.setItem(I,JSON.stringify({resources:r})),e.resources=r}))})),V=function(e){var t;return(null===(t=e.resource)||void 0===t?void 0:t.resources)||{}},D="/history",E="".concat(D,"/INCLUDE"),q=Object(b.b)(E),F=n(90),U=function(){var e=g(D);return e||{list:[]}},A=Object(b.c)(U(),(function(e){e.addCase(q,(function(e,t){var n=t.payload,r=U();r.list=[].concat(Object(F.a)(r.list),[n]),localStorage.setItem(D,JSON.stringify(r)),e.list=r.list}))})),K=function(e){var t;return(null===(t=e.history)||void 0===t?void 0:t.list)||[]},T=Object(b.a)({reducer:{auth:S,resource:J,history:A}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(54),H=n(10),M=n(35),W=n(363),z=n(8),P=n(367),$=n(36),Q=n(194),X=n(365),Y=n(354),Z=Object(u.c)("div",{display:"flex",justifyContent:"space-between",alignItems:"baseline"}),_=n(201),ee=n(2);function te(e){var t=e.items,n=e.onSelect,r=e.Component;return Object(ee.jsx)(_.a,{items:t,overrides:{Option:{props:{overrides:{ListItem:{component:a.a.forwardRef((function(e,t){return Object(ee.jsx)(r,Object(f.a)(Object(f.a)({},e),{},{ref:t,onSelect:n}))}))}}}}}})}function ne(e){var t=e.title,n=e.items,r=e.Viewer,c=e.Item,o=a.a.useState(null),i=Object(M.a)(o,2),s=i[0],u=i[1],l=!!s;return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(Q.b,{children:Object(ee.jsxs)(Z,{children:[Object(ee.jsx)(X.a,{children:t}),Object(ee.jsx)(W.a,{shape:z.b.circle,onClick:function(){return u({})},children:Object(ee.jsx)(Y.a,{})})]})}),Object(ee.jsx)(te,{items:n,onSelect:function(e){var t=e.item;return u(t)},Component:c}),Object(ee.jsx)(P.a,{onClose:function(){return u(null)},closeable:!0,isOpen:l,animate:!0,autoFocus:!0,size:$.c.full,role:$.b.dialog,children:Object(ee.jsx)(r,{item:s,onClose:function(){return u(null)}})})]})}function re(e){var t=e.children;return Object(i.c)(y)?t:Object(ee.jsx)(H.a,{to:"/login"})}var ae=n(360);function ce(e){e.onRestore;function t(e){var t=JSON.parse(e.target.result);for(var n in t)[d,D,I].includes(n)&&localStorage.setItem(n,t[n]);window.location.reload()}return Object(ee.jsx)(ae.a,{overrides:{ContentMessage:function(){return"Load database..."}},accept:[".json"],multiple:!1,onDrop:function(e){console.log(e),function(e){var n=new FileReader;n.onload=t,n.readAsText(e[0])}(e)}})}function oe(){return Object(i.c)(y)?Object(ee.jsx)(H.a,{to:"/home"}):Object(ee.jsx)(H.a,{to:"/login"})}var ie=n(366),se=n(20),ue=Object(u.c)("div",{width:"80%",margin:"10% auto 0 auto"}),le=n(59),je=n(361),be=n(368),de=function(e){var t=e.onSubmit;return Object(ee.jsx)(le.a,{initialValues:{username:"",password:""},validate:function(e){var t={};return e.username||(t.username="Required"),e.password||(t.password="Required"),t},onSubmit:t,children:function(e){var t=e.values,n=e.errors,r=e.touched,a=e.handleChange,c=e.handleBlur,o=e.handleSubmit,i=e.isSubmitting;return Object(ee.jsxs)("form",{onSubmit:o,children:[Object(ee.jsx)(be.a,{label:"Username",children:Object(ee.jsx)(je.a,{type:"text",name:"username",error:n.username&&r.username&&n.username,onChange:a,onBlur:c,value:t.username})}),Object(ee.jsx)(be.a,{label:"Password",children:Object(ee.jsx)(je.a,{type:"password",name:"password",error:n.password&&r.password&&n.password,onChange:a,onBlur:c,value:t.password})}),Object(ee.jsx)(W.a,{type:"submit",disabled:i,isLoading:i,onClick:o,overrides:{BaseButton:{style:{width:"100%"}}},children:"Submit"})]})}})};function Oe(){var e=Object(i.c)(y),t=Object(i.c)(C),n=Object(i.b)();return e?Object(ee.jsx)(H.a,{to:"/home"}):Object(ee.jsxs)(ue,{children:[Object(ee.jsx)("h1",{children:"Resources manager"}),Object(ee.jsx)(de,{onSubmit:function(e,t){var r=t.setSubmitting;n(h(e)),r(!1)}}),Object(ee.jsx)("br",{}),t&&t.isInvalid&&Object(ee.jsx)(ie.a,{kind:se.a.negative,overrides:{Body:{style:{width:"auto"}}},children:"Invalid password"}),Object(ee.jsx)(ce,{})]})}var me=n(364),he=n(357),ve=n(91),fe=n(369),xe=n(356),ge=n(355),pe=["ref"],Se=function(e){var t,n=e.ref,r=Object(ve.a)(e,pe),a=Object(i.c)(V),c=(r.item.resource||[]).map((function(e){return e.id})).join();return Object(ee.jsx)(fe.a,Object(f.a)(Object(f.a)({},r),{},{onClick:function(){return r.onSelect(r)},ref:n,endEnhancer:function(){return Object(ee.jsx)(ge.a,{})},children:Object(ee.jsx)(xe.a,{description:"Total amount: ".concat(r.item.amount),children:(null===(t=a[c])||void 0===t?void 0:t.name)||"Not fount"})}))},ye=["ref"],we=function(e){var t=e.ref,n=Object(ve.a)(e,ye);return Object(ee.jsx)(fe.a,Object(f.a)(Object(f.a)({},n),{},{onClick:function(){return n.onSelect(n)},ref:t,endEnhancer:function(){return Object(ee.jsx)(ge.a,{})},children:Object(ee.jsx)(xe.a,{description:"Total amount: ".concat(n.item.amount),children:n.item.name})}))},Ce=n(62),Ie=n(359);function ke(e){var t=e.item,n=e.onClose,r=Object(i.c)(w),a=Object(i.c)(V),c=Object(i.b)(),o=Object.keys(t||{}).length>0,s=o?t:{resource:[],amount:0};return Object(ee.jsx)(le.a,{initialValues:s,validate:function(e){var t={};return e.resource||(t.resource="Required"),e.amount||(t.amount="Required"),t},onSubmit:function(e,t){var a=t.setSubmitting,o=e.resource.map((function(e){return e.id})).join(),i=Object(f.a)({id:(new Date).toISOString(),username:r,resourceId:o},e);c(q(i)),c(N(i)),a(!1),n()},children:function(e){var t=e.values,r=e.errors,c=e.touched,i=e.handleChange,s=e.handleBlur,u=e.setFieldValue,l=e.handleSubmit,j=e.isSubmitting;return Object(ee.jsxs)("form",{onSubmit:l,children:[Object(ee.jsx)(Ce.g,{children:o?"View":"New"}),Object(ee.jsxs)(Ce.e,{children:[Object(ee.jsx)(be.a,{label:"Resouce",children:Object(ee.jsx)(Ie.a,{options:Object.values(a),placeholder:"Select resource",name:"resource",labelKey:"name",valueKey:"id",onChange:function(e){var t=e.value;return u("resource",t)},error:r.resource&&c.resource&&r.resource,onBlur:s,value:t.resource,disabled:o})}),Object(ee.jsx)(be.a,{label:"Amount",children:Object(ee.jsx)(je.a,{type:"number",name:"amount",error:r.amount&&c.amount&&r.amount,onChange:i,onBlur:s,value:t.amount,disabled:o})}),o&&Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(be.a,{label:"Created by",children:Object(ee.jsx)(je.a,{type:"text",name:"username",value:t.username,disabled:o})}),Object(ee.jsx)(be.a,{label:"Created at",children:Object(ee.jsx)(je.a,{type:"text",name:"id",value:new Date(t.id).toLocaleString(),disabled:o})})]})]}),Object(ee.jsxs)(Ce.f,{children:[Object(ee.jsx)(W.a,{type:"button",kind:z.a.tertiary,disabled:j,isLoading:j,onClick:n,children:"Cancel"}),!o&&Object(ee.jsx)(W.a,{type:"submit",disabled:j,isLoading:j,onClick:l,children:"Save"})]})]})}})}function Le(e){var t=e.item,n=e.onClose,r=Object(i.c)(w),a=Object(i.b)(),c=Object.keys(t||{}).length>0,o=c?t:{name:"",amount:""};return Object(ee.jsx)(le.a,{initialValues:o,validate:function(e){var t={};return e.name||(t.name="Required"),e.amount||(t.amount="Required"),t},onSubmit:function(e,t){var c=t.setSubmitting,o=Object(f.a)({id:(new Date).toISOString(),username:r},e);a(B(o)),c(!1),n()},children:function(e){var t=e.values,r=e.errors,a=e.touched,o=e.handleChange,i=e.handleBlur,s=e.handleSubmit,u=e.isSubmitting;return Object(ee.jsxs)("form",{onSubmit:s,children:[Object(ee.jsx)(Ce.g,{children:c?"View":"New"}),Object(ee.jsxs)(Ce.e,{children:[Object(ee.jsx)(be.a,{label:"Name",children:Object(ee.jsx)(je.a,{type:"text",name:"name",error:r.name&&a.name&&r.name,onChange:o,onBlur:i,value:t.name})}),Object(ee.jsx)(be.a,{label:"Amount",children:Object(ee.jsx)(je.a,{type:"number",name:"amount",error:r.amount&&a.amount&&r.amount,onChange:o,onBlur:i,value:t.amount,disabled:c})}),c&&Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(be.a,{label:"Created by",children:Object(ee.jsx)(je.a,{type:"text",name:"username",value:t.username,disabled:c})}),Object(ee.jsx)(be.a,{label:"Created at",children:Object(ee.jsx)(je.a,{type:"text",name:"id",value:new Date(t.id).toLocaleString(),disabled:c})})]})]}),Object(ee.jsxs)(Ce.f,{children:[Object(ee.jsx)(W.a,{kind:z.a.tertiary,disabled:u,isLoading:u,onClick:n,children:"Cancel"}),Object(ee.jsx)(W.a,{type:"submit",disabled:u,isLoading:u,onClick:s,children:"Save"})]})]})}})}function Be(){var e=a.a.useState("0"),t=Object(M.a)(e,2),n=t[0],r=t[1],c=Object(i.c)(V),o=Object(i.c)(K),s=Object(i.b)();var u=function(){var e=Object.keys(localStorage).reduce((function(e,t){return e[t]=localStorage.getItem(t),e}),{});!function(e,t,n){var r=document.createElement("a"),a=new Blob([e],{type:n});r.href=URL.createObjectURL(a),r.download=t,r.click()}(JSON.stringify(e),"database.json","text/plain")};return Object(ee.jsxs)(me.a,{activeKey:n,onChange:function(e){var t=e.activeKey;return r(t)},children:[Object(ee.jsx)(he.a,{title:"Resources",children:Object(ee.jsx)(ne,{title:"Resources",items:Object.values(c),Viewer:Le,Item:we})}),Object(ee.jsx)(he.a,{title:"Historic",children:Object(ee.jsx)(ne,{title:"Historic",items:Object(F.a)(o).reverse(),Viewer:ke,Item:Se})}),Object(ee.jsxs)(he.a,{title:"Setting",children:[Object(ee.jsx)(ce,{}),Object(ee.jsx)("br",{}),Object(ee.jsx)(W.a,{onClick:function(){return u()},children:"Backup"}),Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{}),Object(ee.jsx)(W.a,{onClick:function(){return s(v())},children:"Logoff"})]})]})}function Ne(){return Object(ee.jsx)(G.a,{basename:"/",children:Object(ee.jsxs)(H.d,{children:[Object(ee.jsx)(H.b,{path:"/",element:Object(ee.jsx)(oe,{})}),Object(ee.jsx)(H.b,{path:"/login",element:Object(ee.jsx)(Oe,{})}),Object(ee.jsx)(H.b,{path:"/home",element:Object(ee.jsx)(re,{children:Object(ee.jsx)(Be,{})})})]})})}n(335);var Re=new s.a;o.a.render(Object(ee.jsx)(a.a.StrictMode,{children:Object(ee.jsx)(u.a,{value:Re,children:Object(ee.jsx)(l.a,{theme:j.a,children:Object(ee.jsx)(i.a,{store:T,children:Object(ee.jsx)(Ne,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[337,1,2]]]);