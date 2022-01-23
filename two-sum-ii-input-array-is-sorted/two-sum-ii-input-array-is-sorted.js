/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let small=0;
    let big=numbers.length-1;    
    while(small<big){
        if(numbers[small]+numbers[big]==target){
            return [small+1,big+1]
        }
        
        if(numbers[small]+numbers[big]<target){
            small++;
        }else{
            big--;
        }
    }
};
