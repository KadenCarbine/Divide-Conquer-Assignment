function countZeroes(arr) {
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;
  
    return arr.length - firstZero
  }

function findFirst(arr, lowIndex = 0, highIndex = arr.length - 1) {
    if (highIndex >= lowIndex) {
      let mid = lowIndex + Math.floor((highIndex - lowIndex) / 2)
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      } else if (arr[mid] === 1) {
        return findFirst(arr, mid + 1, highIndex)
      }
      return findFirst(arr, lowIndex, mid - 1)
    }
    return -1;
  }
module.exports = countZeroes