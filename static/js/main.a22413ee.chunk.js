(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports={messageWrapper:"Message_messageWrapper__1DRDM",messageDialogWindow:"Message_messageDialogWindow__kJS2v",messageAvatar:"Message_messageAvatar__26aQy",messageName:"Message_messageName__16Z99",messageText:"Message_messageText__tMBZ7",messageTime:"Message_messageTime__3SP_X"}},,function(e,a,t){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",btn:"Greeting_btn__1zEPl",superInputStyle:"Greeting_superInputStyle__3wBMN",greeting:"Greeting_greeting__21ydZ",counter:"Greeting_counter__2pKsv"}},,,,,,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",superInputStyle:"SuperInputText_superInputStyle__2o_cd"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",superCheckboxWrapper:"HW4_superCheckboxWrapper__3Fdb6"}},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,function(e,a,t){e.exports={preloader:"preloader_preloader__3ahQq",spinner:"preloader_spinner__1t0Qa",spin:"preloader_spin__1fPBK"}},,function(e,a,t){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",some:"HW12_some__2eRaq","some-text":"HW12_some-text__1-Wyv"}},,,,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},function(e,a,t){e.exports={spanStyle:"superEditableSpan_spanStyle__YbQCm"}},function(e,a,t){e.exports={hw6:"hw6_hw6__2x6Wu"}},function(e,a,t){e.exports={select:"SuperSelect_select__3fEsa"}},function(e,a,t){},,function(e,a,t){e.exports={range:"SuperRange_range__2K0wQ"}},,,,,,,function(e,a,t){e.exports=t(63)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(56),t(38)),u=t.n(o),s=t(2),i=(t(57),t(14)),m=t(3),p=t(15),d=t.n(p);var E=function(e){return r.a.createElement("div",{className:d.a.messageWrapper},r.a.createElement("img",{className:d.a.messageAvatar,src:e.avatar,alt:"message-avatar"}),r.a.createElement("div",{className:d.a.messageDialogWindow},r.a.createElement("span",{className:d.a.messageName},e.name),r.a.createElement("p",{className:d.a.messageText},e.message),r.a.createElement("span",{className:d.a.messageTime},e.time)))},v="https://www.clipartmax.com/png/full/466-4663678_owls-\u203f\u273f\u2040\xb0\u2022\u2022\u25cb-subject-adorable-owl-cute-owl-svg.png",g="Ignat",h="Hello, Dear Friend !",f="12:15",_="https://img.pngio.com/cute-owl-png-clipart-gallery-yopriceville-high-quality-images-cute-owl-png-8000_7072.png",b="Viktor",C="Hey, How are you?",k="12:20";var O=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:v,name:g,message:h,time:f}),r.a.createElement(E,{avatar:_,name:b,message:C,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var N=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){return e.setFilter("low")}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(n.useState)(y),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(s.a)(c,2),u=o[0],i=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(25),S=t(17),T=t.n(S),I=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?T.a.error:"";return r.a.createElement("div",{className:T.a.greeting},r.a.createElement("input",{value:a,onChange:t,className:"".concat(o," ").concat(T.a.superInputStyle)}),r.a.createElement("span",null,l),r.a.createElement("button",{className:T.a.btn,onClick:n},"add"),r.a.createElement("span",{className:T.a.counter},c))},W=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),p=m[0],d=m[1],E=a.length;return r.a.createElement(I,{name:o,setNameCallback:function(e){u(e.currentTarget.value),d("")},addUser:function(){""!==o.trim()?(t(o),u(""),d(""),alert("Hello, ".concat(o))):d("Title is required")},error:p,totalUsers:E})},A=t(76);var H=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(W,{users:t,addUserCallback:function(e){var a=[{_id:Object(A.a)(),name:e}].concat(Object(x.a)(t));l(a)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},G=t(6),D=t(26),F=t.n(D),M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=Object(G.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(F.a.error," ").concat(o||""),i="".concat(c?F.a.errorInput:F.a.superInputStyle);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value.trim())},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:i},u)),c&&r.a.createElement("span",{className:s},c))},L=t(27),R=t.n(L),B=t(28),P=t.n(B),J=function(e){var a=e.red,t=e.className,n=Object(G.a)(e,["red","className"]),l="".concat(a?P.a.red:P.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},K=t(29),U=t.n(K),Q=function(e){e.type,e.onChange;var a=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),l=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(U.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked)},className:c},l)),n&&r.a.createElement("span",{className:U.a.spanClassName},n))};var X=function(){var e=Object(n.useState)(" "),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(s.a)(u,2),m=i[0],p=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:R.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement("div",{className:R.a.superCheckboxWrapper},r.a.createElement(J,{red:!1,onClick:o},"delete "),r.a.createElement(Q,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(Q,{checked:m,onChangeChecked:p}))),r.a.createElement("hr",null),r.a.createElement("hr",null))},q=t(39),Z=t.n(q),z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(G.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(s.a)(o,2),i=u[0],m=u[1],p=l||{},d=p.children,E=p.onDoubleClick,v=p.className,g=Object(G.a)(p,["children","onDoubleClick","className"]),h="".concat(Z.a.spanStyle," ").concat(v);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(M,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:h},g),d||c.value))};function Y(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function V(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Y("test",{x:"A",y:1});V("test",{x:"",y:0});var $=t(40),ee=t.n($);var ae=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:ee.a.hw6},r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(J,{onClick:function(){Y("editable-span-value",t)}},"save"),r.a.createElement(J,{onClick:function(){l(V("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var te=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(w,null),r.a.createElement(H,null),r.a.createElement(X,null),r.a.createElement(ae,null))};var ne=function(){return r.a.createElement("div",null)},re=t(41),le=t.n(re),ce=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(G.a)(e,["options","onChange","onChangeOption"]),l=a.map((function(e,a){return r.a.createElement("option",{key:a},e)}));return r.a.createElement("select",Object.assign({className:le.a.select,onChange:function(e){var a=e.currentTarget.value;t(a)}},n),l)},oe=t(42),ue=t.n(oe),se=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(G.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var a=e.currentTarget.value;l(a)}),o=t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{className:ue.a.input,type:"radio",name:e,checked:e===n,value:e,onChange:c}),e)}));return r.a.createElement(r.a.Fragment,null,o)},ie=["x","y","z"];var me=function(){var e=Object(n.useState)(ie[1]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ce,{options:ie,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(se,{name:"radio",options:ie,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=function(e,a){switch(a.type){case"sort":var t=Object(x.a)(e);return"up"===a.payload?t.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0})):t.sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0})),t;case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},de=function(e){return{type:"sort",payload:e}},Ee=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ve=function(){var e=Object(n.useState)(Ee),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,"Name: ",e.name," Age: ",e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){return l(pe(Ee,de("up")))}},"sort up")),r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){return l(pe(Ee,de("down")))}},"sort down")),r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){return l(pe(Ee,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ge=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(s.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),d=p[0],E=p[1],v=function(){clearInterval(t)},g=function(e){return e<10?"0"+e:e},h=u?"Time ".concat(g(+(null===u||void 0===u?void 0:u.getHours())),":").concat(g(+(null===u||void 0===u?void 0:u.getMinutes())),":").concat(g(+(null===u||void 0===u?void 0:u.getSeconds()))):"time",f=u?"Date: ".concat(null===u||void 0===u?void 0:u.getFullYear(),"-").concat(g(+(null===u||void 0===u?void 0:u.getMonth())+1),"-").concat(g(+(null===u||void 0===u?void 0:u.getDate()))):"date";return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},h),d&&r.a.createElement("div",null,f),r.a.createElement(J,{onClick:function(){v();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(J,{onClick:v},"stop"))};var he=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ge,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},fe=t(12),_e=t(48),be={loading:!0},Ce=function(e){return{type:"TOGGLE-LOADING",loading:e}},ke=t(31),Oe=t.n(ke),Ne=function(){return r.a.createElement("div",{className:Oe.a.preloader},r.a.createElement("div",{className:Oe.a.spinner}))};var je=function(){var e=Object(fe.b)(),a=Object(fe.c)((function(e){return e.loadingState.loading}));return setTimeout((function(){e(Ce(!1))}),2e3),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",a?r.a.createElement(Ne,null):r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){e(Ce(!0)),setTimeout((function(){e(Ce(!1))}),2e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ye=t(44),we=t.n(ye),xe=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=Object(G.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(we.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:c,value:l.value},l)))},Se=t(75),Te=function(e){var a=e.onChangeRange,t=e.value;return r.a.createElement("div",{style:{width:250,margin:30}},r.a.createElement(Se.a,{value:t,onChange:function(e,t){a&&a(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}))};var Ie=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),o=Object(s.a)(c,2),u=o[0],i=o[1],m=function(e){"number"===typeof e?l(e):(l(e[0]),i(e[1]))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(xe,{value:t,onChangeRange:m})),r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(Te,{value:[t,u],onChangeRange:m}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},We=t(33),Ae=t.n(We),He={theme:"some"},Ge=["dark","red","some"];var De=function(){var e=Object(fe.b)(),a=Object(fe.c)((function(e){return e.themeState.theme})),t=function(a){e(function(e){return{type:"CHANGE-COLOR",text:e}}(a))};return r.a.createElement("div",{className:Ae.a[a]},r.a.createElement("hr",null),r.a.createElement("span",{className:Ae.a[a+"-text"]},"homeworks 12"),r.a.createElement(ce,{value:a,options:Ge,onChangeOption:t}),r.a.createElement(se,{value:a,options:Ge,onChangeOption:t}),r.a.createElement("hr",null))};var Fe=function(){return r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(ve,null),r.a.createElement(he,null),r.a.createElement(je,null),r.a.createElement(Ie,null),r.a.createElement(De,null))};var Me=function(){return r.a.createElement("div",{className:"error"},r.a.createElement("div",{className:"error__num"},"404"),r.a.createElement("div",{className:"error__text"},"Page not found!"),r.a.createElement("div",{className:"error__text error__cat"},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Le="/pre-junior",Re="/junior",Be="/junior++";var Pe=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:Le})}}),r.a.createElement(m.b,{path:Le,render:function(){return r.a.createElement(te,null)}}),r.a.createElement(m.b,{path:Re,render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(m.b,{path:Be,render:function(){return r.a.createElement(ne,null)}}),"// add routes",r.a.createElement(m.b,{render:function(){return r.a.createElement(Me,null)}})))};var Je=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){l(!0)})),r.a.createElement("div",{className:t?"header header__active":"header"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:Le,className:"navlink",activeClassName:"activeLink"},"Prejunior")),r.a.createElement("li",null,r.a.createElement(i.b,{to:Re,className:"navlink",activeClassName:"activeLink"},"Junior")),r.a.createElement("li",null,r.a.createElement(i.b,{to:Be,className:"navlink",activeClassName:"activeLink"},"Junior++")))))};var Ke=function(){return r.a.createElement("div",{className:"hw5"},"homeworks 5",r.a.createElement(i.a,null,r.a.createElement(Je,null),r.a.createElement(Pe,null)))},Ue=t(20),Qe=Object(Ue.b)({loadingState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE-LOADING":return Object(_e.a)({},e,{loading:a.loading});default:return e}},themeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE-COLOR":return{theme:a.text};default:return e}}}),Xe=Object(Ue.c)(Qe),qe=Xe;window.store=Xe;var Ze=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(fe.a,{store:qe},r.a.createElement(Ke,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[51,1,2]]]);
//# sourceMappingURL=main.a22413ee.chunk.js.map