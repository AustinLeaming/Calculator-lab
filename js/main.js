
// declares the calculator class from index.html to represent 'calculator'
const calculator = document.querySelector('.calculator')

//declares the calculator keys from index.html as 'keys'
const keys = document.querySelector('.calculator-keys');


//puts a click listener on the 'keys' const
keys.addEventListener('click', e => {
    //if the thing clicked matches the 'button' element do the following
    if (e.target.matches('button')) {
        
        //declares the target button pressed as key
        const key = e.target;
        //declares the data set of whatever key as action
        const action = key.dataset.action;
        //declares the output screen
        const display = document.getElementById('output');
        //declares the variable keycontent as the content inside of the button clicked
        const keyContent = key.textContent;

        //if the button DOESNT have a data-action (numbers) do this
        if (!action) {
            console.log('number key!');
            console.log(keyContent);
            display.textContent = keyContent;
        }

        //if the button DOES have a data action (operators) of the following:
        if (action ==='add' || action ==='minus' || action ==='multiply'
        || action === 'divide') {
            console.log('operator key!')
        }

        //if the button clicked is 'clear' button
        if (action==='clear') {
            console.log('clear key')
        }

        //if the button clicked is 'decimal' button
        if (action === 'decimal') {
            console.log('decimal key')
        }

        //if the button clicked is 'equal' button
        if (action === 'equal') {
            console.log('equal key');
        }
    }


})