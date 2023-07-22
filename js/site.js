// Get the numbers from our form inputs
// ENTRY POINT
// Controller Function
function getValues() {
    let startNumber = document.getElementById('startValue').value;
    let endNumber = document.getElementById('endValue').value;

    startNumber = Number(startNumber);
    endNumber = Number(endNumber);

    // make sure we got actual numbers
    if (isNaN(startNumber) == true || isNaN(endNumber) == true) {
       
        Swal.fire({
            title: 'Oops!',
            text: 'Hyaku only works with numbers',
            icon: 'error',
            backdrop: false
        });

        // make sure the end is greater than the start
    } else if (startNumber > endNumber) {
       
        Swal.fire({
            title: 'Oops!',
            text: 'The starting number must be less than the ending number',
            icon: 'error',
            backdrop: false
        });
    
        // keeps endNumber input below threshold 5000
    } else if (endNumber > 5000) {
        Swal.fire({
            title: 'Oops!',
            text: 'The ending number must be less than 5000',
            icon: 'error',
            backdrop: false
        });

    } else {
        // display the numbers if everything is ok
        let numberArray = generateNumbers(startNumber, endNumber);

        displayNumbers(numberArray);
    }

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
