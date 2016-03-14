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
        var user = _.find(this.state.users, user => {
            return user.id === res.user.id;
        });
        
        if(res.isLeft)
            matchup.playerOne = res.user === matchup.playerOne ? null : user;
        else
            matchup.playerTwo = res.user === matchup.playerTwo ? null : user;
        
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