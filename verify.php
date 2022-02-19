<?php

session_start();
if(isset($_SESSION["email"])){
    header("Location: "."anketa.php");
}

if(isset($_GET['vkey'])){
    $vkey = $_GET['vkey'];
    $server = "localhost";
    $username = "root";
    $password = "";
    $dbname = "anketa";
    $conn = new mysqli($server, $username, $password, $dbname);  

    $res = $conn->query("SELECT potvrdjen,vkey FROM users WHERE potvrdjen=0 AND vkey ='".$vkey."' LIMIT 1");
    
    if($res->num_rows == 1){
        $conn->close(); 
        $conn = new mysqli($server,$username,$password,$dbname);
        $update = $conn->query("UPDATE USERS SET potvrdjen = 1 WHERE vkey = '$vkey' LIMIT 1");
        // print_r($vkey);

        header("Location: "."index.php");
    }else{
        echo "Nesto";
    }
}else{
    die("Something went wrong.");
}

?>