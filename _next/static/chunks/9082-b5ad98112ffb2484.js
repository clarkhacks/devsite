(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9082],{6802:function(e,s){"use strict";s.Z=function(){window.addEventListener("scroll",(function(){var e=window.pageYOffset;document.querySelector(".fixed-slider .caption")&&document.querySelectorAll(".fixed-slider .caption").forEach((function(s){s.style.transform="translate3d(0, "+-.2*e+"px, 0)",s.style.opacity=1-e/600}))}))}},8063:function(e,s){"use strict";s.Z=function(){var e,s=document.querySelectorAll(".gallery");s.length>=1&&s.forEach((function(s){e=new Isotope(s,{itemSelector:".items"})}));var a=document.querySelector(".filtering");if(a){var i=function(e){e.addEventListener("click",(function(s){matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))}))};a.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var a=s.target.getAttribute("data-filter");a=a,e.arrange({filter:a})}}));for(var t=document.querySelectorAll(".filtering"),r=0,n=t.length;r<n;r++){i(t[r])}}}},5850:function(e,s){"use strict";s.Z=function(){document.querySelector(".swiper-pagination")&&(document.querySelector(".swiper-pagination").innerHTML=document.querySelector(".swiper-pagination").innerHTML.replace(" / ",""))}},6719:function(e,s,a){"use strict";var i=a(5893),t=(a(7294),a(1664)),r=a(8636);s.Z=function(){return(0,i.jsx)("section",{className:"blc-sec section-padding pb-0",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsxs)("div",{className:"intro md-mb30",children:[(0,i.jsxs)("div",{className:"sub-title",children:[(0,i.jsx)("h6",{children:"Know Us Better"}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]}),(0,i.jsx)(r.Z,{children:(0,i.jsx)("h2",{className:"extra-title wow words chars splitting","data-splitting":!0,children:"We help to create strategies, design & development."})})]})}),(0,i.jsx)("div",{className:"col-lg-5 valign",children:(0,i.jsxs)("div",{className:"full-width",children:[(0,i.jsx)(r.Z,{children:(0,i.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:"We never underestimate any parts of each project as they're all essential to meeting the ultimate goal. you'll be engaged in with our positive and enthusiastic attitude."})}),(0,i.jsx)(r.Z,{children:(0,i.jsx)(t.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"simple-btn custom-font mt-20 wow words chars splitting","data-splitting":!0,children:(0,i.jsx)("span",{children:"Know More"})})})})]})})]})})})}},6469:function(e,s,a){"use strict";var i=a(5893),t=a(7294),r=a(3526),n=a(2873),l=a(1664),c=a(8116),o=(a(933),a(8770),a(92),a(8636)),d=a(6802),m=a(5850);function h(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var a=[],i=!0,t=!1,r=void 0;try{for(var n,l=e[Symbol.iterator]();!(i=(n=l.next()).done)&&(a.push(n.value),!s||a.length!==s);i=!0);}catch(c){t=!0,r=c}finally{try{i||null==l.return||l.return()}finally{if(t)throw r}}return a}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}c.ZP.use([c.W_,c.tl,c.VS,c.pt]);s.Z=function(){var e=h(t.useState(!0),2),s=e[0],a=e[1];t.useEffect((function(){(0,d.Z)(),setTimeout((function(){a(!1),(0,m.Z)()}),1e3)}),[]);var c=t.useRef(null),f=t.useRef(null),u=t.useRef(null);return(0,i.jsx)("header",{className:"slider slider-prlx",children:(0,i.jsxs)("div",{className:"swiper-container parallax-slider",children:[s?null:(0,i.jsx)(n.t,{speed:1e3,autoplay:!0,parallax:!0,navigation:{prevEl:c.current,nextEl:f.current},pagination:{type:"fraction",clickable:!0,el:u.current},onBeforeInit:function(e){e.params.navigation.prevEl=c.current,e.params.navigation.nextEl=f.current,e.params.pagination.el=u.current},onSwiper:function(e){setTimeout((function(){for(var s=0;s<e.slides.length;s++)e.slides[s].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=c.current,e.params.navigation.nextEl=f.current,e.params.pagination.el=u.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update(),e.pagination.destroy(),e.pagination.init(),e.pagination.update()}))},className:"swiper-wrapper",slidesPerView:1,children:r.map((function(e){return(0,i.jsx)(n.o,{className:"swiper-slide",children:(0,i.jsx)("div",{className:"bg-img valign",style:{backgroundImage:"url(".concat(e.image,")")},"data-overlay-dark":"6",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"caption dig",children:[(0,i.jsx)(o.Z,{children:(0,i.jsx)("h1",{className:"words chars splitting",children:"object"===typeof e.title?(0,i.jsxs)(i.Fragment,{children:[e.title.first,(0,i.jsx)("div",{className:"tline",children:e.title.second})]}):e.title})}),(0,i.jsx)(l.default,{href:"/works2/works2-dark",children:(0,i.jsx)("a",{className:"simple-btn mt-50",children:(0,i.jsx)("span",{children:"Discover Works"})})})]})})})})})},e.id)}))}),(0,i.jsxs)("div",{className:"setone setwo",children:[(0,i.jsx)("div",{ref:f,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})}),(0,i.jsx)("div",{ref:c,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:(0,i.jsx)("i",{className:"fas fa-chevron-left"})})]}),(0,i.jsx)("div",{ref:u,className:"swiper-pagination top botm custom-font"}),(0,i.jsxs)("div",{className:"social-icon",children:[(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-behance"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-pinterest-p"})})]})]})})}},1240:function(e,s,a){"use strict";a.d(s,{Z:function(){return d}});var i=a(5893),t=a(7294),r=a(8636),n=a(1664),l=a(8063),c=JSON.parse('[{"id":1,"image":"/img/portfolio/mas/01.jpg","title":"Creativity Demand","tags":["Design","WordPress"],"filterCategory":["graphic"]},{"id":2,"image":"/img/portfolio/mas/02.jpg","title":"Through The Breaking","tags":["Design","WordPress"],"filterCategory":["web"]},{"id":3,"image":"/img/portfolio/mas/03.jpg","title":"Create With Creatives","tags":["Design","WordPress"],"filterCategory":["brand"]},{"id":4,"image":"/img/portfolio/mas/04.jpg","title":"Energies of Love","tags":["Design","WordPress"],"filterCategory":["graphic"]},{"id":5,"image":"/img/portfolio/mas/05.jpg","title":"See It Yourself","tags":["Design","WordPress"],"filterCategory":["web"]},{"id":6,"image":"/img/portfolio/mas/06.jpg","title":"Blast From The Past","tags":["Design","WordPress"],"filterCategory":["brand"]}]');function o(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var a=[],i=!0,t=!1,r=void 0;try{for(var n,l=e[Symbol.iterator]();!(i=(n=l.next()).done)&&(a.push(n.value),!s||a.length!==s);i=!0);}catch(c){t=!0,r=c}finally{try{i||null==l.return||l.return()}finally{if(t)throw r}}return a}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){var s=e.column,a=e.filterPosition,d=e.hideFilter,m=e.hideSectionTitle,h=o(t.useState(!1),2),f=h[0],u=h[1];return t.useEffect((function(){u(!0),f&&setTimeout((function(){(0,l.Z)()}),1e3)}),[f]),(0,i.jsxs)("section",{className:"portfolio section-padding pb-70",children:[!m&&(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"sec-head custom-font",children:[(0,i.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Portfolio"}),(0,i.jsx)(r.Z,{children:(0,i.jsx)("h3",{className:"wow words chars splitting","data-splitting":!0,children:"Our Works."})}),(0,i.jsx)("span",{className:"tbg text-right",children:"Portfolio"})]})}),(0,i.jsx)("div",{className:"".concat(3===s?"container-fluid":"container"),children:(0,i.jsxs)("div",{className:"row",children:[!d&&(0,i.jsx)("div",{className:"filtering ".concat("center"===a?"text-center":"left"===a?"text-left":"text-right"," col-12"),children:(0,i.jsxs)("div",{className:"filter",children:[(0,i.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,i.jsx)("span",{"data-filter":".brand",children:"Branding"}),(0,i.jsx)("span",{"data-filter":".web",children:"Mobile App"}),(0,i.jsx)("span",{"data-filter":".graphic",children:"Creative"})]})}),(0,i.jsx)("div",{className:"gallery full-width",children:c.map((function(e,a){return(0,i.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items ").concat(e.filterCategory," wow fadeInUp ").concat(2===e.id&&3==s||1===e.id&&2==s?"lg-mr":""),"data-wow-delay":".4s",children:[(0,i.jsx)("div",{className:"item-img",children:(0,i.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,i.jsxs)("a",{className:"imago wow",children:[(0,i.jsx)("img",{src:e.image,alt:"image"}),(0,i.jsx)("div",{className:"item-img-overlay"})]})})}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:e.title}),(0,i.jsx)("span",{children:e.tags.map((function(s,a){return(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)(n.default,{href:"/works4/works4-dark",children:s}),a==e.tags.length-1?"":","]},3*a)}))})]})]},e.id)}))})]})})]})}},6156:function(e,s,a){"use strict";var i=a(5893),t=(a(7294),a(1664));s.Z=function(){return(0,i.jsx)("section",{className:"services section-padding",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"row rone",children:[(0,i.jsx)("div",{className:"col-lg-3 wow fadeInUp","data-wow-delay":".4s",children:(0,i.jsxs)("div",{className:"mas-item",children:[(0,i.jsx)("span",{className:"icon pe-7s-monitor"}),(0,i.jsxs)("h6",{children:["Website ",(0,i.jsx)("br",{})," Developments"]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(t.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"more",children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,i.jsx)("div",{className:"bg-color"})]})}),(0,i.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,i.jsxs)("div",{className:"mas-item",children:[(0,i.jsx)("span",{className:"icon pe-7s-camera"}),(0,i.jsxs)("h6",{children:["Product ",(0,i.jsx)("br",{})," Photography"]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(t.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"more",children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,i.jsx)("div",{className:"bg-color"})]})}),(0,i.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,i.jsxs)("div",{className:"mas-item",children:[(0,i.jsx)("span",{className:"icon pe-7s-phone"}),(0,i.jsxs)("h6",{children:["Mobile App ",(0,i.jsx)("br",{})," Devlopment"]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(t.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"more",children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,i.jsx)("div",{className:"bg-color"})]})})]}),(0,i.jsxs)("div",{className:"row rtwo",children:[(0,i.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,i.jsxs)("div",{className:"mas-item",children:[(0,i.jsx)("span",{className:"icon pe-7s-diskette"}),(0,i.jsxs)("h6",{children:["Document ",(0,i.jsx)("br",{})," Legal Policy"]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(t.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"more",children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,i.jsx)("div",{className:"bg-color"})]})}),(0,i.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,i.jsxs)("div",{className:"mas-item",children:[(0,i.jsx)("span",{className:"icon pe-7s-help2"}),(0,i.jsxs)("h6",{children:["Managing ",(0,i.jsx)("br",{})," Community"]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(t.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"more",children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,i.jsx)("div",{className:"bg-color"})]})}),(0,i.jsx)("div",{className:"col-lg-3 offset-lg-1 wow fadeInUp","data-wow-delay":".4s",children:(0,i.jsxs)("div",{className:"mas-item",children:[(0,i.jsx)("span",{className:"icon pe-7s-arc"}),(0,i.jsxs)("h6",{children:["Coustomer ",(0,i.jsx)("br",{})," Engagement"]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(t.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"more",children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})})}),(0,i.jsx)("div",{className:"bg-color"})]})})]})]})})}},8770:function(){},3526:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"Unique","second":"brand Stories"},"image":"/img/slid/01.jpg"},{"id":2,"title":{"first":"Digital","second":"Design Awards"},"image":"/img/slid/03.jpg"},{"id":3,"title":{"first":"Original","second":"Solutions"},"image":"/img/slid/02.jpg"}]')}}]);