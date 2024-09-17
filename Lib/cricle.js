const Shapes = require('./shapes.js');

//Creates a circle and exports it
class Circle extends Shapes {
    constructor(textColor, color, text) {
        super(textColor, color, text);
    }

    render() {
        let output = `<circle r="85" cx="150" cy="110" fill="${this.color}" />`;
        if (this.text != `` && this.text != null) {
            output += `<text text-anchor="middle" fill="${this.textColor}" font-size="45px" stroke-width="1px" x="150px" y="145px"> ${this.text} </text>`;
        }
        return output;
    }
}

module.exports = Circle;