function getMenuMood() {
  if (menuMood == "open") {
    menuMood = "close";
    rightS .style =  `
    width:257.2px ;

    `;
    menu.innerHTML = "close";
  }
  else {
    menuMood = "open";
    rightS .style=  `
    width: 0;
    `;
    menu.innerHTML = "menu";
  }
}
function gg() {
  alerttte.style=`display :none;`
}
function gggu() {
coment.style=`display :none;`;
}

window.addEventListener("mouseup",function (event) {
  gg();
})
function alertt(msg, color) {
  gggu(); // تأكد من أن gggu هي دالة معرفة مسبقًا
  if (alerttte && infoAlertt) {
    alerttte.style.display = 'flex';
    infoAlertt.innerHTML = msg;
    infoAlertt.style.color = color;
  } else {
    console.error("Elements with id 'alertt' or selector '#infoAlertt' not found.");
  }
}



 function logo() {
  if (logoMood == "span") {
spanLogo.style = h1logo;
hh.style = spanLogoS ;
logoMood = "h1";
  }
  else {
hh.style = h1Logo;
spanLogo.style = spanLogoS;
logoMood = "span";
  }
}

// show and hidden 
function show(name,heght,allm) {
  name.style = `
  height:  ${heght}${allm};
overflow-y: hidden;
  `
}
function hidden(name,heght,allm) {
  name.style = `
  height:  ${heght}${allm};
overflow-y: hidden;
  `
}

// showAll
showLll.onclick = function() {
if (showMood == "show") {
  show(hab,100,"%");
  showLll.innerHTML = "Hidden";
  showMood = "hidden";
}
else {
hidden(hab,140,"px");
showLll.innerHTML = "Show All";
showMood = "show";
} 

}

// delet
function delet(r) {
  r.style = `
  display:none;
  `
}
// nav 
 function nav(num1,num2,num3,num4,num5,num6,num7,num8) {
num1.style = `
        font-size: 30px;
        color: #777;
        margin-left: 10px;
        border-bottom: 2.5px #2977F6 solid;
        color: #2977F6;
        padding: 22.4px 30px;
`;
num2.style = `
        font-size: 30px;
        padding: 22.4px 30px;
        color: #777;
        margin-left: 10px;
`;
num3.style = `
        font-size: 30px;
        padding: 22.4px 30px;
        color: #777;
        margin-left: 10px;
`;
num4.style = `
        font-size: 30px;
        padding: 22.4px 30px;
        color: #777;
        margin-left: 10px;
`;
num5.style = `
        font-size: 30px;
                color: #777;
                margin-left: 10px;
                border-top: 2.5px #2977F6 solid;
                color: #2977F6;
                padding: 22.4px 30px;
`;
num6.style = `
        font-size: 30px;
        padding: 22.4px 30px;
        color: #777;
        margin-left: 10px;
`;
num7.style = `
        font-size: 30px;
        padding: 22.4px 30px;
        color: #777;
        margin-left: 10px;
`;
num8.style = `
        font-size: 30px;
        padding: 22.4px 30px;
        color: #777;
        margin-left: 10px;
`;
}

function disNav(e1,e2,e3,e4) {
  e1.style = `
    padding-top :76.6px;
  `;
  e2.style = `
    display :none;
  `;
  e3.style = `
    display :none;
  `;
  e4.style = `
    display :none;
  `;
}

function n11() {
  nav(n1,n2,n3,n4,n21,n32,n23,n24);
  disNav(home,book,friends,videos);
  document.querySelector('.profiledivp').style.display = "none"
  document.querySelector('.profileasuer').style.display = "none"
  document.querySelector('#chatsF').style.display = "none";
  document.getElementById("chatsM").style.display = "none";
  home.scrollTo({
  top: 0,
  behavior: "smooth",
});
}
function n22() {
  nav(n2,n1,n3,n4,n32,n21,n23,n24);
  disNav(friends,book,home,videos);
  document.querySelector('.profiledivp').style.display = "none"
  document.querySelector('.profileasuer').style.display = "none"
  document.querySelector('#chatsF').style.display = "none";
  document.getElementById("chatsM").style.display = "none";
  }function n33() {
  nav(n3,n2,n1,n4,n23,n32,n24,n21);
  disNav(videos,book,home,friends);
  document.querySelector('.profiledivp').style.display = "none"
  document.querySelector('.profileasuer').style.display = "none"
  document.querySelector('#chatsF').style.display = "none";
  document.getElementById("chatsM").style.display = "none";
}
function n44() {
  nav(n4, n2, n3, n1,n24,n32,n23,n21);
  disNav(book,videos,home,friends);
  document.querySelector('.profiledivp').style.display = "none";
  document.querySelector('.profileasuer').style.display = "none";
  document.querySelector('#chatsF').style.display = "none";
  document.getElementById("chatsM").style.display = "none";
  postsImport();
}
function idG(id) {
  return document.getElementById(`${id}`)
}
function n55() {
  nav(idG(n25), n2, n3, n1, idG(n25), n32, n23, n21);
  disNav(book, videos, home, friends);
  document.querySelector('.profiledivp').style.display = "none";
  document.querySelector('.profileasuer').style.display = "none";
  document.querySelector('#chatsF').style.display = "none";
  document.getElementById("chatsM").style.display = "none";
  postsImport();
}

// showMore
showAlot.onclick = function () {
  if (showAlotMood == "show") {
        pS.innerHTML = "show less"
    
    show(nee,1119.9,"px");
    showAlotMood = "hidden";
  }
  else {
        pS.innerHTML = "show more"
   hidden(nee,690,"px");
   showAlotMood = "show";

  }
}

n11();

function lodingSean(show) {
  if (show && lodingScreanLet) {
    lodingScreanLet.style.display = "flex";
  } else if (!show) {
    lodingScreanLet.style.display = "none";
  }
}
function bake(e) {
  document.querySelector(e).style.display = "none";
}