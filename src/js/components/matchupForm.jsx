const React = require('react');
const PersonImage = require('./personImage.jsx');

const MatchupForm = React.createClass({
    render: function() {
        const matchup = this.props.matchup;
        const imageSize = '8em';
        return (
            <div>
                <div className='row' style={{'textAlign': 'center'}}>
                    <h1>Matchup</h1>
                </div>
                <div className='row'>
                    <div className='col-xs-6' style={{'textAlign': 'right'}}>
                        <PersonImage person={matchup.playerOne} width={imageSize} height={imageSize} />
                    </div>
                    <div className='col-xs-6'>
                        <PersonImage person={matchup.playerTwo} width={imageSize} height={imageSize} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MatchupForm;