"use strict";(self.webpackChunkmangane_fe=self.webpackChunkmangane_fe||[]).push([[62],{1202:function(e,s,n){n.r(s);var t=n(1852),a=n(0),i=n(1844),u=n(1845),o=n(1868),r=n(1862),d=n(472),f=n(71),c=n(237),l=n(3),g=n(27),p=(0,i.vU)({heading:{id:"column.pins",defaultMessage:"Pinned posts"}});s.default=function(){var e=(0,u.Z)(),s=(0,l.TL)(),n=(0,r.UO)().username,i=(0,l.CG)((function(e){var s;return(null===(s=e.accounts.get(e.me))||void 0===s?void 0:s.username)||""})),m=(0,l.CG)((function(e){return e.status_lists.get("pins").items})),C=(0,l.CG)((function(e){return!!e.status_lists.get("pins").isLoading})),Z=(0,l.CG)((function(e){return!!e.status_lists.get("pins").next})),h=n.toLowerCase()===i.toLowerCase();return(0,a.useEffect)((function(){s((0,d.CL)())}),[]),h?(0,t.Z)(g.Z,{label:e.formatMessage(p.heading),transparent:!0,withHeader:!1},void 0,(0,t.Z)(c.Z,{statusIds:m,scrollKey:"pinned_statuses",hasMore:Z,isLoading:C,emptyMessage:(0,t.Z)(o.Z,{id:"pinned_statuses.none",defaultMessage:"No pins to show."})})):(0,t.Z)(f.Z,{})}}}]);
//# sourceMappingURL=pinned_statuses-fd0c8c054e9358ecf469.chunk.js.map