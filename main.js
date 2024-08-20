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
      proUrl: imgProUrl,
      trueP: trueU,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
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
let narInpm = document.getElementById("narInpm");
async function uploadim(){
    if (nameInput && nameInput.trim() !== ""&& userImgUpload) {
      let src = "";
      
      lodingSean(true);
      let file = imgch.files[0];
      
      if (file) {
        let storageRef = storage.ref().child(`posts/${file.name}`);
        try {
          await storageRef.put(file);
          src = await storageRef.getDownloadURL();
          lodingSean(false)
          alertt(imgProUrl, "green");
        } catch (error) {
          lodingSean(false)
          alertt(`Error is: ${error}`, "red");
        }
      } else {
        lodingSean(false); // تأكد من إيقاف مؤشر التحميل في حالة عدم وجود ملف
       console.log("Image is not defined"); // استخدام تنبيه بدلاً من console.log
      }
      
      lodingSean(true)
      let now = new Date();
      let date = now.getFullYear() + " / " + (now.getMonth() + 1) + " / " + now.getDate();
    
      try {
        const docRef = await db.collection('posts').add({
      bodyPost: narInpm.value.replace(/\n/g, '<br>'),
      name: nameInput,
      likes: 0,
      date: date,
      coments: [],
      proUrl: imgProUrl,
      trueP:trueU,
      src: src,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()});
        console.log("Document written with ID: ", docRef.id);
        fetchPosts(); // تحديث المنشورات بعد إضافة منشور جديد
        clearInput();
      } catch (error) {
        alertt("Error adding document: " + error, "red");
      } finally {
        lodingSean(false);
      }
    }
    else{
      alert("chose img please")
    }
}

