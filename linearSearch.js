const linearSearch = (unsortedArrayOfNumbers, target) => {
    for(let i = 0; i < unsortedArrayOfNumbers.length; i ++){
        if(unsortedArrayOfNumbers[i] == target){
            return `target found in index ${i}`
        }
    }
    return "target not found"
}


const unsortedArrayOfNumbers = [1,4,5,1,3,2,4,5,6,2,3]
let target = 6;
let result = linearSearch(unsortedArrayOfNumbers, target)
console.log(result)