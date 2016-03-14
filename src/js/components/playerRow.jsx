'use strict';

const React = require('react');
const User = require('../models/user');
const Colors = require('../palette');
const Actions = require('../actions/matchupActions');
const PersonImage = require('./personImage.jsx');

const PlayerRow = React.createClass({
    propTypes: {
        user: React.PropTypes.instanceOf(User).isRequired,
        isSelected: React.PropTypes.instanceOf('bool').isRequired,
        isDisabled: React.PropTypes.instanceOf('bool').isRequired,
        isLeft: React.PropTypes.instanceOf('bool').isRequired
    },
    
    onRowClick: function() {
        if(!this.props.isDisabled)
            Actions.selectUser({user: this.props.user, isLeft: this.props.isLeft});
    },
    
    render: function() {
        const user = this.props.user;
        const userStyle = {
            'backgroundColor': this.props.isDisabled ? Colors.dividerColor : this.props.isSelected ? Colors.accentColor : Colors.primaryColor,
            'color': Colors.textPrimaryColor,
            'marginBottom': '2em',
            'borderRadius': '10px',
            'padding': '.75em .3em',
            'fontSize': '1.5em',
            'cursor': this.props.isDisabled ? 'default' : 'pointer'
        };
        
        const contentDivStyle = {
            'width': '80%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'textAlign': 'center'
        };
        
        return (
            <div className='row' style={userStyle} onMouseDown={(e) => this.onRowClick()} >
                <div style={contentDivStyle}>
                    <PersonImage person={user} width={'4em'} height={'4em'} />
                </div>
                <div style={contentDivStyle}>
                    {user.fullName()}
                </div>
            </div>
        );
    }
});

module.exports = PlayerRow;