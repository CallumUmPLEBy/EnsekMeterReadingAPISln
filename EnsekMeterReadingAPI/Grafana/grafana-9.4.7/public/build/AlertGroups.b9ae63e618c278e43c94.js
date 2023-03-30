"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{71884:(S,g,e)=>{e.r(g),e.d(g,{default:()=>ye});var n=e(52423),t=e(68404),m=e(72648),r=e(61744),p=e(45253),f=e(96044),E=e(81168),d=e(39031),v=e(30173),O=e(45524),A=e(88331),M=e(52694),T=e(33950),W=e(37556),D=e(94762),K=e(90072),G=e(31403),R=e(82002),x=e(97953),$=e(45849),I=e(10505),F=e(78543),H=e(51981);const X=({alert:a,alertManagerSourceName:c})=>{const o=(0,m.wW)(Y),u=(0,x.QX)(c),s=(0,$.HY)(c)?R.Vt.hasPermission(E.AccessControlAction.AlertingRuleRead):!0;return t.createElement(t.Fragment,null,t.createElement("div",{className:o.actionsRow},t.createElement(H.q,{actions:[u.update,u.create],fallback:R.Vt.isEditor},a.status.state===d.Z9.Suppressed&&t.createElement(G.Qj,{href:`${(0,I.eQ)("/alerting/silences",c)}&silenceIds=${a.status.silencedBy.join(",")}`,className:o.button,icon:"bell",size:"sm"},"Manage silences"),a.status.state===d.Z9.Active&&t.createElement(G.Qj,{href:(0,I.VN)(c,a.labels),className:o.button,icon:"bell-slash",size:"sm"},"Silence")),s&&a.generatorURL&&t.createElement(G.Qj,{className:o.button,href:a.generatorURL,icon:"chart-line",size:"sm"},"See source")),Object.entries(a.annotations).map(([i,P])=>t.createElement(F.a,{key:i,annotationKey:i,value:P})),t.createElement("div",{className:o.receivers},"Receivers:"," ",a.receivers.map(({name:i})=>i).filter(i=>!!i).join(", ")))},Y=a=>({button:n.css`
    & + & {
      margin-left: ${a.spacing(1)};
    }
  `,actionsRow:n.css`
    padding: ${a.spacing(2,0)} !important;
    border-bottom: 1px solid ${a.colors.border.medium};
  `,receivers:n.css`
    padding: ${a.spacing(1,0)};
  `}),_=({alerts:a,alertManagerSourceName:c})=>{const o=(0,m.wW)(k),u=(0,t.useMemo)(()=>[{id:"state",label:"State",renderCell:({data:s})=>t.createElement(t.Fragment,null,t.createElement(K.G,{state:s.status.state}),t.createElement("span",{className:o.duration},"for"," ",(0,W.vT)({start:new Date(s.startsAt),end:new Date(s.endsAt)}))),size:"220px"},{id:"labels",label:"Labels",renderCell:({data:{labels:s}})=>t.createElement(M.s,{labels:s}),size:1}],[o]),l=(0,t.useMemo)(()=>a.map(s=>({id:s.fingerprint,data:s})),[a]);return t.createElement("div",{className:o.tableWrapper,"data-testid":"alert-group-table"},t.createElement(D.F,{cols:u,items:l,isExpandable:!0,renderExpandedContent:({data:s})=>t.createElement(X,{alert:s,alertManagerSourceName:c})}))},k=a=>({tableWrapper:n.css`
    margin-top: ${a.spacing(3)};
    ${a.breakpoints.up("md")} {
      margin-left: ${a.spacing(4.5)};
    }
  `,duration:n.css`
    margin-left: ${a.spacing(1)};
    font-size: ${a.typography.bodySmall.fontSize};
  `});var w=e(96308);const q=({alertManagerSourceName:a,group:c})=>{const[o,u]=(0,t.useState)(!0),l=(0,m.wW)(ee);return t.createElement("div",{className:l.wrapper},t.createElement("div",{className:l.header},t.createElement("div",{className:l.group,"data-testid":"alert-group"},t.createElement(T.U,{size:"sm",isCollapsed:o,onToggle:()=>u(!o),"data-testid":"alert-group-collapse-toggle"}),Object.keys(c.labels).length?t.createElement(M.s,{labels:c.labels}):t.createElement("span",null,"No grouping")),t.createElement(w.Z,{group:c})),!o&&t.createElement(_,{alertManagerSourceName:a,alerts:c.alerts}))},ee=a=>({wrapper:n.css`
    & + & {
      margin-top: ${a.spacing(2)};
    }
  `,header:n.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${a.spacing(1,1,1,0)};
    background-color: ${a.colors.background.secondary};
    width: 100%;
  `,group:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:n.css``,spanElement:n.css`
    margin-left: ${a.spacing(.5)};
  `,[d.Z9.Active]:n.css`
    color: ${a.colors.error.main};
  `,[d.Z9.Suppressed]:n.css`
    color: ${a.colors.primary.main};
  `,[d.Z9.Unprocessed]:n.css`
    color: ${a.colors.secondary.main};
  `});var Z=e(29614),z=e(23403),te=e(94984),Q=e(64353),ae=e(2594);const ne=({onStateFilterChange:a,stateFilter:c})=>{const o=(0,m.wW)(se),u=Object.entries(d.Z9).sort(([l],[s])=>l<s?-1:1).map(([l,s])=>({label:l,value:s}));return t.createElement("div",{className:o.wrapper},t.createElement(Q._,null,"State"),t.createElement(ae.S,{options:u,value:c,onChange:a}))},se=a=>({wrapper:n.css`
    margin-left: ${a.spacing(1)};
  `});var J=e(82897),re=e(53217),le=e(39904);const oe=({className:a,groups:c,groupBy:o,onGroupingChange:u})=>{const l=(0,J.uniq)(c.flatMap(s=>s.alerts).flatMap(({labels:s})=>Object.keys(s))).filter(s=>!(s.startsWith("__")&&s.endsWith("__"))).map(s=>({label:s,value:s}));return t.createElement("div",{"data-testid":"group-by-container",className:a},t.createElement(Q._,null,"Custom group by"),t.createElement(re.NU,{"aria-label":"group by label keys",value:o,placeholder:"Group by",prefix:t.createElement(le.J,{name:"tag-alt"}),onChange:s=>{u(s.map(({value:i})=>i))},options:l}))};var ce=e(30151);const ie=({groups:a})=>{const[c,o]=(0,t.useState)(Math.floor(Math.random()*100)),[u,l]=(0,f.K)(),{groupBy:s=[],queryString:i,alertState:P}=(0,I.lC)(u),h=`matcher-${c}`,C=(0,z.k)("instance"),[N,L]=(0,Z.k)(C),B=(0,m.wW)(me),U=()=>{l({groupBy:null,queryString:null,alertState:null}),setTimeout(()=>o(c+1),100)},j=!!(s.length>0||i||P);return t.createElement("div",{className:B.wrapper},t.createElement(te.P,{current:N,onChange:L,dataSources:C}),t.createElement("div",{className:B.filterSection},t.createElement(ce.F,{className:B.filterInput,key:h,defaultQueryString:i,onFilterChange:y=>l({queryString:y||null})}),t.createElement(oe,{className:B.filterInput,groups:a,groupBy:s,onGroupingChange:y=>l({groupBy:y.length?y.join(","):null})}),t.createElement(ne,{stateFilter:P,onStateFilterChange:y=>l({alertState:y||null})}),j&&t.createElement(G.zx,{className:B.clearButton,variant:"secondary",icon:"times",onClick:U},"Clear filters")))},me=a=>({wrapper:n.css`
    border-bottom: 1px solid ${a.colors.border.medium};
    margin-bottom: ${a.spacing(3)};
  `,filterSection:n.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${a.spacing(3)};
  `,filterInput:n.css`
    width: 340px;
    & + & {
      margin-left: ${a.spacing(1)};
    }
  `,clearButton:n.css`
    margin-left: ${a.spacing(1)};
    margin-top: 19px;
  `});var V=e(20194);const ue=a=>{const[c]=(0,f.K)(),o=(0,I.lC)(c),u=(0,V.Zh)(o.queryString||"");return(0,t.useMemo)(()=>a.reduce((l,s)=>{const i=s.alerts.filter(({labels:P,status:h})=>{const C=(0,V.eD)(P,u),N=o.alertState?h.state===o.alertState:!0;return C&&N});return i.length>0&&(Object.keys(s.labels).length===0?l.unshift({...s,alerts:i}):l.push({...s,alerts:i})),l},[]),[a,o,u])},de=(a,c)=>(0,t.useMemo)(()=>c.length===0?a.filter(l=>Object.keys(l.labels).length===0).length>1?a.reduce((l,s)=>{if(Object.keys(s.labels).length===0){const i=l.find(({labels:P})=>Object.keys(P));i?i.alerts=(0,J.uniqBy)([...i.alerts,...s.alerts],"labels"):l.push({alerts:s.alerts,labels:{},receiver:{name:"NONE"}})}else l.push(s);return l},[]):a:a.flatMap(({alerts:u})=>u).reduce((u,l)=>{if(c.every(i=>Object.keys(l.labels).includes(i))){const i=u.find(P=>c.every(h=>P.labels[h]===l.labels[h]));if(i)i.alerts.push(l);else{const P=c.reduce((h,C)=>(h={...h,[C]:l.labels[C]},h),{});u.push({alerts:[l],labels:P,receiver:{name:"NONE"}})}}else{const i=u.find(P=>Object.keys(P.labels).length===0);i?i.alerts.push(l):u.push({alerts:[l],labels:{},receiver:{name:"NONE"}})}return u},[]),[a,c]);var ge=e(69945),Ee=e(72004),ve=e(37190),pe=e(46818);const fe=()=>{const{useGetAlertmanagerChoiceStatusQuery:a}=v.h,c=(0,z.k)("instance"),[o]=(0,Z.k)(c),u=(0,E.useDispatch)(),[l]=(0,f.K)(),{groupBy:s=[]}=(0,I.lC)(l),i=(0,m.wW)(Ae),{currentData:P}=a(),h=(0,ge._)(y=>y.amAlertGroups),{loading:C,error:N,result:L=[]}=h[o||""]??pe.oq,B=de(L,s),U=ue(B),j=o===$.GC&&P?.alertmanagersChoice===d.TE.External;return(0,t.useEffect)(()=>{function y(){o&&u((0,Ee.mS)(o))}y();const b=setInterval(y,ve.iF);return()=>{clearInterval(b)}},[u,o]),o?t.createElement(O.J,{pageId:"groups"},t.createElement(ie,{groups:L}),C&&t.createElement(r.u,{text:"Loading notifications"}),N&&!C&&t.createElement(p.b,{title:"Error loading notifications",severity:"error"},N.message||"Unknown error"),j&&t.createElement(p.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager"},"Grafana is configured to send alerts to external alertmanagers only. No alerts are expected to be available here for the selected Alertmanager."),L&&U.map((y,b)=>t.createElement(t.Fragment,{key:`${JSON.stringify(y.labels)}-group-${b}`},(b===1&&Object.keys(U[0].labels).length===0||b===0&&Object.keys(y.labels).length>0)&&t.createElement("p",{className:i.groupingBanner},"Grouped by: ",Object.keys(y.labels).join(", ")),t.createElement(q,{alertManagerSourceName:o||"",group:y}))),L&&!U.length&&t.createElement("p",null,"No results.")):t.createElement(O.J,{pageId:"groups"},t.createElement(A.I,{availableAlertManagers:c}))},Ae=a=>({groupingBanner:n.css`
    margin: ${a.spacing(2,0)};
  `}),ye=fe},30173:(S,g,e)=>{e.d(g,{h:()=>t});var n=e(29427);const t=n.C.injectEndpoints({endpoints:m=>({getAlertmanagerChoiceStatus:m.query({query:()=>({url:"/api/v1/ngalert"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagerConfig:m.query({query:()=>({url:"/api/v1/ngalert/admin_config"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagers:m.query({query:()=>({url:"/api/v1/ngalert/alertmanagers"}),transformResponse:r=>r.data}),saveExternalAlertmanagersConfig:m.mutation({query:r=>({url:"/api/v1/ngalert/admin_config",method:"POST",data:r}),invalidatesTags:["AlertmanagerChoice"]})})})},45524:(S,g,e)=>{e.d(g,{J:()=>m});var n=e(68404),t=e(79396);const m=({children:r,pageId:p,pageNav:f,isLoading:E})=>n.createElement(t.T,{pageNav:f,navId:p},n.createElement(t.T.Contents,{isLoading:E},r))},51981:(S,g,e)=>{e.d(g,{q:()=>m});var n=e(68404),t=e(82002);const m=({actions:r,children:p,fallback:f=!0})=>r.some(E=>t.Vt.hasAccess(E,f))?n.createElement(n.Fragment,null,p):null},94762:(S,g,e)=>{e.d(g,{F:()=>p});var n=e(52423),t=e(68404),m=e(72648),r=e(53731);const p=({renderExpandedContent:E,...d})=>{const v=(0,m.wW)(f);return t.createElement(r.t,{renderExpandedContent:E?(O,A,M)=>t.createElement(t.Fragment,null,A!==M.length-1&&t.createElement("div",{className:(0,n.cx)(v.contentGuideline,v.guideline)}),E(O,A,M)):void 0,renderPrefixHeader:()=>t.createElement("div",{className:v.relative},t.createElement("div",{className:(0,n.cx)(v.headerGuideline,v.guideline)})),renderPrefixCell:(O,A,M)=>t.createElement("div",{className:v.relative},t.createElement("div",{className:(0,n.cx)(v.topGuideline,v.guideline)}),A!==M.length-1&&t.createElement("div",{className:(0,n.cx)(v.bottomGuideline,v.guideline)})),...d})},f=E=>({relative:n.css`
    position: relative;
    height: 100%;
  `,guideline:n.css`
    left: -19px;
    border-left: 1px solid ${E.colors.border.medium};
    position: absolute;

    ${E.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:n.css`
    width: 18px;
    border-bottom: 1px solid ${E.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:n.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:n.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:n.css`
    top: -25px;
    bottom: 0;
  `})},88331:(S,g,e)=>{e.d(g,{I:()=>E});var n=e(68404),t=e(45253),m=e(29614),r=e(94984);const p=()=>n.createElement(t.b,{title:"No Alertmanager found",severity:"warning"},"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."),f=()=>n.createElement(t.b,{title:"Selected Alertmanager not found. Select a different Alertmanager.",severity:"warning"},"Selected Alertmanager no longer exists or you may not have permission to access it."),E=({availableAlertManagers:d})=>{const[v,O]=(0,m.k)(d),A=d.length>0;return n.createElement("div",null,A?n.createElement(n.Fragment,null,n.createElement(r.P,{onChange:O,dataSources:d}),n.createElement(f,null)):n.createElement(p,null))}},30151:(S,g,e)=>{e.d(g,{F:()=>T});var n=e(52423),t=e(82897),m=e.n(t),r=e(68404),p=e(26418),f=e(54408),E=e(72648),d=e(39904),v=e(64353),O=e(61860),A=e(46967),M=e(41904);const T=({className:D,onFilterChange:K,defaultQueryString:G})=>{const R=(0,E.wW)(W),x=(0,r.useMemo)(()=>(0,t.debounce)(I=>{(0,f.PN)(M.z7.filterByLabel);const F=I.target;K(F.value)},600),[K]);(0,r.useEffect)(()=>x.cancel(),[x]);const $=r.createElement(d.J,{name:"search"});return r.createElement("div",{className:D},r.createElement(v._,null,r.createElement(p.Stack,{gap:.5},r.createElement("span",null,"Search by label"),r.createElement(O.u,{content:r.createElement("div",null,"Filter alerts using label querying, ex:",r.createElement("pre",null,'{severity="critical", instance=~"cluster-us-.+"}'))},r.createElement(d.J,{className:R.icon,name:"info-circle",size:"sm"})))),r.createElement(A.I,{placeholder:"Search",defaultValue:G,onChange:x,"data-testid":"search-query-input",prefix:$,className:R.inputWidth}))},W=D=>({icon:n.css`
    margin-right: ${D.spacing(.5)};
  `,inputWidth:n.css`
    width: 340px;
    flex-grow: 0;
  `})},90072:(S,g,e)=>{e.d(g,{G:()=>p});var n=e(68404),t=e(39031),m=e(79453);const r={[t.Z9.Active]:"bad",[t.Z9.Unprocessed]:"neutral",[t.Z9.Suppressed]:"info"},p=({state:f})=>n.createElement(m.i,{state:r[f]},f)},29614:(S,g,e)=>{e.d(g,{k:()=>E});var n=e(68404),t=e(96044),m=e(58379),r=e(37190),p=e(45849);function f(d){return(0,n.useCallback)(v=>d.map(A=>A.name).includes(v),[d])}function E(d){const[v,O]=(0,t.K)(),A=f(d),M=(0,n.useCallback)(D=>{A(D)&&(D===p.GC?(m.Z.delete(r.de),O({[r.c4]:null})):(m.Z.set(r.de,D),O({[r.c4]:D})))},[O,A]),T=v[r.c4];if(T&&typeof T=="string")return A(T)?[T,M]:[void 0,M];const W=m.Z.get(r.de);return W&&typeof W=="string"&&A(W)?(M(W),[W,M]):A(p.GC)?[p.GC,M]:[void 0,M]}},23403:(S,g,e)=>{e.d(g,{k:()=>m});var n=e(68404),t=e(45849);function m(r){return(0,n.useMemo)(()=>(0,t.LE)(r),[r])}}}]);

//# sourceMappingURL=AlertGroups.b9ae63e618c278e43c94.js.map