// Packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { features } = require("process");
// Array of questions for user input
function writeToFile() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Insert up to 3 characters for your design.',
                name: 'title',
            },
            {
                type: "input",
                message: "What color?",
                name: "textColor",
            },
            {
                type: "list",
                message: "What shape?",
                name: "shape",
                choices: ["triangle", "square", "circle"],
            },
            {
                type: "input",
                message: "What color?",
                name: "color",
            },
        ])
        .then((answers) => {
            let logoShape;

            if (data.shape == 'Triangle') {
                logoShape = new Triangle(data.color, data.text, data.textColor);
            } else if (data.shape == 'Square') {
                logoShape = new Square(data.color, data.text, data.textColor);
            } else {
                logoShape = new Circle(data.color, data.text, data.textColor);
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

// TEST

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


//Circle
`<circle cx="25" cy="75" r="20" stroke="red" fill=${color} stroke-width="5"/>`
    //Square
    `<rect x="10" y="10" width="30" height="30" stroke="black" fill=${color} stroke-width="5"/>`