const student = {
    name: 'sabbir',
    class: 'six',
    marks: {
        math: 67,
        english: 90
    },
    id: 1,
    address: [
        { village: {
            name: 'vararul',
        }
            
        }
    ]
}
const english = student[marks];
console.log(english)
const math = student.marks.math;
const villageName = student.address[0].village.name;
console.log(math)
console.log(villageName)