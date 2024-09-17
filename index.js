// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./Lib/triangle');
const Square = require('./Lib/square');
const Circle = require('./Lib/circle');

// Array of questions for user input
function writeToFile() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Insert up to 3 characters for your design.',
                name: 'text',
            },
            {
                type: "input",
                message: "What text color?",
                name: "textColor",
            },
            {
                type: "list",
                message: "What shape?",
                name: "shape",
                choices: ["Triangle", "Square", "Circle"],
            },
            {
                type: "input",
                message: "What color?",
                name: "color",
            },
        ])
        .then((data) => {
            let logoShape;

            if (data.shape == 'Triangle') {
                logoShape = new Triangle(data.textColor, data.color, data.text);
            } else if (data.shape == 'Square') {
                logoShape = new Square(data.textColor, data.color, data.text);
            } else {
                logoShape = new Circle(data.textColor, data.color, data.text);
            }

            const newFile = `
            <!DOCTYPE html>
            <html>
            <body>
                <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">${logoShape.render()}</svg>
            </body>
            </html>`

            fs.writeFile('./Examples/logo.svg', (newFile), (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        });
}
// Function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
