'use strict';

const React = require('react');
const Reflux = require('reflux');
const PlayersList = require('./components/playersList.jsx');
const User = require('./models/user');
const MatchupStore = require('./stores/matchupStore');
const Actions = require('./actions/matchupActions');

const Home = React.createClass({
    mixins: [Reflux.connect(MatchupStore,"currentStatus")],
    
    render: function() {
        console.log(this.state.currentStatus);
        Actions.test('log');
        var users = [];
        users.push(new User('Ryan', 'Tankersley'));
        users.push(new User('Brad', 'Fair'));
        return (
            <div>
                <PlayersList users={users}/>
            </div>
        );
    }
});

module.exports = Home;