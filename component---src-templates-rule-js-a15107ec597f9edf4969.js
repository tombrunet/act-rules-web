(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/1x4":function(e){e.exports=JSON.parse('{"4c31df":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"aaa1bf":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"2eb176":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"afb423":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"a1b64e":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ebe86a":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ab4d13":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"},{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"f51b46":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"}],"1ea59c":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"1a02b0":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"}],"f196ce":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"fd26cf":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ac7dc6":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ee13b5":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"d7ba54":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}]}')},"6vEM":function(e,t,a){},Yh6b:function(e,t,a){},"e+bk":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return S}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("M55E"),i=a.n(s),c=a("sWYD"),u=a("vrFN"),o=a("Bl7J"),m=a("ua6q"),d=function(e){var t=e.scrollLinkId,a=e.items,n=e.contributors,r=Object(m.getAcknowledgements)(a,n);return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:t,href:"#"+t},l.a.createElement("h2",null,"Acknowledgments")),r.map((function(e){var t=e.title,a=e.items;return a&&a.length?l.a.createElement("div",{className:"meta",key:t},l.a.createElement("h3",{className:"heading"},t),l.a.createElement("ul",null,a.map((function(e){var t=e.text,a=e.url;return l.a.createElement(f,{url:a,text:t,key:t})})))):null})))};function f(e){var t=e.text,a=e.url;return a?l.a.createElement("li",null,l.a.createElement("a",{className:"sc-item block",target:"_blank",rel:"noopener noreferrer",href:a},t)):l.a.createElement("li",null,t)}d.defaultProps={scrollLinkId:"",items:{authors:[],previous_authors:[],reviewers:[]},contributors:[]};var h=d,p=a("3OQw"),E=a("rbzX"),g=a("TSYQ"),v=a.n(g),b=a("lU33"),y=(a("6vEM"),function(e){var t=e.toc,a=Object(n.useState)(!0),r=a[0],s=a[1];return l.a.createElement("section",{className:v()("tableOfContents",{hide:!r})},l.a.createElement(b.a,{queries:{large:"(min-width: 1200px)"},onChange:function(e){return s(e.large)}}),l.a.createElement("span",{role:"heading","aria-level":"1",className:"heading"},"Table of Contents"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#glossary-listing"},"Glossary")),l.a.createElement("li",null,l.a.createElement("a",{href:"#useful-links"},"Useful Links")),l.a.createElement("li",null,l.a.createElement("a",{href:"#implementation-metrics"},"Implementations")),l.a.createElement("li",null,l.a.createElement("a",{href:"#acknowledgments"},"Acknowledgments"))))}),k=a("hmaj"),_=a("/1x4"),w=a("IQve"),N=a.n(w),T=a("t1PT"),I=function(e){var t=[];return Object.keys(T).forEach((function(a){T[a].forEach((function(n){n.slug!==e||t.includes(a)||t.push(a)}))})),t},M=a("rlp3"),S=(a("Yh6b"),t.default=function(e){var t=e.location,a=e.data,n=a.rule,s=a.allRules,m=a.allGlossary,d=a.site,f=n.html,g=n.frontmatter,v=n.tableOfContents,b=n.fields,w=b.slug,T=b.fastmatterAttributes,S=b.changelog,C=b.fileName.relativePath,L=JSON.parse(S),x=JSON.parse(T),H=new i.a.Converter,O=JSON.parse(d.siteMetadata.actRulesPackage),j=O.repository,q=O.config,A=O.contributors,R=N()(j.url),J=g.id,U="/testcases/"+J+"/rule-"+J+"-testcases-for-em-report-tool.json",F=R+"/edit/develop/_rules/"+C,P="/rules/"+J+"/changelog",z=R+"/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+"+J+"+",G=q["rule-format-metadata"]["input-aspects"],D=_[J],W=M.filter((function(e){return e.actMapping.filter((function(e){var t=e.ruleId,a=e.consistency;return t===J&&["consistent","partially-consistent"].includes(a)})).length>0}));return l.a.createElement(o.a,{location:t},l.a.createElement(u.a,{title:"Rule | "+g.name}),l.a.createElement("section",{className:"page-rule"},l.a.createElement("header",null,l.a.createElement("h1",{dangerouslySetInnerHTML:{__html:H.makeHtml(g.name)}})),l.a.createElement("ul",{className:"meta"},g.rule_type&&l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Type:"),l.a.createElement("span",null,g.rule_type)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Id:"),l.a.createElement("span",null," ",J)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Last modified:"),l.a.createElement("span",null," ",L&&L.length?Object(c.a)(new Date(L[0].date),"MMM dd, yyyy"):"-")),l.a.createElement("li",null,l.a.createElement(p.a,{accessibility_requirements:x.accessibility_requirements})),D&&D.length>0&&l.a.createElement("li",null,l.a.createElement(k.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Used in rules:")},itemTemplate:function(e){return l.a.createElement("li",{key:e.slug},l.a.createElement(r.Link,{to:"/"+e.slug},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:H.makeHtml(e.name)}})))},items:D})),g.input_aspects&&g.input_aspects.length&&l.a.createElement("li",null,l.a.createElement(k.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Input Aspects:")},itemTemplate:function(e){var t=G[e]?G[e]:G.default;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:t},e))},items:g.input_aspects})),g.input_rules&&g.input_rules.length&&l.a.createElement("li",null,l.a.createElement(k.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Input Rules:")},itemTemplate:function(e){var t=s.edges.find((function(t){return t.node.frontmatter.id===e})),a=t.node.fields.slug.replace("rules/",""),n=t.node.frontmatter.name;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:a,dangerouslySetInnerHTML:{__html:H.makeHtml(n)}}))},items:g.input_rules}))),l.a.createElement("hr",null),l.a.createElement("h2",{id:"description"},l.a.createElement("a",{href:"#description","aria-label":"description permalink",className:"anchor before"},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",viewBox:"0 0 16 16",width:"16"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Description"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:H.makeHtml(g.description)}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:f}}),l.a.createElement("hr",null),function(e,t){var a=I(e);a.includes("#outcome")||a.push("#outcome");var n=t.edges.filter((function(e){var t=e.node.frontmatter.key;return a.includes("#"+t)}));return n.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"glossary-listing",href:"#glossary-listing"},l.a.createElement("h2",null,"Glossary")),n.map((function(e){var t=e.node,a=t.frontmatter,n=t.html,r=a.key;return l.a.createElement("article",{key:t.id},l.a.createElement("a",{id:r,href:"#"+r},l.a.createElement("h3",null,a.title)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}))):null}(w,m),l.a.createElement("hr",null),l.a.createElement("a",{href:"#useful-links",id:"useful-links"},l.a.createElement("h2",null,"Useful Links")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:z},"Github issues related to this rule")),l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",href:P},"Changelog")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:F},"Propose a change to the rule")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:U},"Test case file for use in the WCAG-EM Report Tool"))),l.a.createElement("hr",null),l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"implementation-metrics",href:"#implementation-metrics"},l.a.createElement("h2",null,"Implementations")),l.a.createElement("p",null,"This section is not part of the official rule. It is populated dynamically and not accounted for in the change history or the last modified date. This section will not be included in the rule when it is published on the W3C website."),l.a.createElement(E.a,{implementers:W,ruleId:J})),l.a.createElement(h,{scrollLinkId:"acknowledgments",items:x.acknowledgments||x.acknowledgements,contributors:A})),l.a.createElement(y,{toc:v}))},"1207203083")},hmaj:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=function(e){var t=e.cls,a=e.headingTemplate,n=e.itemTemplate,r=e.items,s=void 0===r?[]:r;return l.a.createElement("div",{className:t},a(),(!s||!s.length)&&l.a.createElement("div",{className:"note"},"No Data"),s.length>0&&l.a.createElement("ul",null,s.map((function(e){return n(e)}))))};r.defaultProps={cls:"",heading:"",items:[]},t.a=r},ua6q:function(e,t){function a(e,t){var a=e[0],n=t[0],l=["funding","reviewers","previous_authors","authors"],r=l.indexOf(a),s=l.indexOf(n);return-1!==r||-1!==s?s-r:a.toUpperCase()>n.toUpperCase()?1:-1}e.exports={getAcknowledgements:function(e,t){return Object.entries(e).sort(a).map((function(e){return function(e,t,a){return t=t.map((function(e){return function(e,t){var a=t.find((function(t){var a=t.name;return e.toLowerCase()===a.toLowerCase()}));if(!a)return{text:e};return{text:a.name,url:a.url}}(e,a)})),{title:e=function(e){return e.split(/_/g).map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")}(e),items:t}}(e[0],e[1],t)}))}}}}]);
//# sourceMappingURL=component---src-templates-rule-js-a15107ec597f9edf4969.js.map