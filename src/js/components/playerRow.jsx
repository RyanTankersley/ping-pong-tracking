'use strict';

const React = require('react');
const User = require('../models/user');
var u = new User('lol', 'rofl');
const PlayerRow = React.createClass({
    propTypes: {
        user: React.PropTypes.instanceOf(User).isRequired
    },
    
    render: function() {
        const personImageStyle = {
            "maxHeight": "6em",
            "maxWidth": "6em"
        };
        var user = this.props.user;
        
        return (
            <div className='row'>
                <span><img style={personImageStyle} src={user.imageUrl()} title={user.fullName()} alt={user.fullName()} />  {user.fullName()}</span>
            </div>
        );
    }
});

module.exports = PlayerRow;