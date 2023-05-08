function joinArrayRemoveDuplicate(arrayA, arrayB) {
  const combinedArray = [...arrayA, ...arrayB];
  const uniqueArray = Array.from(new Set(combinedArray));
  return uniqueArray;
}

console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
console.log(joinArrayRemoveDuplicate(["jambu", "anggur", "basketball"], ["mangga", "basketball", "football"]));
