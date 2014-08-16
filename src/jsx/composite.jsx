/**
 * @jsx React.DOM
 */

'use strict';

var Composite = React.createClass({
    render: function() {
        debugger;
        var items = this.props.items ? this.props.items :
            this.props.scope.items;

        return (<div className='box'>
        &nbsp;
            {items.map(function(item) {
                switch(item.rtype) {
                    case 'firstLeaf':
                        return <FirstLeaf text={item.text} />
                    case 'secondLeaf':
                        return <SecondLeaf text={item.text} />
                    case 'composite':
                        return <Composite items={item.items} />
                }
            }, this)}
        </div>);
    }
});