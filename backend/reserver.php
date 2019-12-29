<?php


require('DB.php');
 
mysqli_set_charset($conn ,"utf8");
 
$name = $_GET["name"];
$pwd =  $_GET["password"];
$img = $_GET["image"];
$sql = "INSERT INTO login (name , password , image)  VALUES ('".$_GET["name"]."', '".$_GET["password"]."','".$_GET["image"]."')";

$result = $conn->query($sql);

$response = array(); 

if ($result === TRUE) {
 
	$response []= array("error"=> 0);  
 
}  else {
    $response []= array("error"=> "1" );
    
}
$conn->close();
//echo json_encode(array("question_data"=>$response)); fi androids
echo json_encode($response);


?>