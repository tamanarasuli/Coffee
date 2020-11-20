function negative(goal, intake) {
    let flag = false; 
    if (goal < 0 || intake < 0) {
        flag = true;
        return flag; 
    } else {
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
        return flag;
    }
}
exports.negative = negative; 
exports.less = less;
exports.empty = empty;
