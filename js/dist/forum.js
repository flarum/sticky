module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=16)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,o){t.exports=flarum.core.compat["components/EventPost"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,o){t.exports=flarum.core.compat["components/IndexPage"]},function(t,o){t.exports=flarum.core.compat["utils/string"]},function(t,o){t.exports=flarum.core.compat["common/extend"]},function(t,o){t.exports=flarum.core.compat["common/utils/classList"]},function(t,o){t.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(t,o,n){"use strict";n.r(o);var e=n(0),r=n.n(e),c=n(4),s=n.n(c),i=n(2),a=n.n(i);function u(t,o){return(u=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}var p=n(6),f=function(t){var o,n;function e(){return t.apply(this,arguments)||this}n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,u(o,n);var r=e.prototype;return r.icon=function(){return"fas fa-thumbtack"},r.descriptionKey=function(){return this.attrs.post.content().sticky?"flarum-sticky.forum.post_stream.discussion_stickied_text":"flarum-sticky.forum.post_stream.discussion_unstickied_text"},e}(n.n(p).a),l=n(1),d=n(7),y=n.n(d);var k=n(5),b=n.n(k),x=n(3),v=n.n(x),_=n(8),h=n.n(_);var S=n(9),O=n.n(S),j=n(10),P=n.n(j),g=n(11),D=n.n(g),I=n(12);var L=n(13),M=n(14),A=n.n(M),C=n(15),N=n.n(C);r.a.initializers.add("flarum-sticky",(function(){r.a.postComponents.discussionStickied=f,a.a.prototype.isSticky=s.a.attribute("isSticky"),a.a.prototype.canSticky=s.a.attribute("canSticky"),Object(l.extend)(a.a.prototype,"badges",(function(t){this.isSticky()&&t.add("sticky",y.a.component({type:"sticky",label:app.translator.trans("flarum-sticky.forum.badge.sticky_tooltip"),icon:"fas fa-thumbtack"}),10)})),Object(l.extend)(b.a,"moderationControls",(function(t,o){o.canSticky()&&t.add("sticky",h.a.component({icon:"fas fa-thumbtack",onclick:this.stickyAction.bind(o)},app.translator.trans(o.isSticky()?"flarum-sticky.forum.discussion_controls.unsticky_button":"flarum-sticky.forum.discussion_controls.sticky_button")))})),b.a.stickyAction=function(){this.save({isSticky:!this.isSticky()}).then((function(){app.current.matches(v.a)&&app.current.get("stream").update(),m.redraw()}))},Object(l.extend)(O.a.prototype,"requestParams",(function(t){(app.current.matches(D.a)||app.current.matches(v.a))&&t.include.push("firstPost")})),Object(l.extend)(P.a.prototype,"infoItems",(function(t){var o=this.attrs.discussion;if(o.isSticky()&&!this.attrs.params.q&&!o.lastReadPostNumber()){var n=o.firstPost();if(n){var e=Object(I.truncate)(n.contentPlain(),175);t.add("excerpt",m("div",null,e),-100)}}})),Object(L.extend)(N.a.prototype,"elementAttrs",(function(t){this.attrs.discussion.isSticky()&&(t.className=A()(t.className,"DiscussionListItem--sticky"))}))}))}]);
//# sourceMappingURL=forum.js.map