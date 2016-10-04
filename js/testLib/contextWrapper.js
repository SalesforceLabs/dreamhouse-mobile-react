'use strict';

import React, {Component} from 'react';

/**
 * Wraps a component in a container and passes the context
 * @param  {object} context passed to children
 * @param {component?} children that are wrapped with context
 * @return {component} the wrapped component
 */
module.exports = React.createClass({

  _validateChildren(){
    if (this.props.children === undefined) {
      throw "No child components were passed into WithContext";
    }
    if (this.props.children.length > 1) {
      throw "You can only pass one child component into WithContext";
    }
  },

  render(){
    const DynamicWithContext = React.createClass({
      childContextTypes: this.props.contextTypes,

      getChildContext() {
        return this.props.context;
      },
      render() {
        return this.props.children;
      }
    });

    this._validateChildren();

    return <DynamicWithContext context={this.props.context} contextTypes={this.props.contextTypes}>
      {this.props.children}
    </DynamicWithContext>
  }
})
