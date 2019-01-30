<?php 

include 'connect.php';
$mail = $_POST['userMail'];
$pass = $_POST['userPass'];

 $q = "SELECT * FROM `rrr_users` WHERE( userMail = '$mail' and userPass = '$pass')";

 $result = mysqli_query($con , $q);

 $num =  mysqli_num_rows($result);
if($num > 0){
    header('location:home.php');
}
else{
    echo "wrong UserName or PassWord :(";
}



?>