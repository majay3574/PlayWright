async function login(credentials){   
    return new Promise((a,b)=>{
         setTimeout(() => {
             if(credentials==="vidya"){
                a("Valid data")
                  }else{
                   b("Invalid data")
                  }        
         }, 5000);
     })   
  }
 
 
 async function validateUser(user,loginInfo){  
    try{
       const message=await loginInfo(user)
       console.log(message)
    }catch(error){
       console.log(error)
    }
 }
 
 
 validateUser("vidya",login) 
 console.log("Click on login")