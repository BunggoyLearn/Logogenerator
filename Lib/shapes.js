class Shapes {
    constructor(textColor, color, text) {
        if (text != '' && text != null && text.length > 3) {
            throw new Error('Only up to 3 characters are allowed!');
        }

        this.textColor = textColor;
        this.color = color;
        this.text = text;
    }

    setColor(color) {
        return this.color = color;
    }
}

module.exports = Shapes;