function union(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    arr1.forEach(item => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    arr2.forEach(item => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
 
    return result;
}
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(union(array1, array2)); 