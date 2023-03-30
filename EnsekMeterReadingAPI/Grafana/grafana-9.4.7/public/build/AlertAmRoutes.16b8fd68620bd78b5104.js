"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8648],{2979:(j,O,a)=>{a.r(O),a.d(O,{default:()=>Et});var r=a(52423),e=a(68404),v=a(72648),c=a(45253),A=a(61744),W=a(53546),h=a(81168),x=a(40014),S=a(94984),B=a(45524),L=a(731),z=a(88331),U=a(40106),f=a(31403),D=a(51981),G=a(97953),Q=a(94270),N=a(24799),V=a(63619),w=a(53217),te=a(29460),se=a(2352),Z=a(46967),ne=a(82897),ie=a(39031),H=a(20194),ye=a(45849),Y=a(58593);const he=["",""],Ce=(t,l)=>Object.entries(t??{}).reduce((o,[i,s])=>[...o,{name:i,value:s,operator:l?ie._M.regex:ie._M.equal}],[]),ce=(t,l)=>{if(!t)return l??he;const[o,i]=t?(0,Y.bG)(t):[void 0,void 0],s=Y.qr.find(n=>n.value===i);return!o||!s?he:[String(o),s.value]},Ae=t=>t.value,$e=t=>(t??[]).map(Ae),Ie={name:"",value:"",operator:ie._M.equal},Le=["grafana_folder","alertname"],Te=[{label:"grafana_folder",value:"grafana_folder"},{label:"alertname",value:"alertname"},{label:"Disable (...)",value:"..."}],re={id:"",overrideGrouping:!1,groupBy:Le,object_matchers:[],routes:[],continue:!1,receiver:"",overrideTimings:!1,groupWaitValue:"",groupWaitValueType:Y.qr[0].value,groupIntervalValue:"",groupIntervalValueType:Y.qr[0].value,repeatIntervalValue:"",repeatIntervalValueType:Y.qr[0].value,muteTimeIntervals:[]},Me=t=>{if(!t)return[re,{}];const l=String(Math.random()),o={[l]:t};if(Object.keys(t).length===0)return[{...re,id:l},o];const i=[];t.routes?.forEach(d=>{const[C,y]=Me(d);i.push(C),Object.assign(o,y)});const s=t.matchers?t.matchers?.map(d=>(0,H.cm)((0,H.tC)(d)))??[]:t.object_matchers?.map(d=>({name:d[0],operator:d[1],value:d[2]}))??[],[n,m]=ce(t.group_wait,["","s"]),[T,I]=ce(t.group_interval,["","m"]),[g,p]=ce(t.repeat_interval,["","h"]);return[{id:l,object_matchers:[...s,...Ce(t.match,!1),...Ce(t.match_re,!0)],continue:t.continue??!1,receiver:t.receiver??"",overrideGrouping:Array.isArray(t.group_by)&&t.group_by.length!==0,groupBy:t.group_by??[],overrideTimings:[n,T,g].some(Boolean),groupWaitValue:n,groupWaitValueType:m,groupIntervalValue:T,groupIntervalValueType:I,repeatIntervalValue:g,repeatIntervalValueType:p,routes:i,muteTimeIntervals:t.mute_time_intervals??[]},o]},Pe=(t,l,o)=>{const i=o[l.id],{overrideGrouping:s,groupBy:n,overrideTimings:m,groupWaitValue:T,groupWaitValueType:I,groupIntervalValue:g,groupIntervalValueType:p,repeatIntervalValue:d,repeatIntervalValueType:C}=l,y=s&&n?n:[],u=m&&T?`${T}${I}`:void 0,b=m&&g?`${g}${p}`:void 0,K=m&&d?`${d}${C}`:void 0,F={...i??{},continue:l.continue,group_by:y,object_matchers:l.object_matchers.length?l.object_matchers.map($=>[$.name,$.operator,$.value]):void 0,match:void 0,match_re:void 0,group_wait:u,group_interval:b,repeat_interval:K,routes:l.routes.map($=>Pe(t,$,o)),mute_time_intervals:l.muteTimeIntervals};return t!==ye.GC?(F.matchers=l.object_matchers.map(({name:$,operator:J,value:P})=>`${$}${J}${P}`),F.object_matchers=void 0):F.matchers=void 0,l.receiver&&(F.receiver=l.receiver),(0,ne.omitBy)(F,ne.isUndefined)},me=t=>({label:t,value:t}),Re=t=>(t??[]).map(me),X=t=>t?Ae(t)??"":"",ue=t=>t?$e(t):[],k=t=>{if(t)return/^\d+$/.test(t)?void 0:"Must be a positive integer."};var q=a(10505);const Oe=t=>({container:r.css`
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      & > * + * {
        margin-left: ${t.spacing(1)};
      }
    `,input:r.css`
      flex: 1;
    `,timingContainer:r.css`
      max-width: ${t.spacing(33)};
    `,smallInput:r.css`
      width: ${t.spacing(6.5)};
    `,linkText:r.css`
      text-decoration: underline;
    `,collapse:r.css`
      border: none;
      background: none;
      color: ${t.colors.text.primary};
    `}),Ge=({alertManagerSourceName:t,onCancel:l,onSave:o,receivers:i,routes:s})=>{const n=(0,v.wW)(Oe),[m,T]=(0,e.useState)(!1),[I,g]=(0,e.useState)(Re(s.groupBy));return e.createElement(Q.l,{defaultValues:{...s,overrideTimings:!0,overrideGrouping:!0},onSubmit:o},({control:p,errors:d,setValue:C})=>e.createElement(e.Fragment,null,e.createElement(N.g,{label:"Default contact point",invalid:!!d.receiver,error:d.receiver?.message},e.createElement(e.Fragment,null,e.createElement("div",{className:n.container,"data-testid":"am-receiver-select"},e.createElement(V.g,{render:({field:{onChange:y,ref:R,...u}})=>e.createElement(w.Ph,{"aria-label":"Default contact point",...u,className:n.input,onChange:E=>y(X(E)),options:i}),control:p,name:"receiver",rules:{required:{value:!0,message:"Required."}}}),e.createElement("span",null,"or"),e.createElement(te.r,{className:n.linkText,href:(0,q.eQ)("/alerting/notifications/receivers/new",t)},"Create a contact point")))),e.createElement(N.g,{label:"Group by",description:"Group alerts when you receive a notification based on labels.","data-testid":"am-group-select"},e.createElement(V.g,{render:({field:{onChange:y,ref:R,...u}})=>e.createElement(w.NU,{"aria-label":"Group by",...u,allowCustomValue:!0,className:n.input,onCreateOption:E=>{g(b=>[...b,me(E)]),C("groupBy",[...u.value,E])},onChange:E=>y(ue(E)),options:[...Te,...I]}),control:p,name:"groupBy"})),e.createElement(se.U,{collapsible:!0,className:n.collapse,isOpen:m,label:"Timing options",onToggle:T},e.createElement(N.g,{label:"Group wait",description:"The waiting time until the initial notification is sent for a new group created by an incoming alert. Default 30 seconds.",invalid:!!d.groupWaitValue,error:d.groupWaitValue?.message,"data-testid":"am-group-wait"},e.createElement(e.Fragment,null,e.createElement("div",{className:(0,r.cx)(n.container,n.timingContainer)},e.createElement(V.g,{render:({field:y,fieldState:{invalid:R}})=>e.createElement(Z.I,{...y,className:n.smallInput,invalid:R,placeholder:"30"}),control:p,name:"groupWaitValue",rules:{validate:k}}),e.createElement(V.g,{render:({field:{onChange:y,ref:R,...u}})=>e.createElement(w.Ph,{...u,className:n.input,onChange:E=>y(X(E)),options:Y.qr,"aria-label":"Group wait type"}),control:p,name:"groupWaitValueType"})))),e.createElement(N.g,{label:"Group interval",description:"The waiting time to send a batch of new alerts for that group after the first notification was sent. Default 5 minutes.",invalid:!!d.groupIntervalValue,error:d.groupIntervalValue?.message,"data-testid":"am-group-interval"},e.createElement(e.Fragment,null,e.createElement("div",{className:(0,r.cx)(n.container,n.timingContainer)},e.createElement(V.g,{render:({field:y,fieldState:{invalid:R}})=>e.createElement(Z.I,{...y,className:n.smallInput,invalid:R,placeholder:"5"}),control:p,name:"groupIntervalValue",rules:{validate:k}}),e.createElement(V.g,{render:({field:{onChange:y,ref:R,...u}})=>e.createElement(w.Ph,{...u,className:n.input,onChange:E=>y(X(E)),options:Y.qr,"aria-label":"Group interval type"}),control:p,name:"groupIntervalValueType"})))),e.createElement(N.g,{label:"Repeat interval",description:"The waiting time to resend an alert after they have successfully been sent. Default 4 hours.",invalid:!!d.repeatIntervalValue,error:d.repeatIntervalValue?.message,"data-testid":"am-repeat-interval"},e.createElement(e.Fragment,null,e.createElement("div",{className:(0,r.cx)(n.container,n.timingContainer)},e.createElement(V.g,{render:({field:y,fieldState:{invalid:R}})=>e.createElement(Z.I,{...y,className:n.smallInput,invalid:R,placeholder:"4"}),control:p,name:"repeatIntervalValue",rules:{validate:k}}),e.createElement(V.g,{render:({field:{onChange:y,ref:R,...u}})=>e.createElement(w.Ph,{...u,className:n.input,menuPlacement:"top",onChange:E=>y(X(E)),options:Y.qr,"aria-label":"Repeat interval type"}),control:p,name:"repeatIntervalValueType"}))))),e.createElement("div",{className:n.container},e.createElement(f.zx,{type:"submit"},"Save"),e.createElement(f.zx,{onClick:l,type:"reset",variant:"secondary",fill:"outline"},"Cancel"))))},De=t=>({container:r.css`
      display: grid;
      font-style: ${t.typography.fontSize};
      grid-template-columns: ${t.spacing(15.5)} auto;

      ${t.breakpoints.down("md")} {
        grid-template-columns: 100%;
      }
    `,titleCell:r.css`
      color: ${t.colors.text.primary};
    `,valueCell:r.css`
      color: ${t.colors.text.secondary};
      margin-bottom: ${t.spacing(1)};
    `}),Ue=({routes:t})=>{const l=(0,v.wW)(De),o=t.receiver||"-",i=t.groupBy.join(", ")||"-",s=t.groupWaitValue?`${t.groupWaitValue}${t.groupWaitValueType}`:"-",n=t.groupIntervalValue?`${t.groupIntervalValue}${t.groupIntervalValueType}`:"-",m=t.repeatIntervalValue?`${t.repeatIntervalValue}${t.repeatIntervalValueType}`:"-";return e.createElement("div",{className:l.container},e.createElement("div",{className:l.titleCell},"Contact point"),e.createElement("div",{className:l.valueCell,"data-testid":"am-routes-root-receiver"},o),e.createElement("div",{className:l.titleCell},"Group by"),e.createElement("div",{className:l.valueCell,"data-testid":"am-routes-root-group-by"},i),e.createElement("div",{className:l.titleCell},"Timings"),e.createElement("div",{className:l.valueCell,"data-testid":"am-routes-root-timings"},"Group wait: ",s," | Group interval: ",n," | Repeat interval: ",m))},Ke=({isEditMode:t,onSave:l,onEnterEditMode:o,onExitEditMode:i,receivers:s,routes:n,alertManagerSourceName:m,readOnly:T=!1})=>{const I=(0,v.wW)(Fe),g=(0,G.Ko)(m);return e.createElement("div",{className:I.container,"data-testid":"am-root-route-container"},e.createElement("div",{className:I.titleContainer},e.createElement("h5",{className:I.title},"Root policy - ",e.createElement("i",null,"default for all alerts")),!t&&!T&&e.createElement(D.q,{actions:[g.update]},e.createElement(f.zx,{icon:"pen",onClick:o,size:"sm",type:"button",variant:"secondary"},"Edit"))),e.createElement("p",null,"All alerts will go to the default contact point, unless you set additional matchers in the specific routing area."),t?e.createElement(Ge,{alertManagerSourceName:m,onCancel:i,onSave:l,receivers:s,routes:n}):e.createElement(Ue,{routes:n}))},Fe=t=>({container:r.css`
      background-color: ${t.colors.background.secondary};
      color: ${t.colors.text.secondary};
      padding: ${t.spacing(2)};
    `,titleContainer:r.css`
      color: ${t.colors.text.primary};
      display: flex;
      flex-flow: row nowrap;
    `,title:r.css`
      flex: 100%;
    `});var je=a(70197),ze=a(64353),we=a(39904),ee=a(82002),_e=a(31808);const le=({children:t})=>{const l=(0,v.wW)(Je);return e.createElement("div",{className:l.container},t)},Je=t=>({container:r.css`
      background-color: ${t.colors.background.secondary};
      color: ${t.colors.text.secondary};
      padding: ${t.spacing(4)};
      text-align: center;
    `}),ge=({buttonIcon:t,buttonLabel:l,buttonSize:o="lg",buttonVariant:i="primary",onButtonClick:s,text:n,href:m,showButton:T=!0})=>{const I=(0,v.wW)(Qe),g={className:I.button,icon:t,size:o,variant:i};return e.createElement(le,null,e.createElement(e.Fragment,null,e.createElement("p",{className:I.text},n),T&&(m?e.createElement(f.Qj,{href:m,type:"button",...g},l):e.createElement(f.zx,{onClick:s,type:"button",...g},l))))},Qe=t=>({container:r.css`
      background-color: ${t.colors.background.secondary};
      color: ${t.colors.text.secondary};
      padding: ${t.spacing(4)};
      text-align: center;
    `,text:r.css`
      margin-bottom: ${t.spacing(2)};
    `,button:r.css`
      margin: ${t.spacing(2,0,1)};
    `});var He=a(30151),de=a(52081),ae=a(8180),be=a(98102);const Ye=(t,l)=>t.map((o,i)=>({id:l?.(o)??i,data:o}));var xe=a(53731),Ze=a(44479),Xe=a(99631),ke=a(70132),qe=a(19985),pe=a(8944),oe=a(46818),We=a(29614),Be=a(23403),ve=a(69945);function et(){const t=(0,Be.k)("notification"),[l]=(0,We.k)(t),o=(0,ve._)(i=>i.amConfigs);return(0,e.useMemo)(()=>{const{result:i}=l&&o[l]||oe.oq;return(i?.alertmanager_config??{})?.mute_time_intervals?.map(m=>({value:m.name,label:m.name,description:m.time_intervals.map(T=>(0,H.uK)(T)).join(", AND ")}))??[]},[l,o])}var tt=a(2390);const at=({onCancel:t,onSave:l,receivers:o,routes:i})=>{const s=(0,v.wW)(nt),n=(0,v.wW)(Oe),[m,T]=(0,e.useState)(Re(i.groupBy)),I=et(),g=o.sort((p,d)=>p.grafanaAppReceiverType===tt.W.OnCall?-1:0);return e.createElement(Q.l,{defaultValues:i,onSubmit:l},({control:p,register:d,errors:C,setValue:y,watch:R})=>e.createElement(e.Fragment,null,e.createElement("input",{type:"hidden",...d("id")}),e.createElement(ke.F,{name:"object_matchers",control:p},({fields:u,append:E,remove:b})=>e.createElement(e.Fragment,null,e.createElement(de.wc,{justify:"flex-start",spacing:"md"},e.createElement("div",null,"Matching labels"),u.length===0&&e.createElement(qe.C,{color:"orange",className:s.noMatchersWarning,icon:"exclamation-triangle",text:"If no matchers are specified, this notification policy will handle all alert instances."}),u.length>0&&e.createElement("div",{className:s.matchersContainer},u.map((M,K)=>{const F=`object_matchers[${K}]`;return e.createElement(de.Lh,{key:M.id,align:"flex-start",height:"auto"},e.createElement(N.g,{label:"Label",invalid:!!C.object_matchers?.[K]?.name,error:C.object_matchers?.[K]?.name?.message},e.createElement(Z.I,{...d(`${F}.name`,{required:"Field is required"}),defaultValue:M.name,placeholder:"label"})),e.createElement(N.g,{label:"Operator"},e.createElement(V.g,{render:({field:{onChange:$,ref:J,...P}})=>e.createElement(w.Ph,{...P,className:s.matchersOperator,onChange:_=>$(_?.value),options:H.tA,"aria-label":"Operator"}),defaultValue:M.operator,control:p,name:`${F}.operator`,rules:{required:{value:!0,message:"Required."}}})),e.createElement(N.g,{label:"Value",invalid:!!C.object_matchers?.[K]?.value,error:C.object_matchers?.[K]?.value?.message},e.createElement(Z.I,{...d(`${F}.value`,{required:"Field is required"}),defaultValue:M.value,placeholder:"value"})),e.createElement(ae.h,{className:s.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>b(K)},"Remove"))})),e.createElement(f.zx,{className:s.addMatcherBtn,icon:"plus",onClick:()=>E(Ie),variant:"secondary",type:"button"},"Add matcher")))),e.createElement(N.g,{label:"Contact point"},e.createElement(V.g,{render:({field:{onChange:u,ref:E,...b}})=>e.createElement(w.Ph,{"aria-label":"Contact point",...b,className:n.input,onChange:M=>u(X(M)),options:g}),control:p,name:"receiver"})),e.createElement(N.g,{label:"Continue matching subsequent sibling nodes"},e.createElement(pe.r,{id:"continue-toggle",...d("continue")})),e.createElement(N.g,{label:"Override grouping"},e.createElement(pe.r,{id:"override-grouping-toggle",...d("overrideGrouping")})),R().overrideGrouping&&e.createElement(N.g,{label:"Group by",description:"Group alerts when you receive a notification based on labels. If empty it will be inherited from the parent policy."},e.createElement(V.g,{render:({field:{onChange:u,ref:E,...b}})=>e.createElement(w.NU,{"aria-label":"Group by",...b,allowCustomValue:!0,className:n.input,onCreateOption:M=>{T(K=>[...K,me(M)]),y("groupBy",[...b.value,M])},onChange:M=>u(ue(M)),options:[...Te,...m]}),control:p,name:"groupBy"})),e.createElement(N.g,{label:"Override general timings"},e.createElement(pe.r,{id:"override-timings-toggle",...d("overrideTimings")})),R().overrideTimings&&e.createElement(e.Fragment,null,e.createElement(N.g,{label:"Group wait",description:"The waiting time until the initial notification is sent for a new group created by an incoming alert. If empty it will be inherited from the parent policy.",invalid:!!C.groupWaitValue,error:C.groupWaitValue?.message},e.createElement(e.Fragment,null,e.createElement("div",{className:(0,r.cx)(n.container,n.timingContainer)},e.createElement(V.g,{render:({field:u,fieldState:{invalid:E}})=>e.createElement(Z.I,{...u,className:n.smallInput,invalid:E,"aria-label":"Group wait value"}),control:p,name:"groupWaitValue",rules:{validate:k}}),e.createElement(V.g,{render:({field:{onChange:u,ref:E,...b}})=>e.createElement(w.Ph,{...b,className:n.input,onChange:M=>u(X(M)),options:Y.qr,"aria-label":"Group wait type"}),control:p,name:"groupWaitValueType"})))),e.createElement(N.g,{label:"Group interval",description:"The waiting time to send a batch of new alerts for that group after the first notification was sent. If empty it will be inherited from the parent policy.",invalid:!!C.groupIntervalValue,error:C.groupIntervalValue?.message},e.createElement(e.Fragment,null,e.createElement("div",{className:(0,r.cx)(n.container,n.timingContainer)},e.createElement(V.g,{render:({field:u,fieldState:{invalid:E}})=>e.createElement(Z.I,{...u,className:n.smallInput,invalid:E,"aria-label":"Group interval value"}),control:p,name:"groupIntervalValue",rules:{validate:k}}),e.createElement(V.g,{render:({field:{onChange:u,ref:E,...b}})=>e.createElement(w.Ph,{...b,className:n.input,onChange:M=>u(X(M)),options:Y.qr,"aria-label":"Group interval type"}),control:p,name:"groupIntervalValueType"})))),e.createElement(N.g,{label:"Repeat interval",description:"The waiting time to resend an alert after they have successfully been sent.",invalid:!!C.repeatIntervalValue,error:C.repeatIntervalValue?.message},e.createElement(e.Fragment,null,e.createElement("div",{className:(0,r.cx)(n.container,n.timingContainer)},e.createElement(V.g,{render:({field:u,fieldState:{invalid:E}})=>e.createElement(Z.I,{...u,className:n.smallInput,invalid:E,"aria-label":"Repeat interval value"}),control:p,name:"repeatIntervalValue",rules:{validate:k}}),e.createElement(V.g,{render:({field:{onChange:u,ref:E,...b}})=>e.createElement(w.Ph,{...b,className:n.input,menuPlacement:"top",onChange:M=>u(X(M)),options:Y.qr,"aria-label":"Repeat interval type"}),control:p,name:"repeatIntervalValueType"}))))),e.createElement(N.g,{label:"Mute timings","data-testid":"am-mute-timing-select",description:"Add mute timing to policy",invalid:!!C.muteTimeIntervals},e.createElement(V.g,{render:({field:{onChange:u,ref:E,...b}})=>e.createElement(w.NU,{"aria-label":"Mute timings",...b,className:n.input,onChange:M=>u(ue(M)),options:I}),control:p,name:"muteTimeIntervals"})),e.createElement("div",{className:s.buttonGroup},e.createElement(f.zx,{type:"submit"},"Save policy"),e.createElement(f.zx,{onClick:t,fill:"outline",type:"button",variant:"secondary"},"Cancel"))))},nt=t=>{const l=t.spacing(3.5);return{addMatcherBtn:r.css`
      margin-bottom: ${l};
    `,matchersContainer:r.css`
      background-color: ${t.colors.background.secondary};
      margin: ${t.spacing(1,0)};
      padding: ${t.spacing(1,4.6,1,1.5)};
      width: fit-content;
    `,matchersOperator:r.css`
      min-width: 140px;
    `,nestedPolicies:r.css`
      margin-top: ${l};
    `,removeButton:r.css`
      margin-left: ${t.spacing(1)};
      margin-top: ${t.spacing(2.5)};
    `,buttonGroup:r.css`
      margin: ${t.spacing(6)} 0 ${l};

      & > * + * {
        margin-left: ${t.spacing(1.5)};
      }
    `,noMatchersWarning:r.css`
      padding: ${t.spacing(1)} ${t.spacing(2)};
    `}};var Ee=a(72004);const Se=({alertManagerSourceName:t,muteTimingNames:l,hideActions:o})=>{const i=(0,v.wW)(ot),s=(0,h.useDispatch)(),n=(0,G.Ko)(t),m=(0,ve._)(C=>C.amConfigs),[T,I]=(0,e.useState)(""),{result:g}=t&&m[t]||oe.oq,p=(0,e.useMemo)(()=>{const C=g?.alertmanager_config?.mute_time_intervals??[],y=g?.alertmanager_config?.muteTimeProvenances??{};return C.filter(({name:R})=>l?l.includes(R):!0).map(R=>({id:R.name,data:{...R,provenance:y[R.name]}}))},[g?.alertmanager_config?.mute_time_intervals,g?.alertmanager_config?.muteTimeProvenances,l]),d=rt(t,o,I);return e.createElement("div",{className:i.container},!o&&e.createElement("h5",null,"Mute timings"),!o&&e.createElement("p",null,"Mute timings are a named interval of time that may be referenced in the notification policy tree to mute particular notification policies for specific times of the day."),!o&&p.length>0&&e.createElement(D.q,{actions:[n.create]},e.createElement(f.Qj,{className:i.addMuteButton,icon:"plus",variant:"primary",href:(0,q.eQ)("alerting/routes/mute-timing/new",t)},"Add mute timing")),p.length>0?e.createElement(xe.t,{items:p,cols:d}):o?e.createElement("p",null,"No mute timings configured"):e.createElement(ge,{text:"You haven't created any mute timings yet",buttonLabel:"Add mute timing",buttonIcon:"plus",buttonSize:"lg",href:(0,q.eQ)("alerting/routes/mute-timing/new",t),showButton:ee.Vt.hasPermission(n.create)}),!o&&e.createElement(be.s,{isOpen:!!T,title:"Delete mute timing",body:`Are you sure you would like to delete "${T}"`,confirmText:"Delete",onConfirm:()=>s((0,Ee.r0)(t,T)),onDismiss:()=>I("")}))};function rt(t,l=!1,o){const i=(0,G.Ko)(t),s=ee.Vt.hasPermission(i.update),n=ee.Vt.hasPermission(i.delete),m=!l&&(s||n);return(0,e.useMemo)(()=>{const T=[{id:"name",label:"Name",renderCell:function({data:g}){return e.createElement(e.Fragment,null,g.name," ",g.provenance&&e.createElement(U.C0,null))},size:"250px"},{id:"timeRange",label:"Time range",renderCell:({data:I})=>lt(I.time_intervals)}];return m&&T.push({id:"actions",label:"Actions",renderCell:function({data:g}){return g.provenance?e.createElement("div",null,e.createElement(te.r,{href:(0,q.eQ)("/alerting/routes/mute-timing/edit",t,{muteName:g.name})},e.createElement(ae.h,{name:"file-alt",title:"View mute timing"}))):e.createElement("div",null,e.createElement(D.q,{actions:[i.update]},e.createElement(te.r,{href:(0,q.eQ)("/alerting/routes/mute-timing/edit",t,{muteName:g.name})},e.createElement(ae.h,{name:"edit",title:"Edit mute timing"}))),e.createElement(D.q,{actions:[i.delete]},e.createElement(ae.h,{name:"trash-alt",title:"Delete mute timing",onClick:()=>o(g.name)})))},size:"100px"}),T},[t,o,m,i])}function lt(t){return t.map((l,o)=>{const{times:i,weekdays:s,days_of_month:n,months:m,years:T}=l,I=(0,H.u6)(i),g=(0,H.v7)(s),p=(0,H.J8)(n),d=(0,H.m8)(m),C=(0,H.qw)(T);return e.createElement(e.Fragment,{key:JSON.stringify(l)+o},`${I} ${g}`,e.createElement("br",null),[p,d,C].join(" | "),e.createElement("br",null))})}const ot=t=>({container:r.css`
    display: flex;
    flex-flow: column nowrap;
  `,addMuteButton:r.css`
    margin-bottom: ${t.spacing(2)};
    align-self: flex-end;
  `}),st=({onChange:t,receivers:l,routes:o,readOnly:i=!1,alertManagerSourceName:s})=>{const n=(0,v.wW)(it),m=(0,v.wW)(De),T=(0,G.Ko)(s),I=o.groupWaitValue?`${o.groupWaitValue}${o.groupWaitValueType}`:"-",g=o.groupIntervalValue?`${o.groupIntervalValue}${o.groupIntervalValueType}`:"-",p=o.repeatIntervalValue?`${o.repeatIntervalValue}${o.repeatIntervalValueType}`:"-",[d,C]=(0,e.useState)(o.routes),[y,R]=(0,e.useState)(!1);return e.createElement("div",{className:m.container},e.createElement("div",{className:m.titleCell},"Group wait"),e.createElement("div",{className:m.valueCell},I),e.createElement("div",{className:m.titleCell},"Group interval"),e.createElement("div",{className:m.valueCell},g),e.createElement("div",{className:m.titleCell},"Repeat interval"),e.createElement("div",{className:m.valueCell},p),e.createElement("div",{className:m.titleCell},"Nested policies"),e.createElement("div",{className:m.valueCell},d.length?e.createElement(Ve,{isAddMode:y,onCancelAdd:()=>{R(!1),C(u=>{const E=[...u];return E.pop(),E})},onChange:u=>{t({...o,routes:u}),y&&R(!1)},receivers:l,routes:d,alertManagerSourceName:s}):e.createElement("p",null,"No nested policies configured."),!y&&!i&&e.createElement(D.q,{actions:[T.create]},e.createElement(f.zx,{className:n.addNestedRoutingBtn,icon:"plus",onClick:()=>{C(u=>[...u,re]),R(!0)},variant:"secondary",type:"button"},"Add nested policy"))),e.createElement("div",{className:m.titleCell},"Mute timings"),e.createElement("div",{className:m.valueCell},e.createElement(Se,{alertManagerSourceName:s,muteTimingNames:o.muteTimeIntervals,hideActions:!0})))},it=t=>({addNestedRoutingBtn:r.css`
      margin-top: ${t.spacing(2)};
    `}),ct=(t,l,o)=>{const i=(0,H.Zh)(l??"");let s=t;return i.length&&(s=t.filter(n=>{const m=n.object_matchers.map(H._J);return(0,ne.intersectionWith)(m,i,ne.isEqual).length>0})),o&&o.length>0&&(s=s.filter(n=>n.receiver.toLowerCase().includes(o.toLowerCase()))),s},Ne=(t,l)=>{const o=[...t],i=o.findIndex(s=>s.id===l.id);return i>=0&&(o[i]={...o[i],...l}),o},mt=(t,l)=>t.filter(o=>o.id!==l),ut=(t,l)=>t.find(o=>o.label===l)?.grafanaAppReceiverType,Ve=({isAddMode:t,onCancelAdd:l,onChange:o,receivers:i,routes:s,filters:n,readOnly:m=!1,alertManagerSourceName:T})=>{const[I,g]=(0,e.useState)(!1),[p,d]=(0,e.useState)(void 0),[C,y]=(0,e.useState)(),R=(0,G.Ko)(T),u=ee.Vt.hasPermission(R.update),E=ee.Vt.hasPermission(R.delete),b=!m&&(u||E),M=(0,e.useCallback)(P=>y(P.id),[]),K=(0,e.useCallback)(()=>y(void 0),[]),F=[{id:"matchingCriteria",label:"Matching labels",renderCell:P=>P.data.object_matchers.length?e.createElement(Xe.g,{matchers:P.data.object_matchers.map(H._J)}):e.createElement("span",null,"Matches all alert instances"),size:10},{id:"groupBy",label:"Group by",renderCell:P=>P.data.overrideGrouping&&P.data.groupBy.join(", ")||"-",size:5},{id:"receiverChannel",label:"Contact point",renderCell:P=>{const _=ut(i,P.data.receiver);return P.data.receiver?e.createElement(e.Fragment,null,P.data.receiver," ",_&&e.createElement(Ze.i,{grafanaAppType:_})):"-"},size:5},{id:"muteTimings",label:"Mute timings",renderCell:P=>P.data.muteTimeIntervals.join(", ")||"-",size:5},...b?[{id:"actions",label:"Actions",renderCell:P=>{if(P.renderExpandedContent)return null;const _=()=>{M(P),g(!0)};return e.createElement(e.Fragment,null,e.createElement(de.Lh,null,e.createElement(f.zx,{"aria-label":"Edit route",icon:"pen",onClick:_,size:"sm",type:"button",variant:"secondary"},"Edit"),e.createElement(ae.h,{"aria-label":"Delete route",name:"trash-alt",onClick:()=>{d(P.data.id)},type:"button"})))},size:"100px"}]:[]],$=(0,e.useMemo)(()=>ct(s,n?.queryString,n?.contactPoint),[s,n]),J=(0,e.useMemo)(()=>Ye(t?s:$),[t,s,$]);return(0,e.useEffect)(()=>{t&&J.length&&y(J[J.length-1].id),!t&&J.length&&y(void 0)},[t,J]),s.length>0&&$.length===0?e.createElement(le,null,e.createElement("p",null,"No policies found")):e.createElement(e.Fragment,null,e.createElement(xe.t,{cols:F,isExpandable:!0,items:J,testIdGenerator:()=>"am-routes-row",onCollapse:K,onExpand:M,isExpanded:P=>C===P.id,renderExpandedContent:P=>t||I?e.createElement(at,{onCancel:()=>{t&&l(),g(!1)},onSave:_=>{const fe=Ne(s,_);g(!1),o(fe)},receivers:i,routes:P.data}):e.createElement(st,{onChange:_=>{const fe=Ne(s,_);o(fe)},receivers:i,routes:P.data,readOnly:m,alertManagerSourceName:T})}),e.createElement(be.s,{isOpen:!!p,title:"Delete notification policy",body:"Deleting this notification policy will permanently remove it. Are you sure you want to delete this policy?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:()=>{if(p){const P=mt(s,p);o(P),d(void 0)}},onDismiss:()=>d(void 0)}))},gt=({alertManagerSourceName:t,onChange:l,onRootRouteEdit:o,receivers:i,routes:s,readOnly:n=!1})=>{const[m,T]=(0,e.useState)([...s.routes]),[I,g]=(0,e.useState)(!1),p=(0,G.Ko)(t),d=ee.Vt.hasPermission(p.create),[C,y]=(0,_e.j)(),{queryString:R,contactPoint:u}=(0,q.$f)(C),[E,b]=(0,e.useState)({queryString:R,contactPoint:u});(0,je.Z)(()=>{y({queryString:E.queryString,contactPoint:E.contactPoint})},400,[E]);const M=(0,v.wW)(dt),K=()=>{b({queryString:void 0,contactPoint:void 0}),y({queryString:void 0,contactPoint:void 0})},F=()=>{K(),g(!0),T(()=>[...s.routes,{...re,matchers:[Ie]}])},$=()=>{g(!1),T([...s.routes])},J=P=>{l({...s,routes:P}),I&&g(!1)};return e.createElement("div",{className:M.container},e.createElement("h5",null,"Specific routing"),e.createElement("p",null,"Send specific alerts to chosen contact points, based on matching criteria"),s.receiver?m.length>0?e.createElement(e.Fragment,null,e.createElement("div",null,!I&&e.createElement("div",{className:M.searchContainer},e.createElement(He.F,{onFilterChange:P=>b(_=>({..._,queryString:P})),defaultQueryString:E.queryString??"",className:M.filterInput}),e.createElement("div",{className:M.filterInput},e.createElement(ze._,null,"Search by contact point"),e.createElement(Z.I,{onChange:({currentTarget:P})=>b(_=>({..._,contactPoint:P.value})),value:E.contactPoint??"",placeholder:"Search by contact point","data-testid":"search-query-input",prefix:e.createElement(we.J,{name:"search"})})),(R||u)&&e.createElement(f.zx,{variant:"secondary",icon:"times",onClick:K,className:M.clearFilterBtn},"Clear filters")),!I&&!n&&e.createElement(D.q,{actions:[p.create]},e.createElement("div",{className:M.addMatcherBtnRow},e.createElement(f.zx,{className:M.addMatcherBtn,icon:"plus",onClick:F,type:"button"},"Add policy")))),e.createElement(Ve,{isAddMode:I,readOnly:n,onCancelAdd:$,onChange:J,receivers:i,routes:m,filters:{queryString:R,contactPoint:u},alertManagerSourceName:t})):n?e.createElement(le,null,e.createElement("p",null,"There are no specific policies configured.")):e.createElement(ge,{buttonIcon:"plus",buttonLabel:"New specific policy",onButtonClick:F,text:"You haven't created any specific policies yet.",showButton:d}):n?e.createElement(le,null,e.createElement("p",null,"There is no default contact point configured for the root route.")):e.createElement(ge,{buttonIcon:"rocket",buttonLabel:"Set a default contact point",onButtonClick:o,text:"You haven't set a default contact point for the root route yet.",showButton:d}))},dt=t=>({container:r.css`
      display: flex;
      flex-flow: column wrap;
    `,searchContainer:r.css`
      display: flex;
      flex-flow: row nowrap;
      padding-bottom: ${t.spacing(2)};
      border-bottom: 1px solid ${t.colors.border.strong};
    `,clearFilterBtn:r.css`
      align-self: flex-end;
      margin-left: ${t.spacing(1)};
    `,filterInput:r.css`
      width: 340px;
      & + & {
        margin-left: ${t.spacing(1)};
      }
    `,addMatcherBtnRow:r.css`
      display: flex;
      flex-flow: column nowrap;
      padding: ${t.spacing(2)} 0;
    `,addMatcherBtn:r.css`
      align-self: flex-end;
    `});var pt=a(52259);const vt=()=>{const t=(0,h.useDispatch)(),l=(0,v.wW)(ft),[o,i]=(0,e.useState)(!1),s=(0,Be.k)("notification"),[n,m]=(0,We.k)(s),T=(0,ve._)($=>$.amConfigs),I=(0,e.useCallback)(()=>{n&&t((0,Ee.Yh)(n))},[n,t]);(0,e.useEffect)(()=>{I()},[I]);const{result:g,loading:p,error:d}=n&&T[n]||oe.oq,C=g?.alertmanager_config,[y,R]=(0,e.useMemo)(()=>Me(C?.route),[C?.route]),u=(0,pt.Kt)(C?.receivers??[]),E=(0,e.useMemo)(()=>Boolean(C?.route?.provenance),[C?.route]),b=()=>{i(!0)},M=()=>{i(!1)};(0,x.x)($=>$.unifiedAlerting.saveAMConfig=oe.oq);const K=$=>{if(!g)return;const J=Pe(n,{...y,...$},R);o&&M(),t((0,Ee.mM)({newConfig:{...g,alertmanager_config:{...g.alertmanager_config,route:J}},oldConfig:g,alertManagerSourceName:n,successMessage:"Saved",refetch:!0}))};if(!n)return e.createElement(B.J,{pageId:"am-routes"},e.createElement(z.I,{availableAlertManagers:s}));const F=n?(0,ye.RY)(n)||E:!0;return e.createElement(B.J,{pageId:"am-routes"},e.createElement(S.P,{current:n,onChange:m,dataSources:s}),d&&!p&&e.createElement(c.b,{severity:"error",title:"Error loading Alertmanager config"},d.message||"Unknown error."),e.createElement(L.u,{currentAlertmanager:n}),E&&e.createElement(U.Xq,{resource:U.Uv.RootNotificationPolicy}),p&&e.createElement(A.u,{text:"Loading Alertmanager config..."}),g&&!p&&!d&&e.createElement(e.Fragment,null,e.createElement(Ke,{readOnly:F,alertManagerSourceName:n,isEditMode:o,onSave:K,onEnterEditMode:b,onExitEditMode:M,receivers:u,routes:y}),e.createElement("div",{className:l.break}),e.createElement(gt,{alertManagerSourceName:n,onChange:K,readOnly:F,onRootRouteEdit:b,receivers:u,routes:y}),e.createElement("div",{className:l.break}),e.createElement(Se,{alertManagerSourceName:n})))},Et=(0,W.Pf)(vt,{style:"page"}),ft=t=>({break:r.css`
    width: 100%;
    height: 0;
    margin-bottom: ${t.spacing(2)};
  `})},30173:(j,O,a)=>{a.d(O,{h:()=>e});var r=a(29427);const e=r.C.injectEndpoints({endpoints:v=>({getAlertmanagerChoiceStatus:v.query({query:()=>({url:"/api/v1/ngalert"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagerConfig:v.query({query:()=>({url:"/api/v1/ngalert/admin_config"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagers:v.query({query:()=>({url:"/api/v1/ngalert/alertmanagers"}),transformResponse:c=>c.data}),saveExternalAlertmanagersConfig:v.mutation({query:c=>({url:"/api/v1/ngalert/admin_config",method:"POST",data:c}),invalidatesTags:["AlertmanagerChoice"]})})})},45524:(j,O,a)=>{a.d(O,{J:()=>v});var r=a(68404),e=a(79396);const v=({children:c,pageId:A,pageNav:W,isLoading:h})=>r.createElement(e.T,{pageNav:W,navId:A},r.createElement(e.T.Contents,{isLoading:h},c))},51981:(j,O,a)=>{a.d(O,{q:()=>v});var r=a(68404),e=a(82002);const v=({actions:c,children:A,fallback:W=!0})=>c.some(h=>e.Vt.hasAccess(h,W))?r.createElement(r.Fragment,null,A):null},731:(j,O,a)=>{a.d(O,{u:()=>x});var r=a(52423),e=a(68404),v=a(72648),c=a(45253),A=a(39031),W=a(30173),h=a(45849);function x({currentAlertmanager:B}){const L=(0,v.wW)(S),{useGetAlertmanagerChoiceStatusQuery:z}=W.h,{currentData:U}=z(),f=B===h.GC;if(!(U?.alertmanagersChoice&&[A.TE.External,A.TE.All].includes(U?.alertmanagersChoice))||!f)return null;const G=U.numExternalAlertmanagers>0;return U.alertmanagersChoice===A.TE.External?e.createElement(c.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager"},"Grafana is configured to send alerts to external Alertmanagers only. Changing Grafana Alertmanager configuration will not affect delivery of your alerts.",e.createElement("div",{className:L.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):U.alertmanagersChoice===A.TE.All&&G?e.createElement(c.b,{title:"You have additional Alertmanagers to configure",severity:"warning"},"Ensure you make configuration changes in the correct Alertmanagers; both internal and external. Changing one will not affect the others.",e.createElement("div",{className:L.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):null}const S=B=>({adminHint:r.css`
    font-size: ${B.typography.bodySmall.fontSize};
    font-weight: ${B.typography.bodySmall.fontWeight};
  `})},88331:(j,O,a)=>{a.d(O,{I:()=>h});var r=a(68404),e=a(45253),v=a(29614),c=a(94984);const A=()=>r.createElement(e.b,{title:"No Alertmanager found",severity:"warning"},"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."),W=()=>r.createElement(e.b,{title:"Selected Alertmanager not found. Select a different Alertmanager.",severity:"warning"},"Selected Alertmanager no longer exists or you may not have permission to access it."),h=({availableAlertManagers:x})=>{const[S,B]=(0,v.k)(x),L=x.length>0;return r.createElement("div",null,L?r.createElement(r.Fragment,null,r.createElement(c.P,{onChange:B,dataSources:x}),r.createElement(W,null)):r.createElement(A,null))}},40106:(j,O,a)=>{a.d(O,{C0:()=>W,Uv:()=>c,Xq:()=>A});var r=a(68404),e=a(45253),v=a(19985),c=(h=>(h.ContactPoint="contact point",h.Template="template",h.MuteTiming="mute timing",h.AlertRule="alert rule",h.RootNotificationPolicy="root notification policy",h))(c||{});const A=({resource:h})=>r.createElement(e.b,{title:`This ${h} cannot be edited through the UI`,severity:"info"},"This ",h," has been provisioned, that means it was created by config. Please contact your server admin to update this ",h,"."),W=()=>r.createElement(v.C,{text:"Provisioned",color:"purple"})},30151:(j,O,a)=>{a.d(O,{F:()=>U});var r=a(52423),e=a(82897),v=a.n(e),c=a(68404),A=a(26418),W=a(54408),h=a(72648),x=a(39904),S=a(64353),B=a(61860),L=a(46967),z=a(41904);const U=({className:D,onFilterChange:G,defaultQueryString:Q})=>{const N=(0,h.wW)(f),V=(0,c.useMemo)(()=>(0,e.debounce)(te=>{(0,W.PN)(z.z7.filterByLabel);const se=te.target;G(se.value)},600),[G]);(0,c.useEffect)(()=>V.cancel(),[V]);const w=c.createElement(x.J,{name:"search"});return c.createElement("div",{className:D},c.createElement(S._,null,c.createElement(A.Stack,{gap:.5},c.createElement("span",null,"Search by label"),c.createElement(B.u,{content:c.createElement("div",null,"Filter alerts using label querying, ex:",c.createElement("pre",null,'{severity="critical", instance=~"cluster-us-.+"}'))},c.createElement(x.J,{className:N.icon,name:"info-circle",size:"sm"})))),c.createElement(L.I,{placeholder:"Search",defaultValue:Q,onChange:V,"data-testid":"search-query-input",prefix:w,className:N.inputWidth}))},f=D=>({icon:r.css`
    margin-right: ${D.spacing(.5)};
  `,inputWidth:r.css`
    width: 340px;
    flex-grow: 0;
  `})},44479:(j,O,a)=>{a.d(O,{i:()=>h});var r=a(52423),e=a(68404),v=a(72648),c=a(52081),A=a(2390);const W={[A.W.OnCall]:"public/img/alerting/oncall_logo.svg",[A.W.Incident]:"",[A.W.MachineLearning]:""},h=({grafanaAppType:S})=>{const B=(0,v.wW)(x);return e.createElement("div",{className:B.wrapper},e.createElement(c.Lh,{align:"center",spacing:"xs"},e.createElement("img",{src:W[S],alt:"",height:"12px"}),e.createElement("span",null,S)))},x=S=>({wrapper:r.css`
    text-align: left;
    height: 22px;
    display: inline-flex;
    padding: 1px 4px;
    border-radius: 3px;
    border: 1px solid rgba(245, 95, 62, 1);
    color: rgba(245, 95, 62, 1);
    font-weight: ${S.typography.fontWeightRegular};
  `})},52259:(j,O,a)=>{a.d(O,{Kt:()=>z,HU:()=>U});var r=a(3363),e=a(54899),v=a(29427);const c=v.C.injectEndpoints({endpoints:f=>({getOnCallIntegrations:f.query({queryFn:async()=>({data:await A()}),providesTags:["AlertmanagerChoice"]})})});async function A(){try{return(await(0,r.n)((0,e.i)().fetch({url:"/api/plugin-proxy/grafana-oncall-app/api/internal/v1/alert_receive_channels/",showErrorAlert:!1,showSuccessAlert:!1}))).data.map(D=>D.integration_url)}catch{return[]}}const{useGetOnCallIntegrationsQuery:W}=c;var h=a(58509),x=a(2390);const S=(f,D)=>D.includes(f),B=(f,D)=>{if(!f.grafana_managed_receiver_configs)return!1;const G=f.grafana_managed_receiver_configs.length===1,Q=S(f.grafana_managed_receiver_configs[0]?.settings?.url??"",D);return G&&Q},L=()=>{const{installed:f}=(0,h.n)(x.W.OnCall),{data:D}=W(void 0,{skip:!f});return Q=>{if(f&&B(Q,D??[]))return x.W.OnCall}},z=f=>{const D=L(),G=Q=>({label:Q.name,value:Q.name,grafanaAppReceiverType:D(Q)});return f.map(G)},U=f=>{const D=L();return f.map(G=>({...G,grafanaAppReceiverType:D(G)}))}},99631:(j,O,a)=>{a.d(O,{g:()=>W});var r=a(52423),e=a(68404),v=a(72648),c=a(34807),A=a(20194);const W=({matchers:x})=>{const S=(0,v.wW)(h);return e.createElement("div",null,e.createElement(c.P,{className:S.tags,tags:x.map(B=>`${B.name}${(0,A.zy)(B)}${B.value}`)}))},h=()=>({tags:r.css`
    justify-content: flex-start;
  `})},29614:(j,O,a)=>{a.d(O,{k:()=>h});var r=a(68404),e=a(96044),v=a(58379),c=a(37190),A=a(45849);function W(x){return(0,r.useCallback)(S=>x.map(L=>L.name).includes(S),[x])}function h(x){const[S,B]=(0,e.K)(),L=W(x),z=(0,r.useCallback)(D=>{L(D)&&(D===A.GC?(v.Z.delete(c.de),B({[c.c4]:null})):(v.Z.set(c.de,D),B({[c.c4]:D})))},[B,L]),U=S[c.c4];if(U&&typeof U=="string")return L(U)?[U,z]:[void 0,z];const f=v.Z.get(c.de);return f&&typeof f=="string"&&L(f)?(z(f),[f,z]):L(A.GC)?[A.GC,z]:[void 0,z]}},23403:(j,O,a)=>{a.d(O,{k:()=>v});var r=a(68404),e=a(45849);function v(c){return(0,r.useMemo)(()=>(0,e.LE)(c),[c])}},58509:(j,O,a)=>{a.d(O,{n:()=>v});var r=a(22350),e=a(13011);function v(c){const{loading:A,error:W,value:h}=(0,r.Z)(()=>(0,e.a)(c,{showErrorAlert:!1})),x=h&&!W&&!A,S=h?.enabled;return A&&!h?{loading:!0}:!x||!S?{loading:!1,installed:!1}:{loading:A,installed:!0,settings:h}}},31808:(j,O,a)=>{a.d(O,{j:()=>c});var r=a(68404),e=a(70356),v=a(37932);function c(){const{search:A}=(0,e.TH)(),W=(0,r.useMemo)(()=>new URLSearchParams(A),[A]),h=(0,r.useCallback)((x,S)=>{v.E1.partial(x,S)},[]);return[W,h]}},2390:(j,O,a)=>{a.d(O,{W:()=>r});var r=(e=>(e.Incident="grafana-incident-app",e.OnCall="grafana-oncall-app",e.MachineLearning="grafana-ml-app",e))(r||{})}}]);

//# sourceMappingURL=AlertAmRoutes.16b8fd68620bd78b5104.js.map