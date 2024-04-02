const BalAccountValues = ["World Wide Bank", "Giro Bank", "New Bank of London", "World Wide Bank"];
const dummy = ["Outsourced Logistics", "Main Warehouse", "Blue Warehouse", "East Warehouse"];

function randomGenerator(dataEmulator: string[]): string {
    const randomIndex = Math.floor(Math.random() * dataEmulator.length);
    const randomValue = dataEmulator[randomIndex];
    return randomValue;
}

let ram1: any = randomGenerator(BalAccountValues);
console.log(ram1);

let ram2: any = randomGenerator(dummy);
console.log(ram2);



/* const BalAccountValues = ["World Wide Bank", "Giro Bank", "New Bank of London", "World Wide Bank"];
function BalAccountValue(BalAccountValues: string[]): string {
    const randomIndex = Math.floor(Math.random() * BalAccountValues.length);
    const randomValue = BalAccountValues[randomIndex];
    return randomValue;
}
let ranmBalance: string = BalAccountValue(BalAccountValues);
console.log(ram1)
 */