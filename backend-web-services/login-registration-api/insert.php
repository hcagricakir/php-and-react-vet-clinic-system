<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
     
    $name = $request->name;
    $email = $request->email;
    $password = $request->password;
    echo($email);
    $sql = "INSERT INTO users (name,email,password) VALUES ('$name','$email','$password')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}