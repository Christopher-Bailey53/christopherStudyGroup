function deleteRow(button) {

    var row = button.closest('tr');

    row.remove();
}

function changeTextColor() {

    var rows = document.querySelectorAll('#table tr');

   
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];

      
        var nameCell = row.cells[1]; 

       
        if (nameCell && nameCell.innerText && nameCell.innerText.charAt(0).toUpperCase() === 'B') {
          
            row.style.color = 'red';
        }
    }
}