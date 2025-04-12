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

document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("string");
    const searchBtn = document.getElementById("subBtn");

    searchBtn.addEventListener("click", function () {
        const searchTerm = searchBox.value.trim().toLowerCase();
        const rows = document.querySelectorAll("#table tr");

        rows.forEach((row, index) => {

            if (index === 0) return;

            const nameCell = row.querySelector(".fName");

            if (nameCell) {
                const name = nameCell.textContent.trim().toLowerCase();

                if (name.includes(searchTerm) && searchTerm !== "") {
                    row.classList.add("highlight");

                    setTimeout(() => {
                        row.classList.remove("highlight");
                    }, 3000);
                }
            }
        });
    });
});

function saveTable() {
    const rows = document.querySelectorAll("#table tr");
    let tableData = "";

    rows.forEach((row, index) => {
        
        if (index === 0) return;

        const cells = row.querySelectorAll("td");
        let rowData = "";

        for (let i = 0; i < 4; i++) {
            rowData += cells[i].textContent.trim() + "|";
        }

        tableData += rowData.slice(0, -1) + ";";
    });

    localStorage.setItem("peopleTable", tableData);
    alert("Table saved to local storage!");
}

function loadTable() {
    const data = localStorage.getItem("peopleTable");

    if (!data) {
        alert("No saved table data.");
        return;
    }

    const table = document.getElementById("table");

    const rows = table.querySelectorAll("tr");
    rows.forEach((row, index) => {
        if (index !== 0) row.remove();
    });

    const rowEntries = data.split(";").filter(row => row.trim() !== "");

    rowEntries.forEach(rowStr => {
        const columns = rowStr.split("|");
        const newRow = table.insertRow(-1);

        columns.forEach(text => {
            const cell = newRow.insertCell(-1);
            cell.textContent = text;
        });

        const deleteCell = newRow.insertCell(-1);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "buttonStyle";
        deleteButton.onclick = function () {
            deleteRow(this);
        };
        deleteCell.appendChild(deleteButton);
    });
}

function clearTableStorage() {
    localStorage.removeItem("peopleTable");
    alert("Local storage cleared.");
}

function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
}
