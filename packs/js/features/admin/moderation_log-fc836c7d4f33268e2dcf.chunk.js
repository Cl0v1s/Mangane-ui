"use strict";(self.webpackChunkmangane_fe=self.webpackChunkmangane_fe||[]).push([[9],{1243:function(e,n,a){a.r(n);var t=a(1852),o=(a(1),a(0)),i=a(1844),s=a(1845),d=a(35),r=a(20),u=a(3),m=a(27),g=(0,i.vU)({heading:{id:"column.admin.moderation_log",defaultMessage:"Moderation Log"},emptyMessage:{id:"admin.moderation_log.empty_message",defaultMessage:"You have not performed any moderation actions yet. When you do, a history will be shown here."}});n.default=function(){var e=(0,s.Z)(),n=(0,u.TL)(),a=(0,u.CG)((function(e){return e.admin_log.index.map((function(n){return e.admin_log.items.get(String(n))}))})),c=(0,u.CG)((function(e){return e.admin_log.total-e.admin_log.index.count()>0})),l=(0,o.useState)(!0),f=l[0],h=l[1],y=(0,o.useState)(0),v=y[0],_=y[1],p=f&&0===a.count();return(0,o.useEffect)((function(){n((0,d.dP)()).then((function(){h(!1),_(1)})).catch((function(){}))}),[]),(0,t.Z)(m.Z,{icon:"balance-scale",label:e.formatMessage(g.heading)},void 0,(0,t.Z)(r.Z,{isLoading:f,showLoading:p,scrollKey:"moderation-log",emptyMessage:e.formatMessage(g.emptyMessage),hasMore:c,onLoadMore:function(){var e=v+1;h(!0),n((0,d.dP)({page:e})).then((function(){h(!1),_(e)})).catch((function(){}))}},void 0,a.map((function(e){return e&&(0,t.Z)("div",{className:"logentry"},e.id,(0,t.Z)("div",{className:"logentry__message"},void 0,e.message),(0,t.Z)("div",{className:"logentry__timestamp"},void 0,(0,t.Z)(i.Ji,{value:new Date(1e3*e.time),hour12:!1,year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})))}))))}}}]);
//# sourceMappingURL=moderation_log-fc836c7d4f33268e2dcf.chunk.js.map