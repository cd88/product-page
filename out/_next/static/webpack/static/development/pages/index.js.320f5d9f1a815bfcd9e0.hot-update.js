webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProductPurchaseForm.js":
/*!*******************************************!*\
  !*** ./components/ProductPurchaseForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _NumberPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NumberPicker */ "./components/NumberPicker.js");
var _jsxFileName = "/Users/cd/Documents/mlch/components/ProductPurchaseForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







 // export {
//   clamp: somethingTheyalreadyCreated
// }
// export default TouchCarousel
// export touchWithMouseHOC

var productInfo = {
  name: "The Mulchmate",
  description: "This is the description of The Mulchmate, reiterate the value proposition here",
  dimensions: "22 x 14 in."
};

var ProductPurchaseForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductPurchaseForm, _React$Component);

  function ProductPurchaseForm() {
    _classCallCheck(this, ProductPurchaseForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductPurchaseForm).apply(this, arguments));
  }

  _createClass(ProductPurchaseForm, [{
    key: "launchLambdaServer",
    value: function launchLambdaServer(data) {
      console.log(data);
    }
  }, {
    key: "handleTransactionResults",
    value: function handleTransactionResults(results) {
      console.log(results);
      this.props.updateTransactionStatus("success");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "product-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/static/images/mulchmate-demo-slide-3.png",
        alt: "The Mulchmate holds a yard waste paper bag open and upright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, productInfo.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, productInfo.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "size",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "dimensions: ", productInfo.dimensions), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "quantity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Quantity:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NumberPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://checkout.stripe.com/checkout.js",
        className: "stripe-button",
        "data-key": "pk_test_9ByY3GWai1HHnzu0K9lx1Awc",
        "data-amount": "999",
        "data-name": "Stripe.com",
        "data-description": "Example charge",
        "data-image": "https://stripe.com/img/documentation/checkout/marketplace.png",
        "data-locale": "auto",
        "data-zip-code": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }));
    }
  }]);

  return ProductPurchaseForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ProductPurchaseForm.propTypes = {
  updateTransactionStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ProductPurchaseForm);

/***/ })

})
//# sourceMappingURL=index.js.320f5d9f1a815bfcd9e0.hot-update.js.map