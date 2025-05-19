
//display value presssed
function valueDisplay(value){
 let displaybox = document.getElementById('display');
 if(displaybox.value.length < 10){
    displaybox.value += value;
 }   
}

//clearall display function
function clearAllDisplay(){
    document.getElementById('display').value = "";
    // display.value = '';
}

// delete function
function deleteDisplay(){
    display.value = display.value.toString().slice(0,-1);
}

//calculate function
function calculate(){
    try{
        if(display.value.trim() === ''){
            display.value = '0';
        }else{
            display.value = eval(display.value);
        }
    }catch(error){
        display.value = 'Err';
    }
}







// const calculateBtn = document.getElementById('display');
// calculateBtn.addEventListener('click', function calculate(){
//     try{
//         if(dispay.value.trim() === ''){
//             display.value = '0';
//         }else{
//             display.vlaue = eval(dispay.value);
//         }
//     }catch(error){
//         display.value = "Err";
//     }
// })