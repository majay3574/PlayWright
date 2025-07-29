class School {
     fname: string;
     age: number;

     constructor(fname: string, age: number) {
        this.fname = fname;
        this.age = age;
    }

    student_1() {
        console.log(this.fname);
    }

    student_2() {
        console.log(this.age)
    }
}


const s1 = new School("Ajay", 23);
s1.student_1();
s1.student_2();