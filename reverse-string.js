//Bad Practices
function reverseString(str) {
  splitedStr = str.split("");
  reversedStr = splitedStr.reverse(function(a, b) {
  	return b - a;
  })
  joinedStr = reversedStr.join("");
  return joinedStr;
}

//Clean code
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));