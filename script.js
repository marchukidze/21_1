
let input = document.querySelector('#input');
let array = [];

function getNumber() {
    inputNumber(input.value)
        .then(
            (dataNumber) => {
                return array.push(dataNumber);
            }
        )
        .then(
            () => {
                return input.value = '';
            }
        )
        .then(
            () => {
                console.log('array of numbers ', array);
            }
        )
}

function inputNumber(value) {
    return new Promise((response) => {
        if (value != '') {
            response(value);
        }
    });
}

input.addEventListener('change', getNumber);

setTimeout(() => {
    console.log('all numbers:', array);
    input.removeEventListener('change', getNumber);
}, 10000);

