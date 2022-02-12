function initialise() {
    //alert("hello from new script");
    //let num =document.getElementById("totalPerson").Value;

    function createTemplate(num){
        var incrementVal=2;
        var incr ;
        for( var incr=2; incr<=num;incr++){

            var fieldsetName =document.createElement('fieldset');
            fieldsetName.classList.add("fieldset"+incr);
            fieldsetName.classList.add("hide");
        
            $("#form1").append(fieldsetName);
            $('fieldset.fieldset'+incr).attr('id','fieldset'+incr);

            var legend=document.createElement('legend');
            fieldsetName.appendChild(legend);
            legend.innerHTML='Person '+incr;

            //create field for GivenName
            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            //Now insert span tag with class width
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="Given Name:";
            
            //Now insert input element
            var name= function() {
                $('#gName1')
                .clone().val('')
                .attr('id','gName'+incr)
                .attr('name','givenName'+incr)
            .appendTo(label);   
                    
            }
            $(label).append(name);
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            //Now Work with Family name { Same as Given name }

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            //Now insert span tag with class width
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="Family Name:";
            
            //Now insert input element
            var name= function() {
                $('#fName1')
                .clone().val('')
                .attr('id','fName'+incr)
                .attr('name','familyName'+incr)
            .appendTo(label);   
                    
            }
            $(label).append(name);
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            //now working with third Q {Gender Selection}

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            //Now insert span tag with class width
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="Gender:";    

            var sel=$('<select id=gender'+incr+' name=gender'+incr+'>').appendTo(label);
            // $(label).append(sel);
            $('#gender1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(sel);

            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            // Now working with 4th Q { Year of Birth}

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            //Now insert span tag with class width
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="Year of Birth:";

            var dob=$('<select id=dob'+incr+' name=dob'+incr+'>').appendTo(label);
            $('#dob1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(dob);
        
            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            //Now working with 5th Q (Country of Birth)

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            //Now insert span tag with class width
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="Country of Birth:";

            var country=$('<select id=country'+incr+' name=birthPlace'+incr+'>').appendTo(label);
            $('#country1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(country);
        
            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            // Now working with 6th Q (Year of Arrival)

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            //Now insert span tag with class width
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="In what year did you arrive in Australia? ";

            var arrrival=$('<select id=arrive'+incr+' name=arrival'+incr+'>').appendTo(label);
            $('#arrive1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(arrrival);
        
            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            // Now working with Q.7 (Citizenship)

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="Are you Australian Citizen? ";

            var Citizen=$('<select id=citizen'+incr+' name=citizen'+incr+'>').appendTo(label);
            $('#citizen1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(Citizen);
        
            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            // Now working with Q.8 {Language you Speak}

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="Do you Speak other than English? ";
        
            var localLang=$('<select id=langSpeak'+incr+' name=otherLang'+incr+'>').appendTo(label);
            $('#langSpeak1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(localLang);
        
            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            //Now working with Q.9 {English fluency}

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="How well do you speak English? ";

            $(label).append('<input type="radio" name="langProfi'+incr+'" value="veryWell">')
                    .append('<label>Very Well</label>');            

            $(label).append('<input type="radio" name="langProfi'+incr+'" value="Well">')
                    .append('<label>Well</label>');

            $(label).append('<input type="radio" name="langProfi'+incr+'" value="notWell">')
                    .append('<label>Not Well</label>');

            $(label).append('<input type="radio" name="langProfi'+incr+'" value="notAtAll">')
                    .append('<label>Not At All</label>');         
            
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";      

            // Now working on Q.10 {Highest Secondary school}

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="What is the highest year of secondary school the person has completed?";

            var secSchool=$('<select id=school'+incr+' name=secondarySchool'+incr+'>').appendTo(label);
            $('#school1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(secSchool);
        
            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";
            
            //Now working on Q11 {Highest Qualification}

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="What is the highest qualification you have received?";
        
            var highestQ=$('<select id=highQ'+incr+' name=qualification'+incr+'>').appendTo(label);
            $('#highQ1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(highestQ);
        
            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";

            // Now working on Q 12 {field of study}

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            
            var span=document.createElement('span');
            span.classList.add('width');
            label.appendChild(span);
            span.innerHTML="What is the highest qualification you have received?";
        
            var studyField=$('<select id=studyArea'+incr+' name=fieldOfStudy'+incr+'>').appendTo(label);
            $('#studyArea1').each(function ( ){        
                ( $('<option value="'+this.val +'">'+this.innerHTML+'</option>')).appendTo(studyField);
        
            });
            var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";


            // Create next button

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            
            var nextButton= function() {
                $('#btn1')
                .clone().val('')
                .attr('id','btn'+incr)
                .attr('type','button')
                .attr('name','btn'+incr)
                .attr('value','Next')
                .appendTo(label);   
                    
            }
            $(label).append(nextButton);

            // insert break
            var br=document.createElement('br');
            form1.append(br);


        }
    }
    
    

    // make visible first form

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
            
         }

        
            
         
    })
    
}
//console.log("Outside of func num value: "+num);




}