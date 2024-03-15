import fs from "fs"
let a = [
    { 
        attributes: { /* Assuming this is an object */ },
        Id: '0015g00001drsUcAAI',
        Name: 'syndicate end-to-end supply-chains'
    },
    {
        attributes: { /* Assuming this is an object */ },
        Id: '0015g00001drsUzAAI',
        Name: 'harness cross-platform mindshare'
    }
];

let idArray:string[] = [];

for (let i = 0; i < a.length; i++) {
    idArray.push(a[i].Id);
}

console.log(idArray);




let formattedIds: { Id: string }[] = [];

    for (let i = 0; i < idArray.length; i++) {
        formattedIds.push({ Id: idArray[i] });
    }
console.log(formattedIds)

fs.writeFileSync('example.json', JSON.stringify(formattedIds));