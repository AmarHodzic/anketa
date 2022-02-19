<!DOCTYPE html>
<?php 
    session_start();
    
    if(!isset($_SESSION["email"])){
        header("Location: "."index.php");
    }
    
    if($_SESSION["email"]!="admin@admin.com")
        header("Location: "."index.php");
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./statistika.css">
    <link rel="stylesheet" href="./colors.css">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="anketa.css">
    <title>Document</title>
</head>
<body>
    <div>
    
        <nav id="logout" class="nav-logout" style="margin-bottom:0;">
            <input class="logout logout-1000 logout-450" type="button" onclick="location.href='logout.php';" value="LOGOUT" />
        </nav>

        <div class="div-admin">
            <div class="div-ul">
                <ul>
                    <li class="link active" id="prikazitabelu">Tabela</li>
                    <li class="link" id="ispitanik">Status</li>
                    <li class="link" id="prosek">Prosecno vreme</li>
                    <li class="link" id="vremeKor">Vreme koriscenja</li>
                </ul>
            </div>

            <div class="tabela-chart">
            
                <div id="chrt" style="display:none; width:450px;margin:0 auto;" class="flex">
                    <div id="piechart" style="width:100%;"></div>
                    <div class="width50">
                        <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
                    </div>
                </div>

                <div id="div-table">
                    <table id="tabla">
                        
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <script type="text/javascript">
        let chartWidth = 450;
        let chartHeight = 450;
        google.charts.load('current', {'packages':['corechart']});
        // google.charts.setOnLoadCallback(drawChart);
        
        //
        //
        // Draw the chart and set the chart values
        function drawChart(arr, title) {
        var data = google.visualization.arrayToDataTable(arr);

        var options = {'title':title, 'width':chartWidth, 'height':chartHeight};

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
        }
    </script>

</body>

<script src="./statistika.js"></script>
</html>