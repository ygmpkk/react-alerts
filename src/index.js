import React  from 'react';
import classNames from 'classnames';

/**
 * A React component for displaying pretty alert banners.
 */

const ReactAlerts = React.createClass({

  propTypes: {
    /**
     * Specify the type of alert style.
     *
     * defaults to "info"
     */
    alertStyle: React.PropTypes.oneOf(['info', 'success', 'warning', 'danger']),

    /**
     * The css class name of the root element.
     */
    className: React.PropTypes.string,

    /**
     * Specify class-prefix.
     *
     * defaults to "react-alerts"
     */
    classPrefix: React.PropTypes.string,

    /**
     * When `true` allows the user to dismiss the alert. When a user dismisses
     * an alert, the `onDismiss` function will be executed.
     *
     * defaults to `false`
     */
    dismissible: React.PropTypes.bool,

    /**
     * Fires when a user clicks on the dismiss button.
     */
    onRequestDismiss: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      alertStyle: 'info',
      className: '',
      classPrefix: 'react-alerts',
      dismissible: false
    };
  },

  render() {
    const {
      alertStyle,
      children,
      className,
      classPrefix,
      dismissible,
      onRequestDismiss,
      ...props
    } = this.props;
    let classes = classNames(
      className, classPrefix, classPrefix + '-' + alertStyle);

    if (dismissible) {
      classes = classNames(classes, classPrefix + '-dismissible');
    }

    return (
      <div {...props} className={classes}>
        {dismissible &&
          <button
            type="button"
            className="close"
            onClick={onRequestDismiss}
          >
            ×
          </button>
        }
        {children}
      </div>
    );
  }

});

ReactAlerts.version = '0.2.0';

export default ReactAlerts;