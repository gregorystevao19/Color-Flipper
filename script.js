const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E'];
const primaryColors = ['red', 'green', 'blue'];

let primaryOption = false;
let hexOption = true;

const buttonPrimary = document.getElementsByClassName('primary');
for (let i = 0; i < buttonPrimary.length; i++) {
    buttonPrimary[i].addEventListener('click', () => {
        [primaryOption, hexOption] = changeArrayColorOption();
    })
}

const buttonHex = document.getElementsByClassName('hex');
for (let i = 0; i < buttonHex.length; i++) {
    buttonHex[i].addEventListener('click', () => {
        [hexOption, primaryOption] = changeArrayColorOption();
    })

}

const main = document.querySelector('main');
const colorCode = document.querySelector('#color-code');
const buttonFlipper = document.querySelector('#button-flipper');


function changeArrayColorOption() {
    return [true, false]
}

console.log('primaryOption: ' + primaryOption, 'hexOption: ' + hexOption);

function getPrimaryColor() {
    return primaryColors[Math.floor(Math.random() * primaryColors.length)];
}

function getHexColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexCharacters[Math.floor(Math.random() * hexCharacters.length)]
    }
    return hexColor;
}

buttonFlipper.addEventListener('click', () => {

    if (primaryOption) {
        let primaryColor = getPrimaryColor();
        main.style.backgroundColor = primaryColor;
        colorCode.textContent = primaryColor;
    }
    else {
        let hexColor = getHexColor();
        main.style.backgroundColor = hexColor;
        colorCode.textContent = hexColor;
    }
});