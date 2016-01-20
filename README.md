# react-alerts

A simple react component for displaying Alert banners.

## Install

```bash
npm install react-alerts --save
```

and include the `react-alerts.css` stylesheet.

## Usage

CommonJS:

```
var React = require('react');
var ReactAlerts = require('react-alerts');
var ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(
    ReactAlerts, {alertStyle: 'success'}, 
    '<strong>Well done!</strong> You've just displayed your first alert!'),
  document.body
);
```

## Examples

* [Basic Usage][1]

[1]: http://dennisduong.github.io/react-alerts/examples/