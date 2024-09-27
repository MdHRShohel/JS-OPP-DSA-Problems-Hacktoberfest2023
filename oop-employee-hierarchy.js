class Employee {
  constructor(name, id, position, salary) {
    this.name = name;
    this.id = id;
    this.position = position;
    this.salary = salary;
  }

  getDetails() {
    return `Name: ${this.name}, ID: ${this.id}, Position: ${this.position}, Salary: $${this.salary}`;
  }

  promote(newPosition, newSalary) {
    this.position = newPosition;
    this.salary = newSalary;
  }
}

class Manager extends Employee {
  constructor(name, id, salary, teamSize) {
    super(name, id, "Manager", salary);
    this.teamSize = teamSize;
  }

  getDetails() {
    return `${super.getDetails()}, Team Size: ${this.teamSize}`;
  }
}

class Developer extends Employee {
  constructor(name, id, salary, programmingLanguage) {
    super(name, id, "Developer", salary);
    this.programmingLanguage = programmingLanguage;
  }

  getDetails() {
    return `${super.getDetails()}, Programming Language: ${
      this.programmingLanguage
    }`;
  }
}

class Designer extends Employee {
  constructor(name, id, salary, designSpecialty) {
    super(name, id, "Designer", salary);
    this.designSpecialty = designSpecialty;
  }

  getDetails() {
    return `${super.getDetails()}, Design Specialty: ${this.designSpecialty}`;
  }
}

// Usage
const manager1 = new Manager("Alice", 101, 60000, 5);
const developer1 = new Developer("Bob", 102, 75000, "JavaScript");
const designer1 = new Designer("Charlie", 103, 55000, "User Experience");

console.log(manager1.getDetails());
console.log(developer1.getDetails());
console.log(designer1.getDetails());

manager1.promote("Senior Manager", 70000);
console.log(manager1.getDetails());
