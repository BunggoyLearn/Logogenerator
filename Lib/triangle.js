const Shapes = require('./shapes.js');

//Creates a triangle and exports it
class Triangle extends Shapes {
    constructor(textColor, color, text) {
        super(textColor, color, text);
    }

    render() {
        let output = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        if (this.text != `` && this.text != null) {
            output += `<text text-anchor="middle" fill="${this.textColor}" font-size="45px" stroke-width="1px" x="150px" y="145px"> ${this.text} </text>`;
        }
        return output;
    }
}

module.exports = Triangle;