// Находим переменные по классу
const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const btnResult = document.querySelector('.btnResult')
const resultEl = document.querySelector('.result')

// переменная которая по умолчанию выбирает математическое действие плюс
let action = '+'

// создаем функцию с действием '+' и вешаем на неё клик
plusBtn.onclick = function () {
    action = '+'
}

// создаем функцию с действием '-' и вешаем на неё клик
minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    if ( result < 0) {
        resultEl.style.color = 'red'
    } else {
        resultEl.style.color = 'green'
    }

    resultEl.textContent = result
}

// создаем функцию расчёта когда мы кликаем на кнопку 'Расчитать'
btnResult.onclick = function () {
    if ( action === '+') {
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    } else if (action === '-') {
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        printResult(sum)
    }

    
}