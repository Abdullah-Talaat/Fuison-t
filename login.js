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

// sin  up 
let sinUpBtn = document.getElementById("sinUpBtn");

let sinUpEmail = document.getElementById("sinUpEmail");
let sinUpName = document.getElementById("sinUpName");
let dateYearSin = document.getElementById("dateYearSin");
let dateMontheSin = document.getElementById("dateMontheSin");
let dateDaySin = document.getElementById("dateDaySin");

let imgProUrl = "pro1.jpeg";
let fileImgPro = document.getElementById("profileImageInput");
/*lbprofileImageSin box-img-sin*/
let lbprofileImageSin = document.querySelector('.lbprofileImageSin');
let boximgsinImg = document.querySelector('.box-img-sin img')
let boximgsin = document.querySelector('.box-img-sin')
async function getImgProfile() {
  lodingSean(true);
  let file = fileImgPro.files[0];

  if (file) {
    let storageRef = storage.ref().child(`profile/${file.name}`);
    try {
      await storageRef.put(file);
      imgProUrl = await storageRef.getDownloadURL();
      boximgsinImg.src = imgProUrl;
      
      lbprofileImageSin.style.display = "none";
      boximgsin.style.display = "flex";
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
let users1 = JSON.parse(localStorage.getItem("usersvf")) || [];
let users2 = JSON.parse(localStorage.getItem("usersvfy")) || [];

// دمج المصفوفتين في مصفوفة واحدة
let users = users1.concat(users2);

let usersf = [];
let uId;
let postsLike;
let trueU;
let token = "";
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
        token:`token-${sinUpEmail.value.trim()}-${passwordSin.value.trim()}-by${sinUpName.value.trim()}`,
        proImg: imgProUrl,
        liked: [],
        ture:false
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
    token = userData.token;
    localStorage.setItem("tokenStorg",token)
    console.log(localStorage.getItem("tokenStorg").split("-"))
    if(userData.proImg != "") imgProUrl = userData.proImg;
    else imgProUrl = "pro1.jpeg";
    document.querySelector('#imgporfii').src = imgProUrl
    document.querySelector('#imgporfiii').src = imgProUrl
    uId = userRef.id;
    postsLike = userData.liked;
    trueU = userData.ture;
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
  nameLog.value = "";
  passwordLog.value = "";
}
function getToken() {
  alertt(localStorage.getItem("tokenStorg"),"green");
}
function showApp() {
  document.querySelector(".login").style = `display:none `;
  document.querySelector(".navbar").style= `display:flex `;
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
  if (passwordLog.value.trim() === "token") {
    let tokenLog = [];
    tokenLog = nameLog.value.split('-');
    console.log(tokenLog[1],tokenLog[2]);
    
    
  
  
  for (let i = 0; i < usersf.length; i++) {
    let user = usersf[i];
    if (user.userDate.password && user.userDate.phone) {
      if (tokenLog[2].trim().toLocaleLowerCase() === user.userDate.password.toLocaleLowerCase() &&
        tokenLog[1].trim().toLocaleLowerCase() === user.userDate.phone.toLocaleLowerCase()) {
        userLogin = true;
        nameInput = user.userDate.name;
        if (user.proImg != "") imgProUrl = user.userDate.proImg;
        else imgProUrl = "pro1.jpg";
        document.querySelector('#imgporfii').src = imgProUrl
        document.querySelector('#imgporfiii').src = imgProUrl
        postsLike = user.userDate.liked;
        uId = user.id;
        trueU = user.userDate.ture;
        users.push(user.userDate);
        token = user.userDate.token;
        localStorage.setItem("tokenStorg", token)
        console.log(localStorage.getItem("tokenStorg").split("-"))
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

  
  }
  else{
    
  
  
  for (let i = 0; i < usersf.length; i++) {
    let user = usersf[i];
    if (user.userDate.password && user.userDate.phone) {
      if (passwordLog.value.trim().toLocaleLowerCase() === user.userDate.password.toLocaleLowerCase() &&
        nameLog.value.trim().toLocaleLowerCase() === user.userDate.phone.toLocaleLowerCase()) {
        userLogin = true;
        nameInput = user.userDate.name;
        if (user.proImg != "") imgProUrl = user.userDate.proImg;
        else imgProUrl = "pro1.jpg";
        document.querySelector('#imgporfii').src = imgProUrl
        document.querySelector('#imgporfiii').src = imgProUrl
        postsLike = user.userDate.liked;
        uId = user.id;
        trueU = user.userDate.ture;
        users.push(user.userDate);
        token = user.userDate.token;
        localStorage.setItem("tokenStorg", token)
        console.log(localStorage.getItem("tokenStorg").split("-"))
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
function loginWithToken(){
  if(localStorage.getItem("tokenStorg") !== null){
    let phone = localStorage.getItem("tokenStorg").split("-")[1];
    let password = localStorage.getItem("tokenStorg").split("-")[2];
    passwordLog.value = password;
    nameLog.value = phone;
    login();
  }
}
loginWithToken()
function logOut() {
  n11();
  document.querySelector(".login").style.display = "flex";
  document.querySelector(".navbar").style.display = "none";
  clearInluts();
  localStorage.setItem("tokenStorg",null);
}