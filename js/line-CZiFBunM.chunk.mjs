/*! third party licenses: js/vendor.LICENSE.txt */
import{a as h}from"./array-CNYCUCI1.chunk.mjs";import{w as y,c as l}from"./path-D16fQfbf.chunk.mjs";import{o as d}from"./mermaid.core-D5I6XLnz.chunk.mjs";function v(t){return t[0]}function x(t){return t[1]}function L(t,e){var a=l(!0),f=null,i=d,o=null,p=y(r);t=typeof t=="function"?t:t===void 0?v:l(t),e=typeof e=="function"?e:e===void 0?x:l(e);function r(n){var u,s=(n=h(n)).length,g,c=!1,m;for(f==null&&(o=i(m=p())),u=0;u<=s;++u)!(u<s&&a(g=n[u],u,n))===c&&((c=!c)?o.lineStart():o.lineEnd()),c&&o.point(+t(g,u,n),+e(g,u,n));if(m)return o=null,m+""||null}return r.x=function(n){return arguments.length?(t=typeof n=="function"?n:l(+n),r):t},r.y=function(n){return arguments.length?(e=typeof n=="function"?n:l(+n),r):e},r.defined=function(n){return arguments.length?(a=typeof n=="function"?n:l(!!n),r):a},r.curve=function(n){return arguments.length?(i=n,f!=null&&(o=i(f)),r):i},r.context=function(n){return arguments.length?(n==null?f=o=null:o=i(f=n),r):f},r}export{L as l};