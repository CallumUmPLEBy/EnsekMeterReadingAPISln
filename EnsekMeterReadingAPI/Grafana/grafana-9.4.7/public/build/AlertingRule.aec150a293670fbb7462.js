"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4679],{77110:(te,U,n)=>{n.r(U),n.d(U,{RuleViewer:()=>pe,default:()=>st});var r=n(52423),N=n(64421),e=n(68404),w=n(86253),L=n(3499),V=n(49922),b=n(35645),E=n(72648),T=n(45253),h=n(61744),C=n(52081),S=n(31403),z=n(39904),m=n(2352),p=n(8180),O=n(53546),$=n(84952),j=n(20091),v=n(82897),A=n(26418),I=n(19985),K=n(25482),Z=n(75e3),M=n(97573),J=n(67162),fe=n(76726),ve=n(89050),ae=n(46519),ye=n(27677),Re=n(86647),xe=n(98825),he=n(9405),Ce=n(35575),$e=n(81168),se=n(37190),De=n(51981),Pe=n(74542);const re=4;function Ne({data:t,refId:a,model:l,datasourceUid:i,relativeTimeRange:o,onTimeRangeChange:c,className:g}){const u=(0,E.l4)(),s=(0,E.wW)(be),y=(0,Z.j)(l)?se.Fe:se.GC,[d,D]=(0,e.useState)(y),R=(0,Re.F)().getInstanceSettings(i),[B,W]=(0,e.useState)({frameIndex:0,showHeader:!0}),q=(0,e.useCallback)(P=>{const Q=(0,ae.CQ)().unix()-P.unix();if(o){const F=o.from-o.to;c({from:Q+F,to:Q})}},[c,o]),_=(0,e.useCallback)(P=>P===0?(0,ae.CQ)():(0,ae.CQ)().subtract(P,"seconds"),[]);return t?R?e.createElement("div",{className:(0,r.cx)(s.content,g)},e.createElement(ve.Z,null,({width:P,height:Q})=>e.createElement("div",{style:{width:P,height:Q}},e.createElement("div",{className:s.header},e.createElement("div",{className:s.actions},!(0,Z.j)(l)&&o?e.createElement(Ce.x,{date:_(o.to),onChange:q,maxDate:new Date}):null,e.createElement(Pe.j,{onChange:D,value:d,size:"md"}),e.createElement(De.q,{actions:[$e.AccessControlAction.DataSourcesExplore]},!(0,Z.j)(l)&&e.createElement(e.Fragment,null,e.createElement("div",{className:s.spacing}),e.createElement(S.Qj,{size:"md",variant:"secondary",icon:"compass",target:"_blank",href:Me(R,l)},"View in Explore"))))),e.createElement(xe.$,{height:Q-u.spacing.gridSize*re,width:P,data:t,pluginId:d,title:"",onOptionsChange:W,options:B})))):e.createElement("div",{className:(0,r.cx)(s.content,g)},e.createElement(T.b,{title:"Could not find datasource for query"}),e.createElement(he.p,{width:"100%",height:"250px",language:"json",showLineNumbers:!1,showMiniMap:!1,value:JSON.stringify(l,null,"	"),readOnly:!0})):null}function Me(t,a){const{name:l}=t,{refId:i,...o}=a,c={...o,datasource:l};return ye.Cj.renderUrl(`${b.v.appSubUrl}/explore`,{left:JSON.stringify({datasource:l,queries:[{refId:"A",...c}],range:{from:"now-1h",to:"now"}})})}const be=t=>({content:r.css`
      width: 100%;
      height: 250px;
    `,header:r.css`
      height: ${t.spacing(re)};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      white-space: nowrap;
    `,refId:r.css`
      font-weight: ${t.typography.fontWeightMedium};
      color: ${t.colors.text.link};
      overflow: hidden;
    `,dataSource:r.css`
      margin-left: ${t.spacing(1)};
      font-style: italic;
      color: ${t.colors.text.secondary};
    `,actions:r.css`
      display: flex;
      align-items: center;
    `,spacing:r.css`
      padding: ${t.spacing(0,1,0,0)};
    `,errorMessage:r.css`
      white-space: pre-wrap;
    `});function Te({queries:t,condition:a,evalDataByQuery:l={},evalTimeRanges:i={},onTimeRangeChange:o}){const c=(0,v.keyBy)(Object.values(b.v.datasources),s=>s.uid),g=t.filter(s=>!(0,Z.j)(s.model)),u=t.filter(s=>(0,Z.j)(s.model));return e.createElement(A.Stack,{gap:2,direction:"column"},e.createElement(A.Stack,{gap:2},g.map(({model:s,relativeTimeRange:y,refId:d,datasourceUid:D},R)=>{const B=c[D];return e.createElement(le,{key:R,refId:d,isAlertCondition:a===d,model:s,relativeTimeRange:y,evalTimeRange:i[d],dataSource:B,queryData:l[d],onEvalTimeRangeChange:W=>o(d,W)})})),e.createElement(A.Stack,{gap:1},u.map(({model:s,relativeTimeRange:y,refId:d,datasourceUid:D},R)=>{const B=c[D];return(0,Z.j)(s)&&e.createElement(Ie,{key:R,refId:d,isAlertCondition:a===d,model:s,dataSource:B,evalData:l[d]})})))}function le({refId:t,relativeTimeRange:a,model:l,dataSource:i,queryData:o,evalTimeRange:c,onEvalTimeRangeChange:g}){const u=(0,E.wW)(Oe),s=[i?.name??"[[Data source not found]]"];return a&&s.push((0,K.C_)(a).display),e.createElement(oe,{refId:t,headerItems:s,className:u.contentBox},e.createElement("pre",{className:u.code},e.createElement("code",null,(0,j.$w)(l))),i&&e.createElement(Ne,{refId:t,datasourceUid:i.uid,model:l,data:o,relativeTimeRange:c,onTimeRangeChange:g,className:u.visualization}))}const Oe=t=>({code:r.css`
    margin: ${t.spacing(1)};
  `,contentBox:r.css`
    flex: 1 0 100%; // RuleViewerVisualization uses AutoSizer which doesn't expand the box
  `,visualization:r.css`
    padding: ${t.spacing(1)};
  `});function Ie({refId:t,model:a,evalData:l,isAlertCondition:i}){function o(){switch(a.type){case M.Us.math:return e.createElement(Qe,{model:a});case M.Us.reduce:return e.createElement(We,{model:a});case M.Us.resample:return e.createElement(we,{model:a});case M.Us.classic:return e.createElement(Ae,{model:a});case M.Us.threshold:return e.createElement(Ve,{model:a});default:return e.createElement(e.Fragment,null,"Expression not supported: ",a.type)}}return e.createElement(oe,{refId:t,headerItems:[(0,v.startCase)(a.type)],isAlertCondition:i},o(),l&&e.createElement(fe.bw,{series:l.series,isAlertCondition:i}))}function oe({refId:t,headerItems:a=[],children:l,isAlertCondition:i,className:o}){const c=(0,E.wW)(Se);return e.createElement("div",{className:(0,r.cx)(c.container,o)},e.createElement("header",{className:c.header},e.createElement("span",{className:c.refId},t),a.map((g,u)=>e.createElement("span",{key:u,className:c.textBlock},g)),i&&e.createElement("div",{className:c.conditionIndicator},e.createElement(I.C,{color:"green",icon:"check",text:"Alert condition"}))),l)}const Se=t=>({container:r.css`
    flex: 1 0 25%;
    border: 1px solid ${t.colors.border.strong};
    max-width: 100%;
  `,header:r.css`
    display: flex;
    align-items: center;
    gap: ${t.spacing(1)};
    padding: ${t.spacing(1)};
    background-color: ${t.colors.background.secondary};
  `,textBlock:r.css`
    border: 1px solid ${t.colors.border.weak};
    padding: ${t.spacing(.5,1)};
    background-color: ${t.colors.background.primary};
  `,refId:r.css`
    color: ${t.colors.text.link};
    padding: ${t.spacing(.5,1)};
    border: 1px solid ${t.colors.border.weak};
  `,conditionIndicator:r.css`
    margin-left: auto;
  `});function Ae({model:t}){const a=(0,E.wW)(Be),l=(0,v.keyBy)(J.Z.reducerTypes,c=>c.value),i=(0,v.keyBy)(J.Z.evalOperators,c=>c.value),o=(0,v.keyBy)(J.Z.evalFunctions,c=>c.value);return e.createElement("div",{className:a.container},t.conditions?.map(({query:c,operator:g,reducer:u,evaluator:s},y)=>{const d=ie(s);return e.createElement(e.Fragment,{key:y},e.createElement("div",{className:a.blue},y===0?"WHEN":!!g?.type&&i[g?.type]?.text),e.createElement("div",{className:a.bold},u?.type&&l[u.type]?.text),e.createElement("div",{className:a.blue},"OF"),e.createElement("div",{className:a.bold},c.params[0]),e.createElement("div",{className:a.blue},o[s.type].text),e.createElement("div",{className:a.bold},d?`(${s.params[0]}; ${s.params[1]})`:s.params[0]))}))}const Be=t=>({container:r.css`
    padding: ${t.spacing(1)};
    display: grid;
    grid-template-columns: max-content max-content max-content max-content max-content max-content;
    gap: ${t.spacing(0,1)};
  `,...k(t)});function We({model:t}){const a=(0,E.wW)(Ue),{reducer:l,expression:i,settings:o}=t,c=M.SQ.find(s=>s.value===l),g=o?.mode??M.kN.Strict,u=M.YM.find(s=>s.value===g);return e.createElement("div",{className:a.container},e.createElement("div",{className:a.label},"Function"),e.createElement("div",{className:a.value},c?.label),e.createElement("div",{className:a.label},"Input"),e.createElement("div",{className:a.value},i),e.createElement("div",{className:a.label},"Mode"),e.createElement("div",{className:a.value},u?.label))}const Ue=t=>({container:r.css`
    padding: ${t.spacing(1)};
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > :nth-child(6) {
      grid-column: span 3;
    }
  `,...k(t)});function we({model:t}){const a=(0,E.wW)(Le),{expression:l,window:i,downsampler:o,upsampler:c}=t,g=M.Fr.find(s=>s.value===o),u=M.r8.find(s=>s.value===c);return e.createElement("div",{className:a.container},e.createElement("div",{className:a.label},"Input"),e.createElement("div",{className:a.value},l),e.createElement("div",{className:a.label},"Resample to"),e.createElement("div",{className:a.value},i),e.createElement("div",{className:a.label},"Downsample"),e.createElement("div",{className:a.value},g?.label),e.createElement("div",{className:a.label},"Upsample"),e.createElement("div",{className:a.value},u?.label))}const Le=t=>({container:r.css`
    padding: ${t.spacing(1)};
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `,...k(t)});function Ve({model:t}){const a=(0,E.wW)(ce),{expression:l,conditions:i}=t,o=i&&i[0]?.evaluator,c=M.Mi.find(u=>u.value===o?.type),g=o?ie(o):!1;return e.createElement("div",{className:a.container},e.createElement("div",{className:a.label},"Input"),e.createElement("div",{className:a.value},l),o&&e.createElement(e.Fragment,null,e.createElement("div",{className:a.blue},c?.label),e.createElement("div",{className:a.bold},g?`(${o.params[0]}; ${o.params[1]})`:o.params[0])))}const ce=t=>{const{blue:a,bold:l,...i}=k(t);return{...i,container:r.css`
      padding: ${t.spacing(1)};
      display: flex;
      gap: ${t.spacing(1)};
    `,blue:r.css`
      ${a};
      margin: auto 0;
    `,bold:r.css`
      ${l};
      margin: auto 0;
    `}};function Qe({model:t}){const a=(0,E.wW)(ce),{expression:l}=t;return e.createElement("div",{className:a.container},e.createElement("div",{className:a.label},"Input"),e.createElement("div",{className:a.value},l))}const k=t=>({blue:r.css`
    color: ${t.colors.text.link};
  `,bold:r.css`
    font-weight: ${t.typography.fontWeightBold};
  `,label:r.css`
    display: flex;
    align-items: center;
    padding: ${t.spacing(.5,1)};
    background-color: ${t.colors.background.secondary};
    font-size: ${t.typography.bodySmall.fontSize};
    line-height: ${t.typography.bodySmall.lineHeight};
    font-weight: ${t.typography.fontWeightBold};
  `,value:r.css`
    padding: ${t.spacing(.5,1)};
    border: 1px solid ${t.colors.border.weak};
  `});function ie(t){return t.type===J.$.IsWithinRange||t.type===J.$.IsOutsideRange}var je=n(52694),Y=n(80498),ue=n(40106),H=n(28104),Fe=n(49279),ze=n(68854),Ke=n(24990),Ze=n(8674);const He=({group:t})=>{const a=t.source_tenants??[];return e.createElement(Y.C,{label:"Tenant sources"},e.createElement(e.Fragment,null,a.map(l=>e.createElement("div",{key:l},l))))};var Ge=n(78443),Je=n(80399),Ye=n(48208),Xe=n(69369),ke=n(76277),qe=n(81001),ne=n(45849),G=n(79662);function de(t){if(!t)return[];const{namespace:a,rulerRule:l}=t,{rulesSource:i}=a;if((0,ne.HY)(i)&&(0,G.Pc)(l))return l.grafana_alert.data;if((0,ne.jq)(i)){const o=et(i,t);return[_e(o,i.uid)]}return[]}function _e(t,a){return{refId:t.refId,datasourceUid:a,queryType:"",model:t,relativeTimeRange:{from:360,to:0}}}function et(t,a){const l="A";switch(t.type){case"prometheus":return{refId:l,expr:a.query};case"loki":return{refId:l,expr:a.query};default:throw new Error(`Query for datasource type ${t.type} is currently not supported by cloud alert rules.`)}}var tt=n(60048);const me="Could not find data source for rule",ge="Could not view rule",X="View rule";function pe({match:t}){const a=(0,E.wW)(Ee),[l,i]=(0,w.Z)(!1),{id:o}=t.params,c=tt.OA(o,!0),{loading:g,error:u,result:s}=(0,ke.H)(c,c?.ruleSourceName),y=(0,e.useMemo)(()=>new qe.v,[]),d=(0,L.Z)(y.get()),D=(0,e.useMemo)(()=>de(s),[s]),[R,B]=(0,e.useState)({}),{allDataSourcesAvailable:W}=(0,Xe.S)(D),q=(0,e.useCallback)(()=>{if(D.length>0&&W){const f=D.map(x=>({...x,relativeTimeRange:R[x.refId]??x.relativeTimeRange}));y.run(f)}},[D,R,y,W]);(0,e.useEffect)(()=>{const f=de(s),x=Object.fromEntries(f.map(ee=>[ee.refId,ee.relativeTimeRange??{from:0,to:0}]));B(x)},[s]),(0,e.useEffect)(()=>{W&&l&&q()},[q,W,l]),(0,e.useEffect)(()=>()=>y.destroy(),[y]);const _=(0,e.useCallback)((f,x)=>{const ee=(0,N.ZP)(R,lt=>{lt[f]=x});B(ee)},[R,B]);if(!c?.ruleSourceName)return e.createElement(H.$,{title:X},e.createElement(T.b,{title:ge},e.createElement("details",{className:a.errorMessage},me)));const P=(0,ne.o_)(c.ruleSourceName);if(g)return e.createElement(H.$,{title:X},e.createElement(h.u,{text:"Loading rule..."}));if(u||!P)return e.createElement(H.$,{title:X},e.createElement(T.b,{title:ge},e.createElement("details",{className:a.errorMessage},u?.message??me,e.createElement("br",null),!!u?.stack&&u.stack)));if(!s)return e.createElement(H.$,{title:X},e.createElement("span",null,"Rule could not be found."));const Q=Object.entries(s.annotations).filter(([f,x])=>!!x.trim()),F=(0,G.Jq)(s.group),rt=(0,G.Pc)(s.rulerRule)&&Boolean(s.rulerRule.grafana_alert.provenance);return e.createElement(H.$,{wrapInContent:!1,title:X},F&&e.createElement(T.b,{severity:"info",title:"This rule is part of a federated rule group."},e.createElement(C.wc,null,"Federated rule groups are currently an experimental feature.",e.createElement(S.zx,{fill:"text",icon:"book"},e.createElement("a",{href:"https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation"},"Read documentation")))),rt&&e.createElement(ue.Xq,{resource:ue.Uv.AlertRule}),e.createElement(H.l,null,e.createElement("div",null,e.createElement("h4",null,e.createElement(z.J,{name:"bell",size:"lg"})," ",s.name),e.createElement(Ye.p,{rule:s,isCreating:!1,isDeleting:!1}),e.createElement(Fe.f,{rule:s,rulesSource:P,isViewMode:!0})),e.createElement("div",{className:a.details},e.createElement("div",{className:a.leftSide},s.promRule&&e.createElement(Y.C,{label:"Health",horizontal:!0},e.createElement(Je.V,{rule:s.promRule})),!!s.labels&&!!Object.keys(s.labels).length&&e.createElement(Y.C,{label:"Labels",horizontal:!0},e.createElement(je.s,{labels:s.labels,className:a.labels})),e.createElement(Ze.C,{rulesSource:P,rule:s,annotations:Q}),e.createElement(ze.J,{annotations:Q})),e.createElement("div",{className:a.rightSide},e.createElement(Ke.C,{rule:s,rulesSource:P}),F&&e.createElement(He,{group:s.group}),e.createElement(Y.C,{label:"Namespace / Group",className:a.rightSideDetails},s.namespace.name," / ",s.group.name),(0,G.Pc)(s.rulerRule)&&e.createElement(at,{rule:s.rulerRule.grafana_alert}))),e.createElement("div",null,e.createElement(Ge.M,{rule:s,pagination:{itemsPerPage:$.gN}}))),e.createElement(m.U,{label:"Query & Results",isOpen:l,onToggle:i,loading:d&&nt(d),collapsible:!0,className:a.collapse},(0,G.Pc)(s.rulerRule)&&!F&&e.createElement(Te,{condition:s.rulerRule.grafana_alert.condition,queries:D,evalDataByQuery:d,evalTimeRanges:R,onTimeRangeChange:_}),!(0,G.Pc)(s.rulerRule)&&!F&&d&&Object.keys(d).length>0&&e.createElement("div",{className:a.queries},D.map(f=>e.createElement(le,{key:f.refId,refId:f.refId,model:f.model,dataSource:Object.values(b.v.datasources).find(x=>x.uid===f.datasourceUid),queryData:d[f.refId],relativeTimeRange:f.relativeTimeRange,evalTimeRange:R[f.refId],onEvalTimeRangeChange:x=>_(f.refId,x),isAlertCondition:!1}))),!F&&!W&&e.createElement(T.b,{title:"Query not available",severity:"warning",className:a.queryWarning},"Cannot display the query preview. Some of the data sources used in the queries are not available.")))}function at({rule:t}){const a=(0,E.wW)(Ee),l=()=>navigator.clipboard&&navigator.clipboard.writeText(t.uid);return e.createElement(Y.C,{label:"Rule UID",childrenWrapperClassName:a.ruleUid},t.uid," ",e.createElement(p.h,{name:"copy",onClick:l}))}function nt(t){return!!Object.values(t).find(a=>a.state===V.Gu.Loading)}const Ee=t=>({errorMessage:r.css`
      white-space: pre-wrap;
    `,queries:r.css`
      height: 100%;
      width: 100%;
    `,collapse:r.css`
      margin-top: ${t.spacing(2)};
      border-color: ${t.colors.border.weak};
      border-radius: ${t.shape.borderRadius()};
    `,queriesTitle:r.css`
      padding: ${t.spacing(2,.5)};
      font-size: ${t.typography.h5.fontSize};
      font-weight: ${t.typography.fontWeightBold};
      font-family: ${t.typography.h5.fontFamily};
    `,query:r.css`
      border-bottom: 1px solid ${t.colors.border.medium};
      padding: ${t.spacing(2)};
    `,queryWarning:r.css`
      margin: ${t.spacing(4,0)};
    `,details:r.css`
      display: flex;
      flex-direction: row;
      gap: ${t.spacing(4)};
    `,leftSide:r.css`
      flex: 1;
    `,rightSide:r.css`
      padding-right: ${t.spacing(3)};
    `,rightSideDetails:r.css`
      & > div:first-child {
        width: auto;
      }
    `,labels:r.css`
      justify-content: flex-start;
    `,ruleUid:r.css`
      display: flex;
      align-items: center;
      gap: ${t.spacing(1)};
    `}),st=(0,O.Pf)(pe,{style:"page"})},51981:(te,U,n)=>{n.d(U,{q:()=>e});var r=n(68404),N=n(82002);const e=({actions:w,children:L,fallback:V=!0})=>w.some(b=>N.Vt.hasAccess(b,V))?r.createElement(r.Fragment,null,L):null},28104:(te,U,n)=>{n.d(U,{$:()=>V,l:()=>b});var r=n(52423),N=n(68404),e=n(72648),w=n(79396);const L={icon:"bell",id:"alert-rule-view",breadcrumbs:[{title:"Alert rules",url:"alerting/list"}]};function V(h){const{wrapInContent:C=!0,children:S,title:z}=h,m=(0,e.wW)(E);return N.createElement(w.T,{pageNav:{...L,text:z},navId:"alert-list"},N.createElement(w.T.Contents,null,N.createElement("div",{className:m.content},C?N.createElement(b,{...h}):S)))}function b({children:h,padding:C=2}){const S=(0,e.wW)(T(C));return N.createElement("div",{className:S.wrapper},h)}const E=h=>({content:r.css`
      max-width: ${h.breakpoints.values.xxl}px;
    `}),T=h=>C=>({wrapper:r.css`
      background: ${C.colors.background.primary};
      border: 1px solid ${C.colors.border.weak};
      border-radius: ${C.shape.borderRadius()};
      padding: ${C.spacing(h)};
    `})},76277:(te,U,n)=>{n.d(U,{H:()=>h,X:()=>C});var r=n(68404),N=n(22350),e=n(81168),w=n(72004),L=n(46818),V=n(60048),b=n(79662),E=n(61627),T=n(69945);function h(m,p){const O=S(p),$=(0,E.Zo)(p),j=(0,r.useMemo)(()=>{if(!(!m||!p||$.length===0))for(const v of $)for(const A of v.groups)for(const I of A.rules){const K=V.Yd(p,I);if(V.Dg(K,m))return I}},[m,p,$]);return{...O,result:j}}function C(m,p){const O=S(p),$=(0,E.Zo)(p),j=(0,r.useMemo)(()=>{if(!m||!p||$.length===0)return[];const v=[];for(const A of $)for(const I of A.groups)for(const K of I.rules)K.name===m&&v.push(K);return v},[m,p,$]);return{...O,result:j}}function S(m){const p=(0,e.useDispatch)(),O=(0,T._)(I=>I.promRules),$=z(m,O),j=(0,T._)(I=>I.rulerRules),v=z(m,j),{loading:A}=(0,N.Z)(async()=>{m&&await p((0,w.dn)({rulesSourceName:m}))},[p,m]);return{loading:A,error:$.error??(0,b.m$)(v)?void 0:v.error,dispatched:$.dispatched&&v.dispatched}}function z(m,p){if(!m)return L.oq;const O=p[m];return O||L.oq}}}]);

//# sourceMappingURL=AlertingRule.aec150a293670fbb7462.js.map