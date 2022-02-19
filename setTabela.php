<?php
    session_start();
    
    if(isset($_SESSION["email"])){
        if($_SESSION["email"]!="admin@admin.com")
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

    $sql = "select * from odgovori";
    $results = $conn->query($sql);
    $i = 0;
    $tabela = array();
    while($row=$results->fetch_assoc()){
        array_push($tabela,array("id"=>$row["ID"], "status"=>$row["Status"], "pol"=>$row["Pol"], "prosecno_vreme"=>$row["Prosecno vreme"], "svrha"=>$row["Svrha koriscenja"], "vreme_koriscenja"=>$row["Vreme koriscenja"], "app"=>$row["Aplikacija"], "zavisnost"=>$row["Zavisnost"]));
        $i++;
    }

    echo json_encode($tabela);

?>