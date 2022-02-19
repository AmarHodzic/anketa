<?php
    
    session_start();
    if(!isset($_SESSION["email"])){
        header("Location: "."index.php");
    }
    
    if($_SESSION["email"]=="admin@admin.com")
        header("Location: "."index.php");
    $data = $_POST['data'];
    
    $niz_pitanja = explode('$$$$$$$',$data);
    
    for($i=0;$i<count($niz_pitanja);$i++){
        $pitodg = explode('$$$$$',$niz_pitanja[$i]);
        $odg = explode('$$$',$pitodg[1]);
        $odgs_ko_str[$i] = implode('',$odg);
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
    
    $sql = "INSERT INTO odgovori (Status, Pol, `Prosecno vreme`, `Svrha koriscenja`, `Vreme koriscenja`, Aplikacija, Zavisnost)
     VALUES ('$odgs_ko_str[0]','$odgs_ko_str[1]','$odgs_ko_str[2]','$odgs_ko_str[3]','$odgs_ko_str[4]','$odgs_ko_str[5]','$odgs_ko_str[6]');";
    
    // // $sql = "INSERT INTO odgovori (Status, Pol, `Prosecno vreme`, `Svrha koriscenja`, `Vreme koriscenja`, Aplikacija, Zavisnost) VALUES ('0','0','0','0','0','0','0');";
    
    if($conn->query($sql)==TRUE){
        header('Content-Type: application/json');
        $data = ['msg' => 'Dobor je pls.'];
        $conn->close();
        $conn = new mysqli($server, $username, $password, $dbname);  
        $mail = $_SESSION['email'];
        $prrr = $conn->query("UPDATE USERS SET odradjena = 1 WHERE email = '$mail' LIMIT 1");        
        echo json_encode($data);
    }else{
        $data = ['msg' => $conn->error];
        echo json_encode($data);
    }
?>