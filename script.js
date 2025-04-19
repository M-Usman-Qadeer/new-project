// const getGrade = (marks) => {
//     switch (true) {
//         case marks >= 90 && marks <=100:: return "A+";
//         case marks >= 80: return "A";
//         case marks >= 75: return "B+";
//         case marks >= 70: return "B";
//         case marks >= 60: return "C";
//         case marks >= 50: return "D";
//         default: return "Fail";
//     }
// };


// function saveRecord() {
//     const studentName = document.getElementById("studentName").value;
//     const gender = document.querySelector('input[name="gender"]:checked');
//     const courseName = document.getElementById("courseName").value;
//     // const subject = document.getElementById("subject").value;
//     const marks = parseInt(document.getElementById("marks").value);
    
//     if (!gender || courseName === "" || isNaN(marks)) {
//         alert("Please fill all fields correctly!");
//         return;
//     }
    
//     const grade = getGrade(marks);
    
//     const table = document.getElementById("studentTable");
//     const newRow = table.insertRow(-1);
//     newRow.className = "flex fex-col items-center  justify-around ";
    
//     const studentData = [studentName, gender.value, courseName, marks, grade];
//     studentData.forEach((data) => {
//         let cell = newRow.insertCell();
//         cell.className ="p-5 pl-20"
//         cell.textContent = data;
//     });
// }

// function clearForm() {
//     document.getElementById("studentForm").reset();
// }
const getGrade = (marks) => {
        switch (true) {
            case marks >= 90 && marks <=100: return "A+";
            case marks >= 80: return "A";
            case marks >= 75: return "B+";
            case marks >= 70: return "B";
            case marks >= 60: return "C";
            case marks >= 50: return "D";
            default: return "Fail";
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        // Create table structure
        const tableContainer = document.getElementById('tableContainer');
        
        // Clear any existing content
        tableContainer.innerHTML = '';
        
        // Create table element
        const table = document.createElement('table');
        table.id = 'studentTable';
        table.className = 'w-full table-auto';
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const headers = ['Student Name', 'Gender', 'Course', 'Marks', 'Grade'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.className = 'text-center';
            th.style.width = "20% ";
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        
        // Add table to container
        tableContainer.appendChild(table);
    });
    
    function saveRecord() {
        // Get form values
        const studentName = document.getElementById("studentName").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const courseName = document.getElementById("courseName").value;
        const marks = parseInt(document.getElementById("marks").value);
        
        // Validation
        if (!gender || courseName === "" || isNaN(marks)) {
            alert("Please fill all fields correctly!");
            return;
        }
        
        // Get grade
        const grade = getGrade(marks);
        
        // Add to table
        const table = document.getElementById('studentTable');
        const tbody = table.querySelector('tbody');
        const newRow = tbody.insertRow();
        // newRow.className = 'hover:bg-gray-100';
        
        // Create table cells
        const studentData = [studentName, gender.value, courseName, marks, grade];
        studentData.forEach((data, index) => {
            const cell = newRow.insertCell();
            cell.className = " p-2 text-center w-1/5";
           
            cell.textContent = data;
        });
    }
    function clearForm() {
            document.getElementById("studentForm").reset();
        }

