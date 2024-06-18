interface User {
    name: string;
    age?: number; 
  }
  
  const user1: User = {
    name: "Alice"
  };
  
  const user2: User = {
    name: "Bob",
    age: 30
  };
  
  type Client = {
    name: string;
    age?: number;
  };
  
  const client1: Client = {
    name: "Alice",
    
  };
  
  const client2: Client = {
    name: "Bob",
    age: 30
  };
  
// !  --> not undefined
    if (client1.age === client2.age) {
      console.log("They are the same age");
    } else if (client1.age!> client2.age!) {
      console.log("Client1 is older than Client2");
    } else {
      console.log("Client1 is younger than Client2");
    }
  
  
  console.log(client1);
  console.log(client2);
  
  