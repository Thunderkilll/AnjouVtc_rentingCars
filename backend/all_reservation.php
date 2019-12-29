<?php

require('connectionDB.php');
 
mysqli_set_charset($conn ,"utf8");
 
 
$sql = "SELECT * FROM `lingued`.`reservation` WHERE 1  ORDER BY   id ;";

$result = $conn->query($sql);

$response = array(); 

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    $response []= array("id"=>$row["id"],"picup"=>$row["picup"],
    "dropoff"=>$row["dropoff"],"date_pickup"=>$row["date_pickup"],
    "date_dropoff"=>$row["date_dropoff"],"name"=>$row["name"] 
    ,"telephone"=>$row["telephone"]); 
 
} 
} else {
    $response []= array("error"=> "1" );
    
}
$conn->close();
 
echo json_encode($response);



?>