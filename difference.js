function removeCharsFromB(a, b) {
    for (let i = 0; i < a.length; i++) {
      const charToRemove = a[i];
      b = b.replace(charToRemove, '');
    }
    return b;
  }
  
  const a = "abcd";
  const b = "abcde";
  
  const result = removeCharsFromB(a, b);
  console.log(result);