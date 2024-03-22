const textPalindrome = document.getElementById('text-input');
const btnPalindrome = document.getElementById('check-btn');
const resultPalindrome = document.getElementById('result');

const checkPalindrome = input => {
    const originalInput = input;

    if (input === '') {
        alert('Please input a value');
        return;
    }

    resultPalindrome.replaceChildren();

    const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `<strong>${originalInput}</strong> ${lowerCaseString === [...lowerCaseString].reverse().join('') ? 'is' : 'is not'
        } a palindrome.`;

    const resultUser = document.createElement('p');
    resultUser.className = 'user-input';
    resultUser.innerHTML = resultMsg;
    resultPalindrome.appendChild(resultUser);

    resultPalindrome.classList.remove('hidden');
};

btnPalindrome.addEventListener('click', () => {
    checkPalindrome(textPalindrome.value);
    textPalindrome.value = '';
});

textPalindrome.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkPalindrome(textPalindrome.value);
        textPalindrome.value = '';
    }
});