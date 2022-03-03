
// *** everything starts from here
let btn1 = document.getElementById("btn1");
var num = ""
if (btn1){
    btn1.addEventListener("click",function(){
        var numInput = document.getElementById("totalPerson");
        //var num = "";
         console.log("what is this "+numInput);
         //alert("start button is clicked "+num)
         if (numInput){
            num = numInput.value;
            console.log("This is "+num);
            createTemplate(num);
            //visibility()

        var displayForm= document.getElementById("fieldset1");
        if(displayForm){
            displayForm.classList.add('hide');
            displayForm.classList.toggle('popup');
        }
            
         }

        
            
         
    })
    
}
//console.log("Outside of func num value: "+num);

