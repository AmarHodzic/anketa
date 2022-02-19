let tabla = document.getElementById("tabla")
let btnIspitanik = document.getElementById('ispitanik')
let btnPV = document.getElementById("prosek")
let prikazitabelu = document.getElementById("prikazitabelu")
let chrt = document.getElementById("chrt")
let vremKor = document.getElementById('vremeKor')

let upisi = async function(url){

  const res = await fetch(url, {
      method:'GET'
  })

  let jso  = await res.json()
  console.log(jso)
  showTabela(jso);
  sumnjiva(jso)
  showStatus()
  // tabla.style.color = "red"
  btnIspitanik.addEventListener('click',(evt)=>{
    document.getElementById('tabla').innerHTML='';  
    document.getElementsByClassName('active')[0].classList.remove('active')
    evt.target.classList.add('active')
    document.getElementById('chrt').style.display="block"
    showStatus()
    drawChart([
      ['Task', 'Status'],
  ['Ucenik', pom],
  ['Student', pom1],
  ['Zaposlen', pom2],
  ['Nezaposlen', pom3],
  ['Penzioner', pom4]
  ],'Zanimanje')
  })
  btnPV.addEventListener('click',(evt)=>{
    document.getElementById('tabla').innerHTML='';
    document.getElementsByClassName('active')[0].classList.remove('active')
    evt.target.classList.add('active')  
    document.getElementById('chrt').style.display="block"
    showPV();
    drawChart([
      ['Task', 'Hours per Day'],
  ['< 1h', pom],
  ['1 - 2h', pom1],
  ['2 - 3h', pom2],
  ['3 - 4h', pom3],
  ['> 4h', pom4]
  ],'Prosecno vreme')
  })
  prikazitabelu.addEventListener('click',(evt)=>{
    document.getElementsByClassName('active')[0].classList.remove('active')
    evt.target.classList.add('active')
        showTabela(jso)
        sumnjiva(jso)
        document.getElementById('chrt').style.display="none"
  })

  vremeKor.addEventListener('click',(evt)=>{  
    document.getElementsByClassName('active')[0].classList.remove('active')
    evt.target.classList.add('active')
    document.getElementById('tabla').innerHTML=''; 
    
    document.getElementById('chrt').style.display="block"
    showVremeKor()
    drawChart([
      ['Task', 'Vreme koriscenja'],
  ['Ujutru', pom],
  ['Uvece', pom1],
  ['Bilo kada u toku dana', pom2],
  ['U kratkim pauzama za vreme posla', pom3]
  ],'Kada najvise koristite mobilni telefon?')
  })
}

let pom = 0;
let pom1 = 0;
let pom2 = 0;
let pom3 = 0;
let pom4 = 0;

let stat = 0
let stat1 = 0
let stat2 = 0
let stat3 = 0
let stat4 = 0

let pv = 0
let pv1 = 0
let pv2 = 0
let pv3 = 0
let pv4 = 0

let vk = 0
let vk1 = 0
let vk2 = 0
let vk3 = 0

function showStatus(){
  pom = stat
  pom1 = stat1
  pom2 = stat2
  pom3 = stat3
  pom4 = stat4  
}


function showPV(){
  pom = pv
  pom1 = pv1
  pom2 = pv2
  pom3 = pv3
  pom4 = pv4  
}

function showVremeKor(){
  pom = vk
  pom1 = vk1
  pom2 = vk2
  pom3 = vk3
}

upisi('setTabela.php');

function sumnjiva(data){
  var rowss = tabla.getElementsByTagName("tr")
  for(let i = 0; i<data.length; i++){
    if((data[i].status == data[i].pol)&&(data[i].prosecno_vreme == data[i].vreme_koriscenja)&&(data[i].status == data[i].vreme_koriscenja)&&(data[i].app.length<5)&&(data[i].zavisnost.length<5)){
      rowss[i+1].style.color = "red"
    }
  }
}

