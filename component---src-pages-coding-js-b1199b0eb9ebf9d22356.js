/*! For license information please see component---src-pages-coding-js-b1199b0eb9ebf9d22356.js.LICENSE.txt */
(self.webpackChunkannaspysz_com=self.webpackChunkannaspysz_com||[]).push([[153],{8:function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},3258:function(e,t,r){"use strict";r.r(t),r.d(t,{render:function(){return O}});var o=window.document,n=window.Math,a=window.HTMLElement,i=window.XMLHttpRequest,l=function(e){return function(t,r,o){var n=e.createElement(t);if(null!=r)for(var a in r){var i=r[a];null!=i&&(null!=n[a]?n[a]=i:n.setAttribute(a,i))}if(null!=o)for(var l=0,c=o.length;l<c;l++){var s=o[l];n.appendChild("string"==typeof s?e.createTextNode(s):s)}return n}},c=l(o),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=function(e){return(""+e).toLowerCase()},u="github.com",f=i&&"prototype"in i&&"withCredentials"in i.prototype,p=f&&a&&"attachShadow"in a.prototype&&!("prototype"in a.prototype.attachShadow),h=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},m=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},g={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#cfd3d6;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd0;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#cacdd0;border-color:rgba(27,31,35,.15);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,35,.15)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#30363d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#21262d;border-color:#30363d}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#bf4b8a}",dark_dimmed:".btn{color:#adbac7;background-color:#30363d;border-color:#444c56;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#373e47;border-color:#444c56}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#ae4c82}"},b=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+g[s(g,t)?t:e]+"}"},v=function(e){if(null==e)return g.light;if(s(g,e))return g[e];var t=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.decodeURIComponent);for(var n={},a=e.split(t),i=0,l=a.length;i<l;i++){var c=a[i];if(""!==c){var s=c.split(r);n[o(s[0])]=null!=s[1]?o(s.slice(1).join(r)):void 0}}return n}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return g[s(g,t["no-preference"])?t["no-preference"]:"light"]+b("light",t.light)+b("dark",t.dark)},y={"comment-discussion":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},package:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'}}},play:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},w=function(e,t){e=d(e).replace(/^octicon-/,""),s(y,e)||(e="mark-github");var r=t>=24&&24 in y[e].heights?24:16,o=y[e].heights[r];return'<svg viewBox="0 0 '+o.width+" "+r+'" width="'+t*o.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+o.path+"</svg>"},x={},k=function(e,t){var r=x[e]||(x[e]=[]);if(!(r.push(t)>1)){var o=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete x[e];t=r.shift();)t.apply(null,arguments)}));if(f){var n=new i;h(n,"abort",o),h(n,"error",o),h(n,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void o(t)}o(200!==this.status,e)})),n.open("GET",e),n.send()}else{var a=this||window;a._=function(e){a._=null,o(200!==e.meta.status,e.data)};var c=l(a.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};h(c,"load",s),h(c,"error",s),c.readyState&&function(e,t,r){var o="readystatechange";h(e,o,(function n(){if(t.test(e.readyState))return m(e,o,n),r.apply(this,arguments)}))}(c,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(c)}}},C=function(e,t,r){var o=l(e.ownerDocument),n=e.appendChild(o("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+v(t["data-color-scheme"]);n.styleSheet?n.styleSheet.cssText=a:n.appendChild(e.ownerDocument.createTextNode(a));var i="large"===d(t["data-size"]),c=o("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:w(t["data-icon"],i?16:14)+"&nbsp;"},[o("span",{},[t["data-text"]||""])]),s=e.appendChild(o("div",{className:"widget"+(i?" widget-lg":"")},[c])),f=c.hostname.replace(/\.$/,"");if(("."+f).substring(f.length-u.length)!=="."+u)return c.removeAttribute("href"),void r(s);var p=(" /"+c.pathname).split(/\/+/);if(((f===u||f==="gist."+u)&&"archive"===p[3]||f===u&&"releases"===p[3]&&("download"===p[4]||"latest"===p[4]&&"download"===p[5])||f==="codeload."+u)&&(c.target="_top"),"true"===d(t["data-show-count"])&&f===u&&"marketplace"!==p[1]&&"sponsors"!==p[1]&&"orgs"!==p[1]&&"users"!==p[1]&&"-"!==p[1]){var h,m;if(!p[2]&&p[1])m="followers",h="?tab=followers";else if(!p[3]&&p[2])m="stargazers_count",h="/stargazers";else if(p[4]||"subscription"!==p[3])if(p[4]||"fork"!==p[3]){if("issues"!==p[3])return void r(s);m="open_issues_count",h="/issues"}else m="forks_count",h="/network/members";else m="subscribers_count",h="/watchers";var g=p[2]?"/repos/"+p[1]+"/"+p[2]:"/users/"+p[1];k.call(this,"https://api.github.com"+g,(function(e,t){if(!e){var n=t[m];s.appendChild(o("a",{className:"social-count",href:t.html_url+h,rel:"noopener",target:"_blank","aria-label":n+" "+m.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(s)}))}else r(s)},z=window.devicePixelRatio||1,E=function(e){return(z>1?n.ceil(n.round(e*z)/z*2)/2:n.ceil(e))||0},_=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},O=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],o=0,n=r.length;o<n;o++){var a="data-"+r[o];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),p){var r=c("span");C(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var a=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});_(a,[0,0]),a.style.border="none";h(a,"load",(function r(){var i,l=a.contentWindow;try{i=l.document.body}catch(c){return void o.body.appendChild(a.parentNode.removeChild(a))}m(a,"load",r),C.call(l,i,e,(function(r){var o=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var o=e.getBoundingClientRect();t=n.max(t,E(o.width)),r=n.max(r,E(o.height))}return[t,r]}(r);a.parentNode.removeChild(a),function(e,t,r){h(e,t,(function o(){return m(e,t,o),r.apply(this,arguments)}))}(a,"load",(function(){_(a,o)})),a.src="https://unpkg.com/github-buttons@2.18.1/dist/buttons.html#"+(a.name=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.encodeURIComponent);var n=[];for(var a in e){var i=e[a];null!=i&&n.push(o(a)+r+o(i))}return n.join(t)}(e)),t(a)}))})),o.body.appendChild(a)}}},3151:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var o=r(7294),n=r(9),a=r(9216),i=r.n(a),l=n.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1th6aac-0"})(["padding:8rem 0 4rem 0;@media(max-width:","){padding:4rem 0 4rem 0;}"],i().breakpointPhone),c=n.default.h1.withConfig({displayName:"style__Title",componentId:"sc-1th6aac-1"})(["text-align:center;font-size:3rem;font-family:'Lato';font-weight:400;color:"," @media(max-width:","){font-size:2rem;}"],i().grey,i().breakpointPhone),s=n.default.h2.withConfig({displayName:"style__Subtitle",componentId:"sc-1th6aac-2"})(["text-align:center;font-size:2rem;font-family:'Lato';font-style:italic;font-weight:100;color:",";@media(max-width:","){font-size:1rem;}"],i().grey,i().breakpointPhone),d=function(e){var t=e.title,r=e.subtitle;return o.createElement(o.Fragment,null,o.createElement(l,null,t&&o.createElement(c,null,t),r&&o.createElement(s,null,r)))}},1250:function(e,t,r){"use strict";r.d(t,{Yb:function(){return i},p2:function(){return l},VO:function(){return c},Dx:function(){return s},xr:function(){return d},xv:function(){return u},o_:function(){return f},Cd:function(){return p}});var o=r(9),n=r(9216),a=r.n(n),i=o.default.div.withConfig({displayName:"repository__RepoGrid",componentId:"sc-1aofobp-0"})(["@media(min-width:","){display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem;}"],a().breakpointPhone),l=(o.default.div.withConfig({displayName:"repository__RepoInfo",componentId:"sc-1aofobp-1"})(["display:flex;align-items:center;justify-content:center;margin-bottom:6rem;"]),o.default.div.withConfig({displayName:"repository__Avatar",componentId:"sc-1aofobp-2"})(["width:100px;height:100px;border-radius:.5rem;border:10px solid #fff;box-shadow:0 0 20px 10px rgb(27 26 26 / 10%);margin-right:1rem;background-color:#F9F9F9;background-size:cover;background-position:center;"]),o.default.p.withConfig({displayName:"repository__Intro",componentId:"sc-1aofobp-3"})(["font-size:1.4rem;line-height:2;color:",";a{color:",";font-weight:400;padding:0;}@media(max-width:","){font-size:1rem;}"],a().text.light,a().primary,a().breakpointPhone)),c=o.default.div.withConfig({displayName:"repository__RepoContent",componentId:"sc-1aofobp-4"})(["border-radius:.5rem;border:1px solid #e1e4e8;margin-bottom:2rem;padding:1rem;font-size:16;transition:all 200ms ease-in-out;&:hover{box-shadow:0px 0px 36px 25px rgb(0 0 0 / 3%);h2 a{color:",";}}"],a().primary),s=o.default.h2.withConfig({displayName:"repository__Title",componentId:"sc-1aofobp-5"})(["margin-bottom:0;margin-top:0;font-size:1.4rem;font-style:italic;font-family:'Lato';font-weight:100;@media(max-width:","){font-size:1rem;}"],a().breakpointPhone),d=o.default.div.withConfig({displayName:"repository__RepoHead",componentId:"sc-1aofobp-6"})(["display:flex;justify-content:space-between;"]),u=o.default.p.withConfig({displayName:"repository__Text",componentId:"sc-1aofobp-7"})(["color:rgb(25 27 29);margin-bottom:1rem;margin-top:.25rem;font-size:1rem;text-transform:capitalize;@media(max-width:","){font-size:.9rem;}"],a().breakpointPhone),f=o.default.span.withConfig({displayName:"repository__FooterItem",componentId:"sc-1aofobp-8"})(["margin-right:.89rem;margin-bottom:1rem;font-size:.9rem;color:#242525;font-family:'Lato';vertical-align:middle;display:inline-block;> *{vertical-align:middle;}> svg{width:16px;height:16px;&.star{fill:#FBC02D;stroke:#FFC107;}}@media(max-width:","){margin-right:.49rem;font-size:.7rem;> svg{width:12px;height:12px;}}"],a().breakpointPhone),p=o.default.span.withConfig({displayName:"repository__Circle",componentId:"sc-1aofobp-9"})(["border-radius:50%;display:inline-block;height:10px;width:10px;position:relative;vertical-align:initial;"])},3710:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var o=r(7294),n=r(1340),a=r(3751),i=r(1250);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=r(4665);var d=r(8);function u(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f(e);if(t){var n=f(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return u(this,r)}}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,s.Z)(e,t)}(l,e);var t,n,a,i=m(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).$=o.createRef(),t._=o.createRef(),t}return t=l,(n=[{key:"render",value:function(){return o.createElement("span",{ref:this.$},o.createElement("a",h(h({},this.props),{},{ref:this._}),this.props.children))}},{key:"componentDidMount",value:function(){this.paint()}},{key:"getSnapshotBeforeUpdate",value:function(){return this.reset(),null}},{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentWillUnmount",value:function(){this.reset()}},{key:"paint",value:function(){var e=this,t=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(r,3258)).then((function(r){(0,r.render)(t.appendChild(e._.current),(function(e){try{t.parentNode.replaceChild(e,t)}catch(t){}}))}))}},{key:"reset",value:function(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}])&&c(t.prototype,n),a&&c(t,a),l}(o.PureComponent),b=function(e){var t=e.repo;return o.createElement(i.xr,null,o.createElement(i.Dx,null,o.createElement("a",{href:"https://github.com"+t.resourcePath,target:"_blank",rel:"noopener noreferrer"},t.name)),o.createElement(g,{href:"https://github.com"+t.resourcePath,"data-icon":"Star","data-size":"large","aria-label":"Star repo on GitHub"},"Star"))},v=function(e){var t=e.repo;return o.createElement("div",null,o.createElement(i.xv,null,t.description||"this repo didn't have any description",t.homepageUrl&&o.createElement(o.Fragment,null," -"," ",o.createElement("a",{href:t.homepageUrl},t.homepageUrl))))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var x=(0,o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,l=w(e,["color","size"]);return o.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}));x.displayName="Star";var k=x;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var E=(0,o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,l=z(e,["color","size"]);return o.createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.createElement("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"}))}));E.displayName="Key";var _=E,O=function(e){var t=e.repo,r=t.languages.edges[0],n=new Date(t.updatedA)-new Date,a=Math.floor(n/864e5),l=t.updatedAt.slice(0,10);return a>-21&&(l=new Intl.RelativeTimeFormat("en",{style:"narrow"}).format(a,"day")),o.createElement("div",{style:{color:"#586069",fontSize:12}},o.createElement(i.o_,null,o.createElement(i.Cd,{style:{backgroundColor:r?r.node.color:"#000"}})," ",r?r.node.name:"undifined"),o.createElement(i.o_,null,o.createElement(k,{className:"star"}),o.createElement("span",null," ",t.stargazers.totalCount," "," ")),t.licenseInfo&&o.createElement(i.o_,null,o.createElement(_,null),o.createElement("span",null," ",t.licenseInfo.name," ")),o.createElement(i.o_,null,"Updated: ",l),t.homepageUrl&&o.createElement(i.o_,null)," ")},F=function(e){var t=e.repo;return o.createElement(i.VO,null,o.createElement(b,{repo:t}),o.createElement(v,{repo:t}),o.createElement(O,{repo:t}))},M=r(3151),S=r(3526),I=function(e){var t=e.data.githubData.data.viewer.repositories;return o.createElement(o.Fragment,null,o.createElement(n.Z,null,o.createElement(a.Z,{title:"Coding"}),o.createElement(S.rm,null,o.createElement(M.Z,{title:"Coding",subtitle:"JS and serverless all the things!"}),o.createElement(i.p2,null,"My main stack consists of JavaScript frameworks: React, Gatsby, and NodeJS. I've worked with Python and Golang in the past, but have forgotten much of the former and wasn't a huge fan of the latter."),o.createElement(i.p2,null,"I've worked on serverless applications since 2018, primarily using AWS services such as Lambda, API/HTTP Gateway, DynamoDB, SQS, SES, and S3. I'm very familiar with serverless architecture and have worked on both the frontend and backend of serverless applications. If you don't believe me, ask Jeremy Daly - I was named a ",o.createElement("a",{href:"https://offbynone.io/issues/105/",target:"_blank",rel:"noreferrer"},"Serverless Star")," ⭐ in his Off-by-none newsletter. I'm an AWS Certified Cloud Practitioner (which, TBH, I only got to get access to the certification lounge at re:Invent 🤷‍♀️☕). One day I hope AWS makes a serverless developer certification, which I will eagerly get."),o.createElement(i.p2,null,"Check out some of my public repositories below:"),o.createElement(i.Yb,null,t.nodes.map((function(e,t){return o.createElement(F,{key:t,repo:e})})).reverse()))))}}}]);
//# sourceMappingURL=component---src-pages-coding-js-b1199b0eb9ebf9d22356.js.map