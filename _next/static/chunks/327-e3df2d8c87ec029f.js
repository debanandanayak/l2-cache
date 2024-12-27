"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8775:(e,r,n)=>{n.d(r,{Ke:()=>C,R6:()=>y,UC:()=>k,bL:()=>D,l9:()=>M,z3:()=>m});var t=n(9754),o=n(9156),a=n(7686),l=n(6035),i=n(7465),u=n(2594),d=n(8890),s=n(2472),c=n(2503),p=n(6658),f="Collapsible",[v,m]=(0,a.A)(f),[h,g]=v(f),w=t.forwardRef((e,r)=>{let{__scopeCollapsible:n,open:o,defaultOpen:a,disabled:i,onOpenChange:u,...s}=e,[f=!1,v]=(0,l.i)({prop:o,defaultProp:a,onChange:u});return(0,p.jsx)(h,{scope:n,disabled:i,contentId:(0,c.B)(),open:f,onOpenToggle:t.useCallback(()=>v(e=>!e),[v]),children:(0,p.jsx)(d.sG.div,{"data-state":j(f),"data-disabled":i?"":void 0,...s,ref:r})})});w.displayName=f;var x="CollapsibleTrigger",y=t.forwardRef((e,r)=>{let{__scopeCollapsible:n,...t}=e,a=g(x,n);return(0,p.jsx)(d.sG.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":j(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...t,ref:r,onClick:(0,o.m)(e.onClick,a.onOpenToggle)})});y.displayName=x;var b="CollapsibleContent",C=t.forwardRef((e,r)=>{let{forceMount:n,...t}=e,o=g(b,e.__scopeCollapsible);return(0,p.jsx)(s.C,{present:n||o.open,children:e=>{let{present:n}=e;return(0,p.jsx)(R,{...t,ref:r,present:n})}})});C.displayName=b;var R=t.forwardRef((e,r)=>{let{__scopeCollapsible:n,present:o,children:a,...l}=e,s=g(b,n),[c,f]=t.useState(o),v=t.useRef(null),m=(0,u.s)(r,v),h=t.useRef(0),w=h.current,x=t.useRef(0),y=x.current,C=s.open||c,R=t.useRef(C),D=t.useRef(void 0);return t.useEffect(()=>{let e=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,i.N)(()=>{let e=v.current;if(e){D.current=D.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let r=e.getBoundingClientRect();h.current=r.height,x.current=r.width,R.current||(e.style.transitionDuration=D.current.transitionDuration,e.style.animationName=D.current.animationName),f(o)}},[s.open,o]),(0,p.jsx)(d.sG.div,{"data-state":j(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!C,...l,ref:m,style:{"--radix-collapsible-content-height":w?"".concat(w,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:C&&a})});function j(e){return e?"open":"closed"}var D=w,M=y,k=C},5189:(e,r,n)=>{n.d(r,{jH:()=>a});var t=n(9754);n(6658);var o=t.createContext(void 0);function a(e){let r=t.useContext(o);return e||r||"ltr"}},1761:(e,r,n)=>{n.d(r,{H_:()=>e8,UC:()=>e6,YJ:()=>e5,q7:()=>e9,VF:()=>e4,JU:()=>e7,ZL:()=>e1,z6:()=>e2,hN:()=>e3,bL:()=>e$,wv:()=>re,Pb:()=>rr,G5:()=>rt,ZP:()=>rn,l9:()=>e0});var t=n(9754),o=n(9156),a=n(2594),l=n(7686),i=n(6035),u=n(8890),d=n(313),s=n(5189),c=n(3805),p=n(8202),f=n(3296),v=n(2503),m=n(7401),h=n(9412),g=n(2472),w=n(6743),x=n(7816),y=n(7652),b=n(7386),C=n(4656),R=n(6658),j=["Enter"," "],D=["ArrowUp","PageDown","End"],M=["ArrowDown","PageUp","Home",...D],k={ltr:[...j,"ArrowRight"],rtl:[...j,"ArrowLeft"]},_={ltr:["ArrowLeft"],rtl:["ArrowRight"]},I="Menu",[P,E,N]=(0,d.N)(I),[T,A]=(0,l.A)(I,[N,m.Bk,w.RG]),F=(0,m.Bk)(),S=(0,w.RG)(),[O,L]=T(I),[G,K]=T(I),B=e=>{let{__scopeMenu:r,open:n=!1,children:o,dir:a,onOpenChange:l,modal:i=!0}=e,u=F(r),[d,c]=t.useState(null),p=t.useRef(!1),f=(0,y.c)(l),v=(0,s.jH)(a);return t.useEffect(()=>{let e=()=>{p.current=!0,document.addEventListener("pointerdown",r,{capture:!0,once:!0}),document.addEventListener("pointermove",r,{capture:!0,once:!0})},r=()=>p.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",r,{capture:!0}),document.removeEventListener("pointermove",r,{capture:!0})}},[]),(0,R.jsx)(m.bL,{...u,children:(0,R.jsx)(O,{scope:r,open:n,onOpenChange:f,content:d,onContentChange:c,children:(0,R.jsx)(G,{scope:r,onClose:t.useCallback(()=>f(!1),[f]),isUsingKeyboardRef:p,dir:v,modal:i,children:o})})})};B.displayName=I;var U=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e,o=F(n);return(0,R.jsx)(m.Mz,{...o,...t,ref:r})});U.displayName="MenuAnchor";var V="MenuPortal",[q,H]=T(V,{forceMount:void 0}),X=e=>{let{__scopeMenu:r,forceMount:n,children:t,container:o}=e,a=L(V,r);return(0,R.jsx)(q,{scope:r,forceMount:n,children:(0,R.jsx)(g.C,{present:n||a.open,children:(0,R.jsx)(h.Z,{asChild:!0,container:o,children:t})})})};X.displayName=V;var z="MenuContent",[Z,Y]=T(z),J=t.forwardRef((e,r)=>{let n=H(z,e.__scopeMenu),{forceMount:t=n.forceMount,...o}=e,a=L(z,e.__scopeMenu),l=K(z,e.__scopeMenu);return(0,R.jsx)(P.Provider,{scope:e.__scopeMenu,children:(0,R.jsx)(g.C,{present:t||a.open,children:(0,R.jsx)(P.Slot,{scope:e.__scopeMenu,children:l.modal?(0,R.jsx)(W,{...o,ref:r}):(0,R.jsx)(Q,{...o,ref:r})})})})}),W=t.forwardRef((e,r)=>{let n=L(z,e.__scopeMenu),l=t.useRef(null),i=(0,a.s)(r,l);return t.useEffect(()=>{let e=l.current;if(e)return(0,b.Eq)(e)},[]),(0,R.jsx)($,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),Q=t.forwardRef((e,r)=>{let n=L(z,e.__scopeMenu);return(0,R.jsx)($,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),$=t.forwardRef((e,r)=>{let{__scopeMenu:n,loop:l=!1,trapFocus:i,onOpenAutoFocus:u,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:b,onDismiss:j,disableOutsideScroll:k,..._}=e,I=L(z,n),P=K(z,n),N=F(n),T=S(n),A=E(n),[O,G]=t.useState(null),B=t.useRef(null),U=(0,a.s)(r,B,I.onContentChange),V=t.useRef(0),q=t.useRef(""),H=t.useRef(0),X=t.useRef(null),Y=t.useRef("right"),J=t.useRef(0),W=k?C.A:t.Fragment,Q=k?{as:x.DX,allowPinchZoom:!0}:void 0,$=e=>{var r,n;let t=q.current+e,o=A().filter(e=>!e.disabled),a=document.activeElement,l=null===(r=o.find(e=>e.ref.current===a))||void 0===r?void 0:r.textValue,i=function(e,r,n){var t;let o=r.length>1&&Array.from(r).every(e=>e===r[0])?r[0]:r,a=(t=Math.max(n?e.indexOf(n):-1,0),e.map((r,n)=>e[(t+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let l=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}(o.map(e=>e.textValue),t,l),u=null===(n=o.find(e=>e.textValue===i))||void 0===n?void 0:n.ref.current;!function e(r){q.current=r,window.clearTimeout(V.current),""!==r&&(V.current=window.setTimeout(()=>e(""),1e3))}(t),u&&setTimeout(()=>u.focus())};t.useEffect(()=>()=>window.clearTimeout(V.current),[]),(0,p.Oh)();let ee=t.useCallback(e=>{var r,n;return Y.current===(null===(r=X.current)||void 0===r?void 0:r.side)&&function(e,r){return!!r&&function(e,r){let{x:n,y:t}=e,o=!1;for(let e=0,a=r.length-1;e<r.length;a=e++){let l=r[e].x,i=r[e].y,u=r[a].x,d=r[a].y;i>t!=d>t&&n<(u-l)*(t-i)/(d-i)+l&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)}(e,null===(n=X.current)||void 0===n?void 0:n.area)},[]);return(0,R.jsx)(Z,{scope:n,searchRef:q,onItemEnter:t.useCallback(e=>{ee(e)&&e.preventDefault()},[ee]),onItemLeave:t.useCallback(e=>{var r;ee(e)||(null===(r=B.current)||void 0===r||r.focus(),G(null))},[ee]),onTriggerLeave:t.useCallback(e=>{ee(e)&&e.preventDefault()},[ee]),pointerGraceTimerRef:H,onPointerGraceIntentChange:t.useCallback(e=>{X.current=e},[]),children:(0,R.jsx)(W,{...Q,children:(0,R.jsx)(f.n,{asChild:!0,trapped:i,onMountAutoFocus:(0,o.m)(u,e=>{var r;e.preventDefault(),null===(r=B.current)||void 0===r||r.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:(0,R.jsx)(c.qW,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:b,onDismiss:j,children:(0,R.jsx)(w.bL,{asChild:!0,...T,dir:P.dir,orientation:"vertical",loop:l,currentTabStopId:O,onCurrentTabStopIdChange:G,onEntryFocus:(0,o.m)(v,e=>{P.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,R.jsx)(m.UC,{role:"menu","aria-orientation":"vertical","data-state":ek(I.open),"data-radix-menu-content":"",dir:P.dir,...N,..._,ref:U,style:{outline:"none",..._.style},onKeyDown:(0,o.m)(_.onKeyDown,e=>{let r=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,t=1===e.key.length;r&&("Tab"===e.key&&e.preventDefault(),!n&&t&&$(e.key));let o=B.current;if(e.target!==o||!M.includes(e.key))return;e.preventDefault();let a=A().filter(e=>!e.disabled).map(e=>e.ref.current);D.includes(e.key)&&a.reverse(),function(e){let r=document.activeElement;for(let n of e)if(n===r||(n.focus(),document.activeElement!==r))return}(a)}),onBlur:(0,o.m)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(V.current),q.current="")}),onPointerMove:(0,o.m)(e.onPointerMove,eP(e=>{let r=e.target,n=J.current!==e.clientX;if(e.currentTarget.contains(r)&&n){let r=e.clientX>J.current?"right":"left";Y.current=r,J.current=e.clientX}}))})})})})})})});J.displayName=z;var ee=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,R.jsx)(u.sG.div,{role:"group",...t,ref:r})});ee.displayName="MenuGroup";var er=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,R.jsx)(u.sG.div,{...t,ref:r})});er.displayName="MenuLabel";var en="MenuItem",et="menu.itemSelect",eo=t.forwardRef((e,r)=>{let{disabled:n=!1,onSelect:l,...i}=e,d=t.useRef(null),s=K(en,e.__scopeMenu),c=Y(en,e.__scopeMenu),p=(0,a.s)(r,d),f=t.useRef(!1);return(0,R.jsx)(ea,{...i,ref:p,disabled:n,onClick:(0,o.m)(e.onClick,()=>{let e=d.current;if(!n&&e){let r=new CustomEvent(et,{bubbles:!0,cancelable:!0});e.addEventListener(et,e=>null==l?void 0:l(e),{once:!0}),(0,u.hO)(e,r),r.defaultPrevented?f.current=!1:s.onClose()}}),onPointerDown:r=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,r),f.current=!0},onPointerUp:(0,o.m)(e.onPointerUp,e=>{var r;f.current||null===(r=e.currentTarget)||void 0===r||r.click()}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{let r=""!==c.searchRef.current;!n&&(!r||" "!==e.key)&&j.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});eo.displayName=en;var ea=t.forwardRef((e,r)=>{let{__scopeMenu:n,disabled:l=!1,textValue:i,...d}=e,s=Y(en,n),c=S(n),p=t.useRef(null),f=(0,a.s)(r,p),[v,m]=t.useState(!1),[h,g]=t.useState("");return t.useEffect(()=>{let e=p.current;if(e){var r;g((null!==(r=e.textContent)&&void 0!==r?r:"").trim())}},[d.children]),(0,R.jsx)(P.ItemSlot,{scope:n,disabled:l,textValue:null!=i?i:h,children:(0,R.jsx)(w.q7,{asChild:!0,...c,focusable:!l,children:(0,R.jsx)(u.sG.div,{role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0,...d,ref:f,onPointerMove:(0,o.m)(e.onPointerMove,eP(e=>{l?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.m)(e.onPointerLeave,eP(e=>s.onItemLeave(e))),onFocus:(0,o.m)(e.onFocus,()=>m(!0)),onBlur:(0,o.m)(e.onBlur,()=>m(!1))})})})}),el=t.forwardRef((e,r)=>{let{checked:n=!1,onCheckedChange:t,...a}=e;return(0,R.jsx)(ev,{scope:e.__scopeMenu,checked:n,children:(0,R.jsx)(eo,{role:"menuitemcheckbox","aria-checked":e_(n)?"mixed":n,...a,ref:r,"data-state":eI(n),onSelect:(0,o.m)(a.onSelect,()=>null==t?void 0:t(!!e_(n)||!n),{checkForDefaultPrevented:!1})})})});el.displayName="MenuCheckboxItem";var ei="MenuRadioGroup",[eu,ed]=T(ei,{value:void 0,onValueChange:()=>{}}),es=t.forwardRef((e,r)=>{let{value:n,onValueChange:t,...o}=e,a=(0,y.c)(t);return(0,R.jsx)(eu,{scope:e.__scopeMenu,value:n,onValueChange:a,children:(0,R.jsx)(ee,{...o,ref:r})})});es.displayName=ei;var ec="MenuRadioItem",ep=t.forwardRef((e,r)=>{let{value:n,...t}=e,a=ed(ec,e.__scopeMenu),l=n===a.value;return(0,R.jsx)(ev,{scope:e.__scopeMenu,checked:l,children:(0,R.jsx)(eo,{role:"menuitemradio","aria-checked":l,...t,ref:r,"data-state":eI(l),onSelect:(0,o.m)(t.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,n)},{checkForDefaultPrevented:!1})})})});ep.displayName=ec;var ef="MenuItemIndicator",[ev,em]=T(ef,{checked:!1}),eh=t.forwardRef((e,r)=>{let{__scopeMenu:n,forceMount:t,...o}=e,a=em(ef,n);return(0,R.jsx)(g.C,{present:t||e_(a.checked)||!0===a.checked,children:(0,R.jsx)(u.sG.span,{...o,ref:r,"data-state":eI(a.checked)})})});eh.displayName=ef;var eg=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,R.jsx)(u.sG.div,{role:"separator","aria-orientation":"horizontal",...t,ref:r})});eg.displayName="MenuSeparator";var ew=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e,o=F(n);return(0,R.jsx)(m.i3,{...o,...t,ref:r})});ew.displayName="MenuArrow";var ex="MenuSub",[ey,eb]=T(ex),eC=e=>{let{__scopeMenu:r,children:n,open:o=!1,onOpenChange:a}=e,l=L(ex,r),i=F(r),[u,d]=t.useState(null),[s,c]=t.useState(null),p=(0,y.c)(a);return t.useEffect(()=>(!1===l.open&&p(!1),()=>p(!1)),[l.open,p]),(0,R.jsx)(m.bL,{...i,children:(0,R.jsx)(O,{scope:r,open:o,onOpenChange:p,content:s,onContentChange:c,children:(0,R.jsx)(ey,{scope:r,contentId:(0,v.B)(),triggerId:(0,v.B)(),trigger:u,onTriggerChange:d,children:n})})})};eC.displayName=ex;var eR="MenuSubTrigger",ej=t.forwardRef((e,r)=>{let n=L(eR,e.__scopeMenu),l=K(eR,e.__scopeMenu),i=eb(eR,e.__scopeMenu),u=Y(eR,e.__scopeMenu),d=t.useRef(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:c}=u,p={__scopeMenu:e.__scopeMenu},f=t.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return t.useEffect(()=>f,[f]),t.useEffect(()=>{let e=s.current;return()=>{window.clearTimeout(e),c(null)}},[s,c]),(0,R.jsx)(U,{asChild:!0,...p,children:(0,R.jsx)(ea,{id:i.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":i.contentId,"data-state":ek(n.open),...e,ref:(0,a.t)(r,i.onTriggerChange),onClick:r=>{var t;null===(t=e.onClick)||void 0===t||t.call(e,r),e.disabled||r.defaultPrevented||(r.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,o.m)(e.onPointerMove,eP(r=>{u.onItemEnter(r),r.defaultPrevented||e.disabled||n.open||d.current||(u.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:(0,o.m)(e.onPointerLeave,eP(e=>{var r,t;f();let o=null===(r=n.content)||void 0===r?void 0:r.getBoundingClientRect();if(o){let r=null===(t=n.content)||void 0===t?void 0:t.dataset.side,a="right"===r,l=o[a?"left":"right"],i=o[a?"right":"left"];u.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:l,y:o.top},{x:i,y:o.top},{x:i,y:o.bottom},{x:l,y:o.bottom}],side:r}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>u.onPointerGraceIntentChange(null),300)}else{if(u.onTriggerLeave(e),e.defaultPrevented)return;u.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.m)(e.onKeyDown,r=>{let t=""!==u.searchRef.current;if(!e.disabled&&(!t||" "!==r.key)&&k[l.dir].includes(r.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),r.preventDefault()}})})})});ej.displayName=eR;var eD="MenuSubContent",eM=t.forwardRef((e,r)=>{let n=H(z,e.__scopeMenu),{forceMount:l=n.forceMount,...i}=e,u=L(z,e.__scopeMenu),d=K(z,e.__scopeMenu),s=eb(eD,e.__scopeMenu),c=t.useRef(null),p=(0,a.s)(r,c);return(0,R.jsx)(P.Provider,{scope:e.__scopeMenu,children:(0,R.jsx)(g.C,{present:l||u.open,children:(0,R.jsx)(P.Slot,{scope:e.__scopeMenu,children:(0,R.jsx)($,{id:s.contentId,"aria-labelledby":s.triggerId,...i,ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var r;d.isUsingKeyboardRef.current&&(null===(r=c.current)||void 0===r||r.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>{e.target!==s.trigger&&u.onOpenChange(!1)}),onEscapeKeyDown:(0,o.m)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{let r=e.currentTarget.contains(e.target),n=_[d.dir].includes(e.key);if(r&&n){var t;u.onOpenChange(!1),null===(t=s.trigger)||void 0===t||t.focus(),e.preventDefault()}})})})})})});function ek(e){return e?"open":"closed"}function e_(e){return"indeterminate"===e}function eI(e){return e_(e)?"indeterminate":e?"checked":"unchecked"}function eP(e){return r=>"mouse"===r.pointerType?e(r):void 0}eM.displayName=eD;var eE="DropdownMenu",[eN,eT]=(0,l.A)(eE,[A]),eA=A(),[eF,eS]=eN(eE),eO=e=>{let{__scopeDropdownMenu:r,children:n,dir:o,open:a,defaultOpen:l,onOpenChange:u,modal:d=!0}=e,s=eA(r),c=t.useRef(null),[p=!1,f]=(0,i.i)({prop:a,defaultProp:l,onChange:u});return(0,R.jsx)(eF,{scope:r,triggerId:(0,v.B)(),triggerRef:c,contentId:(0,v.B)(),open:p,onOpenChange:f,onOpenToggle:t.useCallback(()=>f(e=>!e),[f]),modal:d,children:(0,R.jsx)(B,{...s,open:p,onOpenChange:f,dir:o,modal:d,children:n})})};eO.displayName=eE;var eL="DropdownMenuTrigger",eG=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,disabled:t=!1,...l}=e,i=eS(eL,n),d=eA(n);return(0,R.jsx)(U,{asChild:!0,...d,children:(0,R.jsx)(u.sG.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...l,ref:(0,a.t)(r,i.triggerRef),onPointerDown:(0,o.m)(e.onPointerDown,e=>{t||0!==e.button||!1!==e.ctrlKey||(i.onOpenToggle(),i.open||e.preventDefault())}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{!t&&(["Enter"," "].includes(e.key)&&i.onOpenToggle(),"ArrowDown"===e.key&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});eG.displayName=eL;var eK=e=>{let{__scopeDropdownMenu:r,...n}=e,t=eA(r);return(0,R.jsx)(X,{...t,...n})};eK.displayName="DropdownMenuPortal";var eB="DropdownMenuContent",eU=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...a}=e,l=eS(eB,n),i=eA(n),u=t.useRef(!1);return(0,R.jsx)(J,{id:l.contentId,"aria-labelledby":l.triggerId,...i,...a,ref:r,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var r;u.current||null===(r=l.triggerRef.current)||void 0===r||r.focus(),u.current=!1,e.preventDefault()}),onInteractOutside:(0,o.m)(e.onInteractOutside,e=>{let r=e.detail.originalEvent,n=0===r.button&&!0===r.ctrlKey,t=2===r.button||n;(!l.modal||t)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});eU.displayName=eB;var eV=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(ee,{...o,...t,ref:r})});eV.displayName="DropdownMenuGroup";var eq=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(er,{...o,...t,ref:r})});eq.displayName="DropdownMenuLabel";var eH=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(eo,{...o,...t,ref:r})});eH.displayName="DropdownMenuItem";var eX=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(el,{...o,...t,ref:r})});eX.displayName="DropdownMenuCheckboxItem";var ez=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(es,{...o,...t,ref:r})});ez.displayName="DropdownMenuRadioGroup";var eZ=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(ep,{...o,...t,ref:r})});eZ.displayName="DropdownMenuRadioItem";var eY=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(eh,{...o,...t,ref:r})});eY.displayName="DropdownMenuItemIndicator";var eJ=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(eg,{...o,...t,ref:r})});eJ.displayName="DropdownMenuSeparator",t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(ew,{...o,...t,ref:r})}).displayName="DropdownMenuArrow";var eW=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(ej,{...o,...t,ref:r})});eW.displayName="DropdownMenuSubTrigger";var eQ=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=eA(n);return(0,R.jsx)(eM,{...o,...t,ref:r,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});eQ.displayName="DropdownMenuSubContent";var e$=eO,e0=eG,e1=eK,e6=eU,e5=eV,e7=eq,e9=eH,e8=eX,e2=ez,e3=eZ,e4=eY,re=eJ,rr=e=>{let{__scopeDropdownMenu:r,children:n,open:t,onOpenChange:o,defaultOpen:a}=e,l=eA(r),[u=!1,d]=(0,i.i)({prop:t,defaultProp:a,onChange:o});return(0,R.jsx)(eC,{...l,open:u,onOpenChange:d,children:n})},rn=eW,rt=eQ},6743:(e,r,n)=>{n.d(r,{RG:()=>b,bL:()=>P,q7:()=>E});var t=n(9754),o=n(9156),a=n(313),l=n(2594),i=n(7686),u=n(2503),d=n(8890),s=n(7652),c=n(6035),p=n(5189),f=n(6658),v="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[g,w,x]=(0,a.N)(h),[y,b]=(0,i.A)(h,[x]),[C,R]=y(h),j=t.forwardRef((e,r)=>(0,f.jsx)(g.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,f.jsx)(g.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,f.jsx)(D,{...e,ref:r})})}));j.displayName=h;var D=t.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:n,orientation:a,loop:i=!1,dir:u,currentTabStopId:h,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:x,onEntryFocus:y,preventScrollOnEntryFocus:b=!1,...R}=e,j=t.useRef(null),D=(0,l.s)(r,j),M=(0,p.jH)(u),[k=null,_]=(0,c.i)({prop:h,defaultProp:g,onChange:x}),[P,E]=t.useState(!1),N=(0,s.c)(y),T=w(n),A=t.useRef(!1),[F,S]=t.useState(0);return t.useEffect(()=>{let e=j.current;if(e)return e.addEventListener(v,N),()=>e.removeEventListener(v,N)},[N]),(0,f.jsx)(C,{scope:n,orientation:a,dir:M,loop:i,currentTabStopId:k,onItemFocus:t.useCallback(e=>_(e),[_]),onItemShiftTab:t.useCallback(()=>E(!0),[]),onFocusableItemAdd:t.useCallback(()=>S(e=>e+1),[]),onFocusableItemRemove:t.useCallback(()=>S(e=>e-1),[]),children:(0,f.jsx)(d.sG.div,{tabIndex:P||0===F?-1:0,"data-orientation":a,...R,ref:D,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{A.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let r=!A.current;if(e.target===e.currentTarget&&r&&!P){let r=new CustomEvent(v,m);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){let e=T().filter(e=>e.focusable);I([e.find(e=>e.active),e.find(e=>e.id===k),...e].filter(Boolean).map(e=>e.ref.current),b)}}A.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>E(!1))})})}),M="RovingFocusGroupItem",k=t.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:l=!1,tabStopId:i,...s}=e,c=(0,u.B)(),p=i||c,v=R(M,n),m=v.currentTabStopId===p,h=w(n),{onFocusableItemAdd:x,onFocusableItemRemove:y}=v;return t.useEffect(()=>{if(a)return x(),()=>y()},[a,x,y]),(0,f.jsx)(g.ItemSlot,{scope:n,id:p,focusable:a,active:l,children:(0,f.jsx)(d.sG.span,{tabIndex:m?0:-1,"data-orientation":v.orientation,...s,ref:r,onMouseDown:(0,o.m)(e.onMouseDown,e=>{a?v.onItemFocus(p):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>v.onItemFocus(p)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let r=function(e,r,n){var t;let o=(t=e.key,"rtl"!==n?t:"ArrowLeft"===t?"ArrowRight":"ArrowRight"===t?"ArrowLeft":t);if(!("vertical"===r&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===r&&["ArrowUp","ArrowDown"].includes(o)))return _[o]}(e,v.orientation,v.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===r)n.reverse();else if("prev"===r||"next"===r){"prev"===r&&n.reverse();let t=n.indexOf(e.currentTarget);n=v.loop?function(e,r){return e.map((n,t)=>e[(r+t)%e.length])}(n,t+1):n.slice(t+1)}setTimeout(()=>I(n))}})})})});k.displayName=M;var _={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function I(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let t of e)if(t===n||(t.focus({preventScroll:r}),document.activeElement!==n))return}var P=j,E=k},5476:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(6655).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},5940:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(6655).A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])}}]);