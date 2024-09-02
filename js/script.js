// Task 1

function f1() {
    const checkbox = document.querySelector('.i-1');
    const output = document.querySelector('.out-1');
    if (checkbox.checked) {
        output.textContent = 'true';
    } else {
        output.textContent = 'false';
    }
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2

function f2() {
    const checkbox = document.querySelector('#i-2');

    const output = document.querySelector('.out-2');
    if (checkbox.checked) {
        output.textContent = checkbox.value;
    } else {
        output.textContent = 'false';
    }
}

document.querySelector('.b-2').addEventListener('click', f2);


// Task 3

function f3() {
    const input = document.querySelector('#i-3');
    const out31 = document.querySelector('.out-31');
    const out32 = document.querySelector('.out-32');

    out31.textContent = input.value;

    if (input.value.length >= 6) {
        out32.textContent = '1';
    } else {
        out32.textContent = '0';
    }
}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4

function f4() {
    const radioButtons = document.querySelectorAll('input[name="radio-group"]');
    const output = document.querySelector('.out-4');
    for (let radio of radioButtons) {
        if (radio.checked) {
            output.textContent = radio.value;
            break;
        }
    }
}

document.querySelector('.b-4').addEventListener('click', f4);


// Task 5

function f5() {
    const colorInput = document.querySelector('#i-51').value;
    document.querySelector('#i-52').value = colorInput;
}

document.querySelector('.b-5').addEventListener('click', f5);


// Task 6

function f6() {
    const dateInput = document.querySelector('#i-6').value;
    document.querySelector('.out-6').textContent = dateInput;
}

document.querySelector('.b-6').addEventListener('click', f6);


// Task 7

function f7() {
    const sliderValue = document.querySelector('#i-7').value;

    document.querySelector('.out-7').textContent = sliderValue;
}

document.querySelector('#i-7').addEventListener('input', f7);


// Task 8

function f8() {
    const textInput = document.querySelector('#i-8').value;

    document.querySelector('#t-8').value = textInput;
    document.querySelector('.out-8').textContent = textInput;
}

document.querySelector('.b-8').addEventListener('click', f8);


// Task 9

function f9() {
    const selectedValue = document.querySelector('#s-9').value;
    document.querySelector('.out-9').textContent = selectedValue;
}

document.querySelector('#s-9').addEventListener('change', f9);


// Task 10

function displayUserInfo() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const age = document.querySelector('#age').value;

    const userInfo = `Name: ${name}\nEmail: ${email}\nAge: ${age}`;

    document.querySelector('.out-10').textContent = userInfo;
}

document.querySelector('.submit-button').addEventListener('click', displayUserInfo);