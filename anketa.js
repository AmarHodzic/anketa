let zapamceniOdgovori = [
    ["","","","",""],
    ["",""],
    ["","","","",""],
    ["","","","",""],
    ["","","",""],
    [""],
    [""]
]

let pitanja = []

function setPitanje(){
    pitanja = [
        {
            hehe:`<h1 style="border-bottom: 1px solid rgba(0,151,111,255);">Anketa o upotrebi mobilnih telefona</h1>
            <div class="width100" style="height:400px;">
                <p class="question question-450">1. Koje je Vase zanimanje?</p>
                <div class="listaCheck listaCheck-1000 listaCheck-450">
                    <ul>
                        <li>
                            <input type="radio" name="ch1" id="" ${zapamceniOdgovori[0][0]}>
                            <label for="ch1">Ucenik</label>
                        </li>
                        <li>
                            <input type="radio" name="ch1" id="" ${zapamceniOdgovori[0][1]}>
                            <label for="ch1">Student</label>
                        </li>
                        <li>
                            <input type="radio" name="ch1" id="" ${zapamceniOdgovori[0][2]}>
                            <label for="ch1">Zaposlen</label>
                        </li>
                        <li>
                            <input type="radio" name="ch1" id="" ${zapamceniOdgovori[0][3]}>
                            <label for="ch1">Nezaposlen</label>
                        </li>
                        <li>
                            <input type="radio" name="ch1" id="" ${zapamceniOdgovori[0][4]}>
                            <label for="ch1">Penzioner</label>
                        </li>
                    </ul>
                </div>`
        },
        {
            hehe: `
            <h1 style="border-bottom: 1px solid rgba(0,151,111,255);">Anketa o upotrebi mobilnih telefona</h1>
            <div class="width100" style="height:400px;">
                <p class="question question-450">2. Koji je Vas pol?</p>
                <div class="listaCheck listaCheck-1000 listaCheck-450">
                    <ul>
                        <li>
                            <input type="radio" name="r1" value="r1" ${zapamceniOdgovori[1][0]}>
                            <label for="r1">M</label>
                        </li>
                        <li>
                            <input type="radio" name="r1" value="r1" ${zapamceniOdgovori[1][1]}>
                            <label for="r1">Ž</label>
                        </li>
                    </ul>
                </div>
            </div>`
        },
        {
            hehe: `
            <h1 style="border-bottom: 1px solid rgba(0,151,111,255);">Anketa o upotrebi mobilnih telefona</h1>
            <div class="width100" style="height:400px;">
                <p class="question question-450">3. Koliko sati dnevno provedete koristeci mobilni telefon?</p>
                <div class="selectCheck">
                    <select name="" id="selectVrednosti">
                        <option value="< 1h" ${zapamceniOdgovori[2][0]}>< 1h</option>
                        <option value="1 - 2h" ${zapamceniOdgovori[2][1]}>1 - 2h</option>
                        <option value="2 - 3h" ${zapamceniOdgovori[2][2]}>2 - 3h</option>
                        <option value="3 - 4h" ${zapamceniOdgovori[2][3]}>3 - 4h</option>
                        <option value="> 4h" ${zapamceniOdgovori[2][4]}>> 4h</option>
                    </select>
                </div>
            </div>`
        },
        {
            hehe:`<h1 style="border-bottom: 1px solid rgba(0,151,111,255);">Anketa o upotrebi mobilnih telefona</h1>
            <div class="width100" style="height:400px;">
                <p class="question question-450">4. U koje svrhe koristite Vas mobilni uredjaj?</p>
                <div class="listaCheck listaCheck-1000 listaCheck-450">
                    <ul>
                        <li>
                            <input type="checkbox" name="ch2" id="" ${zapamceniOdgovori[3][0]}>
                            <label for="ch2">Edukacija</label>
                        </li>
                        <li>
                            <input type="checkbox" name="ch2" id="" ${zapamceniOdgovori[3][1]}>
                            <label for="ch2">Komunikacija porukama</label>
                        </li>
                        <li>
                            <input type="checkbox" name="ch2" id="" ${zapamceniOdgovori[3][2]}>
                            <label for="ch2">Vesti</label>
                        </li>
                        <li>
                            <input type="checkbox" name="ch2" id="" ${zapamceniOdgovori[3][3]}>
                            <label for="ch2">Drustvene mreze</label>
                        </li>
                        <li>
                            <input type="checkbox" name="ch2" id="" ${zapamceniOdgovori[3][4]}>
                            <label for="ch2">Igrice</label>
                        </li>
                    </ul>
                </div>`
        },
        {
            hehe: `
            <h1 style="border-bottom: 1px solid rgba(0,151,111,255);">Anketa o upotrebi mobilnih telefona</h1>
            <div class="width100" style="height:400px;">
                <p class="question question-450">5. Kada najvise koristite mobilni telefon?</p>
                <div class="listaCheck listaCheck-1000 listaCheck-450">
                    <ul>
                        <li>
                            <input type="radio" name="r2" value="r2" ${zapamceniOdgovori[4][0]}>
                            <label for="r2">Ujutru</label>
                        </li>
                        <li>
                            <input type="radio" name="r2" value="r2" ${zapamceniOdgovori[4][1]}>
                            <label for="r2">Uvece</label>
                        </li>
                        <li>
                            <input type="radio" name="r2" value="r2" ${zapamceniOdgovori[4][2]}>
                            <label for="r2">Bilo kada u toku dana</label>
                        </li>
                        <li>
                            <input type="radio" name="r2" value="r2" ${zapamceniOdgovori[4][3]}>
                            <label for="r2">U kratkim pauzama za vreme posla</label>
                        </li>
                    </ul>
                </div>
            </div>`
        },
        {
            hehe: `
            <h1 style="border-bottom: 1px solid rgba(0,151,111,255);">Anketa o upotrebi mobilnih telefona</h1>
            <div class="width100" style="height:400px;">
                <p class="question question-450">6. Koju drustvenu mrezu najvise koristite?</p>
                <div class="inputQuestion">
                    <input type="text" name="inputName" placeholder="Telegram" value="${zapamceniOdgovori[5][0]}">
                </div>
            </div>`
        },
        {
            hehe: `
            <h1 style="border-bottom: 1px solid rgba(0,151,111,255);">Anketa o upotrebi mobilnih telefona</h1>
            <div class="width100" style="height:400px;">
                <p class="question question-450">7. Opisite Vasu zavisnost upotrebe mobilnih telefona.(opciono)</p>
                <div class="inputQuestion">
                    <textarea class="textarea" name="taName" id="taName" placeholder="Uvek proveravam telefon za poruke cak i ako nema nista.">${zapamceniOdgovori[6][0]}</textarea>
                </div>
            </div>`
        }
    ]
}

