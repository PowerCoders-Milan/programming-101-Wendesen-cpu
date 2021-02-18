//insert your pseudocode below
 
/*
here
*/

//Insert your code below

var Lsit_of_Months, List_of_Values_on_months, Month, Day, Indext_of_Month, Value_of_the_month, Last_Value_of_the_Date;


Lsit_of_Months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');
List_of_Values_on_months = '0,31,59,90,120,151,181,212,243,273,304,334'.split(',');
Month = window.prompt('Insert the month just using the first three letters');
Day = Number(window.prompt('Insert the date'));
Indext_of_Month = Lsit_of_Months.indexOf(Month) + 1;
Value_of_the_month = List_of_Values_on_months[(Indext_of_Month - 1)];
Last_Value_of_the_Date = (Value_of_the_month - 0) + Day;
window.alert(Last_Value_of_the_Date);
