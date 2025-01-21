import { log } from "console";

const map = new Map();

map.set("admin", "ajay");
map.set("creator", "muthu");
map.set("manager", "victor");
map.set("staff", "carl");

console.log(map.get("staff"));
console.log(map.size);
console.log(map.delete("staff"));
console.log(map.get("staff"));
map.set("staff", "Mukesh");
console.log(map.get("staff"));

for (let [key, value] of map) {
    console.log( value);
}
