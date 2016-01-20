(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames"], factory);
	else if(typeof exports === 'object')
		exports["ReactAlerts"] = factory(require("react"), require("classnames"));
	else
		root["ReactAlerts"] = factory(root["React"], root["classNames"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A React component for displaying pretty alert banners.
	 */

	var ReactAlerts = _react2.default.createClass({
	  displayName: 'ReactAlerts',

	  propTypes: {
	    /**
	     * Specify the type of alert style.
	     *
	     * defaults to "info"
	     */
	    alertStyle: _react2.default.PropTypes.oneOf(['info', 'success', 'warning', 'danger']),

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Specify class-prefix.
	     *
	     * defaults to "react-alerts"
	     */
	    classPrefix: _react2.default.PropTypes.string,

	    /**
	     * When `true` allows the user to dismiss the alert. When a user dismisses
	     * an alert, the `onDismiss` function will be executed.
	     *
	     * defaults to `false`
	     */
	    dismissible: _react2.default.PropTypes.bool,

	    /**
	     * Fires when a user clicks on the dismiss button.
	     */
	    onRequestDismiss: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      alertStyle: 'info',
	      className: '',
	      classPrefix: 'react-alerts',
	      dismissible: false
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var alertStyle = _props.alertStyle;
	    var children = _props.children;
	    var className = _props.className;
	    var classPrefix = _props.classPrefix;
	    var dismissible = _props.dismissible;
	    var onRequestDismiss = _props.onRequestDismiss;

	    var props = _objectWithoutProperties(_props, ['alertStyle', 'children', 'className', 'classPrefix', 'dismissible', 'onRequestDismiss']);

	    var classes = (0, _classnames2.default)(className, classPrefix, classPrefix + '-' + alertStyle);

	    if (dismissible) {
	      classes = (0, _classnames2.default)(classes, classPrefix + '-dismissible');
	    }

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, { className: classes }),
	      dismissible && _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: 'close',
	          onClick: onRequestDismiss
	        },
	        '×'
	      ),
	      children
	    );
	  }
	});

	ReactAlerts.version = '0.1.4';

	exports.default = ReactAlerts;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;