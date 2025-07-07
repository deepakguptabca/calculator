

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

 particlesJS("bubble-background", {
        "particles": {
            "number": {
                "value": 40
            },
            "size": {
                "value": 6
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.3
            },
            "move": {
                "direction": "top",
                "speed": 1
            },
            "color": {
                "value": "#ffffff"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": false
                }
            }
        }
    });