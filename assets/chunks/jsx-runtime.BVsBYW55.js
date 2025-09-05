var u={exports:{}},n={},i=window.React;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=i,a=Symbol.for("react.element"),y=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,v=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function f(t,r,s){var e,o={},_=null,p=null;s!==void 0&&(_=""+s),r.key!==void 0&&(_=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)m.call(r,e)&&!x.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:a,type:t,key:_,ref:p,props:o,_owner:v.current}}n.Fragment=y;n.jsx=f;n.jsxs=f;u.exports=n;var c=u.exports;export{i as _,c as j};
