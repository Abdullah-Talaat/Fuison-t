function dark() {
  leftS.style.background = "#333";
  leftS.style.color = "#f1f1f1";
pi.style = `
     color:#fff;
     background :#6C6C6C;
    `;
menu.style = `
     color:#fff;
     background :#6C6C6C;
    `;
    
boxComent.style = `
background: #111;
`;
infoAlert.style = `background :#444;`;


body.style = `background:#333;`;
shoog.onclick = function () {
shoog.style=` color:#8167FF;`
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
w.style =`color:#B6B6B6;`;
document.querySelector(".navbar").style.background = "#222";
infoo.style = `color:#D5D5D5;`;
infooo.style = `color:#D5D5D5;`;
infoooo.style = `color:#D5D5D5;`;
containerq.style = `background :#333;
color:#D5D5D5;
`
rrrtf.style = `background :#333;
color:#fff;
`
rrt.style = `background :#222;
               color:#f0f0f;
                `;
header.style = `
background :#222;
`;
hh.style = `
color:#f1f1f1;
transition: 0.8s;
font-size: 30px;
background: #222;
`;
spanLogo.style = `
background: #236DE5;
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: #f1f1f1;
transition: 0.8s;
font-size: 30 px;
background: #236DE5;
`;
seach.style = `
outline-color:#236DE5 ;
color: #f1f1f1;
background: #111;
`;
searchIcon.style = `
color: #f7f7f7;
background: #111;
`;
searchIcon.onclick = function() {
// Tab to edit
// searcher()
searchIcon.style = `background: #777;
color: #fff;`
}
logoe.onclick = function () {
if (logoMood == "span") {
spanLogo.style = `font-weight: 350;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
background:#222;
`;
hh.style = `background: #2977F6;
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
`;
logoMood = "h1";

}
else {
hh.style = `font-weight: 350;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
margin: 3px;
background: #222;`;
spanLogo.style = `
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;background: #236DE5;
`;
logoMood = "span";
}
}

}
function light() {
  leftS.style.background = "#f1f1f1";
  leftS.style.color = "#000";
  document.querySelector(".navbar").style.background = "#fff";
  rrt.style = `background :#f0f0f0;
               color:#222;
                `;
shoog.onclick = function() {
shoog.style = ` color:#092AB5;`
if (showMood == "show") {
show(hab, 100, "%");
showLll.innerHTML = "Hidden";
showMood = "hidden";
}
else {
hidden(hab, 140, "px");
showLll.innerHTML = "Show All";
showMood = "show";
}

}

w.style =`color:#9C9C9C;`;
infoo.style = `color:#000;`;
infooo.style = `color:#000;`;
infoooo.style = `color:#000;`;
containerq.style = `background :#f1f1f;
color:#000;
`
rrrtf.style = `background :#f1f1f;
color:#000;
`
header.style = `
background :#fff;
`;
hh.style = `
color: #333;
`;
spanLogo.style = `
color: #f1f1f1;
background: #2977F6;
`;
seach.style = `
outline-color:#2977F6 ;
color: #000;
`;
searchIcon.style = `
border: 1px #888 solid;
color: #888;
background: #f5f5f5;
`;
searchIcon.onclick = function() {
// Tab to edit
searcher()
searchIcon.style = `background: #f9f9f9;
color: #555;`
}
logoe.onclick = function() {
if (logoMood == "span") {
spanLogo.style = `font-weight: 350;
color: #333;
transition: 0.8s;
font-size: 30px;
background:#fff;
`;
hh.style = `background: #2977F6;
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
`;
logoMood = "h1";
}
else {
hh.style = `font - weight: 350;
color: #333;
transition: 0.8s;
font-size: 30px;
margin: 3px;`;
spanLogo.style = `background: #2977F6;
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: # f1f1f1;
transition: 0.8 s;
font - size: 30 px;background: #2977F6;
`;

logoMood = "span";
}
pi.style = `
     color:#000;
     background :#f6f6f6;
    `;
menu.style = `
     color:#000;
     background :#f6f6f6;
    `;
}


 
body.style = `background :#f1f1f1;`;
infoAlert.style = `background :#f0f0f;`;

}

let isDarkMode = localStorage.getItem("isDarkMode") === "true";

function toggleMode() {
  if (isDarkMode) {
    // استدعاء دالة الضوء
    light();
    isDarkMode = false;
    buttonMoodWeb.innerHTML = "dark_mode";
    pMoodWeb.innerHTML = "Dark Mood";
    pi.innerHTML = "dark_mode";
    
  } else {
    // استدعاء دالة الظلام
    dark();
  
    isDarkMode = true;
    buttonMoodWeb.innerHTML = "light_mode";
    pMoodWeb.innerHTML = "Light Mood";
    pi.innerHTML = "light_mode";
    
  }
  // حفظ الحالة في Local Storage
  localStorage.setItem("isDarkMode", isDarkMode);
}

// استعادة الحالة عند تحميل الصفحة
window.onload = function() {
  if (isDarkMode) {
    dark();
    buttonMoodWeb.innerHTML = "light_mode";
    pMoodWeb.innerHTML = "Light Mood";
    pi.innerHTML = "light_mode";
  } else {
    light();
    buttonMoodWeb.innerHTML = "dark_mode";
    pMoodWeb.innerHTML = "Dark Mood";
    pi.innerHTML = "dark_mode";
  }
};

function lodingSean(show) {
  if (show && lodingScreanLet) {
    lodingScreanLet.style.display = "flex";
  } else if (!show) {
    lodingScreanLet.style.display = "none";
  }
}