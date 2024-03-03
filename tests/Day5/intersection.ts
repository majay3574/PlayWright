
// let id: number | string;
// id = 10;
// id = "Nandhakumar"


// console.log(id);


type stringOrNumber = string | number;


//let varName: type = value
let value: stringOrNumber = "TypeScript";
value = 10.5;


type supportedBrowsers = "Chrome"|"Firefox";
//function funcName(parameter:type)
function invokeBrowser(browserName:supportedBrowsers):void{
        if(browserName === 'Chrome'){
            console.log("Launch Chrome Browser");
        }
        else{   
            console.log("Launch Firefox");      
        }
}
invokeBrowser("Chrome")


//Intersection
 
type Employee = { id:number, empName:string};
type Department = {department: string};


type Team =  Employee & Department;
//let team: Employee & Department ={ id: 1003, empName:"HemaKarthick", department: "QA"}
let team: Team ={ id: 1003, empName:"HemaKarthick", department: "QA"};


console.log(team);