document.addEventListener("DOMContentLoaded", function () {
    // Initialize arrays for persons and salaries
    const persons = [];
    const salaries = [];

    // Get DOM elements
    const nameInput = document.getElementById("name");
    const salaryInput = document.getElementById("salary");
    const addButton = document.getElementById("addButton");
    const resultsTable = document.getElementById("results_table");
    const averageSalary = document.getElementById("averageSalary");
    const highestSalary = document.getElementById("highestSalary");

    // Function to add a person and salary to the arrays
    function addSalary() {
        const name = nameInput.value.trim();
        const salary = parseFloat(salaryInput.value);

        if (name === "" || isNaN(salary)) {
            alert("Please enter a valid name and numeric salary.");
            return;
        }

        persons.push(name);
        salaries.push(salary);

        nameInput.value = "";
        salaryInput.value = "";

        displaySalary();
        calculateAndDisplayResults();
        nameInput.focus();
    }

    // Function to display salaries in the table
    function displaySalary() {
        resultsTable.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>
        `;

        for (let i = 0; i < persons.length; i++) {
            resultsTable.innerHTML += `
                <tr>
                    <td>${persons[i]}</td>
                    <td>${salaries[i]}</td>
                </tr>
            `;
        }
    }

    // Function to calculate and display average and highest salary
    function calculateAndDisplayResults() {
        if (salaries.length === 0) {
            averageSalary.textContent = "0";
            highestSalary.textContent = "0";
            return;
        }

        const average = salaries.reduce((acc, val) => acc + val, 0) / salaries.length;
        const highest = Math.max(...salaries);

        averageSalary.textContent = average.toFixed(2);
        highestSalary.textContent = highest.toFixed(2);
    }

    // Attach click event handlers
    addButton.addEventListener("click", addSalary);

    // Initial focus on the name input field
    nameInput.focus();

    // Display results initially
    calculateAndDisplayResults();
});