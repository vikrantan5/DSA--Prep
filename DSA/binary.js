
nums= [1,2,3,4,5,6,7,8,9,10]
target = 6
const Binary = function(nums , target){
    let n = nums.length;
    let left = 0 
    let right = n-1

    while(left <= right){
        let mid = Math.floor((left +right)/2)
        if(nums[mid] == target){
            return mid

        }
        else if(nums[mid] < target){
            left= mid+1
        }
        else{
            right = mid-1
        }
    }
    return -1

}


console.log(Binary(nums,target))