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
    
} elseif($action =='numOfCustomer'){
    $totalPerson = filter_input(INPUT_POST, 'totalPerson');
    if (empty($totalPerson)){
        include ('errors/error_totalPerson.php');
    } else {
       // header('Location: .');
        include ('personal_details.php');
    }    

} elseif ($action == 'personalDetails') {
    $message = "This page is under construction";
}

debug_to_console($totalPerson);



include 'view/footer.php';
?>


