# react-alert
A simple react component for displaying Alert banners.

## Install

```bash
npm install react-alert --save
```

and include the `react-alert.css` stylesheet.

## Usage

CommonJS:

```
var React = require('react');
var ReactAlert = require('react-alerts');
var ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(
    ReactAlert, {alertStyle: 'success'}, 
    '<strong>Well done!</strong> You've just displayed your first alert!'),
  document.body
);
```