let smallnum=[6,7,8,5,4,0,3,2,1,9]
  smallnum.sort()
  console.log(smallnum)

let num=[19, 7, 0, 3, 18, 15, 12, 6, 1, 8,
    11, 10, 9, 5, 13, 16, 2, 14, 17, 4]
    //num.sort()
    
    num.sort(function(a, b) {
        return a - b;
    });
    
    console.log(num);
    