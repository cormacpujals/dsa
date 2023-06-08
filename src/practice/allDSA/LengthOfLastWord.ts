function lengthOfLastWord(s: string): number {
  const w: string = s.trim();
  let wordStr: string = "";
  for (let i = w.length - 1; i >= 0; i--) {
    if (w[i] !== " ") {
      wordStr += w[i];
    } else {
      break;
    }
  }
  return wordStr.length;
};
