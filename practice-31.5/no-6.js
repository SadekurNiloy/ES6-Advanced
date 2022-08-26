const mobileDetails = [
    {name: 'tecno', id: 1, price: 5600},
    {name: 'minister', id: 2, price: 6000},
    {name: 'tecno-2', id: 1, price: 4600},
    {name: 'nokia', id: 1, price: 5000},
]
const mobile = mobileDetails.find(mobileDetail => mobileDetail.price === 5000);
console.log(mobile);