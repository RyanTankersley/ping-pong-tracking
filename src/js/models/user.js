/**
 * A player of a game
 * @constructor
 * @param {number} identifier
 * @param {string} first name
 * @param {string} last name
 */
function Player(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.imageUrl = function() {
        let img = 'images/people/' + this.firstName.toLowerCase() + this.lastName.toLowerCase() + '.png';
        return img;
    }
    
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

module.exports = Player;