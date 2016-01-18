(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('ReactAlerts', ['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.ReactAlerts = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  var ReactAlerts = _react2.default.createClass({
    displayName: 'ReactAlerts',
    propTypes: {
      alertStyle: _react2.default.PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
      className: _react2.default.PropTypes.string,
      dismissable: _react2.default.PropTypes.bool,
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
      return _react2.default.createElement('div', _extends({}, props, {
        className: className
      }), dismissable && _react2.default.createElement('button', {
        type: 'button',
        className: 'close',
        onClick: onDismiss
      }, '×'), children);
    }
  });

  ReactAlerts.version = '0.1.3';
  exports.default = ReactAlerts;
});

