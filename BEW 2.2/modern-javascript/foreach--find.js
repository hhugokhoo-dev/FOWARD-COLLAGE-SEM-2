const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => console.log(num));


//find

const numbers1 = [1, 2, 3, 4, 5, 6];
//                                          check the remain number is 0 or not
const result = numbers.find((num) => num % 3 === 0);

//num = 1 → 1 % 3 === 0 → false（continue）
//num = 2 → 2 % 3 === 0 → false（continue）
//num = 3 → 3 % 3 === 0 → true（found it and .find() stop and return 3）

console.log(result); // 3