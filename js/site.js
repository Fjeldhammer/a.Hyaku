// Get the numbers from our form inputs
// ENTRY POINT
// Controller Function
function getValues() {
    let startNumber = document.getElementById('startValue').value;
    let endNumber = document.getElementById('endValue').value;

    startNumber = Number(startNumber);
    endNumber = Number(endNumber);

    let numberArray = generateNumbers(startNumber, endNumber);

    displayNumbers(numberArray);
}

// Business logic -creates every number in the input range
// Data Model
function generateNumbers(start, end) {

    let range = [];

    for(let number = start; number <= end; number = number + 1) {

        range.push(number);

    }

    return range;

}

// put the numbers on the page
// View Function
function displayNumbers(numbersToDisplay) {

    let tableHtml = '';

    for (let index = 0; index < numbersToDisplay.length; index = index + 1) {

        let currentNumber = numbersToDisplay[index];

        let className = '';

        if(currentNumber % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }

        let tableRowHtml = `<tr><td class="${className}">${currentNumber}</td></tr>`; // "<tr><td>1</td></tr>"

        tableHtml = tableHtml + tableRowHtml;

    }

    document.getElementById('results').innerHTML = tableHtml;

}
