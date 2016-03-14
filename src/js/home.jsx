'use strict';

const React = require('react');
const Reflux = require('reflux');
const PlayersList = require('./components/playersList.jsx');
const MatchupStore = require('./stores/matchupStore');
const Actions = require('./actions/matchupActions');

const Home = React.createClass({
    mixins: [Reflux.connect(MatchupStore,"currentStatus")],
    
    render: function() {
        const status = this.state.currentStatus;
        return (
            <div className='container' style={{'marginTop': '3em', 'padding': '0'}}>
                <div className='row' style={{'textAlign': 'center'}}>
                    <h1>Ping Pong Matchup</h1>
                </div>
                <div className='row'>
                    <PlayersList users={status.users} matchup={status.currentMatchup} isLeft={true} title='Player 1'/>
                    <div className='col-md-6'>
                    </div>
                    <PlayersList users={status.users} matchup={status.currentMatchup} isLeft={false} title='Player 2'/>
                </div>
            </div>
        );
    }
});

module.exports = Home;