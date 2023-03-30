"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4286],{65007:(S,f,t)=>{t.r(f),t.d(f,{AlertRuleListUnconnected:()=>T,default:()=>K});var e=t(68404),m=t(36635),u=t(37932),g=t(35645),d=t(14747),p=t(53217),h=t(31403),E=t(52081),A=t(97063),v=t(79396),y=t(45984),C=t(35029);function i({onDismiss:a}){return e.createElement(C.u,{title:"Adding an Alert",isOpen:!0,onDismiss:a,onClickBackdrop:a},e.createElement(E.wc,{spacing:"sm"},e.createElement("img",{src:"public/img/alert_howto_new.png",alt:""}),e.createElement("p",null,"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."),e.createElement("p",null,"Remember to save the dashboard to persist your alert rule changes.")))}var l=t(14677),r=t.n(l),s=t(72948),R=t(39904);const I=({rule:a,search:n,onTogglePause:o})=>{const P=`${a.url}?editPanel=${a.panelId}&tab=alert`,c=(0,e.useCallback)(O=>e.createElement(r(),{key:O,highlightClassName:"highlight-search-match",textToHighlight:O,searchWords:[n]}),[n]);return e.createElement(s.Z,null,e.createElement(s.Z.Heading,null,c(a.name)),e.createElement(s.Z.Figure,null,e.createElement(R.J,{size:"xl",name:a.stateIcon,className:`alert-rule-item__icon ${a.stateClass}`})),e.createElement(s.Z.Meta,null,e.createElement("span",{key:"state"},e.createElement("span",{key:"text",className:`${a.stateClass}`},c(a.stateText)," "),"for ",a.stateAge),a.info?c(a.info):null),e.createElement(s.Z.Actions,null,e.createElement(h.zx,{key:"play",variant:"secondary",icon:a.state==="paused"?"play":"pause",onClick:o},a.state==="paused"?"Resume":"Pause"),e.createElement(h.Qj,{key:"edit",variant:"secondary",href:P,icon:"cog"},"Edit alert")))};var L=t(45253);const U="grafana.legacyalerting.unifiedalertingpromo",D=()=>e.createElement(L.b,{severity:"warning",title:"Grafana legacy alerting is going away soon"},e.createElement("p",null,"You are using Grafana legacy alerting, it has been deprecated and will be removed in the next major version of Grafana.",e.createElement("br",null),"We encourage you to upgrade to the new Grafana Alerting experience."),e.createElement("p",null,"See"," ",e.createElement("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/"},"What\u2019s New with Grafana Alerting")," ","to learn more about what\u2018s new or learn"," ",e.createElement("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/"},"how to enable the new Grafana Alerting feature"),"."));var N=t(69119),M=t(11626);const x=a=>a.searchQuery,F=a=>{const n=new RegExp(a.alertRules.searchQuery,"i");return a.alertRules.items.filter(o=>n.test(o.name)||n.test(o.stateText)||n.test(o.info))},G=(a,n)=>a.notificationChannel.id===n?a.notificationChannel:null;function w(a){return{alertRules:F(a),search:x(a.alertRules),isLoading:a.alertRules.isLoading}}const $={getAlertRulesAsync:N.Au,setSearchQuery:M.ql,togglePauseAlertRule:N.en},W=(0,m.connect)(w,$);class T extends e.PureComponent{constructor(){super(...arguments),this.stateFilters=[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}],this.onStateFilterChanged=n=>{u.E1.partial({state:n.value})},this.onOpenHowTo=()=>{A.Z.publish(new y.Dn({component:i}))},this.onSearchQueryChange=n=>{this.props.setSearchQuery(n)},this.onTogglePause=n=>{this.props.togglePauseAlertRule(n.id,{paused:n.state!=="paused"})},this.alertStateFilterOption=({text:n,value:o})=>e.createElement("option",{key:o,value:o},n)}componentDidMount(){this.fetchRules()}componentDidUpdate(n){n.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){return this.props.queryParams.state??"all"}render(){const{alertRules:n,search:o,isLoading:P}=this.props;return e.createElement(v.T,{navId:"alert-list"},e.createElement(v.T.Contents,{isLoading:P},e.createElement("div",{className:"page-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(d.H,{placeholder:"Search alerts",value:o,onChange:this.onSearchQueryChange})),e.createElement("div",{className:"gf-form"},e.createElement("label",{className:"gf-form-label",htmlFor:"alert-state-filter"},"States"),e.createElement("div",{className:"width-13"},e.createElement(p.Ph,{inputId:"alert-state-filter",options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()}))),e.createElement("div",{className:"page-action-bar__spacer"}),g.v.unifiedAlertingEnabled&&e.createElement(h.Qj,{variant:"primary",href:"alerting/ng/new"},"Add NG Alert"),e.createElement(h.zx,{variant:"secondary",onClick:this.onOpenHowTo},"How to add an alert")),e.createElement(D,null),e.createElement(E.wc,{spacing:"none"},n.map(c=>e.createElement(I,{rule:c,key:c.id,search:o,onTogglePause:()=>this.onTogglePause(c)})))))}}const K=W(T)},69119:(S,f,t)=>{t.d(f,{Au:()=>p,C2:()=>E,c1:()=>v,en:()=>h,fA:()=>y,fg:()=>A,tk:()=>C});var e=t(54899),m=t(37932),u=t(659),g=t(60499),d=t(11626);function p(i){return async l=>{l((0,d.gz)());const r=await(0,e.i)().get("/api/alerts",i);l((0,d.Oc)(r))}}function h(i,l){return async r=>{await(0,e.i)().post(`/api/alerts/${i}/pause`,l);const s=m.E1.getSearchObject().state||"all";r(p({state:s.toString()}))}}function E(i){return async l=>{try{await(0,e.i)().post("/api/alert-notifications",i),l((0,u.$l)((0,g.AT)("Notification created"))),m.E1.push("/alerting/notifications")}catch(r){(0,e.kW)(r)&&l((0,u.$l)((0,g.t_)(r.data.error)))}}}function A(i){return async l=>{try{await(0,e.i)().put(`/api/alert-notifications/${i.id}`,i),l((0,u.$l)((0,g.AT)("Notification updated")))}catch(r){(0,e.kW)(r)&&l((0,u.$l)((0,g.t_)(r.data.error)))}}}function v(i){return async(l,r)=>{const s=r().notificationChannel.notificationChannel;await(0,e.i)().post("/api/alert-notifications/test",{id:s.id,...i})}}function y(){return async i=>{const r=(await(0,e.i)().get("/api/alert-notifiers")).sort((s,R)=>s.name>R.name?1:-1);i((0,d.T2)(r))}}function C(i){return async l=>{await l(y());const r=await(0,e.i)().get(`/api/alert-notifications/${i}`);l((0,d.K)(r))}}}}]);

//# sourceMappingURL=AlertRuleList.46b3cd9265b5eddfc7f8.js.map