import{T as b}from"./index-a4996c72.js";function l(a){const p=a-1;return p*p*p+1}function y(a,{delay:p=0,duration:i=400,easing:n=b}={}){const t=+getComputedStyle(a).opacity;return{delay:p,duration:i,easing:n,css:r=>`opacity: ${r*t}`}}function $(a,{delay:p=0,duration:i=400,easing:n=l}={}){const t=getComputedStyle(a),r=+t.opacity,e=parseFloat(t.height),d=parseFloat(t.paddingTop),s=parseFloat(t.paddingBottom),c=parseFloat(t.marginTop),m=parseFloat(t.marginBottom),g=parseFloat(t.borderTopWidth),h=parseFloat(t.borderBottomWidth);return{delay:p,duration:i,easing:n,css:o=>`overflow: hidden;opacity: ${Math.min(o*20,1)*r};height: ${o*e}px;padding-top: ${o*d}px;padding-bottom: ${o*s}px;margin-top: ${o*c}px;margin-bottom: ${o*m}px;border-top-width: ${o*g}px;border-bottom-width: ${o*h}px;`}}export{y as f,$ as s};
