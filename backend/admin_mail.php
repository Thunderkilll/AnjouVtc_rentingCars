<?php 

$name = "username ";
$phone = "userphone" ;
$email = "khaled.guesmi@esprit.tn";
$to      = $email; // Send email to our user
$subject = 'Signup | Verification'; // Give the email a subject 
$message = '
 
Thanks for signing up!
Your account has been created, you can login with the following credentials after you have activated your account by pressing the url below.
 
------------------------
Username: '.$name.'
Password: '.$phone.'
------------------------
 
you can go and send him verification 
 
'; // Our message above including the link
                     
$headers = 'From:khaledguesmi666@gmail.com' . "\r\n"; // Set from headers
mail($to, $subject, $message, $headers); // Send our email
$failure = "failed";
echo $failure;

?>