(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{263:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},277:function(e,a,t){"use strict";var l=t(259),s=t(261),n=t(266),r=t(1),c=t.n(r),i=t(0),o=t.n(i),m=t(258),u=t.n(m),f=t(272),d=t(260),h=Object(n.a)({},f.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:d.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(n.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,r=e.className,i=e.cssModule,o=e.children,m=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(d.o)(h,d.c),b=Object(d.n)(h,d.c);return c.a.createElement(f.Transition,p,function(e){var s="entered"===e,f=Object(d.m)(u()(r,t,s&&n),i);return c.a.createElement(a,Object(l.a)({className:f},b,{ref:m}),o)})}b.propTypes=h,b.defaultProps=p,a.a=b},3:function(e,a,t){"use strict";var l=t(259),s=t(261),n=t(1),r=t.n(n),c=t(0),i=t.n(c),o=t(258),m=t.n(o),u=t(260),f={tag:u.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},d=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,c=e.tag,i=e.form,o=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(u.m)(m()(a,n?"no-gutters":null,i?"form-row":"row"),t);return r.a.createElement(c,Object(l.a)({},o,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},4:function(e,a,t){"use strict";var l=t(259),s=t(261),n=t(263),r=t.n(n),c=t(1),i=t.n(c),o=t(0),m=t.n(o),u=t(258),f=t.n(u),d=t(260),h=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),push:Object(d.h)(h,'Please use the prop "order"'),pull:Object(d.h)(h,'Please use the prop "order"'),order:h,offset:h})]),b={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},k=function(e){var a=e.className,t=e.cssModule,n=e.widths,c=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),m=[];n.forEach(function(a,l){var s=e[a];if(delete o[a],s||""===s){var n=!l;if(r()(s)){var c,i=n?"-":"-"+a+"-",u=E(n,a,s.size);m.push(Object(d.m)(f()(((c={})[u]=s.size||""===s.size,c["order"+i+s.order]=s.order||0===s.order,c["offset"+i+s.offset]=s.offset||0===s.offset,c)),t))}else{var h=E(n,a,s);m.push(h)}}}),m.length||m.push("col");var u=Object(d.m)(f()(a,m),t);return i.a.createElement(c,Object(l.a)({},o,{className:u}))};k.propTypes=b,k.defaultProps=g,a.a=k},539:function(e,a,t){"use strict";var l=t(259),s=t(261),n=t(266),r=t(1),c=t.n(r),i=t(0),o=t.n(i),m=t(258),u=t.n(m),f=t(260),d=t(277),h={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.q,transition:o.a.shape(d.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(n.a)({},d.a.defaultProps,{unmountOnExit:!0})};function b(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,i=e.cssModule,o=e.tag,m=e.color,h=e.isOpen,p=e.toggle,b=e.children,g=e.transition,E=e.fade,k=e.innerRef,y=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(f.m)(u()(a,"alert","alert-"+m,{"alert-dismissible":p}),i),O=Object(f.m)(u()("close",t),i),j=Object(n.a)({},d.a.defaultProps,g,{baseClass:E?g.baseClass:"",timeout:E?g.timeout:0});return c.a.createElement(d.a,Object(l.a)({},y,j,{tag:o,className:v,in:h,role:"alert",innerRef:k}),p?c.a.createElement("button",{type:"button",className:O,"aria-label":r,onClick:p},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,b)}b.propTypes=h,b.defaultProps=p,a.a=b},578:function(e,a,t){"use strict";t.r(a);var l=t(97),s=t(98),n=t(100),r=t(99),c=t(101),i=t(102),o=t(1),m=t.n(o),u=t(3),f=t(4),d=t(5),h=t(8),p=t(6),b=t(539),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(r.a)(a).call(this,e))).state={visible:!0},t.onDismiss=t.onDismiss.bind(Object(i.a)(Object(i.a)(t))),t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},m.a.createElement("small",{className:"text-muted"},"docs")))),m.a.createElement(p.a,null,m.a.createElement(b.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),m.a.createElement(b.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),m.a.createElement(b.a,{color:"success"},"This is a success alert \u2014 check it out!"),m.a.createElement(b.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),m.a.createElement(b.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),m.a.createElement(b.a,{color:"info"},"This is a info alert \u2014 check it out!"),m.a.createElement(b.a,{color:"light"},"This is a light alert \u2014 check it out!"),m.a.createElement(b.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null," use ",m.a.createElement("code",null,".alert-link")," to provide links")),m.a.createElement(p.a,null,m.a.createElement(b.a,{color:"primary"},"This is a primary alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(b.a,{color:"secondary"},"This is a secondary alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(b.a,{color:"success"},"This is a success alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(b.a,{color:"danger"},"This is a danger alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(b.a,{color:"warning"},"This is a warning alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(b.a,{color:"info"},"This is a info alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(b.a,{color:"light"},"This is a light alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(b.a,{color:"dark"},"This is a dark alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),m.a.createElement(u.a,null,m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null,"additional content")),m.a.createElement(p.a,null,m.a.createElement(b.a,{color:"success"},m.a.createElement("h4",{className:"alert-heading"},"Well done!"),m.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),m.a.createElement("hr",null),m.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null,"dismissing")),m.a.createElement(p.a,null,m.a.createElement(b.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),a}(o.Component);a.default=g}}]);
//# sourceMappingURL=39.f3501785.chunk.js.map