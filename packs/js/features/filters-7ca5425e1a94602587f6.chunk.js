"use strict";(self.webpackChunkmangane_fe=self.webpackChunkmangane_fe||[]).push([[40],{1212:function(e,t,a){a.r(t);var i=a(1852),s=(a(1),a(0)),l=a(1844),r=a(1845),n=a(1868),o=a(259),d=a(12),f=a(16),u=a(20),c=a(2),_=a(98),h=a(3),m=(0,l.vU)({heading:{id:"column.filters",defaultMessage:"Muted words"},subheading_add_new:{id:"column.filters.subheading_add_new",defaultMessage:"Add New Filter"},keyword:{id:"column.filters.keyword",defaultMessage:"Keyword or phrase"},expires:{id:"column.filters.expires",defaultMessage:"Expire after"},expires_hint:{id:"column.filters.expires_hint",defaultMessage:"Expiration dates are not currently supported"},home_timeline:{id:"column.filters.home_timeline",defaultMessage:"Home timeline"},public_timeline:{id:"column.filters.public_timeline",defaultMessage:"Public timeline"},notifications:{id:"column.filters.notifications",defaultMessage:"Notifications"},conversations:{id:"column.filters.conversations",defaultMessage:"Conversations"},drop_header:{id:"column.filters.drop_header",defaultMessage:"Drop instead of hide"},drop_hint:{id:"column.filters.drop_hint",defaultMessage:"Filtered posts will disappear irreversibly, even if filter is later removed"},whole_word_header:{id:"column.filters.whole_word_header",defaultMessage:"Whole word"},whole_word_hint:{id:"column.filters.whole_word_hint",defaultMessage:"When the keyword or phrase is alphanumeric only, it will only be applied if it matches the whole word"},add_new:{id:"column.filters.add_new",defaultMessage:"Add New Filter"},create_error:{id:"column.filters.create_error",defaultMessage:"Error adding filter"},delete_error:{id:"column.filters.delete_error",defaultMessage:"Error deleting filter"},subheading_filters:{id:"column.filters.subheading_filters",defaultMessage:"Current Filters"},delete:{id:"column.filters.delete",defaultMessage:"Delete"}});t.default=function(){var e=(0,r.Z)(),t=(0,h.TL)(),l=(0,h.CG)((function(e){return e.filters})),g=(0,s.useState)(""),Z=g[0],v=g[1],p=(0,s.useState)("")[0],M=(0,s.useState)(!0),w=M[0],b=M[1],k=(0,s.useState)(!1),x=k[0],N=k[1],y=(0,s.useState)(!1),C=y[0],S=y[1],F=(0,s.useState)(!1),X=F[0],D=F[1],E=(0,s.useState)(!1),H=E[0],I=E[1],K=(0,s.useState)(!0),O=K[0],P=K[1],T=function(a){t((0,o.kh)(a.currentTarget.dataset.value)).then((function(){return t((0,o.a$)())})).catch((function(){t(d.ZP.error(e.formatMessage(m.delete_error)))}))};(0,s.useEffect)((function(){t((0,o.a$)())}),[]);var W=(0,i.Z)(n.Z,{id:"empty_column.filters",defaultMessage:"You haven't created any muted words yet."});return(0,i.Z)(c.sg,{className:"filter-settings-panel",label:e.formatMessage(m.heading)},void 0,(0,i.Z)(c.Ol,{},void 0,(0,i.Z)(c.ll,{title:e.formatMessage(m.subheading_add_new)})),(0,i.Z)(c.l0,{onSubmit:function(a){a.preventDefault();var i=[];w&&i.push("home"),x&&i.push("public"),C&&i.push("notifications"),X&&i.push("thread"),t((0,o.cj)(Z,p,i,O,H)).then((function(){return t((0,o.a$)())})).catch((function(a){t(d.ZP.error(e.formatMessage(m.create_error)))}))}},void 0,(0,i.Z)(c.cw,{labelText:e.formatMessage(m.keyword)},void 0,(0,i.Z)(c.II,{required:!0,type:"text",name:"phrase",onChange:function(e){var t=e.target;return v(t.value)}})),(0,i.Z)(_.H_,{},void 0,(0,i.Z)(c.xv,{tag:"label"},void 0,(0,i.Z)(n.Z,{id:"filters.context_header",defaultMessage:"Filter contexts"})),(0,i.Z)(c.xv,{theme:"muted",size:"xs"},void 0,(0,i.Z)(n.Z,{id:"filters.context_hint",defaultMessage:"One or multiple contexts where the filter should apply"})),(0,i.Z)("div",{className:"two-col"},void 0,(0,i.Z)(_.XZ,{label:e.formatMessage(m.home_timeline),name:"home_timeline",checked:w,onChange:function(e){var t=e.target;return b(t.checked)}}),(0,i.Z)(_.XZ,{label:e.formatMessage(m.public_timeline),name:"public_timeline",checked:x,onChange:function(e){var t=e.target;return N(t.checked)}}),(0,i.Z)(_.XZ,{label:e.formatMessage(m.notifications),name:"notifications",checked:C,onChange:function(e){var t=e.target;return S(t.checked)}}),(0,i.Z)(_.XZ,{label:e.formatMessage(m.conversations),name:"conversations",checked:X,onChange:function(e){var t=e.target;return D(t.checked)}}))),(0,i.Z)(_.H_,{},void 0,(0,i.Z)(_.XZ,{label:e.formatMessage(m.drop_header),hint:e.formatMessage(m.drop_hint),name:"irreversible",checked:H,onChange:function(e){var t=e.target;return I(t.checked)}}),(0,i.Z)(_.XZ,{label:e.formatMessage(m.whole_word_header),hint:e.formatMessage(m.whole_word_hint),name:"whole_word",checked:O,onChange:function(e){var t=e.target;return P(t.checked)}})),(0,i.Z)(c.iN,{},void 0,(0,i.Z)(c.zx,{type:"submit",theme:"primary"},void 0,e.formatMessage(m.add_new)))),(0,i.Z)(c.Ol,{},void 0,(0,i.Z)(c.ll,{title:e.formatMessage(m.subheading_filters)})),(0,i.Z)(u.Z,{scrollKey:"filters",emptyMessage:W},void 0,l.map((function(t,s){return(0,i.Z)("div",{className:"filter__container"},s,(0,i.Z)("div",{className:"filter__details"},void 0,(0,i.Z)("div",{className:"filter__phrase"},void 0,(0,i.Z)("span",{className:"filter__list-label"},void 0,(0,i.Z)(n.Z,{id:"filters.filters_list_phrase_label",defaultMessage:"Keyword or phrase:"})),(0,i.Z)("span",{className:"filter__list-value"},void 0,t.phrase)),(0,i.Z)("div",{className:"filter__contexts"},void 0,(0,i.Z)("span",{className:"filter__list-label"},void 0,(0,i.Z)(n.Z,{id:"filters.filters_list_context_label",defaultMessage:"Filter contexts:"})),(0,i.Z)("span",{className:"filter__list-value"},void 0,t.context.map((function(e,t){return(0,i.Z)("span",{className:"context"},t,e)})))),(0,i.Z)("div",{className:"filter__details"},void 0,(0,i.Z)("span",{className:"filter__list-label"},void 0,(0,i.Z)(n.Z,{id:"filters.filters_list_details_label",defaultMessage:"Filter settings:"})),(0,i.Z)("span",{className:"filter__list-value"},void 0,t.irreversible?(0,i.Z)("span",{},void 0,(0,i.Z)(n.Z,{id:"filters.filters_list_drop",defaultMessage:"Drop"})):(0,i.Z)("span",{},void 0,(0,i.Z)(n.Z,{id:"filters.filters_list_hide",defaultMessage:"Hide"})),t.whole_word&&(0,i.Z)("span",{},void 0,(0,i.Z)(n.Z,{id:"filters.filters_list_whole-word",defaultMessage:"Whole word"}))))),(0,i.Z)("div",{className:"filter__delete",role:"button",tabIndex:0,onClick:T,"data-value":t.id,"aria-label":e.formatMessage(m.delete)},void 0,(0,i.Z)(f.Z,{className:"filter__delete-icon",src:a(26)}),(0,i.Z)("span",{className:"filter__delete-label"},void 0,(0,i.Z)(n.Z,{id:"filters.filters_list_delete",defaultMessage:"Delete"}))))}))))}}}]);
//# sourceMappingURL=filters-7ca5425e1a94602587f6.chunk.js.map