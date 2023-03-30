"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8225],{94762:(I,N,t)=>{t.d(N,{F:()=>p});var a=t(52423),e=t(68404),y=t(72648),x=t(53731);const p=({renderExpandedContent:m,...h})=>{const u=(0,y.wW)(M);return e.createElement(x.t,{renderExpandedContent:m?(T,C,b)=>e.createElement(e.Fragment,null,C!==b.length-1&&e.createElement("div",{className:(0,a.cx)(u.contentGuideline,u.guideline)}),m(T,C,b)):void 0,renderPrefixHeader:()=>e.createElement("div",{className:u.relative},e.createElement("div",{className:(0,a.cx)(u.headerGuideline,u.guideline)})),renderPrefixCell:(T,C,b)=>e.createElement("div",{className:u.relative},e.createElement("div",{className:(0,a.cx)(u.topGuideline,u.guideline)}),C!==b.length-1&&e.createElement("div",{className:(0,a.cx)(u.bottomGuideline,u.guideline)})),...h})},M=m=>({relative:a.css`
    position: relative;
    height: 100%;
  `,guideline:a.css`
    left: -19px;
    border-left: 1px solid ${m.colors.border.medium};
    position: absolute;

    ${m.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:a.css`
    width: 18px;
    border-bottom: 1px solid ${m.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:a.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:a.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:a.css`
    top: -25px;
    bottom: 0;
  `})},29721:(I,N,t)=>{t.d(N,{V:()=>y});var a=t(68404),e=t(39904);const y=({namespace:x,group:p})=>p?a.createElement(a.Fragment,null,x," ",a.createElement(e.J,{name:"angle-right"})," ",p):a.createElement(a.Fragment,null,x)},25048:(I,N,t)=>{t.d(N,{i:()=>xe});var a=t(52423),e=t(68404),y=t(37556),x=t(46519),p=t(38849),M=t(72648),m=t(61860),h=t(84952),u=t(8055),T=t(37190),C=t(79662),b=t(58593),H=t(53731),K=t(94762),Y=t(40106),V=t(29721),j=t(46587),J=t(70356),Q=t(26418),z=t(35645),U=t(31403),Z=t(94599),X=t(98102),w=t(60499),k=t(81168),q=t(44391),_=t(72004),L=t(45849),ee=t(10505),A=t(60048),te=t(93411),ne=t(41273);const Le=n=>window.matchMedia(`(max-width: ${n}px)`).matches,ae=({rule:n,rulesSource:o})=>{const c=(0,k.useDispatch)(),i=(0,J.TH)(),v=(0,w.iG)(),E=(0,M.wW)(se),{namespace:d,group:l,rulerRule:s}=n,[r,g]=(0,e.useState)(),f=(0,L.EG)(o),R=(0,C.Pc)(n.rulerRule)&&Boolean(n.rulerRule.grafana_alert.provenance),D=[],O=(0,C.Jq)(l),{isEditable:G,isRemovable:$e}=(0,q.M)(f,s),F=i.pathname+i.search,B=le(i.pathname),Ne=()=>{if(r&&r.rulerRule){const $=A.Zk((0,L.EG)(r.namespace.rulesSource),r.namespace.name,r.group.name,r.rulerRule);c((0,_.hS)($,{navigateTo:B?"/alerting/list":void 0})),g(void 0)}},Te=()=>{if((0,L.jq)(o)){const{appUrl:$,appSubUrl:P}=z.v,W=P!==""?`${$}${P}/`:z.v.appUrl,Se=`${encodeURIComponent(o.name)}/${encodeURIComponent(n.name)}`;return`${W}alerting/${Se}/find`}return window.location.href.split("?")[0]},Pe=(0,L.EG)(o);if(B||D.push(e.createElement(m.u,{placement:"top",content:"View"},e.createElement(U.Qj,{className:E.button,title:"View",size:"sm",key:"view",variant:"secondary",icon:"eye",href:(0,ee.V2)(o,n,F)}))),G&&s&&!O){const $=A.Zk(Pe,d.name,l.name,s);if(!R){const P=(0,te.u)(`/alerting/${encodeURIComponent(A.$V($))}/edit`,{returnTo:F});B&&D.push(e.createElement(Z.m,{key:"copy",icon:"copy",onClipboardError:W=>{v.error("Error while copying URL",W)},className:E.button,size:"sm",getText:Te},"Copy link to rule")),D.push(e.createElement(m.u,{placement:"top",content:"Edit"},e.createElement(U.Qj,{title:"Edit",className:E.button,size:"sm",key:"edit",variant:"secondary",icon:"pen",href:P})))}D.push(e.createElement(m.u,{placement:"top",content:"Copy"},e.createElement(ne.E,{ruleIdentifier:$,isProvisioned:R,className:E.button})))}return $e&&s&&!O&&!R&&D.push(e.createElement(m.u,{placement:"top",content:"Delete"},e.createElement(U.zx,{title:"Delete",className:E.button,size:"sm",type:"button",key:"delete",variant:"secondary",icon:"trash-alt",onClick:()=>g(n)}))),D.length?e.createElement(e.Fragment,null,e.createElement(Q.Stack,{gap:1},D.map(($,P)=>e.createElement(e.Fragment,{key:P},$))),!!r&&e.createElement(X.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:Ne,onDismiss:()=>g(void 0)})):null};function le(n){return n.endsWith("/view")}const se=n=>({button:a.css`
    padding: 0 ${n.spacing(2)};
  `});var oe=t(39904),re=t(82963);function ie({rule:n}){const o=(0,M.wW)(ce),{exceedsLimit:c}=(0,e.useMemo)(()=>(0,re.f)(n.group.interval),[n.group.interval]);return c?e.createElement(m.u,{theme:"error",content:e.createElement("div",null,"A minimum evaluation interval of"," ",e.createElement("span",{className:o.globalLimitValue},z.v.unifiedAlerting.minInterval)," has been configured in Grafana and will be used instead of the ",n.group.interval," interval configured for the Rule Group.")},e.createElement(oe.J,{name:"stopwatch-slash",className:o.icon})):null}function ce(n){return{globalLimitValue:a.css`
      font-weight: ${n.typography.fontWeightBold};
    `,icon:a.css`
      fill: ${n.colors.warning.text};
    `}}var me=t(53739),ue=t(52694),S=t(80498),de=t(49279),pe=t(68854),ve=t(24990),Ee=t(8674),ge=t(78443);const fe=15,Re=({rule:n})=>{const o=(0,M.wW)(De),{namespace:{rulesSource:c}}=n,i=Object.entries(n.annotations).filter(([v,E])=>!!E.trim());return e.createElement("div",null,e.createElement(de.f,{rule:n,rulesSource:c,isViewMode:!1}),e.createElement("div",{className:o.wrapper},e.createElement("div",{className:o.leftSide},e.createElement(he,{rule:n}),!!n.labels&&!!Object.keys(n.labels).length&&e.createElement(S.C,{label:"Labels",horizontal:!0},e.createElement(ue.s,{labels:n.labels})),e.createElement(Ee.C,{rulesSource:c,rule:n,annotations:i}),e.createElement(pe.J,{annotations:i})),e.createElement("div",{className:o.rightSide},e.createElement(ve.C,{rulesSource:c,rule:n}))),e.createElement(ge.M,{rule:n,itemsDisplayLimit:fe}))},he=({rule:n})=>{let o,c=n.group.interval,i=n.promRule?.lastEvaluation,v=n.promRule?.evaluationTime;return(0,C.yF)(n.rulerRule)||(o=n.rulerRule?.for),e.createElement(e.Fragment,null,c&&e.createElement(S.C,{label:"Evaluate",horizontal:!0},"Every ",c),o&&e.createElement(S.C,{label:"For",horizontal:!0},o),i&&!(0,b.gV)(i)&&e.createElement(S.C,{label:"Last evaluation",horizontal:!0},e.createElement(m.u,{placement:"top",content:`${(0,p.dq)(i,{format:"YYYY-MM-DD HH:mm:ss"})}`,theme:"info"},e.createElement("span",null,`${(0,x.CQ)(i).locale("en").fromNow(!0)} ago`))),i&&!(0,b.gV)(i)&&v!==void 0&&e.createElement(S.C,{label:"Evaluation time",horizontal:!0},e.createElement(m.u,{placement:"top",content:`${v}s`,theme:"info"},e.createElement("span",null,(0,me.q)({timeInMs:v*1e3,humanize:!0})))))},De=n=>({wrapper:a.css`
    display: flex;
    flex-direction: row;

    ${n.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:a.css`
    flex: 1;
  `,rightSide:a.css`
    ${n.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var ye=t(80399),Ce=t(48208);const xe=({rules:n,className:o,showGuidelines:c=!1,emptyMessage:i="No rules found.",showGroupColumn:v=!1,showSummaryColumn:E=!1,showNextEvaluationColumn:d=!1})=>{const l=(0,M.wW)(Me),s=(0,a.cx)(l.wrapper,o,{[l.wrapperMargin]:c}),r=(0,e.useMemo)(()=>n.map((R,D)=>({id:`${R.namespace.name}-${R.group.name}-${R.name}-${D}`,data:R})),[n]),g=be(E,v,d);if(!n.length)return e.createElement("div",{className:(0,a.cx)(s,l.emptyMessage)},i);const f=c?K.F:H.t;return e.createElement("div",{className:s,"data-testid":"rules-table"},e.createElement(f,{cols:g,isExpandable:!0,items:r,renderExpandedContent:({data:R})=>e.createElement(Re,{rule:R}),pagination:{itemsPerPage:h.gN},paginationStyles:l.pagination}))},Me=n=>({wrapperMargin:a.css`
    ${n.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:a.css`
    padding: ${n.spacing(1)};
  `,wrapper:a.css`
    width: auto;
    border-radius: ${n.shape.borderRadius()};
  `,pagination:a.css`
    display: flex;
    margin: 0;
    padding-top: ${n.spacing(1)};
    padding-bottom: ${n.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${n.colors.border.strong};
    border-right: 1px solid ${n.colors.border.strong};
    border-bottom: 1px solid ${n.colors.border.strong};
  `});function be(n,o,c){const{hasRuler:i,rulerRulesLoaded:v}=(0,u.h)(),E=(0,e.useCallback)(d=>{const l=d.promRule?.lastEvaluation&&!(0,b.gV)(d.promRule.lastEvaluation)&&(0,y.qb)(d.promRule.lastEvaluation),s=d.group.interval&&(0,y.jO)(d.group.interval);if(!l||!s)return;const r=Date.parse(d.promRule?.lastEvaluation||""),g=(0,y.RA)(d.group.interval),f=(0,y.Ks)(r,g);return{humanized:(0,x.CQ)(f).locale("en").fromNow(!0),fullDate:(0,p.dq)(f,{format:"YYYY-MM-DD HH:mm:ss"})}},[]);return(0,e.useMemo)(()=>{const d=[{id:"state",label:"State",renderCell:({data:l})=>{const{namespace:s}=l,{rulesSource:r}=s,{promRule:g,rulerRule:f}=l,R=!!(i(r)&&v(r)&&g&&!f),D=!!(i(r)&&v(r)&&f&&!g),G=(0,C.Pc)(f)&&Boolean(f.grafana_alert.is_paused);return e.createElement(Ce.p,{rule:l,isDeleting:R,isCreating:D,isPaused:G})},size:"165px"},{id:"name",label:"Name",renderCell:({data:l})=>l.name,size:c?4:5},{id:"provisioned",label:"",renderCell:({data:l})=>{const s=l.rulerRule;return(0,C.Pc)(s)&&s.grafana_alert.provenance?e.createElement(Y.C0,null):null},size:"100px"},{id:"warnings",label:"",renderCell:({data:l})=>e.createElement(ie,{rule:l}),size:"45px"},{id:"health",label:"Health",renderCell:({data:{promRule:l,group:s}})=>l?e.createElement(ye.V,{rule:l}):null,size:"75px"}];return n&&d.push({id:"summary",label:"Summary",renderCell:({data:l})=>e.createElement(j.Z,{input:l.annotations[T.q6.summary]??""}),size:c?4:5}),c&&d.push({id:"nextEvaluation",label:"Next evaluation",renderCell:({data:l})=>{const s=E(l);return s?.fullDate&&e.createElement(m.u,{placement:"top",content:`${s?.fullDate}`,theme:"info"},e.createElement("span",null,"in ",s?.humanized))},size:2}),o&&d.push({id:"group",label:"Group",renderCell:({data:l})=>{const{namespace:s,group:r}=l;return r.name==="default"?e.createElement(V.V,{namespace:s.name}):e.createElement(V.V,{namespace:s.name,group:r.name})},size:5}),d.push({id:"actions",label:"Actions",renderCell:({data:l})=>e.createElement(ae,{rule:l,rulesSource:l.namespace.rulesSource}),size:"200px"}),d},[n,o,c,i,v,E])}},8055:(I,N,t)=>{t.d(N,{h:()=>x});var a=t(68404),e=t(45849),y=t(69945);function x(){const p=(0,y._)(h=>h.rulerRules),M=(0,a.useCallback)(h=>{const u=typeof h=="string"?h:h.name;return u===e.GC||!!p[u]?.result},[p]),m=(0,a.useCallback)(h=>{const u=(0,e.EG)(h),T=p[u]?.result;return Boolean(T)},[p]);return{hasRuler:M,rulerRulesLoaded:m}}}}]);

//# sourceMappingURL=8225.4587a60b5b2aaf077238.js.map