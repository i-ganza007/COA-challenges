//Init a start and end === 0
// If the sum of elements in total_list === target , return true 
// If not , keep moving and until  end without an answer , return false 
function arrManip(arr_list,target){
    let begin = 0;
    let end = 0;
    let total_list = arr_list[0];

    while (begin < arr_list.length){
        if (total_list === target){
            return true;
        }
        else if(total_list<target){
            end++;
            if(end>=arr_list.length){
                break;
            }
            total_list += arr_list[end];
        }
        else {
            total_list -= arr_list[begin];
            begin++;
        }
    }
    return false
}

console.log(arrManip([4, 2, 7, 1, 9, 5],17))