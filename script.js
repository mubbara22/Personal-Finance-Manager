function redirectTo(page) {
    window.location.href = page;
}

// Toggle profile dropdown
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile-dropdown button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Example: Render budget chart (using Chart.js or any chart library)
document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('budgetChart').getContext('2d');
    var budgetChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Housing', 'Food', 'Transportation', 'Entertainment', 'Others'],
            datasets: [{
                label: 'Budget',
                data: [40, 20, 15, 10, 15],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
// Toggle profile dropdown
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile-dropdown button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Show the add transaction form
function showAddTransactionForm() {
    document.getElementById("addTransactionForm").style.display = "block";
}

// Close the add transaction form
function closeAddTransactionForm() {
    document.getElementById("addTransactionForm").style.display = "none";
}

// Add a new transaction
function addTransaction() {
    var date = document.getElementById("date").value;
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;

    if (date && category && description && amount) {
        var table = document.getElementById("transactionsTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = date;
        cell2.innerHTML = category;
        cell3.innerHTML = description;
        cell4.innerHTML = amount > 0 ? "+$" + amount : "-$" + Math.abs(amount);

        closeAddTransactionForm();
    } else {
        alert("Please fill in all fields");
    }
}

// Search transactions
function searchTransactions() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("transactionsTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}


// Show the add budget form
function showAddBudgetForm() {
    document.getElementById("addBudgetForm").style.display = "block";
}

// Close the add budget form
function closeAddBudgetForm() {
    document.getElementById("addBudgetForm").style.display = "none";
}

// Add a new budget
function addBudget() {
    var category = document.getElementById("category").value;
    var amount = document.getElementById("amount").value;

    if (category && amount) {
        var table = document.getElementById("budgetTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = category;
        cell2.innerHTML = "$" + parseFloat(amount).toFixed(2);
        cell3.innerHTML = "$0.00";
        cell4.innerHTML = "$" + parseFloat(amount).toFixed(2);

        closeAddBudgetForm();
    } else {
        alert("Please fill in all fields");
    }
}

// Search budget
function searchBudget() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("budgetTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}
// Toggle profile dropdown
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile-dropdown button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Generate report based on selected report type
function generateReport() {
    var reportType = document.getElementById("reportType").value;
    var reportContent = document.getElementById("reportContent");

    switch(reportType) {
        case "summary":
            reportContent.innerHTML = generateSummaryReport();
            break;
        case "incomeVsExpense":
            reportContent.innerHTML = generateIncomeVsExpenseReport();
            break;
        case "categoryWise":
            reportContent.innerHTML = generateCategoryWiseReport();
            break;
        default:
            reportContent.innerHTML = "";
    }
}

function generateSummaryReport() {
    return `
        <h3>Summary Report</h3>
        <p>Total Income: $3000.00</p>
        <p>Total Expenses: $1500.00</p>
        <p>Savings: $1500.00</p>
    `;
}

function generateIncomeVsExpenseReport() {
    return `
        <h3>Income vs Expense Report</h3>
        <p>Income: $3000.00</p>
        <p>Expenses: $1500.00</p>
        <div class="chart">
            <canvas id="incomeVsExpenseChart"></canvas>
        </div>
    `;
}

function generateCategoryWiseReport() {
    return `
        <h3>Category-wise Report</h3>
        <p>Groceries: $500.00</p>
        <p>Entertainment: $200.00</p>
        <p>Utilities: $300.00</p>
        <div class="chart">
            <canvas id="categoryWiseChart"></canvas>
        </div>
    `;
}


function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    var error = false;
    var errorMessage = '';

    if (name === '') {
        errorMessage += 'Name is required.<br>';
        error = true;
    }

    if (email === '') {
        errorMessage += 'Email is required.<br>';
        error = true;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage += 'Invalid email format.<br>';
            error = true;
        }
    }

    if (message === '') {
        errorMessage += 'Message is required.<br>';
        error = true;
    }

    if (error) {
        document.getElementById('error-message').innerHTML = errorMessage;
        return false;
    }

    // Code to send form data (dummy example)
    console.log('Submitting form:', { name, email, message });

    // For demo purposes, reset form after submission
    document.getElementById('contactForm').reset();
    alert('Form submitted successfully!');

    return false; // Prevent form submission
}
