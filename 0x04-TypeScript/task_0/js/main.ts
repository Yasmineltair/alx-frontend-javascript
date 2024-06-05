interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ahmed",
  lastName: "Hassan",
  age: 28,
  location: "Cairo",
};

const student2: Student = {
  firstName: "Amal",
  lastName: "Hassan",
  age: 20,
  location: "Portsaid",
}

const studentsList: student[] = [student1, student2];

function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
    });
  document.body.appendchild(table);
}

renderTable();
