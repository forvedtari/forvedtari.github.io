total=document.getElementById('total');



function operation(number){
    total.value += number;
}
 function Result(){
    try{
        total.value=eval(total.value)
    }
    catch{
        alert("Wrong input");
    }
 }

 function Clear(){
    total.value = " ";
 }
 function del(){
    total.value = total.value.slice(0,-1);
 }