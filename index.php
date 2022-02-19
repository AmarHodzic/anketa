<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="colors.css">
    <link rel="stylesheet" href="login.css">
    <title>Document</title>
</head>
<?php         
    session_start();
    if(isset($_SESSION["email"])){
        
        if($_SESSION["email"]=="admin@admin.com")
            header("Location: "."statistika.php");
        else
            header("Location: "."anketa.php");
    }
?>

<body class="flex jtycontent-c alnitems-c">
    
    <div class="flex jtycontent-c alnitems-c" style="height:100vh; width:450px;">
        <form id="login" class="login shadow flex column white alnself-c width100 width80-lower <?php if(isset($_GET['err']) && $_GET['err']=='korisnik_postoji') echo "form--hidden";?>" style="align-items: center;" method="POST" action="login.php">

            <div class="width80">
                <h1>Login</h1>
            </div>

            <div class="width80">
                <input class="inputs-login" type="text" name="email" autofocus placeholder="Email">
            </div>

            <div class="width80">
                <input class="inputs-login" type="password" name="pw" autofocus placeholder="Password">
            </div>

            <div class="width80">
                <button class="login-btn" type="submit">Login</button>
            </div>
            <?php
            if(isset($_GET['err']) && $_GET['err']!='korisnik_postoji'){
                $greska = $_GET['err'];
                echo "<p style=\"color:red;\">$greska</p>";
            }
            ?>

            <p style="margin-bottom:40px; margin-top:10px;">
                <a href="" id="linkCreateAccount">Don't have an account? Create account.</a>
            </p>
                
        </form>

        <form id="createAccount" class="<?php if(!isset($_GET['err']) || $_GET['err']!='korisnik_postoji') echo 'form--hidden';?>  shadow flex column white alnself-c width100 width80-lower" style="align-items: center;" method="POST" action="register.php">

            <div class="width80">
                <h1>Create account</h1>
            </div>

            <div class="width80">
                <input id="emailCreate" class="inputs" name="e" type="text" autofocus placeholder="Email">
            </div>

            <div class="width80" style="display:none;" id="messageEmail">
                <p id="validEmail" class="invalid">Enter a valid email address.</p>
            </div>

            <div class="width80">
                <input class="inputs" name="p" type="password" id="psw" autofocus placeholder="Password">
            </div>
            
            <div class="width80" style="display:none;" id="message">
                <h3>Password must contain the following:</h3>
                <p id="letter" class="invalid">A <b>lowercase</b> letters</p>
                <p id="number" class="invalid">A <b>number</b></p>
                <p id="length" class="invalid">Minimum <b>8 characters</b></p>
            </div>

            <div class="width80">
                <button id="register-btn" class="login-btn disabled" type="submit">Create account</button>
            </div>
            <?php
            if(isset($_GET['err']) && $_GET['err']=='korisnik_postoji'){
                $greska = $_GET['err'];
                echo "<p style=\"color:red;\">$greska</p>";
            }
            ?>
            <?php
            // if(isset($_GET['err'])){
            //     $greska = $_GET['err'];
            //     echo "<p style=\"background-color:red;\">$greska</p>"; 
            // }
            ?>
            
            <p style="margin-bottom:40px; margin-top:10px;">
                <a href="" id="linkLogin">Already have an account? Sign in.</a>
            </p>
                
        </form>
    
    </div>

</body>

    <script src="./main.js"></script>  
    
</html>