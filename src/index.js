import React  from 'react';

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
     * When `true` allows the user to dismiss the alert. When a user dismisses
     * an alert, the `onDismiss` function will be executed.
     */
    dismissable: React.PropTypes.bool,

    /**
     * Fires when a user clicks on the dismiss button.
     */
    onDismiss: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      alertStyle: 'info',
      className: '',
      dismissable: true,
      onDismiss: function(){}
    };
  },

  render() {
    let {
      className,
      alertStyle,
      children,
      dismissable,
      onDismiss,
      ...props
    } = this.props;

    className += ' react-alerts react-alerts-' + alertStyle;

    if (dismissable) className += ' react-alerts-dismissable';

    return (
      <div {...props} className={className}>
        {dismissable &&
          <button type="button" className="close" onClick={onDismiss}>×</button>
        }
        {children}
      </div>
    );
  }

});

ReactAlerts.version = '0.1.0';

export default ReactAlerts;