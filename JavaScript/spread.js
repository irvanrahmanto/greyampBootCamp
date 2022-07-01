//  .. spread operator 2015 es6 feature
// [1,2,3,4,6], {1: "a"}

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const arrX = ['a', 'b', 'c']

// Merged 2 array
// const arr3 = arr1+arr2;
// const arr3 = [...arr1, ...arr2];
const arr3 = [...arr1];

// add new value in array
arr3.push(11);

// console.log(arr3);
// console.log()
// console.log(typeof(arr1))

// let str1 = "abc";
// let str2 = str1;
// str2 += "def"

// console.log("str1", arr1);
// console.log("str2", arr3);

// assign by value -> let str1 = "abc";
// assign by references -> let str2 = str1; str2 += "def"

// If we using spread -> '...' in array or object, it will be not change your previous value, but if you do the opposite, it will be change

const obj1 = {
    a:1,
    b:2,
    c:3,
    d:4
};

const emp = {
    name: 'Irvan',
    designation: 'Information Technology'
}

const intern = {
    ...emp,
    designation: 'Internship',
    sallary: 200
}

const sse = {
    ...emp, sallary: 5000
}

// console.log(emp);
// console.log(intern); 
// console.log(sse);


// Rest Operator

const myFunc = (a,b, ...restParams) => {
    console.log(a);
    console.log(b);

    for(let i of restParams){
        console.log(i);
    }
}

myFunc(1,2,3,4,5,6,7,8);

// console.log(1,33,43,11,12,4,5,6,7,3,2,244);
