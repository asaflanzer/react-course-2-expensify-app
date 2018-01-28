// const person = {
// 	name: 'Andrew',
// 	age: 26,
// 	location: {
// 		city: 'Philadelphia',
// 		temp: 92
// 	}
// };

// const {name : firstName= 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature } = person.location;
// if (city && temperature ) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
// 	title: 'Ego is the Enemy',
// 	auther: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Pinguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// if (publisherName){
// 	console.log(publisherName);
// }

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [ itemName, small, medium, large] = item;

console.log(`A medium ${itemName} costs ${medium}.`);