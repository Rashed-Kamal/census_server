<?php
require('php_helper.php');

include 'view/header.php';


$action = filter_input(INPUT_POST, 'action');

if ($action == NULL) {
    $action = filter_input (INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'introPage';
    }
}
 
$totalPerson = 0;
if( $action == 'introPage'){
    include ('intro.php');
    

    // first ask for email ID for creating session cookie
    // need to create a houseID for all people  in this session
    

    
} elseif($action =='numOfCustomer'){
    // by the click of 'start' create 3 form-fieldsets
    // hide all all fieldset except first one.
    $totalPerson = filter_input(INPUT_POST, 'totalPerson');
    if (empty($totalPerson)){
        include ('errors/error_totalPerson.php');
    } else {
       // header('Location: .');
        include ('personal_details.php');
       // debug_to_console($totalPerson);
       //echo " <script type>initialise()</script>";
    }  
     

} elseif ($action == 'personalDetails') {
    // else if action is previous then show previous fieldset
    $message = "This page is under construction";
} elseif($action == 'preview'){
    // else if action is 'prview' display the whole form in one page
} elseif($action == 'submit') {
    // else if action is 'submit' then submit persons information in a loop.
    // because multiple person can be in one form and multiple person information
    // will be stored in one single table with same house id
    // then store house information
    //then store user expreience
}






include 'view/footer.php';
?>


