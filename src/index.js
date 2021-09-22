let foo = 1;
foo = foo + 2;
foo += 2;
foo++;
foo--;
foo = 5;
foo = foo % 2;

let str = 'hello';
str = str + ' world' + '!';
str = str.toUpperCase();
str = str.substr(6);

let array = [
    'apple',
    'cherry',
    'pear'
];
array.push(23, Math.PI);
array.pop();
array[1] = 'apricot';

console.log(array);

let obj = {
    name: 'marit',
    age: 18,
    isFemale: true,
    "1 m": 'lala',
};

let prop = 'age';
obj.eyes = 'blue';

console.log(obj);

function add(a, b) {
    return a + b;
};

// let sub = function (a, b) {
//     return a - b;
// }

let sub = (a,b) => {
    return a - b;
}

let result = add(2, 3);

obj = {
    array: ['a', 'b'],
    obj: {
        name: 'marit',
        age: 18
    },
    add(a, b) {
return a + b;
    },
    cat: 'nuustik'
}
// setInterval(() => {
//     console.log('hello');
// }, 5000);

array = [
    {name: 'marit'},
    {name: 'keskyla'}
]

array = [[[[[1]]]]];
console.log(array[0][0][0][0][0]);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    whoAmI() {
        console.log('Hi my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

let person1 = new Person('Marit', 18);
console.log(person1.name);
person1.whoAmI();
let person2 = new Person('Eva', 21);
person2.whoAmI();

