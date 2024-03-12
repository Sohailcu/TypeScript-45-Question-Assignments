interface item {
    name:string
    Price:number
    Model:string
    Serail:Number
}
// create three ojectes
const Mobile: item= {
            name: 'Apple',
            Price: 65000,
            Model: 'Iphone',
            Serail: 13,
}
const Laptop: item= {
            name: 'Lenovo',
            Price: 45000,
            Model: 'thinkpad',
            Serail: 10,
}
const SmartWatch: item= {
            name: 'Smart Watch',
            Price: 30000,
            Model: 'Zero',
            Serail: 29,
}
console.log(`\nMobile Name: ${Mobile.name}, Model ${Mobile.Model}, Serail ${Mobile.Serail}, Price Rs ${Mobile.Price}\n`);
console.log(`\nLaptop Name: ${Laptop.name}, Model ${Laptop.Model}, Serail ${Laptop.Serail}, Price Rs ${Laptop.Price}\n`);
console.log(`\nSmartWatch Name: ${SmartWatch.name}, Model ${SmartWatch.Model}, Serail ${SmartWatch.Serail}, Price Rs ${SmartWatch.Price}\n`);
