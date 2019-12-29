<?php
$servername = "http://41.226.11.252:1180/";
$username = "lingued";
$password = "lingued";
$dbname = "reservation";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);
mysqli_set_charset($conn ,"utf8");

// Check connection
if ($conn->connect_error) {
    die("Connection failed : " . $conn->connect_error);
}else{
	 die("Connection successuful  "  );
}
?>