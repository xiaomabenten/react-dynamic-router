!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):"object"==typeof exports?exports.ReactDynamicRouter=t(require("prop-types"),require("react")):e.ReactDynamicRouter=t(e["prop-types"],e.react)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,f,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),l=(r(s),n(3)),d=r(l),y=(f=i=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=(e.className,e.location),r=e.match,a=e.namespace,u=(o(e,["className","location","match","namespace"]),t.pathname.split("/"));return(0,s.createElement)(n(2)(a+"/"+u[2]+"/"+u[3]+".js").default,{location:t,match:r})}}],[{key:"build",value:function(e,t){var n=this;return t.map(function(t,r){return(0,s.createElement)(e,{key:r,path:t,component:n})})}}]),t}(s.Component),i.propTypes={className:d.default.string,namespace:d.default.string,location:d.default.object,match:d.default.object},i.defaultProps={namespace:"admin",location:{},match:{}},f);t.default=y},function(e,t,n){function r(e){return n(o(e))}function o(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./react-dynamic-router.js":1};r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=2},function(t,n){t.exports=e},function(e,n){e.exports=t}])});
//# sourceMappingURL=react-dynamic-router.js.map