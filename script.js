// const F = document.getElementById("F");
// const H = document.getElementById("H");
// const M = document.getElementById("M");
   
    
// F.addEventListener("click",fClick);

//   function fClick(){
      
//     document.getElementById("f1").innerHTML="Técnico em administração pelo IFES"; 
//     document.getElementById("f2").innerHTML="Cursando Ciências da Computação pela UVV";

//     }

// H.addEventListener("click",hClick);

//   function hClick(){
//     document.getElementById("h1").innerHTML="Jogador de RPG e um artista amador."; 
//     document.getElementById("h2").innerHTML="Trazendo noções básicas de desing grafico.";
//     document.getElementById("img").src
//     }

// M.addEventListener("click",mClick);

//   function mClick(){
//     document.getElementById("m1").innerHTML="Tenho atualmente 18 anos e curso ciências da computação. Sou muito interessado no meu aprendizado, gosto de me especializar e tenho uma boa capacidade de aprendizado. Posso dizer também que tenho uma criatividade que pode ser aproveitada.";
//     document.getElementById("m2").innerHTML="Sou capaz de ler e entender a maior parte dos textos em inglês sem dificuldades, apesar de não ter um certificado official que demonstre meu nivel de dominio da lingua."
//     }

// bMimOn=document.getElementById("bMim")
// bMimOn.onclick = mimOut;

// bFormacaoOn=document.getElementById("bFormacao")
// bFormacaoOn.onclick = formacaoOut;

// bHobbiesOn=document.getElementById("bHobbies")
// bHobbiesOn.onclick = hobbiesOut;

// function mimOut(){

// }

const M = document.getElementById("M");

M.addEventListener("click",mClick);

function mClick(){
  var mim1 = document.getElementById("m1");
  if (mim1.style.display === "none") {
    mim1.style.display = "block";
  } else {
    mim1.style.display = "none";
  }

  var mim2 = document.getElementById("m2");
  if (mim2.style.display === "none") {
    mim2.style.display = "block";
  } else {
    mim2.style.display = "none";
  }
}

const F = document.getElementById("F");

F.addEventListener("click",fClick);

function fClick(){
   var form1 = document.getElementById("f1");
  if (form1.style.display === "none") {
    form1.style.display = "block";
  } else {
    form1.style.display = "none";
  }

   var form2 = document.getElementById("f2");
  if (form2.style.display === "none") {
    form2.style.display = "block";
  } else {
    form2.style.display = "none";
  }
  
  var form3 = document.getElementById("f3");
  if (form3.style.display === "none") {
    form3.style.display = "block";
  } else {
    form3.style.display = "none";
  }

  var form4 = document.getElementById("f4");
  if (form4.style.display === "none") {
    form4.style.display = "block";
  } else {
    form4.style.display = "none";
  }
  
}

const H = document.getElementById("H");

H.addEventListener("click",hClick);

function hClick(){
   var hob1 = document.getElementById("h1");
  if (hob1.style.display === "none") {
    hob1.style.display = "block";
  } else {
    hob1.style.display = "none";
  }

   var hob2 = document.getElementById("h2");
  if (hob2.style.display === "none") {
    hob2.style.display = "block";
  } else {
    hob2.style.display = "none";
  }

  var hobimg = document.getElementById("hobImg");
  if (hobimg.style.display === "none") {
    hobimg.style.display = "block";
  } else {
    hobimg.style.display = "none";
  }

  var textImg = document.getElementById("imgText");
  if (textImg.style.display === "none") {
    textImg.style.display = "block";
  } else {
    textImg.style.display = "none";
  }
}