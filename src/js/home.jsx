'use strict';

const React = require('react');
const Reflux = require('reflux');
const PlayersList = require('./components/playersList.jsx');
const MatchupStore = require('./stores/matchupStore');
const Actions = require('./actions/matchupActions');

const Home = React.createClass({
    mixins: [Reflux.connect(MatchupStore,"currentStatus")],
    
    render: function() {
        return (
            <div className='container' style={{'marginTop': '3em'}}>
                <div className='row'>
                    <PlayersList users={this.state.currentStatus}/>
                </div>
            </div>
        );
    }
});

module.exports = Home;