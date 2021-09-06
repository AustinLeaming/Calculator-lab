
// declares the calculator class from index.html to represent 'calculator'
const calculator = document.querySelector('.calculator')

//declares the calculator keys from index.html as 'keys'
const keys = document.querySelector('.calculator-keys');

//declares the display/output
const display = document.getElementById('output');

//puts a click listener on the 'keys' const
keys.addEventListener('click', e => {
    //if the thing clicked matches the 'button' element do the following
    if (e.target.matches('button')) {
        
        //declares the target button pressed as key
        const key = e.target;
        //declares the data set of whatever key as action
        const action = key.dataset.action;
        //declares the variable keycontent as the text content inside of the button clicked
        const keyContent = key.textContent;
        //declares the text in the output screen
        const displayNum = display.textContent;

        const previousKeyType = calculator.dataset.previousKeyType;

        //if the button DOESNT have a data-action (numbers) do this
        if (!action) {
            //if the text content within the display shows a zero, or is an operator -
            if (displayNum === '0' || previousKeyType === 'operator') {
                // - make the text content equal to the text content of key pressed
                display.textContent = keyContent;
            } else {
                // - make the display text content equal to the display content plus whatever key was pressed
                display.textContent = displayNum + keyContent;
            }

        }

        //if the button DOES have a data action (operators) of the following:
        if (action ==='add' || action ==='minus' || action ==='multiply'
        || action === 'divide') {
            console.log('operator key!')
            //adds a class to the button if its pressed, changes the color
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayNum;
            calculator.dataset.operator = action;
        }
        

        //if the button clicked is 'clear' button
        if (action==='clear') {
            console.log('clear key')
            display.textContent = '0'
            //removes .is-depressed from all keys
            Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
        }

        //if the button clicked is 'decimal' button
        if (action === 'decimal') {
            display.textContent = displayNum + '.';
        }


        const calculate = (n1, operator, n2) => {
            let result = '';

            if (operator === 'add') {
                result = parseFloat(n1) + parseFloat(n2);
            } else if (operator === 'minus') {
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2);
            }

            return result;
        }

        //if the button clicked is 'equal' button
        if (action === 'equal') {

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayNum;

            display.textContent = calculate(firstValue, operator, secondValue);
            console.log('equal key');
            //removes .is-depressed from all keys
            Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
        }

        

        
        
    }


})