let mainDivfinish = document.getElementById("main-div2")
let mainDiv1 = document.getElementById("main-div1");
let mainDiv = document.getElementById("main-div");
let btnStart = document.getElementById("startBtn");
let btnNext = document.getElementById("btnNext");
let btnSubmit = document.getElementById("btnSubmit");
let btnBack = document.getElementById("btnBack");
let progressBar= document.getElementById("progress-bar");
let answersP = document.getElementById("answersP");
let containerQuestion = document.getElementById("containerQuestion");
let br_odgovora = 0;
let trenutnoPitanje = 1;

function checkCheckBox()
{

    var checkboxs=document.getElementsByName("ch1");
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            zapamceniOdgovori[0][i] = "checked";
        }else{
            zapamceniOdgovori[0][i] = "";
        }
    }
}

function checkRadioBox(){
    
    var radioboxs=document.getElementsByName("r1");
    for(var i=0,l=radioboxs.length;i<l;i++){
        if(radioboxs[i].checked){
            zapamceniOdgovori[1][i] = "checked";
        }else{
            zapamceniOdgovori[1][i] = "";
        }
    }
}

function checkSelect(){
    
    var selectboxs=document.getElementById("selectVrednosti");
    for(var i=0,l=selectboxs?.children.length;i<l;i++){
        if(selectboxs.value == selectboxs?.children[i].value){
            zapamceniOdgovori[2][i] = "selected";
        }else{
            zapamceniOdgovori[2][i] = "";
        }
    }
}

function checkCheckBox2()
{   
    var checkboxs2=document.getElementsByName("ch2");
    for(var i=0,l=checkboxs2.length;i<l;i++)
    {
        if(checkboxs2[i].checked)
        {
            zapamceniOdgovori[3][i] = "checked";
        }else{
            zapamceniOdgovori[3][i] = "";
        }
    }
}

function checkRadioBox2(){
    
    var radioboxs2=document.getElementsByName("r2");
    for(var i=0,l=radioboxs2.length;i<l;i++){
        if(radioboxs2[i].checked){
            zapamceniOdgovori[4][i] = "checked";
        }else{
            zapamceniOdgovori[4][i] = "";
        }
    }
}

function checkInput(){

    var inputboxs = document.getElementsByName("inputName");
    for(var i=0,l=inputboxs.length;i<l;i++){
        if(inputboxs[i]?.value != ""){
            zapamceniOdgovori[5][i] = inputboxs[i]?.value;
        }else{
            zapamceniOdgovori[5][i] = "";
        }
    }
}

function checkTA(){

    var ta = document.getElementsByName("taName");
    for(var i=0,l=ta.length;i<l;i++){
        if(ta[i]?.value != ""){
            zapamceniOdgovori[6][i] = ta[i]?.value;
        }else{
            zapamceniOdgovori[6][i] = "";
        }
    }
}

btnStart.onclick = showSurvey;
btnNext.onclick = showNextQuestion;
btnBack.onclick = showPreviousQuestion;

