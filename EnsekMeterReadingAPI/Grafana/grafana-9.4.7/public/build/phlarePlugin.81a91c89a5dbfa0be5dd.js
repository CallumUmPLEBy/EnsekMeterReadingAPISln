"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9704],{75885:(B,b,o)=>{o.r(b),o.d(b,{plugin:()=>Ne});var v=o(7238),r=o(68404),x=o(12006),p=o(14835),m=o(59481);const M=e=>{const{options:t,onOptionsChange:n}=e;return r.createElement(r.Fragment,null,r.createElement(x.E,{defaultUrl:"http://localhost:4100",dataSourceConfig:t,showAccessOptions:!1,onChange:n}),r.createElement("h3",{className:"page-heading"},"Querying"),r.createElement("div",{className:"gf-form-group"},r.createElement("div",{className:"gf-form-inline"},r.createElement("div",{className:"gf-form"},r.createElement(p.LegacyForms.FormField,{label:"Minimal step",labelWidth:13,inputEl:r.createElement(p.LegacyForms.Input,{className:"width-6",value:t.jsonData.minStep,spellCheck:!1,placeholder:"15s",onChange:a=>{n({...t,jsonData:{...t.jsonData,minStep:a.currentTarget.value}})},validationEvents:{[m.JU.onBlur]:[(0,m.FE)(/^$|^\d+(ms|[Mwdhmsy])$/,"Value is not valid, you can use number with time unit specifier: y, M, w, d, h, m, s")]}}),tooltip:"Minimal step used for metric query. Should be the same or higher as the scrape interval setting in the Phlare database."})))))};var z=o(82897),O=o(22350),L=o(40400),D=o(19974);const Q={labelSelector:"{}",queryType:"both",groupBy:[]};var g=o(52423),y=o(72648);function C(e){const t=(0,y.wW)((0,r.useCallback)(n=>W(n,e),[e]));return r.createElement("div",{className:t.root},e.children)}const W=(e,t)=>({root:(0,g.css)({display:"flex",flexDirection:t.direction??"row",flexWrap:t.wrap??!0?"wrap":void 0,alignItems:t.alignItems,gap:e.spacing(t.gap??2),flexGrow:t.flexGrow})}),S=({children:e,stackProps:t})=>{const n=(0,y.wW)(U);return r.createElement("div",{className:n.root},r.createElement(C,{gap:2,...t},e))},U=e=>({root:(0,g.css)({padding:e.spacing(1),backgroundColor:e.colors.background.secondary,borderRadius:e.shape.borderRadius(1)})}),$=({children:e})=>r.createElement(C,{gap:.5,direction:"column"},e);var j=o(56021),K=o(9405);const G={id:"phlareql",extensions:[".phlareql"],aliases:["phlare","phlareql"],mimetypes:[],def:{language:{ignoreCase:!1,defaultToken:"",tokenPostfix:".phlareql",keywords:[],operators:[],symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,tokenizer:{root:[[/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,"tag"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d+/,"number"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],clauses:[[/[^(,)]/,"tag"],[/\)/,"identifier","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"]]}},languageConfiguration:{wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,brackets:[["{","}"]],autoClosingPairs:[{open:"{",close:"}"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{}}}};class V{constructor(){this.triggerCharacters=["{",",","[","(","=","~"," ",'"'],this.labels={}}provideCompletionItems(t,n){if(!(this.monaco&&this.editor))throw new Error("provideCompletionItems called before CompletionProvider was initialized");if(this.editor.getModel()?.id!==t.id)return{suggestions:[]};const{range:a,offset:s}=Y(this.monaco,t,n),l=X(t.getValue(),s),i=this.getCompletions(l),f=i.length.toString().length;return{suggestions:i.map((c,d)=>({kind:Z(c.type,this.monaco),label:c.label,insertText:c.insertText,sortText:d.toString().padStart(f,"0"),range:a}))}}setSeries(t){this.labels=t.reduce((n,a)=>{const s=a.labels.reduce((l,i)=>(l[i.name]=l[i.name]||new Set,l[i.name].add(i.value),l),{});for(const l of Object.keys(s))n[l]=new Set([...n[l]||[],...s[l]]);return n},{})}getCompletions(t){if(!Object.keys(this.labels).length)return[];switch(t.type){case"UNKNOWN":return[];case"EMPTY":return Object.keys(this.labels).map(n=>({label:n,insertText:`{${n}="`,type:"LABEL_NAME"}));case"IN_LABEL_NAME":return Object.keys(this.labels).map(n=>({label:n,insertText:n,type:"LABEL_NAME"}));case"IN_LABEL_VALUE":return Array.from(this.labels[t.labelName].values()).map(n=>({label:n,insertText:t.betweenQuotes?n:`"${n}"`,type:"LABEL_VALUE"}));default:throw new Error(`Unexpected situation ${t}`)}}}function Z(e,t){switch(e){case"LABEL_NAME":return t.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return t.languages.CompletionItemKind.EnumMember;default:throw new Error(`Unexpected CompletionType: ${e}`)}}const N=/[a-zA-Z_][a-zA-Z0-9_]*/,A=/[^"]*/,H=new RegExp(`(${N.source})="(${A.source})"`,"g"),k=new RegExp(`(${N.source})=("?)${A.source}$`),J=new RegExp(/[{,]\s*[a-zA-Z0-9_]*$/);function X(e,t){if(e==="")return{type:"EMPTY"};const n=e.matchAll(H),a=Array.from(n).reduce((i,f)=>{const[u,c,d]=f[1];return i.push({name:c,value:d}),i},[]),s=e.substring(0,t).match(k);return s?{type:"IN_LABEL_VALUE",labelName:s[1],betweenQuotes:!!s[2],otherLabels:a}:e.substring(0,t).match(J)?{type:"IN_LABEL_NAME",otherLabels:a}:{type:"UNKNOWN"}}function Y(e,t,n){const a=t.getWordAtPosition(n),s=a!=null?e.Range.lift({startLineNumber:n.lineNumber,endLineNumber:n.lineNumber,startColumn:a.startColumn,endColumn:a.endColumn}):e.Range.fromPositions(n),l={column:n.column,lineNumber:n.lineNumber};return{offset:t.getOffsetAt(l),range:s}}function q(e){const t=ee(e.series),n=(0,y.wW)(ne),a=(0,j.Z)(e.onRunQuery),s=(0,r.useRef)(null);return r.createElement("div",{className:n.wrapper,ref:s},r.createElement(K.p,{value:e.value,language:h,onBlur:e.onChange,containerStyles:n.queryField,monacoOptions:{folding:!1,fontSize:14,lineNumbers:"off",overviewRulerLanes:0,renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0},scrollBeyondLastLine:!1,wordWrap:"on",padding:{top:5,bottom:6}},onBeforeEditorMount:te,onEditorDidMount:(l,i)=>{t(l,i);const f=()=>{const u=s.current;if(u!==null){const c=l.getContentHeight();u.style.height=`${c+_}px`,u.style.width="100%";const d=u.clientWidth;l.layout({width:d,height:c})}};l.onDidContentSizeChange(f),f(),l.addCommand(i.KeyMod.Shift|i.KeyCode.Enter,()=>{a.current(l.getValue())})}}))}const _=2;function ee(e){const t=(0,r.useRef)(new V);(0,r.useEffect)(()=>{e&&t.current.setSeries(e)},[e]);const n=(0,r.useRef)(null);return(0,r.useEffect)(()=>()=>{n.current?.()},[]),(a,s)=>{t.current.editor=a,t.current.monaco=s;const{dispose:l}=s.languages.registerCompletionItemProvider(h,t.current);n.current=l}}let T=!1;const h="phlareql";function te(e){if(T===!1){T=!0;const{aliases:t,extensions:n,mimetypes:a,def:s}=G;e.languages.register({id:h,aliases:t,extensions:n,mimetypes:a}),e.languages.setMonarchTokensProvider(h,s.language),e.languages.setLanguageConfiguration(h,s.languageConfiguration)}}const ne=()=>({queryField:g.css`
      flex: 1;
      // Not exactly sure but without this the editor doe not shrink after resizing (so you can make it bigger but not
      // smaller). At the same time this does not actually make the editor 100px because it has flex 1 so I assume
      // this should sort of act as a flex-basis (but flex-basis does not work for this). So yeah CSS magic.
      width: 100px;
    `,wrapper:g.css`
      display: flex;
      flex: 1;
      border: 1px solid rgba(36, 41, 46, 0.3);
      border-radius: 2px;
    `});var re=o(86253),w=o(39904),ae=o(2594),oe=o(53217),se=o(61970),le=o(61860),ie=o(24799),ce=o(7804);const R=e=>{const{label:t,optional:n,tooltip:a,children:s,width:l,...i}=e,f=(0,y.l4)(),u=ue(f,l),c=i?.htmlFor||se?.getChildId(s),d=r.createElement(r.Fragment,null,r.createElement("label",{className:u.label,htmlFor:c},t,n&&r.createElement("span",{className:u.optional}," - optional"),a&&r.createElement(le.u,{placement:"top",content:a,theme:"info"},r.createElement(w.J,{name:"info-circle",size:"sm",className:u.icon}))),r.createElement("span",{className:u.space}));return r.createElement("div",{className:u.root},r.createElement(ie.g,{className:u.field,label:d,...i},s))},ue=(0,ce.B)((e,t)=>({space:(0,g.css)({paddingRight:e.spacing(0),paddingBottom:e.spacing(.5)}),root:(0,g.css)({minWidth:e.spacing(t??0)}),label:(0,g.css)({fontSize:12,fontWeight:e.typography.fontWeightMedium}),optional:(0,g.css)({fontStyle:"italic",color:e.colors.text.secondary}),field:(0,g.css)({marginBottom:0}),icon:(0,g.css)({color:e.colors.text.secondary,marginLeft:e.spacing(1),":hover":{color:e.colors.text.primary}})})),I=[{value:"metrics",label:"Metric",description:"Return aggregated metrics"},{value:"profile",label:"Profile",description:"Return profile"},{value:"both",label:"Both",description:"Return both metric and profile data"}];function ge(e){return e===L.zj.Explore?I:I.filter(t=>t.value!=="both")}function de(e){let t=[];if(e){const n=e.flatMap(a=>a.labels.map(s=>s.name));t=Array.from(new Set(n)).map(a=>({label:a,value:a}))}return t}function fe({query:e,onQueryChange:t,app:n,series:a}){const[s,l]=(0,re.Z)(!1),i=(0,y.wW)(pe),f=ge(n),u=de(a);return r.createElement(C,{gap:0,direction:"column"},r.createElement("div",{className:i.header,onClick:l,title:"Click to edit options"},r.createElement("div",{className:i.toggle},r.createElement(w.J,{name:s?"angle-down":"angle-right"})),r.createElement("h6",{className:i.title},"Options"),!s&&r.createElement("div",{className:i.description},[`Type: ${e.queryType}`,e.groupBy?.length?`Group by: ${e.groupBy.join(", ")}`:void 0].filter(c=>c).map((c,d)=>r.createElement("span",{key:d},c)))),s&&r.createElement("div",{className:i.body},r.createElement(R,{label:"Query Type"},r.createElement(ae.S,{options:f,value:e.queryType,onChange:c=>t({...e,queryType:c})})),r.createElement(R,{label:"Group by",tooltip:r.createElement(r.Fragment,null,"Used to group the metric result by a specific label or set of labels. Does not apply to profile query.")},r.createElement(oe.NU,{placeholder:"Label",value:e.groupBy,allowCustomValue:!0,options:u,onChange:c=>{const d=c.map(E=>E.value);t({...e,groupBy:d})}}))))}const pe=e=>({switchLabel:(0,g.css)({color:e.colors.text.secondary,cursor:"pointer",fontSize:e.typography.bodySmall.fontSize,"&:hover":{color:e.colors.text.primary}}),header:(0,g.css)({display:"flex",cursor:"pointer",alignItems:"baseline",color:e.colors.text.primary,"&:hover":{background:e.colors.emphasize(e.colors.background.primary,.03)}}),title:(0,g.css)({flexGrow:1,overflow:"hidden",fontSize:e.typography.bodySmall.fontSize,fontWeight:e.typography.fontWeightMedium,margin:0}),description:(0,g.css)({color:e.colors.text.secondary,fontSize:e.typography.bodySmall.fontSize,paddingLeft:e.spacing(2),gap:e.spacing(2),display:"flex"}),body:(0,g.css)({display:"flex",paddingTop:e.spacing(2),gap:e.spacing(2),flexWrap:"wrap"}),toggle:(0,g.css)({color:e.colors.text.secondary,marginRight:`${e.spacing(1)}`})});function me(e){const t=he(e.datasource);function n(c,d){if(d.length===0)return;const E=d[d.length-1].value;if(typeof E!="string")throw new Error("id is not string");e.onChange({...e.query,profileTypeId:E})}function a(c){e.onChange({...e.query,labelSelector:c})}function s(c){e.onChange({...e.query,labelSelector:c}),e.onRunQuery()}const l=(0,O.Z)(()=>e.datasource.getSeries(),[e.datasource]),i=ye(t),f=be(t,e.query.profileTypeId);let u=F(e.query,e.app);return r.createElement($,null,r.createElement(S,{stackProps:{wrap:!1,gap:1}},r.createElement(D.O,{onChange:n,options:i,buttonProps:{variant:"secondary"}},f),r.createElement(q,{value:u.labelSelector,onChange:a,onRunQuery:s,series:l.value})),r.createElement(S,null,r.createElement(fe,{query:u,onQueryChange:e.onChange,app:e.app,series:l.value})))}function ye(e){return(0,r.useMemo)(()=>{let t=new Map;for(let n of e)t.has(n.name)||t.set(n.name,{label:n.name,value:n.ID,children:[]}),t.get(n.name)?.children?.push({label:n.sample_type,value:n.ID});return Array.from(t.values())},[e])}function he(e){const[t,n]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{const a=await e.getProfileTypes();n(a)})()},[e]),t}function be(e,t){return(0,r.useMemo)(()=>{if(!e)return"Loading";const n=e.find(a=>a.ID===t);return n?n.name+" - "+n.sample_type:"Select a profile type"},[t,e])}function F(e,t){let n=(0,z.defaults)(e,Q);return t!==L.zj.Explore&&n.queryType==="both"&&(n.queryType="profile"),n}var Ee=o(57706),ve=o.n(Ee),xe=o(53786),Ce=o(22069),P=o(51649);class Le extends Ce.CK{constructor(t){super(t)}query(t){const n=t.targets.filter(a=>a.profileTypeId).map(a=>a.labelSelector===""?{...a,labelSelector:"{}"}:F(a,t.app));return n.length?super.query({...t,targets:n}):(0,xe.of)({data:[]})}async getProfileTypes(){return await super.getResource("profileTypes")}async getSeries(){return await super.getResource("series",{matchers:["{}"]})}async getLabelNames(){return await super.getResource("labelNames")}async importFromAbstractQueries(t){return t.map(n=>this.importFromAbstractQuery(n))}importFromAbstractQuery(t){return{refId:t.refId,labelSelector:(0,P.PL)(t),queryType:"both",profileTypeId:"",groupBy:[""]}}async exportToAbstractQueries(t){return t.map(n=>this.exportToAbstractQuery(n))}exportToAbstractQuery(t){const n=t.labelSelector;if(!n||n.length===0)return{refId:t.refId,labelMatchers:[]};const a=ve().tokenize(n,Se);return{refId:t.refId,labelMatchers:(0,P.UO)(a)}}}const Se={"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},punctuation:/[{}(),.]/},Ne=new v.hf(Le).setConfigEditor(M).setQueryEditor(me)},56021:(B,b,o)=>{o.d(b,{Z:()=>x});var v=o(68404),r=function(p){var m=(0,v.useRef)(p);return m.current=p,m};const x=r}}]);

//# sourceMappingURL=phlarePlugin.81a91c89a5dbfa0be5dd.js.map