let sendComentBtn = document.getElementById('sendComentBtn');
sendComentBtn.onclick = function() {
  
  if (sendComent.value.trim() !== "") {
    let dateComent = new Date();
    let dateComentNow = dateComent.getFullYear() + "/" + (dateComent.getMonth() + 1) + "/" + dateComent.getDate();
    let newComent = {
      bodyComent: sendComent.value,
      nameComent: nameInput,
      datecoment: dateComentNow,
      proUrl: imgProUrl,
      trueP: trueU
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
/*

*/
function showComent() {
  let comentser = document.getElementById("comentser");
  comentser.innerHTML = "";

  if (postIndex >= 0 && posts[postIndex].coments) {
    let storedComents = posts[postIndex].coments;

    if (storedComents.length === 0) {
      comentser.innerHTML = '<p class="p-nan">لا يوجد تعليقات كون اول من يعلق</p>';
    } else {
      for (let i = 0; i < storedComents.length; i++) {
      if(storedComents[i].trueP) trueDisplay = "flex";
      else trueDisplay = "none";
        let comentHTML = `
<div class="coment1">
<div class="profile-coment">

          <img loading="lazy" src="${storedComents[i].proUrl}" >
        <p class="pro-name-com">${storedComents[i].nameComent}</p>
        <span class="material-symbols-outlined st" style="display: ${trueDisplay};">check</span>
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

let poststt = [];
function fetchPosts() {
  lodingSean(true);

  // إعادة تعيين مصفوفة المنشورات
  posts = [];
  poststt = [];
  db.collection("posts").orderBy('date').get()
    .then((querySnapshot) => {
      lodingSean(false);
      if (querySnapshot.empty) {
        console.log("No posts found");
      } else {
        querySnapshot.forEach((doc) => {
          let postData = doc.data();
          postData.id = doc.id;
          poststt.push(postData);
        });
for (let i = poststt.length - 1; i >= 0; i--) {
          posts.push(poststt[i]);
        }
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
let imgDisplay;
let trueDisplay = "flex";
function post(i){
  posts[i].src ? imgDisplay = "flex" : imgDisplay = "none";
  posts[i].trueP ? trueDisplay = "flex" : trueDisplay = "none";
  let comentsLength = posts[i].coments ? posts[i].coments.length : 0;
  let colorDelete = posts[i].name === nameInput ? "#222" : "#444";
  let deletePassword = colorDelete === "#222" ? true : false;
  return `
    <div class="nasher post">
        <div class="head-post">
          <div class="date-info">
            <p class="date">${posts[i].date}</p>
            <p class="material-symbols-outlined date-icon">calendar_month</p>
          </div>
          <div class="pro-post"onclick="uAsPro('${posts[i].name}')" >
            <p>${posts[i].name}</p>
            <span class="material-symbols-outlined st" style="display:${trueDisplay}">check</span>
            <div class="pro-ccd">
             <img load = "lazy" class="pro-cc" src="${posts[i].proUrl}" alt="">
            </div>       
        </div>
        </div>
        <div class="post-info">
          <p>${posts[i].bodyPost}</p>
           <div class="imgp">
             <img src="${posts[i].src}" alt="" style="display:${imgDisplay}">
          </div>
        </div>
<div class="actions-btns">
                        <button class="delete-btn" style="background: ${colorDelete}" 
                                onclick="deletePost('${posts[i].id}', '${deletePassword}')">
                          <p>delete</p> 
                          <span  class="material-symbols-outlined">delete</span>
                        </button>
            <button class="com-btn" onclick="com(${i})" style="background: #222">
              <p id="lnn">${comentsLength}</p>
              <span  class="material-symbols-outlined">comment</span>
            </button>
            <button onclick="likee(${i})" class="like-btn">
              <p id="lnn">${posts[i].likes}</p>
              <span  class="material-symbols-outlined">thumb_up</span>
            </button>
        </div>
      </div>
      `;
}
function showPost(posts) {
  let postn = "";
  for (let i = 0; i < posts.length; i++){
    postn += post(i);
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
  narInpm.value = "";
  imgu.style.display = "none";
}

function com(index) {
  coment.style = `transform:translateY(0%)`;
  boxComent.style = `transform:translateX(0%)`;
  postIndex = index;
  showComent();
  searchere(inputSs.value);
}

function deletePost(postId, password) {
  console.log(password)
  if(password == "true"){
      lodingSean(true);
      const docRef = db.collection('posts').doc(postId);
      docRef.delete()
          .then(() => {
            lodingSean(false);
            alert("Document successfully deleted!");
            fetchPosts();
            searchere(inputSs.value);
          })
          .catch((error) => {
            lodingSean(false);
            alertt("Error removing document: " + error, "red");
          });
  }
  else{
    alertt("sorry you can't delete post","red")
  }
}
function deletePostt(postId){
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
    searchere(inputSs.value);
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
      if (posts[i].name.trim().toLowerCase().includes(value.trim().toLowerCase()) || posts[i].bodyPost.trim().toLowerCase().includes(value.trim().toLowerCase())) {
        found = true;
        postn += post(i);
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
        if (postName.includes(value.trim().toLowerCase()) || postBody.includes(value.trim().toLowerCase())) {
          found = true;
          searchPost += post(i);
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
        if (postName.includes(value.trim().toLocaleLowerCase())) {
          foundName = true;
          searchPost += post(i);
        }
      }
      if (foundName) {
        document.getElementById("postsSsearch").innerHTML = searchPost;
      } else {
        document.getElementById("postsSsearch").innerHTML = '<p class="p-nan">لا توجد نتائج مطابقة للبحث</p>';
      }
    } else {
      for (let i = 1; i < posts.length; i++) {
        let postBody = posts[i].bodyPost ? posts[i].bodyPost.trim().toLocaleLowerCase() : "";
        if (postBody.includes(value.trim().toLocaleLowerCase())) {
          foundOpject = true;
          searchPost += post(i);
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
let searchOpened = false;
function openSearch() {
  if(!searchOpened){
    document.getElementById("seach").style = `width:178px;`;
    document.getElementById("seach").focus();
    searchOpened = true;
  }
  else{
    document.getElementById("seach").style = `width:0px;`;
    //document.getElementById("seach");
    searchOpened = false;
  }
}
let nnu1 = document.querySelector('.nnu1');
let nnu2 = document.querySelector('.nnu2');

function chn(num) {
  if(num == 1) {
    nnu1.style.display = "none";
    nnu2.style.display = "block";
  }
  else{
    nnu1.style.display = "block";
    nnu2.style.display = "none";
  }
}