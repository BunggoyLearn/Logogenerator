const Shapes = require('./shapes.js');

//Creates a square and exports it
class Square extends Shapes {
    constructor(textColor, color, text) {
        super(textColor, color, text);
    }

    render() {
        let output = `<rect width="150" height="150" x="75" y="30" fill="${this.color}" />`;
        if (this.text != `` && this.text != null) {
            output += `<text text-anchor="middle" fill="${this.textColor}" font-size="45px" stroke-width="1px" x="150px" y="145px"> ${this.text} </text>`;
        }
        return output;
    }
}

module.exports = Square;