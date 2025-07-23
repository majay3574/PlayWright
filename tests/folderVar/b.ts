import { generateAcessToken } from "./a";

function postCall(){
    let token = generateAcessToken();
    return token
}
console.log(postCall());

function getCall(){
    let token = generateAcessToken();
    return token
}
console.log(getCall());
