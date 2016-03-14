const React = require('react');

const MatchupForm = React.createClass({
    render: function() {
        const matchup = this.props.matchup;
        const personImageStyle = {
            'maxHeight': '4em',
            'maxWidth': '4em',
        };
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-4'>
                    
                    </div>
                    <div className='col-xs-4'>
                    </div>
                    <div className='col-xs-4'>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MatchupForm;