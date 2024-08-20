let postsPro ;
function profile() {
  console.log(usersf)
  for (let i in usersf) {
    let user = usersf[i].userDate;
    if (user.name === nameInput) {
     document.getElementById("imgPU").src = user.proImg;
     document.getElementById("namePU").innerText = user.name;
     document.getElementById("followersPU").innerText = user.followers;
    }
  }
  disNav(document.querySelector('.profiledivp'),book,friends,videos);
  home.style.display = "none";
  document.querySelector('.profiledivp').style.display = "flex"
  document.querySelector('.profileasuer').style.display = "none";
  document.querySelector('#chatsF').style.display = "none";
  document.getElementById("chatsM").style.display = "none";
      let poststg = "";
for (let i = 0; i < posts.length; i++){
        if(posts[i].name == nameInput){
    poststg += post(i);
    }
  }
let proopost = document.getElementById("postsPro")

  if(proopost){
        proopost.innerHTML = poststg;
        console.log(true)
  }
  else console.log("nn");
}
let followBtn = document.getElementById('follow');
function followed(t) {
  if (t) {
    followBtn.innerHtml = 'follow';
    followBtn.style.background = "#2977F6";
  }
  else {
    followBtn.innerHtml = 'followed';
    followBtn.style.background = "#B4B4BA";
  }
}
let nameAuS = '';

function uAsPro(name) {
  let nameAuS = name;
  
  // عرض أو إخفاء العناصر
  disNav(document.querySelector('.profileasuer'), book, friends, videos);
  document.querySelector('.profiledivp').style.display = "none";
  home.style.display = "none";
  document.querySelector('.profileasuer').style.display = "flex";
  document.querySelector('#chatsF').style.display = "none";
  document.getElementById("chatsM").style.display = "none";
  // التحقق من وجود usersf وكونه مصفوفة
  if (!Array.isArray(usersf)) {
    console.error("usersf is not defined or is not an array.");
    return;
  }

  for (let i = 0; i < usersf.length; i++) {
    let user = usersf[i].userDate;
    if (user.name === name && user.name === nameInput) {
      document.getElementById("imgSAU").src = user.proImg;
      document.getElementById("nameSAU").innerText = user.name;
      followBtn.innerHTML = 'get token';
      followBtn.onclick = function () {
        getToken();
      };

      // تحديث زر المتابعة
      let isFollowing = false;
      for (let j = 0; j < usersf.length; j++) {
        if (usersf[j].userDate.name === nameInput) {
          isFollowing = usersf[j].userDate.followed.includes(name);
          followBtn.style.background = isFollowing ? "#B4B4BA" : "#2977F6";
        }
      }
    } else if (user.name === name) {
      document.getElementById("imgSAU").src = user.proImg;
      document.getElementById("nameSAU").innerText = user.name;
      document.getElementById("followers").innerText = user.followers;
      followBtn.innerHTML = 'follow';
      followBtn.onclick = function () {
        follow(user.name);
        uAsPro(name);
      };
      break;
    }
  }

  let postsContainer = document.getElementById("postsProU");
  let postsHTML = "";

  // التحقق من وجود posts وكونه مصفوفة
  if (!Array.isArray(posts)) {
    console.error("posts is not defined or is not an array.");
    return;
  }

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].name === name) {
      postsHTML += post(i);
    }
  }

  if (postsContainer) {
    postsContainer.innerHTML = postsHTML;
    console.log("Profile and posts updated successfully.");
  } else {
    console.error("postsProU element not found.");
  }
}

async function follow(name) {
  lodingSean(true);
  let userFound = false;

  for (let i in usersf) {
    let user = usersf[i].userDate;

    if (user.name === name) {
      userFound = true;

      for (let j in usersf) {
        let user1 = usersf[j].userDate;
        console.log(user1.name == nameInput)
        if(user1.name == nameInput){
          lodingSean(false);
          if (user1.followed.includes(name)) {
                    // إذا كان المستخدم متابعاً بالفعل
                    let foll = --user.followers;
                    lodingSean(true);
                    try {
                      const userRef = db.collection('users').doc(usersf[i].id);
                      await userRef.update({ followers: foll });
          
                      user1.followed = removeElement(user1.followed, name);
          
                      const user1Ref = db.collection('users').doc(usersf[j].id);
                      await user1Ref.update({ followed: user1.followed });
          
                      followed(true);
                    } catch (error) {
                      alertt(`Error: ${error}`, "red");
                      console.log(error)
                    } finally {
                      lodingSean(false);
                    }
            return;
          }
          else {
                    // إذا كان المستخدم غير متابع
                    let foll = ++user.followers;
                    lodingSean(true)
                    try {
                      const userRef = db.collection('users').doc(usersf[i].id);
                      await userRef.update({ followers: foll });
          
                      user1.followed.push(name);
          
                      const user1Ref = db.collection('users').doc(usersf[j].id);
                      await user1Ref.update({ followed: user1.followed });
          
                      followed(false);
                    } catch (error) {
                      alertt(`Error: ${error}`, "red");
                      console.log(error)
                    } finally {
                      lodingSean(false);
                    }
                    return
                  }
        } 
      }
    }
  }
}
function postsImport() {
  let postsIm = "";

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].name === "Fusion") {
      let imgDisplay = posts[i].src ? "flex" : "none";
      let trueDisplay = posts[i].trueP ? "flex" : "none";
      let comentsLength = posts[i].coments ? posts[i].coments.length : 0;

      postsIm += post(i);
    }
  }

  document.getElementById("postsImport").innerHTML = postsIm;
}