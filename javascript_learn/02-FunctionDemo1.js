function add(a,b){
    return a+b;
}

const addArrow = (a,b) => {
    return a+b;
};

const multiply = (a,b) => a*b;
const a = multiply(2,3);
console.log(a);

const numbers = [1,2,3,4,5];

const squares = numbers.map(n => n*n)
console.log(squares);