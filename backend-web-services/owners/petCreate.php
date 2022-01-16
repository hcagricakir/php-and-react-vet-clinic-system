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
     
     
    $owner_name = $request->owner_name;
    $pet_name = $request->pet_name;
    $pet_yas = $request->pet_yas;

    echo($pet_name);
    $sql = "INSERT INTO owners (owner_name,pet_name,pet_yas) VALUES ('$owner_name','$pet_name','$pet_yas')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}