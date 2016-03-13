'use strict';

const React = require('react');
const User = require('../models/user');
const PlayerRow = require('./playerRow.jsx');

const PlayersList = React.createClass({
    propTypes: {
        users: React.PropTypes.arrayOf(User.User).isRequired
    },
    
    render: function() {
        return (
            <div className='col-md-3'>
                {this.props.users.map(user => {
                    return (<PlayerRow key={user.id} user={user} />);
                })}
            </div>
        );
    }
});

module.exports = PlayersList;