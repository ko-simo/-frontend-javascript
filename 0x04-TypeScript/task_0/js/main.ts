interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  table.border = "1";

  const header = table.insertRow();
  const th1 = document.createElement('th');
  th1.textContent = "First Name";
  const th2 = document.createElement('th');
  th2.textContent = "Location";
  header.appendChild(th1);
  header.appendChild(th2);

  students.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell();
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
