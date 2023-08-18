// creating consts
const addExpense = document.getElementById('addExpenseButton');
const table = document.querySelector('tbody');
const noExpensesYetText = document.getElementById('noExpensesYetText');

//Input Consts
const nameInput = document.getElementById('nameInput');
const dateInput = document.getElementById('dateInput');
const amountInput = document.getElementById('amountInput');

addExpense.addEventListener('click', function(){
    const nameText = nameInput.value;
    const dateText = dateInput.value;
    const amountText = amountInput.value;

    if (nameText.trim() !== '' && dateText.trim() !== '' && amountText.trim() !==''){
        //adding name to table
        const nameItem = document.createElement('td');
        nameItem.className = 'tableItem';
        nameItem.textContent = nameText;

        //adding date to table
        const dateItem = document.createElement('td');
        dateItem.className = 'tableItem';
        dateItem.textContent = dateText;

        //adding amount to table
        const amountItem = document.createElement('td');
        amountItem.className = 'tableItem';
        amountItem.textContent = amountText;

        //adding clear button
        const clearButton = document.createElement('button')
        clearButton.textContent = 'Remove'
        clearButton.className = 'clearButton'

        //clearing text 
        noExpensesYetText.innerHTML = '';
        nameInput.value = '';  
        dateInput.value = '';
        amountInput.value = '';

        //adding items to the table
        const newRow = document.createElement('tr');
        newRow.className = 'newRow'
        table.appendChild(newRow);

        newRow.appendChild(nameItem);
        newRow.appendChild(dateItem);
        newRow.appendChild(amountItem);
        newRow.appendChild(clearButton)

        //clearbutton function
        clearButton.addEventListener('click', function(){
            newRow.removeChild(nameItem)
            newRow.removeChild(dateItem)
            newRow.removeChild(amountItem)
            newRow.removeChild(clearButton);
        })
    }
    else{
        alert('Please fill out all fields before submitting!')
    }
})