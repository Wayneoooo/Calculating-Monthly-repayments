//What is the principal amount? P = 120000;
//What is the interest rate? fixed interest rate at 12%;
//What is the term for the mortgage? 20 years
//How often should the mortgage be paid? Monthly (12 payments in a year)
//Monthly Mortgage repayment formula: (principal * (rate/payments per year)) / (1 - (1 + (rate/payments per year)**(-payments per year * term)
function rateasdecimal() {
    return 12 / 100;
  } //function to convert the interest rate from percentage to decimal form
  console.log(rateasdecimal());//view output to confirm whether the operation was successful
  //let x = rate / payments per year;
  function getx(){
    return  0.12 / 12;
  }
  console.log(getx());
  x = 0.01 //assign the output of the previous operation to x 
  function getnumeratoroutput(){
    return 120000 * x; //according to the formula 
  } //function to get the result of all operations in the numerator of the formula
  console.log(getnumeratoroutput());
  //let the numerator output  = a; this is the result of the above operation
  a = 1200;
  function pwroperation(){
    return (1 + x) ** (-12 * 20);// according to the mortgage repayment formula; This is the operation in the denominator where 12 = payments per year and  20 = mortgage term;
  }//function to determine the result of the power operation in the denominator of the formula
  console.log(pwroperation());
  //let y = the result of the operation above;
  y = 0.09180583651698412;
  function getdenominatoroutput(){
    return 1 - y;
  }//function to get the reult of all the operations in the denominator
  console.log(getdenominatoroutput());
  //let the denominator output = b;
  b = 0.9081941634830158;
  function monthlymortgagerepayments(){
    return a / b; 
  }//function to get the result of the monthly mortgage repayments
  console.log(monthlymortgagerepayments());//this is how much the person is expected to repay monthly