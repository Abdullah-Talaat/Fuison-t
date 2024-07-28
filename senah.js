let senah = document.querySelector('.senah')
function senahFunction() {
  if (!senahMood) {
    senah.style.display = "none";
  }
  else{
    senah.style.display = "flex";
  }
}
 

senahMood = false;
senahFunction();