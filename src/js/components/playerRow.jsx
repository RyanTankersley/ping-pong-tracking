'use strict';

const React = require('react');
const User = require('../models/user');
const Colors = require('../palette');
const Actions = require('../actions/matchupActions');

const PlayerRow = React.createClass({
    propTypes: {
        user: React.PropTypes.instanceOf(User).isRequired
    },
    
    onRowClick: function() {
        Actions.selectUser(this.props.user.id);
    },
    
    render: function() {
        const personImageStyle = {
            'maxHeight': '4em',
            'maxWidth': '4em',
        };
        
        const user = this.props.user;
        console.log(user);
        const userStyle = {
            'backgroundColor': user.isSelected ? Colors.accentColor : Colors.primaryColor,
            'color': Colors.textPrimaryColor,
            'marginBottom': '2em',
            'borderRadius': '10px',
            'padding': '.75em .3em',
            'fontSize': '1.5em'
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
                    <img style={personImageStyle} src={user.imageUrl()} title={user.fullName()} alt={user.fullName()} />
                </div>
                <div style={contentDivStyle}>
                    {user.fullName()}
                </div>
            </div>
        );
    }
});

module.exports = PlayerRow;