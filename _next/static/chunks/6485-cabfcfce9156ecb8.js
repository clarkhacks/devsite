(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6485],{8418:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,i=!1,a=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(o){i=!0,a=o}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},s=t(6273),l=t(387),o=t(7190);var c={};function u(e,r,t,n){if(e&&s.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[r+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,i=l.useRouter(),f=a.default.useMemo((function(){var r=n(s.resolveHref(i,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?s.resolveHref(i,e.as):a||t}}),[i,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,x=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(r=a.default.Children.only(v))&&"object"===typeof r&&r.ref,j=n(o.useIntersection({rootMargin:"200px"}),2),w=j[0],b=j[1],N=a.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);a.default.useEffect((function(){var e=b&&t&&s.isLocalURL(d),r="undefined"!==typeof x?x:i&&i.locale,n=c[d+"%"+p+(r?"%"+r:"")];e&&!n&&u(i,d,p,{locale:r})}),[p,d,b,x,t,i]);var E={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,i,a,l,o){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),r[i?"replace":"push"](t,n,{shallow:a,locale:o,scroll:l}))}(e,i,d,p,h,m,g,x)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),s.isLocalURL(d)&&u(i,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof x?x:i&&i.locale,L=i&&i.isLocaleDomain&&s.getDomainLocale(p,k,i&&i.locales,i&&i.domainLocales);E.href=L||s.addBasePath(s.addLocale(p,k,i&&i.defaultLocale))}return a.default.cloneElement(r,E)};r.default=f},7190:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,i=!1,a=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(o){i=!0,a=o}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!s,o=i.useRef(),c=n(i.useState(!1),2),u=c[0],f=c[1],d=i.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||u||e&&e.tagName&&(o.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=l.get(r);if(t)return t;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(r,t={id:r,observer:i,elements:n}),t}(t),i=n.id,a=n.observer,s=n.elements;return s.set(e,r),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,u]);return i.useEffect((function(){if(!s&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=t(7294),a=t(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map},6485:function(e,r,t){"use strict";var n=t(5893),i=t(7294),a=t(1664),s=t(2873),l=t(265),o=t(8116);t(933),t(92),t(8277);function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,i=!1,a=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(o){i=!0,a=o}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}o.ZP.use([o.W_,o.VS,o.Gk]);r.Z=function(){var e=c(i.useState(!0),2),r=e[0],t=e[1];i.useEffect((function(){setTimeout((function(){t(!1)}))}),[]);var o=i.useRef(null),u=i.useRef(null);return(0,n.jsxs)("header",{className:"slider circle-slide showcase-carus",children:[(0,n.jsx)("div",{id:"content-carousel-container-unq-1",className:"swiper-container",children:r?null:(0,n.jsx)(s.t,{speed:1e3,mousewheel:!0,parallax:!0,centeredSlides:!0,slidesPerView:1,autoplay:!0,spaceBetween:500,navigation:{prevEl:o.current,nextEl:u.current},onBeforeInit:function(e){e.params.navigation.prevEl=o.current,e.params.navigation.nextEl=u.current},onSwiper:function(e){setTimeout((function(){for(var r=0;r<e.slides.length;r++)e.slides[r].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=o.current,e.params.navigation.nextEl=u.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",breakpoints:{0:{spaceBetween:0},640:{spaceBetween:0},768:{spaceBetween:30},1024:{spaceBetween:500}},children:l.map((function(e){return(0,n.jsx)(s.o,{className:"swiper-slide",children:(0,n.jsx)("div",{className:"full-width",children:(0,n.jsxs)("div",{className:"bg-img valign",style:{backgroundImage:"url(".concat(e.image,")")},"data-overlay-dark":"1",children:[(0,n.jsx)("div",{className:"caption ontop valign",children:(0,n.jsx)("div",{className:"o-hidden",children:(0,n.jsx)("h1",{"data-swiper-parallax":"-2000",children:(0,n.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("div",{className:"stroke",children:e.title.first}),(0,n.jsx)("span",{children:e.title.second})]})})})})}),(0,n.jsx)("div",{className:"copy-cap valign",children:(0,n.jsx)("div",{className:"cap",children:(0,n.jsx)("h1",{"data-swiper-parallax":"-2000",children:(0,n.jsx)(a.default,{href:"/project-details2/project-details2-dark",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("div",{className:"stroke",children:e.title.first}),(0,n.jsx)("span",{children:e.title.second})]})})})})})]})})},e.id)}))})}),(0,n.jsxs)("div",{className:"txt-botm",children:[(0,n.jsxs)("div",{ref:u,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:[(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:"Next Slide"})}),(0,n.jsx)("div",{children:(0,n.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,n.jsxs)("div",{ref:o,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:[(0,n.jsx)("div",{children:(0,n.jsx)("i",{className:"fas fa-chevron-left"})}),(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:"Prev Slide"})})]})]})]})}},8277:function(){},1664:function(e,r,t){e.exports=t(8418)},265:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"Hoodie","second":"Jacket"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Eminem","second":"Style"},"image":"/img/portfolio/full/4.jpg","sub":"Design"},{"id":3,"title":{"first":"Black","second":"Panther"},"image":"/img/portfolio/full/5.jpg","sub":"Design"},{"id":4,"title":{"first":"Secret","second":"Office"},"image":"/img/portfolio/full/6.jpg","sub":"Design"}]')}}]);