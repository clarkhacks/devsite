(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3325],{8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},o=t(6273),s=t(387),l=t(7190);var c={};function u(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,i=s.useRouter(),f=a.default.useMemo((function(){var n=r(o.resolveHref(i,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?o.resolveHref(i,e.as):a||t}}),[i,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var x=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,w=r(l.useIntersection({rootMargin:"200px"}),2),j=w[0],b=w[1],N=a.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);a.default.useEffect((function(){var e=b&&t&&o.isLocalURL(d),n="undefined"!==typeof y?y:i&&i.locale,r=c[d+"%"+p+(n?"%"+n:"")];e&&!r&&u(i,d,p,{locale:n})}),[p,d,b,y,t,i]);var E={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[i?"replace":"push"](t,r,{shallow:a,locale:l,scroll:s}))}(e,i,d,p,h,m,g,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(d)&&u(i,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof y?y:i&&i.locale,L=i&&i.isLocaleDomain&&o.getDomainLocale(p,k,i&&i.locales,i&&i.domainLocales);E.href=L||o.addBasePath(o.addLocale(p,k,i&&i.defaultLocale))}return a.default.cloneElement(n,E)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,l=i.useRef(),c=r(i.useState(!1),2),u=c[0],f=c[1],d=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||u||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return i.useEffect((function(){if(!o&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=t(7294),a=t(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},5850:function(e,n){"use strict";n.Z=function(){document.querySelector(".swiper-pagination")&&(document.querySelector(".swiper-pagination").innerHTML=document.querySelector(".swiper-pagination").innerHTML.replace(" / ",""))}},3325:function(e,n,t){"use strict";var r=t(5893),i=t(7294),a=t(1664),o=t(2873),s=t(265),l=t(8116),c=(t(933),t(8770),t(92),t(8277),t(5850));function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}l.ZP.use([l.W_,l.tl,l.VS,l.Gk]);n.Z=function(){var e=u(i.useState(!0),2),n=e[0],t=e[1];i.useEffect((function(){setTimeout((function(){t(!1),(0,c.Z)()}),1e3)}),[]);var l=i.useRef(null),f=i.useRef(null),d=i.useRef(null);return(0,r.jsxs)("header",{className:"slider showcase-full",children:[(0,r.jsx)("div",{className:"swiper-container parallax-slider",children:n?null:(0,r.jsx)(o.t,{speed:1e3,mousewheel:!0,parallax:!0,navigation:{prevEl:l.current,nextEl:f.current},pagination:{clickable:!0,type:"fraction",el:d.current},onBeforeInit:function(e){e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=f.current,e.params.pagination.el=d.current},onSwiper:function(e){setTimeout((function(){for(var n=0;n<e.slides.length;n++)e.slides[n].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=f.current,e.params.pagination.el=d.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update(),e.pagination.destroy(),e.pagination.init(),e.pagination.update()}))},className:"swiper-wrapper",slidesPerView:1,children:s.map((function(e){return(0,r.jsx)(o.o,{className:"swiper-slide",children:(0,r.jsx)("div",{className:"bg-img valign",style:{backgroundImage:"url(".concat(e.image,")")},"data-overlay-dark":"4",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-10 offset-lg-1",children:(0,r.jsx)("div",{className:"caption",children:(0,r.jsx)("h1",{children:(0,r.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("div",{className:"stroke","data-swiper-parallax":"-2000",children:e.title.first}),(0,r.jsx)("span",{"data-swiper-parallax":"-5000",children:e.title.second})]})})})})})})})})},e.id)}))})}),(0,r.jsx)("div",{className:"swiper-pagination dots",ref:d}),(0,r.jsxs)("div",{className:"txt-botm",children:[(0,r.jsxs)("div",{ref:f,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:" custom-font",children:"Next Slide"})}),(0,r.jsx)("div",{children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,r.jsxs)("div",{ref:l,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:[(0,r.jsx)("div",{children:(0,r.jsx)("i",{className:"fas fa-chevron-left"})}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:" custom-font",children:"Prev Slide"})})]})]}),(0,r.jsx)("div",{className:"swiper-pagination steps custom-font",ref:d})]})}},8277:function(){},8770:function(){},1664:function(e,n,t){e.exports=t(8418)},265:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"Hoodie","second":"Jacket"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Eminem","second":"Style"},"image":"/img/portfolio/full/4.jpg","sub":"Design"},{"id":3,"title":{"first":"Black","second":"Panther"},"image":"/img/portfolio/full/5.jpg","sub":"Design"},{"id":4,"title":{"first":"Secret","second":"Office"},"image":"/img/portfolio/full/6.jpg","sub":"Design"}]')}}]);