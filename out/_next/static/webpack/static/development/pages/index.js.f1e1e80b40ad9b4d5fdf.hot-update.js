webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_regular_faGem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free-regular/faGem */ "./node_modules/@fortawesome/fontawesome-free-regular/faGem.js");
/* harmony import */ var _fortawesome_fontawesome_free_regular_faGem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_regular_faGem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SpinningRectangles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpinningRectangles */ "./components/SpinningRectangles.jsx");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Carousel */ "./components/Carousel.js");
var _jsxFileName = "/Users/cd/Documents/mlch/components/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      animationState: '',
      currentSlide: 0
    };
    _this.revealDemoAnimationSequence = _this.revealDemoAnimationSequence.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.concealDemoAnimationSequence = _this.concealDemoAnimationSequence.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateCurrentSlide = _this.updateCurrentSlide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "revealDemoAnimationSequence",
    value: function revealDemoAnimationSequence() {
      var _this2 = this;

      this.setState({
        animationState: 'revealDemoStage1'
      });
      setTimeout(function () {
        _this2.setState({
          animationState: _this2.state.animationState.concat(' revealDemoStage2')
        });
      }, 350);
      setTimeout(function () {
        _this2.setState({
          animationState: _this2.state.animationState.concat(' revealDemoStage3')
        });
      }, 1000);
      setTimeout(function () {
        _this2.setState({
          animationState: _this2.state.animationState.concat(' revealDemoStage4')
        });
      }, 1500);
    }
  }, {
    key: "concealDemoAnimationSequence",
    value: function concealDemoAnimationSequence() {
      var _this3 = this;

      this.setState({
        animationState: 'concealDemoStage1'
      });
      setTimeout(function () {
        _this3.setState({
          animationState: _this3.state.animationState.concat(' concealDemoStage2')
        });
      }, 250);
      setTimeout(function () {
        _this3.setState({
          animationState: _this3.state.animationState.concat(' concealDemoStage3')
        });
      }, 750);
      setTimeout(function () {
        _this3.setState({
          animationState: _this3.state.animationState.concat(' concealDemoStage4')
        });
      }, 1300);
      setTimeout(function () {
        _this3.setState({
          animationState: ''
        });
      }, 1500);
    }
  }, {
    key: "updateCurrentSlide",
    value: function updateCurrentSlide(index) {
      this.setState({
        currentSlide: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        id: "header",
        style: this.props.timeout ? {
          display: 'none'
        } : {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-pagination-wrapper ".concat(this.state.animationState),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-pagination",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, [1, 2, 3].map(function (_, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          key: index,
          className: "".concat(_this4.state.animationState, " ").concat(_this4.state.currentSlide === index ? 'current' : '', " ").concat('carouselPagePicker' + (1 + index)),
          onClick: function onClick(event) {
            _this4.carousel.handlePaginationClick(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), index + 1);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logoWrapper ".concat(this.state.animationState),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo ".concat(this.state.animationState),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SpinningRectangles__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content ".concat(this.state.animationState),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner ".concat(this.props.isDemoVisible ? 'collapsed' : '', " ").concat(this.props.paintingIntro),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "The Mulchmate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "A reusable garden tool that keeps yard waste bags open while they're being filled")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "demo ".concat(this.props.isDemoVisible ? '' : 'collapsed'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ref: function ref(instance) {
          _this4.carousel = instance;
        },
        updateCurrentSlide: this.updateCurrentSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          if (!_this4.props.isDemoVisible) {
            _this4.props.updateDemoState(true);

            _this4.revealDemoAnimationSequence();
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Demo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          _this4.props.onOpenArticle('purchase');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Purchase")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          _this4.props.onOpenArticle('about');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          _this4.props.onOpenArticle('contact');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cornerLogo ".concat(this.props.isDemoVisible ? 'demoVisible' : '', " ").concat(this.props.paintingIntro),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          _this4.concealDemoAnimationSequence();

          _this4.props.updateDemoState(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SpinningRectangles__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "The Mulchmate"))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Header.propTypes = {
  onOpenArticle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  updateDemoState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isDemoVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  paintingIntro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.f1e1e80b40ad9b4d5fdf.hot-update.js.map