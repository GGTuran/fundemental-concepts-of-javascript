const subject = {
    name: 'Biology',
    Teacher: 'Sir',
    ExamDate:'14th April',
    Chapters:['first', 'second', 'third'],
}


const student = {
    name: 'Name',
    Roll:"12",
    Section:"A",
    Department:"Science",
}
console.log(student);
console.log(subject);
// ways to get an element from object
// by using dot notation
console.log(student.Department);

// by declaring
const dept = student.Department;
console.log(dept);

// bracket notation

console.log(student['Section'])