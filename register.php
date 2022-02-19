<?php   

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


$emailInput = $_POST['e'];
$passwordInput = $_POST['p'];
$vkey = rand(100000,999999);
$potvrdjen = FALSE;

$passwordInput = md5($passwordInput);

$sql2 = "SELECT email from users where email='$emailInput'";
$res2 = $conn -> query($sql2);
if($res2->num_rows < 1){
    $conn->close();
    $conn = new mysqli($server,$username,$password,$dbname);


    $sql = "INSERT INTO users (email, password, vkey, potvrdjen) VALUES ('$emailInput','$passwordInput','$vkey','$potvrdjen');";
    $result = $conn -> query($sql);

    if($result){
        $to = $emailInput;
        $subject = "Email Verification";
        $message = '<a href="http://localhost/anketa/verify.php?vkey='.$vkey.'">Verify account</a>';
        $headers = "From: amarnp97@gmail.com";
        mail($to,$subject,$message,$headers);
    }else {
        echo "hehe greska";
    }

    header('Location: '.'index.php');
}else{
    header('Location: '.'index.php?err=korisnik_postoji');
}
?>
