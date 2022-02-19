<?php
    //
    session_start();
    
    if(isset($_SESSION["email"])){
        
        if($_SESSION["email"]=="admin@admin.com")
            header("Location: "."statistika.php");
        else
            header("Location: "."anketa.php");
        
    }
    $server = "localhost";
    $username = "root";
    $password = "";
    $dbname = "anketa";
    $conn = new mysqli($server, $username, $password, $dbname);  

    if ($conn->connect_error) {
        echo $conn->connect_error;
        die("Connection failed: " . $conn->connect_error);
    } 
    //

    //
    if(isset($_POST["email"]) && isset($_POST["pw"])){
        $email = $_POST["email"];
        $hashedpw = $_POST["pw"];
        $hashedpw = md5($hashedpw);
        echo $email;
        echo $hashedpw;
        
        $sql = "select * from users where '$email'=email and potvrdjen=1";
        $result = $conn -> query($sql);
        
        
        if($result->num_rows > 0){
            $sql2 = "select * from users where '$email'=email and '$hashedpw'=password";
            $conn->close();
            $conn = new mysqli($server, $username, $password, $dbname);  
            $res2 = $conn -> query($sql2);
            if($res2->num_rows > 0){
                if($email=='admin@admin.com'){
                    $_SESSION["email"] = $email;
                    header('Location: '.'statistika.php');
                }else{
                    $_SESSION["email"] = $email;
                    header('Location: '.'anketa.php');
                }
            }else{
                header('Location: '.'index.php?err=Wrong password.');
            }
        }else {
            header('Location: '.'index.php?err=There is no such account.');
        }
    }  
?>