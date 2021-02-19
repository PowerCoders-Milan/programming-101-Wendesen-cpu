//insert your pseudocode below
/*
here


*/

//insert your code below

var Password, Nam, List_of_letter, W, List_of_characters, Index_of_Characters, P, index_of_letters, Y;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


Password = mathRandomInt(10000, 99999);
Nam = 'a,b,c,d,e,f,g,h,i,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
List_of_letter = Nam.split(',');
W = '@,$,#,~,@,%,",.,&,?';
List_of_characters = W.split(',');
for (var count = 0; count < 3; count++) {
  Index_of_Characters = mathRandomInt(1, 10);
  P = List_of_characters[(Index_of_Characters - 1)];
  Password = P + Password;
}
for (var count2 = 0; count2 < 3; count2++) {
  index_of_letters = mathRandomInt(1, 26);
  Y = List_of_letter[(index_of_letters - 1)];
  Password = Y + Password;
}

window.alert(Password);