function showTabela(data){
  console.log(data[0].id)

  let x =`<table id="tabla"> 
  <tr>
      <th>Ispitanik</th>
      <th>Status(ucenik..)</th>
      <th>Pol</th>
      <th>Prosecno vreme</th>
      <th>Svrha koriscenja</th>
      <th>Vreme koriscenja</th>
      <th>Najkoriscenije app</th>
      <th>Opis zavisnosti</th>
      <th>Validnost</th>
  </tr>`;

  for(let i =0;i<data.length;i++){
    x+="<tr>";
    
    x+="<td>";
    x+=data[i].id;
    x+="</td>";
    
    if(data[i].status == 0){
      x+="<td>";
      x+= 'Ucenik';
      x+="</td>";
      stat+=1;    
    }
    else if(data[i].status == 1){
      x+="<td>";
      x+= 'Student';
      x+="</td>";    
      stat1+=1;
    }
    else if(data[i].status == 2){
      x+="<td>";
      x+= 'Zaposlen';
      x+="</td>";
      stat2+=1;    
    }else if(data[i].status == 3){
      x+="<td>";
      x+= 'Nezaposlen';
      x+="</td>";
      stat3+=1;
    }else{
      x+="<td>";
      x+= 'Penzioner';
      x+="</td>";
      stat4+=1;
    }

    if(data[i].pol == 0){
      x+="<td>";
      x+= 'M';
      x+="</td>";    
    }else{
      x+="<td>";
      x+= 'Z';
      x+="</td>";    
    }
    
    if(data[i].prosecno_vreme == 0){
      x+="<td>";
      x+= '< 1h';
      x+="</td>";    
      pv+=1;    
    }
    else if(data[i].prosecno_vreme == 1){
      x+="<td>";
      x+= '1 - 2h';
      x+="</td>";
      pv1+=1;    
    }
    else if(data[i].prosecno_vreme == 2){
      x+="<td>";
      x+= '2 - 3h';
      x+="</td>";
      pv2+=1;    
    }
    else if(data[i].prosecno_vreme == 3){
      x+="<td>";
      x+= '3 - 4h';
      x+="</td>";
      pv3+=1;    
    }else{
      x+="<td>";
      x+= '> 4h';
      x+="</td>";    
      pv4+=1;
    }

    x+="<td>";
    for(var j=0;j<data[i].svrha.length;j++){
      console.log(data[i].svrha[j])
      if(data[i].svrha[j] == 0){    
        x+="Edukacija";
      }
      else if(data[i].svrha[j] == 1){
        x+="Komunikacija porukama";
      }
      else if(data[i].svrha[j] == 2){
        x+="Vesti";
      }
      else if(data[i].svrha[j] == 3){
        x+="Drustvene mreze"; 
      }
      else if(data[i].svrha[j] == 4){
        x+="Igrice";
      }
      if(j!=data[i].svrha.length-1)
      x+=", "
    }
    x+="</td>";  

    if(data[i].vreme_koriscenja == 0){
      x+="<td>";
      x+= 'Ujutru';
      x+="</td>";    
      vk+=1
    }
    else if(data[i].vreme_koriscenja == 1){
      x+="<td>";
      x+= 'Uvece';
      x+="</td>";
      vk1+=1    
    }
    else if(data[i].vreme_koriscenja == 2){
      x+="<td>";
      x+= 'Bilo kada u toku dana';
      x+="</td>";
      vk2+=1    
    }else{
      x+="<td>";
      x+= 'U kratkim pauzama za vreme posla';
      x+="</td>";
      vk3+=1
    }

    x+="<td>";
    x+=data[i].app;
    x+="</td>";

    x+="<td>";
    x+=data[i].zavisnost;
    x+="</td>";

    if((data[i].status == data[i].pol)&&(data[i].prosecno_vreme == data[i].vreme_koriscenja)&&(data[i].status == data[i].vreme_koriscenja)&&(data[i].app.length<5)&&(data[i].zavisnost.length<5)){
      x+="<td>";
      x+="sumnjiva";
      x+="</td>";  
    }else{
      x+="<td>";
      x+="";
      x+="</td>";
    }

    // x+="<td>";
    // x+="x";
    // x+="</td>";

    x+="</tr>";
  }

  tabla.innerHTML = x;

}
