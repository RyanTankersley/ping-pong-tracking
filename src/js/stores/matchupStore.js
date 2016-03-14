const Reflux = require('reflux');
const Actions = require('../actions/matchupActions');
const User = require('../models/user');
const _ = require('lodash');

var MatchupStore = Reflux.createStore({
    state: {
        users: [],
        currentMatchup: {
            playerOne: null,
            playerTwo: null
        }
    },
    
    listenables: Actions,
    
    onSelectUser: function(res) {
        var matchup = this.state.currentMatchup;
        if(res.isLeft)
            matchup.playerOne = res.userId === matchup.playerOne ? null : res.userId;
        else
            matchup.playerTwo = res.userId === matchup.playerTwo ? null : res.userId;
        
        this.trigger(this.state);
    },
    
    getInitialState: function() {
        var users = [];
        users.push(new User(1, 'Ryan', 'Tankersley'));
        users.push(new User(2, 'Brad', 'Fair'));
        this.state.users = users;
        return this.state;
    }
});

module.exports = MatchupStore;