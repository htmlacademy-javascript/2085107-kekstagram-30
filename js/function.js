function checkLength(str, maxLength) {
  const success = `строка прошла  ${str}`;
  const fail = `строка не прошла  ${str}`;
  if (str.length <= maxLength) {
    return success;
  } return fail;
}
checkLength();


function checkPalindrome(str) {
  const normalizeStr = str.replaceAll() && str.toLowerCase();

  let reverseStr = '';

  for (let i = normalizeStr.length - 1; i >= 0; i--) {
    reverseStr += normalizeStr[i];
  }


  const result = normalizeStr === reverseStr;
  return `${str}, ${result}`;

}
checkPalindrome();
