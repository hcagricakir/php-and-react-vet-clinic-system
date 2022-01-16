<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$postdata = file_get_contents("php://input");
$returnData = [];
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $emails = $request->email;
    $password = $request->password;


    $sqlPass = "SELECT password FROM users WHERE email = '$emails'";
    $dbPass = mysqli_query($db, $sqlPass);

    $result = mysqli_query($db, $sqlPass);

    $row = mysqli_fetch_array($result);

    if (!empty($emails) && !empty($password)) {
        if ($row["password"] == $password) {
            http_response_code(202);
        } else {
            http_response_code(422);
        }
    } else {
        http_response_code(422);
    }
}
