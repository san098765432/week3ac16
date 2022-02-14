// Write Your Code Below

// declare a function

function EvaluatingValues (value1, value2) {

    if  ( value1 === value2) {
        return 'They are equal in type and value';
    }
    else if (value1 == value2) {
        return 'They are equal in value';
    }
}

// test for option 1 where we evaluate whether the values are in equal in type AND value

var result1 = EvaluatingValues (10, 10);
    console.log("They are equal in type and value");


// option2: test whether values are equal in value but NOT type

var result2 = EvaluatingValues ( 10, '10');
console.log ('They are equal in value');

//option 3: the values are not equal at all, not in type OR value
var result3 = EvaluatingValues ( 10, 'ten');
console.log ("The values are not equal");