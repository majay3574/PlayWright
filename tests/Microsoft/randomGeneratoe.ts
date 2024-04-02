const BalAccountValues = ["World Wide Bank", "Giro Bank", "New Bank of London", "World Wide Bank"];
const dummy = ["Outsourced Logistics", "Main Warehouse", "Blue Warehouse", "East Warehouse"];

export function randomGenerator(dataEmulator: string[]): string {
    const randomIndex = Math.floor(Math.random() * dataEmulator.length);
    const randomValue = dataEmulator[randomIndex];
    return randomValue;
}
let ram1: any = randomGenerator(BalAccountValues);
let ram2: any = randomGenerator(dummy);

