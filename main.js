let body = document.querySelector(".body");
let loding = document.querySelector(".over-lay");
window.addEventListener("load", function() {
  setTimeout(function() {
    loding.style.transition = "opacity 1s";
    loding.style.opacity = "0";
    setTimeout(function() {

      loding.style.display = "none";
      body.style.overflow = "auto";
    }, 2000);
  }, 0);
})
let rightS = document.querySelector(".right-s")
let coment = document.getElementById("coment");
let boxComent = document.querySelector(".box-coment");

let sendComent = document.querySelector('#sendComent');

let menu = document.querySelector(".meno");
let menuMood = "open";
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
let alerttte = document.getElementById("alertt");
let infoAlertt = document.querySelector('#infoAlertt');

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
let  nameInput = "unknown";



const colorconst = "2977F6";
// logo Variables
let spanLogo = document.getElementById("span");
let hh = document.getElementById("hh");
let logoMood = "sapn";
// show all Variables
let showMood = "show";
let hab = document.querySelector(".hab");
let showLll = document.getElementById("showAll"); 

// delet Variables
let r1 = document.querySelector(".r1");
let r2 = document.querySelector(".r2");
let r3 = document.querySelector(".r3");
let r4 = document.querySelector(".r4");
let r5 = document.querySelector(".r5");
let r6 = document.querySelector(".r6");
let r7 = document.querySelector(".r7");
let r8 = document.querySelector(".r8");
let r9 = document.querySelector(".r9");
let r10 = document.querySelector(".r10");

// nav Variables
let home = document.getElementById ("home");
let book = document.getElementById ("book");3
let videos = document.getElementById ("videos");
let friends = document.getElementById ("friends");
let n1 = document.getElementById ("n4");
let n2 = document.getElementById ("n3");
let n3 = document.getElementById ("n2");
let n4 = document.getElementById ("n1");
let n21 = document.getElementById ("n21");
let n32 = document.getElementById ("n32");
let n23 = document.getElementById ("n23");
let n24 = document.getElementById ("n24");

// show more Variables
let showAlot = document.getElementById ("showAlot");
let showAlotMood = "show";
let nee = document.getElementById ("nee");
let spanS = document.getElementById ("spanS");

// logo
let h1logo = `
  font-weight: 350;
  color: #333;
  transition: 0.8s;
  font-size: 30px;
  background:#fff;
  `;
  let spanLogoS = `
  background: #2977F6;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: #f1f1f1;
  transition: 0.8s;
  font-size: 30px;
`;
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
        padding: 22.4px 30px;
        color: #777;
        margin-left: 10px;
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
  window.scrollTo({
  top: 0,
  behavior: "smooth",
});
}
function n22() {
  nav(n2,n1,n3,n4,n32,n21,n23,n24);
  disNav(friends,book,home,videos);

}
function n33() {
  nav(n3,n2,n1,n4,n23,n32,n24,n21);
  disNav(videos,book,home,friends);
}
function n44() {
  nav(n4, n2, n3, n1,n24,n32,n23,n21);
  disNav(book,videos,home,friends);
}
let spanSs = document.querySelector("spanS");
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

let infoAlert = document.querySelector(".info-alert");
let alerte = document.getElementById("alertt");
let pMoodWeb = document.querySelector(".pMoodWeb");
let buttonMoodWeb = document.querySelector(".buttonMoodWeb");
let header = document.querySelector(".header");
let searchIcon = document.querySelector(".search-icon");
let seach = document.getElementById("seach");
let logoe = document.querySelector(".logo");
let naveev = document.querySelector(".naveev");
let pp = document.querySelectorAll(".pp");
let containerq = document.querySelectorAll(".containerq");
let infoo = document.querySelector(".infoo");
let infooo = document.querySelector(".infooo");
let infoooo = document.querySelector(".infoooo");
let w = document.querySelectorAll(".w");
let shoog = document.querySelector(".shoog");
let rrt = document.querySelector(".rrt");
let rrrt = document.querySelector(".rrrt");
let rrrtf = document.querySelector(".rrrtf");
let rrrrt = document.querySelector(".rrrrt");
let rrrrrt = document.querySelector(".rrrrrt");
let leftS = document.querySelector(".left-s")

