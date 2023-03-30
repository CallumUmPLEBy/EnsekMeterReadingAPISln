"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4259],{55887:(B,v,e)=>{e.d(v,{e:()=>s});var s=(t=>(t.OpenSource="Open Source",t.Pro="Pro",t.Enterprise="Enterprise",t))(s||{})},30173:(B,v,e)=>{e.d(v,{h:()=>t});var s=e(29427);const t=s.C.injectEndpoints({endpoints:l=>({getAlertmanagerChoiceStatus:l.query({query:()=>({url:"/api/v1/ngalert"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagerConfig:l.query({query:()=>({url:"/api/v1/ngalert/admin_config"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagers:l.query({query:()=>({url:"/api/v1/ngalert/alertmanagers"}),transformResponse:i=>i.data}),saveExternalAlertmanagersConfig:l.mutation({query:i=>({url:"/api/v1/ngalert/admin_config",method:"POST",data:i}),invalidatesTags:["AlertmanagerChoice"]})})})},40106:(B,v,e)=>{e.d(v,{C0:()=>h,Uv:()=>i,Xq:()=>g});var s=e(68404),t=e(45253),l=e(19985),i=(c=>(c.ContactPoint="contact point",c.Template="template",c.MuteTiming="mute timing",c.AlertRule="alert rule",c.RootNotificationPolicy="root notification policy",c))(i||{});const g=({resource:c})=>s.createElement(t.b,{title:`This ${c} cannot be edited through the UI`,severity:"info"},"This ",c," has been provisioned, that means it was created by config. Please contact your server admin to update this ",c,"."),h=()=>s.createElement(l.C,{text:"Provisioned",color:"purple"})},30151:(B,v,e)=>{e.d(v,{F:()=>T});var s=e(52423),t=e(82897),l=e.n(t),i=e(68404),g=e(26418),h=e(54408),c=e(72648),m=e(39904),u=e(64353),p=e(61860),P=e(46967),R=e(41904);const T=({className:I,onFilterChange:y,defaultQueryString:n})=>{const o=(0,c.wW)(x),r=(0,i.useMemo)(()=>(0,t.debounce)(O=>{(0,h.PN)(R.z7.filterByLabel);const D=O.target;y(D.value)},600),[y]);(0,i.useEffect)(()=>r.cancel(),[r]);const d=i.createElement(m.J,{name:"search"});return i.createElement("div",{className:I},i.createElement(u._,null,i.createElement(g.Stack,{gap:.5},i.createElement("span",null,"Search by label"),i.createElement(p.u,{content:i.createElement("div",null,"Filter alerts using label querying, ex:",i.createElement("pre",null,'{severity="critical", instance=~"cluster-us-.+"}'))},i.createElement(m.J,{className:o.icon,name:"info-circle",size:"sm"})))),i.createElement(P.I,{placeholder:"Search",defaultValue:n,onChange:r,"data-testid":"search-query-input",prefix:d,className:o.inputWidth}))},x=I=>({icon:s.css`
    margin-right: ${I.spacing(.5)};
  `,inputWidth:s.css`
    width: 340px;
    flex-grow: 0;
  `})},41273:(B,v,e)=>{e.d(v,{E:()=>u});var s=e(52423),t=e(68404),l=e(37932),i=e(72648),g=e(31403),h=e(98102),c=e(60048),m=e(93411);const u=t.forwardRef(({text:P,ruleIdentifier:R,isProvisioned:T,className:x},I)=>{const[y,n]=(0,t.useState)(void 0),o=(0,i.wW)(p),r=(0,m.u)("/alerting/new",{copyFrom:c.$V(R)});return t.createElement(t.Fragment,null,t.createElement(g.Qj,{title:"Copy",className:x,size:"sm",key:"clone",variant:"secondary",icon:"copy",href:T?void 0:r,onClick:T?()=>n(r):void 0,ref:I},P),t.createElement(h.s,{isOpen:!!y,title:"Copy provisioned alert rule",body:t.createElement("div",null,t.createElement("p",null,"The new rule will ",t.createElement("span",{className:o.bold},"NOT")," be marked as a provisioned rule."),t.createElement("p",null,"You will need to set a new alert group for the copied rule because the original one has been provisioned and cannot be used for rules created in the UI.")),confirmText:"Copy",onConfirm:()=>y&&l.E1.push(y),onDismiss:()=>n(void 0)}))});u.displayName="CloneRuleButton";const p=P=>({bold:s.css`
    font-weight: ${P.typography.fontWeightBold};
  `})},49279:(B,v,e)=>{e.d(v,{f:()=>_e});var s=e(52423),t=e(68404),l=e(70356),i=e(8928),g=e(27677),h=e(55887),c=e(35645),m=e(72648),u=e(31403),p=e(94599),P=e(52081),R=e(98102),T=e(60499),x=e(82002),I=e(39031),y=e(81168),n=e(46063),o=e(30173),r=e(44391),d=e(35029),O=e(82897),D=e(38849),C=e(26418),M=e(61744),A=e(45253),S=e(24799),U=e(64353),b=e(61860),W=e(39904),N=e(46967),$=e(72004),se=e(69945);function X(a){const E=(0,y.useDispatch)(),f=(0,se._)(_=>_.managedAlertStateHistory);return(0,t.useEffect)(()=>{E((0,$.Ms)(a))},[E,a]),f}var w=e(24782),L=e(53731),le=e(45608);const k=({alertId:a})=>{const[E,f]=(0,t.useState)(""),_=(0,t.useCallback)(H=>{f(H.currentTarget.value)},[]),{loading:K,error:F,result:G=[]}=X(a),J=(0,m.wW)(ye);if(K&&!F)return t.createElement(M.u,{text:"Loading history..."});if(F&&!K)return t.createElement(A.b,{title:"Failed to fetch alert state history"},F.message);const ge=[{id:"state",label:"State",size:"max-content",renderCell:me},{id:"value",label:"",size:"auto",renderCell:ce},{id:"timestamp",label:"Time",size:"max-content",renderCell:ue}],ve=Object.entries(q(G)).sort().filter(([H])=>ie(H,E)).map(([H,oe])=>{const fe=oe.map(z=>({id:z.id,data:z}));return t.createElement("div",{key:H},t.createElement("header",{className:J.tableGroupKey},t.createElement("code",null,H)),t.createElement(L.t,{cols:ge,items:fe}))});return t.createElement("div",null,t.createElement("nav",null,t.createElement(S.g,{label:t.createElement(U._,null,t.createElement(C.Stack,{gap:.5},t.createElement("span",null,"Filter group"),t.createElement(b.u,{content:t.createElement("div",null,"Filter each state history group either by exact match or a regular expression, ex:"," ",t.createElement("code",null,"region=eu-west-1")," or ",t.createElement("code",null,"/region=us-.+/"))},t.createElement(W.J,{name:"info-circle",size:"sm"}))))},t.createElement(N.I,{prefix:t.createElement(W.J,{name:"search"}),onChange:_,placeholder:"Search"}))),ve)};function q(a){const E=a.map(f=>{const _=/{.*?}/g,K=f.text.match(_)?.at(-1)??"";return{id:String(f.id),state:f.newState,text:f.text.replace(K,""),data:f.data,timestamp:f.updated,stringifiedLabels:K}});return(0,O.groupBy)(E,f=>f.stringifiedLabels)}function ie(a,E){if(E==="")return!0;if(!(E.startsWith("/")&&E.endsWith("/")))return a.includes(E);try{return new RegExp(E.slice(1,-1)).test(a)}catch{return!1}}function ce(a){const E=a.data.data?.evalMatches??[];return t.createElement(t.Fragment,null,a.data.text,t.createElement(de,null,E.map(f=>t.createElement(w.i,{key:f.metric,labelKey:f.metric,value:String(f.value)}))))}function me(a){return t.createElement(le.l,{state:a.data.state})}function ue(a){return t.createElement("div",{className:ee},a.data.timestamp&&t.createElement("span",null,(0,D.dq)(a.data.timestamp)))}const de=({children:a})=>{const{wrapper:E}=(0,m.wW)(ye);return t.createElement("div",{className:E},a)},ee=s.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`,ye=a=>({wrapper:s.css`
    & > * {
      margin-right: ${a.spacing(1)};
    }
  `,tableGroupKey:s.css`
    margin-top: ${a.spacing(2)};
    margin-bottom: ${a.spacing(2)};
  `});function Ce(a){const[E,f]=(0,t.useState)(!1);return{StateHistoryModal:(0,t.useMemo)(()=>t.createElement(d.u,{isOpen:E,onDismiss:()=>f(!1),closeOnBackdropClick:!0,closeOnEscape:!0,title:"State history"},t.createElement(k,{alertId:a})),[a,E]),showStateHistoryModal:()=>f(!0),hideStateHistoryModal:()=>f(!1)}}var Te=e(97953),xe=e(20194),te=e(37190),Y=e(45849),Re=e(10505),Ee=e(60048),ne=e(79662),Ie=e(58509),De=e(2390);const Qe=({children:a,plugin:E,loadingComponent:f,notInstalledFallback:_})=>{const{loading:K,installed:F}=usePluginBridge(E);return K?f??null:F?React.createElement(React.Fragment,null,a):_??null};function Ae(a,E,f){const _=new URLSearchParams(f).toString();return`/a/${a}${E}`+(_?"?"+_:"")}const Ue=({title:a="",severity:E="",url:f=""})=>{const _=Ae(De.W.Incident,"/incidents/declare",{title:a,severity:E,url:f}),{loading:K,installed:F,settings:G}=(0,Ie.n)(De.W.Incident);return t.createElement(t.Fragment,null,K===!0&&t.createElement(u.zx,{icon:"fire",size:"sm",type:"button",disabled:!0},"Declare Incident"),F===!1&&t.createElement(b.u,{content:"Grafana Incident is not installed or is not configured correctly"},t.createElement(u.zx,{icon:"fire",size:"sm",type:"button",disabled:!0},"Declare Incident")),G&&t.createElement(u.Qj,{icon:"fire",size:"sm",type:"button",href:_},"Declare Incident"))};var Le=e(41273);const _e=({rule:a,rulesSource:E,isViewMode:f})=>{const _=(0,m.wW)(We),{namespace:K,group:F,rulerRule:G}=a,J=(0,ne.Pc)(a.rulerRule)?a.rulerRule.grafana_alert.id??"":"",{StateHistoryModal:ge,showStateHistoryModal:ve}=Ce(J),H=(0,y.useDispatch)(),oe=(0,l.TH)(),fe=(0,T.iG)(),[z,pe]=(0,t.useState)(),Me=(0,Y.HY)(E)?E:(0,xe.Xy)(E.jsonData.alertmanagerUid)?.name,be=x.Vt.hasPermission(y.AccessControlAction.DataSourcesExplore),j=[],Z=[],Ke=()=>{if(z&&z.rulerRule){const V=Ee.Zk((0,Y.EG)(z.namespace.rulesSource),z.namespace.name,z.group.name,z.rulerRule);H((0,$.hS)(V,{navigateTo:f?"/alerting/list":void 0})),pe(void 0)}},Pe=()=>{if((0,Y.jq)(E)){const{appUrl:V,appSubUrl:Q}=c.v,ae=Q!==""?`${V}${Q}/`:c.v.appUrl,He=`${encodeURIComponent(E.name)}/${encodeURIComponent(a.name)}`;return`${ae}alerting/${He}/find`}return window.location.href.split("?")[0]},re=(0,ne.Jq)(F),Oe=(0,Y.EG)(E),he=(0,ne.Pc)(a.rulerRule)&&Boolean(a.rulerRule.grafana_alert.provenance),$e=(0,ne.x_)(a.promRule)&&a.promRule.state===n.x_.Firing,Fe=(0,Te.Bz)(Oe),Ne=x.Vt.hasPermission(Fe.create),{isEditable:ze,isRemovable:je}=(0,r.M)(Oe,G),Ge=Se(a),Ve=oe.pathname+oe.search;if((0,Y.jq)(E)&&be&&!re&&j.push(t.createElement(u.Qj,{size:"sm",key:"explore",variant:"primary",icon:"chart-line",target:"__blank",href:(0,Re.mH)(E.name,a.query)},"See graph")),a.annotations[te.q6.runbookURL]&&j.push(t.createElement(u.Qj,{size:"sm",key:"runbook",variant:"primary",icon:"book",target:"__blank",href:i.QX.sanitizeUrl(a.annotations[te.q6.runbookURL])},"View runbook")),a.annotations[te.q6.dashboardUID]){const V=a.annotations[te.q6.dashboardUID];if(V){j.push(t.createElement(u.Qj,{size:"sm",key:"dashboard",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(V)}`},"Go to dashboard"));const Q=a.annotations[te.q6.panelID];Q&&j.push(t.createElement(u.Qj,{size:"sm",key:"panel",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(V)}?viewPanel=${encodeURIComponent(Q)}`},"Go to panel"))}}if(Ge&&Me&&j.push(t.createElement(u.Qj,{size:"sm",key:"silence",icon:"bell-slash",target:"__blank",href:(0,Re.Vv)(Me,a)},"Silence")),J&&j.push(t.createElement(t.Fragment,{key:"history"},t.createElement(u.zx,{size:"sm",icon:"history",onClick:()=>ve()},"Show state history"),ge)),$e&&Be()&&j.push(t.createElement(t.Fragment,{key:"declare-incident"},t.createElement(Ue,{title:a.name,url:Pe()}))),f&&G){const V=(0,Y.EG)(E),Q=Ee.Zk(V,K.name,F.name,G);if(ze&&!re&&(Z.push(t.createElement(p.m,{key:"copy",icon:"copy",onClipboardError:ae=>{fe.error("Error while copying URL",ae)},size:"sm",getText:Pe},"Copy link to rule")),!he)){const ae=g.Cj.renderUrl(`${c.v.appSubUrl}/alerting/${encodeURIComponent(Ee.$V(Q))}/edit`,{returnTo:Ve});Z.push(t.createElement(u.Qj,{size:"sm",key:"edit",variant:"secondary",icon:"pen",href:ae},"Edit"))}Ne&&!re&&Z.push(t.createElement(Le.E,{key:"clone",text:"Copy",ruleIdentifier:Q,isProvisioned:he})),je&&!re&&!he&&Z.push(t.createElement(u.zx,{size:"sm",type:"button",key:"delete",variant:"secondary",icon:"trash-alt",onClick:()=>pe(a)},"Delete"))}return j.length||Z.length?t.createElement(t.Fragment,null,t.createElement("div",{className:_.wrapper},t.createElement(P.Lh,{width:"auto"},j.length?j:t.createElement("div",null)),t.createElement(P.Lh,{width:"auto"},Z.length?Z:t.createElement("div",null))),!!z&&t.createElement(R.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:Ke,onDismiss:()=>pe(void 0)})):null};function Be(){const a=c.v.buildInfo,E=a.edition===h.e.OpenSource,f=a.env==="development";return!E||f}function Se(a){const E=(0,ne.Pc)(a.rulerRule),{useGetAlertmanagerChoiceStatusQuery:f}=o.h,{currentData:_,isLoading:K}=f(void 0,{skip:!E});if(!E||K)return!1;const F=x.Vt.hasAccess(y.AccessControlAction.AlertingInstanceCreate,x.Vt.isEditor),G=_?.alertmanagersChoice===I.TE.External,J=_?.alertmanagersChoice===I.TE.All;return F&&(!G||J)}const We=a=>({wrapper:s.css`
    padding: ${a.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${a.colors.border.medium};
  `})},68854:(B,v,e)=>{e.d(v,{J:()=>g});var s=e(52423),t=e(68404),l=e(72648),i=e(78543);function g(c){const{annotations:m}=c,u=(0,l.wW)(h);return m.length===0?null:t.createElement("div",{className:u.annotations},m.map(([p,P])=>t.createElement(i.a,{key:p,annotationKey:p,value:P})))}const h=()=>({annotations:s.css`
    margin-top: 46px;
  `})},24990:(B,v,e)=>{e.d(v,{C:()=>u});var s=e(52423),t=e(68404),l=e(86647),i=e(72648),g=e(97573),h=e(45849),c=e(79662),m=e(80498);function u(P){const{rulesSource:R,rule:T}=P,x=(0,i.wW)(p),I=(0,t.useMemo)(()=>{if((0,h.jq)(R))return[{name:R.name,icon:R.meta.info.logos.small}];if((0,c.Pc)(T.rulerRule)){const{data:y}=T.rulerRule.grafana_alert,n=y.reduce((o,r)=>{const d=(0,l.F)().getInstanceSettings(r.datasourceUid);return!d||d.uid===g.Yq||(o[d.name]={name:d.name,icon:d.meta.info.logos.small}),o},{});return Object.values(n)}return[]},[T,R]);return I.length===0?null:t.createElement(m.C,{label:"Data source"},I.map(({name:y,icon:n},o)=>t.createElement("div",{key:y},n&&t.createElement(t.Fragment,null,t.createElement("img",{alt:`${y} datasource logo`,className:x.dataSourceIcon,src:n})," "),y)))}function p(P){const R=P.spacing(2);return{dataSourceIcon:s.css`
      width: ${R};
      height: ${R};
    `}}},8674:(B,v,e)=>{e.d(v,{C:()=>y});var s=e(52423),t=e(68404),l=e(45849),i=e(80498),g=e(57706),h=e(56747),c=e(67660),m=e(12724),u=e(72648),p=e(19370),P=e(21899),R=e(94884);const T=({language:o,expr:r})=>{const d=(0,t.useMemo)(()=>[(0,c.Z)({onlyIn:D=>D.type==="code_block",getSyntax:()=>o},{...g.languages,[o]:o==="logql"?p.ZP:P.ZP})],[o]),O=(0,t.useMemo)(()=>(0,m.l1)(r),[r]);return t.createElement(h.ML,{"data-testid":"expression-editor",plugins:d,value:O})},x=({expression:o,rulesSource:r})=>{const d=(0,u.wW)(I);return t.createElement(R.t,{className:(0,s.cx)(d.well,"slate-query-field")},(0,l.jq)(r)?t.createElement(T,{expr:o,language:r.type===l.ye.Loki?"logql":"promql"}):o)},I=o=>({well:s.css`
    font-family: ${o.typography.fontFamilyMonospace};
  `});function y(o){const{annotations:r,rulesSource:d,rule:O}=o,D=n();return(0,l.jq)(d)?t.createElement(i.C,{label:"Expression",horizontal:!0,className:(0,s.cx)({[D.exprRow]:!!r.length})},t.createElement(x,{expression:O.query,rulesSource:d})):null}const n=()=>({exprRow:s.css`
    margin-bottom: 46px;
  `})},78443:(B,v,e)=>{e.d(v,{M:()=>O});var s=e(52423),t=e(82897),l=e(68404),i=e(72648),g=e(31403),h=e(30151),c=e(34719),m=e(64353),u=e(2594),p=e(46063);const P=({className:M,onStateFilterChange:A,stateFilter:S,filterType:U,itemPerStateStats:b})=>{const W=(0,i.wW)(R),N=L=>function(){return b&&b[L]?l.createElement(c.V,{name:b[L].toFixed(0),colorIndex:9,className:W.tag}):null},$=Object.values(p.bj).map(L=>({label:L,value:L,component:N(L)})),X=[p.x_.Firing,p.x_.Pending].map(L=>({label:(0,t.capitalize)(L),value:L,component:N(L)})),w=U==="grafana"?$:X;return l.createElement("div",{className:M,"data-testid":"alert-instance-state-filter"},l.createElement(m._,null,"State"),l.createElement(u.S,{options:w,value:S,onChange:A,onClick:L=>{L===S&&A(void 0)}}))};function R(M){return{tag:s.css`
      font-size: 11px;
      font-weight: normal;
      padding: ${M.spacing(.25,.5)};
      vertical-align: middle;
      margin-left: ${M.spacing(.5)};
    `}}var T=e(20194),x=e(10505),I=e(40286),y=e(45849),n=e(79662),o=e(80498),r=e(48563);function d(M){const A=(0,i.wW)(C),{ruleViewPageLink:S,stats:U}=M;return l.createElement("div",{className:A.footerRow},l.createElement("div",null,"Showing ",U.visibleItemsCount," out of ",U.totalItemsCount," instances"),S&&l.createElement(g.Qj,{href:S,size:"sm",variant:"secondary"},"Show all ",U.totalItemsCount," alert instances"))}function O(M){const{rule:{promRule:A,namespace:S},itemsDisplayLimit:U=Number.POSITIVE_INFINITY,pagination:b}=M,[W,N]=(0,l.useState)(),[$,se]=(0,l.useState)(),[X]=(0,l.useState)(Math.floor(Math.random()*100)),w=`queryString-${X}`,L=(0,i.wW)(C),le=(0,y.HY)(S.rulesSource)?y.GC:"prometheus",k=(0,l.useMemo)(()=>(0,n.x_)(A)&&A.alerts?.length?D(W,$,(0,x.Zl)(I.As.Importance,A.alerts)):[],[A,$,W]);if(!(0,n.x_)(A))return null;const q=k.slice(0,U),ie=(0,t.countBy)(A.alerts,ee=>(0,p.ED)(ee.state)),ce=k.length-q.length,me={totalItemsCount:k.length,visibleItemsCount:q.length},ue=(0,x.V2)(S.rulesSource,M.rule,location.pathname+location.search),de=ce?l.createElement(d,{stats:me,ruleViewPageLink:ue}):void 0;return l.createElement(o.C,{label:"Matching instances",horizontal:!0},l.createElement("div",{className:(0,s.cx)(L.flexRow,L.spaceBetween)},l.createElement("div",{className:L.flexRow},l.createElement(h.F,{className:L.rowChild,key:w,defaultQueryString:W,onFilterChange:ee=>N(ee)}),l.createElement(P,{className:L.rowChild,filterType:le,stateFilter:$,onStateFilterChange:se,itemPerStateStats:ie}))),l.createElement(r.o,{instances:q,pagination:b,footerRow:de}))}function D(M,A,S){let U=[...S];if(M){const b=(0,T.Zh)(M||"");U=U.filter(({labels:W})=>(0,T.eD)(W,b))}return A&&(U=U.filter(b=>(0,p.ED)(b.state)===A)),U}const C=M=>({flexRow:s.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${M.spacing(1)};
    `,spaceBetween:s.css`
      justify-content: space-between;
    `,rowChild:s.css`
      margin-right: ${M.spacing(1)};
    `,footerRow:s.css`
      display: flex;
      flex-direction: column;
      gap: ${M.spacing(1)};
      justify-content: space-between;
      align-items: center;
      width: 100%;
    `})},80399:(B,v,e)=>{e.d(v,{V:()=>h});var s=e(52423),t=e(68404),l=e(72648),i=e(61860),g=e(39904);const h=({rule:m})=>{const u=(0,l.wW)(c);return m.health==="err"||m.health==="error"?t.createElement(i.u,{theme:"error",content:m.lastError||"No error message provided."},t.createElement("div",{className:u.warn},t.createElement(g.J,{name:"exclamation-triangle"}),t.createElement("span",null,"error"))):t.createElement(t.Fragment,null,m.health)},c=m=>({warn:s.css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${m.spacing(1)};

    color: ${m.colors.warning.text};
  `})},48208:(B,v,e)=>{e.d(v,{p:()=>p});var s=e(52423),t=e(68404),l=e(37556),i=e(72648),g=e(52081),h=e(67487),c=e(46063),m=e(79662),u=e(45608);const p=({rule:R,isDeleting:T,isCreating:x,isPaused:I})=>{const y=(0,i.wW)(P),{promRule:n}=R,o=(0,t.useMemo)(()=>{if(n&&(0,m.x_)(n)&&n.alerts?.length&&n.state!==c.x_.Inactive){const r=(0,m.ub)(n);if(r)return t.createElement("span",{title:String(r),className:y.for},"for"," ",(0,l.vT)({start:r,end:new Date},!1))}return null},[n,y]);return T?t.createElement(g.Lh,{align:"flex-start"},t.createElement(h.$,null),"deleting"):x?t.createElement(g.Lh,{align:"flex-start"}," ",t.createElement(h.$,null),"creating"):n&&(0,m.x_)(n)?t.createElement(g.Lh,{align:"flex-start"},t.createElement(u.l,{state:n.state,isPaused:I}),o):n&&(0,m.OP)(n)?t.createElement(t.Fragment,null,"Recording rule"):t.createElement(t.Fragment,null,"n/a")},P=R=>({for:s.css`
    font-size: ${R.typography.bodySmall.fontSize};
    color: ${R.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},61627:(B,v,e)=>{e.d(v,{Kd:()=>m,Zo:()=>c});var s=e(82897),t=e.n(s),l=e(68404),i=e(45849),g=e(79662),h=e(69945);function c(n){const o=(0,h._)(D=>D.promRules),r=(0,h._)(D=>D.rulerRules),d=(0,l.useRef)({}),O=(0,l.useMemo)(()=>{if(n){const D=(0,i.o_)(n);if(!D)throw new Error(`Unknown rules source: ${n}`);return[D]}return(0,i.h_)()},[n]);return(0,l.useMemo)(()=>O.map(D=>{const C=(0,i.jq)(D)?D.name:D,M=o[C]?.result,A=r[C]?.result,S=d.current[C];if(S&&S.promRules===M&&S.rulerRules===A)return S.result;const U={};Object.entries(A||{}).forEach(([W,N])=>{const $={rulesSource:D,name:W,groups:[]};U[W]=$,p($,N)}),M?.forEach(({name:W,groups:N})=>{const $=U[W]=U[W]||{rulesSource:D,name:W,groups:[]};P($,N)});const b=Object.values(U);return d.current[C]={promRules:M,rulerRules:A,result:b},b}).flat(),[o,r,O])}function m(n){return n.map(o=>{const r={...o,groups:[]};return r.groups.push({name:"default",rules:u(o.groups.flatMap(d=>d.rules))}),r})}function u(n){return n.sort((o,r)=>o.name.localeCompare(r.name))}function p(n,o=[]){n.groups=o.map(r=>{const d={name:r.name,interval:r.interval,source_tenants:r.source_tenants,rules:[]};return d.rules=r.rules.map(O=>T(O,n,d)),d})}function P(n,o){const r=new Map;n.groups.forEach(d=>r.set(d.name,d)),o.forEach(d=>{let O=r.get(d.name);O||(O={name:d.name,rules:[]},n.groups.push(O),r.set(d.name,O));const D=new Map;O.rules.forEach(C=>{const M=D.get(C.name);M?M.push(C):D.set(C.name,[C])}),(d.rules??[]).forEach(C=>{const M=x(C,D,n.rulesSource);M?M.promRule=C:O.rules.push(R(C,n,O))})})}function R(n,o,r){return{name:n.name,query:n.query,labels:n.labels||{},annotations:(0,g.x_)(n)?n.annotations||{}:{},promRule:n,namespace:o,group:r}}function T(n,o,r){return(0,g.cG)(n)?{name:n.alert,query:n.expr,labels:n.labels||{},annotations:n.annotations||{},rulerRule:n,namespace:o,group:r}:(0,g.yF)(n)?{name:n.record,query:n.expr,labels:n.labels||{},annotations:{},rulerRule:n,namespace:o,group:r}:{name:n.grafana_alert.title,query:"",labels:n.labels||{},annotations:n.annotations||{},rulerRule:n,namespace:o,group:r}}function x(n,o,r){const d=o.get(n.name);if(!d)return;if((0,i.HY)(r))return d[0];const O=d.find(C=>!C.promRule&&I(C,n,!0));if(O)return O;const D=d.find(C=>!C.promRule&&I(C,n,!1));if(D)return D}function I(n,o,r=!0){return n.name===o.name?(0,s.isEqual)([r?y(n.query):"",n.labels,n.annotations],[r?y(o.query):"",o.labels||{},(0,g.x_)(o)?o.annotations||{}:{}]):!1}function y(n){return n.length>1&&n[0]==="("&&n[n.length-1]===")"&&(n=n.slice(1,-1)),n=n.replace(/\s|\n/g,""),n.split("").sort().join("")}},55485:(B,v,e)=>{e.d(v,{W:()=>h});var s=e(68404),t=e(81168),l=e(72004),i=e(46818),g=e(69945);function h(c){const m=(0,t.useDispatch)(),u=(0,g._)(p=>p.folders);if((0,s.useEffect)(()=>{c&&m((0,l.sw)(c))},[m,c]),c){const p=u[c]||i.oq;return{folder:p.result,loading:p.loading}}return{loading:!1}}},44391:(B,v,e)=>{e.d(v,{M:()=>h});var s=e(82002),t=e(97953),l=e(79662),i=e(55485),g=e(69945);function h(c,m){const u=(0,g._)(n=>n.dataSources),p=m&&(0,l.Pc)(m)?m.grafana_alert.namespace_uid:void 0,P=(0,t.Bz)(c),{folder:R,loading:T}=(0,i.W)(p);if(!m)return{isEditable:!1,isRemovable:!1,loading:!1};if((0,l.Pc)(m)){if(!p)throw new Error(`Rule ${m.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);if(!R)return{isEditable:!1,isRemovable:!1,loading:T};const n=R.canSave,o=s.Vt.hasAccessInMetadata(P.update,R,n),r=s.Vt.hasAccessInMetadata(P.delete,R,n);return{isEditable:o,isRemovable:r,loading:T}}const x=Boolean(u[c]?.result?.rulerConfig),I=s.Vt.hasAccess(P.update,s.Vt.isEditor),y=s.Vt.hasAccess(P.delete,s.Vt.isEditor);return{isEditable:I&&x,isRemovable:y&&x,loading:u[c]?.loading}}},58509:(B,v,e)=>{e.d(v,{n:()=>l});var s=e(22350),t=e(13011);function l(i){const{loading:g,error:h,value:c}=(0,s.Z)(()=>(0,t.a)(i,{showErrorAlert:!1})),m=c&&!h&&!g,u=c?.enabled;return g&&!c?{loading:!0}:!m||!u?{loading:!1,installed:!1}:{loading:g,installed:!0,settings:c}}},2390:(B,v,e)=>{e.d(v,{W:()=>s});var s=(t=>(t.Incident="grafana-incident-app",t.OnCall="grafana-oncall-app",t.MachineLearning="grafana-ml-app",t))(s||{})},19370:(B,v,e)=>{e.d(v,{$5:()=>s,EH:()=>i,Rd:()=>l,ZP:()=>m,r8:()=>g,uR:()=>t,xY:()=>c});const s=[{label:"avg",insertText:"avg",documentation:"Calculate the average over dimensions"},{label:"bottomk",insertText:"bottomk",documentation:"Smallest k elements by sample value"},{label:"count",insertText:"count",documentation:"Count number of elements in the vector"},{label:"max",insertText:"max",documentation:"Select maximum over dimensions"},{label:"min",insertText:"min",documentation:"Select minimum over dimensions"},{label:"stddev",insertText:"stddev",documentation:"Calculate population standard deviation over dimensions"},{label:"stdvar",insertText:"stdvar",documentation:"Calculate population standard variance over dimensions"},{label:"sum",insertText:"sum",documentation:"Calculate sum over dimensions"},{label:"topk",insertText:"topk",documentation:"Largest k elements by sample value"}],t=[{label:"json",insertText:"json",documentation:"Extracting labels from the log line using json parser."},{label:"regexp",insertText:'regexp ""',documentation:"Extracting labels from the log line using regexp parser.",move:-1},{label:"logfmt",insertText:"logfmt",documentation:"Extracting labels from the log line using logfmt parser."},{label:"pattern",insertText:"pattern",documentation:"Extracting labels from the log line using pattern parser. Only available in Loki 2.3+."},{label:"unpack",insertText:"unpack",detail:"unpack identifier",documentation:'Parses a JSON log line, unpacking all embedded labels in the pack stage. A special property "_entry" will also be used to replace the original log line. Only available in Loki 2.2+.'}],l=[{label:"unwrap",insertText:"unwrap",detail:"unwrap identifier",documentation:"Take labels and use the values as sample data for metric aggregations."},{label:"label_format",insertText:"label_format",documentation:"Use to rename, modify or add labels. For example, | label_format foo=bar ."},{label:"line_format",insertText:"line_format",documentation:'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" .'}],i=[{insertText:"avg_over_time",label:"avg_over_time",detail:"avg_over_time(range-vector)",documentation:"The average of all values in the specified interval."},{insertText:"bytes_over_time",label:"bytes_over_time",detail:"bytes_over_time(range-vector)",documentation:"Counts the amount of bytes used by each log stream for a given range"},{insertText:"bytes_rate",label:"bytes_rate",detail:"bytes_rate(range-vector)",documentation:"Calculates the number of bytes per second for each stream."},{insertText:"first_over_time",label:"first_over_time",detail:"first_over_time(range-vector)",documentation:"The first of all values in the specified interval. Only available in Loki 2.3+."},{insertText:"last_over_time",label:"last_over_time",detail:"last_over_time(range-vector)",documentation:"The last of all values in the specified interval. Only available in Loki 2.3+."},{insertText:"sum_over_time",label:"sum_over_time",detail:"sum_over_time(range-vector)",documentation:"The sum of all values in the specified interval."},{insertText:"count_over_time",label:"count_over_time",detail:"count_over_time(range-vector)",documentation:"The count of all values in the specified interval."},{insertText:"max_over_time",label:"max_over_time",detail:"max_over_time(range-vector)",documentation:"The maximum of all values in the specified interval."},{insertText:"min_over_time",label:"min_over_time",detail:"min_over_time(range-vector)",documentation:"The minimum of all values in the specified interval."},{insertText:"quantile_over_time",label:"quantile_over_time",detail:"quantile_over_time(scalar, range-vector)",documentation:"The \u03C6-quantile (0 \u2264 \u03C6 \u2264 1) of the values in the specified interval."},{insertText:"rate",label:"rate",detail:"rate(v range-vector)",documentation:"Calculates the number of entries per second."},{insertText:"stddev_over_time",label:"stddev_over_time",detail:"stddev_over_time(range-vector)",documentation:"The population standard deviation of the values in the specified interval."},{insertText:"stdvar_over_time",label:"stdvar_over_time",detail:"stdvar_over_time(range-vector)",documentation:"The population standard variance of the values in the specified interval."}],g=[...s,...i],h=[...g,...l,...t].map(u=>u.label),c={comment:{pattern:/#.*/},"context-aggregation":{pattern:/((without|by)\s*)\([^)]*\)/,lookbehind:!0,inside:{"label-key":{pattern:/[^(),\s][^,)]*[^),\s]*/,alias:"attr-name"},punctuation:/[()]/}},"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},"context-pipe":{pattern:/\s\|[^=~]\s?\w*/i,inside:{"pipe-operator":{pattern:/\|/i,alias:"operator"},"pipe-operations":{pattern:new RegExp(`${[...t,...l].map(u=>u.label).join("|")}`,"i"),alias:"keyword"}}},function:new RegExp(`\\b(?:${g.map(u=>u.label).join("|")})(?=\\s*\\()`,"i"),"context-range":[{pattern:/\[[^\]]*(?=\])/,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}},{pattern:/(offset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}}],quote:{pattern:/"(?:\\.|[^\\"])*"/,alias:"string",greedy:!0},backticks:{pattern:/`(?:\\.|[^\\`])*`/,alias:"string",greedy:!0},number:/\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,operator:/\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,punctuation:/[{}(),.]/},m=c}}]);

//# sourceMappingURL=4259.388ff5263374111783f9.js.map