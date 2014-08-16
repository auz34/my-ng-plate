/**
 * @jsx React.DOM
 */

'use strict';

var FirstLeaf = React.createClass({
    render: function() {
        return (<span>{this.props.text}</span>);
    }
});