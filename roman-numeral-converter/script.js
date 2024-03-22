const formConverter = document.getElementById('form');
const btnConverter = document.getElementById('convert-btn');
const outputConverter = document.getElementById('output');

const romanConverter = num => {
    const romanNumbers = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const res = [];

    romanNumbers.forEach(function (arr) {
        while (num >= arr[1]) {
            res.push(arr[0]);
            num -= arr[1];
        }
    });

    return res.join('');
};

const validConverter = (str, int) => {
    let errText = '';

    if (!str || str.match(/[e.]/g)) {
        errText = 'Please enter a valid number.';
    } else if (int < 1) {
        errText = 'Please enter a number greater than or equal to 1.';
    } else if (int > 3999) {
        errText = 'Please enter a number less than or equal to 3999.';
    } else {
        return true;
    }

    outputConverter.innerText = errText;
    outputConverter.classList.add('alert');

    return false;
};

const errorConverter = () => {
    outputConverter.innerText = '';
    outputConverter.classList.remove('alert');
};

formConverter.addEventListener('submit', e => {
    e.preventDefault();
    convertUpdate();
});

btnConverter.addEventListener('click', () => {
    convertUpdate();
});

const convertUpdate = () => {
    const numStr = document.getElementById('number').value;
    const int = parseInt(numStr, 10);

    outputConverter.classList.remove('hidden');

    errorConverter();

    if (validConverter(numStr, int)) {
        outputConverter.innerText = romanConverter(int);
    }
};