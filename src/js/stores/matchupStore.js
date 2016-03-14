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
        if(res.isLeft)
            this.state.currentMatchup.playerOne = res.userId;
        else
            this.state.currentMatchup.playerTwo = res.userId;
        
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