"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7675],{17102:(Te,D,n)=>{n.r(D),n.d(D,{default:()=>Se});var c=n(52423),e=n(68404),A=n(22350),j=n(16911),z=n(37932),H=n(35645),N=n(72648),J=n(67487),I=n(45253),R=n(52081),G=n(40419),F=n(31403),Q=n(72142),K=n(79841),Y=n(97063),P=n(79396),X=n(76770),k=n(45984);function q({onPathChange:t}){return e.createElement("div",null,e.createElement("div",null,"TODO... Add ROOT"),e.createElement(F.zx,{variant:"secondary",onClick:()=>t("/")},"Cancel"))}var L=n(82897),M=n(39904);function _({pathName:t,onPathChange:r,rootIcon:d}){const a=(0,N.wW)(ee),s=t.split("/").filter(Boolean);return e.createElement("ul",{className:a.breadCrumb},d&&e.createElement("li",null,e.createElement(M.J,{name:d,onClick:()=>r("")})),s.map((l,y)=>{let m="/"+s.slice(0,y+1).join("/");const g=()=>r(m),E=y===s.length-1;return e.createElement("li",{key:(0,L.uniqueId)(l),onClick:E?void 0:g},l)}))}function ee(t){return{breadCrumb:c.css`
      list-style: none;
      padding: ${t.spacing(2,1)};

      li {
        display: inline;

        :not(:last-child) {
          color: ${t.colors.text.link};
          cursor: pointer;
        }
        + li:before {
          content: '>';
          padding: ${t.spacing(1)};
          color: ${t.colors.text.secondary};
        }
      }
    `}}var B=n(35029),te=n(94270),ne=n(24799),ae=n(46967);const re={folderName:""};function se({validate:t,onDismiss:r,onSubmit:d}){return e.createElement(B.u,{onDismiss:r,isOpen:!0,title:"New Folder"},e.createElement(te.l,{defaultValues:re,onSubmit:d,maxWidth:"none"},({register:a,errors:s})=>e.createElement(e.Fragment,null,e.createElement(ne.g,{label:"Folder name",invalid:!!s.folderName,error:s.folderName&&s.folderName.message},e.createElement(ae.I,{id:"folder-name-input",...a("folderName",{required:"Folder name is required.",validate:{validate:t}})})),e.createElement(B.u.ButtonRow,null,e.createElement(F.zx,{type:"submit"},"Create")))))}var U=n(89050),le=n(9405),oe=n(16964),w=n(63163),x=n(94108);function ie({listing:t,path:r,onPathChange:d,view:a}){const s=(0,N.wW)(de),l=(0,e.useMemo)(()=>ce(r),[r]),y=(0,A.Z)(async()=>{if(l.category==="text"){const g=await(0,w.$)().get(r);return(0,L.isString)(g)?g:JSON.stringify(g,null,2)}return null},[l,r]);switch(a){case x.i.Config:return e.createElement("div",null,"CONFIGURE?");case x.i.Perms:return e.createElement("div",null,"Permissions");case x.i.History:return e.createElement("div",null,"TODO... history")}let m=`api/storage/read/${r}`;switch(m.endsWith("/")&&(m=m.substring(0,m.length-1)),l.category){case"svg":return e.createElement("div",null,e.createElement(oe.V,{src:m,className:s.icon}));case"image":return e.createElement("div",null,e.createElement("a",{target:"_self",href:m},e.createElement("img",{src:m,alt:"File preview",className:s.img})));case"text":return e.createElement("div",{className:s.tableWrapper},e.createElement(U.Z,null,({width:g,height:E})=>e.createElement(le.p,{width:g,height:E,value:y.value??"",showLineNumbers:!1,readOnly:!0,language:l.language??"text",showMiniMap:!1,onBlur:f=>{console.log("CHANGED!",f)}})))}return e.createElement("div",null,"FILE: ",e.createElement("a",{href:m},r))}function ce(t){const r=t.lastIndexOf(".");if(r<0)return{};switch(t.substring(r+1).toLowerCase()){case"svg":return{category:"svg"};case"jpg":case"jpeg":case"png":case"webp":case"gif":return{category:"image"};case"geojson":case"json":return{category:"text",language:"json"};case"text":case"go":case"md":return{category:"text"}}return{}}const de=t=>({wrapper:c.css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:c.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:c.css`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,uploadSpot:c.css`
    margin-left: ${t.spacing(2)};
  `,border:c.css`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `,img:c.css`
    max-width: 100%;
    // max-height: 147px;
    // fill: ${t.colors.text.primary};
  `,icon:c.css`
    // max-width: 100%;
    // max-height: 147px;
    // fill: ${t.colors.text.primary};
  `});var me=n(88144);function ue({listing:t,view:r}){const d=(0,N.wW)(ge);switch(r){case x.i.Config:return e.createElement("div",null,"CONFIGURE?");case x.i.Perms:return e.createElement("div",null,"Permissions")}return e.createElement("div",{className:d.tableWrapper},e.createElement(U.Z,null,({width:a,height:s})=>e.createElement("div",{style:{width:`${a}px`,height:`${s}px`}},e.createElement(me.i,{height:s,width:a,data:t,noHeader:!1,showTypeIcons:!1,resizable:!1}))))}const ge=t=>({wrapper:c.css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:c.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:c.css`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,uploadSpot:c.css`
    margin-left: ${t.spacing(2)};
  `,border:c.css`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `});var W=n(72948),fe=n(34807),pe=n(14747);function he({root:t,onPathChange:r}){const d=(0,N.wW)(ve),a=(0,A.Z)((0,w.$)().getConfig),[s,l]=(0,e.useState)("");let y=location.pathname;y.endsWith("/")||(y+="/");const m=(0,e.useMemo)(()=>{let E=a.value??[];if(s?.length){const p=s.toLowerCase();E=E.filter($=>{const i=$.config;return i.name.toLowerCase().indexOf(p)>=0||i.description.toLowerCase().indexOf(p)>=0})}const f=[],o=[];for(const p of E??[])p.config.underContentRoot?o.push(p):p.config.prefix!=="content"&&f.push(p);return{base:f,content:o}},[s,a]),g=(E,f)=>e.createElement(R.wc,null,f.map(o=>{const p=o.ready;return e.createElement(W.Z,{key:o.config.prefix,href:p?`admin/storage/${E}${o.config.prefix}/`:void 0},e.createElement(W.Z.Heading,null,o.config.name),e.createElement(W.Z.Meta,{className:d.clickable},o.config.description,o.config.git?.remote&&e.createElement("a",{href:o.config.git?.remote},o.config.git?.remote)),o.notice?.map($=>e.createElement(I.b,{key:$.text,severity:$.severity,title:$.text})),e.createElement(W.Z.Tags,{className:d.clickable},e.createElement(R.Lh,null,e.createElement(fe.P,{tags:Ee(o)}))),e.createElement(W.Z.Figure,{className:d.clickable},e.createElement(M.J,{name:xe(o.config.type),size:"xxxl",className:d.secondaryTextColor})))}));return e.createElement("div",null,e.createElement("div",{className:"page-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(pe.H,{placeholder:"Search Storage",value:s,onChange:l})),e.createElement(F.zx,{className:"pull-right",onClick:()=>r("",x.i.AddRoot)},"Add Root")),e.createElement("div",null,g("",m.base)),e.createElement("div",null,e.createElement("h3",null,"Content"),g("content/",m.content)))}function ve(t){return{secondaryTextColor:c.css`
      color: ${t.colors.text.secondary};
    `,clickable:c.css`
      pointer-events: none;
    `}}function Ee(t){const r=[];return t.builtin&&r.push("Builtin"),t.ready||r.push("Not ready"),r}function xe(t){switch(t){case"git":return"code-branch";case"disk":return"folder-open";case"sql":return"database";default:return"folder-open"}}var ye=n(82381),Ce=n(98102);const $e="image/jpg, image/jpeg, image/png, image/gif, image/webp";function we({setErrorMessages:t,setPath:r,path:d,fileNames:a}){const s=(0,N.wW)(be),[l,y]=(0,e.useState)(void 0),[m,g]=(0,e.useState)(!1),[E,f]=(0,e.useState)(1),[o,p]=(0,e.useState)(!0);(0,e.useEffect)(()=>{f(u=>u+1)},[l]);const $=u=>{console.log("Uploaded: "+d),u.path?r(u.path):r(d)},i=async(u,b)=>{if(!u){t(["Please select a file."]);return}const O=await(0,w.$)().upload(d,u,b);O.status!==200?t([O.message]):$(O)},h=u=>{t([]);const b=u.currentTarget.files&&u.currentTarget.files.length>0&&u.currentTarget.files[0]?u.currentTarget.files[0]:void 0;b&&(y(b),(0,w.J)(b.name,a)?(g(!0),p(!0)):(g(!1),i(b,!1).then(Z=>{})))},C=()=>{l&&(i(l,!0).then(u=>{}),p(!1))},S=()=>{y(void 0),g(!1),p(!1)};return e.createElement(e.Fragment,null,e.createElement(ye.p,{accept:$e,onFileUpload:h,key:E,className:s.uploadButton},"Upload"),l&&m&&e.createElement(Ce.s,{isOpen:o,body:e.createElement("div",null,e.createElement("p",null,l?.name),e.createElement("p",null,"A file with this name already exists."),e.createElement("p",null,"What would you like to do?")),title:"This file already exists",confirmText:"Replace",onConfirm:C,onDismiss:S}))}const be=t=>({uploadButton:c.css`
    margin-right: ${t.spacing(2)};
  `}),Ne=/^[a-z\d!\-_.*'() ]+$/,V=256,Fe=t=>{const r=t.lastIndexOf("/");return r<1?"":t.substring(0,r)};function Se(t){const r=(0,N.wW)(Oe),d=(0,X.q)("storage"),a=t.match.params.path??"",s=t.queryParams.view??x.i.Data,l=(i,h)=>{let C=("/admin/storage/"+i).replace("//","/");h&&h!==x.i.Data&&(C+="?view="+h),z.E1.push(C)},[y,m]=(0,e.useState)(!1),[g,E]=(0,e.useState)([]),f=(0,A.Z)(()=>(0,w.$)().list(a).then(i=>{if(i){const h=i.fields[0];i.fields[0]={...h,getLinks:C=>{const S=h.values.get(C.valueRowIndex??0),u=a+"/"+S;return[{title:`Open ${S}`,href:`/admin/storage/${u}`,target:"_self",origin:h,onClick:()=>{l(u)}}]}}}return i}),[a]),o=(0,e.useMemo)(()=>{let i=a?.indexOf("/")<0;if(f.value)if(f.value.length===1){const C=f.value.fields[0].values.get(0);i=!a.endsWith(C)}else i=!0;return i},[a,f]),p=(0,e.useMemo)(()=>f.value?.fields?.find(i=>i.name==="name")?.values?.toArray()?.filter(i=>typeof i=="string")??[],[f]),$=()=>{const i=!a?.length||a==="/";switch(s){case x.i.AddRoot:return i?e.createElement(q,{onPathChange:l}):(l(""),e.createElement(J.$,null))}const h=f.value;if(!(0,j.aY)(h))return e.createElement(e.Fragment,null);if(i)return e.createElement(he,{root:h,onPathChange:l});const C=[{what:x.i.Data,text:"Data"}];a.indexOf("/")<0&&C.push({what:x.i.Config,text:"Configure"}),o||C.push({what:x.i.History,text:"History"});const S=o&&(a.startsWith("resources")||a.startsWith("content")),u=a.startsWith("resources/")||a.startsWith("content/"),b=H.v.featureToggles.dashboardsFromStorage&&a.startsWith("content/"),O=()=>e.createElement("div",{className:r.errorAlert},e.createElement(I.b,{title:"Upload failed",severity:"error",onRemove:Z},g.map(v=>e.createElement("div",{key:v},v)))),Z=()=>{E([])};return e.createElement("div",{className:r.wrapper},e.createElement(R.Lh,{width:"100%",justify:"space-between",spacing:"md",height:25},e.createElement(_,{pathName:a,onPathChange:l,rootIcon:(0,G.toIconName)(d.node.icon??"")}),e.createElement(R.Lh,null,b&&e.createElement(F.Qj,{icon:"dashboard",href:`g/${a.substring(a.indexOf("/")+1)}`},"Dashboard"),S&&e.createElement(e.Fragment,null,e.createElement(we,{path:a,setErrorMessages:E,fileNames:p,setPath:l}),e.createElement(F.zx,{onClick:()=>m(!0)},"New Folder")),u&&e.createElement(F.zx,{variant:"destructive",onClick:()=>{const v=o?"Are you sure you want to delete this folder and all its contents?":"Are you sure you want to delete this file?",T=Fe(a);Y.Z.publish(new k.VJ({title:`Delete ${o?"folder":"file"}`,text:v,icon:"trash-alt",yesText:"Delete",onConfirm:()=>(0,w.$)().delete({path:a,isFolder:o}).then(()=>{l(T)})}))}},"Delete"))),g.length>0&&O(),e.createElement(Q.J,null,C.map(v=>e.createElement(K.O,{key:v.what,label:v.text,active:v.what===s,onChangeTab:()=>l(a,v.what)}))),o?e.createElement(ue,{listing:h,view:s}):e.createElement(ie,{path:a,listing:h,onPathChange:l,view:s}),y&&e.createElement(se,{onSubmit:async({folderName:v})=>{const T=`${a}/${v}`;typeof(await(0,w.$)().createFolder(T))?.error!="string"&&(l(T),m(!1))},onDismiss:()=>{m(!1)},validate:v=>{const T=v.toLowerCase();return(0,w.J)(v,p)?"A file or a folder with the same name already exists":Ne.test(T)?v.length>V?`Name is too long, maximum length: ${V} characters`:!0:"Name contains illegal characters"}}))};return e.createElement(P.T,{navModel:d},e.createElement(P.T.Contents,{isLoading:f.loading},$()))}const Oe=t=>({wrapper:c.css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:c.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:c.css`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,border:c.css`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `,errorAlert:c.css`
    padding-top: 20px;
  `,uploadButton:c.css`
    margin-right: ${t.spacing(2)};
  `})}}]);

//# sourceMappingURL=StoragePage.5a7c1d13f17308de7a7f.js.map