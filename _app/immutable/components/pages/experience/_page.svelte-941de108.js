import{S as Ve,i as Se,s as Pe,k as u,a as y,q as b,l as _,m as v,h as c,c as w,r as k,n as i,b as ve,C as t,O as Ne,u as O,B as Ee,P as We,M as Ae,G as He,Q as qe}from"../../../chunks/index-86cd6b2a.js";import{W as Be}from"../../../chunks/stores-8495006b.js";function ye(o,e,a){const n=o.slice();return n[3]=e[a],n}function we(o,e,a){const n=o.slice();return n[6]=e[a],n}function Ie(o,e){let a,n,d,f,h,E=e[6].company+"",P,N,H,S,T;function q(){return e[2](e[6])}return{key:o,first:null,c(){a=u("div"),n=u("div"),f=y(),h=u("button"),P=b(E),H=y(),this.h()},l(I){a=_(I,"DIV",{class:!0});var m=v(a);n=_(m,"DIV",{class:!0,style:!0}),v(n).forEach(c),f=w(m),h=_(m,"BUTTON",{class:!0,style:!0});var g=v(h);P=k(g,E),g.forEach(c),H=w(m),m.forEach(c),this.h()},h(){i(n,"class","h-0.5 w-full md:h-full md:w-0.5 bg-gray-500"),i(n,"style",d=e[0]===e[6].id-1?"background-color: rgb(252 211 77);":"background-color: rgb(107 114 128);"),i(h,"class","text-left p-2 rounded-sm text-md font-mono w-full hover:bg-gray-800 hover:text-amber-300"),i(h,"style",N=e[0]===e[6].id-1?"color: rgb(252 211 77);":"color: rgb(255 255 255);"),i(a,"class","flex gap-2 flex-col-reverse md:flex-row"),this.first=a},m(I,m){ve(I,a,m),t(a,n),t(a,f),t(a,h),t(h,P),t(a,H),S||(T=He(h,"click",q),S=!0)},p(I,m){e=I,m&3&&d!==(d=e[0]===e[6].id-1?"background-color: rgb(252 211 77);":"background-color: rgb(107 114 128);")&&i(n,"style",d),m&2&&E!==(E=e[6].company+"")&&O(P,E),m&3&&N!==(N=e[0]===e[6].id-1?"color: rgb(252 211 77);":"color: rgb(255 255 255);")&&i(h,"style",N)},d(I){I&&c(a),S=!1,T()}}}function De(o){let e,a=o[3]+"",n;return{c(){e=u("li"),n=b(a)},l(d){e=_(d,"LI",{});var f=v(e);n=k(f,a),f.forEach(c)},m(d,f){ve(d,e,f),t(e,n)},p(d,f){f&3&&a!==(a=d[3]+"")&&O(n,a)},d(d){d&&c(e)}}}function Ce(o){let e,a,n,d,f,h,E,P,N,H,S,T,q,I,m,g=[],me=new Map,se,D,V,W,ae,$=o[1][o[0]].id+"",R,oe,re,j=o[1][o[0]].title+"",X,ne,B,ce,z=o[1][o[0]].company+"",Y,ie,A,F=o[1][o[0]].from+"",Z,de,J=o[1][o[0]].to+"",x,he,C,fe,K,ee=o[1];const pe=l=>l[6].id;for(let l=0;l<ee.length;l+=1){let s=we(o,ee,l),r=pe(s);me.set(r,g[l]=Ie(r,s))}let U=o[1][o[0]].topics,p=[];for(let l=0;l<U.length;l+=1)p[l]=De(ye(o,U,l));return{c(){e=u("div"),a=u("div"),n=y(),d=u("div"),f=u("div"),h=u("h2"),E=u("span"),P=b("02. "),N=b("Experience"),H=y(),S=u("div"),T=y(),q=u("div"),I=y(),m=u("div");for(let l=0;l<g.length;l+=1)g[l].c();se=y(),D=u("div"),V=u("h3"),W=u("span"),ae=b("0"),R=b($),oe=b("."),re=y(),X=b(j),ne=y(),B=u("span"),ce=b("@"),Y=b(z),ie=y(),A=u("h4"),Z=b(F),de=b(" - "),x=b(J),he=y(),C=u("ul");for(let l=0;l<p.length;l+=1)p[l].c();fe=y(),K=u("div"),this.h()},l(l){e=_(l,"DIV",{class:!0});var s=v(e);a=_(s,"DIV",{class:!0}),v(a).forEach(c),n=w(s),d=_(s,"DIV",{class:!0});var r=v(d);f=_(r,"DIV",{class:!0});var L=v(f);h=_(L,"H2",{class:!0});var ue=v(h);E=_(ue,"SPAN",{class:!0});var ge=v(E);P=k(ge,"02. "),ge.forEach(c),N=k(ue,"Experience"),ue.forEach(c),H=w(L),S=_(L,"DIV",{class:!0}),v(S).forEach(c),L.forEach(c),r.forEach(c),T=w(s),q=_(s,"DIV",{class:!0}),v(q).forEach(c),I=w(s),m=_(s,"DIV",{class:!0});var be=v(m);for(let M=0;M<g.length;M+=1)g[M].l(be);be.forEach(c),se=w(s),D=_(s,"DIV",{class:!0});var G=v(D);V=_(G,"H3",{class:!0});var Q=v(V);W=_(Q,"SPAN",{class:!0});var le=v(W);ae=k(le,"0"),R=k(le,$),oe=k(le,"."),le.forEach(c),re=w(Q),X=k(Q,j),ne=w(Q),B=_(Q,"SPAN",{class:!0});var _e=v(B);ce=k(_e,"@"),Y=k(_e,z),_e.forEach(c),Q.forEach(c),ie=w(G),A=_(G,"H4",{class:!0});var te=v(A);Z=k(te,F),de=k(te," - "),x=k(te,J),te.forEach(c),he=w(G),C=_(G,"UL",{class:!0});var ke=v(C);for(let M=0;M<p.length;M+=1)p[M].l(ke);ke.forEach(c),G.forEach(c),fe=w(s),K=_(s,"DIV",{class:!0}),v(K).forEach(c),s.forEach(c),this.h()},h(){i(a,"class","md:col-span-1"),i(E,"class","text-amber-300 font-mono"),i(h,"class","text-white"),i(S,"class","h-0.5 w-1/4 md:w-1/3 bg-gray-700 mt-7"),i(f,"class","hidden sm:flex gap-6 items-center"),i(d,"class","prose col-span-8"),i(q,"class","md:col-span-1"),i(m,"class","col-span-8 md:col-span-2 grid grid-flow-col md:grid-flow-row place-content-center md:place-content-start"),i(W,"class","text-amber-300 md:hidden inline-flex"),i(B,"class","text-amber-300 hidden md:inline-flex"),i(V,"class","text-white"),i(A,"class","text-gray-500"),i(C,"class","text-gray-200"),i(D,"class","col-span-8 md:col-span-5 prose font-mono mt-10 md:mt-0"),i(K,"class","md:col-span-1"),i(e,"class","grid grid-cols-8 md:grid-cols-9 gap-4 -mt-12 lg:mt-20")},m(l,s){ve(l,e,s),t(e,a),t(e,n),t(e,d),t(d,f),t(f,h),t(h,E),t(E,P),t(h,N),t(f,H),t(f,S),t(e,T),t(e,q),t(e,I),t(e,m);for(let r=0;r<g.length;r+=1)g[r].m(m,null);t(e,se),t(e,D),t(D,V),t(V,W),t(W,ae),t(W,R),t(W,oe),t(V,re),t(V,X),t(V,ne),t(V,B),t(B,ce),t(B,Y),t(D,ie),t(D,A),t(A,Z),t(A,de),t(A,x),t(D,he),t(D,C);for(let r=0;r<p.length;r+=1)p[r].m(C,null);t(e,fe),t(e,K)},p(l,[s]){if(s&3&&(ee=l[1],g=Ne(g,s,pe,1,l,ee,me,m,qe,Ie,null,we)),s&3&&$!==($=l[1][l[0]].id+"")&&O(R,$),s&3&&j!==(j=l[1][l[0]].title+"")&&O(X,j),s&3&&z!==(z=l[1][l[0]].company+"")&&O(Y,z),s&3&&F!==(F=l[1][l[0]].from+"")&&O(Z,F),s&3&&J!==(J=l[1][l[0]].to+"")&&O(x,J),s&3){U=l[1][l[0]].topics;let r;for(r=0;r<U.length;r+=1){const L=ye(l,U,r);p[r]?p[r].p(L,s):(p[r]=De(L),p[r].c(),p[r].m(C,null))}for(;r<p.length;r+=1)p[r].d(1);p.length=U.length}},i:Ee,o:Ee,d(l){l&&c(e);for(let s=0;s<g.length;s+=1)g[s].d();We(p,l)}}}function Le(o,e,a){let n;Ae(o,Be,h=>a(1,n=h));let d=0;return[d,n,h=>a(0,d=h.id-1)]}class Te extends Ve{constructor(e){super(),Se(this,e,Le,Ce,Pe,{})}}export{Te as default};
