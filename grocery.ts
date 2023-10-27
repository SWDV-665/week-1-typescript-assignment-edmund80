class Grocery {
    constructor(public name: string, public quantity: number, public price: number) {}
  }
  
  const groceries = [
    new Grocery("Milk", 3, 4.99),
    new Grocery("Bread", 6, 4.99),
    new Grocery("Eggs", 11, 3.59),
  ];
  
  for (const grocery of groceries) {
    console.log(grocery.name, grocery.quantity, grocery.price);
  } 