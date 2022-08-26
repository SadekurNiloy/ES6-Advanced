// console the value of age
const student = {
    name: 'Fredie',
    age: 26,
}
const age = student.age;
console.log(age);


// console the value of city

let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
}
const city1 = data.location[0].city;
console.log(city1)


// Console the value of email
// ● Console the value of address
// ● Console the value of city
// ● Console the value of lat
// ● Console the value of company
// name
const user = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92988-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496',
        },
        phone: '1-770-736-x56442',
        website: 'hilegard.org',
        company: {
            name: 'Romauera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness ral-time e-markets'
        }
    }
}

const email = user.email;
const address = user.address;
let city = user.address.city;
const lat = user.address.geo.lat;
const companyName = user.address.company.name;
console.log(email);
console.log(address);
console.log(city);
console.log(lat);
console.log(companyName);