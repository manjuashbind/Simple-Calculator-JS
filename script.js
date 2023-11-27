// Display Number on input Box
function displayNum(num){
inputbox.value+=num;
// inputbox.value+=num;
}
//clear button AC
function clearText(){
    inputbox.value=' ';
}
//Evaluate Expression find the resulr of expression using eval()
function evaluateExpression(){
    inputbox.value=eval(inputbox.value)
}
//Delete Button
function removeLastItem(){
    inputbox.value=inputbox.value.slice(0,-1)
}
