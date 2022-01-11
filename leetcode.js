var longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[j - 1][i]) return prefix;
    }
    prefix += strs[0][i];
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
