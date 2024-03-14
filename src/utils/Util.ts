// let valAny: any = 1;
// let valUnknown: unknown = 1;
// let valNever: never;

// let names: readonly string[] = ["Dylan"]
// // names.push('sss');

// // A tuple is a typed array with a pre-defined length and types for each index.
// let ourTuple: readonly [number, boolean, string];

// ourTuple = [5, false, 'ssss'];

// const car = {
//     type: "Toyota",
// }

// car.type = "Ford"
// // car.type = 2

// interface Car {
//     type: string;
//     model?: number;
// }

// const maruti: Car = {
//     type: 'aaa',
//     model: 1
// }

// const hundai: Car = {
//     type: 'sss'
// }


// if (typeof valUnknown === 'number') {
//     valUnknown++;
// }



// const salary1 = {
//     baseSalary: 100_000,
//     yearlyBonus: 20_000
// };
  
// const salary2 = {
//     contractSalary: 110_000
// };

// function totalSalary(salObj: {[key: string]: number}) {
//     let total = 0;
//     for(const name in salObj) {
//         total += salObj[name];
//     }
//     return total;
// }

// console.log(totalSalary(salary1))
// console.log(totalSalary(salary2))


// interface StringbyString {
//     [key: string]: string
// }


// const herosInBooks: StringbyString = {
//     "sss": "ssss"
// }

// let rObject: Record<string, string> = {
//     "test": "fff"
// }
export {}