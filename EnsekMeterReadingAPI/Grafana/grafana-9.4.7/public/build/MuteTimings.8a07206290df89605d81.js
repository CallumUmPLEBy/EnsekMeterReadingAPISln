"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9355],{91631:(U,T,a)=>{a.r(T),a.d(T,{default:()=>ce});var e=a(68404),h=a(70356),p=a(61744),g=a(45253),P=a(96044),N=a(81168),n=a(52423),M=a(59052),R=a(72648),S=a(13393),v=a(24799),f=a(46967),C=a(31403),O=a(29614),b=a(23403),V=a(69945),j=a(72004),Y=a(20194),k=a(10505),H=a(82897);const J=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],X=["january","february","march","april","may","june","july","august","september","october","november","december"],B={times:[{start_time:"",end_time:""}],weekdays:"",days_of_month:"",months:"",years:""},W=(t,o,d)=>t?t.split(",").map(r=>r.trim()).every(r=>r.split(":").every(o))||d:!0,L=t=>t?t.split(",").map(o=>o.trim()):void 0,_=t=>{const o=t.time_intervals.map(({times:d,weekdays:r,days_of_month:A,months:E,years:y})=>{const s={times:d.filter(({start_time:l,end_time:u})=>!!l&&!!u),weekdays:L(r)?.map(l=>l.toLowerCase()),days_of_month:L(A),months:L(E),years:L(y)};return(0,H.omitBy)(s,H.isUndefined)});return{name:t.name,time_intervals:o}};var z=a(46818),w=a(94984),q=a(45524),G=a(40106),ee=a(11543),Q=a(81764),te=a(8180);const ae=({intervalIndex:t})=>{const o=(0,R.wW)(ne),{register:d,formState:r}=(0,M.Gc)(),{fields:A,append:E,remove:y}=(0,M.Dq)({name:`time_intervals.${t}.times`}),s=i=>{if(!i)return!0;const[m,c]=i.split(":").map(D=>parseInt(D,10)),I=m>=0&&m<25,$=c>-1&&c<60;return(m===24?c===0:I&&$)||"Time is invalid"},l=r.errors.time_intervals?.[t],u=l?.times?.some(i=>i?.start_time||i?.end_time)??!1;return e.createElement("div",null,e.createElement(v.g,{className:o.field,label:"Time range",description:"The time inclusive of the starting time and exclusive of the end time in UTC",invalid:u,error:u?"Times must be between 00:00 and 24:00 UTC":""},e.createElement(e.Fragment,null,A.map((i,m)=>e.createElement("div",{className:o.timeRange,key:i.id},e.createElement(ee.Z,null,e.createElement(Q._,{label:"Start time",invalid:!!l?.times?.[m]?.start_time},e.createElement(f.I,{...d(`time_intervals.${t}.times.${m}.start_time`,{validate:s}),className:o.timeRangeInput,defaultValue:i.start_time,placeholder:"HH:MM","data-testid":"mute-timing-starts-at"})),e.createElement(Q._,{label:"End time",invalid:!!l?.times?.[m]?.end_time},e.createElement(f.I,{...d(`time_intervals.${t}.times.${m}.end_time`,{validate:s}),className:o.timeRangeInput,defaultValue:i.end_time,placeholder:"HH:MM","data-testid":"mute-timing-ends-at"})),e.createElement(te.h,{className:o.deleteTimeRange,title:"Remove",name:"trash-alt",type:"button",onClick:c=>{c.preventDefault(),y(m)}})))))),e.createElement(C.zx,{className:o.addTimeRange,variant:"secondary",type:"button",icon:"plus",onClick:()=>E({start_time:"",end_time:""})},"Add another time range"))},ne=t=>({field:n.css`
    margin-bottom: 0;
  `,timeRange:n.css`
    margin-bottom: ${t.spacing(1)};
  `,timeRangeInput:n.css`
    width: 120px;
  `,deleteTimeRange:n.css`
    margin: ${t.spacing(1)} 0 0 ${t.spacing(.5)};
  `,addTimeRange:n.css`
    margin-bottom: ${t.spacing(2)};
  `}),se=()=>{const t=(0,R.wW)(ie),{formState:o,register:d}=(0,M.Gc)(),{fields:r,append:A,remove:E}=(0,M.Dq)({name:"time_intervals"});return e.createElement(S.C,{className:t.timeIntervalLegend,label:"Time intervals"},e.createElement(e.Fragment,null,e.createElement("p",null,"A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."),r.map((y,s)=>{const l=o.errors;return e.createElement("div",{key:y.id,className:t.timeIntervalSection},e.createElement(ae,{intervalIndex:s}),e.createElement(v.g,{label:"Days of the week",error:l.time_intervals?.[s]?.weekdays?.message??"",invalid:!!l.time_intervals?.[s]?.weekdays},e.createElement(f.I,{...d(`time_intervals.${s}.weekdays`,{validate:u=>W(u,i=>J.includes(i.toLowerCase()),"Invalid day of the week")}),className:t.input,"data-testid":"mute-timing-weekdays",defaultValue:y.weekdays,placeholder:"Example: monday, tuesday:thursday"})),e.createElement(v.g,{label:"Days of the month",description:"The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",invalid:!!l.time_intervals?.[s]?.days_of_month,error:l.time_intervals?.[s]?.days_of_month?.message},e.createElement(f.I,{...d(`time_intervals.${s}.days_of_month`,{validate:u=>W(u,i=>{const m=parseInt(i,10);return m>-31&&m<0||m>0&&m<32},"Invalid day")}),className:t.input,defaultValue:y.days_of_month,placeholder:"Example: 1, 14:16, -1","data-testid":"mute-timing-days"})),e.createElement(v.g,{label:"Months",description:"The months of the year in either numerical or the full calendar month",invalid:!!l.time_intervals?.[s]?.months,error:l.time_intervals?.[s]?.months?.message},e.createElement(f.I,{...d(`time_intervals.${s}.months`,{validate:u=>W(u,i=>X.includes(i)||parseInt(i,10)<13&&parseInt(i,10)>0,"Invalid month")}),className:t.input,placeholder:"Example: 1:3, may:august, december",defaultValue:y.months,"data-testid":"mute-timing-months"})),e.createElement(v.g,{label:"Years",invalid:!!l.time_intervals?.[s]?.years,error:l.time_intervals?.[s]?.years?.message??""},e.createElement(f.I,{...d(`time_intervals.${s}.years`,{validate:u=>W(u,i=>/^\d{4}$/.test(i),"Invalid year")}),className:t.input,placeholder:"Example: 2021:2022, 2030",defaultValue:y.years,"data-testid":"mute-timing-years"})),e.createElement(C.zx,{type:"button",variant:"destructive",icon:"trash-alt",onClick:()=>E(s)},"Remove time interval"))}),e.createElement(C.zx,{type:"button",variant:"secondary",className:t.removeTimeIntervalButton,onClick:()=>{A(B)},icon:"plus"},"Add another time interval")))},ie=t=>({input:n.css`
    width: 400px;
  `,timeIntervalLegend:n.css`
    legend {
      font-size: 1.25rem;
    }
  `,timeIntervalSection:n.css`
    background-color: ${t.colors.background.secondary};
    padding: ${t.spacing(1)};
    margin-bottom: ${t.spacing(1)};
  `,removeTimeIntervalButton:n.css`
    margin-top: ${t.spacing(1)};
  `}),re=t=>(0,e.useMemo)(()=>{const o={name:"",time_intervals:[B]};if(!t)return o;const d=t.time_intervals.map(r=>({times:r.times??B.times,weekdays:r?.weekdays?.join(", ")??B.weekdays,days_of_month:r?.days_of_month?.join(", ")??B.days_of_month,months:r?.months?.join(", ")??B.months,years:r?.years?.join(", ")??B.years}));return{name:t.name,time_intervals:d}},[t]),me={icon:"sitemap",breadcrumbs:[{title:"Notification Policies",url:"alerting/routes"}]},oe=({muteTiming:t,showError:o,provenance:d})=>{const r=(0,N.useDispatch)(),A=(0,b.k)("notification"),[E,y]=(0,O.k)(A),s=(0,R.wW)(le),l={alertmanager_config:{},template_files:{}},u=(0,V._)(D=>D.amConfigs),{result:i=l,loading:m}=E&&u[E]||z.oq,c=i?.alertmanager_config??{},I=re(t),$=(0,M.cI)({defaultValues:I}),Z=D=>{const K=_(D),F=t?c?.mute_time_intervals?.filter(({name:ue})=>ue!==t.name):c.mute_time_intervals,de={...i,alertmanager_config:{...c,route:t&&K.name!==t.name?(0,Y.FM)(K.name,t.name,c.route??{}):c.route,mute_time_intervals:[...F||[],K]}};r((0,j.mM)({newConfig:de,oldConfig:i,alertManagerSourceName:E,successMessage:"Mute timing saved",redirectPath:"/alerting/routes/"}))};return e.createElement(q.J,{pageId:"am-routes",pageNav:{...me,id:t?"alert-policy-edit":"alert-policy-new",text:t?"Edit mute timing":"Add mute timing"}},e.createElement(w.P,{current:E,onChange:y,disabled:!0,dataSources:A}),d&&e.createElement(G.Xq,{resource:G.Uv.MuteTiming}),i&&!m&&e.createElement(M.RV,{...$},e.createElement("form",{onSubmit:$.handleSubmit(Z),"data-testid":"mute-timing-form"},o&&e.createElement(g.b,{title:"No matching mute timing found"}),e.createElement(S.C,{label:"Create mute timing",disabled:Boolean(d)},e.createElement(v.g,{required:!0,label:"Name",description:"A unique name for the mute timing",invalid:!!$.formState.errors?.name,error:$.formState.errors.name?.message},e.createElement(f.I,{...$.register("name",{required:!0,validate:D=>t?D.length>0||"Name is required":c?.mute_time_intervals?.find(({name:F})=>D===F)?`Mute timing already exists for "${D}"`:!0}),className:s.input,"data-testid":"mute-timing-name"})),e.createElement(se,null),e.createElement(C.Qj,{type:"button",variant:"secondary",href:(0,k.eQ)("/alerting/routes/",E)},"Cancel"),e.createElement(C.zx,{type:"submit",className:s.submitButton},t?"Save":"Submit")))))},le=t=>({input:n.css`
    width: 400px;
  `,submitButton:n.css`
    margin-left: ${t.spacing(1)};
  `}),x=oe,ce=()=>{const[t]=(0,P.K)(),o=(0,N.useDispatch)(),d=(0,b.k)("notification"),[r]=(0,O.k)(d),A=(0,V._)(m=>m.amConfigs),E=(0,e.useCallback)(()=>{r&&o((0,j.Yh)(r))},[r,o]);(0,e.useEffect)(()=>{E()},[E]);const{result:y,error:s,loading:l}=r&&A[r]||z.oq,u=y?.alertmanager_config,i=(0,e.useCallback)(m=>{const c=u?.mute_time_intervals?.find(({name:I})=>I===m);if(c){const I=(u?.muteTimeProvenances??{})[c.name];return{...c,provenance:I}}return c},[u]);return e.createElement(e.Fragment,null,l&&e.createElement(p.u,{text:"Loading mute timing"}),s&&!l&&e.createElement(g.b,{severity:"error",title:`Error loading Alertmanager config for ${r}`},s.message||"Unknown error."),y&&!s&&e.createElement(h.rs,null,e.createElement(h.AW,{exact:!0,path:"/alerting/routes/mute-timing/new"},e.createElement(x,null)),e.createElement(h.AW,{exact:!0,path:"/alerting/routes/mute-timing/edit"},()=>{if(t.muteName){const m=i(String(t.muteName)),c=m?.provenance;return e.createElement(x,{muteTiming:m,showError:!m,provenance:c})}return e.createElement(h.l_,{to:"/alerting/routes"})})))}},45524:(U,T,a)=>{a.d(T,{J:()=>p});var e=a(68404),h=a(79396);const p=({children:g,pageId:P,pageNav:N,isLoading:n})=>e.createElement(h.T,{pageNav:N,navId:P},e.createElement(h.T.Contents,{isLoading:n},g))},40106:(U,T,a)=>{a.d(T,{C0:()=>N,Uv:()=>g,Xq:()=>P});var e=a(68404),h=a(45253),p=a(19985),g=(n=>(n.ContactPoint="contact point",n.Template="template",n.MuteTiming="mute timing",n.AlertRule="alert rule",n.RootNotificationPolicy="root notification policy",n))(g||{});const P=({resource:n})=>e.createElement(h.b,{title:`This ${n} cannot be edited through the UI`,severity:"info"},"This ",n," has been provisioned, that means it was created by config. Please contact your server admin to update this ",n,"."),N=()=>e.createElement(p.C,{text:"Provisioned",color:"purple"})},29614:(U,T,a)=>{a.d(T,{k:()=>n});var e=a(68404),h=a(96044),p=a(58379),g=a(37190),P=a(45849);function N(M){return(0,e.useCallback)(R=>M.map(v=>v.name).includes(R),[M])}function n(M){const[R,S]=(0,h.K)(),v=N(M),f=(0,e.useCallback)(b=>{v(b)&&(b===P.GC?(p.Z.delete(g.de),S({[g.c4]:null})):(p.Z.set(g.de,b),S({[g.c4]:b})))},[S,v]),C=R[g.c4];if(C&&typeof C=="string")return v(C)?[C,f]:[void 0,f];const O=p.Z.get(g.de);return O&&typeof O=="string"&&v(O)?(f(O),[O,f]):v(P.GC)?[P.GC,f]:[void 0,f]}},23403:(U,T,a)=>{a.d(T,{k:()=>p});var e=a(68404),h=a(45849);function p(g){return(0,e.useMemo)(()=>(0,h.LE)(g),[g])}}}]);

//# sourceMappingURL=MuteTimings.8a07206290df89605d81.js.map