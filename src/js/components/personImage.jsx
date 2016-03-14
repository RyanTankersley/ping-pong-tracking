const React = require('react');

const PersonImage = React.createClass({
    render: function() {
        const person = this.props.person;
        const personImageStyle = {
            'height': this.props.height,
            'width': this.props.width,
        };
        
        var value = (<div></div>);
        console.log(person);
        if(person !== null)
            value = (<img style={personImageStyle} src={person.imageUrl()} title={person.fullName()} alt={person.fullName()} />);
            
        return value;
    }
});

module.exports = PersonImage;