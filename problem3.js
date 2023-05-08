function removeDuplicates(array) {
  const uniqueArray = [...new Set(array)]; // Menghilangkan duplicate dalam array dengan menggunakan method Set()
  return uniqueArray;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]));
console.log(removeDuplicates([1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9, 9]));
