(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactAlerts"] = factory(require("React"));
	else
		root["ReactAlerts"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
	     * When `true` allows the user to dismiss the alert. When a user dismisses
	     * an alert, the `onDismiss` function will be executed.
	     */
	    dismissable: _react2.default.PropTypes.bool,

	    /**
	     * Fires when a user clicks on the dismiss button.
	     */
	    onDismiss: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      alertStyle: 'info',
	      className: '',
	      dismissable: true,
	      onDismiss: function onDismiss() {}
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var alertStyle = _props.alertStyle;
	    var children = _props.children;
	    var dismissable = _props.dismissable;
	    var onDismiss = _props.onDismiss;

	    var props = _objectWithoutProperties(_props, ['className', 'alertStyle', 'children', 'dismissable', 'onDismiss']);

	    className += ' react-alerts react-alerts-' + alertStyle;

	    if (dismissable) className += ' react-alerts-dismissable';

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, { className: className }),
	      dismissable && _react2.default.createElement(
	        'button',
	        { type: 'button', className: 'close', onClick: onDismiss },
	        '×'
	      ),
	      children
	    );
	  }
	});

	ReactAlert.version = '0.1.0';

	exports.default = ReactAlerts;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;