function navBarFu(){
    var txt = "";
    let pomBrOdg = 0;
    for(let i=0;i<zapamceniOdgovori.length;i++){
        for(let j=0;j<zapamceniOdgovori[i].length;j++){
            if(zapamceniOdgovori[i][j]!=''){
                pomBrOdg+=1;
                break;
            }
        }
    }

    if(br_odgovora == 0 &&  pomBrOdg==1){
        txt = `<div class="progress-bar-dots-m br-dot1"></div>` 
    }
    else if(pomBrOdg>br_odgovora){
        txt = `<div class="progress-bar-dots-m"></div>`;
    }                   
    else if(pomBrOdg == 7){
        txt = `<div class="progress-bar-dots-m br-dot7"></div>`;
    }
    br_odgovora = pomBrOdg

    progressBar.innerHTML += txt;
    answersP.innerHTML = br_odgovora + " of 7";
}

function showPreviousQuestion(){
    
    checkCheckBox();
    checkRadioBox();
    checkSelect();
    checkCheckBox2();
    checkRadioBox2();
    checkInput();
    checkTA();
    navBarFu();
    setPitanje()
    if(trenutnoPitanje == 2){
        containerQuestion.innerHTML = pitanja[0].hehe;
        btnBack.style.display = "none";
    }

    else if(trenutnoPitanje == 3){
        containerQuestion.innerHTML = pitanja[1].hehe;
    }
    
    else if(trenutnoPitanje == 4){
        containerQuestion.innerHTML = pitanja[2].hehe;
    }
    
    else if(trenutnoPitanje == 5){
        containerQuestion.innerHTML = pitanja[3].hehe;
    }

    else if(trenutnoPitanje == 6){
        containerQuestion.innerHTML = pitanja[4].hehe;
    }

    else if(trenutnoPitanje == 7){
        containerQuestion.innerHTML = pitanja[5].hehe;
        btnNext.style.display = "block";
        btnSubmit.style.display = "none";
    }
    trenutnoPitanje--;
}

function showNextQuestion(){

    checkCheckBox();
    checkRadioBox();
    checkSelect();
    checkCheckBox2();
    checkRadioBox2();
    checkInput();
    checkTA();
    navBarFu();
    trenutnoPitanje++;

    if(trenutnoPitanje > 1){
        btnBack.style.display = "block";
    }
    var prikaziPitanje = "";
    setPitanje()  
    if(trenutnoPitanje == 2){
        prikaziPitanje = pitanja[1].hehe; 
        }
    else if(trenutnoPitanje == 3){
        prikaziPitanje = pitanja[2].hehe;
    }
    else if(trenutnoPitanje == 4){
        prikaziPitanje = pitanja[3].hehe;
    }
    else if(trenutnoPitanje == 5){
        prikaziPitanje = pitanja[4].hehe;
    }
    else if(trenutnoPitanje == 6){
        prikaziPitanje = pitanja[5].hehe;
    }
    else if(trenutnoPitanje == 7){
        prikaziPitanje = pitanja[6].hehe;
        btnNext.style.display = "none";
        btnSubmit.style.display = "block";
        allowSubmit();
    }
    
    
    containerQuestion.innerHTML = prikaziPitanje;
   
}

function showSurvey(){
    mainDiv1.style.display = "none";
    mainDiv.style.display = "block";
}

function allowSubmit(){
    if(br_odgovora == 6){
        btnSubmit.classList.remove("disabled-button")
    }
    else{
        btnSubmit.classList.add("disabled-button");
    }
}

function submitSurvey(){
    mainDiv.style.display = "none";
    mainDivfinish.style.display="flex";
    var ta = document.getElementsByName("taName");
    for(var i=0,l=ta.length;i<l;i++){
        if(ta[i]?.value != "")
            zapamceniOdgovori[6][i] = ta[i]?.value;
    }

    let odg = '';
    let prviOdgovor=true;
    for(let i=0;i<zapamceniOdgovori.length;i++){
        odg+=`p${i}$$$$$`;
        prviOdgovor = true;
        for(let j=0;j<zapamceniOdgovori[i].length;j++){
            if(zapamceniOdgovori[i][j]!=''){
                if(!prviOdgovor)
                    odg+='$$$'
                if(i!=5 && i!=6)
                    odg+=`${j}`
                else 
                    odg+=`${zapamceniOdgovori[i][j]}`
                prviOdgovor = false;
            }
        }
        if(i!=zapamceniOdgovori.length-1)
        odg+='$$$$$$$'
    }
    
    upisi('submitData.php',odg)
    
}

let upisi = async function(url,data){

    let formd = new FormData();
    formd.append('data', data);
    const res = await fetch(url, {
        method:'POST',
        body:formd
    })

    let jso  = await res.text()
    console.log(jso)

}

btnSubmit.onclick = submitSurvey;