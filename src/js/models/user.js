/**
 * A player of a game
 * @constructor
 * @param {string} first name
 * @param {string} last name
 */
function Player(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isSelected = false;
    
    this.imageUrl = function() {
        let img = 'images/people/' + this.firstName.toLowerCase() + this.lastName.toLowerCase() + '.png';
        return img;
    }
    
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

module.exports = Player;