let webMood = "dark";
let darMood = "dark";
let pi = document.getElementById("pi");
function darkk() {
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
color:#fff;
`
rrrt.style = `background :#222;
color:#fff;
`
rrrrt.style = `background :#222;
color:#fff;
`
rrrrrt.style = `background :#222;
color:#fff;
`
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
border: 1px #f9f9f9 solid;
color: #f7f7f7;
background: #111;
`;
searchIcon.style = `
border: 1px #f9f9f9 solid;
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
function lightt() {
  leftS.style.background = "#f1f1f1";
  leftS.style.color = "#000";
  document.querySelector(".navbar").style.background = "#fff";
rrt.style = `background :#f0f0f0;
color:#fff;
`
rrrt.style = `background :#f0f0f;
color:#fff;
`
rrrrt.style = `background :#f0f0f;
color:#fff;
`
rrrrrt.style = `background :#f0f0f;
color:#fff;
`
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
    lightt();
    isDarkMode = false;
    buttonMoodWeb.innerHTML = "dark_mode";
    pMoodWeb.innerHTML = "Dark Mood";
    pi.innerHTML = "dark_mode";
    
  } else {
    // استدعاء دالة الظلام
    darkk();
    isDarkMode = true;
    buttonMoodWeb.innerHTML = "light_mode";
    pMoodWeb.innerHTML = "Light Mood";
    pi.innerHTML = "light_mode";
    
  }
  // حفظ الحالة في Local Storage
  localStorage.setItem("isDarkMode", isDarkMode);
}
let bhu = document.querySelector(".bhu");
// استعادة الحالة عند تحميل الصفحة
window.onload = function() {
  n11()
  if (isDarkMode) {
    darkk();
    buttonMoodWeb.innerHTML = "light_mode";
    pMoodWeb.innerHTML = "Light Mood";
    pi.innerHTML = "light_mode";
  } else {
    lightt();
    buttonMoodWeb.innerHTML = "dark_mode";
    pMoodWeb.innerHTML = "Dark Mood";
    pi.innerHTML = "dark_mode";
  }
};

n11();
let lodingScreanLet = document.querySelector('#lA');
function lodingSean(show) {
  if(show && lodingScreanLet){
    lodingScreanLet.style.display = "flex";
  } else if (!show) {
    lodingScreanLet.style.display = "none";
  }
}
let checkPassword = document.getElementById("checkPassword");
let checkPasswordLog = document.getElementById("checkPasswordLog");
let passwordSin = document.getElementById("passwordSin");
let nameLog = document.querySelector("#nameLog");
let passwordLog = document.querySelector("#passwordLog");


checkPasswordLog.onclick = function() {
  if (checkPasswordLog.checked) {
    passwordLog.type = "text";
  } else {
    passwordLog.type = "password";
  }
}

checkPassword.onclick = function() {
  if (checkPassword.checked) {
    passwordSin.type = "text";
  } else {
    passwordSin.type = "password";
  }
}
let sinLog = document.getElementById("sinLog");
let logSin = document.getElementById("logSin");
let log = document.querySelector(".log");
let sin = document.querySelector(".sin");
sinLog.onclick  = function () {
  sin.style = `display:none;`
  log.style = `display:flex;`
}
logSin.onclick  = function () {
  log.style = `display:none;`
  sin.style = `display:flex;`
}

//[sinUpName,sinUpEmail,dateYearSin,dateMontheSin,dateDaySin,passwordSin]

// sin  up 
let sinUpBtn = document.getElementById("sinUpBtn");

let sinUpEmail = document.getElementById("sinUpEmail");
let sinUpName = document.getElementById("sinUpName");
let dateYearSin = document.getElementById("dateYearSin");
let dateMontheSin = document.getElementById("dateMontheSin");
let dateDaySin = document.getElementById("dateDaySin");
// تكوين Firebase

const firebaseConfig = {
    apiKey: "AIzaSyC2oLuDwObmTkwi3wXRu3qTi9IfkLxMsjg",
    authDomain: "fuison.firebaseapp.com",
    projectId: "fuison",
    storageBucket: "fuison.appspot.com",
    messagingSenderId: "272997929295",
    appId: "1:272997929295:web:bec659cdb8efa26192f53a",
    measurementId: "G-6030NS4W6P"
  };
    // تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

let imgProUrl = "pro1.jpeg";
let fileImgPro = document.getElementById("profileImageInput");

async function getImgProfile() {
  lodingSean(true);
  let file = fileImgPro.files[0];

  if (file) {
    let storageRef = storage.ref().child(`profile/${file.name}`);
    try {
      await storageRef.put(file);
      imgProUrl = await storageRef.getDownloadURL();
      lodingSean(false);
      alertt(imgProUrl, "green");
    } catch (error) {
      lodingSean(false);
      alertt(`Error is: ${error}`, "red");
    }
  } else {
    lodingSean(false); // تأكد من إيقاف مؤشر التحميل في حالة عدم وجود ملف
    console.log("Image is not defined"); // استخدام تنبيه بدلاً من console.log
  }
}
let users = JSON.parse(localStorage.getItem("usersvf")) || [];
let usersf = [];
let uId;
let postsLike;
async function sinUp() {
  if (
    sinUpName.value.trim() !== "" &&
    sinUpEmail.value.trim() !== "" &&
    dateYearSin.value.trim() !== "" &&
    dateMontheSin.value.trim() !== "" &&
    dateDaySin.value.trim() !== "" &&
    passwordSin.value.trim() !== ""
  )
  {
    // الحصول على التاريخ الحالي
    let dateSignUpAll = new Date();
let dateYear = dateSignUpAll.getFullYear();
let dateMonth = dateSignUpAll.getMonth() + 1; // الأشهر تبدأ من 0 لذلك نضيف 1
let dateDay = dateSignUpAll.getDate();
/*
dateYearSin.value.trim() !== "" &&
  dateMontheSin.value.trim() !== "" &&
  dateDaySin.value.trim() !== "" &&
*/
// حساب العمر
let age = dateYear - dateYearSin.value;
if (dateMonth < dateMontheSin.value || (dateMonth === dateMontheSin.value && dateDay < dateDaySin.value)) {
  age--;
}

// التحقق من العمر
if (age >= 10 && age <= 500 && dateMontheSin.value <= 12 && dateDaySin.value <= 31) {
     lodingSean(true);
let foundUser = false;
usersf = [];

try {
  let querySnapshot = await db.collection('users').get();
  if (querySnapshot.empty) {
    console.log("No users found");
  } else {
    querySnapshot.forEach((doc) => {
      let userDate = doc.data();
      usersf.push(userDate);
    });
  }
} catch (error) {
  lodingSean(false);
  alertt(`error is: ${error}`, "red");
  return; // إنهاء العملية في حالة الخطأ
}

// تحقق من وجود المستخدم
for (let i = 0; i < usersf.length; i++) {
  if (sinUpName.value.trim() === usersf[i].name || sinUpEmail.value.trim() === usersf[i].phone) {
    lodingSean(false);
    foundUser = true;
    alertt("Sorry, this user already exists", "red");
    break; // الخروج من الحلقة بعد العثور على المستخدم
  }
}

      if (foundUser == false) {
       let user = {
        name: sinUpName.value.trim(),
        phone: sinUpEmail.value.trim(),
        password: passwordSin.value.trim(),
        proImg: imgProUrl,
        liked: []
      };

lodingSean(true);

try {
  // إضافة المستخدم إلى مجموعة 'users'
  const userRef = await db.collection('users').add(user);

  // استرجاع المستند باستخدام المرجع
  const userDoc = await userRef.get();
  const userData = userDoc.data();

  // التأكد من وجود البيانات قبل الوصول إليها
  if (userData) {
    nameInput = userData.name;
    if(userData.proImg != "") imgProUrl = userData.proImg;
    else imgProUrl = "pro1.j  pg";
    uId = userRef.id;
    postsLike = userData.liked;
    clearInluts();
    showApp();
    alertt(`Hello ${userData.name}`, "green");
  } else {
    console.error("No user data found");
  }

  lodingSean(false);
} catch (error) {
  lodingSean(false);
  alertt(`Error is: ${error}`, "red");
}
      
      users.push(user);
      localStorage.setItem("usersvf", JSON.stringify(users));
      }
    } else {
      alertt("sorry " + sinUpName.value.trim() + ". You can't enter to fusion. Because you are young. ","red")
    }
  } else {
    alertt("املا جميع الحقول","red");  }
}
function clearInluts() {
  sinUpName.value = "" ;
  sinUpEmail.value = "" ;
  dateYearSin.value = "" ;
  dateMontheSin.value = "" ; 
  dateDaySin.value = "" ;
  passwordSin.value = "";
}
function showApp() {
  document.querySelector(".login").style = `display:none `;
  document.querySelector(".navbar").style= `display:flex `;
  colseUserPages();
}
async function login() {
if (passwordLog.value.trim() !== "" && nameLog.value.trim() !== "") {
  usersf = [];
  lodingSean(true);

  try {
    let querySnapshot = await db.collection('users').get();
    if (querySnapshot.empty) {
      console.log("No users found");
    } else {
      querySnapshot.forEach((doc) => {
        let userDate = doc.data();
        usersf.push({
            userDate: userDate,
            id: doc.id
          });
      });
    }
  } catch (error) {
    lodingSean(false);
    alertt(`error is: ${error}`, "red");
    return; // إنهاء العملية في حالة الخطأ
  }

  let userLogin = false;

  for (let i = 0; i < usersf.length; i++) {
    let user = usersf[i];
    if (user.userDate.password && user.userDate.phone) {
      if (passwordLog.value.trim().toLocaleLowerCase() === user.userDate.password.toLocaleLowerCase() 
      && nameLog.value.trim().toLocaleLowerCase() === user.userDate.phone.toLocaleLowerCase()) {
        userLogin = true;
        nameInput = user.userDate.name;
        if (user.proImg != "") imgProUrl = user.userDate.proImg;
        else imgProUrl = "pro1.jpg";
        postsLike = user.userDate.liked;
        uId = user.id;
        users.push(user);
        localStorage.setItem("usersvf", JSON.stringify(users));
        break; // الخروج من الحلقة بعد العثور على المستخدم
      }
    }
  }

  lodingSean(false);

  if (userLogin) {
    showApp();
  } else {
    alertt("The password and (email or phone number) are incorrect", "red");
  }
} else if (passwordLog.value.trim() === "" && nameLog.value.trim() === "") {
  alertt("Fill in the field (email or phone number) and password", "red");
} else if (nameLog.value.trim() === "") {
  alertt("Fill in the field (email or phone number)", "red");
} else if (passwordLog.value.trim() === "") {
  alertt("Fill in the field password", "red");
}
}
let logInbtn = document.getElementById("logInbtn")
sinUpBtn.onclick = function() {
  sinUp()
}
logInbtn.onclick = function() {
  login()
}
function showBhu() {
  if(users.length == 0){
     bhu.style.display = "none"  ;
  }
  else {
    bhu.style.display = "flex";
  }
}


let userPages = document.querySelector(".user-pages");
let colsePages = document.querySelector(".colse-pages");
function colseUserPages() {
  bhu.style.display = "none"  ;
}
colsePages.onclick = function (){
  colseUserPages();
}
let pagesSh = document.querySelector(".pages-sh").innerHTML ;
function showPages() {
  let pagesN = "";
  for (let u = 0; u < users.length; u++) {
    pagesN += `<div class="pages" onclick="loginWithPage(${u})">
                 <div class="image-page">
                   <img load = "lazy" load = "lazy"" src="${users[u].proImg}" alt="">
                 </div>
                 <div class="info-page">
                   <p class="p-name-page">${users[u].name}</p> 
                   <p class="p-id-page">${users[u].phone}</p> 
                 </div>
               </div>`;
  }
  pagesSh = pagesN;
}
showPages();
function loginWithPage(i) {
  nameLog.value = users[i].phone;
  passwordLog.value = users[i].password;
  login();
}
if (users.length == 1) {
  loginWithPage(0)
}
function logOut() {
  document.querySelector(".login").style = `display:flex `;
  document.querySelector(".navbar").style= `display:none `;
  buh.style.display = 'flex';
  clearInluts();
  showPages();
}
let userImgUpload = false;
let imgch = document.getElementById("imgch")
let imgu = document.querySelector('.imgu')
imgch.onchange = function(){
  let file = new FileReader();
  file.readAsDataURL(imgch.files[0]);
  file.onload = function (){
    imgu.style.display = "flex";
    imgu.src = file.result;  
    userImgUpload = true; 
  }
}

// متغيرات (تأكد من أن هذه العناصر موجودة في ملف HTML الخاص بك)
let postIndex = -1;
let posts = []; // تهيئة مصفوفة المنشورات

let uploadbtn = document.querySelector('.uploadbtn');
let narInp = document.querySelector('.narinpc');
async function upload() {
  if (narInp && narInp.value.trim() !== "" && nameInput && nameInput.trim() !== "") {
    let now = new Date();
    let date = now.getFullYear() + " / " + (now.getMonth() + 1) + " / " + now.getDate();
    console.log(date);
    let newPost = {
      bodyPost: narInp.value.replace(/\n/g, '<br>'),
      name: nameInput,
      likes: 0,
      date: date,
      coments: [],
      proUrl: imgProUrl
    };
    console.log (`${narInp.value}/${nameInput}`)
    lodingSean(true);
    try {
      const docRef = await db.collection('posts').add(newPost);
      console.log("Document written with ID: ", docRef.id);
      fetchPosts(); // تحديث المنشورات بعد إضافة منشور جديد
      clearInput();
    } catch (error) {
      alertt("Error adding document: " + error, "red");
    } finally {
      lodingSean(false);
    }

  } else {
    console.log("All fields must be provided and valid");
    alertt("Element with id 'narInp' or 'nameInput' not found or input value is empty.","red");
  }
};
let sendComentBtn = document.getElementById('sendComentBtn');
sendComentBtn.onclick = function() {
  
  if (sendComent.value.trim() !== "") {
    let dateComent = new Date();
    let dateComentNow = dateComent.getFullYear() + "/" + (dateComent.getMonth() + 1) + "/" + dateComent.getDate();
    let newComent = {
      bodyComent: sendComent.value,
      nameComent: nameInput,
      datecoment: dateComentNow,
      proUrl: imgProUrl
    };

    if (postIndex >= 0 && posts[postIndex]) {
      posts[postIndex].coments.push(newComent);

      lodingSean(true);
      const docRef = db.collection('posts').doc(posts[postIndex].id);
      docRef.update({
        coments: posts[postIndex].coments
      })
        .then(() => {
          lodingSean(false);
          console.log("Comment added");
          showComent();
          fetchPosts();
          sendComent.value = "";
        })
        .catch((error) => {
          lodingSean(false);
          alertt("Error adding comment: "+ error,"red");
        });
    } else {
      alert("No post selected for comment");
    }
  } 
  else {
    alert("Comment is empty");
  }
    
  
};

function showComent() {
  let comentser = document.getElementById("comentser");
  comentser.innerHTML = "";

  if (postIndex >= 0 && posts[postIndex].coments) {
    let storedComents = posts[postIndex].coments;

    if (storedComents.length === 0) {
      comentser.innerHTML = '<p class="p-nan">لا يوجد تعليقات كون اول من يعلق</p>';
    } else {
      for (let i = 0; i < storedComents.length; i++) {
        let comentHTML = `
          <div class="coment1">
            <div class="profile-coment">
             <img load = "lazy" src="${storedComents[i].proUrl}" alt="">
              <p class="pro-name-com">${storedComents[i].nameComent}</p>
              <p class="comet-date-info">${storedComents[i].datecoment}</p>
            </div>
            <div class="info-txt-com">
              <p>${storedComents[i].bodyComent}</p>
            </div>
          </div>`;
        comentser.innerHTML += comentHTML;
      }
    }
  } else {
    comentser.innerHTML = '<p class="p-nan">لا يوجد تعليقات كون اول من يعلق</p>';
  }
}

function fetchPosts() {
  lodingSean(true);

  // إعادة تعيين مصفوفة المنشورات
  posts = [];

  db.collection("posts").get()
    .then((querySnapshot) => {
      lodingSean(false);
      if (querySnapshot.empty) {
        console.log("No posts found");
      } else {
        querySnapshot.forEach((doc) => {
          let postData = doc.data();
          postData.id = doc.id;
          posts.push(postData);
        });
        showPost(posts);
      }
    })
    .catch((error) => {
      lodingSean(false);
      alertt("Error fetching documents: " + error, "red");
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
  fetchPosts();
});
function showPost(posts) {
  let postn = "";
  for (let i = 0; i < posts.length; i++){
    let comentsLength = posts[i].coments ? posts[i].coments.length : 0;
    postn += `
  <div class="nasher post">
                              <div class="head-post">
                                <div class="date-info">
                                  <p class="date">${posts[i].date}</p>
                                  <p class="material-symbols-outlined date-icon">calendar_month</p>
                                </div>
                                <div class="pro-post">
                                  <p>${posts[i].name}</p>
                                  <img load = "lazy" class="pro-cc" src="${posts[i].proUrl}" alt="">
                                </div>
                              </div>
                              <div class="post-info">
                                <p>${posts[i].bodyPost}</p>
                              </div>
                              <div class="chosesec">
                                <div class="upload like choke" onclick="deletePost('${posts[i].id}')">
                                  <button id="deleteee" class="likee deleteee chokee">
                                    <p>delete</p>
                                    <span id="spanS" class="material-symbols-outlined">delete</span>
                                  </button>
                                </div>
                                <div class="upload like choke" onclick="com(${i})">
                                  <button id="like" class="likee lookos chokee">
                                    <p id="lnn">${comentsLength}</p>
                                    <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
                                  </button>
                                </div>
                                <div class="upload like choke" onclick="likee(${i})">
                                  <button id="like" class="likee lookos chokee">
                                    <p id="lnn">${posts[i].likes}</p>
                                    <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
                                  </button>
                                </div>
                              </div>
                            </div>
    `;
  }
  /*
    -deletePost✅
    -com✅
    -likee✅
  */
  document.getElementById("posts").innerHTML = postn;
}

function clearInput() {
  narInp.value = "";
}

function com(index) {
  coment.style = `transform:translateY(0%)`;
  boxComent.style = `transform:translateX(0%)`;
  postIndex = index;
  showComent();
}
function deletePost(postId) {
            let deletPassord = prompt("Enter deletPassord");
            if (deletPassord === "fd-post") {
                lodingSean(true);
                const docRef = db.collection('posts').doc(postId);
                docRef.delete()
                    .then(() => {
                        lodingSean(false);
                        alert("Document successfully deleted!");
                        fetchPosts();
                    })
                    .catch((error) => {
                        lodingSean(false);
                        alertt("Error removing document: " + error, "red");
                    });
            } else {
                alertt("deletPassord is not true", "red");
            }
}
let postDLike = false;

// دالة لإزالة عنصر من مصفوفة
function removeElement(array, element) {
  return array.filter(e => e !== element);
}

// دالة الإعجاب
async function likee(postIndex) {
  let post = posts[postIndex];
  postDLike = postsLike.includes(post.id);

  // تحديث حالة الإعجاب وعدد الإعجابات
  if (postDLike) {
    post.likes--; // تقليل عدد الإعجابات
    postsLike = removeElement(postsLike, post.id);
  } else {
    post.likes++; // زيادة عدد الإعجابات
    postsLike.push(post.id);
  }

  // تحديث Local Storage
  lodingSean(true);
  try {
    const userRef = db.collection('users').doc(uId);
    await userRef.update({ liked: postsLike });
    console.log(post.id);

    // تحديث الوثيقة في Firebase
    const docRef = db.collection('posts').doc(post.id);
    await docRef.update({ likes: post.likes });

    console.log("Document successfully updated!");
    // تحديث العرض بعد التعديل
    fetchPosts();
  } catch (error) {
    alertt(`Error: ${error}`, "red");
  } finally {
    lodingSean(false);
  }
}
let searchMood = "all";
let inputSs = document.getElementById("inputSs");
function getSearchMood(id) {
  if (id == "byOpject") {
    searchMood = "opject";
    inputSs.placeholder = "Search by opject";
  } else {
    inputSs.placeholder = "Search by name";
    searchMood = "name";
  }
  searchere(inputSs.value);
}



function searcher(value) {
  if (value && value.trim() !== "") {
    let postn = ''; // تأكد من تهيئة متغير postn كسلسلة فارغة
    let found = false;

    for (let i = 0; i < posts.length; i++) {
      let postName = posts[i].name ? posts[i].name.trim().toLowerCase() : "";
      let postBody = posts[i].bodyPost ? posts[i].bodyPost.trim().toLowerCase() : "";
      let comentsLength = posts[i].coments ? posts[i].coments.length : 0;
      if (postName.includes(value.trim().toLowerCase()) || postBody.includes(value.trim().toLowerCase())) {
        found = true;
        postn += `
  <div class="nasher post">
                                        <div class="head-post">
                                          <div class="date-info">
                                            <p class="date">${posts[i].date}</p>
                                            <p class="material-symbols-outlined date-icon">calendar_month</p>
                                          </div>
                                          <div class="pro-post">
                                            <p>${posts[i].name}</p>
                                            <img load = "lazy" class="pro-cc" src="${posts[i].proUrl}" alt="">
                                          </div>
                                        </div>
                                        <div class="post-info">
                                          <p>${posts[i].bodyPost}</p>
                                        </div>
                                        <div class="chosesec">
                                          <div class="upload like choke" onclick="deletePost('${posts[i].id}')">
                                            <button id="deleteee" class="likee deleteee chokee">
                                              <p>delete</p>
                                              <span id="spanS" class="material-symbols-outlined">delete</span>
                                            </button>
                                          </div>
                                          <div class="upload like choke" onclick="com(${i})">
                                            <button id="like" class="likee lookos chokee">
                                              <p id="lnn">${comentsLength}</p>
                                              <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
                                            </button>
                                          </div>
                                          <div class="upload like choke" onclick="likee(${i})">
                                            <button id="like" class="likee lookos chokee">
                                              <p id="lnn">${posts[i].likes}</p>
                                              <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
        `;
      }
    }

    if (found) {
      document.getElementById("posts").innerHTML = postn;
    } else {
      document.getElementById("posts").innerHTML = '<p class="p-nan">لا توجد نتائج مطابقة للبحث</p>';
    }
  } 
}
function searchere(value) {
  let searchPost = "";
  let found = false;
  let foundOpject = false;
  let foundName = false;
  let comentsLength;
  if (value && value.trim().toLocaleLowerCase() !== "") {
    if (searchMood === "all") {
      for (let i = 0; i < posts.length; i++) {
        let postName = posts[i].name ? posts[i].name.trim().toLowerCase() : "";
        let postBody = posts[i].bodyPost ? posts[i].bodyPost.trim().toLowerCase() : "";
        comentsLength = posts[i].coments ? posts[i].coments.length : 0;
        if (postName.includes(value.trim().toLowerCase()) || postBody.includes(value.trim().toLowerCase())) {
          found = true;
          searchPost += `
  <div class="nasher post">
             <div class="head-post">
               <div class="date-info">
                 <p class="date">${posts[i].date}</p>
                 <p class="material-symbols-outlined date-icon">calendar_month</p>
               </div>
               <div class="pro-post">
                 <p>${posts[i].name}</p>
                 <img load = "lazy" class="pro-cc" src="${posts[i].proUrl}" alt="">
               </div>
             </div>
             <div class="post-info">
               <p>${posts[i].bodyPost}</p>
             </div>
             <div class="chosesec">
               <div class="upload like choke" onclick="deletePost('${posts[i].id}')">
                 <button id="deleteee" class="likee deleteee chokee">
                   <p>delete</p>
                   <span id="spanS" class="material-symbols-outlined">delete</span>
                 </button>
               </div>
               <div class="upload like choke" onclick="com(${i})">
                 <button id="like" class="likee lookos chokee">
                   <p id="lnn">${comentsLength}</p>
                   <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
                 </button>
               </div>
               <div class="upload like choke" onclick="likee(${i})">
                 <button id="like" class="likee lookos chokee">
                   <p id="lnn">${posts[i].likes}</p>
                   <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
                 </button>
               </div>
             </div>
           </div>
     `;
        }
      }
      if (found) {
        document.getElementById("postsSsearch").innerHTML = searchPost;
      } else {
        document.getElementById("postsSsearch").innerHTML = '<p class="p-nan">لا توجد نتائج مطابقة للبحث</p>';
      }
    } else if (searchMood === "name") {
      for (let i = 0; i < posts.length; i++) {
        let postName = posts[i].name ? posts[i].name.trim().toLocaleLowerCase() : "";
        comentsLength = posts[i].coments ? posts[i].coments.length : 0;
        if (postName.includes(value.trim().toLocaleLowerCase())) {
          foundName = true;
          searchPost += `
  <div class="nasher post">
             <div class="head-post">
               <div class="date-info">
                 <p class="date">${posts[i].date}</p>
                 <p class="material-symbols-outlined date-icon">calendar_month</p>
               </div>
               <div class="pro-post">
                 <p>${posts[i].name}</p>
                 <img load = "lazy" class="pro-cc" src="${posts[i].proUrl}" alt="">
               </div>
             </div>
             <div class="post-info">
               <p>${posts[i].bodyPost}</p>
             </div>
             <div class="chosesec">
               <div class="upload like choke" onclick="deletePost('${posts[i].id}')">
                 <button id="deleteee" class="likee deleteee chokee">
                   <p>delete</p>
                   <span id="spanS" class="material-symbols-outlined">delete</span>
                 </button>
               </div>
               <div class="upload like choke" onclick="com(${i})">
                 <button id="like" class="likee lookos chokee">
                   <p id="lnn">${comentsLength}</p>
                   <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
                 </button>
               </div>
               <div class="upload like choke" onclick="likee(${i})">
                 <button id="like" class="likee lookos chokee">
                   <p id="lnn">${posts[i].likes}</p>
                   <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
                 </button>
               </div>
             </div>
           </div>
           `;
        }
      }
      if (foundName) {
        document.getElementById("postsSsearch").innerHTML = searchPost;
      } else {
        document.getElementById("postsSsearch").innerHTML = '<p class="p-nan">لا توجد نتائج مطابقة للبحث</p>';
      }
    } else {
      for (let i = posts.length - 1; i >= 0; i--) {
        let postBody = posts[i].bodyPost ? posts[i].bodyPost.trim().toLocaleLowerCase() : "";
        comentsLength = posts[i].coments ? posts[i].coments.length : 0;
        if (postBody.includes(value.trim().toLocaleLowerCase())) {
          foundOpject = true;
          searchPost += `       
  <div class="nasher post">
                                                    <div class="head-post">
                                                      <div class="date-info">
                                                        <p class="date">${posts[i].date}</p>
                                                        <p class="material-symbols-outlined date-icon">calendar_month</p>
                                                      </div>
                                                      <div class="pro-post">
                                                        <p>${posts[i].name}</p>
                                                        <img load = "lazy" class="pro-cc" src="${posts[i].proUrl}" alt="">
                                                      </div>
                                                    </div>
                                                    <div class="post-info">
                                                      <p>${posts[i].bodyPost}</p>
                                                    </div>
                                                    <div class="chosesec">
                                                      <div class="upload like choke" onclick="deletePost('${posts[i].id}')">
                                                        <button id="deleteee" class="likee deleteee chokee">
                                                          <p>delete</p>
                                                          <span id="spanS" class="material-symbols-outlined">delete</span>
                                                        </button>
                                                      </div>
                                                      <div class="upload like choke" onclick="com(${i})">
                                                        <button id="like" class="likee lookos chokee">
                                                          <p id="lnn">${comentsLength}</p>
                                                          <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
                                                        </button>
                                                      </div>
                                                      <div class="upload like choke" onclick="likee(${i})">
                                                        <button id="like" class="likee lookos chokee">
                                                          <p id="lnn">${posts[i].likes}</p>
                                                          <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
        `;
        }
      }
      if (foundOpject) {
        document.getElementById("postsSsearch").innerHTML = searchPost;
      } else {
        document.getElementById("postsSsearch").innerHTML = '<p class="p-nan">لا توجد نتائج مطابقة للبحث</p>';
      }
    }
  }
}
function openSearch() {
  document.querySelector(".search-icon").style = `display:none;`;
  document.getElementById("seach").style = `display:flex;`;
  document.getElementById("seach").focus()
}


/*let valuelange = "en";
function trans() {
  if (valuelange === "en") {
    valuelange = "ar";
  } else {
    valuelange = "en";
  }
  console.log(valuelange);
}

*/

// التأكد من أن دالة alertt موجودة أو تعريفها إذا لم تكن موجودة

window.onerror = function(message, source, lineno, colno, error) {
  // عرض رسالة تنبيه عند حدوث خطأ
  alertt("):حدث خطأ، سوف يتم إعادة تحميل الموقع " + error, "red");

  // تعيين حدث النقر على الزر .btn-info لإعادة تحميل الصفحة
  var reloadButton = document.querySelector(".btn-info");
  if (reloadButton) {
    reloadButton.onclick = function() {
      location.reload();
    };
  } else {
    // إذا لم يكن الزر موجودًا، إعادة تحميل الصفحة فورًا
    location.reload();
  }

  // إعادة false لمنع ظهور رسالة الخطأ الافتراضية
  return false;
}