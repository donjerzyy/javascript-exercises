function listContains(arr, value) {

    for(i=0; i<arr.length;i++) {
        if(arr[i] === value) {
            return i
        }
    }

    return -1

}


const removeFromArray = function(nums, ...toDelete) {
    let arrayLength = nums.length;
    let toDeleteLength = toDelete.length
    
    for(let i=0; i<toDeleteLength; i++) {
        let contains = listContains(nums,toDelete[i])
        if(contains !== -1) {
            // shift // Delete
            for(let j=contains; j<nums.length-1; j++) {
                nums[j] = nums[j+1];
            }
            
            nums.pop()
        }
    }

    return nums
    
};





// Do not edit below this line
module.exports = removeFromArray;
