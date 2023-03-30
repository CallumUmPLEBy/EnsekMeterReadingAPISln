"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6034],{90237:(f,s,l)=>{l.r(s),l.d(s,{default:()=>_});var n=l(52423),e=l(68404),d=l(95148),m=l(26418),g=l(35645),r=l(72648),u=l(39904),E=l(45524);function _(){const t=(0,r.l4)(),a=(0,r.wW)(h);return e.createElement(E.J,{pageId:g.v.featureToggles.topnav?"alerting":"alert-home"},e.createElement("div",{className:a.grid},e.createElement(v,{className:a.ctaContainer}),e.createElement(c,{className:a.flowBlock},e.createElement("div",null,e.createElement("h3",null,"How it works"),e.createElement("ul",{className:a.list},e.createElement("li",null,"Grafana alerting periodically queries data sources and evaluates the condition defined in the alert rule"),e.createElement("li",null,"If the condition is breached, an alert instance fires"),e.createElement("li",null,"Firing instances are routed to notification policies based on matching labels"),e.createElement("li",null,"Notifications are sent out to the contact points specified in the notification policy"))),e.createElement(d.Z,{src:`public/img/alerting/at_a_glance_${t.name.toLowerCase()}.svg`,width:void 0,height:void 0})),e.createElement(c,{className:a.gettingStartedBlock},e.createElement("h3",null,"Get started"),e.createElement(m.Stack,{direction:"column",alignItems:"space-between"},e.createElement("ul",{className:a.list},e.createElement("li",null,e.createElement("strong",null,"Create an alert rule")," by adding queries and expressions from multiple data sources."),e.createElement("li",null,e.createElement("strong",null,"Add labels")," to your alert rules"," ",e.createElement("strong",null,"to connect them to notification policies")),e.createElement("li",null,e.createElement("strong",null,"Configure contact points")," to define where to send your notifications to."),e.createElement("li",null,e.createElement("strong",null,"Configure notification policies")," to route your alert instances to contact points.")),e.createElement("div",null,e.createElement(C,{href:"https://grafana.com/docs/grafana/latest/alerting/",title:"Read more in the Docs"})))),e.createElement(c,{className:a.videoBlock},e.createElement("iframe",{title:"Alerting - Introductory video",src:"https://player.vimeo.com/video/720001629?h=c6c1732f92",width:"960",height:"540",allow:"autoplay; fullscreen",allowFullScreen:!0,frameBorder:"0",style:{colorScheme:"light dark"}}))))}const h=t=>({grid:n.css`
    display: grid;
    grid-template-rows: min-content auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: ${t.spacing(2)};
  `,ctaContainer:n.css`
    grid-column: 1 / span 5;
  `,flowBlock:n.css`
    grid-column: 1 / span 5;

    display: flex;
    flex-wrap: wrap;
    gap: ${t.spacing(1)};

    & > div {
      flex: 2;
      min-width: 350px;
    }
    & > svg {
      flex: 3;
      min-width: 500px;
    }
  `,videoBlock:n.css`
    grid-column: 3 / span 3;
    grid-row: 3 / span 1;

    // Video required
    position: relative;
    padding: 56.25% 0 0 0; /* 16:9 */

    iframe {
      position: absolute;
      top: ${t.spacing(2)};
      left: ${t.spacing(2)};
      width: calc(100% - ${t.spacing(4)});
      height: calc(100% - ${t.spacing(4)});
      border: none;
    }
  `,gettingStartedBlock:n.css`
    grid-column: 1 / span 2;
    justify-content: space-between;
  `,list:n.css`
    margin: ${t.spacing(0,2)};
    & > li {
      margin-bottom: ${t.spacing(1)};
    }
  `});function v({className:t}){const a=(0,r.wW)(w);return e.createElement(c,{className:(0,n.cx)(a.ctaContainer,t)},e.createElement(p,{title:"Alert rules",description:"Define the condition that must be me before an alert rule fires",href:"/alerting/list",hrefText:"Manage alert rules"}),e.createElement("div",{className:a.separator}),e.createElement(p,{title:"Contact points",description:"Configure who receives notifications and how they are sent",href:"/alerting/notifications",hrefText:"Manage contact points"}),e.createElement("div",{className:a.separator}),e.createElement(p,{title:"Notification policies",description:"Configure how firing alert instances are routed to contact points",href:"/alerting/routes",hrefText:"Manage notification policies"}))}const w=t=>({ctaContainer:n.css`
    padding: ${t.spacing(4,2)};
    display: flex;
    gap: ${t.spacing(4)};
    justify-content: space-between;
    flex-wrap: wrap;

    ${t.breakpoints.down("lg")} {
      flex-direction: column;
    }
  `,separator:n.css`
    width: 1px;
    background-color: ${t.colors.border.medium};

    ${t.breakpoints.down("lg")} {
      display: none;
    }
  `});function p({title:t,description:a,href:o,hrefText:M}){const i=(0,r.wW)(x);return e.createElement("div",{className:i.container},e.createElement("h3",{className:i.title},t),e.createElement("div",{className:i.desc},a),e.createElement("div",{className:i.actionRow},e.createElement("a",{href:o,className:i.link},M)))}const x=t=>({container:n.css`
    flex: 1;
    min-width: 240px;
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-columns: min-content 1fr 1fr 1fr;
    grid-template-rows: min-content auto min-content;
  `,title:n.css`
    margin-bottom: 0;
    grid-column: 2 / span 3;
    grid-row: 1;
  `,desc:n.css`
    grid-column: 2 / span 3;
    grid-row: 2;
  `,actionRow:n.css`
    grid-column: 2 / span 3;
    grid-row: 3;
    max-width: 240px;
  `,link:n.css`
    color: ${t.colors.text.link};
  `});function c({children:t,className:a}){const o=(0,r.wW)(y);return e.createElement("div",{className:(0,n.cx)(o.box,a)},t)}const y=t=>({box:n.css`
    padding: ${t.spacing(2)};
    background-color: ${t.colors.background.secondary};
    border-radius: 3px;
    outline: 1px solid ${t.colors.border.strong};
  `});function C({href:t,title:a}){const o=(0,r.wW)(P);return e.createElement("a",{href:t,className:o.link,rel:"noreferrer"},a," ",e.createElement(u.J,{name:"angle-right",size:"xl"}))}const P=t=>({link:n.css`
    display: block;
    color: ${t.colors.text.link};
  `})},45524:(f,s,l)=>{l.d(s,{J:()=>d});var n=l(68404),e=l(79396);const d=({children:m,pageId:g,pageNav:r,isLoading:u})=>n.createElement(e.T,{pageNav:r,navId:g},n.createElement(e.T.Contents,{isLoading:u},m))}}]);

//# sourceMappingURL=AlertingHome.29d2ebc8aeb2823e17a8.js.map