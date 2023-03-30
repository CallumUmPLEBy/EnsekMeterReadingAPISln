"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6987],{10:(Xe,Le,f)=>{f.d(Le,{q:()=>Ve});var d=f(52423),q=f(68404),Ce=f(72648);const pe=10,Ve=({colorPalette:_,min:ne,max:me,display:H,hoverValue:h,useStopsPercentage:xe})=>{const[he,ae]=(0,q.useState)([]),[ie,se]=(0,q.useState)({isShown:!1,value:0}),[ce,we]=(0,q.useState)(null),He=(0,Ce.l4)(),ue=Ee(He,he);(0,q.useEffect)(()=>{ae(Se({colorArray:_,stops:pe,useStopsPercentage:xe}))},[_,xe]);const Oe=de=>{const Re=de.nativeEvent.offsetX,Fe=de.currentTarget.offsetWidth,be=Math.floor(Re*100/Fe+1),Ne=Math.floor((me-ne)*be/100+ne);se({isShown:!0,value:Ne}),we(be)},Ie=()=>{se({isShown:!1,value:0})};return(0,q.useEffect)(()=>{we(h==null?null:V((h-ne)/(me-ne)))},[h,ne,me]),q.createElement("div",{className:ue.scaleWrapper,onMouseMove:Oe,onMouseLeave:Ie},q.createElement("div",{className:ue.scaleGradient},H&&(ie.isShown||h!==void 0)&&q.createElement("div",{className:ue.followerContainer},q.createElement("div",{className:ue.follower,style:{left:`${ce}%`}}))),H&&q.createElement("div",{className:ue.followerContainer},q.createElement("div",{className:ue.legendValues},q.createElement("span",null,H(ne)),q.createElement("span",null,H(me))),ce!=null&&(ie.isShown||h!==void 0)&&q.createElement("span",{className:ue.hoverValue,style:{left:`${ce}%`}},H(h??ie.value))))},Se=({colorArray:_,stops:ne,useStopsPercentage:me=!0})=>{const H=_.length;if(me&&H<=20){const ae=1/H*100;let ie=0;const se=[];for(const ce of _)ie>0?se.push(`${ce} ${ie}%`):se.push(ce),ie+=ae,se.push(`${ce} ${ie}%`);return se}const h=_[H-1],xe=Math.ceil(H/ne),he=new Set;for(let ae=0;ae<H;ae+=xe)he.add(_[ae]);return he.add(h),[...he]};function V(_){return _>1?100:_<0?0:_*100}const Ee=(_,ne)=>({scaleWrapper:d.css`
    width: 100%;
    font-size: 11px;
    opacity: 1;
  `,scaleGradient:d.css`
    background: linear-gradient(90deg, ${ne.join()});
    height: 10px;
    pointer-events: none;
  `,legendValues:d.css`
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  `,hoverValue:d.css`
    position: absolute;
    margin-top: -14px;
    padding: 3px 15px;
    background: ${_.colors.background.primary};
    transform: translateX(-50%);
  `,followerContainer:d.css`
    position: relative;
    pointer-events: none;
    white-space: nowrap;
  `,follower:d.css`
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 2px solid ${_.colors.text.primary};
    margin-top: 5px;
  `})},28975:(Xe,Le,f)=>{f.r(Le),f.d(Le,{plugin:()=>vt});var d=f(68404),q=f(48513),Ce=f(68061),pe=f(14582),Ve=f(78798),Se=f(35645),V=f(40538),Ee=f(34315),_=f(91511),ne=f(10),me=f(90024),H=f(77564),h=f(35585),xe=f(52423),he=f(36998),ae=f(88432),ie=f(87670),se=f(72648),ce=f(60325),we=f(729),He=f(3200),ue=f(85511),Oe=f(20888),Ie=f(50796),de=f(20112),Re=f(89890),Fe=f(52081),be=f(31403),Ne=f(9398),Ge=f(19942);const qe=e=>e.hover.seriesIdx===2?d.createElement(Ge.H,{data:e.data.exemplars,rowIndex:e.hover.dataIdx,header:"Exemplar"}):d.createElement(_e,{...e}),_e=({data:e,hover:l,showHistogram:a})=>{const o=l.dataIdx,t=e.heatmap?.fields[0],n=e.heatmap?.fields[1],i=e.heatmap?.fields[2],c=s=>{if(t?.display)return(0,de.zc)(t.display(s));if(t?.type===pe.fS.time){const p="YYYY-MM-DD HH:mm:ss";return(0,Ne.h4)().getCurrent()?.formatDate(s,p)}return`${s}`},C=t?.values.toArray(),x=n?.values.toArray(),w=i?.values.toArray(),R=(0,H.d8)(e.heatmap),E=n?.display?s=>(0,de.zc)(n.display(s)):s=>`${s}`,J=o%e.yBucketCount;let F,K,b;if(R.yOrdinalDisplay){const s=e.yLayout===h.D.le?J-1:J,p=e.yLayout===h.D.le?J:J+1;F=s<0?R.yMinDisplay:`${R.yOrdinalDisplay[s]}`,K=`${R.yOrdinalDisplay[p]}`,(!R.yOrdinalLabel||Number.isNaN(+R.yOrdinalLabel[0]))&&(b=e.yLayout===h.D.le?K:F)}else{const s=x?.[J];if(e.yLayout===h.D.le)if(K=`${s}`,e.yLog){let z=(e.yLog===2?Math.log2:Math.log10)(s)-1/e.yLogSplit;F=`${e.yLog**z}`}else F=`${s-e.yBucketSize}`;else if(F=`${s}`,e.yLog){let z=(e.yLog===2?Math.log2:Math.log10)(s)+1/e.yLogSplit;K=`${e.yLog**z}`}else K=`${s+e.yBucketSize}`}let M,D;e.xLayout===h.D.le?(D=C?.[o],M=D-e.xBucketSize):(M=C?.[o],D=M+e.xBucketSize);const B=w?.[o],W=e.heatmap?.fields.filter(s=>!Boolean(s.config.custom?.hideFrom?.tooltip)),A=[],$=new Set;for(const s of W??[])if(s.getLinks){const p=s.values.get(o),z=s.display?s.display(p):{text:`${p}`,numeric:+p};s.getLinks({calculatedValue:z,valueRowIndex:o}).forEach(G=>{const T=`${G.title}/${G.href}`;$.has(T)||(A.push(G),$.add(T))})}let P=(0,d.useRef)(null),N=150,O=50,U=Math.round(N*devicePixelRatio),v=Math.round(O*devicePixelRatio);(0,d.useEffect)(()=>{if(a){let s=P.current?.getContext("2d");if(s&&C&&x&&w){let p=o;for(;C[p--]===C[o];);p++;let z=p+e.yBucketCount,G=0,T=p;for(;T<z;){let S=w[T];G=Math.max(G,S),T++}let j=new Path2D,Z=new Path2D;T=p;let X=0;for(;T<z;){let S=w[T];if(S>0){let le=S/G,oe=X/(e.yBucketCount+1);(T===o?j:Z).rect(Math.round(U*oe),Math.round(v*(1-le)),Math.round(U/e.yBucketCount),Math.round(v*le))}T++,X++}s.clearRect(0,0,U,v),s.fillStyle="#ffffff80",s.fill(Z),s.fillStyle="#ff000080",s.fill(j)}}},[o]);const[ee]=(0,d.useState)(()=>e.heatmap?.meta?.type===ae.P.HeatmapCells&&!(0,H.qJ)(e.heatmap));if(ee)return d.createElement("div",null,d.createElement(Ge.H,{data:e.heatmap,rowIndex:o}));const te=()=>{if(b)return d.createElement("div",null,"Name: ",b);switch(e.yLayout){case h.D.unknown:return d.createElement("div",null,E(F))}return d.createElement("div",null,"Bucket: ",E(F)," - ",E(K))};return d.createElement(d.Fragment,null,d.createElement("div",null,d.createElement("div",null,c(M)),e.xLayout!==h.D.unknown&&d.createElement("div",null,c(D))),a&&d.createElement("canvas",{width:U,height:v,ref:P,style:{width:U+"px",height:v+"px"}}),d.createElement("div",null,te(),d.createElement("div",null,(0,Re.C)(i,e.heatmap),": ",e.display(B))),A.length>0&&d.createElement(Fe.wc,null,A.map((s,p)=>d.createElement(be.Qj,{key:p,icon:"external-link-alt",target:s.target,href:s.href,onClick:s.onClick,fill:"text",style:{width:"100%"}},s.title))))};var et=f(98234),tt=f(36512),De=f(75974),$e=f(55294),ye=f(15128),at=f(29431),lt=f(13347),Ye=f(60892);function nt(e){const{dataRef:l,theme:a,eventBus:o,onhover:t,onclick:n,onzoom:i,isToolTipOpen:c,timeZone:C,getTimeRange:x,palette:w,cellGap:R,hideLE:E,hideGE:J,yAxisConfig:F,ySizeDivisor:K,sync:b}=e,M="x";let D="time",B=!0;l.current?.heatmap?.fields[0].type!==pe.fS.time&&(D=l.current?.heatmap?.fields[0].config?.unit??"x",B=!1);const W=devicePixelRatio;let A=l.current?.heatmap?.meta?.type;const $=a.visualization.getColorByName(e.exemplarColor);let P,N,O=new lt.U(C),U;O.addHook("init",r=>{r.root.querySelectorAll(".u-cursor-pt").forEach(m=>{Object.assign(m.style,{borderRadius:"0",border:"1px solid white",background:"transparent"})}),n&&r.over.addEventListener("mouseup",m=>{r.cursor.drag._x||r.cursor.drag._y||n(m)},!0)}),i&&O.addHook("setSelect",r=>{i({xMin:r.posToVal(r.select.left,M),xMax:r.posToVal(r.select.left+r.select.width,M)}),r.setSelect({left:0,top:0,width:0,height:0},!1)}),B&&O.addHook("setData",r=>{let{min:m,max:u}=r.scales.x,y=x().from.valueOf(),g=x().to.valueOf();(m!==y||u!==g)&&queueMicrotask(()=>{r.setScale(M,{min:y,max:g})})}),O.addHook("syncRect",(r,m)=>{U=m});const v={point:{[D]:null},data:l.current?.heatmap},ee=new $e.es(v);let te;t&&O.addHook("setLegend",r=>{if(r.cursor.idxs!=null)for(let m=0;m<r.cursor.idxs.length;m++){const u=r.cursor.idxs[m];if(u!=null){const{left:y,top:g}=r.cursor;v.rowIndex=u,v.point[D]=r.posToVal(y,M),o.publish(ee),c.current||(te&&(clearTimeout(te),te=0),t({seriesIdx:m,dataIdx:u,pageX:U.left+y,pageY:U.top+g}));return}}c.current||te||(te=setTimeout(()=>{t(null),v.rowIndex=void 0,v.point[D]=null,o.publish(ee)},100))}),O.addHook("drawClear",r=>{P=P||new Ye.lW(0,0,r.bbox.width,r.bbox.height),P.clear(),r.series.forEach((m,u)=>{u>0&&(m._paths=null)})}),O.setMode(2),O.addScale({scaleKey:M,isTime:B,orientation:V.wN.Horizontal,direction:V.bQ.Right,range:(r,m,u)=>{if(B)return[x().from.valueOf(),x().to.valueOf()];if(l.current?.xLayout===h.D.le)return[m-l.current?.xBucketSize,u];if(l.current?.xLayout===h.D.ge)return[m,u+l.current?.xBucketSize];{let y=l.current?.xBucketSize/2;return[m-y,u+y]}}});let s;if(!B){s=[];for(let r=0;r<10;r++)s.push(r*l.current?.xBucketSize)}O.addAxis({scaleKey:M,placement:V.LB.Bottom,incrs:s,isTime:B,theme:a,timeZone:C});const p=l.current?.heatmap?.fields[1];if(!p)return O;const G=p.config?.custom?.scaleDistribution??{type:V.wf.Linear},T=Boolean(F.reverse),j=A===ae.P.HeatmapCells&&!(0,H.qJ)(l.current?.heatmap),Z=G.type!==V.wf.Linear||j,X=(0,H.d8)(l.current?.heatmap).yOrdinalDisplay!=null,S="y_"+(Math.random()+1).toString(36).substring(7);O.addScale({scaleKey:S,isTime:!1,orientation:V.wN.Vertical,direction:T?V.bQ.Down:V.bQ.Up,distribution:Z?V.wf.Log:V.wf.Linear,log:G.log??2,range:j?(r,m,u)=>{let y,g;if([y,g]=Z?De.Z.rangeLog(m,u,G.log??2,!0):[m,u],Z&&!X){let k=r.scales[S].log,Y=k===2?Math.log2:Math.log10,{min:I,max:fe}=F;if(I!=null&&I>0){let ge=Y(I);y=k**(0,ye.mB)(ge,1)}if(fe!=null&&fe>0){let ge=Y(fe);g=k**(0,ye.UO)(ge,1)}}return[y,g]}:(r,m,u)=>{let y=m,g=u,{min:k,max:Y}=F;if(Z){let I=r.scales[S].log,fe=!1,ge=!1,Ae=I===2?Math.log2:Math.log10;if(K!==1){let ve=Ae(m),Ze=Ae(u);Number.isInteger(ve)||(y=I**(0,ye.mB)(ve,1),fe=!0),Number.isInteger(Ze)||(g=I**(0,ye.UO)(Ze,1),ge=!0)}if(l.current?.yLayout===h.D.le?fe||(y/=I):l.current?.yLayout===h.D.ge?ge||(g*=I):(y/=I/2,g*=I/2),!X){if(k!=null&&k>0){let ve=Ae(k);y=I**(0,ye.mB)(ve,1)}if(Y!=null&&Y>0){let ve=Ae(Y);g=I**(0,ye.UO)(ve,1)}}}else{let I=l.current?.yBucketSize;I===0&&(I=1),I&&(l.current?.yLayout===h.D.le?y-=I:l.current?.yLayout===h.D.ge?g+=I:(y-=I/2,g+=I/2)),X||(y=k??y,g=Y??g)}return[y,g]}});const le=p.display??(0,de.Cf)("short");O.addAxis({scaleKey:S,show:F.axisPlacement!==V.LB.Hidden,placement:F.axisPlacement||V.LB.Left,size:F.axisWidth||null,label:F.axisLabel,theme:a,formatValue:(r,m)=>(0,de.zc)(le(r,m)),splits:X?r=>{const m=(0,H.d8)(l.current?.heatmap);if(!m.yOrdinalDisplay)return[0,1];let u=m.yOrdinalDisplay.map((y,g)=>g);switch(l.current?.yLayout){case h.D.le:u.unshift(-1);break;case h.D.ge:u.push(u.length);break}if(r.height<60)u=[u[0],u[u.length-1]];else for(;u.length>3&&(r.height-15)/u.length<10;)u=u.filter((y,g)=>g%2===0);return u}:void 0,values:X?(r,m)=>{const u=(0,H.d8)(l.current?.heatmap);return u.yOrdinalDisplay?m.map(y=>y<0?u.yMinDisplay??"":u.yOrdinalDisplay[y]??""):m}:void 0});const oe=j?st:ot;O.addSeries({facets:[{scale:M,auto:!0,sorted:1},{scale:S,auto:!0}],pathBuilder:oe({each:(r,m,u,y,g,k,Y)=>{P.add({x:y-r.bbox.left,y:g-r.bbox.top,w:k,h:Y,sidx:m,didx:u})},gap:R,hideLE:E,hideGE:J,xAlign:l.current?.xLayout===h.D.le?-1:l.current?.xLayout===h.D.ge?1:0,yAlign:(l.current?.yLayout===h.D.le?-1:l.current?.yLayout===h.D.ge?1:0)*(T?-1:1),ySizeDivisor:K,disp:{fill:{values:(r,m)=>{let u=j?3:2;return rt(r.data[m][u],w,l.current?.minValue,l.current?.maxValue)},index:w}}}),theme:a,scaleKey:""}),O.addSeries({facets:[{scale:M,auto:!0,sorted:1},{scale:S,auto:!0}],pathBuilder:it({each:(r,m,u,y,g,k,Y)=>{P.add({x:y-r.bbox.left,y:g-r.bbox.top,w:k,h:Y,sidx:m,didx:u})}},$),theme:a,scaleKey:""});const Q={drag:{x:!0,y:!1,setScale:!1},dataIdx:(r,m)=>{if(m===1){N=null;let u=r.cursor.left*W,y=r.cursor.top*W;P.get(u,y,1,1,g=>{(0,Ye.Pn)(u,y,g.x,g.y,g.x+g.w,g.y+g.h)&&(N=g)})}return N&&m===N.sidx?N.didx:null},points:{fill:"rgba(255,255,255, 0.3)",bbox:(r,m)=>{let u=N&&m===N.sidx;return{left:u?N.x/W:-10,top:u?N.y/W:-10,width:u?N.w/W:0,height:u?N.h/W:0}}}};return b&&b()!==at.m.Off&&(Q.sync={key:"__global_",scales:[M,S],filters:{pub:(r,m,u,y,g,k,Y)=>(u<0?(v.point[D]=null,o.publish(new $e.xH)):(v.point[D]=m.posToVal(u,M),o.publish(ee)),!0)}},O.setSync()),O.setCursor(Q),O}const We=4;function ot(e){const{disp:l,each:a,gap:o=1,hideLE:t=-1/0,hideGE:n=1/0,xAlign:i=1,yAlign:c=1,ySizeDivisor:C=1}=e,x=devicePixelRatio,w=o>=We?Math.round:E=>E,R=Math.round(o*x);return(E,J)=>(De.Z.orient(E,J,(F,K,b,M,D,B,W,A,$,P,N,O,U,v,ee)=>{let te=E.data[J];const s=te[0],p=te[1],z=te[2],G=s.length;let T=l.fill.values(E,J),j=l.fill.index??[...new Set(T)],Z=j.map(k=>new Path2D),X=G-p.lastIndexOf(p[0]),S=G/X,le=p[1]-p[0]||D.max-D.min,oe=s[X]-s[0],Q,r;M.distr===3?Q=Math.abs(B(s[0]*M.log,M,P,A)-B(s[0],M,P,A)):Q=Math.abs(B(oe,M,P,A)-B(0,M,P,A)),D.distr===3?r=Math.abs(W(p[0]*D.log,D,N,$)-W(p[0],D,N,$))/C:r=Math.abs(W(le,D,N,$)-W(0,D,N,$))/C,Q=Math.max(1,w(Q-R)),r=Math.max(1,w(r-R));let m=i===-1?-Q:i===0?-Q/2:0,u=c===1?-r:c===0?-r/2:0,y=p.slice(0,X).map(k=>w(W(k,D,N,$)+u)),g=Array.from({length:S},(k,Y)=>w(B(s[Y*X],M,P,A)+m));for(let k=0;k<G;k++)if(z[k]>t&&z[k]<n){let Y=g[~~(k/X)],I=y[k%X],fe=Z[T[k]];v(fe,Y,I,Q,r),a(E,1,k,Y,I,Q,r)}return E.ctx.save(),E.ctx.rect(E.bbox.left,E.bbox.top,E.bbox.width,E.bbox.height),E.ctx.clip(),Z.forEach((k,Y)=>{E.ctx.fillStyle=j[Y],E.ctx.fill(k)}),E.ctx.restore(),null}),null)}function it(e,l){return(a,o)=>(De.Z.orient(a,o,(t,n,i,c,C,x,w,R,E,J,F,K,b,M,D)=>{let B=new Path2D,W=[B],A=[l??"rgba(255,0,255,0.7)"];for(let $=0;$<n.length;$++){let P=i[$];P-=.5;let N=Math.round(Math.random())*2-1;P+=N*.5*Math.random();let O=x(n[$],c,J,R),U=w(P,C,F,E),v=8,ee=8;M(B,O-v/2,U-ee/2,v,ee),e.each(a,o,$,O-v/2,U-ee/2,v,ee)}a.ctx.save(),a.ctx.rect(a.bbox.left,a.bbox.top,a.bbox.width,a.bbox.height),a.ctx.clip(),W.forEach(($,P)=>{a.ctx.fillStyle=A[P],a.ctx.fill($)}),a.ctx.restore()}),null)}function st(e){const{disp:l,each:a,gap:o=1,hideLE:t=-1/0,hideGE:n=1/0}=e,i=devicePixelRatio,c=o>=We?Math.round:x=>x,C=Math.round(o*i);return(x,w)=>(De.Z.orient(x,w,(R,E,J,F,K,b,M,D,B,W,A,$,P,N,O)=>{let U=x.data[w];const v=U[0],ee=U[1],te=U[2],s=U[3],p=v.length;let z=l.fill.values(x,w),G=l.fill.index??[...new Set(z)],T=G.map(S=>new Path2D),j=new Map,Z=new Map;for(let S=0;S<v.length;S++){let le=v[S],oe=ee[S],Q=te[S];j.has(le)||j.set(le,c(b(le,F,W,D))),Z.has(oe)||Z.set(oe,c(M(oe,K,A,B))),Z.has(Q)||Z.set(Q,c(M(Q,K,A,B)))}let X=j.get(v.find(S=>S!==v[0]))-j.get(v[0]);for(let S=0;S<p;S++){if(s[S]<=t||s[S]>=n)continue;let le=v[S],oe=ee[S],Q=te[S],r=j.get(le),m=Z.get(oe),u=Z.get(Q),y=X,g=m-u;y=Math.max(1,y-C),g=Math.max(1,g-C);let k=r,Y=m,I=T[z[S]];N(I,k,Y,y,g),a(x,1,S,k,Y,y,g)}x.ctx.save(),x.ctx.rect(x.bbox.left,x.bbox.top,x.bbox.width,x.bbox.height),x.ctx.clip(),T.forEach((S,le)=>{x.ctx.fillStyle=G[le],x.ctx.fill(S)}),x.ctx.restore()}),null)}const Ue=(e,l,a,o=-1/0,t=1/0)=>{if(l==null){l=1/0;for(let n=0;n<e.length;n++)e[n]>o&&e[n]<t&&(l=Math.min(l,e[n]))}if(a==null){a=-1/0;for(let n=0;n<e.length;n++)e[n]>o&&e[n]<t&&(a=Math.max(a,e[n]))}return[l,a]},rt=(e,l,a,o)=>{let t=Math.max(o-a,1),n=l.length,i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]<a?0:e[c]>o?n-1:Math.min(n-1,Math.floor(n*(e[c]-a)/t));return i};function ze(e,l,a,o){let t=e.series;if(!t?.length)return{};const n=e.annotations?.find(c=>c.name==="exemplar");if(o&&n?.fields.forEach((c,C)=>{n.fields[C].getLinks=o(n,c)}),l.calculate)return Te((0,H.xf)(t,l.calculation??{}),n,l,a);let i;for(const c of t)switch(c.meta?.type){case ae.P.HeatmapCells:return(0,H.qJ)(c)?Te(c,n,l,a):ct(c,n,l,a);case ae.P.HeatmapRows:i=c}return i||(t.length>1?i=[(0,et._9)({frames:t})][0]:i=t[0]),Te((0,H.Cj)({unit:l.yAxis?.unit,decimals:l.yAxis?.decimals,...l.rowsFrame,frame:i}),n,l,a)}const ct=(e,l,a,o)=>{if(e.meta?.type!==ae.P.HeatmapCells||(0,H.qJ)(e))return{warning:"Expected sparse heatmap format",heatmap:e};ke(e.fields[1],a.yAxis,o);const t=ke(e.fields[3],a.cellValues,o);let[n,i]=Ue(e.fields[3].values.toArray(),a.color.min,a.color.max,a.filterValues?.le,a.filterValues?.ge);return{heatmap:e,minValue:n,maxValue:i,exemplars:l,display:c=>(0,de.zc)(t(c))}},Te=(e,l,a,o)=>{if(e.meta?.type!==ae.P.HeatmapCells)return{warning:"Expected heatmap scanlines format",heatmap:e};if(e.fields.length<2||e.length<2)return{heatmap:e};const t=(0,H.d8)(e);let n,i,c;for(const A of e.fields)switch(A.name){case"y":i=A.name;case"yMin":case"yMax":{i||(i=A.name),t.yOrdinalDisplay==null&&ke(A,a.yAxis,o);break}case"x":case"xMin":case"xMax":n=A.name;break;default:A.type===pe.fS.number&&!c&&(c=A)}if(!i)return{warning:"Missing Y field",heatmap:e};if(!i)return{warning:"Missing X field",heatmap:e};if(!c)return{warning:"Missing value field",heatmap:e};const C=ke(c,a.cellValues,o),x=e.fields[0].values.toArray(),w=e.fields[1].values.toArray(),R=x.length;let E=R-w.lastIndexOf(w[0]),J=R/E,F=w[1]-w[0],K=x[E]-x[0],[b,M]=Ue(c.values.toArray(),a.color.min,a.color.max,a.filterValues?.le,a.filterValues?.ge),D=a.calculation?.xBuckets,B=a.calculation?.yBuckets;return{heatmap:e,exemplars:l?.length?l:void 0,xBucketSize:K,yBucketSize:F,xBucketCount:J,yBucketCount:E,yLog:B?.scale?.log??0,xLog:D?.scale?.log??0,xLogSplit:D?.scale?.log?+(D?.value??"1"):1,yLogSplit:B?.scale?.log?+(B?.value??"1"):1,minValue:b,maxValue:M,xLayout:n==="xMax"?h.D.le:n==="xMin"?h.D.ge:h.D.unknown,yLayout:i==="yMax"?h.D.le:i==="yMin"?h.D.ge:h.D.unknown,display:A=>(0,de.zc)(C(A))}};function ke(e,l,a){if(l?.unit?.length||l?.decimals!=null){const{unit:o,decimals:t}=l;e.display=void 0,e.config={...e.config},o?.length&&(e.config.unit=o),t!=null&&(e.config.decimals=t)}return e.display||(e.display=(0,tt.U)({field:e,theme:a})),e.display}var je=f(47700),ut=f(65356),dt=f(35008),Ke=f.n(dt);const St=Object.freeze([1,0]);var re=(e=>(e.Opacity="opacity",e.Scheme="scheme",e))(re||{}),Me=(e=>(e.Linear="linear",e.Exponential="exponential",e))(Me||{});const L={calculate:!1,color:{mode:"scheme",scheme:"Oranges",fill:"dark-orange",scale:"exponential",reverse:!1,exponent:.5,steps:64},rowsFrame:{layout:h.D.auto},yAxis:{axisPlacement:V.LB.Left},cellValues:{},showValue:V.Jp.Auto,tooltip:{show:!0,yHistogram:!1},legend:{show:!0},exemplars:{color:"rgba(255,0,255,0.7)"},filterValues:{le:1e-9},cellGap:1},wt={},Be=[{name:"BrBG",invert:"always"},{name:"PiYG",invert:"always"},{name:"PRGn",invert:"always"},{name:"PuOr",invert:"always"},{name:"RdBu",invert:"always"},{name:"RdGy",invert:"always"},{name:"RdYlBu",invert:"always"},{name:"RdYlGn",invert:"always"},{name:"Spectral",invert:"always"},{name:"Blues",invert:"dark"},{name:"Greens",invert:"dark"},{name:"Greys",invert:"dark"},{name:"Oranges",invert:"dark"},{name:"Purples",invert:"dark"},{name:"Reds",invert:"dark"},{name:"Turbo",invert:"light"},{name:"Cividis",invert:"light"},{name:"Viridis",invert:"light"},{name:"Magma",invert:"light"},{name:"Inferno",invert:"light"},{name:"Plasma",invert:"light"},{name:"Warm",invert:"light"},{name:"Cool",invert:"light"},{name:"Cubehelix",invert:"light",name2:"CubehelixDefault"},{name:"BuGn",invert:"dark"},{name:"BuPu",invert:"dark"},{name:"GnBu",invert:"dark"},{name:"OrRd",invert:"dark"},{name:"PuBuGn",invert:"dark"},{name:"PuBu",invert:"dark"},{name:"PuRd",invert:"dark"},{name:"RdPu",invert:"dark"},{name:"YlGnBu",invert:"dark"},{name:"YlGn",invert:"dark"},{name:"YlOrBr",invert:"dark"},{name:"YlOrRd",invert:"dark"},{name:"Rainbow",invert:"always"},{name:"Sinebow",invert:"always"}],mt=Be.find(e=>e.name==="Spectral");function Je(e,l){const a={...L.color,...e},o=[],t=(a.steps??128)-1;if(e.mode===re.Opacity){const n=Ke()(l.visualization.getColorByName(e.fill)).toPercentageRgb(),i=a.scale===Me.Exponential?je.scalePow().exponent(a.exponent).domain([0,1]).range([0,1]):je.scaleLinear().domain([0,1]).range([0,1]);for(let c=0;c<=t;c++)n.a=i(c/t),o.push(Ke()(n).toString("hex8"))}else{const n=Be.find(C=>C.name===a.scheme)??mt;let i="interpolate"+(n.name2??n.name);const c=ut[i];for(let C=0;C<=t;C++){let x=c(C/t),w=x.indexOf("rgb")===0?"#"+[...x.matchAll(/\d+/g)].map(R=>(+R[0]).toString(16).padStart(2,"0")).join(""):x;o.push(w)}(n.invert==="always"||n.invert==="dark"&&l.isDark||n.invert==="light"&&l.isLight)&&o.reverse(),e.reverse&&o.reverse()}return o}const ft=({data:e,id:l,timeRange:a,timeZone:o,width:t,height:n,options:i,fieldConfig:c,eventBus:C,onChangeTimeRange:x,replaceVariables:w})=>{const R=(0,se.l4)(),E=(0,se.wW)(ht),{sync:J}=(0,ce.R9)();let F=(0,d.useRef)(a);F.current=a;const K=(0,d.useCallback)((s,p)=>(0,he.oB)(s,p,p.state?.scopedVars??{},w),[w]),b=(0,d.useMemo)(()=>{try{return ze(e,i,R,K)}catch(s){return{warning:`${s}`}}},[e,i,R,K]),M=(0,d.useMemo)(()=>{let s=[],p=[];const z=(0,H.d8)(b.heatmap);return b.exemplars?.length&&z.yMatchWithLabel&&(s=b.exemplars?.fields[0].values.toArray(),z.yOrdinalDisplay!=null?p=(b.exemplars?.fields.find(j=>j.name===z.yMatchWithLabel).values.toArray()).map(j=>z.yOrdinalLabel?.indexOf(j)):p=b.exemplars?.fields[1].values.toArray()),[null,b.heatmap?.fields.map(G=>G.values.toArray()),[s,p]]},[b.heatmap,b.exemplars]),D=(0,d.useMemo)(()=>Je(i.color,R),[i.color,R]),[B,W]=(0,d.useState)(void 0),[A,$]=(0,d.useState)(!1),P=(0,d.useRef)(!1),N=()=>{P.current=!1,$(!1),U(null)},O=()=>{P.current=!P.current,$(P.current)},U=(0,d.useCallback)(s=>{W(s??void 0)},[i,e.structureRev]),v=(0,d.useRef)(b);v.current=b;const ee=(0,d.useMemo)(()=>{const s=v.current?.heatmap?.fields[1].config?.custom?.scaleDistribution;return nt({dataRef:v,theme:R,eventBus:C,onhover:U,onclick:i.tooltip.show?O:null,onzoom:p=>{p.xMax-p.xMin>1&&x({from:p.xMin,to:p.xMax})},isToolTipOpen:P,timeZone:o,getTimeRange:()=>F.current,sync:J,palette:D,cellGap:i.cellGap,hideLE:i.filterValues?.le,hideGE:i.filterValues?.ge,exemplarColor:i.exemplars?.color??"rgba(255,0,255,0.7)",yAxisConfig:i.yAxis,ySizeDivisor:s?.type===V.wf.Log?+(i.calculation?.yBuckets?.value||1):1})},[i,o,e.structureRev]),te=()=>{if(!b.heatmap||!i.legend.show)return null;let z=v.current?.heatmap?.meta?.type===ae.P.HeatmapCells&&!(0,H.qJ)(v.current?.heatmap)?3:2;const G=b.heatmap.fields[z];let T;return B&&b.heatmap.fields&&B.seriesIdx===1&&(T=G.values.get(B.dataIdx)),d.createElement(we.AY.Legend,{placement:"bottom",maxHeight:"20%"},d.createElement("div",{className:E.colorScaleWrapper},d.createElement(ne.q,{hoverValue:T,colorPalette:D,min:v.current.minValue,max:v.current.maxValue,display:b.display})))};return b.warning||!b.heatmap?d.createElement(ie.Z,{panelId:l,fieldConfig:c,data:e,needsNumberField:!0,message:b.warning}):d.createElement(d.Fragment,null,d.createElement(we.AY,{width:t,height:n,legend:te()},(s,p)=>d.createElement(He.N,{config:ee,data:M,width:s,height:p,timeRange:a})),d.createElement(ue.h_,null,B&&i.tooltip.show&&d.createElement(Oe.S,{position:{x:B.pageX,y:B.pageY},offset:{x:10,y:10},allowPointerEvents:P.current},A&&d.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",paddingBottom:"6px"}},d.createElement(Ie.P,{onClick:N,style:{position:"relative",top:"auto",right:"auto",marginRight:0}})),d.createElement(qe,{timeRange:a,data:b,hover:B,showHistogram:i.tooltip.yHistogram}))))},ht=e=>({colorScaleWrapper:xe.css`
    margin-left: 25px;
    padding: 10px 0;
    max-width: 300px;
  `}),pt=e=>Object.keys(e.options).length===0?Qe(e,"heatmap",{angular:e},e.fieldConfig):e.options,Qe=(e,l,a,o)=>{if(l==="heatmap"&&a.angular){const{fieldConfig:t,options:n}=xt({...a.angular,fieldConfig:o});return e.fieldConfig=t,n}if(l==="heatmap-new"){const{bucketFrame:t,...n}=e.options;return t?{...n,rowsFrame:t}:e.options}return{}};function xt(e){const l={defaults:{},overrides:[]},a=e.dataFormat!=="tsbuckets",o={...L.calculation},t={logBase:1,...e.yAxis};a&&(e.xBucketSize?o.xBuckets={mode:h.k.Size,value:`${e.xBucketSize}`}:e.xBucketNumber&&(o.xBuckets={mode:h.k.Count,value:`${e.xBucketNumber}`}),e.yBucketSize?o.yBuckets={mode:h.k.Size,value:`${e.yBucketSize}`}:e.xBucketNumber&&(o.yBuckets={mode:h.k.Count,value:`${e.yBucketNumber}`}),t.logBase>1&&(o.yBuckets={mode:h.k.Count,value:+t.splitFactor>0?`${t.splitFactor}`:void 0,scale:{type:V.wf.Log,log:t.logBase}}));const n=Pe(e.cards?.cardPadding,2),i={calculate:a,calculation:o,color:{...L.color,steps:128},cellGap:n||1,cellRadius:Pe(e.cards?.cardRound),yAxis:{axisPlacement:t.show===!1?V.LB.Hidden:V.LB.Left,reverse:Boolean(e.reverseYBuckets),axisWidth:Pe(t.width),min:t.min,max:t.max,unit:t.format,decimals:t.decimals},cellValues:{decimals:Pe(e.tooltipDecimals)},rowsFrame:{layout:yt(e.yBucketBound)},legend:{show:Boolean(e.legend?.show)},showValue:V.Jp.Never,tooltip:{show:Boolean(e.tooltip?.show),yHistogram:Boolean(e.tooltip?.showHistogram)},exemplars:{...L.exemplars}};e.hideZeroBuckets&&(i.filterValues={...L.filterValues});const c=e.color??{};switch(c?.mode){case"spectrum":{i.color.mode=re.Scheme;const C=c.colorScheme;let x=Be.find(w=>w.name===C);x||(x=Be.find(w=>C.indexOf(w.name)>=0)),i.color.scheme=x?x.name:L.color.scheme;break}case"opacity":{i.color.mode=re.Opacity,i.color.scale=c.scale;break}}return i.color.fill=c.cardColor,i.color.min=c.min,i.color.max=c.max,typeof c.min=="number"&&typeof c.max=="number"&&c.min>c.max&&(i.color.min=c.max,i.color.max=c.min,i.color.reverse=!0),{fieldConfig:l,options:i}}function yt(e){switch(e){case"upper":return h.D.ge;case"lower":return h.D.le;case"middle":return h.D.unknown}return h.D.auto}function Pe(e,l){if(e==null||e==="")return l;const a=+e;return isNaN(a)?l:a}class gt{getSuggestionsForData(l){const{dataSummary:a}=l;if(!l.data?.series||!a.hasData||a.timeFieldCount<1||a.numberFieldCount<2||a.numberFieldCount>10)return;const o=ze(l.data,L,Se.v.theme2);!o||o.warning||l.getListAppender({name:"",pluginId:"heatmap",options:{},fieldConfig:{defaults:{custom:{}},overrides:[]}})}}const vt=new q.c(ft).useFieldConfig({disableStandardOptions:Object.values(Ce.qb).filter(e=>e!==Ce.qb.Links),useCustomConfig:e=>{e.addCustomEditor({id:"scaleDistribution",path:"scaleDistribution",name:"Y axis scale",category:["Heatmap"],editor:Ee.Y,override:Ee.Y,defaultValue:{type:V.wf.Linear},shouldApply:l=>l.type===pe.fS.number,process:Ve.kG,hideFromDefaults:!0}),(0,_.B)(e)}}).setPanelChangeHandler(Qe).setMigrationHandler(pt).setPanelOptions((e,l)=>{const a=l.options??L;let o=!1;try{const n=ze({series:l.data},a,Se.v.theme2);o=(0,H.d8)(n.heatmap).yOrdinalDisplay!=null}catch{}let t=["Heatmap"];e.addRadio({path:"calculate",name:"Calculate from data",defaultValue:L.calculate,category:t,settings:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}}),a.calculate&&(0,me.J)("calculation.",e,a.calculation,t),t=["Y Axis"],e.addRadio({path:"yAxis.axisPlacement",name:"Placement",defaultValue:L.yAxis.axisPlacement??V.LB.Left,category:t,settings:{options:[{label:"Left",value:V.LB.Left},{label:"Right",value:V.LB.Right},{label:"Hidden",value:V.LB.Hidden}]}}).addUnitPicker({category:t,path:"yAxis.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:t,path:"yAxis.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),o||e.addNumberInput({path:"yAxis.min",name:"Min value",settings:{placeholder:"Auto"},category:t}).addTextInput({path:"yAxis.max",name:"Max value",settings:{placeholder:"Auto"},category:t}),e.addNumberInput({path:"yAxis.axisWidth",name:"Axis width",defaultValue:L.yAxis.axisWidth,settings:{placeholder:"Auto",min:5},category:t}).addTextInput({path:"yAxis.axisLabel",name:"Axis label",defaultValue:L.yAxis.axisLabel,settings:{placeholder:"Auto"},category:t}),a.calculate||e.addRadio({path:"rowsFrame.layout",name:"Tick alignment",defaultValue:L.rowsFrame?.layout??h.D.auto,category:t,settings:{options:[{label:"Auto",value:h.D.auto},{label:"Top (LE)",value:h.D.le},{label:"Middle",value:h.D.unknown},{label:"Bottom (GE)",value:h.D.ge}]}}),e.addBooleanSwitch({path:"yAxis.reverse",name:"Reverse",defaultValue:L.yAxis.reverse===!0,category:t}),t=["Colors"],e.addRadio({path:"color.mode",name:"Mode",defaultValue:L.color.mode,category:t,settings:{options:[{label:"Scheme",value:re.Scheme},{label:"Opacity",value:re.Opacity}]}}),e.addColorPicker({path:"color.fill",name:"Color",defaultValue:L.color.fill,category:t,showIf:n=>n.color.mode===re.Opacity}),e.addRadio({path:"color.scale",name:"Scale",defaultValue:L.color.scale,category:t,settings:{options:[{label:"Exponential",value:Me.Exponential},{label:"Linear",value:Me.Linear}]},showIf:n=>n.color.mode===re.Opacity}),e.addSliderInput({path:"color.exponent",name:"Exponent",defaultValue:L.color.exponent,category:t,settings:{min:.1,max:2,step:.1},showIf:n=>n.color.mode===re.Opacity&&n.color.scale===Me.Exponential}),e.addSelect({path:"color.scheme",name:"Scheme",description:"",defaultValue:L.color.scheme,category:t,settings:{options:Be.map(n=>({value:n.name,label:n.name}))},showIf:n=>n.color.mode!==re.Opacity}),e.addSliderInput({path:"color.steps",name:"Steps",defaultValue:L.color.steps,category:t,settings:{min:2,max:128,step:1}}).addBooleanSwitch({path:"color.reverse",name:"Reverse",defaultValue:L.color.reverse,category:t}).addCustomEditor({id:"__scale__",path:"__scale__",name:"",category:t,editor:()=>{const n=Je(a.color,Se.v.theme2);return d.createElement("div",null,d.createElement(ne.q,{colorPalette:n,min:1,max:100}))}}),e.addNumberInput({path:"color.min",name:"Start color scale from value",defaultValue:L.color.min,settings:{placeholder:"Auto (min)"},category:t}).addNumberInput({path:"color.max",name:"End color scale at value",defaultValue:L.color.max,settings:{placeholder:"Auto (max)"},category:t}),t=["Cell display"],a.calculate||e.addTextInput({path:"rowsFrame.value",name:"Value name",defaultValue:L.rowsFrame?.value,settings:{placeholder:"Value"},category:t}),e.addUnitPicker({category:t,path:"cellValues.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:t,path:"cellValues.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),e.addSliderInput({name:"Cell gap",path:"cellGap",defaultValue:L.cellGap,category:t,settings:{min:0,max:25}}).addNumberInput({path:"filterValues.le",name:"Hide cells with values <=",defaultValue:L.filterValues?.le,settings:{placeholder:"None"},category:t}).addNumberInput({path:"filterValues.ge",name:"Hide cells with values >=",defaultValue:L.filterValues?.ge,settings:{placeholder:"None"},category:t}),t=["Tooltip"],e.addBooleanSwitch({path:"tooltip.show",name:"Show tooltip",defaultValue:L.tooltip.show,category:t}),e.addBooleanSwitch({path:"tooltip.yHistogram",name:"Show histogram (Y axis)",defaultValue:L.tooltip.yHistogram,category:t,showIf:n=>n.tooltip.show}),t=["Legend"],e.addBooleanSwitch({path:"legend.show",name:"Show legend",defaultValue:L.legend.show,category:t}),t=["Exemplars"],e.addColorPicker({path:"exemplars.color",name:"Color",defaultValue:L.exemplars.color,category:t})}).setSuggestionsSupplier(new gt)}}]);

//# sourceMappingURL=heatmapPanel.905bc8e93f51cd9c57b0.js.map