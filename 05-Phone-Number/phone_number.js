//insert your pseudocode below
/*
here
*/

//insert your code below

var result2, result, input, i;


result2 = '';
result = '';
input = window.prompt('Input the phone number').split(' ');
for (var i_index in input) {
  i = input[i_index];
  result += String(i);
}
input = result.split('.');
for (var i_index2 in input) {
  i = input[i_index2];
  result2 += String(i);
}
if (result2.length == 15) {
  if (result2.charAt(0) == '(') {
    window.alert('Valid Phone number');
  } else {
    window.alert('Invalid Phone number');
  }
} else if (result2.length == 10) {
  window.alert('Valid Phone number');
} else {
  window.alert('Invalid Phone number');
}
