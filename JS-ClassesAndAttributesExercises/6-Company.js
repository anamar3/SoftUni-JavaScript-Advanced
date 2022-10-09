class Company {
    departments = {};
    addEmployee(name, salary, position, department) {
        let currInfo = [name, salary, position, department];
        if (currInfo.includes(null) || currInfo.includes('') || currInfo.includes(undefined)) {
            throw new Error("Invalid input!");
        } if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!Object.keys(this.departments).includes(department)) {
            this.departments[department] = [];
        }
        salary = Number(salary);
        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let highestSalary = 0;
        let bestDepName = null;
        let bestDep = {};

        for (const department of Object.keys(this.departments)) {
            let count = 0;
            let currSalary = 0;
            for (const person of this.departments[department]) {
                currSalary += person.salary;
                count++;
            }
            if (currSalary / count > highestSalary) {
                highestSalary = currSalary / count;
                bestDep = this.departments[department];
                bestDepName = department;
            }
        }



        let result = [`Best Department is: ${bestDepName}`,
        `Average salary: ${highestSalary.toFixed(2)}`];



        let array = Array.from(Object.values(bestDep)).sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        for (const person of array) {


            result.push(`${person.name} ${person.salary} ${person.position}`);


        }
        return result.join('\n');
    }

}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());

