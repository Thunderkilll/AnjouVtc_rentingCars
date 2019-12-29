<?php

require('connectionDB.php');
 
mysqli_set_charset($conn ,"utf8");
 
$picup = $_GET["picup"];
$dropoff =  $_GET["dropoff"];
$date_pickup = $_GET["date_pickup"];
$date_dropoff = $_GET["date_dropoff"];
$name =  $_GET["name"];
$telephone = $_GET["telephone"];
 
 
$sql = "INSERT INTO `lingued`.`reservation` (
`picup` ,
`dropoff` ,
`date_pickup` ,
`date_dropoff` ,
`name` ,
`telephone`
)  VALUES ('".$picup."', '".$dropoff."','".$date_pickup."','".$date_dropoff."','".$name."','".$telephone."');";

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