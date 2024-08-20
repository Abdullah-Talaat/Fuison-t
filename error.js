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