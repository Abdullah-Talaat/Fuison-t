let xDatep ;
let xReq = new XMLHttpRequest();
xReq.open("GET", "to-plasten.json", true);
xReq.onload = function() {
  if (xReq.status === 200) {
     xDatep = JSON.parse(xReq.responseText);
    
  } else {
    console.error("Error", xReq.status, xReq.statusText);
  }
};
xReq.onerror = function() {
  console.error("Request failed");
};

xReq.send();
function toPlasten() {
  n33()
  let numForPlasten = prompt("اكتب اسم المنتج الذي تريد الاستفسار عنه").trim();

  
  if (!numForPlasten) {
    alertt("الرجاء إدخال قيمة صحيحة.","red");
    return;
  }
  console.table(xDatep);

  let found = false;
  for (let i = 0; i < xDatep.length; i++) {
    
    if (numForPlasten.toLocaleLowerCase() === xDatep[i]) {
      alertt("🇮🇱🇮🇱 مقاطعه "+ numForPlasten.trim() + " 🇮🇱🇮🇱", "red");
      found = true;
      break; // توقف البحث إذا تم العثور على العنصر
    }
  }
  if (!found) { 
    alertt("🇵🇸🇵🇸  ليس من قائمة المقاطعه " + numForPlasten.trim() + " 🇵🇸🇵🇸", "#31FF4B");
    }
}
function toPlastent() {
  let inpSI = document.getElementById("inpSI").value.trim().toLowerCase();
  let monm = document.querySelector(".monm");
  let monmP = document.querySelector(".momnm-p");

  if (inpSI === "") {
    monm.style.color = "red";
    monmP.innerHTML = "الرجاء ادخال قيمة";
  } else {
    let found = false;
    for (let i = 0; i < xDatep.length; i++) {
      if (inpSI === xDatep[i]) {
        monm.style.color = "red";
        monmP.innerHTML = "مقاطع";
        found = true;
        break; // توقف البحث إذا تم العثور على العنصر
      }
    }
    if (!found) {
      monm.style.color = "#31FF4B"; // تأكد من استخدام قيمة اللون الصحيحة
      monmP.innerHTML = "المنتج ليس في قائمة المقاطعة";
    }
  }
}