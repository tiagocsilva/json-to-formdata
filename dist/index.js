function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n=e(require("lodash/isObject")),r=e(require("lodash/isArray")),t={arrayIndexes:!0,excludeNull:!0,useDotSeparator:!1};module.exports=function(e,o,u){return void 0===o&&(o={}),void 0===u&&(u=new FormData),e?(function e(t,o,u,a){var i=a||"";(function(e){return null===e})(t)||function(e){return void 0===e}(t)?o.excludeNull||u.append(i,""):function(e){return e instanceof File}(t)||function(e){return e instanceof Blob}(t)?u.append(i,t):r(t)?t.forEach(function(n,r){e(n,o,u,i+"["+(o.arrayIndexes?r:"")+"]")}):n(t)?Object.entries(t).forEach(function(n){var r=n[0],t=r;a&&(t=o.useDotSeparator?a+"."+r:a+"["+r+"]"),e(n[1],o,u,t)}):function(e){return"boolean"==typeof e}(t)?u.append(i,t?"true":"false"):u.append(i,t)}(e,o=Object.assign(t,o),u),u):u};
//# sourceMappingURL=index.js.map
