const users = [
    {name: 'sadik', id: 1, profession: 'web-developer'}
]
// console.log(users[0].name)

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'sahadat', job: 'leader'},
        {id: 2, name: 'mithun', job: 'leader'}
    ]
}
const friendData = data.data[1].name
console.log(friendData);


const user = {
    id: 5001,
    name: 'Sahadat Hossain',
    address: {
        street: {
            first: '35/A Harbaid Gazipur',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'Harbaid',
        city: 'Dhaka'
    }
    
}
const friendInfo = user.address.street.second;
console.log(friendInfo)