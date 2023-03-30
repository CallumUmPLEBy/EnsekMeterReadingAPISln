"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1715],{21048:(H,B,n)=>{n.d(B,{L:()=>M});var e=n(52423),O=n(68404),L=n(72648);const M=({children:S,wrap:v,className:h})=>{const a=(0,L.l4)(),p=C(a,v);return O.createElement("div",{className:(0,e.cx)(p.container,h)},S)},C=(S,v)=>({container:e.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${v?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${S.spacing()};
      margin-right: ${S.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `})},18152:(H,B,n)=>{n.d(B,{a:()=>S,k:()=>M});var e=n(32504),O=n(73736),L=n(74673);const M=v=>{if(!v?.queries?.length)return!1;const h=v.queries[0].datasource;return v.queries.some(a=>a.datasource?.uid!==h?.uid||a.datasource?.type!==h?.type)},C=(0,e.LC)({reducerPath:"savedQueries",baseQuery:(0,O.ni)({baseUrl:"/"}),endpoints:v=>({getSavedQueryByUids:v.query({async queryFn(h,a,p,I){return{data:await(0,L.o)().getSavedQueries(h)}}}),deleteSavedQuery:v.mutation({async queryFn(h){return await(0,L.o)().deleteSavedQuery(h),{data:null}}}),updateSavedQuery:v.mutation({async queryFn(h){return await(0,L.o)().updateSavedQuery(h.query,h.opts),{data:null}}})})}),{useUpdateSavedQueryMutation:S}=C},74673:(H,B,n)=>{n.d(B,{o:()=>M});var e=n(29930);class O{constructor(){this.getSavedQueries=async S=>{if(!S.length)return[];const v=S.map(h=>`uid=${h.uid}`).join("&");return(0,e.i)().get(`/api/query-library?${v}`)},this.deleteSavedQuery=async S=>(0,e.i)().delete(`/api/query-library?uid=${S.uid}`),this.updateSavedQuery=async(S,v)=>(0,e.i)().post("/api/query-library",S)}}const L=new O,M=()=>L},72108:(H,B,n)=>{n.r(B),n.d(B,{default:()=>_e});var e=n(68404),O=n(35645),L=n(45253),M=n(72142),C=n(79841),S=n(94893),v=n(79396),h=n(76770),a=n(52423),p=n(72648),I=n(78966),N=n(22350),T=n(89050),x=n(52081),W=n(14747),F=n(5191),D=n(31403),Y=n(64823);function q(t){return I.css`
    .filter-table {
      border-collapse: separate;
      border-spacing: 0 5px;

      tbody {
        tr:nth-child(odd) {
          background: ${t.colors.background.secondary};
        }

        tr {
          background: ${t.colors.background.secondary};
        }
      }

      &--hover {
        tbody tr:hover {
          background: ${t.colors.background.primary};
        }
      }
    }
  `}var $=n(82897),J=n(81850),Z=n(68183),R=n(86647),X=n(53217),K=n(51613);const le=t=>{const{alerting:l,tracing:u,metrics:o,mixed:i,dashboard:d,variables:r,annotations:s,pluginId:m,type:g,filter:y,logs:E}=t;return(0,$.uniqBy)((0,R.F)().getList({alerting:l,tracing:u,metrics:o,logs:E,dashboard:d,mixed:i,variables:r,annotations:s,pluginId:m,filter:y,type:g}).map(b=>b.type==="datasource"?{value:b.type,label:b.type,imgUrl:b.meta.info.logos.small,meta:b.meta}:{value:b.type,label:b.type,imgUrl:b.meta.info.logos.small,meta:b.meta}),b=>b.value)},oe=t=>{const{autoFocus:l,onBlur:u,onChange:o,current:i,openMenuOnFocus:d,placeholder:r,width:s,inputId:m}=t,g=le(t);return e.createElement("div",{"aria-label":Z.wl.components.DataSourcePicker.container},e.createElement(X.Ph,{"aria-label":Z.wl.components.DataSourcePicker.inputV2,inputId:m||"data-source-picker",className:"ds-picker select-container",isMulti:!1,isClearable:!0,backspaceRemovesValue:!0,options:g,autoFocus:l,onBlur:u,width:s,value:i,onChange:y=>{o(y?.value??null)},openMenuOnFocus:d,maxMenuHeight:500,placeholder:r??"Select datasource type",noOptionsMessage:"No datasources found",getOptionLabel:y=>y.meta&&(0,J.x)(y.meta.signature)?e.createElement(x.Lh,{align:"center",justify:"space-between"},e.createElement("span",null,y.label)," ",e.createElement(K.o,{status:y.meta.signature})):y.label||""}))};var _=n(30979),Q=n(72948),U=n(39904);const ce=()=>{const t=(0,p.wW)(ie);return e.createElement("div",{className:t.wrap},e.createElement("p",{className:t.tabDescription},"No history."))},ie=t=>({wrap:a.css`
      padding: 20px 5px 5px 5px;
    `,tabDescription:a.css`
      color: ${t.colors.text.secondary};
    `});var ue=n(49922),de=n(69311),me=n(40400),pe=n(53117),ge=n(84457),te=n(99822),ye=n(47471),Ee=n(22790),ee=n(18152);const he={refId:"A",datasource:{type:"datasource",uid:"grafana"},queryType:"measurements"},k=()=>{alert("Implementation coming soon!")},ve=({savedQuery:t,onSavedQueryChange:l})=>{const u=(0,p.wW)(fe),[o,i]=(0,e.useState)(t.queries??[he]),d=(0,ee.k)(t)?{uid:"-- Mixed --",type:"datasource"}:o[0].datasource,[r,s]=(0,e.useState)((0,R.F)().getInstanceSettings(d)),m={state:ue.Gu.NotStarted,series:[],timeRange:(0,de.JK)()},g=c=>{i(c),l({...t,queries:c})},y=async c=>{const w=await(0,R.F)().get(c.uid),A=r?await(0,R.F)().get(r.uid):void 0,f=await(0,Ee.I)(w,w.uid,o,A);g(f),s(c)},E=async()=>{const c=r?.meta.mixed?await(0,R.F)().get():await(0,R.F)().get(r.uid);return{...c?.getDefaultQuery?.(me.zj.PanelEditor),datasource:{uid:c?.uid,type:c?.type}}},b=async()=>{const c=await E();g((0,te.DI)(o,c))},P=()=>{const c=ye.mV.newQuery();g((0,te.DI)(o,c))};return e.createElement("div",null,e.createElement(x.Lh,null,e.createElement("div",{className:u.dataSourceHeader},"Data source"),e.createElement("div",{className:u.dataSourcePickerWrapper},e.createElement(pe.q,{onChange:y,current:r,metrics:!0,mixed:!0,dashboard:!0,variables:!0}))),e.createElement(ge.l,{queries:o,dsSettings:r,onQueriesChange:g,onAddQuery:b,onRunQueries:()=>{},data:m}),e.createElement(x.Lh,{spacing:"md",align:"flex-start"},e.createElement(D.zx,{disabled:!1,icon:"plus",onClick:b,variant:"secondary","aria-label":Z.wl.components.QueryTab.addQuery},"Query"),(r?.meta.alerting||r?.meta.mixed)&&e.createElement(D.zx,{icon:"plus",onClick:P,variant:"secondary",className:u.expressionButton},e.createElement("span",null,"Expression\xA0"))))},fe=t=>({dataSourceHeader:a.css`
      font-size: ${t.typography.size.sm};
      margin-top: 5px;
      margin-bottom: 20px;
    `,dataSourcePickerWrapper:a.css`
      margin-top: 5px;
      margin-bottom: 20px;
    `,expressionButton:a.css`
      margin-right: ${t.spacing(2)};
    `});var xe=n(16964),ae=n(60499),G=n(74673),be=n(46967),Se=n(57227);const Ce=({name:t,onChange:l,editingEnabled:u})=>{const o=(0,p.wW)(Qe),[i,d]=(0,e.useState)(!1),[r,s]=(0,e.useState)(null),m=c=>{d(!0)},g=c=>{if(d(!1),r){s(null);return}t!==c&&l(c)},y=c=>{if(c.currentTarget.value.trim().length===0){s("An empty name is not allowed");return}r&&s(null)},E=c=>{g(c.currentTarget.value.trim())},b=c=>{c.target.select()},P=c=>{if(c.key==="Enter"){if(!(c.target instanceof HTMLInputElement))return;g(c.target.value)}};return e.createElement(e.Fragment,null,e.createElement("div",{className:o.wrapper},!i&&e.createElement(x.Lh,null,e.createElement("h2",{className:o.h2Style},t),u&&e.createElement(U.J,{name:"pen",className:o.nameEditIcon,size:"md",onClick:m})),i&&e.createElement(e.Fragment,null,e.createElement(be.I,{type:"text",defaultValue:t,onBlur:E,onFocus:b,autoFocus:!0,onKeyDown:P,invalid:r!==null,onChange:y,className:o.nameInput}),r&&e.createElement(Se.S,{horizontal:!0},r))))},Qe=t=>({wrapper:a.css`
      display: flex;
      align-items: center;
      margin-left: ${t.v1.spacing.xs};
    `,nameEditIcon:a.css`
      cursor: pointer;
      color: ${t.colors.text.secondary};
      width: 12px;
      height: 12px;
    `,nameInput:a.css`
      max-width: 300px;
      margin: -8px 0;
    `,h2Style:a.css`
      margin-bottom: 0;
    `}),we=({savedQuery:t,onDismiss:l,onSavedQueryChange:u,options:o})=>{const i=(0,ae.iG)(),d=(0,p.wW)(De),r=(0,e.useRef)(null),[s,m]=(0,e.useState)(t.title),[g,y]=(0,e.useState)(!1),E=!Boolean(t?.uid?.length);(0,e.useEffect)(()=>{const A=f=>{r.current!==f.target&&y(!1)};document.addEventListener("mousedown",A)},[r]);const b=async()=>{await(0,G.o)().deleteSavedQuery({uid:t.uid}),l()},P=[{label:"Add to dashboard",value:"dashboard-panel",icon:"apps"},{label:"Create alert rule",value:"alert-rule",icon:"bell"},{label:"View in explore",value:"explore",icon:"compass"},{label:"Create recorded query",value:"recorded-query",icon:"record-audio"},{label:"Create SLO",value:"slo",icon:"crosshair"},{label:"Add to incident in Grafana OnCall",value:"incident-oncall",icon:"record-audio",src:"public/app/features/query-library/img/grafana_incident.svg"},{label:"Create incident in Grafana Incident",value:"incident-grafana",icon:"heart-break",src:"public/app/features/query-library/img/grafana_oncall.svg"},{label:"Create forecast in Grafana ML",value:"grafana-ml",icon:"grafana-ml",src:"public/app/features/query-library/img/grafana_ml.svg"}],c=A=>{m(A),u({...t,title:A})},w=async A=>{await(0,G.o)().updateSavedQuery(t,A).then(()=>i.success("Query updated")).catch(f=>{const z=f.data?.message||f;i.warning(z)}),l()};return e.createElement(e.Fragment,null,e.createElement("div",{className:d.header},e.createElement(x.Lh,{justify:"space-between"},e.createElement(Ce,{name:s,onChange:c,editingEnabled:E}),e.createElement(x.Lh,null,e.createElement(D.zx,{icon:"times",size:"md",variant:"secondary",onClick:l,autoFocus:!1},"Close"),e.createElement(D.zx,{icon:"grafana",variant:"secondary",size:"md",onClick:()=>{y(!g)}},"Use query"),e.createElement(D.zx,{icon:"sync",size:"md",variant:"secondary",onClick:k},"Run"),e.createElement(D.zx,{icon:"lock",size:"md",variant:"secondary",onClick:k}),e.createElement(D.zx,{size:"md",variant:"primary",onClick:()=>w(o)},"Save"),e.createElement(D.zx,{icon:"trash-alt",size:"md",variant:"destructive",onClick:()=>b()}))),e.createElement(x.Lh,null,g&&e.createElement("div",{className:"panel-menu-container dropdown open",style:{height:0},ref:r,onClick:()=>{y(!1)}},e.createElement("ul",{className:(0,a.cx)("dropdown-menu dropdown-menu--menu panel-menu",d.dropdown)},P.map((A,f)=>e.createElement("li",{key:f},e.createElement("a",{onClick:k},e.createElement("div",null,A.src?e.createElement(xe.V,{src:A.src,className:d.optionSvg}):e.createElement(U.J,{name:A.icon,className:d.menuIconClassName})),e.createElement("span",{className:"dropdown-item-text"},A.label),e.createElement("span",{className:"dropdown-menu-item-shortcut"})))))))))},De=t=>({cascaderButton:a.css`
      height: 24px;
    `,header:a.css`
      padding-top: 5px;
      padding-bottom: 15px;
    `,menuIconClassName:a.css`
      margin-right: ${t.v1.spacing.sm};
      a::after {
        display: none;
      }
    `,optionSvg:a.css`
      margin-right: 8px;
      width: 16px;
      height: 16px;
    `,dropdown:a.css`
      left: 609px;
      top: 2px;
    `});var Ie=n(67487),Ne=n(21048);const Te=({savedQuery:t})=>{const l=(0,p.wW)(Ae),u=(0,e.useMemo)(()=>({query:"*",kind:t.uid?["dashboard","alert"]:["newQuery"],saved_query_uid:t.uid}),[t.uid]),o=(0,N.Z)(async()=>(await(0,Y.getGrafanaSearcher)().search(u)).view.map(s=>({uid:s.uid,title:s.name,url:s.url,uri:s.url,type:s.kind,id:321,tags:s.tags??[],ds_uid:s.ds_uid,location:s.location,panel_type:s.panel_type})),[u]);if(o.loading)return e.createElement(Ie.$,null);const i=o.value,d=r=>{let s="question-circle";switch(r){case"dashboard":s="apps";break;case"folder":s="folder";break;case"alert":s="bell";break;default:s="question-circle";break}return s};return i?.length===0?e.createElement("div",{className:l.wrap},e.createElement("p",{className:l.usagesDescription},"This query is not used anywhere.")):e.createElement("div",{className:l.wrap},e.createElement("p",{className:l.usagesDescription},"This query is used in the places below. Modifying will affect all its usages."),i?.map(r=>e.createElement("div",{key:r.uid},e.createElement(Q.Z,null,e.createElement(Q.Z.Heading,null,e.createElement("span",{className:l.cardHeading},r.title,e.createElement("a",{href:r.url,title:"Open in new tab",target:"_blank",rel:"noopener noreferrer",className:l.externalLink},e.createElement(U.J,{name:"external-link-alt",className:l.cardHeadingIcon})))),e.createElement(Q.Z.Description,null,e.createElement("a",{href:"dashboards",target:"_blank",rel:"noopener noreferrer",className:l.externalLink},e.createElement(U.J,{name:"folder",className:l.cardDescriptionIcon})),r.location),e.createElement(Q.Z.Figure,{className:l.cardFigure},e.createElement(U.J,{name:d(r.type)})),e.createElement(Q.Z.Tags,null,e.createElement(Ne.L,null,e.createElement(D.zx,{icon:"eye",size:"sm",variant:"secondary"}),e.createElement(D.zx,{icon:"link",size:"sm",variant:"secondary"},"Unlink")))))))},Ae=t=>({wrap:a.css`
      padding: 20px 5px 5px 5px;
    `,info:a.css`
      padding-bottom: 30px;
    `,folderIcon:a.css`
      margin-right: 5px;
    `,cardFigure:a.css`
      margin-right: 0;
      margin-top: 15px;
    `,externalLink:a.css`
      margin-left: 5px;
    `,cardHeading:a.css`
      display: flex;
    `,cardHeadingIcon:a.css`
      width: 13px;
      height: 13px;
      color: ${t.colors.text.secondary};
      display: flex;
      align-self: center;
    `,usagesDescription:a.css`
      color: ${t.colors.text.secondary};
    `,cardDescriptionIcon:a.css`
      width: 16px;
      height: 16px;
      color: ${t.colors.text.secondary};
      margin-right: 5px;
    `});var ne=n(93022);const Le=({savedQuery:t,options:l})=>{const u=(0,p.wW)(Oe),[o]=(0,ee.a)(),i=(m,g)=>{const y=t.variables.map(E=>(E.name===m.name&&(E.name=g),E));o({query:{...t,variables:y},opts:l})},d=(m,g)=>{const y=t.variables.map(E=>(E.name===m.name&&(E.current.value=g),E));o({query:{...t,variables:y},opts:l})},r=()=>{t.variables.unshift({name:"New variable",current:{value:"General"}}),o({query:t,opts:l})},s=m=>{const g=t.variables.map((y,E)=>{if(y.name===m.name)return E});typeof g=="number"&&(t.variables.splice(g,1),o({query:t,opts:l}))};return e.createElement("div",{className:u.tabWrapper},e.createElement("div",{className:u.variablesHeader},e.createElement(x.Lh,{width:"100%",justify:"space-between",spacing:"md",height:25},e.createElement("div",{className:u.tabDescription},"Variables enable more interactive and dynamic queries. Instead of hard-coding things like server or sensor names in your metric queries you can use variables in their place. ",e.createElement("br",null),e.createElement("b",null,"Variable support is coming soon!")),e.createElement(D.zx,{icon:"plus",size:"md",className:u.addVariableButton,onClick:r},"Add variable"))),e.createElement("div",{className:u.variableList},e.createElement("ul",null,t&&t.variables&&t.variables.map(m=>e.createElement("li",{key:m&&m.name,className:u.variableListItem},e.createElement(Q.Z,null,e.createElement(Q.Z.Heading,null,e.createElement(ne.X,{name:m&&m.name,onChange:g=>i(m,g),overrideStyles:!0})),e.createElement(Q.Z.Description,null,e.createElement(ne.X,{name:m&&m.current.value.toString(),onChange:g=>d(m,g),overrideStyles:!0})),e.createElement(Q.Z.Tags,null,e.createElement(D.zx,{icon:"trash-alt",size:"sm",variant:"secondary",tooltip:"Delete this variable",onClick:()=>s(m)},"Delete"))))))))},Oe=t=>({tabWrapper:a.css`
      flex: 1;
      padding: 20px 5px 5px 5px;
    `,tabDescription:a.css`
      color: ${t.colors.text.secondary};
    `,variableList:a.css`
      padding-bottom: 20px;
    `,variableListItem:a.css`
      list-style: none;
    `,addVariableButton:a.css`
      display: flex;
      align-self: center;
      margin: auto;
      margin-bottom: 15px;
    `,variablesHeader:a.css`
      margin-top: 15px;
      margin-bottom: 20px;
    `}),Me=[{label:"Usages",active:!0,icon:"link"},{label:"Variables",active:!1,icon:"info-circle"},{label:"History",active:!1,icon:"history"}],re=t=>{const{onDismiss:l,options:u}=t,o=(0,p.wW)(Pe),[i,d]=(0,e.useState)(Me),[r,s]=(0,e.useState)(t.savedQuery);return e.createElement(_.d,{onClose:l,width:"1000px",expandable:!0,scrollableContent:!0},e.createElement("div",null,e.createElement(we,{options:u,onSavedQueryChange:s,savedQuery:r,onDismiss:l}),e.createElement("div",{className:o.queryWrapper},e.createElement(ve,{onSavedQueryChange:s,savedQuery:r})),e.createElement(M.J,null,i.map((m,g)=>e.createElement(C.O,{key:g,label:m.label,active:m.active,icon:m.icon,onChangeTab:()=>d(i.map((y,E)=>({...y,active:E===g})))}))),e.createElement(S.I,null,e.createElement("div",{className:o.tabWrapper},i[0].active&&e.createElement(Te,{savedQuery:r}),i[1].active&&e.createElement(Le,{savedQuery:r,options:u}),i[2].active&&e.createElement(ce,null)))))},Pe=t=>({queryWrapper:a.css`
      max-height: calc(60vh);
      overflow-y: scroll;
      margin-bottom: 50px;
    `,tabWrapper:a.css`
      overflow-y: scroll;
      max-height: calc(27vh);
    `});var Be=n(30784),We=n(9405);const ze={val:{title:"ds-variables",tags:[],description:"example description",schemaVersion:1,time:{from:"now-6h",to:"now"},variables:[{name:"var1",type:"text",current:{value:"hello world"}}],queries:[{channel:"plugin/testdata/random-flakey-stream",datasource:{type:"datasource",uid:"grafana"},filter:{fields:["Time","Value"]},queryType:"measurements",refId:"A",search:{query:""}},{alias:"my-alias",datasource:{type:"testdata",uid:"PD8C576611E62080A"},drop:11,hide:!1,max:1e3,min:10,noise:5,refId:"B",scenarioId:"random_walk",startValue:10}]}},Fe=({onDismiss:t,updateComponent:l,options:u})=>{const o=(0,p.wW)(Re),[i]=(0,ee.a)(),[d,r]=(0,e.useState)(ze);return e.createElement(e.Fragment,null,e.createElement(We.p,{containerStyles:o.editor,width:"80%",height:"70vh",language:"json",showLineNumbers:!1,showMiniMap:!0,value:JSON.stringify(d.val,null,2),onBlur:s=>r(()=>({val:JSON.parse(s)})),onSave:s=>r(()=>({val:JSON.parse(s)})),readOnly:!1}),e.createElement(D.zx,{type:"submit",className:o.submitButton,onClick:async()=>{await i({query:d.val,opts:u}),t(),l?.()}},"Save query"))},Re=t=>({editor:a.css``,submitButton:a.css`
      align-self: flex-end;
      margin-bottom: 25px;
      margin-top: 25px;
    `}),Ue=({onDismiss:t,options:l})=>{const u=(0,p.wW)(ke),[o,i]=(0,e.useState)(void 0);return e.createElement(_.d,{title:"Import query",onClose:t,width:"1000px",expandable:!0,scrollableContent:!0},e.createElement(Be.Yo,{readAs:"readAsBinaryString",onFileRemove:()=>{i(void 0)},options:{accept:".json",multiple:!1,onDrop:d=>{i(d[0])}}},e.createElement("div",null,"Drag and drop here or browse")),Boolean(o)&&e.createElement("div",{className:u.queryPreview},e.createElement(Fe,{options:l,onDismiss:t})))},ke=t=>({queryPreview:a.css`
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 170px;
    `}),Ve=({onDismiss:t,updateComponent:l})=>{const u=(0,p.wW)(Ze),o="create-new",i=()=>{t(),l()};return e.createElement(_.d,{title:"Add new query",subtitle:"You can create a new query from builder or import from file",onClose:t,width:"1000px",expandable:!0,scrollableContent:!0},e.createElement("div",null,e.createElement(Q.Z,null,e.createElement(Q.Z.Heading,null,"Create by query builder"),e.createElement(Q.Z.Description,null),e.createElement(Q.Z.Figure,null,e.createElement(U.J,{name:"list-ui-alt",className:u.cardIcon})),e.createElement(Q.Z.Tags,null,e.createElement(F.JY,null,({showModal:d,hideModal:r})=>e.createElement(D.zx,{icon:"plus",size:"md",onClick:()=>{d(re,{onDismiss:i,options:{type:o},savedQuery:{title:"New Query",variables:[],queries:[{refId:"A",datasource:{type:"datasource",uid:"grafana"},queryType:"randomWalk"}]}})}},"Create query")))),e.createElement(Q.Z,null,e.createElement(Q.Z.Heading,null,"Import from file"),e.createElement(Q.Z.Description,null,"Supported formats: JSON"),e.createElement(Q.Z.Figure,null,e.createElement(U.J,{name:"import",className:u.cardIcon})),e.createElement(Q.Z.Tags,null,e.createElement(F.JY,null,({showModal:d,hideModal:r})=>e.createElement(D.zx,{icon:"arrow-right",size:"md",onClick:()=>{d(Ue,{onDismiss:i,options:{type:o}})}},"Next"))))))},Ze=t=>({cardIcon:a.css`
      width: 30px;
      height: 30px;
    `});var $e=n(61860),Je=n(19985),j=n(8180);const He={type:"edit"},se=(0,e.memo)(({query:t,showModal:l,hideModal:u,updateComponent:o,author:i,date:d})=>{const r=(0,ae.iG)(),s=(0,p.wW)(Ke),[m,g]=(0,e.useState)([]);(0,e.useEffect)(()=>{(async()=>{const z=(0,$.uniq)(t?.ds_uid??[]);g((await Promise.all(z.map(V=>(0,R.F)().get(V)))).filter(Boolean))})()},[t.ds_uid]);const y=()=>{u(),o()},E=async()=>{const z=(await(0,G.o)().getSavedQueries([{uid:t.uid}]))[0];l(re,{onDismiss:y,savedQuery:z,options:He})},b=async()=>{await(0,G.o)().deleteSavedQuery({uid:t.uid}),o()},P=()=>{const f=m?.length>1?"mixed":m?.[0]?.type??"datasource";return c(f)},c=f=>f.charAt(0).toUpperCase()+f.slice(1),w=()=>e.createElement("div",null,e.createElement("ul",{className:s.dsTooltipList},m.map((f,z)=>e.createElement("li",{key:z},e.createElement("img",{className:s.dsTooltipIcon,src:f?.meta?.info.logos.small,alt:"datasource"}),"\xA0",c(f.type))))),A=async()=>{const f=await(0,G.o)().getSavedQueries([{uid:t.uid}]);if(!f?.length){k();return}await navigator.clipboard.writeText(JSON.stringify({...f[0],uid:void 0,storageOptions:void 0},null,2)),r.success("Query JSON copied to clipboard!")};return e.createElement("tr",{key:t.uid,className:s.row},e.createElement("td",{onClick:k},e.createElement(U.J,{name:"lock",className:s.disabled,title:"Implementation coming soon!"})),e.createElement("td",null,e.createElement(Je.C,{color:"green",text:"1",icon:"link",tooltip:"Implementation coming soon!"})),e.createElement("td",{onClick:E},t.title),e.createElement("td",{onClick:E},e.createElement("img",{className:s.dsIcon,src:P()==="Mixed"?"public/img/icn-datasource.svg":m[0]?.meta?.info.logos.small,alt:"datasource",style:{width:"16px",height:"16px"}}),"\xA0\xA0",P(),"\xA0",P()==="Mixed"&&e.createElement($e.u,{content:w()},e.createElement(U.J,{name:"question-circle",className:s.infoIcon}))),e.createElement("td",{onClick:E},e.createElement("img",{className:(0,a.cx)("filter-table__avatar",s.dsIcon),src:"/avatar/46d229b033af06a191ff2267bca9ae56",alt:`Avatar for ${i}`}),"\xA0\xA0",i),e.createElement("td",{onClick:E},d),e.createElement("td",{className:s.tableTr},e.createElement(j.h,{name:"share-alt",tooltip:"Share",onClick:k}),e.createElement(j.h,{name:"copy",tooltip:"Copy",onClick:A}),e.createElement(j.h,{name:"upload",tooltip:"Upload",onClick:k}),e.createElement(j.h,{name:"cog",tooltip:"Settings",onClick:k}),e.createElement(j.h,{name:"trash-alt",tooltip:"Delete",onClick:b})))});se.displayName="QueryListItem";const Ke=t=>({row:a.css`
      height: 70px;
      cursor: pointer;
    `,tableTr:a.css`
      display: flex;
      justify-content: space-between;
      margin-top: 22px;
    `,disabled:a.css`
      color: ${t.colors.text.secondary};
    `,gitIcon:a.css`
      width: 30px;
      height: 30px;
      margin-left: 10px;
      margin-top: 1px;
      opacity: 0.8;
    `,infoIcon:a.css`
      margin-top: -2px;
    `,dsTooltipIcon:a.css`
      width: 11px;
      height: 11px;
    `,dsIcon:a.css`
      width: 16px !important;
      height: 16px !important;
    `,dsTooltipList:a.css`
      list-style-type: none;
    `}),Ge=()=>{const t=(0,p.wW)(je),[l,u]=(0,e.useState)(null),[o,i]=(0,e.useState)(""),[d,r]=(0,e.useState)(0),s=(0,p.l4)(),m=q(s),g=["Artur Wierzbicki","Drew Slobodnjak","Nathan Marrs","Raphael Batyrbaev","Adela Almasan"],y=["August 17, 2022, 2:32pm","August 17, 2022, 4:10pm","August 18, 2022, 1:00am","August 18, 2022, 12:00pm","August 19, 2022, 2:33pm"],E=(0,e.useMemo)(()=>{const c={query:"*",sort:"name_sort",explain:!0,kind:["query"]};return l?.length&&(c.ds_type=l),o&&(c.query=o),c},[l,o]);(0,e.useEffect)(()=>{},[d]);const P=(0,N.Z)(async()=>(await(0,Y.getGrafanaSearcher)().search(E)).view.map(w=>({uid:w.uid,title:w.name,url:w.url,uri:w.url,type:w.kind,id:123,tags:w.tags??[],ds_uid:w.ds_uid})),[E,d]).value;return e.createElement(e.Fragment,null,e.createElement(I.Global,{styles:m}),e.createElement("div",{className:t.tableWrapper},e.createElement(x.Lh,{width:"100%",justify:"space-between",spacing:"md",height:25},e.createElement(x.Lh,null,e.createElement(W.H,{placeholder:"Search queries by name, source, or variable",autoFocus:!0,value:o,onChange:i,width:50,className:t.searchBy}),"Filter by datasource type",e.createElement(oe,{current:l,onChange:c=>{u(()=>c)}})),e.createElement(F.JY,null,({showModal:c,hideModal:w})=>e.createElement("div",{className:t.createQueryButton},e.createElement(D.zx,{icon:"plus",size:"md",onClick:()=>{c(Ve,{onDismiss:w,updateComponent:()=>{r(d+1)}})}},"Create query")))),e.createElement(F.JY,null,({showModal:c,hideModal:w})=>e.createElement(T.Z,{className:t.autosizer,style:{width:"100%",height:"100%"}},({width:A,height:f})=>e.createElement("table",{className:(0,a.cx)("filter-table form-inline filter-table--hover",t.table)},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"Status"),e.createElement("th",null,"Name and raw query"),e.createElement("th",null,"Data Source"),e.createElement("th",null,"User"),e.createElement("th",null,"Date"),e.createElement("th",null))),e.createElement("tbody",null,!Boolean(P?.length)&&e.createElement("tr",{className:t.transparentBg},e.createElement("td",null),e.createElement("td",null),e.createElement("td",null),e.createElement("td",null,e.createElement("div",{className:t.noData},"No data")),e.createElement("td",null),e.createElement("td",null),e.createElement("th",null)),Boolean(P?.length)&&P.map((z,V)=>e.createElement(se,{query:z,key:z.uid,showModal:c,hideModal:w,updateComponent:()=>r(d+1),author:V<g.length?g[V]:g[V-g.length],date:V<y.length?y[V]:y[V-y.length]}))))))))},je=t=>({tableWrapper:a.css`
      height: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `,autosizer:a.css`
      margin-top: 40px;
    `,createQueryButton:a.css`
      text-align: center;
    `,filtersGroup:a.css`
      padding-top: 10px;
      margin-top: 30px;
    `,searchBy:a.css`
      margin-right: 15px;
    `,table:a.css`
      font-size: 14px;
      &tbody {
        &tr: {
          background: ${t.colors.background.secondary};
        }
      }
    `,noData:a.css`
      color: ${t.colors.text.secondary};
    `,transparentBg:a.css`
      background: transparent !important;
    `}),Ye=()=>{const t=(0,p.wW)(qe);return e.createElement("div",{className:t.tableWrapper},e.createElement(Ge,null))},qe=t=>({tableWrapper:a.css`
      height: 100%;
    `}),Xe=[{label:"Queries",active:!0}],_e=()=>{const t=(0,h.q)("query"),[l,u]=(0,e.useState)(Xe);return O.v.featureToggles.panelTitleSearch?e.createElement(v.T,{navModel:t},e.createElement(v.T.Contents,null,e.createElement(M.J,null,l.map((o,i)=>e.createElement(C.O,{key:i,label:o.label,active:o.active,onChangeTab:()=>u(l.map((d,r)=>({...d,active:r===i})))}))),e.createElement(S.I,null,l[0].active&&e.createElement(Ye,null)))):e.createElement(L.b,{title:"Missing feature toggle: panelTitleSearch"},"Query library requires searchV2")}},84457:(H,B,n)=>{n.d(B,{l:()=>S});var e=n(68404),O=n(19677),L=n(41818),M=n(86647),C=n(36584);class S extends e.PureComponent{constructor(){super(...arguments),this.onRemoveQuery=a=>{this.props.onQueriesChange(this.props.queries.filter(p=>p!==a))},this.onDragStart=a=>{const{queries:p,dsSettings:I}=this.props;(0,L.ff)("query_row_reorder_started",{startIndex:a.source.index,numberOfQueries:p.length,datasourceType:I.type})},this.onDragEnd=a=>{const{queries:p,onQueriesChange:I,dsSettings:N}=this.props;if(!a||!a.destination)return;const T=a.source.index,x=a.destination.index;if(T===x){(0,L.ff)("query_row_reorder_canceled",{startIndex:T,endIndex:x,numberOfQueries:p.length,datasourceType:N.type});return}const W=Array.from(p),[F]=W.splice(T,1);W.splice(x,0,F),I(W),(0,L.ff)("query_row_reorder_ended",{startIndex:T,endIndex:x,numberOfQueries:p.length,datasourceType:N.type})}}onChangeQuery(a,p){const{queries:I,onQueriesChange:N}=this.props;N(I.map((T,x)=>x===p?a:T))}onDataSourceChange(a,p){const{queries:I,onQueriesChange:N}=this.props;N(I.map((T,x)=>{if(x!==p)return T;const W={type:a.type,uid:a.uid};return T.datasource&&(0,M.F)().getInstanceSettings(T.datasource)?.type===a.type?{...T,datasource:W}:{refId:T.refId,hide:T.hide,datasource:W}}))}render(){const{dsSettings:a,data:p,queries:I,app:N,history:T,eventBus:x,onAddQuery:W,onRunQueries:F,onQueryCopied:D,onQueryRemoved:Y,onQueryToggled:q}=this.props;return e.createElement(O.Z5,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd},e.createElement(O.bK,{droppableId:"transformations-list",direction:"vertical"},$=>e.createElement("div",{ref:$.innerRef,...$.droppableProps},I.map((J,Z)=>{const R=v(J,a),X=a.meta.mixed?K=>this.onDataSourceChange(K,Z):void 0;return e.createElement(C.x,{id:J.refId,index:Z,key:J.refId,data:p,query:J,dataSource:R,onChangeDataSource:X,onChange:K=>this.onChangeQuery(K,Z),onRemoveQuery:this.onRemoveQuery,onAddQuery:W,onRunQuery:F,onQueryCopied:D,onQueryRemoved:Y,onQueryToggled:q,queries:I,app:N,history:T,eventBus:x})}),$.placeholder)))}}const v=(h,a)=>h.datasource&&(0,M.F)().getInstanceSettings(h.datasource)||a},22790:(H,B,n)=>{n.d(B,{I:()=>M});var e=n(40400),O=n(62163),L=n(22069);async function M(C,S,v,h){let a=v;const p={type:C.type,uid:S},I={...C?.getDefaultQuery?.(e.zj.PanelEditor),datasource:p,refId:"A"};if(h?.meta.id!==C.meta.id){if(C.meta.mixed)return v;if((0,O.p)(h)&&(0,O.CZ)(C)){const N=await h.exportToAbstractQueries(v);a=await C.importFromAbstractQueries(N)}else if(h&&C.importQueries)a=await C.importQueries(v,h);else return[I]}return a.length===0?[I]:a.map(N=>(!(0,L.Pr)(N.datasource)&&!C.meta.mixed&&(N.datasource=p),N))}}}]);

//# sourceMappingURL=QueryLibraryPage.c499d1a29900f73d3f58.js.map