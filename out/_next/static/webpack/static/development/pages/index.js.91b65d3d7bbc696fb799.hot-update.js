webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NonPassiveTouchTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NonPassiveTouchTarget */ "./components/NonPassiveTouchTarget.js");
/* harmony import */ var react_touch_carousel_lib_touchWithMouseHOC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-touch-carousel/lib/touchWithMouseHOC */ "./node_modules/react-touch-carousel/lib/touchWithMouseHOC.js");
/* harmony import */ var react_touch_carousel_lib_touchWithMouseHOC__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_touch_carousel_lib_touchWithMouseHOC__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_touch_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-touch-carousel */ "./node_modules/react-touch-carousel/lib/index.js");
/* harmony import */ var react_touch_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_touch_carousel__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/cd/Documents/mlch/components/Carousel.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







 // export {
//   clamp: somethingTheyalreadyCreated
// }
// export default TouchCarousel
// export touchWithMouseHOC

var carouselSlideData = [{
  title: 'Step 1',
  text: "Insert the Mulchmate diagonally downward into a Lawn Bag",
  imageUrl: "static/images/mulchmate-demo-slide-1.png"
}, {
  title: 'Step 2',
  text: "Lift and guide the Mulchmate corners until snug against the bag corners",
  imageUrl: "static/images/mulchmate-demo-slide-2.png"
}, {
  title: 'Step 3',
  text: "Ready to use! The bag will stand & remain open while you fill it",
  imageUrl: "static/images/mulchmate-demo-slide-3.png"
}];
var query = "";
var enableLoop = 0;
var enableAutoplay = 0;
var cardSize = 400;
var cardPadCount = enableLoop ? 3 : 0;

function log(text) {
  console.log(text);
}

function CarouselContainer(props) {
  var carouselWidth = Object({"env":Object({"BACKEND_URL":""})}).browser ? Object(react_touch_carousel__WEBPACK_IMPORTED_MODULE_6__["clamp"])(window.innerWidth, 0, 960) : 400;

  var cursor = props.cursor,
      _props$carouselState = props.carouselState,
      active = _props$carouselState.active,
      dragging = _props$carouselState.dragging,
      rest = _objectWithoutProperties(props, ["cursor", "carouselState"]);

  var current = -Math.round(cursor) % carouselSlideData.length;

  while (current < 0) {
    current += carouselSlideData.length;
  } // Put current card at center


  var translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NonPassiveTouchTarget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('carousel-container', {
      'is-active': active,
      'is-dragging': dragging
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NonPassiveTouchTarget__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: "carousel-track",
    style: {
      transform: "translate3d(".concat(translateX, "px, 0, 0)")
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
}

var Container = react_touch_carousel_lib_touchWithMouseHOC__WEBPACK_IMPORTED_MODULE_5___default()(CarouselContainer);

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Carousel).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: "renderCard",
    value: function renderCard(index, modIndex) {
      var item = carouselSlideData[modIndex];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index,
        className: "carousel-card",
        onClick: function onClick() {
          return log("clicked card ".concat(1 + modIndex));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-card-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, item.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        draggable: "false",
        src: "" + '/' + item.imageUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })));
    }
  }, {
    key: "handlePaginationClick",
    value: function handlePaginationClick(index) {
      this.props.updateCurrentSlide(index);
      this.touchCarousel.go(0 - index);
      console.log(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_touch_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        component: Container,
        cardSize: cardSize,
        cardCount: carouselSlideData.length,
        cardPadCount: cardPadCount,
        loop: enableLoop,
        autoplay: enableAutoplay ? 2e3 : false,
        renderCard: this.renderCard,
        onRest: function onRest(index) {
          _this.props.updateCurrentSlide(index);
        },
        onDragStart: function onDragStart() {
          return log('dragStart');
        },
        onDragEnd: function onDragEnd() {
          return log('dragEnd');
        },
        onDragCancel: function onDragCancel() {
          return log('dragCancel');
        },
        ref: function ref(instance) {
          _this.touchCarousel = instance;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      });
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Carousel.propTypes = {
  updateCurrentSlide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.91b65d3d7bbc696fb799.hot-update.js.map