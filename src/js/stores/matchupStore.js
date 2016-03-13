const Reflux = require('reflux');
const Actions = require('../actions/matchupActions');
const User = require('../models/user');
const _ = require('lodash');

var MatchupStore = Reflux.createStore({
    state: {},
    
    listenables: Actions,
    
    onSelectUser: function(res) {
        this.state = _.map(this.state, x => {
            x.isSelected = (x.id === res) ? !x.isSelected : false;
            return x;
        });
        
        this.trigger(this.state);
    },
    
    getInitialState: function() {
        var users = [];
        users.push(new User(1, 'Ryan', 'Tankersley'));
        users.push(new User(2, 'Brad', 'Fair'));
        this.state = users;
        return users;
    }
});

module.exports = MatchupStore;