// Задание 6 с урока

function viewOddOrEvenDigits(digitsArray, isEven) {
    let digits = [];

    for (let i = 0; i < digitsArray.length; i++) {
        if (isEven && digitsArray[i] % 2 == 0) {
            digits.push(digitsArray[i]);
        } else if (!isEven && digitsArray[i] % 2 != 0) {
            digits.push(digitsArray[i]);
        }
    }
    alert(digits);
}

viewOddOrEvenDigits([1, 2, 3, 4, 5, 6], true);
viewOddOrEvenDigits([1, 2, 3, 4, 5, 6], false);

// Задание 7 с урока

function getNextDay(day, month, year){
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);

    alert(`Завтра будет ${date.getDate().toString()}.${(date.getMonth() + 1).toString()}.${date.getFullYear().toString()}`);
}
getNextDay(31, 12, 2009);
getNextDay(28, 2, 2012);
getNextDay(28, 2, 2013);

// Задание ДЗ 1

function isUnique(arr){
    for(let i = 0; i < arr.length; i++){
        let elem = arr[i];
        if (arr.indexOf(elem) != i){
            return false;
        }
    }
    return true;
}

alert(isUnique([1, 2, 3, 4]));
alert(isUnique([1, 2, 3, 4, 2]));

//Задание ДЗ 2

function mergeArrays(arr1, arr2){
    let res = arr1.concat(arr2);
    let uniqueArr = []
    for(let i = 0; i < res.length; i++){
        if(!uniqueArr.includes(res[i])){
            uniqueArr.push(res[i]);
        }
    }
    alert(uniqueArr.sort());
}
mergeArrays([9, 3, 2, 4], [4, 6, 5, 9]);

//Задание ДЗ 3

function replaceNegatives(arr, replacement){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = replacement;
        }
    }
    alert(arr);
}

replaceNegatives([1, 2, -3, 5, -8], 0);

//Задание ДЗ 4

function isPrime(digit){
    if(digit <= 1){
        return false;
    }

    for (let i = 2; i < digit; i++){
        if(digit % i == 0){
            return false;
        }
    }
    return true;
}

function getPrimes(arr){
    let res = [];

    for (let i = 0; i < arr.length; i++){
        if(isPrime(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}

alert(getPrimes([2, 3, 4, 5, 6, 7, 8]));
