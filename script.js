let btn = document.querySelectorAll(".btn");
const inputBox = document.querySelector("#input-box");

function work(){
   btn.forEach(button=>{
      button.addEventListener('click',function(){
         let dataValue = this.getAttribute("data-value");
         if(dataValue == 'C'){
            inputBox.value = '';
         }else if(dataValue == '='){
            inputBox.value = parseInt(eval(inputBox.value));
         }else{
            inputBox.value += dataValue;
         }
      })
   })
}

work()