var Reflux = require('reflux');
var Actions = require('../actions/matchupActions');

var MatchupStore = Reflux.createStore({
    listenables: Actions,
    
    onTest: function(res) {
        console.log(res);
    },
    
    getInitialState: function() {
        return 'rawr';
    }
});

module.exports = MatchupStore;