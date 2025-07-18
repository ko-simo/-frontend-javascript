interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (
    (typeof salary === 'number' && salary < 500) ||
    (typeof salary === 'string' && Number(salary.replace('$', '')) < 500)
  ) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Testing the function:
console.log(createEmployee(200));     // Teacher instance
console.log(createEmployee(1000));    // Director instance
console.log(createEmployee('$500'));  // Director instance
