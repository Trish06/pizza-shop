/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

// /**
//  * Template Name: Lumia
//  * Updated: Sep 18 2023 with Bootstrap v5.3.2
//  * Template URL: https://bootstrapmade.com/lumia-bootstrap-business-template/
//  * Author: BootstrapMade.com
//  * License: https://bootstrapmade.com/license/
//  */
// (function () {
//   'use strict';

//   /**
//    * Easy selector helper function
//    */
//   const select = (el, all = false) => {
//     el = el.trim();
//     if (all) {
//       return [...document.querySelectorAll(el)];
//     } else {
//       return document.querySelector(el);
//     }
//   };

//   /**
//    * Easy event listener function
//    */
//   const on = (type, el, listener, all = false) => {
//     let selectEl = select(el, all);
//     if (selectEl) {
//       if (all) {
//         selectEl.forEach((e) => e.addEventListener(type, listener));
//       } else {
//         selectEl.addEventListener(type, listener);
//       }
//     }
//   };

//   /**
//    * Easy on scroll event listener
//    */
//   const onscroll = (el, listener) => {
//     el.addEventListener('scroll', listener);
//   };

//   /**
//    * Navbar links active state on scroll
//    */
//   let navbarlinks = select('#navbar .scrollto', true);
//   const navbarlinksActive = () => {
//     let position = window.scrollY + 200;
//     navbarlinks.forEach((navbarlink) => {
//       if (!navbarlink.hash) return;
//       let section = select(navbarlink.hash);
//       if (!section) return;
//       if (
//         position >= section.offsetTop &&
//         position <= section.offsetTop + section.offsetHeight
//       ) {
//         navbarlink.classList.add('active');
//       } else {
//         navbarlink.classList.remove('active');
//       }
//     });
//   };
//   window.addEventListener('load', navbarlinksActive);
//   onscroll(document, navbarlinksActive);

//   /**
//    * Scrolls to an element with header offset
//    */
//   const scrollto = (el) => {
//     let header = select('#header');
//     let offset = header.offsetHeight;

//     let elementPos = select(el).offsetTop;
//     window.scrollTo({
//       top: elementPos - offset,
//       behavior: 'smooth',
//     });
//   };

//   /**
//    * Toggle .header-scrolled class to #header when page is scrolled
//    */
//   let selectHeader = select('#header');
//   if (selectHeader) {
//     const headerScrolled = () => {
//       if (window.scrollY > 100) {
//         selectHeader.classList.add('header-scrolled');
//       } else {
//         selectHeader.classList.remove('header-scrolled');
//       }
//     };
//     window.addEventListener('load', headerScrolled);
//     onscroll(document, headerScrolled);
//   }

//   /**
//    * Back to top button
//    */
//   let backtotop = select('.back-to-top');
//   if (backtotop) {
//     const toggleBacktotop = () => {
//       if (window.scrollY > 100) {
//         backtotop.classList.add('active');
//       } else {
//         backtotop.classList.remove('active');
//       }
//     };
//     window.addEventListener('load', toggleBacktotop);
//     onscroll(document, toggleBacktotop);
//   }

//   /**
//    * Mobile nav toggle
//    */
//   on('click', '.mobile-nav-toggle', function (e) {
//     select('#navbar').classList.toggle('navbar-mobile');
//     this.classList.toggle('bi-list');
//     this.classList.toggle('bi-x');
//   });

//   /**
//    * Mobile nav dropdowns activate
//    */
//   on(
//     'click',
//     '.navbar .dropdown > a',
//     function (e) {
//       if (select('#navbar').classList.contains('navbar-mobile')) {
//         e.preventDefault();
//         this.nextElementSibling.classList.toggle('dropdown-active');
//       }
//     },
//     true
//   );

//   /**
//    * Scrool with ofset on links with a class name .scrollto
//    */
//   on(
//     'click',
//     '.scrollto',
//     function (e) {
//       if (select(this.hash)) {
//         e.preventDefault();

//         let navbar = select('#navbar');
//         if (navbar.classList.contains('navbar-mobile')) {
//           navbar.classList.remove('navbar-mobile');
//           let navbarToggle = select('.mobile-nav-toggle');
//           navbarToggle.classList.toggle('bi-list');
//           navbarToggle.classList.toggle('bi-x');
//         }
//         scrollto(this.hash);
//       }
//     },
//     true
//   );

//   /**
//    * Scroll with ofset on page load with hash links in the url
//    */
//   window.addEventListener('load', () => {
//     if (window.location.hash) {
//       if (select(window.location.hash)) {
//         scrollto(window.location.hash);
//       }
//     }
//   });

//   /**
//    * Skills animation
//    */
//   let skilsContent = select('.skills-content');
//   if (skilsContent) {
//     new Waypoint({
//       element: skilsContent,
//       offset: '80%',
//       handler: function (direction) {
//         let progress = select('.progress .progress-bar', true);
//         progress.forEach((el) => {
//           el.style.width = el.getAttribute('aria-valuenow') + '%';
//         });
//       },
//     });
//   }

//   /**
//    * Porfolio isotope and filter
//    */
//   window.addEventListener('load', () => {
//     let portfolioContainer = select('.portfolio-container');
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows',
//       });

//       let portfolioFilters = select('#portfolio-flters li', true);

//       on(
//         'click',
//         '#portfolio-flters li',
//         function (e) {
//           e.preventDefault();
//           portfolioFilters.forEach(function (el) {
//             el.classList.remove('filter-active');
//           });
//           this.classList.add('filter-active');

//           portfolioIsotope.arrange({
//             filter: this.getAttribute('data-filter'),
//           });
//         },
//         true
//       );
//     }
//   });

//   /**
//    * Initiate portfolio lightbox
//    */
//   const portfolioLightbox = GLightbox({
//     selector: '.portfolio-lightbox',
//   });

//   /**
//    * Portfolio details slider
//    */
//   new Swiper('.portfolio-details-slider', {
//     speed: 400,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true,
//     },
//   });

//   /**
//    * Testimonials slider
//    */
//   new Swiper('.testimonials-slider', {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true,
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },

//       1200: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//     },
//   });

//   /**
//    * Initiate Pure Counter
//    */
//   new PureCounter();
// })();
// Scrollbar navbar

var nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add('scroll-on');
  } else {
    nav.classList.remove('scroll-on');
  }
};

// nav hide
var navBar = document.querySelectorAll('.nav-link');
var navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
  a.addEventListener('click', function () {
    navCollapse.classList.remove('show');
  });
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksushi"] = self["webpackChunksushi"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;