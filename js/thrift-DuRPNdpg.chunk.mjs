/*! third party licenses: js/vendor.LICENSE.txt */
import{g as a}from"./emoji-picker-SoWZqoso.chunk.mjs";function c(e,t){for(var s=0;s<t.length;s++){const n=t[s];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(n,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){const t=["bool","byte","i16","i32","i64","double","string","binary"];return{name:"Thrift",keywords:{keyword:["namespace","const","typedef","struct","enum","service","exception","void","oneway","set","list","map","required","optional"],type:t,literal:"true false"},contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"struct enum service exception",end:/\{/,illegal:/\n/,contains:[e.inherit(e.TITLE_MODE,{starts:{endsWithParent:!0,excludeEnd:!0}})]},{begin:"\\b(set|list|map)\\s*<",keywords:{type:[...t,"set","list","map"]},end:">",contains:["self"]}]}}var o=l;const d=a(o),u=c({__proto__:null,default:d},[o]);export{o as a,u as t};