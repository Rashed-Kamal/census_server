function initialise () {

    function spanTag (p){
        var span=document.createElement('span');
            span.classList.add('error');
            span.classList.add('hide');
            p.append(span);  
            span.innerHTML="..Please correct this field";
    }

    function createTemplate(num){
        var incrementVal=2;
        var incr ;
        for( var incr=2; incr<=num;incr++){

            var fieldsetName =document.createElement('fieldset');
            fieldsetName.classList.add("fieldset");
            fieldsetName.classList.add("hide");
            //fieldsetName.attr('id','fieldset'+incr);
            
        
            $("#form1").append(fieldsetName);
            //$('.fieldset').attr('id','fieldset'+incr); // Something is wrong here -- need to fix.

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
            spanTag(p);              // shortening the code by calling function here
            
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
            spanTag(p);

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
            spanTag(p);

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
            spanTag(p);

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
            spanTag(p);

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
            spanTag(p);

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
            spanTag(p);

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
            spanTag(p);

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
            
            spanTag(p);     

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
            spanTag(p);
            
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
            spanTag(p);

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
            spanTag(p);

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

            // Create Previous button

            var p=document.createElement('p'); //create P tag
            fieldsetName.appendChild(p) //insert P tag
            var label=document.createElement('label'); //create label 
            p.appendChild(label);
            
            var prevButton= function() {
                $('#btn1')
                .clone().val('Previous')
                .attr('id','prevbtn'+incr)
                .attr('type','button')
                .attr('name','prevbtn'+incr)
                .attr('value','Prev')
                .appendTo(label);   
                    
            }
            $(label).append(prevButton);

            // insert break
            var br=document.createElement('br');
            form1.append(br);
        } // END for loop

        //var fieldset = document.querySelectorAll('personList');
        
        //console.log(fieldset);

      

    } // END createTemplate function



    // Main script lookup START from here

    alert("Hello from the script")
    console.log("Hello from the console")

    var num =document.getElementById("totalPerson").value;  // I was having issue to get the value from the input. but it was not working for a long time ONLY because input type was "text" not "number". if input type is "text" then 'value' propertiy return empty string and thats why console.log was not showing up the result as expected. Now its all working fine.
    console.log("Number");
    console.log(num);

    if(num){        
        alert("This alert from jQuery"+num);
        console.log("total person from js: "+num);
        createTemplate(num);
    }

    // Now work with id attribute for each person
    var form = document.getElementById("form1")
    var fieldset = form.querySelectorAll("fieldset")
    console.log(fieldset.item(0));
    for (let i = 0; i<fieldset.length; i++){
        let item = fieldset[i];
        item.setAttribute('id', 'personList'+(i+1));
    }

    // Now work with current form(fieldset)

    console.log(fieldset.item(2));


} // END initialise function