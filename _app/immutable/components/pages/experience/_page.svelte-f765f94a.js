import{S as Se,i as Ve,s as Ne,k as u,a as y,q as b,l as _,m,h as c,c as w,r as E,n as i,b as me,D as t,Q as Te,u as L,B as ke,R as Ae,O as He,H as Oe,T as Pe}from"../../../chunks/index-9e829466.js";import{W as We}from"../../../chunks/stores-43f6b1c0.js";function ye(o,e,a){const n=o.slice();return n[3]=e[a],n}function we(o,e,a){const n=o.slice();return n[6]=e[a],n}function Ie(o,e){let a,n,d,f,h,k=e[6].company+"",N,T,O,V,M;function P(){return e[2](e[6])}return{key:o,first:null,c(){a=u("div"),n=u("div"),f=y(),h=u("button"),N=b(k),O=y(),this.h()},l(I){a=_(I,"DIV",{class:!0});var p=m(a);n=_(p,"DIV",{class:!0,style:!0}),m(n).forEach(c),f=w(p),h=_(p,"BUTTON",{class:!0,style:!0});var g=m(h);N=E(g,k),g.forEach(c),O=w(p),p.forEach(c),this.h()},h(){i(n,"class","h-0.5 w-full md:h-full md:w-0.5 bg-gray-500"),i(n,"style",d=e[0]===e[6].id-1?"background-color: rgb(252 211 77);":"background-color: rgb(107 114 128);"),i(h,"class","text-left p-2 rounded-sm text-md font-mono w-full hover:bg-gray-800 hover:text-amber-300"),i(h,"style",T=e[0]===e[6].id-1?"color: rgb(252 211 77);":"color: rgb(255 255 255);"),i(a,"class","flex gap-2 flex-col-reverse md:flex-row"),this.first=a},m(I,p){me(I,a,p),t(a,n),t(a,f),t(a,h),t(h,N),t(a,O),V||(M=Oe(h,"click",P),V=!0)},p(I,p){e=I,p&3&&d!==(d=e[0]===e[6].id-1?"background-color: rgb(252 211 77);":"background-color: rgb(107 114 128);")&&i(n,"style",d),p&2&&k!==(k=e[6].company+"")&&L(N,k),p&3&&T!==(T=e[0]===e[6].id-1?"color: rgb(252 211 77);":"color: rgb(255 255 255);")&&i(h,"style",T)},d(I){I&&c(a),V=!1,M()}}}function De(o){let e,a=o[3]+"",n;return{c(){e=u("li"),n=b(a)},l(d){e=_(d,"LI",{});var f=m(e);n=E(f,a),f.forEach(c)},m(d,f){me(d,e,f),t(e,n)},p(d,f){f&3&&a!==(a=d[3]+"")&&L(n,a)},d(d){d&&c(e)}}}function Ce(o){let e,a,n,d,f,h,k,N,T,O,V,M,P,I,p,g=[],pe=new Map,se,D,S,A,ae,$=o[1][o[0]].id+"",K,oe,re,j=o[1][o[0]].title+"",X,ne,W,ce,z=o[1][o[0]].company+"",Y,ie,H,F=o[1][o[0]].from+"",Z,de,G=o[1][o[0]].to+"",x,he,C,fe,J,ee=o[1];const ve=l=>l[6].id;for(let l=0;l<ee.length;l+=1){let s=we(o,ee,l),r=ve(s);pe.set(r,g[l]=Ie(r,s))}let U=o[1][o[0]].topics,v=[];for(let l=0;l<U.length;l+=1)v[l]=De(ye(o,U,l));return{c(){e=u("div"),a=u("div"),n=y(),d=u("section"),f=u("div"),h=u("h2"),k=u("span"),N=b("02. "),T=b("Experience"),O=y(),V=u("div"),M=y(),P=u("div"),I=y(),p=u("section");for(let l=0;l<g.length;l+=1)g[l].c();se=y(),D=u("main"),S=u("h3"),A=u("span"),ae=b("0"),K=b($),oe=b("."),re=y(),X=b(j),ne=y(),W=u("span"),ce=b("@"),Y=b(z),ie=y(),H=u("h4"),Z=b(F),de=b(" - "),x=b(G),he=y(),C=u("ul");for(let l=0;l<v.length;l+=1)v[l].c();fe=y(),J=u("div"),this.h()},l(l){e=_(l,"DIV",{class:!0});var s=m(e);a=_(s,"DIV",{class:!0}),m(a).forEach(c),n=w(s),d=_(s,"SECTION",{class:!0});var r=m(d);f=_(r,"DIV",{class:!0});var q=m(f);h=_(q,"H2",{class:!0});var ue=m(h);k=_(ue,"SPAN",{class:!0});var ge=m(k);N=E(ge,"02. "),ge.forEach(c),T=E(ue,"Experience"),ue.forEach(c),O=w(q),V=_(q,"DIV",{class:!0}),m(V).forEach(c),q.forEach(c),r.forEach(c),M=w(s),P=_(s,"DIV",{class:!0}),m(P).forEach(c),I=w(s),p=_(s,"SECTION",{class:!0});var be=m(p);for(let B=0;B<g.length;B+=1)g[B].l(be);be.forEach(c),se=w(s),D=_(s,"MAIN",{class:!0});var Q=m(D);S=_(Q,"H3",{class:!0});var R=m(S);A=_(R,"SPAN",{class:!0});var le=m(A);ae=E(le,"0"),K=E(le,$),oe=E(le,"."),le.forEach(c),re=w(R),X=E(R,j),ne=w(R),W=_(R,"SPAN",{class:!0});var _e=m(W);ce=E(_e,"@"),Y=E(_e,z),_e.forEach(c),R.forEach(c),ie=w(Q),H=_(Q,"H4",{class:!0});var te=m(H);Z=E(te,F),de=E(te," - "),x=E(te,G),te.forEach(c),he=w(Q),C=_(Q,"UL",{class:!0});var Ee=m(C);for(let B=0;B<v.length;B+=1)v[B].l(Ee);Ee.forEach(c),Q.forEach(c),fe=w(s),J=_(s,"DIV",{class:!0}),m(J).forEach(c),s.forEach(c),this.h()},h(){i(a,"class","md:col-span-1"),i(k,"class","text-amber-300 font-mono"),i(h,"class","text-white"),i(V,"class","h-0.5 w-1/4 md:w-1/3 bg-gray-700 mt-7"),i(f,"class","hidden sm:flex gap-6 items-center"),i(d,"class","prose col-span-8"),i(P,"class","md:col-span-1"),i(p,"class","col-span-8 md:col-span-2 grid grid-flow-col md:grid-flow-row place-content-center md:place-content-start"),i(A,"class","text-amber-300 md:hidden inline-flex"),i(W,"class","text-amber-300 hidden md:inline-flex"),i(S,"class","text-white"),i(H,"class","text-gray-500"),i(C,"class","text-gray-200"),i(D,"class","col-span-8 md:col-span-5 prose font-mono mt-10 md:mt-0"),i(J,"class","md:col-span-1"),i(e,"class","grid grid-cols-8 md:grid-cols-9 gap-4 -mt-12 lg:mt-20")},m(l,s){me(l,e,s),t(e,a),t(e,n),t(e,d),t(d,f),t(f,h),t(h,k),t(k,N),t(h,T),t(f,O),t(f,V),t(e,M),t(e,P),t(e,I),t(e,p);for(let r=0;r<g.length;r+=1)g[r].m(p,null);t(e,se),t(e,D),t(D,S),t(S,A),t(A,ae),t(A,K),t(A,oe),t(S,re),t(S,X),t(S,ne),t(S,W),t(W,ce),t(W,Y),t(D,ie),t(D,H),t(H,Z),t(H,de),t(H,x),t(D,he),t(D,C);for(let r=0;r<v.length;r+=1)v[r].m(C,null);t(e,fe),t(e,J)},p(l,[s]){if(s&3&&(ee=l[1],g=Te(g,s,ve,1,l,ee,pe,p,Pe,Ie,null,we)),s&3&&$!==($=l[1][l[0]].id+"")&&L(K,$),s&3&&j!==(j=l[1][l[0]].title+"")&&L(X,j),s&3&&z!==(z=l[1][l[0]].company+"")&&L(Y,z),s&3&&F!==(F=l[1][l[0]].from+"")&&L(Z,F),s&3&&G!==(G=l[1][l[0]].to+"")&&L(x,G),s&3){U=l[1][l[0]].topics;let r;for(r=0;r<U.length;r+=1){const q=ye(l,U,r);v[r]?v[r].p(q,s):(v[r]=De(q),v[r].c(),v[r].m(C,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=U.length}},i:ke,o:ke,d(l){l&&c(e);for(let s=0;s<g.length;s+=1)g[s].d();Ae(v,l)}}}function qe(o,e,a){let n;He(o,We,h=>a(1,n=h));let d=0;return[d,n,h=>a(0,d=h.id-1)]}class Me extends Se{constructor(e){super(),Ve(this,e,qe,Ce,Ne,{})}}export{Me as default};