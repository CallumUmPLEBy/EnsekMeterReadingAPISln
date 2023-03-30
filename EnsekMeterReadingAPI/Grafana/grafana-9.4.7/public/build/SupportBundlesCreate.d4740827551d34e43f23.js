"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[539],{46190:(T,c,e)=>{e.r(c),e.d(c,{SupportBundlesCreateUnconnected:()=>C,default:()=>m});var t=e(68404),D=e(36635),u=e(45253),f=e(94270),r=e(24799),_=e(58255),B=e(52081),p=e(31403),d=e(79396),i=e(77878);const O=t.createElement("span",null,"Choose the components for the support bundle. The support bundle will be available for 3 days after creation."),a=s=>({collectors:s.supportBundles.supportBundleCollectors,isLoading:s.supportBundles.createBundlePageLoading,loadCollectorsError:s.supportBundles.loadBundlesError,createBundleError:s.supportBundles.createBundleError}),n={loadSupportBundleCollectors:i.vc,createSupportBundle:i.Jp},P=(0,D.connect)(a,n),C=({collectors:s,isLoading:y,loadCollectorsError:M,createBundleError:v,loadSupportBundleCollectors:g,createSupportBundle:L})=>{const h=o=>{const E=Object.keys(o).filter(l=>o[l]);L({collectors:E})};(0,t.useEffect)(()=>{g()},[g]);const U=s.reduce((o,E)=>({...o,[E.uid]:E.default}),{});return t.createElement(d.T,{navId:"support-bundles",pageNav:{text:"Create support bundle"},subTitle:O},t.createElement(d.T.Contents,{isLoading:y},t.createElement(d.T.OldNavOnly,null,t.createElement("h3",{className:"page-sub-heading"},"Create support bundle")),M&&t.createElement(u.b,{title:M,severity:"error"}),v&&t.createElement(u.b,{title:v,severity:"error"}),!!s.length&&t.createElement(f.l,{defaultValues:U,onSubmit:h,validateOn:"onSubmit"},({register:o,errors:E})=>t.createElement(t.Fragment,null,s.map(l=>t.createElement(r.g,{key:l.uid},t.createElement(_.X,{...o(l.uid),label:l.displayName,id:l.uid,description:l.description,defaultChecked:l.default,disabled:l.includedByDefault}))),t.createElement(B.Lh,null,t.createElement(p.zx,{type:"submit"},"Create"),t.createElement(p.Qj,{href:"/support-bundles",variant:"secondary"},"Cancel"))))))},m=P(C)},77878:(T,c,e)=>{e.d(c,{Ch:()=>_,Jp:()=>O,ob:()=>p,od:()=>d,vc:()=>i});var t=e(82897),D=e.n(t),u=e(54899),f=e(37932),r=e(62295);function _(a=!1){return async n=>{try{a||n((0,r.Ii)());const P=await(0,u.i)().get("/api/support-bundles");n((0,r.rW)(P))}finally{n((0,r.ki)())}}}const B=(0,t.throttle)(async a=>{const n=await(0,u.i)().get("/api/support-bundles");a((0,r.rW)(n))},1e3);function p(){return async a=>{a(B)}}function d(a){return async n=>{await(0,u.i)().delete(`/api/support-bundles/${a}`),n(_(!0))}}function i(){return async a=>{try{a((0,r.ik)());const n=await(0,u.i)().get("/api/support-bundles/collectors");a((0,r.cD)(n))}catch{a((0,r.rI)("Error loading support bundles data collectors"))}finally{a((0,r.UW)())}}}function O(a){return async n=>{try{await(0,u.i)().post("/api/support-bundles",a),f.E1.push("/support-bundles")}catch{n((0,r.fT)("Error creating support bundle"))}}}}}]);

//# sourceMappingURL=SupportBundlesCreate.d4740827551d34e43f23.js.map