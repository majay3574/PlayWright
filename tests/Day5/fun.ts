function add(a,b):number{
    return a+b
}

console.log(add(10,2));

let x:number
function addExplicit(x, y: number): number {
    return x + y;
}

function addImplicit(a: any, y: number) {
    return x + y;
}

const resultExplicit: number = addExplicit(10, 2);
const resultImplicit = addImplicit(10, 2); 

console.log("Explicit result:", resultExplicit);
console.log("Implicit result:", resultImplicit);