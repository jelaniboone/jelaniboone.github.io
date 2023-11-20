window.onload = function () {
    const calculate = (n1, operator, n2) => {
        let result = ''
        if (operator === 'add') {
            result = parseFloat(n1) + parseFloat(n2)
        } else if (operator === 'subtract') {
            result = parseFloat(n1) - parseFloat(n2)
        } else if (operator === 'multiply') {
            result = parseFloat(n1) * parseFloat(n2)
        } else if (operator === 'divide') {
            result = parseFloat(n1) / parseFloat(n2)
        } else result = 'Error'
        return result
    }

    const calculator = document.querySelector('.frame')
    const display = calculator.querySelector('.display')
    const keys = calculator.querySelector('.input')

    keys.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
            const previousKeyType = calculator.dataset.previousKeyType

            console.log('previousKeyType', previousKeyType);

            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))

            if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent
                    calculator.dataset.previousKeyType = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }

            if (action === 'decimal') {
                display.textContent = displayedNum + '.'
            }

            if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide'
            ) {
                key.classList.add('is-depressed');
                calculator.dataset.previousKeyType = 'operator';
                calculator.dataset.firstValue = displayedNum;
                calculator.dataset.operator = action;
            }

            if (action === 'clear') {
                display.textContent = '0'
                calculator.dataset.firstValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
            }

            if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum
                calculator.dataset.previousKeyType = 'calculate';

                display.textContent = calculate(firstValue, operator, secondValue)
            }
        }
    })
}