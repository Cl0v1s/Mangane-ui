"use strict";(self.webpackChunkmangane_fe=self.webpackChunkmangane_fe||[]).push([[63],{1191:function(e,t,a){a.r(t);var i=a(1852),o=a(0),s=a(1844),l=a(1845),n=a(1868),r=a(1867),d=a(14),u=a(48),c=a(25),f=a(120),b=a(2),m=a(3),h=a(912),p=a(105),v=(0,s.vU)({title:{id:"column.public",defaultMessage:"Explore"}});t.default=function(){var e=(0,l.Z)(),t=(0,m.TL)(),a=(0,m.rV)(),s=(0,m.Tr)(),Z=a.getIn(["public","other","onlyMedia"]),y=(0,m.CG)((function(e){return e.instance.title})),g=a.get("showExplanationBox"),_=(0,m.hz)(),x=s&&_.bubbleTimeline&&a.getIn(["public","bubble"]),M=o.useMemo((function(){return x?"bubble":"public"}),[x]),k=o.useCallback((function(){t((0,d.oz)(["showExplanationBox"],!1))}),[t]),w=o.useCallback((function(e){t(x?(0,c.eq)({maxId:e,onlyMedia:Z}):(0,c.a1)({maxId:e,onlyMedia:Z}))}),[x,t,Z]),T=o.useCallback((function(){return t(x?(0,c.eq)({onlyMedia:Z}):(0,c.a1)({onlyMedia:Z}))}),[x,t,Z]);return(0,o.useEffect)((function(){if(!x){t((0,c.a1)({onlyMedia:Z}));var e=t((0,u._B)({onlyMedia:Z}));return function(){e()}}t((0,c.eq)({onlyMedia:Z}))}),[Z,x]),(0,i.Z)(b.sg,{label:e.formatMessage(v.title),transparent:!0,withHeader:!1},void 0,(0,i.Z)(h.Z,{}),g&&(0,i.Z)("div",{className:"mb-4"},void 0,(0,i.Z)(b.xv,{size:"lg",weight:"bold",className:"mb-2"},void 0,(0,i.Z)(n.Z,{id:"fediverse_tab.explanation_box.title",defaultMessage:"What is the Fediverse?"})),(0,i.Z)(n.Z,{id:"fediverse_tab.explanation_box.explanation",defaultMessage:'{site_title} is part of the Fediverse, a social network made up of thousands of independent social media sites (aka "servers"). The posts you see here are from 3rd-party servers. You have the freedom to engage with them, or to block any server you don\'t like. Pay attention to the full username after the second @ symbol to know which server a post is from. To see only {site_title} posts, visit {local}.',values:{site_title:y,local:(0,i.Z)(r.rU,{to:"/timeline/local"},void 0,(0,i.Z)(n.Z,{id:"empty_column.home.local_tab",defaultMessage:"the {site_title} tab",values:{site_title:y}}))}}),x&&(0,i.Z)("p",{className:"mt-2"},void 0,(0,i.Z)(n.Z,{id:"fediverse_tab.explanation_box.bubble",defaultMessage:"This timeline shows you all the statuses published on a selection of other instances curated by your moderators."})),(0,i.Z)("div",{className:"text-right"},void 0,(0,i.Z)(b.zx,{theme:"link",onClick:k},void 0,(0,i.Z)(n.Z,{id:"fediverse_tab.explanation_box.dismiss",defaultMessage:"Don\\'t show again"})))),(0,i.Z)(f.Z,{onRefresh:T},void 0,(0,i.Z)(p.Z,{scrollKey:"".concat(M,"_timeline"),timelineId:"".concat(M).concat(Z?":media":""),onLoadMore:w,emptyMessage:(0,i.Z)(n.Z,{id:"empty_column.public",defaultMessage:"There is nothing here! Write something publicly, or manually follow users from other servers to fill it up"}),divideType:"space"})))}}}]);
//# sourceMappingURL=public_timeline-49cfb3c5001a0ffef300.chunk.js.map