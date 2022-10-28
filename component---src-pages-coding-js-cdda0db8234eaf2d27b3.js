/*! For license information please see component---src-pages-coding-js-cdda0db8234eaf2d27b3.js.LICENSE.txt */
"use strict";(self.webpackChunkannaspysz_com=self.webpackChunkannaspysz_com||[]).push([[153],{3258:function(e,t,o){o.r(t),o.d(t,{render:function(){return S}});var r=window.document,n=window.Math,a=window.HTMLElement,i=window.XMLHttpRequest,l=function(e,t){for(var o=0,r=e.length;o<r;o++)t(e[o])},c=function(e){return function(t,o,r){var n=e.createElement(t);if(null!=o)for(var a in o){var i=o[a];null!=i&&(null!=n[a]?n[a]=i:n.setAttribute(a,i))}return null!=r&&l(r,(function(t){n.appendChild("string"==typeof t?e.createTextNode(t):t)})),n}},s=c(r),d=function(e,t){return{}.hasOwnProperty.call(e,t)},u=function(e){return(""+e).toLowerCase()},f="github.com",p=i&&"prototype"in i&&"withCredentials"in i.prototype,h=p&&a&&"attachShadow"in a.prototype&&!("prototype"in a.prototype.attachShadow),g=function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent("on"+t,o)},m=function(e,t,o){e.removeEventListener?e.removeEventListener(t,o,!1):e.detachEvent("on"+t,o)},b={light:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd1;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(27,31,36,.15);box-shadow:inset 0 .15em .3em rgba(27,31,36,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,36,.15)}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",light_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8);box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:hover,.social-count:focus{color:#0349b4}.octicon-heart{color:#971368}",dark:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #58a6ff;outline-offset:-2px}.btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:hover,.social-count:focus{color:#58a6ff}.octicon-heart{color:#db61a2}",dark_dimmed:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #539bf5;outline-offset:-2px}.btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:hover,.social-count:focus{color:#539bf5}.octicon-heart{color:#c96198}",dark_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #71b7ff;outline-offset:-2px}.btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:hover,.social-count:focus{color:#71b7ff}.octicon-heart{color:#ef6eb1}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+b[d(b,t)?t:e]+"}"},y=function(e){if(null==e)return b.light;if(d(b,e))return b[e];var t=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.decodeURIComponent);var n={};return l(e.split(t),(function(e){if(""!==e){var t=e.split(o);n[r(t[0])]=null!=t[1]?r(t.slice(1).join(o)):void 0}})),n}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return b[d(b,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},w={"comment-discussion":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},package:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'}}},play:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},k=function(e,t){e=u(e).replace(/^octicon-/,""),d(w,e)||(e="mark-github");var o=t>=24&&24 in w[e].heights?24:16,r=w[e].heights[o];return'<svg viewBox="0 0 '+r.width+" "+o+'" width="'+t*r.width/o+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+r.path+"</svg>"},x={},C=function(e,t){var o=x[e]||(x[e]=[]);if(!(o.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete x[e];t=o.shift();)t.apply(null,arguments)}));if(p){var n=new i;g(n,"abort",r),g(n,"error",r),g(n,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void r(t)}r(200!==this.status,e)})),n.open("GET",e),n.send()}else{var a=this||window;a._=function(e){a._=null,r(200!==e.meta.status,e.data)};var l=c(a.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};g(l,"load",s),g(l,"error",s),function(e,t,o){if(null!=e.readyState){var r="readystatechange";g(e,r,(function n(){if(t.test(e.readyState))return m(e,r,n),o.apply(this,arguments)}))}}(l,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(l)}}},z=function(e,t,o){var r=c(e.ownerDocument),n=e.appendChild(r("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+y(t["data-color-scheme"]);n.styleSheet?n.styleSheet.cssText=a:n.appendChild(e.ownerDocument.createTextNode(a));var i="large"===u(t["data-size"]),l=r("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:k(t["data-icon"],i?16:14)+"&nbsp;"},[r("span",{},[t["data-text"]||""])]),s=e.appendChild(r("div",{className:"widget"+(i?" widget-lg":"")},[l])),d=l.hostname.replace(/\.$/,"");if(("."+d).substring(d.length-f.length)!=="."+f)return l.removeAttribute("href"),void o(s);var p=(" /"+l.pathname).split(/\/+/);if(((d===f||d==="gist."+f)&&"archive"===p[3]||d===f&&"releases"===p[3]&&("download"===p[4]||"latest"===p[4]&&"download"===p[5])||d==="codeload."+f)&&(l.target="_top"),"true"===u(t["data-show-count"])&&d===f&&"marketplace"!==p[1]&&"sponsors"!==p[1]&&"orgs"!==p[1]&&"users"!==p[1]&&"-"!==p[1]){var h,g;if(!p[2]&&p[1])g="followers",h="?tab=followers";else if(!p[3]&&p[2])g="stargazers_count",h="/stargazers";else if(p[4]||"subscription"!==p[3])if(p[4]||"fork"!==p[3]){if("issues"!==p[3])return void o(s);g="open_issues_count",h="/issues"}else g="forks_count",h="/network/members";else g="subscribers_count",h="/watchers";var m=p[2]?"/repos/"+p[1]+"/"+p[2]:"/users/"+p[1];C.call(this,"https://api.github.com"+m,(function(e,t){if(!e){var n=t[g];s.appendChild(r("a",{className:"social-count",href:t.html_url+h,rel:"noopener",target:"_blank","aria-label":n+" "+g.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}o(s)}))}else o(s)},E=window.devicePixelRatio||1,_=function(e){return(E>1?n.ceil(n.round(e*E)/E*2)/2:n.ceil(e))||0},O=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},S=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")};return l(["icon","color-scheme","text","size","show-count"],(function(o){var r="data-"+o;t[r]=e.getAttribute(r)})),null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),h){var o=s("span");z(o.attachShadow({mode:"closed"}),e,(function(){t(o)}))}else{var a=s("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});O(a,[0,0]),a.style.border="none";g(a,"load",(function o(){var i,l=a.contentWindow;try{i=l.document.body}catch(c){return void r.body.appendChild(a.parentNode.removeChild(a))}m(a,"load",o),z.call(l,i,e,(function(o){var r=function(e){var t=e.offsetWidth,o=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=n.max(t,_(r.width)),o=n.max(o,_(r.height))}return[t,o]}(o);a.parentNode.removeChild(a),function(e,t,o){g(e,t,(function r(){return m(e,t,r),o.apply(this,arguments)}))}(a,"load",(function(){O(a,r)})),a.src="https://unpkg.com/github-buttons@2.22.0/dist/buttons.html#"+(a.name=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.encodeURIComponent);var n=[];for(var a in e){var i=e[a];null!=i&&n.push(r(a)+o+r(i))}return n.join(t)}(e)),t(a)}))})),r.body.appendChild(a)}}},3527:function(e,t,o){o.d(t,{Z:function(){return d}});var r=o(7294),n=o(3494),a=o(6421),i=o.n(a),l=n.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1th6aac-0"})(["padding:8rem 0 4rem 0;@media (max-width:","){padding:4rem 0 4rem 0;}"],i().breakpointPhone),c=n.default.h1.withConfig({displayName:"style__Title",componentId:"sc-1th6aac-1"})(['text-align:center;font-size:3rem;font-family:"Lato";font-weight:400;@media (max-width:',"){font-size:2rem;}"],i().breakpointPhone),s=n.default.h2.withConfig({displayName:"style__Subtitle",componentId:"sc-1th6aac-2"})(['text-align:center;font-size:2rem;font-family:"Lato";font-style:italic;font-weight:100;@media (max-width:',"){font-size:1rem;}"],i().breakpointPhone),d=function(e){var t=e.title,o=e.subtitle;return r.createElement(r.Fragment,null,r.createElement(l,null,t&&r.createElement(c,null,t),o&&r.createElement(s,null,o)))}},9327:function(e,t,o){o.d(t,{Cd:function(){return p},Dx:function(){return s},VO:function(){return c},Yb:function(){return i},o_:function(){return f},p2:function(){return l},xr:function(){return d},xv:function(){return u}});var r=o(3494),n=o(6421),a=o.n(n),i=r.default.div.withConfig({displayName:"repository__RepoGrid",componentId:"sc-1aofobp-0"})(["@media (min-width:","){display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem;}"],a().breakpointPhone),l=(r.default.div.withConfig({displayName:"repository__RepoInfo",componentId:"sc-1aofobp-1"})(["display:flex;align-items:center;justify-content:center;margin-bottom:6rem;"]),r.default.div.withConfig({displayName:"repository__Avatar",componentId:"sc-1aofobp-2"})(["width:100px;height:100px;border-radius:0.5rem;border:10px solid #fff;box-shadow:0 0 20px 10px rgb(27 26 26 / 10%);margin-right:1rem;background-size:cover;background-position:center;"]),r.default.p.withConfig({displayName:"repository__Intro",componentId:"sc-1aofobp-3"})(["font-size:1.4rem;line-height:2;a{color:",";font-weight:400;padding:0;}@media (max-width:","){font-size:1rem;}"],a().primary,a().breakpointPhone)),c=r.default.div.withConfig({displayName:"repository__RepoContent",componentId:"sc-1aofobp-4"})(["border-radius:0.5rem;border:1px solid #e1e4e8;margin-bottom:2rem;padding:1rem;font-size:16;transition:all 200ms ease-in-out;&:hover{box-shadow:0px 0px 36px 25px rgb(0 0 0 / 3%);h2 a{color:",";}}"],a().primary),s=r.default.h2.withConfig({displayName:"repository__Title",componentId:"sc-1aofobp-5"})(['margin-bottom:0;margin-top:0;font-size:1.4rem;font-style:italic;font-family:"Lato";font-weight:100;@media (max-width:',"){font-size:1rem;}"],a().breakpointPhone),d=r.default.div.withConfig({displayName:"repository__RepoHead",componentId:"sc-1aofobp-6"})(["display:flex;justify-content:space-between;"]),u=r.default.p.withConfig({displayName:"repository__Text",componentId:"sc-1aofobp-7"})(["margin-bottom:1rem;margin-top:0.25rem;font-size:1rem;text-transform:capitalize;@media (max-width:","){font-size:0.9rem;}"],a().breakpointPhone),f=r.default.span.withConfig({displayName:"repository__FooterItem",componentId:"sc-1aofobp-8"})(['margin-right:0.89rem;margin-bottom:1rem;font-size:0.9rem;font-family:"Lato";vertical-align:middle;display:inline-block;> *{vertical-align:middle;}> svg{width:16px;height:16px;&.star{fill:#fbc02d;stroke:#ffc107;}}@media (max-width:',"){margin-right:0.49rem;font-size:0.7rem;> svg{width:12px;height:12px;}}"],a().breakpointPhone),p=r.default.span.withConfig({displayName:"repository__Circle",componentId:"sc-1aofobp-9"})(["border-radius:50%;display:inline-block;height:10px;width:10px;position:relative;vertical-align:initial;"])},9342:function(e,t,o){o.r(t),o.d(t,{default:function(){return j}});var r=o(7294),n=o(3126),a=o(262),i=o(9327);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=o(9611);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=f(e);if(t){var n=f(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return u(this,o)}}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,s.Z)(e,t)}(l,e);var t,n,a,i=g(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).$=r.createRef(),t._=r.createRef(),t}return t=l,(n=[{key:"render",value:function(){return r.createElement("span",{ref:this.$},r.createElement("a",h(h({},this.props),{},{ref:this._}),this.props.children))}},{key:"componentDidMount",value:function(){this.paint()}},{key:"getSnapshotBeforeUpdate",value:function(){return this.reset(),null}},{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentWillUnmount",value:function(){this.reset()}},{key:"paint",value:function(){var e=this,t=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(o.bind(o,3258)).then((function(o){var r=o.render;null!=e._.current&&r(t.appendChild(e._.current),(function(e){try{t.parentNode.replaceChild(e,t)}catch(t){}}))}))}},{key:"reset",value:function(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}])&&c(t.prototype,n),a&&c(t,a),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.PureComponent),b=function(e){var t=e.repo;return r.createElement(i.xr,null,r.createElement(i.Dx,null,r.createElement("a",{href:"https://github.com"+t.resourcePath,target:"_blank",rel:"noopener noreferrer"},t.name)),r.createElement(m,{href:"https://github.com"+t.resourcePath,"data-icon":"Star","data-size":"large","aria-label":"Star repo on GitHub"},"Star"))},v=function(e){var t=e.repo;return r.createElement("div",null,r.createElement(i.xv,null,t.description||"This repo does not have a description",t.homepageUrl&&r.createElement(r.Fragment,null," -"," ",r.createElement("a",{href:t.homepageUrl},t.homepageUrl))))};function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},y.apply(this,arguments)}function w(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var k=(0,r.forwardRef)((function(e,t){var o=e.color,n=void 0===o?"currentColor":o,a=e.size,i=void 0===a?24:a,l=w(e,["color","size"]);return r.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}));k.displayName="Star";var x=k;function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},C.apply(this,arguments)}function z(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var E=(0,r.forwardRef)((function(e,t){var o=e.color,n=void 0===o?"currentColor":o,a=e.size,i=void 0===a?24:a,l=z(e,["color","size"]);return r.createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"}))}));E.displayName="Key";var _=E,O=function(e){var t=e.repo,o=t.languages.edges[0],n=new Date(t.updatedA)-new Date,a=Math.floor(n/864e5),l=t.updatedAt.slice(0,10);return a>-21&&(l=new Intl.RelativeTimeFormat("en",{style:"narrow"}).format(a,"day")),r.createElement("div",{style:{color:"#586069",fontSize:12}},r.createElement(i.o_,null,r.createElement(i.Cd,{style:{backgroundColor:o?o.node.color:"#000"}})," ",o?o.node.name:"undifined"),r.createElement(i.o_,null,r.createElement(x,{className:"star"}),r.createElement("span",null," ",t.stargazers.totalCount," ")),t.licenseInfo&&r.createElement(i.o_,null,r.createElement(_,null),r.createElement("span",null," ",t.licenseInfo.name," ")),r.createElement(i.o_,null,"Updated: ",l),t.homepageUrl&&r.createElement(i.o_,null)," ")},S=function(e){var t=e.repo;return r.createElement(i.VO,null,r.createElement(b,{repo:t}),r.createElement(v,{repo:t}),r.createElement(O,{repo:t}))},I=o(3527),M=o(5152),j=function(e){var t=e.data.githubData.data.viewer.repositories;return r.createElement(r.Fragment,null,r.createElement(n.Z,null,r.createElement(a.Z,{title:"Coding"}),r.createElement(M.rm,null,r.createElement(I.Z,{title:"Coding",subtitle:"JS and serverless all the things!"}),r.createElement(i.p2,null,"My main stack consists of JavaScript frameworks: React, Gatsby, and NodeJS. I upgraded to TypeScript in 2021 and haven't looked back at plain JS since. I've worked with Python and Golang in the past, but have forgotten much of the former and wasn't a huge fan of the latter."),r.createElement(i.p2,null,"I've worked on serverless applications since 2018, primarily using AWS services such as Lambda, API/HTTP Gateway, DynamoDB, SQS, SES, and S3. I'm very familiar with serverless architecture and have worked on both the frontend and backend of serverless applications. If you don't believe me, ask Jeremy Daly - I was named a"," ",r.createElement("a",{href:"https://offbynone.io/issues/105/",target:"_blank",rel:"noreferrer"},"Serverless Star")," ","⭐ in his Off-by-none newsletter. I'm an AWS Certified Cloud Practitioner (which, TBH, I only got to get access to the certification lounge at re:Invent 🤷‍♀️☕). One day I hope AWS makes a serverless developer certification, which I will eagerly get."),r.createElement(i.p2,null,"Check out some of my public repositories below:"),r.createElement(i.Yb,null,t.nodes.map((function(e,t){return r.createElement(S,{key:t,repo:e})})).reverse()))))}}}]);
//# sourceMappingURL=component---src-pages-coding-js-cdda0db8234eaf2d27b3.js.map