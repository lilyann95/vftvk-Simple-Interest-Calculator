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
    document.getElementById("result").innerHTML="If you deposit <strong>" + principal + "</strong>, \<br\>  at an interest rate of <strong>" + rate + 
    "</strong>%. \<br\> You will receive an amount of <strong>" + interest + "</strong>, \<br\> in the year <strong>" + year + "</strong>";
}
//updating the selected rate
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
