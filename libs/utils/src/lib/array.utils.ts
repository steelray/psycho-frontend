
export function findBinary(arr: any[], x: any, start: number, end: number, key?: string): any {

  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);
  const v = typeof arr[mid] === 'object' && arr[mid] !== null && key ? arr[mid][key] : arr[mid];
  // Compare mid with given key x
  if (v === x) return arr[mid];

  // If element at mid is greater than x,
  // search in the left half of mid
  if (v > x)
    return findBinary(arr, x, start, mid - 1, key);
  else

    // If element at mid is smaller than x,
    // search in the right half of mid
    return findBinary(arr, x, mid + 1, end, key);
}


export function find(array: any[], x: any, key?: string) {
  let res;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (typeof item === 'object' && key && x === item[key]) {
      res = item;
      break;
    } else if (item === x) {
      res = item;
      break;
    }
  }
  return res;
}
