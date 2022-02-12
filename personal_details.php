
<p><label>Total people living in the house on census night:
    <input id="totalPerson" type="number" name="" value="<?php echo $totalPerson?>" /></label></p>


<form action="." id="form1" method="POST">

    <fieldset id="fieldset1" class="fieldset1">
                                <legend>Person 1</legend>
                                <!---Q1-->
                                <p><label><span class="width">Given Name: </span>
                                <input id="gName1" type="text" name="givenName1" required size="20" pattern=" [a-zA-Z -]+ " /></label>
                                <span class="error hide">Please correct this field</span></p>
                                <!----Q2---->
                                <p><label><span class="width">Family Name:</span>
                                <input id="fName1" type="text" name="familyName1" required size="20" pattern=" [a-zA-Z -]+ "/></label>
                                <span class="error hide">Please correct this field</span></p>
                                <!---Q3-->
                                <p><label><span class="width" >Gender: </span>
                                    <select id="gender1" name="gender1">
                                        <option value=""> -- Please Select Gender -- </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="transgender">Transgender</option>
                                    </select> </label></p>

                                    <!----Q4 Year of Birth--->

                                    <p><label><span class="width">Year of Birth:</span>
                                        <select id=dob1 name="dob1">
                                            <option value="">-- Please Select Year --</option>
                                            <option value="1978">1978</option>
                                            <option value="1988">1988</option>
                                            <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1995">1995</option>
                                            <option value="1998">1998</option>
                                            <option value="1999">1999</option>
                                            <option value="2000">2000</option>
                                            <option value="2001">2001</option>
                                            <option value="2003">2003</option>
                                            <option value="2005">2005</option>
                                            <option value="2007">2007</option>
                                            <option value="2009">2009</option>
                                            <option value="2010">2010</option>
                                            <option value="2012">2012</option>
                                            <option value="2013">2013</option>
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                        </select>
                                        </label><span class="error hide">Please correct this field</span></p>

                                        <!---Q.5 Country of Birth -->

                                        <p><label><span class="width">Country of Birth:</span>                                                                  
                                                <!---List of Countries will be used in input element-->                                                                                      
                                            
                                            <select id="country1" name="birthPlace1" >
                                                <option>--Select Country--</option>
                                            
                                                    <optgroup label="Africa">                                                        
                                                        <optgroup label="Eastern Africa">
                                                            <option>Burundi</option>
                                                            <option>Burundi</option>
                                                            <option>Comoros</option>
                                                            <option>Djibouti</option>
                                                            <option>Eritrea</option>
                                                            <option>Ethiopia</option>
                                                            <option>Kenya</option>
                                                            <option>Madagascar</option>
                                                            <option>Malawi</option>
                                                            <option>Mauritius</option>
                                                            <option>Mayotte</option>
                                                            <option>Mozambique</option>
                                                            <option>Reunion</option>
                                                            <option>Rwanda</option>
                                                            <option>Seychelles</option>
                                                            <option>Somalia</option>
                                                            <option>Tanzania, United Republic of</option>
                                                            <option>Uganda</option>
                                                            <option>Zambia</option>
                                                            <option>Zimbabwe</option>
                                                        </optgroup>                                                           
                                                
                                                    <optgroup label="Middle Africa">
                                                        <option>Angola</option>
                                                        <option>Cameroon</option>
                                                        <option>Central African Republic</option>
                                                        <option>Chad</option>
                                                        <option>Congo (Brazzaville)</option>
                                                        <option>Congo, Democratic Republic of the</option>
                                                        <option>Equatorial Guinea</option>
                                                        <option>Gabon</option>
                                                        <option>Sao Tome and Principe</option>
                                                    </optgroup>                                                        
                                                
                                                    <optgroup label="Northern Africa">
                                                        <option>Algeria</option>
                                                        <option>Egypt</option>
                                                        <option>Libyan Arab Jamahiriya</option>
                                                        <option>Morroco</option>
                                                        <option>South Sudan</option>
                                                        <option>Sudan</option>
                                                        <option>Tunisia</option>
                                                        <option>Western Sahara</option>
                                                    </optgroup>                                                       
                                                
                                                    <optgroup label="Southern Africa">
                                                        <option>Botswana</option>
                                                        <option>Lesotho</option>
                                                        <option>Namibia</option>
                                                        <option>South Africa</option>
                                                        <option>Swaziland</option>
                                                    </optgroup>                                                       
                                                
                                                    <optgroup label="Western Africa">
                                                        <option>Benin</option>
                                                        <option>Burkina Faso</option>
                                                        <option>Cape Verde</option>
                                                        <option>Cote d'Ivoire (Ivory Coast)</option>
                                                        <option>Gambia</option>
                                                        <option>Ghana</option>
                                                        <option>Guinea</option>
                                                        <option>Guinea-Bissau</option>
                                                        <option>Liberia</option>
                                                        <option>Mali</option>
                                                        <option>Mauritania</option>
                                                        <option>Niger</option>
                                                        <option>Nigeria</option>
                                                        <option>Saint Helena</option>
                                                        <option>Senegal</option>
                                                        <option>Sierra Leone</option>
                                                        <option>Togo</option>
                                                    </optgroup>
                                                </optgroup>                                                    
                                            
                                                <optgroup label="----Asia---------">
                                                    <option>Afganistan</option>
                                                    <option>Armenia</option>
                                                    <option>Azerbaijan</option>
                                                    <option>Bangladesh</option>
                                                    <option>Bhutan</option>
                                                    <option>Brunei Darussalam</option>
                                                    <option>Cambodia</option>
                                                    <option>China</option>
                                                    <option>Georgia</option>
                                                    <option>Hong Kong</option>
                                                    <option>India</option>
                                                    <option>Indonesia</option>
                                                    <option>Japan</option>
                                                    <option>Kazakhstan</option>
                                                    <option>Korea, North</option>
                                                    <option>Korea, South</option>
                                                    <option>Kyrgyzstan</option>
                                                    <option>Laos</option>
                                                    <option>Macao</option>
                                                    <option>Malaysia</option>
                                                    <option>Maldives</option>
                                                    <option>Mongolia</option>
                                                    <option>Myanmar (ex-Burma)</option>
                                                    <option>Nepal</option>
                                                    <option>Pakistan</option>
                                                    <option>Phillipines</option>
                                                    <option>Singapore</option>
                                                    <option>Sri Lanka (ex-Ceilan)</option>
                                                    <option>Taiwan</option>
                                                    <option>Tajikistan</option>
                                                    <option>Thailand</option>
                                                    <option>Timor Leste (West)</option>                                 
                                                </optgroup>
                                            
                                            </select>
                                        </label><span class="error hide">Please correct this field</span>
                                        </p>
                                        <!----Q6 Arrive in Australia-->
                                        <p><label><span class="width">In what year did you arrive in Australia?</span>
                                            <select id="arrive1" name="arrival1">
                                                <option value="">-- Please Select Year of Arrival --</option>
                                                <option value="1978">1978</option>
                                                <option value="1988">1988</option>
                                                <option value="1990">1990</option>
                                                <option value="1991">1991</option>
                                                <option value="1995">1995</option>
                                                <option value="1998">1998</option>
                                                <option value="1999">1999</option>
                                                <option value="2000">2000</option>
                                                <option value="2001">2001</option>
                                                <option value="2003">2003</option>
                                                <option value="2005">2005</option>
                                                <option value="2007">2007</option>
                                                <option value="2009">2009</option>
                                                <option value="2010">2010</option>
                                                <option value="2012">2012</option>
                                                <option value="2013">2013</option>
                                                <option value="2015">2015</option>
                                                <option value="2016">2016</option>
                                                <option value="2017">2017</option>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                            </select>                                                                                       
                                        </label><span class="error hide">Please correct this field</span></p>

                                        <!----Q.7 Citizenship--->
                                        <p><label><span class="width">Are you Australian Citizen?</span>
                                            <select id="citizen1" name="citizen1">
                                                <option value=""> -- Please Select your citizenship --</option>
                                                <option value="citizen">Yes, I am Australian Citizen</option>
                                                <option value="notCitizen">No, I am not Australian Citizen</option>
                                                <option value="pResident">I am Permanent Resident</option>
                                            </select>
                                        </label><span class="error hide">Please correct this field</span></p>

                                        <!---Q.8 Other Language-->
                                        <p> <label><span class="width">Do you  speak other than English?</span>
                                            <select id="langSpeak1" name="otherLang1">
                                                <option value=""> -- Other Language -- </option>
                                                <option value="engOnly">Englishl Only</option>
                                                <option value="mandarin">Mandarin</option>
                                                <option value="italian">italian</option>
                                                <option value="arabic">Arabic</option>
                                                <option value="cantonese">Cantonese</option>
                                                <option value="greek">Greek</option>
                                            </select>
                                        </label><span class="error hide">Please correct this field</span></p>    

                                        <!----Q.9 Language Proficiency-->

                                        <p><label id="proficiency1"><span class="width">How well do speak English?</span></label>
                                            <label><input type="radio" name="nevigation" value="veryWell"/>Very Well</label>
                                            <label><input type="radio" name="nevigation" value="Well"/>Well</label>
                                            <label><input type="radio" name="nevigation" value="notWell"/>Not Well</label>
                                            <label><input type="radio" name="nevigation" value="notAtAll"/>Not at All</label>
                                        <span class="error hide">Please correct this field</span></p>

                                        <!---Question 10 [Secondary school]-->

                                        <p><label><span>What is the highest year of secondary school the person has completed?</span>
                                            <select id="school1" name="secondarySchool1">
                                                <option value=""> -- Choose your Highest year--</option>
                                                <option value="year6">Year 6</option>
                                                <option value="year7">Year 7</option>
                                                <option value="year8">Year 8</option>
                                                <option value="year9">Year 9</option>
                                                <option value="year10">Year 10</option>
                                                <option value="year11">Year 11</option>
                                                <option value="year12">Year 12</option>                        
                                            </select>
                                        </label><span class="error hide">Please correct this field</span></p>

                                        <!---Question 11 [Higest Qualification]-->

                                        <p><label><span>What is the highest qualification you have received?</span>
                                            <select id="highQ1" name="qualification1">
                                                <option value=""> -- Choose your Highest qualificaiton--</option>
                                                <option value="trade">Trade Certificate</option>
                                                <option value="cert1">Cert. I</option>
                                                <option value="cert2">Cert. II</option>
                                                <option value="cert3">Cert. III</option>
                                                <option value="cert4">Cert. IV</option>
                                                <option value="bachelor">Bachelor Degree</option>
                                                <option value="masters">Masters Degree</option>
                                                <option value="diploma">Diploma</option>                        
                                            </select>
                                        </label><span class="error hide">Please correct this field</span></p>

                                        <!---Question 12 [Field of Study]--->

                                        <p><label><span>What is the main field of study of your Highest qualification</span> <!--here we can use nested list-->
                                        <select id="studyArea1" name="fieldOfStudy1">
                                            <option value=""> -- Choose field of qualificaiton--</option>
                                            <option value="science">Science & Technology</option>
                                            <option value="agri">Agriculture</option>
                                            <option value="chem">Chemistry</option>
                                            <option value="physics">Physics</option>
                                            <option value="civil">Civil Engineering</option>
                                            <option value="medi">Medical</option>
                                            <option value="geo">Geography</option>
                                            <option value="edu">Education</option>                        
                                        </select>
                                    </label><span class="error hide">Please correct this field</span></p>


                                    <p><label>
                                       <button  id="btn1" type="button" name="btn1" value="Continue"> Next btn</button> <!---but this has to be js validtion -->   
                                    </label></p>

    </fieldset>
                          
   
</form>

                         