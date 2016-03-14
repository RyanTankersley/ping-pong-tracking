'use strict';

const React = require('react');
const User = require('../models/user');
const PlayerRow = require('./playerRow.jsx');

const PlayersList = React.createClass({
    getNullOrId: function(user) {
        return user === null || user === undefined ? null : user.id;
    },
    
    propTypes: {
        users: React.PropTypes.arrayOf(User.User).isRequired,
        title: React.PropTypes.instanceOf('string').isRequired,
        matchup: React.PropTypes.instanceOf('object').isRequired
    },
    
    render: function() {
        const matchup = this.props.matchup;
        const isLeft = this.props.isLeft;
        const columnId = isLeft ? this.getNullOrId(matchup.playerOne) : this.getNullOrId(matchup.playerTwo);
        const oppositeColumnId = isLeft ? this.getNullOrId(matchup.playerTwo) : this.getNullOrId(matchup.playerOne);
        
        return (
            <div className='col-md-3'>
                <div className='row' style={{'textAlign': 'center'}}>
                    <h1>{this.props.title}</h1>
                </div>
                {this.props.users.map(user => {
                    return (<PlayerRow key={user.id} user={user} isSelected={user.id === columnId} isDisabled={user.id === oppositeColumnId} isLeft={this.props.isLeft}/>);
                })}
            </div>
        );
    }
});

module.exports = PlayersList;