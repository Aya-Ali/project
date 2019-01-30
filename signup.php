<?php 
include 'connect.php';
$userName = $_POST['userName'];
$userMail = $_POST['userMail'];
$userPass = $_POST['userPass'];
$userPass2 = $_POST['userPass2'];
$q = "INSERT INTO rrr_users(userName, userMail, userPass, userPass2 )VALUES('$userName','$userMail','$userPass','$userPass2')";

if($userPass == $userPass2){
    mysqli_query($con,$q);
}
else{
    echo "You Have To Enter Two Identical Passwords!";
}


?>