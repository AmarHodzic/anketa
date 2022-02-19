<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="colors.css">
    <link rel="stylesheet" href="anketa.css">
    <title>Document</title>
</head>
<body class="flex">
    <?php 
        session_start();

        if(!isset($_SESSION["email"])){
            header("Location: "."index.php");
        }
        
        if($_SESSION["email"]=="admin@admin.com")
            header("Location: "."index.php");
        $server = "localhost";
        $username = "root";
        $password = "";
        $dbname = "anketa";
        $conn = new mysqli($server, $username, $password, $dbname);  
        $mail = $_SESSION['email'];
        $odradjena = $conn->query("SELECT odradjena FROM users WHERE email = '$mail'");
            
        if($odradjena->num_rows == 1){
            $row = $odradjena->fetch_row();
            if($row[0]==1)
            $sakrij = true;
            else 
            $sakrij = false;
        }else{
            $sakrij = false;
        }
        
    ?>
    <div class="div-container" >

        <nav id="logout" class="nav-logout">
            <input class="logout logout-1000 logout-450" type="button" onclick="location.href='logout.php';" value="LOGOUT" />
        </nav>
        
        <div id="main-div1" class="main-div1" <?php if($sakrij==true) echo 'style="display:none;'?>>
            
            <div class="flex jtycontent-sb" style="background-color: rgba(0,151,111,255); <?php if($sakrij==true) echo 'display:none;'?>" >
                <h3 style="margin-left:20px;">NOMOFOBIJA(strah od gubitka telefona) IS REAL</h2>
                <button id="startBtn" style="align-self:flex-end;">START</button>
            </div>
            
            <div class="main-div1-1" <?php if($sakrij==true) echo 'style="display:none;'?>>
            </div>
        </div>

        <div id="main-div" class="main-div main-div-1000 main-div-450" style="display:none;">

            <div id="containerQuestion" class="width80 flex column" style="margin:0 auto;">
                <h1 style="border-bottom: 1px solid rgba(0,151,111,255);">Anketa o upotrebi mobilnih telefona</h1>
                <div class="width100" style="height:400px;">
                    <p class="question question-450">1. Koje je Vase zanimanje?</p>
                    <div class="listaCheck listaCheck-1000 listaCheck-450">
                        <ul>
                            <li>
                                <input type="radio" name="ch1" id="">
                                <label for="ch1">Ucenik</label>
                            </li>
                            <li>
                                <input type="radio" name="ch1" id="">
                                <label for="ch2">Student</label>
                            </li>
                            <li>
                                <input type="radio" name="ch1" id="">
                                <label for="ch1">Zaposlen</label>
                            </li>
                            <li>
                                <input type="radio" name="ch1" id="">
                                <label for="ch1">Nezaposlen</label>
                            </li>
                            <li>
                                <input type="radio" name="ch1" id="">
                                <label for="ch1">Penzioner</label>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            
            <div class="nav-bar nav-bar-1000 nav-bar-450">
                <button id="btnBack" class="backButton backButton-1000 backButton-450">BACK</button>
                <div class="brojevi flex col-6 jtycontent-c" style="margin:0 auto;">
                    <p class="ovojep" id="answersP">0 of 7</p>
                    <div id="progress-bar" class="progress-bar">
                    </div>
                </div>    
                <button class="nextButton nextButton-1000 nextButton-450" id="btnNext">NEXT</button>
                <button style="display:none;" class="nextButton nextButton-1000 nextButton-450" id="btnSubmit">SUBMIT</button>
            </div>

        </div>

        <div style="display:none; margin-top:10%; <?php if($sakrij==true) echo 'display:flex;'?>" id="main-div2" class="flex jtycontent-c" >
            <img style="width:150px; height:150px;" src="./images/completed-icon-28.jpg" alt="">
            <h1>You have completed the survey!</h1>
        </div>
    </div>
    
</body>

<script src="./anketa.js"></script>
</html>