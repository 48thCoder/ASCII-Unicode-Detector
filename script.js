function detectChar() {
    const charInput = document.getElementById('charInput');
    const result = document.getElementById('result');
    const character = charInput.value;

    if (character.length === 0) {
        result.innerText = 'Please enter a character';
        result.classList.add('error');
        result.style.animation = 'none';
        result.offsetHeight;
        result.style.animation = null;
    }
    else if (character === ' ') {
        result.innerText = `"${character}" is both an ASCII & an Unicode character`;
        result.classList.remove('error');
    }
    else if (isASCII(character)) {
        result.innerText = `"${character}" is an ASCII character`;
        result.classList.remove('error');
    }
    else {
        result.innerText = `"${character}" is an Unicode character`;
        result.classList.remove('error');
    }
    charInput.value = '';
}

function isASCII(character) {
    return character.charCodeAt(0) <= 127;
}