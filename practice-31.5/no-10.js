const student = {
    name: 'sadik',
    id: 1,
    school: {
        primary: 'Rahapara Govt. Primary School',
        class: 5,
        roll: 2,
        school: {
            high: 'GK Adarsha High School',
            class: 10, 
            roll: 4,
            group: 'Business Study',
        }
    },
    friend: ['sahadat', 'mithun', 'nayem'],
    SSCgpa: 4.67,
    address: {
        village: 'Vararul',
        district: 'Gazipur',
        upazila: {
            upazila: 'Gazipur Sadar'
        }
    }
}
const high = student.school.school.high;
const friend = student.friend;
console.log(high);
console.log(friend);