let fname: { [key: string]: string } = {
    name1: "ajay",
    name2: "Michael"
}

Object.entries(fname).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
    if (value === "ajay") {
        console.log(key);
    }
});

