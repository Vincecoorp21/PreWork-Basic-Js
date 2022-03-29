// 1. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  // moment of truth
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

//2.  Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return (i = i * 2);
}

//3.Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

//Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

// 4.Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions
let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;
let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//5. The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

function enough(cap, on, wait) {
  // your code here
  if (cap >= on + wait) {
    return 0;
  } else {
    return on + wait - cap;
  }
}

//6. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'odd';
  } else {
    return 'even';
  }
}
//7.Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'par';
  } else if (number % 2 != 0) {
    return 'impar';
  }
}
console.log(even_or_odd(-7));

//8.Implement a function which multiplies two numbers.
// Write here your multiply-function
function multiply(num1, num2) {
  return num1 * num2;
}

// 9. Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// function yearDif(yearbirth, yearcount) {
//   if (yearbirth < yearcount) {
//     console.log(`You are ${yearcount - yearbirth}`);
//   } else if (yearbirth > yearcount) {
//     console.log(`You will be born in ${yearbirth - yearcount} year(s)`);
//   } else if ((yearbirth = yearcount)) {
//     console.log('You were born this very year!');
//   }
// }

// yearDif(1999, 1999);
function calculateAge(yearbirth, yearcount) {
  let dif1 = yearcount - yearbirth;
  let dif2 = yearbirth - yearcount;
  if (dif1 === 1) {
    return 'You are 1 year old.';
  } else if (dif2 === 1) {
    return 'You will be born in 1 year.';
  } else if (yearbirth < yearcount) {
    return 'You are ' + dif1 + ' years old.';
  } else if (yearbirth > yearcount) {
    return 'You will be born in ' + dif2 + ' years.';
  } else if (yearcount === yearbirth) {
    return 'You were born this very year!';
  }
}
