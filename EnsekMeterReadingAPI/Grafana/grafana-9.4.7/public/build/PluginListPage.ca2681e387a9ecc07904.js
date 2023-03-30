"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{43137:(T,y,t)=>{t.d(y,{l:()=>h,S:()=>m});var n=t(52423),e=t(68404),g=t(72648),f=t(45253),E=t(31403),c=t(86475);const i=d=>({alertContent:n.css`
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    align-items: center;
  `,alertParagraph:n.css`
    margin: 0 ${d.spacing(1)} 0 0;
    line-height: ${d.spacing(d.components.height.sm)};
    color: ${d.colors.text.primary};
  `});var m=(d=>(d.dataSources="dataSources",d.connectData="connectData",d))(m||{});const v={dataSources:c.Z.DataSources,connectData:c.Z.ConnectData};function h({destinationPage:d}){const S=(0,g.wW)(i);return e.createElement(f.b,{severity:"warning",title:""},e.createElement("div",{className:S.alertContent},e.createElement("p",{className:S.alertParagraph},"Data sources have a new home! You can discover new data sources or manage existing ones in the new Connections page, accessible from the lefthand nav."),e.createElement(E.Qj,{"aria-label":"Link to Connections",icon:"adjust-circle",href:v[d]},"See data sources in Connections")))}},75260:(T,y,t)=>{t.d(y,{SX:()=>f,IF:()=>L,oZ:()=>v,xh:()=>A});var n=t(68404),e=t(24699),g=t(19985);function f({error:s}){const B=E(s);return n.createElement(g.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:B})}function E(s){switch(s){case e.w2.modifiedSignature:return"Plugin disabled due to modified content";case e.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case e.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${s?`: ${s}`:""}`}}var c=t(72648),i=t(52423);const m=s=>i.css`
  background: ${s.colors.background.primary};
  border-color: ${s.colors.border.strong};
  color: ${s.colors.text.secondary};
`;function v(){const s=(0,c.wW)(m);return n.createElement(g.C,{text:"Installed",color:"orange",className:s})}var h=t(66121),d=t(52081),S=t(51613),N=t(31403);function L({plugin:s}){const B=(0,c.wW)(m),P=I=>{I.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${s.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")};return(0,h.v)("enterprise.plugins")?n.createElement(g.C,{text:"Enterprise",color:"blue"}):n.createElement(d.Lh,null,n.createElement(S.o,{status:s.signature}),n.createElement(g.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:B}),n.createElement(N.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:P},"Learn more"))}function A({plugin:s}){const B=(0,c.wW)($);return s.hasUpdate&&!s.isCore&&s.type!==e.zV.renderer?n.createElement("p",{className:B.hasUpdate},"Update available!"):null}const $=s=>({hasUpdate:i.css`
      color: ${s.colors.text.secondary};
      font-size: ${s.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},21048:(T,y,t)=>{t.d(y,{L:()=>f});var n=t(52423),e=t(68404),g=t(72648);const f=({children:c,wrap:i,className:m})=>{const v=(0,g.l4)(),h=E(v,i);return e.createElement("div",{className:(0,n.cx)(h.container,m)},c)},E=(c,i)=>({container:n.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${i?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${c.spacing()};
      margin-right: ${c.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `})},21701:(T,y,t)=>{t.r(y),t.d(y,{default:()=>ee});var n=t(52423),e=t(68404),g=t(70356),f=t(37932),E=t(35645),c=t(72648),i=t(24799),m=t(53217),v=t(2594),h=t(61860),d=t(61744),S=t(79396),N=t(86245),L=t(43137),A=t(81168),$=t(21048),s=t(48996),B=t(39904),P=t(52081),I=t(51613),x=t(75260);function H({plugin:a}){return a.isEnterprise?e.createElement(P.Lh,{height:"auto",wrap:!0},e.createElement(x.IF,{plugin:a}),a.isDisabled&&e.createElement(x.SX,{error:a.error}),e.createElement(x.xh,{plugin:a})):e.createElement(P.Lh,{height:"auto",wrap:!0},e.createElement(I.o,{status:a.signature}),a.isDisabled&&e.createElement(x.SX,{error:a.error}),a.isInstalled&&e.createElement(x.oZ,null),e.createElement(x.xh,{plugin:a}))}function j({alt:a,className:u,src:o,height:l}){return e.createElement("img",{src:o,className:u,alt:a,loading:"lazy",height:l})}const R="48px";function w({plugin:a,pathName:u,displayMode:o=s.lL.Grid}){const l=(0,c.wW)(K),r=o===s.lL.List;return e.createElement("a",{href:`${u}/${a.id}`,className:(0,n.cx)(l.container,{[l.list]:r})},e.createElement(j,{src:a.info.logos.small,className:l.pluginLogo,height:R,alt:""}),e.createElement("h2",{className:(0,n.cx)(l.name,"plugin-name")},a.name),e.createElement("div",{className:(0,n.cx)(l.content,"plugin-content")},e.createElement("p",null,"By ",a.orgName),e.createElement(H,{plugin:a})),e.createElement("div",{className:l.pluginType},a.type&&e.createElement(B.J,{name:s.Co[a.type],title:`${a.type} plugin`})))}const K=a=>({container:n.css`
      display: grid;
      grid-template-columns: ${R} 1fr ${a.spacing(3)};
      grid-template-rows: auto;
      gap: ${a.spacing(2)};
      grid-auto-flow: row;
      background: ${a.colors.background.secondary};
      border-radius: ${a.shape.borderRadius()};
      padding: ${a.spacing(3)};
      transition: ${a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short})};

      &:hover {
        background: ${a.colors.emphasize(a.colors.background.secondary,.03)};
      }
    `,list:n.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${a.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:n.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${a.colors.text.secondary};
    `,pluginLogo:n.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:n.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${a.colors.text.secondary};
    `,name:n.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${a.typography.h4.fontSize};
      color: ${a.colors.text.primary};
      margin: 0;
    `}),X=({plugins:a,displayMode:u})=>{const o=u===s.lL.List,l=(0,c.wW)(Q),{pathname:r}=(0,g.TH)(),z=E.v.appSubUrl+(r.endsWith("/")?r.slice(0,-1):r);return e.createElement("div",{className:(0,n.cx)(l.container,{[l.list]:o}),"data-testid":"plugin-list"},a.map(C=>e.createElement(w,{key:C.id,plugin:C,pathName:z,displayMode:u})))},Q=a=>({container:n.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${a.spacing(3)};
    `,list:n.css`
      grid-template-columns: 1fr;
    `});var V=t(70197),Y=t(14747);const J=(a,u=0,o=[])=>{const l=(0,e.useRef)(!0),r=[...o,l];return(0,V.Z)(()=>{if(l.current){l.current=!1;return}return a()},u,r)},k=({value:a,onSearch:u})=>{const[o,l]=(0,e.useState)(a);return J(()=>u(o??""),500,[o]),e.createElement(Y.H,{value:o,onKeyDown:r=>{(r.key==="Enter"||r.keyCode===13)&&u(r.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:r=>{l(r)},width:46})};var q=t(59210);const _=()=>({push:({query:a})=>{f.E1.partial(a)}});var W=t(74509);function ee({route:a}){const u=(0,g.TH)(),o=(0,f.Ox)(u.search),l=(0,A.useSelector)(p=>(0,N.ht)(p.navIndex,"plugins")),{displayMode:r,setDisplayMode:z}=(0,W.iY)(),C=(0,c.wW)(te),b=_(),ae=(0,W.y9)(),F=o.q||"",O=o.filterBy||"installed",D=o.filterByType||"all",G=o.sortBy||q.Nh.nameAsc,{isLoading:ne,error:M,plugins:se}=(0,W.GE)({query:F,filterBy:O,filterByType:D,sortBy:G}),U=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],le=p=>{b.push({query:{sortBy:p.value}})},Z=p=>{b.push({query:{filterBy:p}})},oe=p=>{b.push({query:{filterByType:p.value}})},re=p=>{b.push({query:{filterBy:"all",filterByType:"all",q:p}})};return M?(console.error(M.message),null):e.createElement(S.T,{navModel:l},e.createElement(S.T.Contents,null,E.v.featureToggles.dataConnectionsConsole&&(D==="all"||D==="datasource")&&e.createElement(L.l,{destinationPage:L.S.connectData}),e.createElement($.L,{wrap:!0},e.createElement(i.g,{label:"Search"},e.createElement(k,{value:F,onSearch:re})),e.createElement($.L,{wrap:!0,className:C.actionBar},e.createElement(i.g,{label:"Type"},e.createElement(m.Ph,{"aria-label":"Plugin type filter",value:D,onChange:oe,width:18,options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})),ae?e.createElement(i.g,{label:"State"},e.createElement(v.S,{value:O,onChange:Z,options:U})):e.createElement(h.u,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top"},e.createElement("div",null,e.createElement(i.g,{label:"State"},e.createElement(v.S,{disabled:!0,value:O,onChange:Z,options:U})))),e.createElement(i.g,{label:"Sort"},e.createElement(m.Ph,{"aria-label":"Sort Plugins List",width:24,value:G,onChange:le,options:[{value:"nameAsc",label:"By name (A-Z)"},{value:"nameDesc",label:"By name (Z-A)"},{value:"updated",label:"By updated date"},{value:"published",label:"By published date"},{value:"downloads",label:"By downloads"}]})),e.createElement(i.g,{label:"View"},e.createElement(v.S,{className:C.displayAs,value:r,onChange:z,options:[{value:s.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:s.lL.List,icon:"list-ul",description:"Display plugins in list"}]})))),e.createElement("div",{className:C.listWrap},ne?e.createElement(d.u,{className:n.css`
                margin-bottom: 0;
              `,text:"Loading results"}):e.createElement(X,{plugins:se,displayMode:r}))))}const te=a=>({actionBar:n.css`
    ${a.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:n.css`
    margin-top: ${a.spacing(2)};
  `,displayAs:n.css`
    svg {
      margin-right: 0;
    }
  `})}}]);

//# sourceMappingURL=PluginListPage.ca2681e387a9ecc07904.js.map