"use strict";(self.webpackChunkmangane_fe=self.webpackChunkmangane_fe||[]).push([[56],{1261:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var o,n,r,i=a(1852),s=a(1843),c=(a(1),a(10)),u=a.n(c),l=a(44),d=a(1844),f=a(1846),m=a(1868),g=a(6),p=a(1867),h=a(94),v=a(12),w=a(2),b=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),Z=(0,d.vU)({heading:{id:"column.migration",defaultMessage:"Account migration"},submit:{id:"migration.submit",defaultMessage:"Move followers"},moveAccountSuccess:{id:"migration.move_account.success",defaultMessage:"Account successfully moved."},moveAccountFail:{id:"migration.move_account.fail",defaultMessage:"Account migration failed."},acctFieldLabel:{id:"migration.fields.acct.label",defaultMessage:"Handle of the new account"},acctFieldPlaceholder:{id:"migration.fields.acct.placeholder",defaultMessage:"username@domain"},currentPasswordFieldLabel:{id:"migration.fields.confirm_password.label",defaultMessage:"Current password"}}),y=(0,g.$j)()(n=(0,f.ZP)((r=function(e){function t(){var t=e.apply(this,arguments)||this;return(0,s.Z)(t,"state",{targetAccount:"",password:"",isLoading:!1}),(0,s.Z)(t,"handleInputChange",(function(e){var a;t.setState(((a={})[e.target.name]=e.target.value,a))})),(0,s.Z)(t,"clearForm",(function(){t.setState({targetAccount:"",password:""})})),(0,s.Z)(t,"handleSubmit",(function(e){var a=t.state,o=a.targetAccount,n=a.password,r=t.props,i=r.dispatch,s=r.intl;return t.setState({isLoading:!0}),i((0,h.tj)(o,n)).then((function(){t.clearForm(),i(v.ZP.success(s.formatMessage(Z.moveAccountSuccess)))})).catch((function(e){i(v.ZP.error(s.formatMessage(Z.moveAccountFail)))})).then((function(){t.setState({isLoading:!1})}))})),t}return b(t,e),t.prototype.render=function(){var e=this.props.intl;return(0,i.Z)(w.sg,{label:e.formatMessage(Z.heading)},void 0,(0,i.Z)(w.l0,{onSubmit:this.handleSubmit},void 0,(0,i.Z)(w.xv,{theme:"muted"},void 0,(0,i.Z)(m.Z,{id:"migration.hint",defaultMessage:"This will move your followers to the new account. No other data will be moved. To perform migration, you need to {link} on your new account first.",values:{link:(0,i.Z)(p.rU,{className:"hover:underline text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-500",to:"/settings/aliases"},void 0,(0,i.Z)(m.Z,{id:"migration.hint.link",defaultMessage:"create an account alias"}))}})),(0,i.Z)(w.cw,{labelText:e.formatMessage(Z.acctFieldLabel)},void 0,(0,i.Z)(w.II,{name:"targetAccount",placeholder:e.formatMessage(Z.acctFieldPlaceholder),onChange:this.handleInputChange,value:this.state.targetAccount,required:!0})),(0,i.Z)(w.cw,{labelText:e.formatMessage(Z.currentPasswordFieldLabel)},void 0,(0,i.Z)(w.II,{type:"password",name:"password",onChange:this.handleInputChange,value:this.state.password,required:!0})),(0,i.Z)(w.iN,{},void 0,(0,i.Z)(w.zx,{theme:"primary",text:e.formatMessage(Z.submit),onClick:this.handleSubmit}))))},t}(l.ZP),(0,s.Z)(r,"propTypes",{dispatch:u().func.isRequired,intl:u().object.isRequired}),n=r))||n)||n}}]);
//# sourceMappingURL=migration-b89c5a4ba4ae557ba497.chunk.js.map