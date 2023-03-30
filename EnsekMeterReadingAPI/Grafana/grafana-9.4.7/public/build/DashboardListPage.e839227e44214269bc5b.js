"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4074],{48548:(R,E,a)=>{a.r(E),a.d(E,{DashboardListPage:()=>p,default:()=>J});var c=a(52423),t=a(68404),A=a(22350),I=a(83383),S=a(37932),b=a(79396),x=a(29930),M=a(60492);const P=e=>x.ae.getFolderByUid(e,{withAccessControl:!0}).then(o=>{const s=(0,M.B)(o);return s.children[0].active=!0,{folder:o,folderNav:s}});var w=a(72648),T=a(46967),m=a(82002),g=a(81168),$=a(54350),B=a(71897),L=a(66757),f=a(41818),V=a(35645),v=a(38484),U=a(71698),W=a(31403),z=a(39904),u=a(35287);const K=({folderUid:e,canCreateFolders:o=!1,canCreateDashboards:s=!1})=>{const n=d=>{let r=`dashboard/${d}`;return d==="new_folder"&&(r="dashboards/folder/new/"),e&&(r+=`?folderUid=${e}`),r},l=()=>t.createElement(v.v,null,s&&t.createElement(v.v.Item,{url:n("new"),label:(0,u.t)("search.dashboard-actions.new-dashboard","New Dashboard"),onClick:()=>(0,f.ff)("grafana_menu_item_clicked",{url:n("new"),from:"/dashboards"})}),o&&(V.v.featureToggles.nestedFolders||!e)&&t.createElement(v.v.Item,{url:n("new_folder"),label:(0,u.t)("search.dashboard-actions.new-folder","New Folder"),onClick:()=>(0,f.ff)("grafana_menu_item_clicked",{url:n("new_folder"),from:"/dashboards"})}),s&&t.createElement(v.v.Item,{url:n("import"),label:(0,u.t)("search.dashboard-actions.import","Import"),onClick:()=>(0,f.ff)("grafana_menu_item_clicked",{url:n("import"),from:"/dashboards"})}));return t.createElement("div",null,t.createElement(U.L,{overlay:l,placement:"bottom-start"},t.createElement(W.zx,{variant:"primary"},(0,u.t)("search.dashboard-actions.new","New"),t.createElement(z.J,{name:"angle-down"}))))},y=t.memo(({folder:e})=>{const o=(0,w.wW)(j),s=(0,L.hD)(),n=s.useState(),{onKeyDown:l,keyboardEvents:d}=(0,$.A)(),r=e?.uid,i=e?.canSave,{isEditor:h}=m.Vt,C=e?i:m.Vt.hasEditPermissionInFolders,N=m.Vt.hasAccess(g.AccessControlAction.FoldersCreate,h),D=C||!!i,F=r?m.Vt.hasAccessInMetadata(g.AccessControlAction.DashboardsCreate,e,D):m.Vt.hasAccess(g.AccessControlAction.DashboardsCreate,D),O=e===void 0&&N||F;return(0,t.useEffect)(()=>s.initStateFromUrl(e?.uid),[e?.uid,s]),t.createElement(t.Fragment,null,t.createElement("div",{className:(0,c.cx)(o.actionBar,"page-action-bar")},t.createElement("div",{className:(0,c.cx)(o.inputWrapper,"gf-form gf-form--grow m-r-2")},t.createElement(T.I,{value:n.query??"",onChange:Q=>s.onQueryChange(Q.currentTarget.value),onKeyDown:l,autoFocus:!0,spellCheck:!1,placeholder:n.includePanels?"Search for dashboards and panels":"Search for dashboards",className:o.searchInput,suffix:null})),O&&t.createElement(K,{folderUid:r,canCreateFolders:N,canCreateDashboards:F})),t.createElement(B.Z,{showManage:Boolean(h||C||i),folderDTO:e,hidePseudoFolders:!0,keyboardEvents:d}))});y.displayName="ManageDashboardsNew";const Z=y,j=e=>({actionBar:c.css`
    ${e.breakpoints.down("sm")} {
      flex-wrap: wrap;
    }
  `,inputWrapper:c.css`
    ${e.breakpoints.down("sm")} {
      margin-right: 0 !important;
    }
  `,searchInput:c.css`
    margin-bottom: 6px;
    min-height: ${e.spacing(4)};
  `,unsupported:c.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,noResults:c.css`
    padding: ${e.v1.spacing.md};
    background: ${e.v1.colors.bg2};
    font-style: italic;
    margin-top: ${e.v1.spacing.md};
  `}),p=(0,t.memo)(({match:e,location:o})=>{const{loading:s,value:n}=(0,A.Z)(()=>{const l=e.params.uid,d=o.pathname;return!l||!d.startsWith("/dashboards")?Promise.resolve({}):P(l).then(({folder:r,folderNav:i})=>{const h=I.u.stripBaseFromUrl(r.url);return h!==o.pathname&&S.E1.replace(h),{folder:r,pageNav:i}})},[e.params.uid]);return t.createElement(b.T,{navId:"dashboards/browse",pageNav:n?.pageNav},t.createElement(b.T.Contents,{isLoading:s,className:c.css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `},t.createElement(Z,{folder:n?.folder})))});p.displayName="DashboardListPage";const J=p}}]);

//# sourceMappingURL=DashboardListPage.e839227e44214269bc5b.js.map