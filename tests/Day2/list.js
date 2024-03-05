let item = [];

function additem(data){
    item.push(data);
    console.log(item);
}

function removeitem(data){
    const index = item.indexOf(data); // Fix: Corrected variable name from 'removed' to 'index'
    if (index !== -1) {
        item.splice(index, 1); // Fix: Changed 'myList' to 'item'
        console.log("Item removed:", data);
        console.log("Updated list:", item);
    } else {
        console.log("Item not found in the list.");
    }
}

additem("Ajay");
additem("Michael");
additem("NS 200");

removeitem("NS 200");
