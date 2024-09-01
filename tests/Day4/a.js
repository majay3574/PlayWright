let products = [
    {name: "Prod1", price: 10},
    {name: "Prod2", price: 30},
    {name: "Prod3", price: 60}
  ];
  
  let newProd = products.map(prod => ({
    name: prod.name,
    price: prod.price * 0.1
  }));
  
  console.log(newProd);
  