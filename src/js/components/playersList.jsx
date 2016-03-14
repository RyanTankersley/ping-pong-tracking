'use strict';

const React = require('react');
const User = require('../models/user');
const PlayerRow = require('./playerRow.jsx');

const PlayersList = React.createClass({
    propTypes: {
        users: React.PropTypes.arrayOf(User.User).isRequired,
        title: React.PropTypes.instanceOf('string').isRequired,
        selectedPlayer: React.PropTypes.instanceOf('number').isRequired
    },
    
    render: function() {
        return (
            <div className='col-md-3'>
                <div className='row' style={{'textAlign': 'center'}}>
                    <h1>{this.props.title}</h1>
                </div>
                {this.props.users.map(user => {
                    return (<PlayerRow key={user.id} user={user} isSelected={user.id === this.props.selectedPlayer} isLeft={this.props.isLeft}/>);
                })}
            </div>
        );
    }
});

module.exports = PlayersList;