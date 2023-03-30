"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[687],{66446:(ce,O,a)=>{a.r(O),a.d(O,{ServiceAccountPageUnconnected:()=>pe,default:()=>Me});var e=a(68404),r=a(36635),y=a(99919),h=a(52081),g=a(31403),P=a(98102),v=a(79396),m=a(77582),l=a(81168),W=a(73546),k=a(82002);const F=t=>{const n=k.Vt.hasPermissionInMetadata(l.AccessControlAction.ServiceAccountsPermissionsWrite,t.serviceAccount);return e.createElement(W.P,{title:"Permissions",addPermissionTitle:"Add permission",buttonLabel:"Add permission",resource:"serviceaccounts",resourceId:t.serviceAccount.id,canSetPermissions:n})};var D=a(14377),u=a(52423),B=a(38849),x=a(72648),f=a(50869),p=a(64353),R=a(46967),Y=a(71657);const w=({label:t,value:n,inputType:c,disabled:i,onChange:E})=>{const A=(0,e.useRef)(null),[d,V]=(0,e.useState)(n),[I,Z]=(0,e.useState)(!1),ae=(0,x.wW)(C),j=`${t}-input`;(0,e.useEffect)(()=>{I&&ue()},[I]);const ie=()=>{Z(!0)},oe=()=>{Z(!1),V(n||"")},de=(q,J)=>{J!==f.G.Invalid&&V(q.target.value)},se=(q,J)=>{J!==f.G.Invalid&&V(q.target.value)},ue=()=>{A?.current?.focus()},me=()=>{Z(!1),E&&E(d)};return e.createElement("tr",null,e.createElement("td",null,e.createElement(p._,{htmlFor:j},t)),e.createElement("td",{className:"width-25",colSpan:2},!i&&I?e.createElement(R.I,{id:j,type:c,defaultValue:n,onBlur:se,onChange:de,ref:A,width:30}):e.createElement("span",{className:(0,u.cx)({[ae.disabled]:i})},n)),e.createElement("td",null,E&&e.createElement(Y.p,{closeOnConfirm:!0,confirmText:"Save",onConfirm:me,onClick:ie,onCancel:oe,disabled:i},"Edit")))},C=t=>({disabled:u.css`
      color: ${t.colors.text.secondary};
    `});var U=a(66226),o=a(65135);const s=({label:t,serviceAccount:n,roleOptions:c,onRoleChange:i})=>{const E=`${t}-input`,A=m.Vt.hasPermissionInMetadata(l.AccessControlAction.ServiceAccountsWrite,n);return e.createElement("tr",null,e.createElement("td",null,e.createElement(p._,{htmlFor:E},t)),m.Vt.licensedAccessControlEnabled()?e.createElement("td",{colSpan:3},e.createElement(U.R,{userId:n.id,orgId:n.orgId,basicRole:n.role,onBasicRoleChange:i,roleOptions:c,basicRoleDisabled:!A,disabled:n.isDisabled})):e.createElement(e.Fragment,null,e.createElement("td",null,e.createElement(o.A,{width:24,inputId:E,"aria-label":"Role",value:n.role,disabled:n.isDisabled,onChange:i})),e.createElement("td",{colSpan:2})))};function b({serviceAccount:t,timeZone:n,roleOptions:c,onChange:i}){const E=(0,x.wW)(T),A=m.Vt.hasPermission(l.AccessControlAction.ServiceAccountsWrite),d=I=>{i({...t,role:I})},V=I=>{i({...t,name:I})};return e.createElement("div",{className:E.section},e.createElement("h3",null,"Information"),e.createElement("table",{className:"filter-table"},e.createElement("tbody",null,e.createElement(w,{label:"Name",value:t.name,onChange:V,disabled:!A||t.isDisabled}),e.createElement(w,{label:"ID",value:t.login,disabled:t.isDisabled}),e.createElement(s,{label:"Roles",serviceAccount:t,onRoleChange:d,roleOptions:c}),e.createElement(w,{label:"Creation date",value:(0,B.dq)(t.createdAt,{timeZone:n}),disabled:t.isDisabled}))))}const T=t=>({section:u.css`
    margin-bottom: ${t.spacing(4)};
  `});var L=a(13626),S=a(61860),K=a(39904);const N=({tokens:t,timeZone:n,tokenActionsDisabled:c,onDelete:i})=>{const E=(0,x.l4)(),A=Q(E);return e.createElement("table",{className:(0,u.cx)(A.section,"filter-table")},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Expires"),e.createElement("th",null,"Created"),e.createElement("th",null,"Last used at"),e.createElement("th",null),e.createElement("th",null))),e.createElement("tbody",null,t.map(d=>e.createElement("tr",{key:d.id,className:A.tableRow(d.hasExpired||d.isRevoked)},e.createElement("td",null,d.name),e.createElement("td",null,e.createElement(re,{timeZone:n,token:d})),e.createElement("td",null,ee(n,d.created)),e.createElement("td",null,_(n,d.lastUsedAt)),e.createElement("td",{className:"width-1 text-center"},d.isRevoked&&e.createElement(z,null)),e.createElement("td",null,e.createElement(L.m,{"aria-label":`Delete service account token ${d.name}`,size:"sm",onConfirm:()=>i(d),disabled:c}))))))};function _(t,n){return n?(0,B.dq)(n,{timeZone:t}):"Never"}function ee(t,n){return n?(0,B.dq)(n,{timeZone:t}):"No expiration date"}function te(t){const n=Math.ceil(t/86400);return`Expires in ${n>1?`${n} days`:`${n} day`}`}const z=()=>{const t=(0,x.wW)(Q);return e.createElement("span",{className:t.hasExpired},"Revoked",e.createElement("span",{className:t.tooltipContainer},e.createElement(S.u,{content:"This token has been publicly exposed. Please rotate this token"},e.createElement(K.J,{name:"exclamation-triangle",className:t.toolTipIcon}))))},re=({timeZone:t,token:n})=>{const c=(0,x.wW)(Q);return n.expiration?n.secondsUntilExpiration?e.createElement("span",{className:c.secondsUntilExpiration},te(n.secondsUntilExpiration)):n.hasExpired?e.createElement("span",{className:c.hasExpired},"Expired",e.createElement("span",{className:c.tooltipContainer},e.createElement(S.u,{content:"This token has expired"},e.createElement(K.J,{name:"exclamation-triangle",className:c.toolTipIcon})))):e.createElement("span",null,ee(t,n.expiration)):e.createElement("span",{className:c.neverExpire},"Never")},Q=t=>({tableRow:n=>u.css`
    color: ${n?t.colors.text.secondary:t.colors.text.primary};
  `,tooltipContainer:u.css`
    margin-left: ${t.spacing(1)};
  `,toolTipIcon:u.css`
    color: ${t.colors.error.text};
  `,secondsUntilExpiration:u.css`
    color: ${t.colors.warning.text};
  `,hasExpired:u.css`
    color: ${t.colors.error.text};
  `,neverExpire:u.css`
    color: ${t.colors.text.secondary};
  `,section:u.css`
    margin-bottom: ${t.spacing(4)};
  `});var H=a(50655),$=a(54899),G=a(37932),ve=a(95156),ne=a(45003);const X="/api/serviceaccounts";function fe(t){return async n=>{n((0,ne.s3)());try{const c=await(0,$.i)().get(`${X}/${t}`,(0,ve.y)());n((0,ne.P4)(c))}catch(c){console.error(c)}finally{n((0,ne.LA)())}}}function Te(t){return async n=>{await(0,$.i)().patch(`${X}/${t.id}?accesscontrol=true`,{...t}),n(fe(t.id))}}function Se(t){return async()=>{await(0,$.i)().delete(`${X}/${t}`),G.E1.push("/org/serviceaccounts")}}function ye(t,n,c){return async i=>{const E=await(0,$.i)().post(`${X}/${t}/tokens`,n);c(E.key),i(le(t))}}function he(t,n){return async c=>{await(0,$.i)().delete(`${X}/${t}/tokens/${n}`),c(le(t))}}function le(t){return async n=>{try{const c=await(0,$.i)().get(`${X}/${t}/tokens`);n((0,ne.e7)(c))}catch(c){console.error(c)}}}function Pe(t){return{serviceAccount:t.serviceAccountProfile.serviceAccount,tokens:t.serviceAccountProfile.tokens,isLoading:t.serviceAccountProfile.isLoading,roleOptions:t.serviceAccounts.roleOptions,timezone:(0,y.Z)(t.user)}}const xe={createServiceAccountToken:ye,deleteServiceAccount:Se,deleteServiceAccountToken:he,loadServiceAccount:fe,loadServiceAccountTokens:le,updateServiceAccount:Te},Ie=(0,r.connect)(Pe,xe),pe=({match:t,serviceAccount:n,tokens:c,timezone:i,isLoading:E,roleOptions:A,createServiceAccountToken:d,deleteServiceAccount:V,deleteServiceAccountToken:I,loadServiceAccount:Z,loadServiceAccountTokens:ae,updateServiceAccount:j})=>{const[ie,oe]=(0,e.useState)(""),[de,se]=(0,e.useState)(!1),[ue,me]=(0,e.useState)(!1),[q,J]=(0,e.useState)(!1),Ee=parseInt(t.params.id,10),ge=!m.Vt.hasPermission(l.AccessControlAction.ServiceAccountsWrite)||n.isDisabled,De=m.Vt.hasPermission(l.AccessControlAction.ServiceAccountsWrite),Oe=m.Vt.hasAccessInMetadata(l.AccessControlAction.ServiceAccountsPermissionsRead,n,!1),Re={text:n.name,img:n.avatarUrl,breadcrumbs:[{title:"Service accounts",url:"org/serviceaccounts"}],subTitle:"Manage settings for an individual service account."};(0,e.useEffect)(()=>{Z(Ee),ae(Ee),m.Vt.licensedAccessControlEnabled()&&(0,H.bX)()},[Z,ae,Ee]);const be=M=>{j(M)},Ae=M=>()=>{me(M)},Ce=M=>()=>{J(M)},Le=()=>{V(n.id)},Ne=()=>{j({...n,isDisabled:!0}),J(!1)},$e=()=>{j({...n,isDisabled:!1})},We=M=>{I(n?.id,M.id)},Be=M=>{d(n?.id,M,oe)},Ue=()=>{se(!1),oe("")};return e.createElement(v.T,{navId:"serviceaccounts",pageNav:Re},e.createElement(v.T.Contents,{isLoading:E},e.createElement("div",null,n&&e.createElement(h.Lh,{spacing:"md",height:"auto",justify:"flex-end"},e.createElement(g.zx,{type:"button",variant:"destructive",onClick:Ae(!0),disabled:!m.Vt.hasPermission(l.AccessControlAction.ServiceAccountsDelete)},"Delete service account"),n.isDisabled?e.createElement(g.zx,{type:"button",variant:"secondary",onClick:$e,disabled:!De},"Enable service account"):e.createElement(g.zx,{type:"button",variant:"secondary",onClick:Ce(!0),disabled:!De},"Disable service account")),n&&e.createElement(b,{serviceAccount:n,timeZone:i,roleOptions:A,onChange:be}),e.createElement(h.Lh,{justify:"space-between",height:"auto"},e.createElement("h3",null,"Tokens"),e.createElement(g.zx,{onClick:()=>se(!0),disabled:ge},"Add service account token")),c&&e.createElement(N,{tokens:c,timeZone:i,onDelete:We,tokenActionsDisabled:ge}),Oe&&e.createElement(F,{serviceAccount:n})),e.createElement(P.s,{isOpen:ue,title:"Delete service account",body:"Are you sure you want to delete this service account?",confirmText:"Delete service account",onConfirm:Le,onDismiss:Ae(!1)}),e.createElement(P.s,{isOpen:q,title:"Disable service account",body:"Are you sure you want to disable this service account?",confirmText:"Disable service account",onConfirm:Ne,onDismiss:Ce(!1)}),e.createElement(D.m,{isOpen:de,token:ie,serviceAccountLogin:n.login,onCreateToken:Be,onClose:Ue})))},Me=Ie(pe)},14377:(ce,O,a)=>{a.d(O,{m:()=>u});var e=a(52423),r=a(68404),y=a(44288),h=a(35645),g=a(72648),P=a(35029),v=a(24799),m=a(46967),l=a(2594),W=a(86348),k=a(31403),F=a(94599);const D=[{label:"No expiration",value:!1},{label:"Set expiration date",value:!0}],u=({isOpen:f,token:p,serviceAccountLogin:R,onCreateToken:Y,onClose:w})=>{const C=new Date;C.setDate(C.getDate()+1);const U=new Date;h.v.tokenExpirationDayLimit!==void 0&&U.setDate(U.getDate()+h.v.tokenExpirationDayLimit+1);const o=h.v.tokenExpirationDayLimit!==void 0&&h.v.tokenExpirationDayLimit>0,[s,b]=(0,r.useState)(""),[T,L]=(0,r.useState)(""),[S,K]=(0,r.useState)(o),[N,_]=(0,r.useState)(C),[ee,te]=(0,r.useState)(N!==""),z=(0,g.wW)(x);(0,r.useEffect)(()=>{f&&b(`${R}-${(0,y.Z)()}`)},[R,f]);const re=G=>{te(G!==""),_(G)},Q=()=>{Y({name:T||s,secondsToLive:S?B(N):void 0})},H=()=>{L(""),b(""),K(o),_(C),te(N!==""),w()},$=p?"Service account token created":"Add service account token";return r.createElement(P.u,{isOpen:f,title:$,onDismiss:H,className:z.modal,contentClassName:z.modalContent},p?r.createElement(r.Fragment,null,r.createElement(v.g,{label:"Token",description:"Copy the token now as you will not be able to see it again. Loosing a token requires creating a new one."},r.createElement("div",{className:z.modalTokenRow},r.createElement(m.I,{name:"tokenValue",value:p,readOnly:!0}),r.createElement(F.m,{className:z.modalCopyToClipboardButton,variant:"primary",size:"md",icon:"copy",getText:()=>p},"Copy clipboard"))),r.createElement(P.u.ButtonRow,null,r.createElement(F.m,{variant:"primary",getText:()=>p,onClipboardCopy:H},"Copy to clipboard and close"),r.createElement(k.zx,{variant:"secondary",onClick:H},"Close"))):r.createElement("div",null,r.createElement(v.g,{label:"Display name",description:"Name to easily identify the token",required:!0},r.createElement(m.I,{name:"tokenName",value:T,placeholder:s,onChange:G=>{L(G.currentTarget.value)}})),!S&&r.createElement(v.g,{label:"Expiration"},r.createElement(l.S,{options:D,value:S,onChange:K,size:"md"})),S&&r.createElement(v.g,{label:"Expiration date"},r.createElement(W.d,{onChange:re,value:N,placeholder:"",minDate:C,maxDate:U})),r.createElement(P.u.ButtonRow,null,r.createElement(k.zx,{onClick:Q,disabled:S&&!ee},"Generate token"))))},B=f=>{const p=new Date(f),R=new Date;return Math.ceil((p.getTime()-R.getTime())/1e3)},x=f=>({modal:e.css`
      width: 550px;
    `,modalContent:e.css`
      overflow: visible;
    `,modalTokenRow:e.css`
      display: flex;
    `,modalCopyToClipboardButton:e.css`
      margin-left: ${f.spacing(.5)};
    `})},75127:(ce,O,a)=>{a.d(O,{t:()=>e});const e="grafana.serviceaccounts.showApiKeysMigrationInfo"},50655:(ce,O,a)=>{a.d(O,{R5:()=>R,TL:()=>B,XE:()=>Y,Xd:()=>D,bX:()=>k,f3:()=>U,fT:()=>f,hv:()=>F,xi:()=>C,yN:()=>x});var e=a(82897),r=a.n(e),y=a(54899),h=a(11630),g=a(82002),P=a(58379),v=a(81168),m=a(75127),l=a(45003);const W="/api/serviceaccounts";function k(){return async o=>{try{if(g.Vt.licensedAccessControlEnabled()&&g.Vt.hasPermission(v.AccessControlAction.ActionRolesList)){const s=await(0,h.ul)();o((0,l.Dn)(s))}}catch(s){console.error(s)}}}function F(){return async o=>{if(g.Vt.hasPermission(v.AccessControlAction.ServiceAccountsRead)){const s=await(0,y.i)().get("/api/serviceaccounts/migrationstatus");o((0,l.cB)(!!s?.migrated))}}}function D({withLoadingIndicator:o}={withLoadingIndicator:!1}){return async(s,b)=>{try{if(g.Vt.hasPermission(v.AccessControlAction.ServiceAccountsRead)){o&&s((0,l.pN)());const{perPage:T,page:L,query:S,serviceAccountStateFilter:K}=b().serviceAccounts,N=await(0,y.i)().get(`/api/serviceaccounts/search?perpage=${T}&page=${L}&query=${S}${p(K)}&accesscontrol=true`);s((0,l.Ub)(N))}}catch(T){console.error(T)}finally{s((0,l.dt)())}}}const u=(0,e.debounce)(o=>o(D()),500,{leading:!0});function B(o){return async s=>{await(0,y.i)().patch(`${W}/${o.id}?accesscontrol=true`,{...o}),s(D())}}function x(o){return async s=>{await(0,y.i)().delete(`${W}/${o}`),s(D())}}function f(o,s,b){return async T=>{const L=await(0,y.i)().post(`${W}/${o}/tokens`,s);b(L.key),T(D())}}const p=o=>{switch(o){case v.ServiceAccountStateFilter.WithExpiredTokens:return"&expiredTokens=true";case v.ServiceAccountStateFilter.Disabled:return"&disabled=true";default:return""}};function R(o){return async s=>{s((0,l.aj)(o)),u(s)}}function Y(o){return async s=>{s((0,l.M4)(o)),s(D())}}function w(o){return async s=>{s(pageChanged(o)),s(D())}}function C(){return async o=>{const s=P.Z.getBool(m.t,!1);o((0,l.gl)(s))}}function U(){return async o=>{P.Z.set(m.t,!1),o(C())}}}}]);

//# sourceMappingURL=ServiceAccountPage.d8deecda4217432d5f11.js.map