//compute the simple interest
function compute()
{
    //declare the variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years *rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //check if the input amount is positive
    if(principal <= 0){
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
    }
    
    //return the result after the computation
    document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>, \<br\>  at an interest rate of <mark>" + rate + 
    "</mark>%. \<br\> You will receive an amount of <mark>" + interest + "</mark>, \<br\> in the year <mark>" + year + "</mark>";
}
//updating the selected rate
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
