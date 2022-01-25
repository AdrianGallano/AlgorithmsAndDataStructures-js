
function binarySearch(sortedArrayOfNumbers, target){
    // O(log(n))
    //find n in array and return target 
    let low = 0
    let top = sortedArrayOfNumbers.length - 1
    let mid;
    while(low < top){
        mid = Math.floor((low+top )/2) // 
        console.log(mid)
        if(target == sortedArrayOfNumbers[mid]){
            return `index of number ${target} is in ${mid}`
        }else if(target < sortedArrayOfNumbers[mid]){
            top = mid - 1
        }else{
            low = mid + 1
        }
    }
    return "target not found"
}
const sortedArrayOfNumbers = [13,20,80,65,100,1230,3213,10032];
let target = 21;
const result = binarySearch(sortedArrayOfNumbers, target)
    


