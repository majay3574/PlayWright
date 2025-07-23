class Person {
    name: string;
    age: number;

    constructor(name: string, age: number);
    constructor(data: { name: string; age: number });
    constructor(nameOrData: any, age?: number) {
        if (typeof nameOrData === 'object') {
            this.name = nameOrData.name;
            this.age = nameOrData.age;
        } else {
            this.name = nameOrData;
            this.age = age!;
        }
    }
}

const a1 = new Person("ajay", 55)
const a2 = new Person({name:"ajay",age:22})