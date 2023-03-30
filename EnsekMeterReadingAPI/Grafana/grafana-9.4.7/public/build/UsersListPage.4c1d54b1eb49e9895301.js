"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8039],{71221:(F,y,a)=>{a.r(y),a.d(y,{UsersListPageContent:()=>z,UsersListPageUnconnected:()=>$,default:()=>ie});var e=a(68404),g=a(36635),D=a(41959),I=a(52081),O=a(78889),A=a(79396),c=a(77582),i=a(94599),v=a(31403),C=a(90336);const M={revokeInvite:C.GY},h=(0,g.connect)(null,M);class R extends e.PureComponent{render(){const{invitee:n,revokeInvite:r}=this.props;return e.createElement("tr",null,e.createElement("td",null,n.email),e.createElement("td",null,n.name),e.createElement("td",{className:"text-right"},e.createElement(i.m,{icon:"copy",variant:"secondary",size:"sm",getText:()=>n.url},"Copy Invite"),"\xA0"),e.createElement("td",null,e.createElement(v.zx,{variant:"destructive",size:"sm",icon:"times",onClick:()=>r(n.code),"aria-label":"Revoke Invite"})))}}const x=h(R);class m extends e.PureComponent{render(){const{invitees:n}=this.props;return e.createElement("table",{className:"filter-table form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Email"),e.createElement("th",null,"Name"),e.createElement("th",null),e.createElement("th",{style:{width:"34px"}}))),e.createElement("tbody",{"data-testid":"InviteesTable-body"},n.map((r,o)=>e.createElement(x,{key:`${r.id}-${o}`,invitee:r}))))}}var P=a(90158),N=a(75804);const{selectAll:B,selectById:s,selectTotal:u}=N.wl,U=(t,n)=>n,H=(0,P.P1)([B,U],(t,n)=>{const r=new RegExp(n,"i");return t.filter(l=>r.test(l.name)||r.test(l.email))});var G=a(14747),Z=a(2594),J=a(81168),Y=a(82897),S=a(54899),w=a(95156),d=a(46002);function f(){return async(t,n)=>{try{const{perPage:r,page:o,searchQuery:l}=n().users,E=await(0,S.i)().get("/api/org/users/search",(0,w.y)({perpage:r,page:o,query:l}));t((0,d.eT)(E))}catch{(0,d.k7)()}}}const X=(0,Y.debounce)(t=>t(f()),300);function k(t){return async n=>{await(0,S.i)().patch(`/api/org/users/${t.userId}`,{role:t.role}),n(f())}}function q(t){return async n=>{await(0,S.i)().delete(`/api/org/users/${t}`),n(f())}}function _(t){return async n=>{n((0,d.tZ)()),n((0,d.PJ)(t)),n(f())}}function ee(t){return async n=>{n((0,d.tZ)()),n((0,d.w4)(t)),X(n)}}const te=t=>{const n=new RegExp(t.searchQuery,"i");return t.users.filter(r=>n.test(r.login)||n.test(r.email)||n.test(r.name))},b=t=>t.searchQuery;function ne(t){return{searchQuery:b(t.users),pendingInvitesCount:u(t.invites),externalUserMngLinkName:t.users.externalUserMngLinkName,externalUserMngLinkUrl:t.users.externalUserMngLinkUrl,canInvite:t.users.canInvite}}const ae={changeSearchQuery:ee},se=(0,g.connect)(ne,ae)(({canInvite:t,externalUserMngLinkName:n,externalUserMngLinkUrl:r,searchQuery:o,pendingInvitesCount:l,changeSearchQuery:E,onShowInvites:L,showInvites:T})=>{const Q=[{label:"Users",value:"users"},{label:`Pending Invites (${l})`,value:"invites"}],W=c.Vt.hasAccess(J.AccessControlAction.OrgUsersAdd,t);return e.createElement("div",{className:"page-action-bar","data-testid":"users-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(G.H,{value:o,onChange:E,placeholder:"Search user by login, email or name"})),l>0&&e.createElement("div",{style:{marginLeft:"1rem"}},e.createElement(Z.S,{value:T?"invites":"users",options:Q,onChange:L})),W&&e.createElement(v.Qj,{href:"org/users/invite"},"Invite"),r&&e.createElement(v.Qj,{href:r,target:"_blank",rel:"noopener"},n))});var re=a(68903);function le(t){const n=b(t.users);return{users:te(t.users),searchQuery:b(t.users),page:t.users.page,totalPages:t.users.totalPages,perPage:t.users.perPage,invitees:H(t.invites,n),externalUserMngInfo:t.users.externalUserMngInfo,isLoading:t.users.isLoading}}const ce={loadUsers:f,fetchInvitees:C.nW,changePage:_,updateUser:k,removeUser:q},oe=(0,g.connect)(le,ce),$=({users:t,page:n,totalPages:r,invitees:o,externalUserMngInfo:l,isLoading:E,loadUsers:L,fetchInvitees:T,changePage:Q,updateUser:W,removeUser:me})=>{const[K,ue]=(0,e.useState)(!1),j=l?(0,D.a)(l):"";(0,e.useEffect)(()=>{L(),T()},[T,L]);const de=(p,V)=>{W({...V,role:p})},Ee=()=>{ue(!K)},ge=()=>K?e.createElement(m,{invitees:o}):e.createElement(I.wc,{spacing:"md"},e.createElement(re.P,{users:t,orgId:c.Vt.user.orgId,onRoleChange:(p,V)=>de(p,V),onRemoveUser:p=>me(p.userId)}),e.createElement(I.Lh,{justify:"flex-end"},e.createElement(O.t,{onNavigate:Q,currentPage:n,numberOfPages:r,hideWhenSinglePage:!0})));return e.createElement(A.T.Contents,{isLoading:!E},e.createElement(se,{onShowInvites:Ee,showInvites:K}),j&&e.createElement("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:j}}),E&&ge())},z=oe($);function ie(){return e.createElement(A.T,{navId:"users"},e.createElement(z,null))}},68903:(F,y,a)=>{a.d(y,{P:()=>C});var e=a(68404),g=a(31403),D=a(98102),I=a(66226),O=a(11630),A=a(21731),c=a(77582),i=a(81168),v=a(65135);const C=({users:M,orgId:h,onRoleChange:R,onRemoveUser:x})=>{const[m,P]=(0,e.useState)(null),[N,B]=(0,e.useState)([]);return(0,e.useEffect)(()=>{async function s(){try{if(c.Vt.hasPermission(i.AccessControlAction.ActionRolesList)){let u=await(0,O.ul)(h);B(u)}}catch{console.error("Error loading options")}}c.Vt.licensedAccessControlEnabled()&&s()},[h]),e.createElement(e.Fragment,null,e.createElement("table",{className:"filter-table form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"Login"),e.createElement("th",null,"Email"),e.createElement("th",null,"Name"),e.createElement("th",null,"Seen"),e.createElement("th",null,"Role"),e.createElement("th",{style:{width:"34px"}}),e.createElement("th",null),e.createElement("th",null))),e.createElement("tbody",null,M.map((s,u)=>e.createElement("tr",{key:`${s.userId}-${u}`},e.createElement("td",{className:"width-2 text-center"},e.createElement("img",{className:"filter-table__avatar",src:s.avatarUrl,alt:"User avatar"})),e.createElement("td",{className:"max-width-6"},e.createElement("span",{className:"ellipsis",title:s.login},s.login)),e.createElement("td",{className:"max-width-5"},e.createElement("span",{className:"ellipsis",title:s.email},s.email)),e.createElement("td",{className:"max-width-5"},e.createElement("span",{className:"ellipsis",title:s.name},s.name)),e.createElement("td",{className:"width-1"},s.lastSeenAtAge),e.createElement("td",{className:"width-8"},c.Vt.licensedAccessControlEnabled()?e.createElement(I.R,{userId:s.userId,orgId:h,roleOptions:N,basicRole:s.role,onBasicRoleChange:U=>R(U,s),basicRoleDisabled:!c.Vt.hasPermissionInMetadata(i.AccessControlAction.OrgUsersWrite,s)}):e.createElement(v.A,{"aria-label":"Role",value:s.role,disabled:!c.Vt.hasPermissionInMetadata(i.AccessControlAction.OrgUsersWrite,s),onChange:U=>R(U,s)})),e.createElement("td",{className:"width-1 text-center"},s.isDisabled&&e.createElement("span",{className:"label label-tag label-tag--gray"},"Disabled")),e.createElement("td",{className:"width-1"},Array.isArray(s.authLabels)&&s.authLabels.length>0&&e.createElement(A.e,{label:s.authLabels[0],removeIcon:!1,count:0})),c.Vt.hasPermissionInMetadata(i.AccessControlAction.OrgUsersRemove,s)&&e.createElement("td",{className:"text-right"},e.createElement(g.zx,{size:"sm",variant:"destructive",onClick:()=>{P(s)},icon:"times","aria-label":"Delete user"})))))),Boolean(m)&&e.createElement(D.s,{body:`Are you sure you want to delete user ${m?.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{P(null)},isOpen:!0,onConfirm:()=>{m&&(x(m),P(null))}}))}}}]);

//# sourceMappingURL=UsersListPage.4c1d54b1eb49e9895301.js.map