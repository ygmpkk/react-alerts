var ReactAlerts = require('../../dist/react-alerts');
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

  getInitialState() {
    return {
      showWarning: true
    };
  },

  render() {
    return (
      <div className="react-alerts-demo">
        <h3>react-alerts</h3>

        <ReactAlerts>
          Info style
        </ReactAlerts>

        <ReactAlerts alertStyle="success">
          Success style
        </ReactAlerts>

        {this.state.showWarning &&
          <ReactAlerts
            alertStyle="warning"
            dismissible
            onRequestDismiss={this._dismissWarning}
          >
            Warning style and dismissible!
          </ReactAlerts>
        }

        <ReactAlerts alertStyle="danger">
          Danger style!
        </ReactAlerts>

        <ReactAlerts
          alertStyle="info"
          style={{
            position: 'absolute',
            top: 25,
            right: 25,
            zIndex: 999
          }}
        >
          Easily make "growls"!
        </ReactAlerts>

      </div>
    );
  },

  _dismissWarning() {
    this.setState({showWarning: false});
  }

});

ReactDOM.render(<App />, document.getElementById('app'));