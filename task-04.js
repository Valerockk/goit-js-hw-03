const countTotalSalary = function (employees) {
  const salarys = Object.values(employees);
  let totalS=0;
  for(const salary of salarys){
    totalS += salary;
  };
  return totalS;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400