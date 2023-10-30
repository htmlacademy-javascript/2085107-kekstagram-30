function checkLength(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}
checkLength('dadada',2);


function checkPalindrome(str) {
  const normalizeStr = str.replaceAll(' ','').toLowerCase();

  let reverseStr = '';

  for (let i = normalizeStr.length - 1; i >= 0; i--) {
    reverseStr += normalizeStr[i];
  }


  return normalizeStr === reverseStr;


}
checkPalindrome('топот');

