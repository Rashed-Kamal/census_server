function initialise () {


    
    var incrementVal=2;
    var incr ;

    var num=$("#totalPerson").val();
   // var x =parseInt(document.getElementById("totalPerson").Value);
    //console.log(x);    
    console.log(num)

    if (num== undefined || num == NaN){
        alert("please enter a number of person")
    } else{
        $("#start").click(function(){

       
        
        for( var incr=2; incr<=(parseInt($("#totalPerson").val()));incr++){

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

    // make visible first form
    
    var blur = document.getElementById("intro");
    blur.classList.add("blur-body");

    var displayForm= document.getElementById('fieldset1');
    displayForm.classList.toggle('hide');
    displayForm.classList.toggle('popup');

    // make rest of the visible one by one

    for(let i=1;i<=(parseInt($("#totalPerson").val()));i++){
        var field= document.getElementById('fieldset'+i);
        var  nextBtn=document.getElementById('btn'+i);
        console.log(nextBtn);
        if(nextBtn){
            nextBtn.addEventListener('click', function (){
             var currentForm= document.getElementById('fieldset'+i);
             currentForm.classList.toggle('hide');
             //currentForm.classList.toggle('popup');
               let j=i+1;
                var nextForm= document.getElementById('fieldset'+j);
                console.log(nextForm);
                if(nextForm){
                   nextForm.classList.toggle('hide');
                   nextForm.classList.toggle('popup');
                    //var start= document.getElementById('fieldset'+i+1);
                 }
                 else {
                    var dwlForm =document.getElementById('dwlfield');                     
                    dwlForm.classList.toggle('hide');
                    dwlForm.classList.toggle('popup');
                 }
            });
        }
        
    }

    var  dwlBtn=document.getElementById('dwlbtn');
    if(dwlBtn){
        dwlBtn.addEventListener('click', function (){
            var dwlForm =document.getElementById('dwlfield');
            dwlForm.classList.toggle('hide');

            var ratingForm =document.getElementById('ratingForm');                     
            ratingForm.classList.toggle('hide');
            ratingForm.classList.toggle('popup');

            var sub =document.getElementById('submit1');
            sub.classList.toggle('hide');
    

        });
    }


    
});
    

    

      // focus on current selector
     $('#form1').delegate("*","focus blur", function(){
         var elem = $(this);
         setTimeout(function(){
             elem.toggleClass("focused", elem.is(":focus"));
         }, 0);
     }) ;

     //-----Validation-------//

     //trial for next button [Not working]
     
    


     // input type:text validation [not working]

     // 1. first get total number of input in the current fieldset whose type is text 
     //   [update: we only have 2 input whose type is text so easier to get it by id]
     // 2. use for loop to get nth position of input value one by one
     // 3. validate that input value inside for loop
    // var valid ={
      //  given:false,
        //family:false
    //}


    // var valid=true;
    // var x =1;
    // if($('#totalPerson')==null || $('#totalPerson').is(undefined) ){
    //     var start= document.getElementById('fieldset'+x);
    //         start.setAttribute('class', 'fieldset hide');
    // } else{
     
    // // $("#btn1").click(function (){
       
    //     do{
    //         var start= document.getElementById('fieldset'+x);
    //         start.setAttribute('class', 'show');
    //         //var fName =start.querySelector('input[name=givenName'+x+']');
    //         //fName.addEventListener('blur',validateText);
    //         var names=start.querySelectorAll('input[type=text]');
    //         for(let i=0;i<names.length;i++){
    //             names.item(i).addEventListener('blur',validateText);
    //         }

    //         //var lName = start.querySelector('input[name=familyName'+x+']');
    //         //lName.addEventListener('blur',validateText);
           
    //         var next=start.querySelector('button[name=btn'+x+']');
    //         next.addEventListener('click', isValidated);
    //        // $("#btn1").click(isValidated());

    //         function validateText(ev){
    //             let value = ev.target.value;
    //             let name = ev.target.name;

    //             console.log("input field "+ name +'='+value);
    //             console.log("value of x ",x);
    //             //valid=true;
            

    //             var loc=ev.target.parentElement.parentElement;
    //             if(loc==null) return;
    //             var err=loc.querySelector('label+span');
    //             if(err == null) return;
    //            // if(value == null || value.length == 0){
    //              //   valid=false;
    //            // }

    //           //  var textReg = new RegExp (" [a-zA-Z -]+ ");
    //         // if(!textReg.test(value)){

    //         if( value.match(" [a-zA-Z]+ ")){
    //                 err.setAttribute('class','error hide');
    //                 valid=true;
                    
    //             } 
    //             else{
    //                 err.setAttribute('class','error');
    //                 valid=false;
    //             }

    //         }
    //         function isValidated(){
    //            // if (valid){
    //             var start= document.getElementById('fieldset'+x);
    //             start.setAttribute('class', ' fieldset show');
    //                 //x++;
    //                // var next= document.querySelector('button[name=btn'+x+']');
                
    //                //var start= document.getElementById('fieldset'+y);
    //                //start.setAttribute('class', 'fieldset'+y+' show');

    //             }
        
    //     x++;

            
    //     }while(x<num);
    // }   //else end

     //});



     
        //$('#gName + span').attr('class','hide'); 
       
        //$('span').addClass('error');   
        //$('span').removeClass('hide');

         //var fieldLocation=$(this).closest(fieldset);

        // var firstName=$('#gName').val();
        // var textReg = new RegExp (" [a-zA-Z -]+ ");
        // if(!textReg.test(firstName)){
         //   $(this).parent().siblings().first().child().child().last().addClass('error');
           // $('#gName.parent().last').next().removeClass('hide'); 
       //     $('#gName + span').addClass('error');        

       // }else{
       //     $('#gName + span').addClass('hide');
       //     $('#gName + span').removeClass('error hide');
       // }
     
     //another try

     
     //another try end

    //  valid=true;

    //  var inputValue= $('#fieldset'+incr+ 'input[typeo=Text]');
    //  if( $('input') [typeof Text]){
    //  var txtReg = new RegExp (" *[a-zA-Z -]+ *");
    //  var inputText =$('#form1 input[type=text]').val();
    //  if(!textReg.test(inputText) || inputText.val()==undefined){
    //      var para = ev.target.parentElement.parentElement;
    //      var err= para.querySelector('label+span'); 
    //      return valid=false;
    //    }}

     // input type:number validation


     // input type:email validation

     // others: not null validation
       
    




     //From prac7 1.10
     // var li = document.querySelector('ul.first > li:last-child');
     // ulnode = document.createElelment('ul');
    //  var clone = li.cloneNode(true);
    //  ulnode.appendChild(clone);
    //  div.appendChild(ulnode);

    // var gender= function() {
    //     $('#gender').clone()
    //     .attr('name','gender_menu'+incr)
    //    .appendTo(label); 
    // }


   // $(span).append('<input type=text name=givenName required/>');
    
    //var givenInput=getElementById('gName');

    //var gName = document.createElement("input");

// get location where I want to put the element
   
    
   // fieldsetName.appendChild(gName);

    }
}




// $('#btn1').on('click',function(){
//     var totalPerson = $("#totalPerson").val();
//     console.log(totalPerson);
//     if totalPerson>1{
//     for(var i=0; i<totalPerson;i++){
