!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(3)},function(e,t){var i=document.getElementById("button-burger"),n=document.getElementById("button-close"),s=document.getElementById("sidebar__background"),r=function(e){window.innerWidth>=1440?(document.getElementById("sidebar").classList.add("sidebar--open"),n.style.display="none",i.style.display="none"):(document.getElementById("sidebar").classList.remove("sidebar--open"),n.style.display="block",i.style.display="block")};i.addEventListener("click",(function(){document.getElementById("sidebar").classList.add("sidebar--open")})),n.addEventListener("click",(function(){document.getElementById("sidebar").classList.remove("sidebar--open")})),s.addEventListener("click",(function(){document.getElementById("sidebar").classList.remove("sidebar--open")})),r(),window.addEventListener("resize",(function(){r()}))},function(e,t,i){},function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.r(t);var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sliderContainer=document.querySelector(t),this.slider=this.sliderContainer.querySelector(".slider"),this.sliderItems=this.sliderContainer.querySelectorAll(".slider__item"),this.dots=this.sliderContainer.querySelectorAll(".slider__dot"),this.dotContainer=this.sliderContainer.querySelector(".slider__pagination"),this.slideWidth=this.sliderItems[0].clientWidth,this.currentSlide=0,this.touchStartX=null,this.touchEndX=null,this.moveSlider=this.moveSlider.bind(this),this.handleDotClick=this.handleDotClick.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handleResize=this.handleResize.bind(this),window.addEventListener("resize",this.handleResize),this.handleResize()}var t,i,s;return t=e,(i=[{key:"addListeners",value:function(){this.dots[this.currentSlide].classList.add("active"),this.dotContainer.addEventListener("click",this.handleDotClick),this.slider.addEventListener("touchstart",this.handleTouchStart),this.slider.addEventListener("touchmove",this.handleTouchMove),this.slider.addEventListener("touchend",this.handleTouchEnd)}},{key:"removeListeners",value:function(){this.dotContainer.removeEventListener("click",this.handleDotClick),this.slider.removeEventListener("touchstart",this.handleTouchStart),this.slider.removeEventListener("touchmove",this.handleTouchMove),this.slider.removeEventListener("touchend",this.handleTouchEnd)}},{key:"handleResize",value:function(){window.innerWidth<768?(this.slideWidth=this.sliderItems[0].clientWidth,this.addListeners()):(this.moveSlider(0),this.removeListeners())}},{key:"moveSlider",value:function(e){e>=this.sliderItems.length?e=0:e<0&&(e=this.sliderItems.length-1),this.slider.style.transform="translateX(-".concat(e*(this.slideWidth+16),"px)"),this.dots.forEach((function(e){return e.classList.remove("active")})),this.dots[e].classList.add("active"),this.currentSlide=e}},{key:"handleDotClick",value:function(e){if(e.target.classList.contains("slider__dot")){var t=Array.from(this.dots).indexOf(e.target);this.moveSlider(t)}}},{key:"handleTouchStart",value:function(e){this.touchStartX=e.touches[0].clientX}},{key:"handleTouchMove",value:function(e){this.touchEndX=e.touches[0].clientX}},{key:"handleTouchEnd",value:function(){this.touchStartX-this.touchEndX>50?this.moveSlider(this.currentSlide+1):this.touchEndX-this.touchStartX>50&&this.moveSlider(this.currentSlide-1),this.touchStartX=null,this.touchEndX=null}}])&&n(t.prototype,i),s&&n(t,s),e}();i(1);function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.list=document.querySelector(t),this.button=this.list.querySelector(".button--name--read-more"),this.listElements=this.list.querySelector(".read-more__list"),this.hiddenElements=this.listElements.querySelectorAll(".hidden"),this.toggle=this.toggle.bind(this),this.resize=this.resize.bind(this),this.button.addEventListener("click",this.toggle),window.addEventListener("resize",this.resize),this.resize(),this.hide()}var t,i,n;return t=e,(i=[{key:"resize",value:function(){window.innerWidth>=768?this.listHeight="10rem":this.listHeight="8rem"}},{key:"toggle",value:function(){"160px"===this.listElements.style.maxHeight||"8rem"===this.listElements.style.maxHeight||"10rem"===this.listElements.style.maxHeight?this.show():this.hide()}},{key:"show",value:function(){this.button.innerHTML='<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Свернуть</p>',this.listElements.style.maxHeight="calc(100% - 50px)"}},{key:"hide",value:function(){this.listElements.classList.contains("about-us--text")?(this.listElements.style.maxHeight=this.listHeight,this.button.innerHTML='<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Читать далее</p>'):(this.listElements.style.maxHeight="160px",this.button.innerHTML='<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/><p>Показать все</p>')}}])&&r(t.prototype,i),n&&r(t,n),e}(),l=(i(2),{}),d={};l.brands=new s(".slider__container--brands"),l.techniques=new s(".slider__container--techniques"),l.priceList=new s(".slider__container--price"),d["about-us"]=new o(".about-us"),d.brands=new o(".slider__container--brands"),d.technique=new o(".slider__container--techniques")}]);
//# sourceMappingURL=bundle.js.map