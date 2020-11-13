function negative(goal, intake) {
    // let word = $("#quantity").val(); 
    let flag = false; 
    if (goal < 0 || intake < 0) {
        flag = true;
         //alert("Enter a valid cup amount, please "); 
        return flag; 
     } else {
         //send(name, goal, intake); 
     }
}

function empty(name, goal, intake){
    let flag = false;
    if(name == null || goal == null || intake == null){
        flag = true;
        return flag;
    }
    
}

function less(goal, intake) {
   
    let flag = false; 
    if (intake < goal) {
        flag = true;
         //alert("Enter a valid cup amount, please "); 
         return flag;
        
     } else {
         
         
         //send(name, goal, intake); 
     }
}
exports.negative = negative; 
exports.less = less;
exports.empty = empty;
