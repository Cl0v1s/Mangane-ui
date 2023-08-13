"use strict";(self.webpackChunkmangane_fe=self.webpackChunkmangane_fe||[]).push([[8],{1253:function(e,a,t){t.r(a);var n=t(1852),i=(t(1),t(344)),o=t(0),s=t(1844),r=t(1845),d=t(1862),c=t(35),u=t(1856),l=t(2),m=t(22),v=t(3),p=(0,s.vU)({title:{id:"admin.latest_accounts_panel.title",defaultMessage:"Latest Accounts"},expand:{id:"admin.latest_accounts_panel.more",defaultMessage:"Click to see {count} {count, plural, one {account} other {accounts}}"}});a.default=function(e){var a=e.limit,t=void 0===a?5:a,s=(0,r.Z)(),Z=(0,d.k6)(),g=(0,v.TL)(),f=(0,v.CG)((function(e){return e.admin.get("latestUsers").take(t)})),h=(0,v.CG)((function(e){return f.every((function(a){return!!e.accounts.getIn([a,"created_at"])}))})),_=(0,o.useState)(f.size),b=_[0],M=_[1];(0,o.useEffect)((function(){g((0,c.uh)(["local","active"],1,null,t)).then((function(e){M(e.count)})).catch((function(){}))}),[]);var w=f.sort(u.Z).reverse();return h&&(0,i.is)(f,w)&&f&&!f.isEmpty()?(0,n.Z)(l.$L,{title:s.formatMessage(p.title),onActionClick:function(){Z.push("/soapbox/admin/users")},actionTitle:s.formatMessage(p.expand,{count:b})},void 0,f.take(t).map((function(e){return(0,n.Z)(m.Z,{id:e,withRelationship:!1,withDate:!0},e)}))):null}},583:function(e,a,t){t.r(a),t.d(a,{default:function(){return ee}});var n=t(1852),i=t(1844),o=t(1845),s=t(1862),r=t(3),d=t(27),c=t(2),u=(0,i.vU)({dashboard:{id:"admin_nav.dashboard",defaultMessage:"Dashboard"},reports:{id:"admin_nav.reports",defaultMessage:"Reports"},waitlist:{id:"admin_nav.awaiting_approval",defaultMessage:"Waitlist"}}),l=function(){var e=(0,o.Z)(),a=(0,s.$B)(),t=(0,r.CG)((function(e){return e.admin.awaitingApproval.count()})),i=(0,r.CG)((function(e){return e.admin.openReports.count()})),d=[{name:"/soapbox/admin",text:e.formatMessage(u.dashboard),to:"/soapbox/admin"},{name:"/soapbox/admin/reports",text:e.formatMessage(u.reports),to:"/soapbox/admin/reports",count:i},{name:"/soapbox/admin/approval",text:e.formatMessage(u.waitlist),to:"/soapbox/admin/approval",count:t}];return(0,n.Z)(c.mQ,{items:d,activeItem:a.path})},m=(t(1),t(0)),v=t(35),p=t(20),Z=t(210),g=t(12),f=t(49),h=t(9),_=(0,i.vU)({approved:{id:"admin.awaiting_approval.approved_message",defaultMessage:"{acct} was approved!"},rejected:{id:"admin.awaiting_approval.rejected_message",defaultMessage:"{acct} was rejected."}}),b=(0,h.Tm)(),M=function(e){var a=e.accountId,i=(0,o.Z)(),s=(0,r.TL)(),d=(0,r.CG)((function(e){return b(e,a)})),c=(0,r.CG)((function(e){return e.admin.users.get(a)}));return d?(0,n.Z)("div",{className:"unapproved-account"},void 0,(0,n.Z)("div",{className:"unapproved-account__bio"},void 0,(0,n.Z)("div",{className:"unapproved-account__nickname"},void 0,"@",d.get("acct")),(0,n.Z)("blockquote",{className:"md"},void 0,(null==c?void 0:c.invite_request)||"")),(0,n.Z)("div",{className:"unapproved-account__actions"},void 0,(0,n.Z)(f.Z,{src:t(85),onClick:function(){s((0,v.Yh)([d.id])).then((function(){var e=i.formatMessage(_.approved,{acct:"@".concat(d.acct)});s(g.ZP.success(e))})).catch((function(){}))}}),(0,n.Z)(f.Z,{src:t(26),onClick:function(){s((0,Z.FI)(i,d.id,(function(){var e=i.formatMessage(_.rejected,{acct:"@".concat(d.acct)});s(g.ZP.info(e))})))}}))):null},w=(0,i.vU)({heading:{id:"column.admin.awaiting_approval",defaultMessage:"Awaiting Approval"},emptyMessage:{id:"admin.awaiting_approval.empty_message",defaultMessage:"There is nobody waiting for approval. When a new user signs up, you can review them here."}}),x=function(){var e=(0,o.Z)(),a=(0,r.TL)(),t=(0,r.CG)((function(e){return e.admin.awaitingApproval})),i=(0,m.useState)(!0),s=i[0],d=i[1];(0,m.useEffect)((function(){a((0,v.uh)(["local","need_approval"])).then((function(){return d(!1)})).catch((function(){}))}),[]);var c=s&&0===t.count();return(0,n.Z)(p.Z,{isLoading:s,showLoading:c,scrollKey:"awaiting-approval",emptyMessage:e.formatMessage(w.emptyMessage)},void 0,t.map((function(e){return(0,n.Z)(M,{accountId:e},e)})))},k=(t(42),t(23),t(1868)),C=t(1867),N=t(8),y=t(110),U=t.n(y),L=t(15),R=t(1056),I=t(98),T=(0,i.vU)({saved:{id:"admin.dashboard.settings_saved",defaultMessage:"Settings saved!"}}),A=function(){var e=(0,o.Z)(),a=(0,r.TL)(),t=(0,r.CG)((function(e){return(a=e.instance).approval_required&&a.registrations?"approval":a.registrations?"open":"closed";var a}));return(0,n.Z)(I.NA,{},void 0,(0,n.Z)(I.H_,{},void 0,(0,n.Z)(I.Ee,{label:(0,n.Z)(k.Z,{id:"admin.dashboard.registration_mode_label",defaultMessage:"Registrations"}),onChange:function(t){var n=function(e){return[{group:":pleroma",key:":instance",value:{open:[{tuple:[":registrations_open",!0]},{tuple:[":account_approval_required",!1]}],approval:[{tuple:[":registrations_open",!0]},{tuple:[":account_approval_required",!0]}],closed:[{tuple:[":registrations_open",!1]}]}[e]}]}(t.target.value);a((0,v.rF)(n)).then((function(){a(g.ZP.success(e.formatMessage(T.saved)))})).catch((function(){}))}},void 0,(0,n.Z)(I.Rk,{label:(0,n.Z)(k.Z,{id:"admin.dashboard.registration_mode.open_label",defaultMessage:"Open"}),hint:(0,n.Z)(k.Z,{id:"admin.dashboard.registration_mode.open_hint",defaultMessage:"Anyone can join."}),checked:"open"===t,value:"open"}),(0,n.Z)(I.Rk,{label:(0,n.Z)(k.Z,{id:"admin.dashboard.registration_mode.approval_label",defaultMessage:"Approval Required"}),hint:(0,n.Z)(k.Z,{id:"admin.dashboard.registration_mode.approval_hint",defaultMessage:"Users can sign up, but their account only gets activated when an admin approves it."}),checked:"approval"===t,value:"approval"}),(0,n.Z)(I.Rk,{label:(0,n.Z)(k.Z,{id:"admin.dashboard.registration_mode.closed_label",defaultMessage:"Closed"}),hint:(0,n.Z)(k.Z,{id:"admin.dashboard.registration_mode.closed_hint",defaultMessage:"Nobody can sign up. You can still invite people."}),checked:"closed"===t,value:"closed"}))))},j=function(e,a){var t=URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download",a),document.body.appendChild(n),n.click(),n.remove()},D=function(){var e=(0,r.TL)(),a=(0,r.CG)((function(e){return e.instance})),t=(0,r.hz)(),o=(0,r.Tr)(),s=(0,L.wy)(a.version),d=a.stats.get("user_count"),u=a.stats.get("status_count"),l=a.stats.get("domain_count"),v=a.pleroma.getIn(["stats","mau"]),p=d&&v?Math.round(v/d*100):null;return o?m.createElement(m.Fragment,null,(0,n.Z)("div",{className:"dashcounters mt-8"},void 0,(0,R.hj)(v)&&(0,n.Z)("div",{className:"dashcounter"},void 0,(0,n.Z)(c.xv,{align:"center",size:"2xl",weight:"medium"},void 0,(0,n.Z)(i.BK,{value:v})),(0,n.Z)(c.xv,{align:"center"},void 0,(0,n.Z)(k.Z,{id:"admin.dashcounters.mau_label",defaultMessage:"monthly active users"}))),(0,R.hj)(d)&&(0,n.Z)(C.rU,{className:"dashcounter",to:"/soapbox/admin/users"},void 0,(0,n.Z)(c.xv,{align:"center",size:"2xl",weight:"medium"},void 0,(0,n.Z)(i.BK,{value:d})),(0,n.Z)(c.xv,{align:"center"},void 0,(0,n.Z)(k.Z,{id:"admin.dashcounters.user_count_label",defaultMessage:"total users"}))),(0,R.hj)(p)&&(0,n.Z)("div",{className:"dashcounter"},void 0,(0,n.Z)(c.xv,{align:"center",size:"2xl",weight:"medium"},void 0,p,"%"),(0,n.Z)(c.xv,{align:"center"},void 0,(0,n.Z)(k.Z,{id:"admin.dashcounters.retention_label",defaultMessage:"user retention"}))),(0,R.hj)(u)&&(0,n.Z)(C.rU,{className:"dashcounter",to:"/timeline/local"},void 0,(0,n.Z)(c.xv,{align:"center",size:"2xl",weight:"medium"},void 0,(0,n.Z)(i.BK,{value:u})),(0,n.Z)(c.xv,{align:"center"},void 0,(0,n.Z)(k.Z,{id:"admin.dashcounters.status_count_label",defaultMessage:"posts"}))),(0,R.hj)(l)&&(0,n.Z)("div",{className:"dashcounter"},void 0,(0,n.Z)(c.xv,{align:"center",size:"2xl",weight:"medium"},void 0,(0,n.Z)(i.BK,{value:l})),(0,n.Z)(c.xv,{align:"center"},void 0,(0,n.Z)(k.Z,{id:"admin.dashcounters.domain_count_label",defaultMessage:"peers"})))),o.admin&&(0,n.Z)(A,{}),(0,n.Z)("div",{className:"dashwidgets"},void 0,(0,n.Z)("div",{className:"dashwidget"},void 0,(0,n.Z)("h4",{},void 0,(0,n.Z)(k.Z,{id:"admin.dashwidgets.software_header",defaultMessage:"Software"})),(0,n.Z)("ul",{},void 0,(0,n.Z)("li",{},void 0,U().displayName," ",(0,n.Z)("span",{className:"pull-right"},void 0,U().version)),(0,n.Z)("li",{},void 0,s.software+(s.build?"+".concat(s.build):"")," ",(0,n.Z)("span",{className:"pull-right"},void 0,s.version)))),t.emailList&&o.admin&&(0,n.Z)("div",{className:"dashwidget"},void 0,(0,n.Z)("h4",{},void 0,(0,n.Z)(k.Z,{id:"admin.dashwidgets.email_list_header",defaultMessage:"Email list"})),(0,n.Z)("ul",{},void 0,(0,n.Z)("li",{},void 0,(0,n.Z)("a",{href:"#",onClick:function(a){e((function(e,a){return(0,N.ZP)(a).get("/api/v1/pleroma/admin/email_list/subscribers.csv")})).then((function(e){j(e,"subscribers.csv")})).catch((function(){})),a.preventDefault()},target:"_blank"},void 0,"subscribers.csv")),(0,n.Z)("li",{},void 0,(0,n.Z)("a",{href:"#",onClick:function(a){e((function(e,a){return(0,N.ZP)(a).get("/api/v1/pleroma/admin/email_list/unsubscribers.csv")})).then((function(e){j(e,"unsubscribers.csv")})).catch((function(){})),a.preventDefault()},target:"_blank"},void 0,"unsubscribers.csv")),(0,n.Z)("li",{},void 0,(0,n.Z)("a",{href:"#",onClick:function(a){e((function(e,a){return(0,N.ZP)(a).get("/api/v1/pleroma/admin/email_list/combined.csv")})).then((function(e){j(e,"combined.csv")})).catch((function(){})),a.preventDefault()},target:"_blank"},void 0,"combined.csv")))))):null},S=t(76),G=t(133),P=t(119),z=t(339),E=t(331),q=t.n(E),B=t(1854),K=t(122),O=t(151),W=t(34),F=(0,i.vU)({viewStatus:{id:"admin.reports.actions.view_status",defaultMessage:"View post"},deleteStatus:{id:"admin.statuses.actions.delete_status",defaultMessage:"Delete post"}}),H=function(e){var a,i=e.status,s=(0,o.Z)(),d=(0,r.TL)(),c=function(e,a){d((0,B.h7)("MEDIA",{media:e,index:a}))},u=function(){var e=i.media_attachments.get(0);if(e&&!i.media_attachments.some((function(e){return"unknown"===e.type}))){if("video"===e.type){var a=e;return(0,n.Z)(O.Z,{fetchComponent:W.nk},void 0,(function(e){return(0,n.Z)(e,{preview:a.preview_url,blurhash:a.blurhash,src:a.url,alt:a.description,aspectRatio:a.meta.getIn(["original","aspect"]),width:239,height:110,inline:!0,sensitive:i.sensitive,onOpenVideo:q()})}))}if("audio"===e.type){var t=e;return(0,n.Z)(O.Z,{fetchComponent:W.Bb},void 0,(function(e){return(0,n.Z)(e,{src:t.url,alt:t.description,inline:!0,sensitive:i.sensitive,onOpenAudio:q()})}))}return(0,n.Z)(O.Z,{fetchComponent:W.ew},void 0,(function(e){return(0,n.Z)(e,{media:i.media_attachments,sensitive:i.sensitive,height:110,onOpenMedia:c})}))}return null}(),l=(a=i.getIn(["account","acct"]),[{text:s.formatMessage(F.viewStatus,{acct:"@".concat(a)}),to:"/@".concat(a,"/posts/").concat(i.id),icon:t(200)},{text:s.formatMessage(F.deleteStatus,{acct:"@".concat(a)}),action:function(){d((0,Z.Uj)(s,i.id))},icon:t(99),destructive:!0}]);return(0,n.Z)("div",{className:"admin-report__status"},void 0,(0,n.Z)("div",{className:"admin-report__status-content"},void 0,(0,n.Z)(K.Z,{status:i}),u),(0,n.Z)("div",{className:"admin-report__status-actions"},void 0,(0,n.Z)(P.Z,{items:l,src:t(291)})))},V=(0,i.vU)({reportClosed:{id:"admin.reports.report_closed_message",defaultMessage:"Report on @{name} was closed"},deactivateUser:{id:"admin.users.actions.deactivate_user",defaultMessage:"Deactivate @{name}"},deleteUser:{id:"admin.users.actions.delete_user",defaultMessage:"Delete @{name}"}}),Y=function(e){var a=e.report,i=(0,o.Z)(),s=(0,r.TL)(),d=(0,m.useState)(!1),u=d[0],l=d[1],p=a.account,f=a.target_account,h=function(){s((0,v.DI)([a.id])).then((function(){var e=i.formatMessage(V.reportClosed,{name:f.username});s(g.ZP.success(e))})).catch((function(){}))},_=[{text:i.formatMessage(V.deactivateUser,{name:f.username}),action:function(){var e=f.id;s((0,Z.yM)(i,e,(function(){return h()})))},icon:t(211)},{text:i.formatMessage(V.deleteUser,{name:f.username}),action:function(){var e=f.id;s((0,Z.rx)(i,e,(function(){return h()})))},icon:t(281)}],b=a.statuses,M=b.count(),w=f.acct,x=p.acct;return(0,n.Z)("div",{className:"admin-report"},a.id,(0,n.Z)("div",{className:"admin-report__avatar"},void 0,(0,n.Z)(G.ZP,{accountId:f.id,inline:!0},void 0,(0,n.Z)(C.rU,{to:"/@".concat(w),title:w},void 0,(0,n.Z)(S.Z,{account:f,size:32})))),(0,n.Z)("div",{className:"admin-report__content"},void 0,(0,n.Z)("h4",{className:"admin-report__title"},void 0,(0,n.Z)(k.Z,{id:"admin.reports.report_title",defaultMessage:"Report on {acct}",values:{acct:(0,n.Z)(G.ZP,{accountId:p.id,inline:!0},void 0,(0,n.Z)(C.rU,{to:"/@".concat(w),title:w},void 0,"@",w))}})),(0,n.Z)("div",{className:"admin-report__statuses"},void 0,M>0&&(0,n.Z)(z.Z,{headline:"Reported posts (".concat(M,")"),expanded:u,onToggle:function(e){l(e)}},void 0,b.map((function(e){return(0,n.Z)(H,{report:a,status:e},e.id)})))),(0,n.Z)("div",{className:"admin-report__quote"},void 0,(a.comment||"").length>0&&(0,n.Z)("blockquote",{className:"md",dangerouslySetInnerHTML:{__html:a.comment}}),(0,n.Z)("span",{className:"byline"},void 0,"—",(0,n.Z)(G.ZP,{accountId:p.id,inline:!0},void 0,(0,n.Z)(C.rU,{to:"/@".concat(x),title:x},void 0,"@",x))))),(0,n.Z)(c.Ug,{space:2,alignItems:"start"},void 0,(0,n.Z)(c.zx,{onClick:h},void 0,(0,n.Z)(k.Z,{id:"admin.reports.actions.close",defaultMessage:"Close"})),(0,n.Z)(P.Z,{items:_,src:t(291)})))},$=(0,i.vU)({heading:{id:"column.admin.reports",defaultMessage:"Reports"},modlog:{id:"column.admin.reports.menu.moderation_log",defaultMessage:"Moderation Log"},emptyMessage:{id:"admin.reports.empty_message",defaultMessage:"There are no open reports. If a user gets reported, they will show up here."}}),Q=(0,h.Fg)(),J=function(){var e=(0,o.Z)(),a=(0,r.TL)(),t=(0,m.useState)(!0),i=t[0],s=t[1],d=(0,r.CG)((function(e){return e.admin.openReports.toList().map((function(a){return Q(e,a)}))}));(0,m.useEffect)((function(){a((0,v.RC)()).then((function(){return s(!1)})).catch((function(){}))}),[]);var c=i&&0===d.count();return(0,n.Z)(p.Z,{isLoading:i,showLoading:c,scrollKey:"admin-reports",emptyMessage:e.formatMessage($.emptyMessage)},void 0,d.map((function(e){return e&&(0,n.Z)(Y,{report:e},null==e?void 0:e.id)})))},X=(0,i.vU)({heading:{id:"column.admin.dashboard",defaultMessage:"Dashboard"}}),ee=function(){var e=(0,o.Z)();return(0,r.Tr)()?(0,n.Z)(d.Z,{label:e.formatMessage(X.heading),withHeader:!1},void 0,(0,n.Z)(l,{}),(0,n.Z)(s.rs,{},void 0,(0,n.Z)(s.AW,{path:"/soapbox/admin",exact:!0,component:D}),(0,n.Z)(s.AW,{path:"/soapbox/admin/reports",exact:!0,component:J}),(0,n.Z)(s.AW,{path:"/soapbox/admin/approval",exact:!0,component:x}))):null}}}]);
//# sourceMappingURL=admin-faa6fb32cd37ba16b5c3.chunk.js.map