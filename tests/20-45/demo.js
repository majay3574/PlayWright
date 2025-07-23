function a() {
    let x = 10
    let y = 1
    return x + y
}
function b() {
    return a();
}

function c() {
    console.log(b());

}

c()
