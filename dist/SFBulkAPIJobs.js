!function(){function t(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var e=t((function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e})),r=t((function(t){var r=function(t){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=d(t,e,r);if("normal"===c.type){if(n=r.done?y:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var l="suspendedStart",h="suspendedYield",f="executing",y="completed",g={};function m(){}function v(){}function w(){}var b={};b[i]=function(){return this};var S=Object.getPrototypeOf,x=S&&S(S(A([])));x&&x!==n&&o.call(x,i)&&(b=x);var C=w.prototype=m.prototype=Object.create(b);function N(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,r){function n(a,i,s,c){var u=d(t[a],t,i);if("throw"!==u.type){var p=u.arg,l=p.value;return l&&"object"===e(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(l).then((function(t){p.value=t,s(p)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:R}}function R(){return{value:r,done:!0}}return v.prototype=C.constructor=w,w.constructor=v,v.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},N(k.prototype),k.prototype[s]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(p(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},N(C),u(C,c,"Generator"),C[i]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var o=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}},a={displayName:"Salesforce Job Functions",description:"Salesforce Job Functions",properties:{jobId:{displayName:"Job Id",type:"string"},resultCode:{displayName:"Result Code",type:"string"},message:{displayName:"Message",type:"extendedString"},csvFile:{displayName:"CSV File",type:"attachment"},csvFileContent:{displayName:"File Content",type:"extendedString"},oldHeader:{displayName:"Old Header",type:"extendedString"},newHeader:{displayName:"New Header",type:"extendedString"},sobrId:{displayName:"SOBRID",type:"string"},csvString:{displayName:"CSV string",type:"extendedString"}},methods:{createJob:{displayName:"Create a New Job",type:"execute",parameters:{instanceUrl:{displayName:"Instance URL",type:"extendedString"},version:{displayName:"Version",type:"string"},token:{displayName:"Token",type:"string"},sfobject:{displayName:"SF Object",type:"string"},le:{displayName:"Line Ending",type:"string"}},inputs:[],outputs:["jobId","resultCode","message"]},updateJobState:{displayName:"Update Job State",type:"execute",parameters:{instanceUrl:{displayName:"Instance URL",type:"extendedString"},version:{displayName:"Version",type:"string"},token:{displayName:"Token",type:"string"}},inputs:["jobId"],outputs:["resultCode","message"]},uploadJobData:{displayName:"Upload Job Data",type:"execute",parameters:{instanceUrl:{displayName:"Instance URL",type:"extendedString"},version:{displayName:"Version",type:"string"},token:{displayName:"Token",type:"string"}},inputs:["jobId","csvFile"],outputs:["resultCode","message"]},convertAndUploadJobData:{displayName:"Convert and Upload Job Data",type:"execute",parameters:{instanceUrl:{displayName:"Instance URL",type:"extendedString"},version:{displayName:"Version",type:"string"},token:{displayName:"Token",type:"string"}},inputs:["jobId","oldHeader","newHeader","sobrId","csvFileContent"],outputs:["resultCode","message"]},createCSVAndUploadJobData:{displayName:"Create CSV and Upload Job Data",type:"execute",parameters:{instanceUrl:{displayName:"Instance URL",type:"extendedString"},version:{displayName:"Version",type:"string"},token:{displayName:"Token",type:"string"}},inputs:["jobId","csvString"],outputs:["resultCode","message"]}}};function i(t,e,r,n){return s.apply(this,arguments)}function s(){return(s=o(r.mark((function t(e,n,o,a){return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next="updateJobState"===t.t0?3:"uploadJobData"===t.t0?6:"convertAndUploadJobData"===t.t0?9:"createJob"===t.t0?12:"createCSVAndUploadJobData"===t.t0?15:18;break;case 3:return t.next=5,c(o,n);case 5:return t.abrupt("break",19);case 6:return t.next=8,p(o,n);case 8:return t.abrupt("break",19);case 9:return t.next=11,l(o,n);case 11:return t.abrupt("break",19);case 12:return t.next=14,u(o);case 14:return t.abrupt("break",19);case 15:return t.next=17,d(o,n);case 17:return t.abrupt("break",19);case 18:throw new Error("The method "+e+" is not supported.");case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(t,e,r){return new Promise((function(r,n){try{var o=JSON.stringify({state:"UploadComplete"}),a=new XMLHttpRequest;return a.withCredentials=!0,a.onreadystatechange=function(){if(4===a.readyState){if(200!==a.status)throw new Error("Failed with status ".concat(a.status.toString()," ").concat(a.statusText," and response ").concat(JSON.stringify(a.response)," "));postResult({resultCode:a.status,message:a.statusText})}},a.open("PATCH",t.instanceUrl+"/services/data/"+t.version+"/jobs/ingest/"+e.jobId),a.setRequestHeader("Authorization","Bearer "+t.token),a.setRequestHeader("Content-Type","application/json"),a.send(o)}catch(t){n(t)}}))}function u(t,e,r){return new Promise((function(e,r){try{console.log(t.sfobject);var n=JSON.stringify({object:t.sfobject,contentType:"CSV",operation:"insert",lineEnding:t.le}),o=new XMLHttpRequest;return o.withCredentials=!0,o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)throw new Error("Failed with status ".concat(o.status.toString()," ").concat(o.statusText," and response ").concat(JSON.stringify(o.response)," "));var t=JSON.parse(o.responseText);postResult({jobId:t.id,resultCode:o.status,message:o.statusText})}},o.open("POST",t.instanceUrl+"/services/data/"+t.version+"/jobs/ingest"),o.setRequestHeader("Authorization","Bearer "+t.token),o.setRequestHeader("Content-Type","application/json"),o.send(n)}catch(t){r(t)}}))}function p(t,e,r){return new Promise((function(r,n){try{var o=new XMLHttpRequest;return o.withCredentials=!0,o.onreadystatechange=function(){if(4===o.readyState){if(201!==o.status)throw new Error("Failed with status ".concat(o.status.toString()," ").concat(o.statusText," and response ").concat(JSON.stringify(o.response)," "));postResult({resultCode:o.status,message:o.statusText})}},o.open("PUT",t.instanceUrl+"/services/data/"+t.version+"/jobs/ingest/"+e.jobId+"/batches"),o.setRequestHeader("Authorization","Bearer "+t.token),o.setRequestHeader("Content-Type","text/csv"),o.send(e.csvFile)}catch(t){n(t)}}))}function d(t,e,r){return new Promise((function(r,n){try{var o=new XMLHttpRequest,a=e.csvString.toString();return a=a.replace(new RegExp(/\$LB\//gm),"\n"),o.withCredentials=!0,o.onreadystatechange=function(){if(4===o.readyState){if(201!==o.status)throw new Error("Failed with status ".concat(o.status.toString()," ").concat(o.statusText," and response ").concat(JSON.stringify(o.response)," "));postResult({resultCode:o.status,message:o.statusText})}},o.open("PUT",t.instanceUrl+"/services/data/"+t.version+"/jobs/ingest/"+e.jobId+"/batches"),o.setRequestHeader("Authorization","Bearer "+t.token),o.setRequestHeader("Content-Type","text/csv"),console.log("Posted CSV: "+a),o.send(a)}catch(t){n(t)}}))}function l(t,e,r){return new Promise((function(r,n){try{var o=y.decode(e.csvFileContent.toString().split("<content>")[1].split("</content>")[0]),a=e.oldHeader.toString(),i=e.newHeader.toString(),s=e.sobrId.toString(),c=o.replace(a,"");c=i+(c=c.replace(new RegExp("\n","g"),"\n"+s+","));var u=new XMLHttpRequest;return u.withCredentials=!0,u.onreadystatechange=function(){if(4===u.readyState){if(201!==u.status)throw new Error("Failed with status ".concat(u.status.toString()," ").concat(u.statusText," and response ").concat(JSON.stringify(u.response)," "));postResult({resultCode:u.status,message:u.statusText})}},u.open("PUT",t.instanceUrl+"/services/data/"+t.version+"/jobs/ingest/"+e.jobId+"/batches"),u.setRequestHeader("Authorization","Bearer "+t.token),u.setRequestHeader("Content-Type","text/csv"),u.send(c)}catch(t){n(t)}}))}var h,f,y={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,r,n,o,a,i,s,c="",u=0;for(t=y._utf8_encode(t);u<t.length;)o=(e=t.charCodeAt(u++))>>2,a=(3&e)<<4|(r=t.charCodeAt(u++))>>4,i=(15&r)<<2|(n=t.charCodeAt(u++))>>6,s=63&n,isNaN(r)?i=s=64:isNaN(n)&&(s=64),c=c+this._keyStr.charAt(o)+this._keyStr.charAt(a)+this._keyStr.charAt(i)+this._keyStr.charAt(s);return c},decode:function(t){var e,r,n,o,a,i,s="",c=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<t.length;)e=this._keyStr.indexOf(t.charAt(c++))<<2|(o=this._keyStr.indexOf(t.charAt(c++)))>>4,r=(15&o)<<4|(a=this._keyStr.indexOf(t.charAt(c++)))>>2,n=(3&a)<<6|(i=this._keyStr.indexOf(t.charAt(c++))),s+=String.fromCharCode(e),64!=a&&(s+=String.fromCharCode(r)),64!=i&&(s+=String.fromCharCode(n));return s=y._utf8_decode(s)},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e+=String.fromCharCode(n):n>127&&n<2048?(e+=String.fromCharCode(n>>6|192),e+=String.fromCharCode(63&n|128)):(e+=String.fromCharCode(n>>12|224),e+=String.fromCharCode(n>>6&63|128),e+=String.fromCharCode(63&n|128))}return e},_utf8_decode:function(t){for(var e="",r=0,n=0,o=0,a=0;r<t.length;)(n=t.charCodeAt(r))<128?(e+=String.fromCharCode(n),r++):n>191&&n<224?(o=t.charCodeAt(r+1),e+=String.fromCharCode((31&n)<<6|63&o),r+=2):(o=t.charCodeAt(r+1),a=t.charCodeAt(r+2),e+=String.fromCharCode((15&n)<<12|(63&o)<<6|63&a),r+=3);return e}};metadata={systemName:"SFBulkAPIjobs",displayName:"Salesforce Bulk API Functions",description:"A Utility broker to upload content to the Salesforce BULK API",configuration:{ServiceURL:{displayName:"Service URL",type:"string",value:"https://www.cloudfunctions.net"}}},ondescribe=(h=o(r.mark((function t(e){return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.configuration,postSchema({objects:{jobFunctions:a}});case 2:case"end":return t.stop()}}),t)}))),function(t){return h.apply(this,arguments)}),onexecute=(f=o(r.mark((function t(e){var n,o,a,s,c;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.objectName,o=e.methodName,a=e.parameters,s=e.properties,c=e.configuration,t.t0=n,t.next="jobFunctions"===t.t0?4:7;break;case 4:return t.next=6,i(o,s,a,c);case 6:return t.abrupt("break",8);case 7:throw new Error("The object "+n+" is not supported.");case 8:case"end":return t.stop()}}),t)}))),function(t){return f.apply(this,arguments)})}();
//# sourceMappingURL=SFBulkAPIJobs.js.map