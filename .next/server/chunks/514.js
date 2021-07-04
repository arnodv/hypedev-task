exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 728:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MyLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Header.js



const linkStyle = {
  marginRight: 15
}; //render the header component with the links to the pages

const Header = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      style: linkStyle,
      children: "Home"
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/about",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      style: linkStyle,
      children: "About"
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/projects",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      style: linkStyle,
      children: "Projects"
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/contact",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      style: linkStyle,
      children: "Contact"
    })
  })]
});

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./components/MyLayout.js




const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */

const Layout = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossorigin: "anonymous"
    })
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: layoutStyle,
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), props.children]
  })]
});

/* harmony default export */ var MyLayout = (Layout);

/***/ }),

/***/ 453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;