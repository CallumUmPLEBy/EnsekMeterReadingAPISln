"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2461,4286],{65007:(k,$,a)=>{a.r($),a.d($,{AlertRuleListUnconnected:()=>ie,default:()=>ye});var n=a(68404),e=a(36635),P=a(37932),D=a(35645),v=a(14747),T=a(53217),p=a(31403),b=a(52081),z=a(97063),x=a(79396),U=a(45984),w=a(35029);function N({onDismiss:f}){return n.createElement(w.u,{title:"Adding an Alert",isOpen:!0,onDismiss:f,onClickBackdrop:f},n.createElement(b.wc,{spacing:"sm"},n.createElement("img",{src:"public/img/alert_howto_new.png",alt:""}),n.createElement("p",null,"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."),n.createElement("p",null,"Remember to save the dashboard to persist your alert rule changes.")))}var A=a(14677),F=a.n(A),H=a(72948),se=a(39904);const xe=({rule:f,search:S,onTogglePause:K})=>{const re=`${f.url}?editPanel=${f.panelId}&tab=alert`,j=(0,n.useCallback)(ue=>n.createElement(F(),{key:ue,highlightClassName:"highlight-search-match",textToHighlight:ue,searchWords:[S]}),[S]);return n.createElement(H.Z,null,n.createElement(H.Z.Heading,null,j(f.name)),n.createElement(H.Z.Figure,null,n.createElement(se.J,{size:"xl",name:f.stateIcon,className:`alert-rule-item__icon ${f.stateClass}`})),n.createElement(H.Z.Meta,null,n.createElement("span",{key:"state"},n.createElement("span",{key:"text",className:`${f.stateClass}`},j(f.stateText)," "),"for ",f.stateAge),f.info?j(f.info):null),n.createElement(H.Z.Actions,null,n.createElement(p.zx,{key:"play",variant:"secondary",icon:f.state==="paused"?"play":"pause",onClick:K},f.state==="paused"?"Resume":"Pause"),n.createElement(p.Qj,{key:"edit",variant:"secondary",href:re,icon:"cog"},"Edit alert")))};var Ne=a(45253);const oe="grafana.legacyalerting.unifiedalertingpromo",Pe=()=>n.createElement(Ne.b,{severity:"warning",title:"Grafana legacy alerting is going away soon"},n.createElement("p",null,"You are using Grafana legacy alerting, it has been deprecated and will be removed in the next major version of Grafana.",n.createElement("br",null),"We encourage you to upgrade to the new Grafana Alerting experience."),n.createElement("p",null,"See"," ",n.createElement("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/"},"What\u2019s New with Grafana Alerting")," ","to learn more about what\u2018s new or learn"," ",n.createElement("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/"},"how to enable the new Grafana Alerting feature"),"."));var ve=a(69119),ce=a(11626);const Q=f=>f.searchQuery,W=f=>{const S=new RegExp(f.alertRules.searchQuery,"i");return f.alertRules.items.filter(K=>S.test(K.name)||S.test(K.stateText)||S.test(K.info))},ne=(f,S)=>f.notificationChannel.id===S?f.notificationChannel:null;function G(f){return{alertRules:W(f),search:Q(f.alertRules),isLoading:f.alertRules.isLoading}}const Ae={getAlertRulesAsync:ve.Au,setSearchQuery:ce.ql,togglePauseAlertRule:ve.en},Le=(0,e.connect)(G,Ae);class ie extends n.PureComponent{constructor(){super(...arguments),this.stateFilters=[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}],this.onStateFilterChanged=S=>{P.E1.partial({state:S.value})},this.onOpenHowTo=()=>{z.Z.publish(new U.Dn({component:N}))},this.onSearchQueryChange=S=>{this.props.setSearchQuery(S)},this.onTogglePause=S=>{this.props.togglePauseAlertRule(S.id,{paused:S.state!=="paused"})},this.alertStateFilterOption=({text:S,value:K})=>n.createElement("option",{key:K,value:K},S)}componentDidMount(){this.fetchRules()}componentDidUpdate(S){S.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){return this.props.queryParams.state??"all"}render(){const{alertRules:S,search:K,isLoading:re}=this.props;return n.createElement(x.T,{navId:"alert-list"},n.createElement(x.T.Contents,{isLoading:re},n.createElement("div",{className:"page-action-bar"},n.createElement("div",{className:"gf-form gf-form--grow"},n.createElement(v.H,{placeholder:"Search alerts",value:K,onChange:this.onSearchQueryChange})),n.createElement("div",{className:"gf-form"},n.createElement("label",{className:"gf-form-label",htmlFor:"alert-state-filter"},"States"),n.createElement("div",{className:"width-13"},n.createElement(T.Ph,{inputId:"alert-state-filter",options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()}))),n.createElement("div",{className:"page-action-bar__spacer"}),D.v.unifiedAlertingEnabled&&n.createElement(p.Qj,{variant:"primary",href:"alerting/ng/new"},"Add NG Alert"),n.createElement(p.zx,{variant:"secondary",onClick:this.onOpenHowTo},"How to add an alert")),n.createElement(Pe,null),n.createElement(b.wc,{spacing:"none"},S.map(j=>n.createElement(xe,{rule:j,key:j.id,search:K,onTogglePause:()=>this.onTogglePause(j)})))))}}const ye=Le(ie)},69119:(k,$,a)=>{a.d($,{Au:()=>T,C2:()=>b,c1:()=>x,en:()=>p,fA:()=>U,fg:()=>z,tk:()=>w});var n=a(54899),e=a(37932),P=a(659),D=a(60499),v=a(11626);function T(N){return async A=>{A((0,v.gz)());const F=await(0,n.i)().get("/api/alerts",N);A((0,v.Oc)(F))}}function p(N,A){return async F=>{await(0,n.i)().post(`/api/alerts/${N}/pause`,A);const H=e.E1.getSearchObject().state||"all";F(T({state:H.toString()}))}}function b(N){return async A=>{try{await(0,n.i)().post("/api/alert-notifications",N),A((0,P.$l)((0,D.AT)("Notification created"))),e.E1.push("/alerting/notifications")}catch(F){(0,n.kW)(F)&&A((0,P.$l)((0,D.t_)(F.data.error)))}}}function z(N){return async A=>{try{await(0,n.i)().put(`/api/alert-notifications/${N.id}`,N),A((0,P.$l)((0,D.AT)("Notification updated")))}catch(F){(0,n.kW)(F)&&A((0,P.$l)((0,D.t_)(F.data.error)))}}}function x(N){return async(A,F)=>{const H=F().notificationChannel.notificationChannel;await(0,n.i)().post("/api/alert-notifications/test",{id:H.id,...N})}}function U(){return async N=>{const F=(await(0,n.i)().get("/api/alert-notifiers")).sort((H,se)=>H.name>se.name?1:-1);N((0,v.T2)(F))}}function w(N){return async A=>{await A(U());const F=await(0,n.i)().get(`/api/alert-notifications/${N}`);A((0,v.K)(F))}}},67376:(k,$,a)=>{a.r($),a.d($,{default:()=>Wt});var n=a(52423),e=a(68404),P=a(70356),D=a(671),v=a(78337),T=a(27677),p=a(26418),b=a(54408),z=a(53546),x=a(72648),U=a(31403),w=a(96044),N=a(81168),A=a(41904),F=a(45524),H=a(97097),se=a(69142),he=a(39910);const xe=()=>{const{canCreateGrafanaRules:t,canCreateCloudRules:r}=(0,he.B)();return t||r?e.createElement(se.Z,{title:"You haven`t created any alert rules yet",buttonIcon:"bell",buttonLink:"alerting/new",buttonTitle:"Create alert rule",proTip:"you can also create alert rules from existing panels and queries.",proTipLink:"https://grafana.com/docs/",proTipLinkTitle:"Learn more",proTipTarget:"_blank",onClick:()=>(0,b.PN)(A.z7.alertRuleFromScratch)}):e.createElement(H._,{message:"No rules exist yet.",callToActionElement:e.createElement("div",null)})};var Ne=a(64681),oe=a.n(Ne),Pe=a(24664),ve=a(45253),ce=a(61860),Q=a(69945),W=a(45849),ne=a(10505),G=a(79662);function Ae(){const[t,r]=(0,e.useState)(!1),[s,i]=(0,Pe.Z)("grafana.unifiedalerting.hideErrors",!1),l=(0,Q._)(m=>m.dataSources),c=(0,Q._)(m=>m.promRules),u=(0,Q._)(m=>m.rulerRules),o=(0,x.wW)(ie),d=(0,e.useMemo)(()=>{const[m,R,E]=[l,c,u].map(h=>(0,W.Eu)().reduce((g,B)=>{const V=h[B.name]?.error;return h[B.name]&&V&&!(0,G.m$)(h[B.name])?[...g,{dataSource:B,error:V}]:g},[])),C=c[W.GC]?.error,L=u[W.GC]?.error,I=[];return C&&I.push(e.createElement(e.Fragment,null,"Failed to load Grafana rules state: ",C.message||"Unknown error.")),L&&I.push(e.createElement(e.Fragment,null,"Failed to load Grafana rules config: ",L.message||"Unknown error.")),m.forEach(({dataSource:h,error:g})=>{I.push(e.createElement(e.Fragment,null,"Failed to load the data source configuration for"," ",e.createElement("a",{href:(0,ne.__)(h),className:o.dsLink},h.name),": ",g.message||"Unknown error."))}),R.forEach(({dataSource:h,error:g})=>I.push(e.createElement(e.Fragment,null,"Failed to load rules state from"," ",e.createElement("a",{href:(0,ne.__)(h),className:o.dsLink},h.name),": ",g.message||"Unknown error."))),E.forEach(({dataSource:h,error:g})=>I.push(e.createElement(e.Fragment,null,"Failed to load rules config from"," ",e.createElement("a",{href:(0,ne.__)(h),className:o.dsLink},h.name),": ",g.message||"Unknown error."))),I},[l,c,u,o.dsLink]);return e.createElement(e.Fragment,null,!!d.length&&s&&e.createElement(Le,{count:d.length,onClick:()=>i(m=>!m)}),!!d.length&&!s&&e.createElement(ve.b,{"data-testid":"cloud-rulessource-errors",title:"Errors loading rules",severity:"error",onRemove:()=>i(!0)},t&&d.map((m,R)=>e.createElement("div",{key:R},m)),!t&&e.createElement(e.Fragment,null,e.createElement("div",null,d[0]),d.length>=2&&e.createElement(U.zx,{className:o.moreButton,fill:"text",icon:"angle-right",size:"sm",onClick:()=>r(!0)},d.length-1," more ",oe()("error",d.length-1)))))}const Le=({count:t,onClick:r})=>{const s=(0,x.wW)(ie);return e.createElement("div",{className:s.floatRight},e.createElement(ce.u,{content:"Show all errors",placement:"bottom"},e.createElement(U.zx,{fill:"text",variant:"destructive",icon:"exclamation-triangle",onClick:r},t>1?e.createElement(e.Fragment,null,t," errors"):e.createElement(e.Fragment,null,"1 error"))))},ie=t=>({moreButton:n.css`
    padding: 0;
  `,floatRight:n.css`
    display: flex;
    justify-content: flex-end;
  `,dsLink:n.css`
    font-weight: ${t.typography.fontWeightBold};
  `});var ye=a(51981),f=a(61744),S=a(67487),K=a(78889),re=a(84952),j=a(25724),ue=a(1562),Re=a(46818),je=a(52081),le=a(39904),Y=a(19985),Ve=a(98102),Ze=a(55485),Je=a(8055),Ce=a(72004),Fe=a(33950),Oe=a(29721),te=a(65750),ke=a(61068),Ye=a(9085),Me=a.n(Ye),me=a(82897),Te=a(19677),Xe=a(35029),qe=a(3153),_e=a(60048),et=a(45608);const tt=t=>{const{group:r,namespace:s,onClose:i}=t,[l,c]=(0,e.useState)(!1),[u,o]=(0,e.useState)(r.rules),d=(0,x.wW)(Ie),m=(0,e.useCallback)(E=>{if(!E.destination||E.destination.index===E.source.index)return;const L=nt(u,E.source.index,E.destination.index);o(L);const I=(0,W.EG)(s.rulesSource),h=(0,me.compact)(L.map(g=>g.rulerRule));c(!0),(0,qe.WI)((0,Ce.tg)({namespaceName:s.name,groupName:r.name,rulesSourceName:I,newRules:h})).unwrap().finally(()=>{c(!1)})},[r.name,s.name,s.rulesSource,u]),R=u.map(E=>({...E,uid:String((0,_e.Om)(E.rulerRule))}));return e.createElement(Xe.u,{className:d.modal,isOpen:!0,title:e.createElement(at,{namespace:s,group:r}),onDismiss:i,onClickBackdrop:i},e.createElement(Te.Z5,{onDragEnd:m},e.createElement(Te.bK,{droppableId:"alert-list",mode:"standard",renderClone:(E,C,L)=>e.createElement(be,{provided:E,rule:R[L.source.index],isClone:!0})},E=>e.createElement("div",{ref:E.innerRef,className:Me()(d.listContainer,l&&d.disabled),...E.droppableProps},R.map((C,L)=>e.createElement(Te._l,{key:C.uid,draggableId:C.uid,index:L,isDragDisabled:l},I=>e.createElement(be,{key:C.uid,provided:I,rule:C}))),E.placeholder))))},be=({provided:t,rule:r,isClone:s=!1,isDragging:i=!1})=>{const l=(0,x.wW)(Ie);return e.createElement("div",{className:Me()(l.listItem,s&&"isClone",i&&"isDragging"),ref:t.innerRef,...t.draggableProps,...t.dragHandleProps},(0,G.x_)(r.promRule)&&e.createElement(et.l,{state:r.promRule.state}),(0,G.OP)(r.promRule)&&e.createElement(Y.C,{text:"Recording",color:"blue"}),e.createElement("div",{className:l.listItemName},r.name),e.createElement(le.J,{name:"draggabledots"}))},at=({namespace:t,group:r})=>{const s=(0,x.wW)(Ie);return e.createElement("div",{className:s.header},e.createElement(le.J,{name:"folder"}),(0,W.jq)(t.rulesSource)&&e.createElement(ce.u,{content:t.rulesSource.name,placement:"top"},e.createElement("img",{alt:t.rulesSource.meta.name,className:s.dataSourceIcon,src:t.rulesSource.meta.info.logos.small})),e.createElement("span",null,t.name),e.createElement(le.J,{name:"angle-right"}),e.createElement("span",null,r.name))},Ie=t=>({modal:n.css`
    max-width: 640px;
    max-height: 80%;
    overflow: hidden;
  `,listItem:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: ${t.spacing()};

    background: ${t.colors.background.primary};
    color: ${t.colors.text.secondary};

    border-bottom: solid 1px ${t.colors.border.medium};
    padding: ${t.spacing(1)} ${t.spacing(2)};

    &:last-child {
      border-bottom: none;
    }

    &.isClone {
      border: solid 1px ${t.colors.primary.shade};
    }
  `,listContainer:n.css`
    user-select: none;
    border: solid 1px ${t.colors.border.medium};
  `,disabled:n.css`
    opacity: 0.5;
    pointer-events: none;
  `,listItemName:n.css`
    flex: 1;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,header:n.css`
    display: flex;
    align-items: center;

    gap: ${t.spacing(1)};
  `,dataSourceIcon:n.css`
    width: ${t.spacing(2)};
    height: ${t.spacing(2)};
  `});function nt(t,r,s){const i=Array.from(t),[l]=i.splice(r,1);return i.splice(s,0,l),i}var y=a(46063);const rt={total:0,recording:0,[y.x_.Firing]:0,[y.x_.Pending]:0,[y.x_.Inactive]:0,error:0},We=({group:t,namespaces:r,includeTotal:s})=>{const i=t?.interval,l=(0,e.useMemo)(()=>{const o={...rt},d=m=>{m.promRule&&(0,G.x_)(m.promRule)&&(o[m.promRule.state]+=1),lt(m)&&(o.error+=1),(m.promRule&&(0,G.OP)(m.promRule)||m.rulerRule&&(0,G.yF)(m.rulerRule))&&(o.recording+=1),o.total+=1};return t&&t.rules.forEach(d),r&&r.forEach(m=>m.groups.forEach(R=>R.rules.forEach(d))),o},[t,r]),c=[];s&&c.push(e.createElement(e.Fragment,{key:"total"},l.total," ",oe()("rule",l.total))),l[y.x_.Firing]&&c.push(e.createElement(Y.C,{color:"red",key:"firing",text:`${l[y.x_.Firing]} firing`})),l.error&&c.push(e.createElement(Y.C,{color:"red",key:"errors",text:`${l.error} errors`})),l[y.x_.Pending]&&c.push(e.createElement(Y.C,{color:"orange",key:"pending",text:`${l[y.x_.Pending]} pending`})),l[y.x_.Inactive]&&c.push(e.createElement(Y.C,{color:"green",key:"inactive",text:`${l[y.x_.Inactive]} normal`})),l.recording&&c.push(e.createElement(Y.C,{color:"purple",key:"recording",text:`${l.recording} recording`}));const u=Boolean(c.length);return e.createElement(p.Stack,{direction:"row"},u&&e.createElement("div",null,e.createElement(p.Stack,{gap:.5},c)),i&&e.createElement(e.Fragment,null,e.createElement("div",null,"|"),e.createElement(Y.C,{text:i,icon:"clock-nine",color:"blue"})))};function lt(t){return t.promRule?.health==="err"||t.promRule?.health==="error"}var Ge=a(25048);const $e=e.memo(({group:t,namespace:r,expandAll:s,viewMode:i})=>{const{rulesSource:l}=r,c=(0,N.useDispatch)(),u=(0,x.wW)(st),[o,d]=(0,e.useState)(!1),[m,R]=(0,e.useState)(!1),[E,C]=(0,e.useState)(!1),[L,I]=(0,e.useState)(!s),{canEditRules:h}=(0,he.B)();(0,e.useEffect)(()=>{I(!s)},[s]);const{hasRuler:g,rulerRulesLoaded:B}=(0,Je.h)(),V=t.rules[0]?.rulerRule,ae=V&&(0,G.Pc)(V)&&V.grafana_alert.namespace_uid||void 0,{folder:Ee}=(0,Ze.W)(ae),fe=g(l)&&B(l)&&!t.rules.find(X=>!!X.rulerRule),_=(0,G.Jq)(t),O=t.rules.some(X=>(0,G.Pc)(X.rulerRule)&&X.rulerRule.grafana_alert.provenance),M=i==="list",Z=i==="grouped",ee=()=>{c((0,Ce.oE)(r,t)),R(!1)},J=[];if(fe)J.push(e.createElement(je.Lh,{key:"is-deleting"},e.createElement(S.$,null),"deleting"));else if(l===W.GC){if(ae){const X=(0,ne.HV)(ae);Ee?.canSave&&(Z&&!O&&(J.push(e.createElement(te.A,{"aria-label":"edit rule group","data-testid":"edit-group",key:"edit",icon:"pen",tooltip:"edit rule group",onClick:()=>d(!0)})),J.push(e.createElement(te.A,{"aria-label":"re-order rules","data-testid":"reorder-group",key:"reorder",icon:"exchange-alt",tooltip:"reorder rules",className:u.rotate90,onClick:()=>C(!0)}))),M&&J.push(e.createElement(te.A,{"aria-label":"go to folder",key:"goto",icon:"folder-open",tooltip:"go to folder",to:X,target:"__blank"}))),Ee?.canAdmin&&M&&J.push(e.createElement(te.A,{"aria-label":"manage permissions",key:"manage-perms",icon:"lock",tooltip:"manage permissions",to:X+"/permissions",target:"__blank"}))}}else h(l.name)&&g(l)&&(_||(J.push(e.createElement(te.A,{"aria-label":"edit rule group","data-testid":"edit-group",key:"edit",icon:"pen",tooltip:"edit rule group",onClick:()=>d(!0)})),J.push(e.createElement(te.A,{"aria-label":"re-order rules","data-testid":"reorder-group",key:"reorder",icon:"exchange-alt",tooltip:"re-order rules",className:u.rotate90,onClick:()=>C(!0)}))),J.push(e.createElement(te.A,{"aria-label":"delete rule group","data-testid":"delete-group",key:"delete-group",icon:"trash-alt",tooltip:"delete rule group",onClick:()=>R(!0)})));const Gt=M?e.createElement(Oe.V,{namespace:r.name}):e.createElement(Oe.V,{namespace:r.name,group:t.name}),Ut=(X=!1)=>{X||(0,b.PN)(A.z7.leavingRuleGroupEdit),d(!1)};return e.createElement("div",{className:u.wrapper,"data-testid":"rule-group"},e.createElement("div",{className:u.header,"data-testid":"rule-group-header"},e.createElement(Fe.U,{size:"sm",className:u.collapseToggle,isCollapsed:L,onToggle:I,"data-testid":"group-collapse-toggle"}),e.createElement(le.J,{name:L?"folder":"folder-open"}),(0,W.jq)(l)&&e.createElement(ce.u,{content:l.name,placement:"top"},e.createElement("img",{alt:l.meta.name,className:u.dataSourceIcon,src:l.meta.info.logos.small})),e.createElement("h6",{className:u.heading},_&&e.createElement(Y.C,{color:"purple",text:"Federated"})," ",Gt),e.createElement("div",{className:u.spacer}),e.createElement("div",{className:u.headerStats},e.createElement(We,{group:t})),O&&e.createElement(e.Fragment,null,e.createElement("div",{className:u.actionsSeparator},"|"),e.createElement("div",{className:u.actionIcons},e.createElement(Y.C,{color:"purple",text:"Provisioned"}))),!!J.length&&e.createElement(e.Fragment,null,e.createElement("div",{className:u.actionsSeparator},"|"),e.createElement("div",{className:u.actionIcons},e.createElement(p.Stack,{gap:.5},J)))),!L&&e.createElement(Ge.i,{showSummaryColumn:!0,className:u.rulesTable,showGuidelines:!0,showNextEvaluationColumn:Boolean(t.interval),rules:t.rules}),o&&e.createElement(ke.vq,{groupInterval:t.interval??"",nameSpaceAndGroup:{group:t,namespace:r},sourceName:(0,W.EG)(r.rulesSource),onClose:()=>Ut()}),E&&e.createElement(tt,{group:t,namespace:r,onClose:()=>C(!1)}),e.createElement(Ve.s,{isOpen:m,title:"Delete group",body:e.createElement("div",null,"Deleting this group will permanently remove the group",e.createElement("br",null),"and ",t.rules.length," alert ",oe()("rule",t.rules.length)," belonging to it.",e.createElement("br",null),"Are you sure you want to delete this group?"),onConfirm:ee,onDismiss:()=>R(!1),confirmText:"Delete"}))});$e.displayName="RulesGroup";const st=t=>({wrapper:n.css`
    & + & {
      margin-top: ${t.spacing(2)};
    }
  `,header:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${t.spacing(1)} ${t.spacing(1)} ${t.spacing(1)} 0;
    background-color: ${t.colors.background.secondary};
    flex-wrap: wrap;
  `,headerStats:n.css`
    span {
      vertical-align: middle;
    }

    ${t.breakpoints.down("sm")} {
      order: 2;
      width: 100%;
      padding-left: ${t.spacing(1)};
    }
  `,heading:n.css`
    margin-left: ${t.spacing(1)};
    margin-bottom: 0;
  `,spacer:n.css`
    flex: 1;
  `,collapseToggle:n.css`
    background: none;
    border: none;
    margin-top: -${t.spacing(1)};
    margin-bottom: -${t.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,dataSourceIcon:n.css`
    width: ${t.spacing(2)};
    height: ${t.spacing(2)};
    margin-left: ${t.spacing(2)};
  `,dataSourceOrigin:n.css`
    margin-right: 1em;
    color: ${t.colors.text.disabled};
  `,actionsSeparator:n.css`
    margin: 0 ${t.spacing(2)};
  `,actionIcons:n.css`
    width: 80px;
    align-items: center;
  `,rulesTable:n.css`
    margin-top: ${t.spacing(3)};
  `,rotate90:n.css`
    transform: rotate(90deg);
  `});function Ue(t){return(0,e.useMemo)(()=>t.flatMap(r=>r.groups.map(s=>({namespace:r,group:s}))),[t])}const ot=({namespaces:t,expandAll:r})=>{const s=(0,x.wW)(ct),i=(0,Q._)(g=>g.dataSources),l=(0,Q._)(g=>g.promRules),c=(0,e.useMemo)(W.Eu,[]),u=Ue(t),o=(0,e.useMemo)(()=>c.filter(g=>(0,Re.op)(l[g.name])||(0,Re.op)(i[g.name])),[l,i,c]),d=c.some(g=>l[g.name]?.result?.length??0>0),m=c.length>0,R=o.length>0,E=t.length>0,{numberOfPages:C,onPageChange:L,page:I,pageItems:h}=(0,j.h)(u,1,re.gN);return e.createElement("section",{className:s.wrapper},e.createElement("div",{className:s.sectionHeader},e.createElement("h5",null,"Mimir / Cortex / Loki"),o.length?e.createElement(f.u,{className:s.loader,text:`Loading rules from ${o.length} ${oe()("source",o.length)}`}):e.createElement("div",null)),h.map(({group:g,namespace:B})=>e.createElement($e,{group:g,key:`${(0,W.v_)(B.rulesSource)}-${B.name}-${g.name}`,namespace:B,expandAll:r,viewMode:"grouped"})),!m&&e.createElement("p",null,"There are no Prometheus or Loki data sources configured."),m&&!R&&!E&&e.createElement("p",null,"No rules found."),!d&&R&&e.createElement(S.$,{size:24,className:s.spinner}),e.createElement(K.t,{className:s.pagination,currentPage:I,numberOfPages:C,onNavigate:L,hideWhenSinglePage:!0}))},ct=t=>({loader:n.css`
    margin-bottom: 0;
  `,sectionHeader:n.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:n.css`
    margin-bottom: ${t.spacing(4)};
  `,spinner:n.css`
    text-align: center;
    padding: ${t.spacing(2)};
  `,pagination:(0,ue.Z)(t)});var Be=a(61627);const it=({namespaces:t,expandAll:r})=>{const s=(0,x.wW)(ut),[i]=(0,w.K)(),{prom:l,ruler:c}=(0,Q._)(h=>({prom:h.promRules[W.GC]||Re.oq,ruler:h.rulerRules[W.GC]||Re.oq})),u=l.loading||c.loading,o=!!l.result||!!c.result,d=i.view==="list",m=d?(0,Be.Kd)(t):t,R=Ue(m),{numberOfPages:E,onPageChange:C,page:L,pageItems:I}=(0,j.h)(R,1,re.gN);return e.createElement("section",{className:s.wrapper},e.createElement("div",{className:s.sectionHeader},e.createElement("h5",null,"Grafana"),u?e.createElement(f.u,{className:s.loader,text:"Loading..."}):e.createElement("div",null)),I.map(({group:h,namespace:g})=>e.createElement($e,{group:h,key:`${g.name}-${h.name}`,namespace:g,expandAll:r,viewMode:d?"list":"grouped"})),o&&m?.length===0&&e.createElement("p",null,"No rules found."),!o&&u&&e.createElement(S.$,{size:24,className:s.spinner}),e.createElement(K.t,{className:s.pagination,currentPage:L,numberOfPages:E,onNavigate:C,hideWhenSinglePage:!0}))},ut=t=>({loader:n.css`
    margin-bottom: 0;
  `,sectionHeader:n.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:n.css`
    margin-bottom: ${t.spacing(4)};
  `,spinner:n.css`
    text-align: center;
    padding: ${t.spacing(2)};
  `,pagination:(0,ue.Z)(t)}),mt=({namespaces:t,expandAll:r})=>{const[s,i]=(0,e.useMemo)(()=>{const l=t.map(c=>({...c,groups:c.groups.sort((u,o)=>u.name.localeCompare(o.name))})).sort((c,u)=>c.name.localeCompare(u.name));return[l.filter(c=>(0,W.HY)(c.rulesSource)),l.filter(c=>(0,W.jq)(c.rulesSource))]},[t]);return(0,e.useEffect)(()=>{(0,b.PN)(A.z7.loadedList)},[]),e.createElement(e.Fragment,null,e.createElement(ye.q,{actions:[N.AccessControlAction.AlertingRuleRead]},e.createElement(it,{namespaces:s,expandAll:r})),e.createElement(ye.q,{actions:[N.AccessControlAction.AlertingRuleExternalRead]},e.createElement(ot,{namespaces:i,expandAll:r})))},De=({rules:t,state:r,defaultCollapsed:s=!1})=>{const[i,l]=(0,e.useState)(s),c=(0,x.wW)(dt);return e.createElement(e.Fragment,null,e.createElement("h4",{className:c.header},e.createElement(Fe.U,{className:c.collapseToggle,size:"xxl",isCollapsed:i,onToggle:()=>l(!i)}),(0,G.SS)(r)," (",t.length,")"),!i&&e.createElement(Ge.i,{className:c.rulesTable,rules:t,showGroupColumn:!0}))},dt=t=>({collapseToggle:n.css`
    vertical-align: middle;
  `,header:n.css`
    margin-top: ${t.spacing(2)};
  `,rulesTable:n.css`
    margin-top: ${t.spacing(3)};
  `}),gt=({namespaces:t})=>{const r=(0,ne.lC)((0,w.K)()[0]),s=(0,e.useMemo)(()=>{const i={[y.x_.Firing]:[],[y.x_.Inactive]:[],[y.x_.Pending]:[]};return t.forEach(l=>l.groups.forEach(c=>c.rules.forEach(u=>{u.promRule&&(0,G.x_)(u.promRule)&&i[u.promRule.state].push(u)}))),Object.values(i).forEach(l=>l.sort((c,u)=>c.name.localeCompare(u.name))),i},[t]);return e.createElement(e.Fragment,null,(!r.alertState||r.alertState===y.x_.Firing)&&e.createElement(De,{state:y.x_.Firing,rules:s[y.x_.Firing]}),(!r.alertState||r.alertState===y.x_.Pending)&&e.createElement(De,{state:y.x_.Pending,rules:s[y.x_.Pending]}),(!r.alertState||r.alertState===y.x_.Inactive)&&e.createElement(De,{defaultCollapsed:r.alertState!==y.x_.Inactive,state:y.x_.Inactive,rules:s[y.x_.Inactive]}))};var pt=a(53117),Ke=a(24799),de=a(64353),Se=a(2594),Et=a(46967),ft=a(64421),ht=a(86647),ge=a(734),pe=a(20194),vt=a(31808);function He(){const[t,r]=(0,vt.j)(),s=t.get("search")??"",i=(0,ge.ug)(s),l=Object.values(i).some(o=>!(0,me.isEmpty)(o)),c=(0,e.useCallback)(o=>{const d=(0,ge.HY)(s,o);r({search:d})},[s,r]),u=(0,e.useCallback)(o=>{r({search:o})},[r]);return(0,e.useEffect)(()=>{const o={dataSource:t.get("dataSource")??void 0,alertState:t.get("alertState")??void 0,ruleType:t.get("ruleType")??void 0,labels:(0,pe.Zh)(t.get("queryString")??"").map(pe.cm)};Object.values(o).some(m=>!(0,me.isEmpty)(m))&&(r({dataSource:void 0,alertState:void 0,ruleType:void 0,queryString:void 0}),c((0,ft.ZP)(i,m=>{if(m.dataSourceName??=o.dataSource,o.alertState&&(0,y.I9)(o.alertState)&&(m.ruleState??=o.alertState),o.ruleType&&(0,G.Wd)(o.ruleType)&&(m.ruleType??=o.ruleType),m.labels.length===0&&o.labels.length>0){const R=o.labels.map(({name:E,operator:C,value:L})=>`${E}${C}${L}`);m.labels.push(...R)}})))},[t,c,i,r]),{filterState:i,hasActiveFilters:l,searchQuery:s,setSearchQuery:u,updateFilters:c}}const yt=(t,r)=>(0,e.useMemo)(()=>Rt(t,r),[t,r]),Rt=(t,r={labels:[],freeFormWords:[]})=>t.filter(s=>r.namespace?s.name.toLowerCase().includes(r.namespace.toLowerCase()):!0).filter(({rulesSource:s})=>r.dataSourceName&&(0,W.jq)(s)?s.name===r.dataSourceName:!0).reduce(Ct(r),[]),Ct=t=>(r,s)=>{const i=s.groups.filter(l=>t.groupName?l.name.toLowerCase().includes(t.groupName.toLowerCase()):!0).reduce(St(t),[]);return i.length&&r.push({...s,groups:i}),r},St=t=>(r,s)=>{const i=s.rules.filter(l=>{if(t.ruleType&&t.ruleType!==l.promRule?.type)return!1;const c=(0,G.Pc)(l.rulerRule)&&!Nt(l.rulerRule,t);if(t.dataSourceName&&c)return!1;const u=l.name?.toLocaleLowerCase();if(t.freeFormWords.length>0&&!t.freeFormWords.every(o=>u.includes(o.toLocaleLowerCase()))||t.ruleName&&!l.name?.toLocaleLowerCase().includes(t.ruleName.toLocaleLowerCase()))return!1;if(t.ruleHealth&&l.promRule){const o=(0,G.vU)(l.promRule.health);return t.ruleHealth===o}if(t.labels.length>0){const o=(0,me.compact)(t.labels.map(xt)),d=o.length>0&&(0,pe.eD)(l.labels,o),m=o.length>0&&l.promRule&&l.promRule.type===y.pz.Alerting&&l.promRule.alerts&&l.promRule.alerts.some(R=>(0,pe.eD)(R.labels,o));if(!(d||m))return!1}return!(t.ruleState&&!(l.promRule&&(0,G.x_)(l.promRule)&&l.promRule.state===t.ruleState))});return i.length&&r.push({...s,rules:i}),r};function xt(t){try{return(0,pe.tC)(t)}catch{return{name:t,value:"",isRegex:!0,isEqual:!0}}}const Nt=(t,r)=>r.dataSourceName?!!t.grafana_alert.data.find(s=>s.datasourceUid?(0,ht.F)().getInstanceSettings(s.datasourceUid)?.name===r.dataSourceName:!1):!0;var Pt=a(42042);const ze=[{icon:"folder",label:"Grouped",value:"grouped"},{icon:"list-ul",label:"List",value:"list"},{icon:"heart-rate",label:"State",value:"state"}],At=[{label:"Alert ",value:y.pz.Alerting},{label:"Recording ",value:y.pz.Recording}],Lt=[{label:"Ok",value:ge.VG.Ok},{label:"No Data",value:ge.VG.NoData},{label:"Error",value:ge.VG.Error}],Tt=({onFilterCleared:t=()=>{}})=>{const[r,s]=(0,w.K)(),[i,l]=(0,e.useState)(Math.floor(Math.random()*100)),c=`dataSource-${i}`,u=`queryString-${i}`,{filterState:o,hasActiveFilters:d,searchQuery:m,setSearchQuery:R,updateFilters:E}=He(),C=(0,x.wW)(It),L=Object.entries(y.x_).map(([O,M])=>({label:(0,G.SS)(M),value:M})),I=O=>{E({...o,dataSourceName:O.name}),l(M=>M+1)},h=()=>{E({...o,dataSourceName:void 0}),l(O=>O+1)},g=(0,me.debounce)(O=>{const M=O.target;R(M.value)},600),B=O=>{(0,b.PN)(A.z7.clickingAlertStateFilters),E({...o,ruleState:O}),l(M=>M+1)},V=O=>{s({view:O})},ae=O=>{E({...o,ruleType:O}),l(M=>M+1)},Ee=O=>{E({...o,ruleHealth:O}),l(M=>M+1)},fe=()=>{R(void 0),t(),setTimeout(()=>l(i+1),100)},_=e.createElement(le.J,{name:"search"});return e.createElement("div",{className:C.container},e.createElement(p.Stack,{direction:"column",gap:1},e.createElement(p.Stack,{direction:"row",gap:1},e.createElement(Ke.g,{className:C.dsPickerContainer,label:"Search by data source"},e.createElement(pt.q,{key:c,alerting:!0,noDefault:!0,placeholder:"All data sources",current:o.dataSourceName,onChange:I,onClear:h})),e.createElement("div",null,e.createElement(de._,null,"State"),e.createElement(Se.S,{options:L,value:o.ruleState,onChange:B})),e.createElement("div",null,e.createElement(de._,null,"Rule type"),e.createElement(Se.S,{options:At,value:o.ruleType,onChange:ae})),e.createElement("div",null,e.createElement(de._,null,"Health"),e.createElement(Se.S,{options:Lt,value:o.ruleHealth,onChange:Ee}))),e.createElement(p.Stack,{direction:"column",gap:1},e.createElement(p.Stack,{direction:"row",gap:1},e.createElement(Ke.g,{className:C.searchInput,label:e.createElement(de._,null,e.createElement(p.Stack,{gap:.5},e.createElement("span",null,"Search"),e.createElement(Pt.z,{content:e.createElement($t,null)},e.createElement(le.J,{name:"info-circle",size:"sm"}))))},e.createElement(Et.I,{key:u,prefix:_,onChange:g,defaultValue:m,placeholder:"Search","data-testid":"search-query-input"})),e.createElement("div",null,e.createElement(de._,null,"View as"),e.createElement(Se.S,{options:ze,value:String(r.view??ze[0].value),onChange:V}))),d&&e.createElement("div",null,e.createElement(U.zx,{fullWidth:!1,icon:"times",variant:"secondary",onClick:fe},"Clear filters")))))},It=t=>({container:n.css`
      margin-bottom: ${t.spacing(1)};
    `,dsPickerContainer:n.css`
      width: 250px;
      flex-grow: 0;
      margin: 0;
    `,searchInput:n.css`
      flex: 1;
      margin: 0;
    `});function $t(){const t=(0,x.wW)(we);return e.createElement("div",null,e.createElement("div",null,"Search syntax allows to query alert rules by the parameters defined below."),e.createElement("hr",null),e.createElement("div",{className:t.grid},e.createElement("div",null,"Filter type"),e.createElement("div",null,"Expression"),e.createElement(q,{title:"Datasource",expr:"datasource:mimir"}),e.createElement(q,{title:"Folder/Namespace",expr:"namespace:global"}),e.createElement(q,{title:"Group",expr:"group:cpu-usage"}),e.createElement(q,{title:"Rule",expr:'rule:"cpu 80%"'}),e.createElement(q,{title:"Labels",expr:"label:team=A label:cluster=a1"}),e.createElement(q,{title:"State",expr:"state:firing|normal|pending"}),e.createElement(q,{title:"Type",expr:"type:alerting|recording"}),e.createElement(q,{title:"Health",expr:"health:ok|nodata|error"})))}function q({title:t,expr:r}){const s=(0,x.wW)(we);return e.createElement(e.Fragment,null,e.createElement("div",null,t),e.createElement("code",{className:s.code},r))}const we=t=>({grid:n.css`
    display: grid;
    grid-template-columns: max-content auto;
    gap: ${t.spacing(1)};
    align-items: center;
  `,code:n.css`
    display: block;
    text-align: center;
  `}),Dt=Tt;var Ft=a(37190),Ot=a(93411);const Qe={groups:mt,state:gt},Mt=(0,z.Pf)(()=>{const t=(0,N.useDispatch)(),r=(0,x.wW)(bt),s=(0,e.useMemo)(W.mA,[]),i=(0,P.TH)(),[l,c]=(0,e.useState)(!1),[u]=(0,w.K)(),{filterState:o,hasActiveFilters:d}=He(),{canCreateGrafanaRules:m,canCreateCloudRules:R,canReadProvisioning:E}=(0,he.B)(),C=Qe[u.view]?u.view:"groups",L=Qe[C],I=(0,Q._)(Z=>Z.promRules),h=(0,Q._)(Z=>Z.rulerRules),g=s.some(Z=>I[Z]?.loading||h[Z]?.loading),B=Object.entries(I),V=B.every(([Z,ee])=>ee.dispatched&&(ee?.result!==void 0||ee?.error!==void 0)),ae=B.every(([Z,ee])=>ee.dispatched&&ee?.result?.length===0),[Ee,fe]=(0,D.Z)(async()=>{g||await t((0,Ce.ei)())},[g]);(0,e.useEffect)(()=>{t((0,Ce.ei)())},[t]),(0,v.Z)(fe,Ft.p4);const _=V&&ae&&B.length>0,O=(0,Be.Zo)(),M=yt(O,o);return e.createElement(F.J,{pageId:"alert-list",isLoading:!1},e.createElement(Ae,null),e.createElement(Dt,{onFilterCleared:()=>c(!1)}),!_&&e.createElement(e.Fragment,null,e.createElement("div",{className:r.break}),e.createElement("div",{className:r.buttonsContainer},e.createElement("div",{className:r.statsContainer},C==="groups"&&d&&e.createElement(U.zx,{className:r.expandAllButton,icon:l?"angle-double-up":"angle-double-down",variant:"secondary",onClick:()=>c(!l)},l?"Collapse all":"Expand all"),e.createElement(We,{namespaces:M,includeTotal:!0})),e.createElement(p.Stack,{direction:"row",gap:.5},E&&e.createElement(U.Qj,{href:(0,Ot.u)("/api/v1/provisioning/alert-rules/export",{download:"true",format:"yaml"}),icon:"download-alt",target:"_blank",rel:"noopener"},"Export"),(m||R)&&e.createElement(U.Qj,{href:T.Cj.renderUrl("alerting/new",{returnTo:i.pathname+i.search}),icon:"plus",onClick:()=>(0,b.PN)(A.z7.alertRuleFromScratch)},"Create alert rule")))),_&&e.createElement(xe,null),!_&&e.createElement(L,{expandAll:l,namespaces:M}))},{style:"page"}),bt=t=>({break:n.css`
    width: 100%;
    height: 0;
    margin-bottom: ${t.spacing(2)};
    border-bottom: solid 1px ${t.colors.border.medium};
  `,buttonsContainer:n.css`
    margin-bottom: ${t.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,statsContainer:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,expandAllButton:n.css`
    margin-right: ${t.spacing(1)};
  `}),Wt=Mt},45524:(k,$,a)=>{a.d($,{J:()=>P});var n=a(68404),e=a(79396);const P=({children:D,pageId:v,pageNav:T,isLoading:p})=>n.createElement(e.T,{pageNav:T,navId:v},n.createElement(e.T.Contents,{isLoading:p},D))},51981:(k,$,a)=>{a.d($,{q:()=>P});var n=a(68404),e=a(82002);const P=({actions:D,children:v,fallback:T=!0})=>D.some(p=>e.Vt.hasAccess(p,T))?n.createElement(n.Fragment,null,v):null},65750:(k,$,a)=>{a.d($,{A:()=>D});var n=a(68404),e=a(61860),P=a(31403);const D=({tooltip:v,icon:T,to:p,target:b,onClick:z,className:x,tooltipPlacement:U="top",...w})=>{const N=typeof v=="string"?v:void 0;return n.createElement(e.u,{content:v,placement:U},p?n.createElement(P.Qj,{variant:"secondary",fill:"text",icon:T,href:p,size:"sm",target:b,...w,"aria-label":N}):n.createElement(P.zx,{className:x,variant:"secondary",fill:"text",size:"sm",icon:T,type:"button",onClick:z,...w,"aria-label":N}))}},31808:(k,$,a)=>{a.d($,{j:()=>D});var n=a(68404),e=a(70356),P=a(37932);function D(){const{search:v}=(0,e.TH)(),T=(0,n.useMemo)(()=>new URLSearchParams(v),[v]),p=(0,n.useCallback)((b,z)=>{P.E1.partial(b,z)},[]);return[T,p]}},39910:(k,$,a)=>{a.d($,{B:()=>P});var n=a(68404),e=a(97953);function P(){return(0,n.useMemo)(()=>(0,e.Rv)(),[])}},53739:(k,$,a)=>{a.d($,{q:()=>P});var n=a(68404),e=a(46519);const P=({timeInMs:v,className:T,humanize:p})=>n.createElement("span",{className:T},D(v,p)),D=(v,T=!1)=>{const p=v/1e3;if(!T)return`${p.toFixed(1)}s`;const b=(0,e.Ks)(p,"seconds"),z=b.hours(),x=b.minutes(),U=b.seconds();return z?`${z}h ${x}m ${U}s`:x?`${x}m ${U}s`:`${U}s`}},78337:(k,$,a)=>{a.d($,{Z:()=>P});var n=a(68404),e=function(D,v){var T=(0,n.useRef)(function(){});(0,n.useEffect)(function(){T.current=D}),(0,n.useEffect)(function(){if(v!==null){var p=setInterval(function(){return T.current()},v||0);return function(){return clearInterval(p)}}},[v])};const P=e}}]);

//# sourceMappingURL=AlertRuleListIndex.a2dd3cc3a188db97f7ab.js.map