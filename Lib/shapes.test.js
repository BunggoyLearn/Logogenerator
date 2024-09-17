const Shapes = require('./shapes.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Circle = require('./circle');

describe('Shapes', () => {
    describe('Render', () => {
        it('Throw an error if render fails', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Text Limit', () => {
        it('should throw an error if the text contains more than 3 characters', () => {
            const shape = () => new Shapes('green', 'white', 'swa');
            const err = new Error('Only up to 3 characters are allowed!');

            expect(shape).toThrow(err);
        });
    });
});