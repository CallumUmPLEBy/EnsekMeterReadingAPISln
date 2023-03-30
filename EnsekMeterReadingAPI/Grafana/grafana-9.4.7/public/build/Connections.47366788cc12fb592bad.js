"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5981],{55887:(w,T,t)=>{t.d(T,{e:()=>e});var e=(n=>(n.OpenSource="Open Source",n.Pro="Pro",n.Enterprise="Enterprise",n))(e||{})},78014:(w,T,t)=>{t.d(T,{Z:()=>c});var e=t(68404),n=t(14747),x=t(31403),b=t(79979);class c extends e.PureComponent{render(){const{searchQuery:g,linkButton:s,setSearchQuery:W,target:y,placeholder:D="Search by name or type",sortPicker:E}=this.props,I={href:s?.href,disabled:s?.disabled};return y&&(I.target=y),e.createElement("div",{className:"page-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(n.H,{value:g,onChange:W,placeholder:D})),E&&e.createElement(b.P,{onChange:E.onChange,value:E.value,getSortOptions:E.getSortOptions}),s&&e.createElement(x.Qj,{...I},s.title))}}},50713:(w,T,t)=>{t.r(T),t.d(T,{default:()=>te});var e=t(68404),n=t(70356),x=t(31953),b=t(25e3),c=t(81168),o=t(86475),g=t(79396),s=t(52423),W=t(24699),y=t(72648),D=t(61744),E=t(77582),I=t(74509),j=t(72948);const V=a=>({sourcesList:s.css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 12px;
    list-style: none;
    margin-bottom: 80px;
  `,card:s.css`
    height: 90px;
    padding: 0px 24px;
    margin-bottom: 0;
  `,cardContent:s.css`
    display: flex;
    align-items: center;
  `,logoWrapper:s.css`
    display: flex;
    justify-content: center;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    img {
      max-width: 100%;
      max-height: 100%;
      align-self: center;
    }
  `,label:s.css`
    color: ${a.colors.text.primary};
    margin-bottom: 0;
  `}),Q=({items:a,onClickItem:h})=>{const v=(0,y.wW)(V);return e.createElement("ul",{className:v.sourcesList},a.map(S=>e.createElement(j.Z,{key:S.id,className:v.card,href:S.url,onClick:O=>{h&&h(O,S)}},e.createElement(j.Z.Heading,null,e.createElement("div",{className:v.cardContent},S.logo&&e.createElement("div",{className:v.logoWrapper},e.createElement("img",{src:S.logo,alt:`logo of ${S.name}`})),e.createElement("h4",{className:v.label},S.name))))))};var m=t(39904);const R=a=>({categoryHeader:s.css`
    align-items: center;
    display: flex;
    margin-bottom: 24px;
  `,categoryLabel:s.css`
    margin-bottom: 0px;
    margin-left: 8px;
  `}),X=({iconName:a,label:h})=>{const v=(0,y.wW)(R);return e.createElement("div",{className:v.categoryHeader},e.createElement(m.J,{name:a,size:"xl"}),e.createElement("h3",{className:v.categoryLabel},h))};var J=t(35029),K=t(31403);const M=a=>({modal:s.css`
    width: 500px;
  `,modalContent:s.css`
    overflow: visible;
    color: ${a.colors.text.secondary};

    a {
      color: ${a.colors.text.link};
    }
  `,description:s.css`
    margin-bottom: ${a.spacing(2)};
  `,bottomSection:s.css`
    display: flex;
    border-top: 1px solid ${a.colors.border.weak};
    padding-top: ${a.spacing(3)};
    margin-top: ${a.spacing(3)};
  `,actionsSection:s.css`
    display: flex;
    justify-content: end;
    margin-top: ${a.spacing(3)};
  `,warningIcon:s.css`
    color: ${a.colors.warning.main};
    padding-right: ${a.spacing()};
    margin-top: ${a.spacing(.25)};
  `,header:s.css`
    display: flex;
    align-items: center;
  `,headerTitle:s.css`
    margin: 0;
  `,headerLogo:s.css`
    margin-right: ${a.spacing(2)};
    width: 32px;
    height: 32px;
  `});function B({item:a,isOpen:h,onDismiss:v}){const S=(0,y.wW)(M);return e.createElement(J.u,{className:S.modal,contentClassName:S.modalContent,title:e.createElement(H,{item:a}),isOpen:h,onDismiss:v},e.createElement("div",null,e.createElement("div",null,a.description&&e.createElement("div",{className:S.description},a.description),e.createElement("div",null,"Links",e.createElement("br",null),e.createElement("a",{href:`https://grafana.com/grafana/plugins/${a.id}`,title:`${a.name} on Grafana.com`,target:"_blank",rel:"noopener noreferrer"},a.name))),e.createElement("div",{className:S.bottomSection},e.createElement("div",{className:S.warningIcon},e.createElement(m.J,{name:"exclamation-triangle"})),e.createElement("div",null,e.createElement("p",null,"Editors cannot add new connections. You may check to see if it is already configured in"," ",e.createElement("a",{href:"/connections/your-connections"},"Your Connections"),"."),e.createElement("p",null,"To add a new connection, contact your Grafana admin."))),e.createElement("div",{className:S.actionsSection},e.createElement(K.zx,{onClick:v},"Okay"))))}function H({item:a}){const h=(0,y.wW)(M);return e.createElement("div",null,e.createElement("div",{className:h.header},a.logo&&e.createElement("img",{className:h.headerLogo,src:a.logo,alt:`logo of ${a.name}`}),e.createElement("h4",{className:h.headerTitle},a.name)))}const z=()=>({noResults:s.css`
    text-align: center;
    padding: 50px 0;
    font-style: italic;
  `}),i=()=>{const a=(0,y.wW)(z);return e.createElement("p",{className:a.noResults},"No results matching your query were found.")};var p=t(46967);const d=a=>({searchContainer:s.css`
    display: flex;
    margin: 16px 0;
    justify-content: space-between;

    position: sticky;
    top: 0;
    background-color: ${a.colors.background.primary};
    z-index: 2;
    padding: ${a.spacing(2)};
    margin: 0 -${a.spacing(2)};
  `}),P=({onChange:a})=>{const h=(0,y.wW)(d);return e.createElement("div",{className:h.searchContainer},e.createElement(p.I,{onChange:a,prefix:e.createElement(m.J,{name:"search"}),placeholder:"Search all","aria-label":"Search all"}))},f=()=>({spacer:s.css`
    height: 16px;
  `,modal:s.css`
    width: 500px;
  `,modalContent:s.css`
    overflow: visible;
  `});function N(){const[a,h]=(0,e.useState)(""),[v,S]=(0,e.useState)(!1),[O,Y]=(0,e.useState)(null),q=(0,y.wW)(f),ae=E.Vt.hasPermission(c.AccessControlAction.DataSourcesCreate),ue=F=>{h(F.currentTarget.value.toLowerCase())},{isLoading:ne,error:G,plugins:_}=(0,I.GE)({query:a,filterBy:"",filterByType:W.zV.datasource}),me=(0,e.useMemo)(()=>_.map(F=>({id:F.id,name:F.name,description:F.description,logo:F.info.logos.small,url:o.Z.DataSourcesDetails.replace(":id",F.id)})),[_]),ge=(F,fe)=>{ae||(F.preventDefault(),F.stopPropagation(),oe(fe))},oe=F=>{S(!0),Y(F)},pe=()=>{S(!1),Y(null)},Ee=(0,e.useMemo)(()=>!ne&&!G&&_.length<1,[ne,G,_]);return e.createElement(e.Fragment,null,O&&e.createElement(B,{item:O,isOpen:v,onDismiss:pe}),e.createElement(P,{onChange:ue}),e.createElement("div",{className:q.spacer}),e.createElement(X,{iconName:"database",label:"Data sources"}),ne?e.createElement(D.u,{text:"Loading..."}):G?e.createElement("p",null,"Error: ",G.message):e.createElement(Q,{items:me,onClickItem:ge}),Ee&&e.createElement(i,null))}function A(){return e.createElement(g.T,{navId:"connections-connect-data"},e.createElement(g.T.Contents,null,e.createElement(N,null)))}var Z=t(45253),se=t(19985),re=t(43795);function le(){const a="standalone-plugin-page-/connections/connect-data",{id:h}=(0,n.UO)(),v=(0,c.useSelector)(Y=>Y.navIndex),O=Boolean(v[a])?a:"connections-connect-data";return e.createElement(re.Q,{pluginId:h,navId:O,notFoundComponent:e.createElement(ce,null),notFoundNavModel:{text:"Unknown datasource",subTitle:"No datasource with this ID could be found.",active:!0}})}function ce(){const{id:a}=(0,n.UO)();return e.createElement(Z.b,{severity:c.AppNotificationSeverity.Warning,title:""},"Maybe you mistyped the URL or the plugin with the id ",e.createElement(se.C,{text:a,color:"orange"})," is unavailable.",e.createElement("br",null),"To see a list of available datasources please ",e.createElement("a",{href:o.Z.ConnectData},"click here"),".")}var ie=t(35645),de=t(19703),r=t(81955);function l(){const a=ie.v.featureToggles.topnav?e.createElement(de.G,null):void 0;return e.createElement(g.T,{navId:"connections-your-connections-datasources",actions:a},e.createElement(g.T.Contents,null,e.createElement(r.c,null)))}var u=t(81960),C=t(56090);function L(){const{uid:a}=(0,n.UO)(),{navId:h,pageNav:v}=(0,C.M)("dashboards");return e.createElement(g.T,{navId:h,pageNav:v},e.createElement(g.T.Contents,null,e.createElement(u.Z,{uid:a})))}var U=t(77632);function $(){const{uid:a}=(0,n.UO)(),h=(0,n.TH)(),S=new URLSearchParams(h.search).get("page"),{navId:O,pageNav:Y}=(0,C.M)();return e.createElement(g.T,{navId:O,pageNav:Y},e.createElement(g.T.Contents,null,e.createElement(U.H,{uid:a,pageId:S})))}var k=t(86218);function ee(){return e.createElement(g.T,{navId:"connections-your-connections-datasources",pageNav:{text:"Add data source",subTitle:"Choose a data source type",active:!0}},e.createElement(g.T.Contents,null,e.createElement(k.x,null)))}function te(){const a=(0,c.useSelector)(v=>v.navIndex),h=Boolean(a["standalone-plugin-page-/connections/connect-data"]);return e.createElement(b.Vj.Provider,{value:{New:o.Z.DataSourcesNew,List:o.Z.DataSources,Edit:o.Z.DataSourcesEdit,Dashboards:o.Z.DataSourcesDashboards}},e.createElement(n.rs,null,e.createElement(n.AW,{exact:!0,path:o.Z.Base,component:()=>e.createElement(n.l_,{to:o.Z.ConnectData})}),e.createElement(n.AW,{exact:!0,path:o.Z.YourConnections,component:()=>e.createElement(x.G,{navId:"connections-your-connections"})}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSources,component:l}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSourcesDetails,component:le}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSourcesNew,component:ee}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSourcesEdit,component:$}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSourcesDashboards,component:L}),!h&&e.createElement(n.AW,{path:o.Z.ConnectData,component:A}),e.createElement(n.AW,{component:l})))}},19703:(w,T,t)=>{t.d(T,{G:()=>g});var e=t(68404),n=t(35645),x=t(31403),b=t(77582),c=t(81168),o=t(25e3);function g(){const s=b.Vt.hasPermission(c.AccessControlAction.DataSourcesCreate),W=(0,o.d7)();return s?e.createElement(x.Qj,{icon:"plus",href:n.v.appSubUrl+W.New},"Add new data source"):null}},81960:(w,T,t)=>{t.d(T,{Z:()=>s});var e=t(68404),n=t(2555),x=t(86977),b=t(85805),c=t(81168),o=t(27786),g=t(25e3);function s({uid:y}){(0,g.wi)(y);const D=(0,c.useDispatch)(),E=(0,c.useSelector)(m=>m.dataSources.dataSource),I=(0,c.useSelector)(m=>m.plugins.dashboards),j=(0,c.useSelector)(m=>m.plugins.isLoadingPluginDashboards);(0,e.useEffect)(()=>{E.id>0&&D((0,b.m3)())},[D,E]);const V=(m,R)=>{D((0,x.$j)({pluginId:m.pluginId,path:m.path,overwrite:R,inputs:[{name:"*",type:"datasource",pluginId:E.type,value:E.name}]},m.title))},Q=({uid:m})=>{D((0,x.fG)(m))};return e.createElement(W,{dashboards:I,isLoading:j,onImportDashboard:V,onRemoveDashboard:Q})}const W=({isLoading:y,dashboards:D,onImportDashboard:E,onRemoveDashboard:I})=>y?e.createElement(n.Z,null):e.createElement(o.Z,{dashboards:D,onImport:E,onRemove:I})},81955:(w,T,t)=>{t.d(T,{c:()=>X});var e=t(52423),n=t(68404),x=t(35645),b=t(72648),c=t(72948),o=t(34719),g=t(31403),s=t(69142),W=t(2555),y=t(77582),D=t(81168),E=t(25e3),I=t(85597),j=t(78014);const V="alpha-asc",Q="alpha-desc",m=[{label:"Sort by A\u2013Z",value:V},{label:"Sort by Z\u2013A",value:Q}];function R(){const M=(0,D.useDispatch)(),B=(0,n.useCallback)(A=>M((0,E.zT)(A)),[M]),H=(0,D.useSelector)(({dataSources:A})=>(0,E.IO)(A)),z=y.Vt.hasPermission(D.AccessControlAction.DataSourcesCreate),i=(0,E.d7)(),d=!x.v.featureToggles.topnav&&z?{href:i.New,title:"Add new data source"}:void 0,P=(0,n.useCallback)(A=>M((0,E.Nu)(A.value===V)),[M]),f=(0,D.useSelector)(({dataSources:A})=>(0,E.IA)(A)),N={onChange:P,value:f?V:Q,getSortOptions:()=>Promise.resolve(m)};return n.createElement(j.Z,{searchQuery:H,setSearchQuery:B,key:"action-bar",sortPicker:N,linkButton:d})}function X(){const{isLoading:M}=(0,E.zJ)(),B=(0,D.useSelector)(d=>(0,E.mt)(d.dataSources)),H=(0,D.useSelector)(({dataSources:d})=>(0,E.r7)(d)),z=y.Vt.hasPermission(D.AccessControlAction.DataSourcesCreate),i=y.Vt.hasPermission(D.AccessControlAction.DataSourcesWrite),p=y.Vt.hasPermission(D.AccessControlAction.DataSourcesExplore);return n.createElement(J,{dataSources:B,dataSourcesCount:H,isLoading:M,hasCreateRights:z,hasWriteRights:i,hasExploreRights:p})}function J({dataSources:M,dataSourcesCount:B,isLoading:H,hasCreateRights:z,hasWriteRights:i,hasExploreRights:p}){const d=(0,b.wW)(K),P=(0,E.d7)();return H?n.createElement(W.Z,null):B===0?n.createElement(s.Z,{buttonDisabled:!z,title:"No data sources defined",buttonIcon:"database",buttonLink:P.New,buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"}):n.createElement(n.Fragment,null,n.createElement(R,null),n.createElement("ul",{className:d.list},M.map(f=>{const N=x.v.appSubUrl+P.Edit.replace(/:uid/gi,f.uid);return n.createElement("li",{key:f.uid},n.createElement(c.Z,{href:i?N:void 0},n.createElement(c.Z.Heading,null,f.name),n.createElement(c.Z.Figure,null,n.createElement("img",{src:f.typeLogoUrl,alt:"",height:"40px",width:"40px",className:d.logo})),n.createElement(c.Z.Meta,null,[f.typeName,f.url,f.isDefault&&n.createElement(o.V,{key:"default-tag",name:"default",colorIndex:1})]),n.createElement(c.Z.Tags,null,n.createElement(g.Qj,{icon:"apps",fill:"outline",variant:"secondary",href:`dashboard/new-with-ds/${f.uid}`},"Build a dashboard"),p&&n.createElement(g.Qj,{icon:"compass",fill:"outline",variant:"secondary",className:d.button,href:(0,I.iU)(f)},"Explore"))))})))}const K=M=>({list:(0,e.css)({listStyle:"none",display:"grid"}),logo:(0,e.css)({objectFit:"contain"}),button:(0,e.css)({marginLeft:M.spacing(2)})})},77632:(w,T,t)=>{t.d(T,{H:()=>ie});var e=t(68404),n=t(94929),x=t(86647),b=t(2555),c=t(81168),o=t(25e3),g=t(52423),s=t(68183),W=t(81764),y=t(46967),D=t(8944),E=t(72648),I=t(19985);function j({dataSourceName:r,isDefault:l,onDefaultChange:u,onNameChange:C,alertingSupported:L,disabled:U}){return e.createElement(e.Fragment,null,e.createElement(V,{enabled:L}),e.createElement("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings"},e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form max-width-30"},e.createElement(W._,{label:"Name",tooltip:`The name is used when you select the data source in panels. The default data source is
              'preselected in new panels.`,grow:!0,disabled:U},e.createElement(y.I,{id:"basic-settings-name",type:"text",value:r,placeholder:"Name",onChange:$=>C($.currentTarget.value),required:!0,"aria-label":s.wl.pages.DataSource.name}))),e.createElement(W._,{label:"Default",labelWidth:8,disabled:U},e.createElement(D.x,{id:"basic-settings-default",value:l,onChange:$=>{u($.currentTarget.checked)}})))))}function V({enabled:r}){const l=(0,E.wW)(Q);return e.createElement("div",{className:l.badge},r?e.createElement(I.C,{color:"green",icon:"check-circle",text:"Alerting supported"}):e.createElement(I.C,{color:"orange",icon:"exclamation-triangle",text:"Alerting not supported"}))}const Q=r=>({badge:g.css`
    margin-bottom: ${r.spacing(2)};
  `});var m=t(31403),R=t(77582);function X({canSave:r,canDelete:l,onDelete:u,onSubmit:C,onTest:L,exploreUrl:U}){const $=R.Vt.hasPermission(c.AccessControlAction.DataSourcesExplore);return e.createElement("div",{className:"gf-form-button-row"},e.createElement(m.zx,{variant:"secondary",fill:"solid",type:"button",onClick:()=>history.back()},"Back"),e.createElement(m.Qj,{variant:"secondary",fill:"solid",href:U,disabled:!$},"Explore"),e.createElement(m.zx,{type:"button",variant:"destructive",disabled:!l,onClick:u,"aria-label":s.wl.pages.DataSource.delete},"Delete"),r&&e.createElement(m.zx,{type:"submit",variant:"primary",disabled:!r,onClick:k=>C(k),"aria-label":s.wl.pages.DataSource.saveAndTest},"Save & test"),!r&&e.createElement(m.zx,{variant:"primary",onClick:L},"Test"))}var J=t(55887),K=t(45253),M=t(59796),B=t(47694);const H="datasources.settings.cloudInfoBox.isDismissed";function z({dataSource:r}){let l="",u="";if(r.readOnly||(r.version??0)>2||B.vc.buildInfo.edition!==J.e.OpenSource)return null;switch(r.type){case"prometheus":l="Prometheus",u="Loki";break;case"loki":l="Loki",u="Prometheus";break;default:return null}return e.createElement(M.G,{storageKey:H,defaultValue:!1},(C,L)=>C?null:e.createElement(K.b,{title:`Configure your ${l} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{L(!0)}},"Or skip the effort and get ",l," (and ",u,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",e.createElement("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${r.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage."},"free-forever Grafana Cloud plan"),"."))}const i="This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source.";function p(){return e.createElement(K.b,{"aria-label":s.wl.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source"},i)}function d({dataSourceRights:r,onDelete:l}){const{readOnly:u,hasDeleteRights:C}=r,L=!u&&C,U=()=>history.back();return e.createElement(e.Fragment,null,u&&e.createElement(p,null),e.createElement("div",{className:"gf-form-button-row"},L&&e.createElement(m.zx,{type:"submit",variant:"destructive",onClick:l},"Delete"),e.createElement(m.zx,{variant:"secondary",fill:"outline",type:"button",onClick:U},"Back")))}const P="You are not allowed to modify this data source. Please contact your server admin to update this data source.";function f(){return e.createElement(K.b,{severity:"info",title:"Missing rights"},P)}function N({plugin:r,pageId:l}){if(!r||!r.configPages)return null;const u=r.configPages.find(({id:C})=>C===l);return u?e.createElement(u.body,{plugin:r,query:{}}):e.createElement("div",null,"Page not found: ",u)}var A=t(82897),Z=t(11484);class se extends e.PureComponent{constructor(l){super(l),this.element=null,this.onModelChanged=u=>{this.props.onModelChange(u)},this.scopeProps={ctrl:{datasourceMeta:l.dataSourceMeta,current:(0,A.cloneDeep)(l.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:l}=this.props;if(this.element&&!l.components.ConfigEditor){const u=(0,Z.w)(),C='<plugin-component type="datasource-config-ctrl" />';this.component=u.load(this.element,this.scopeProps,C)}}componentDidUpdate(l){const{plugin:u}=this.props;!u.components.ConfigEditor&&this.props.dataSource!==l.dataSource&&(this.scopeProps.ctrl.current=(0,A.cloneDeep)(this.props.dataSource),this.component?.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:l,dataSource:u}=this.props;return l?e.createElement("div",{ref:C=>this.element=C},l.components.ConfigEditor&&e.createElement(l.components.ConfigEditor,{options:u,onOptionsChange:this.onModelChanged})):null}}var re=t(81731);function le({state:r}){return e.createElement("div",{className:"gf-form"},e.createElement("div",{className:"gf-form-label width-10"},"Plugin state"),e.createElement("div",{className:"gf-form-label gf-form-label--transparent"},e.createElement(re.u,{state:r})))}function ce({testingStatus:r}){const l=r?.status==="error",u=r?.message,C=r?.details?.message,L=r?.details?.verboseMessage;return u?e.createElement("div",{className:"gf-form-group p-t-2"},e.createElement(K.b,{severity:l?"error":"success",title:u,"aria-label":s.wl.pages.DataSource.alert},r?.details&&e.createElement(e.Fragment,null,C,L?e.createElement("details",{style:{whiteSpace:"pre-wrap"}},L):null))):null}function ie({uid:r,pageId:l}){(0,o.E)(r);const u=(0,c.useDispatch)(),C=(0,o.wl)(r),L=(0,o.Qs)(C.type),U=(0,o._l)(),$=(0,o.YY)(r),k=(0,o.Rz)(r),ee=(0,o.q6)(),te=(0,o.hw)(r),a=(0,o.qj)(),h=O=>u((0,o.yr)(O)),v=O=>u((0,o.BX)(O)),S=O=>u((0,o.rl)(O));return e.createElement(de,{pageId:l,dataSource:C,dataSourceMeta:L,dataSourceSettings:U,dataSourceRights:$,exploreUrl:k,onDelete:ee,onDefaultChange:h,onNameChange:v,onOptionsChange:S,onTest:te,onUpdate:a})}function de({pageId:r,dataSource:l,dataSourceMeta:u,dataSourceSettings:C,dataSourceRights:L,exploreUrl:U,onDelete:$,onDefaultChange:k,onNameChange:ee,onOptionsChange:te,onTest:a,onUpdate:h}){const{plugin:v,loadError:S,testingStatus:O,loading:Y}=C,{readOnly:q,hasWriteRights:ae,hasDeleteRights:ue}=L,ne=l.id>0,G=(0,x.F)()?.getInstanceSettings(l.uid),_=Boolean(G?.meta?.alerting??!1),me=G?.type==="alertmanager",ge=_||me,oe=async pe=>{pe.preventDefault(),await h({...l}),a()};return S?e.createElement(d,{dataSourceRights:L,onDelete:$}):Y?e.createElement(b.Z,null):!ne||!G?null:r?e.createElement(n.n,{instanceSettings:G},e.createElement(N,{pageId:r,plugin:v})):e.createElement("form",{onSubmit:oe},!ae&&e.createElement(f,null),q&&e.createElement(p,null),u.state&&e.createElement(le,{state:u.state}),e.createElement(z,{dataSource:l}),e.createElement(j,{dataSourceName:l.name,isDefault:l.isDefault,onDefaultChange:k,onNameChange:ee,alertingSupported:ge,disabled:q||!ae}),v&&e.createElement(n.n,{instanceSettings:G},e.createElement(se,{plugin:v,dataSource:l,dataSourceMeta:u,onModelChange:te})),e.createElement(ce,{testingStatus:O}),e.createElement(X,{onSubmit:oe,onDelete:$,onTest:a,exploreUrl:U,canSave:!q&&ae,canDelete:!q&&ue}))}},86218:(w,T,t)=>{t.d(T,{x:()=>H});var e=t(68404),n=t(14747),x=t(31403),b=t(2555),c=t(52423),o=t(24699),g=t(68183),s=t(72648),W=t(17784),y=t(56766),D=t(52081),E=t(51613),I=t(74509);function j(){const i=(0,I.UQ)(),{isLoading:p}=(0,I.ZV)(),d=(0,s.wW)(Q);return p||i.length===0?null:e.createElement(W.v,{"aria-label":g.wl.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/"},e.createElement("div",null,e.createElement("p",null,"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."),"The following plugins are disabled and not shown in the list below:",e.createElement(y.a,{items:i,className:d.list,renderItem:P=>e.createElement("div",{className:d.wrapper},e.createElement(D.Lh,{spacing:"sm",justify:"flex-start",align:"center"},e.createElement("strong",null,P.pluginId),e.createElement(E.o,{status:V(P.errorCode),className:d.badge})))})))}function V(i){switch(i){case o.w2.invalidSignature:return o.Xy.invalid;case o.w2.missingSignature:return o.Xy.missing;case o.w2.modifiedSignature:return o.Xy.modified;default:return o.Xy.missing}}function Q(i){return{list:(0,c.css)({listStyleType:"circle"}),wrapper:(0,c.css)({marginTop:i.spacing(1)}),badge:(0,c.css)({marginTop:0})}}var m=t(81168),R=t(72948);function X({onClick:i,dataSourcePlugin:p}){const d=p.module==="phantom",P=!d&&!p.unlicensed,f=p.info?.links?.length>0?p.info.links[0]:null,N=(0,s.wW)(J);return e.createElement(R.Z,{className:(0,c.cx)(N.card,"card-parent"),onClick:P?i:()=>{}},e.createElement(R.Z.Heading,{className:N.heading,"aria-label":g.wl.pages.AddDataSource.dataSourcePluginsV2(p.name)},p.name),e.createElement(R.Z.Figure,{align:"center",className:N.figure},e.createElement("img",{className:N.logo,src:p.info.logos.small,alt:""})),e.createElement(R.Z.Description,{className:N.description},p.info.description),!d&&e.createElement(R.Z.Meta,{className:N.meta},e.createElement(E.o,{status:p.signature})),e.createElement(R.Z.Actions,{className:N.actions},f&&e.createElement(x.Qj,{"aria-label":`${p.name}, learn more.`,href:`${f.url}?utm_source=grafana_add_ds`,icon:"external-link-alt",onClick:A=>A.stopPropagation(),rel:"noopener",target:"_blank",variant:"secondary"},f.name)))}function J(i){return{heading:(0,c.css)({fontSize:i.v1.typography.heading.h5,fontWeight:"inherit"}),figure:(0,c.css)({width:"inherit",marginRight:"0px","> img":{width:i.spacing(7)}}),meta:(0,c.css)({marginTop:"6px",position:"relative"}),description:(0,c.css)({margin:"0px",fontSize:i.typography.size.sm}),actions:(0,c.css)({position:"relative",alignSelf:"center",marginTop:"0px",opacity:0,".card-parent:hover &, .card-parent:focus-within &":{opacity:1}}),card:(0,c.css)({gridTemplateAreas:`
        "Figure   Heading   Actions"
        "Figure Description Actions"
        "Figure    Meta     Actions"
        "Figure     -       Actions"`}),logo:(0,c.css)({marginRight:i.v1.spacing.lg,marginLeft:i.v1.spacing.sm,width:i.spacing(7),maxHeight:i.spacing(7)})}}function K({dataSourcePlugins:i,onClickDataSourceType:p}){return!i||!i.length?null:e.createElement(y.a,{items:i,getItemKey:d=>d.id.toString(),renderItem:d=>e.createElement(X,{dataSourcePlugin:d,onClick:()=>p(d)}),className:c.css`
        > li {
          margin-bottom: 2px;
        }
      `})}function M({categories:i,onClickDataSourceType:p}){return e.createElement(e.Fragment,null,i.map(({id:d,title:P,plugins:f})=>e.createElement("div",{className:"add-data-source-category",key:d},e.createElement("div",{className:"add-data-source-category__header",id:d},P),e.createElement(K,{dataSourcePlugins:f,onClickDataSourceType:p}))),e.createElement("div",{className:"add-data-source-more"},e.createElement(x.Qj,{variant:"secondary",href:"https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",target:"_blank",rel:"noopener"},"Find more data source plugins on grafana.com")))}var B=t(25e3);function H(){(0,B.OU)();const i=(0,m.useDispatch)(),p=(0,m.useSelector)(Z=>(0,B.I5)(Z.dataSources)),d=(0,m.useSelector)(Z=>Z.dataSources.dataSourceTypeSearchQuery),P=(0,m.useSelector)(Z=>Z.dataSources.isLoadingDataSourcePlugins),f=(0,m.useSelector)(Z=>Z.dataSources.categories),N=(0,B.nH)(),A=Z=>i((0,B.Ht)(Z));return e.createElement(z,{dataSources:p,dataSourceCategories:f,searchQuery:d,isLoading:P,onAddDataSource:N,onSetSearchQuery:A})}function z({dataSources:i,dataSourceCategories:p,searchQuery:d,isLoading:P,onAddDataSource:f,onSetSearchQuery:N}){const A=(0,B.d7)();return P?e.createElement(b.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"page-action-bar"},e.createElement(n.H,{value:d,onChange:N,placeholder:"Filter by name or type"}),e.createElement("div",{className:"page-action-bar__spacer"}),e.createElement(x.Qj,{href:A.List,fill:"outline",variant:"secondary",icon:"arrow-left"},"Cancel")),!d&&e.createElement(j,null),e.createElement("div",null,d&&e.createElement(K,{dataSourcePlugins:i,onClickDataSourceType:f}),!d&&e.createElement(M,{categories:p,onClickDataSourceType:f})))}},81731:(w,T,t)=>{t.d(T,{u:()=>b});var e=t(68404),n=t(24699),x=t(19985);const b=o=>{const g=c(o.state);return g?e.createElement(x.C,{color:g.color,title:g.tooltip,text:g.text,icon:g.icon}):null};function c(o){switch(o){case n.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case n.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case n.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}}}]);

//# sourceMappingURL=Connections.47366788cc12fb592bad.js.map