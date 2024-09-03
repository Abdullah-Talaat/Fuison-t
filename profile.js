let usersfP = [];
function fechUsers() {
  lodingSean(true);

  // إعادة تعيين مصفوفة المنشورات


  const collectionRef = db.collection("users");

  collectionRef.onSnapshot((querySnapshot) => {
    usersfP = [];
    querySnapshot.forEach((doc) => {
      
      
      usersfP.push({
        userDate: doc.data(),
        id: doc.id
      });
      
    });
});
}
fechUsers();

let postsPro ;
function profile() {
  console.log(usersfP)
  for (let i in usersfP) {
    let user = usersfP[i].userDate;
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
  let newPosts = posts.filter(post => post.name === nameInput);
  
  showPost(newPosts, "postsPro");
  
  newPosts = [];
}
let followBtn = document.getElementById('follow');

let nameAuS = '';

function uAsPro(name) {
  console.log(name); // Optional: Log the name for debugging

  // Show/hide elements based on name
  document.querySelector('.profileasuer').style.display = name ? "flex" : "none";
  document.querySelector('.profiledivp').style.display = name ? "none" : "flex";
  home.style.display = name ? "none" : "flex";
  document.querySelector('#chatsF').style.display = "none";
  document.getElementById("chatsM").style.display = "none";
  
  let newPosts = posts.filter(post => post.name === name);
  
  // تحقق مما إذا كانت المصفوفة newPosts تحتوي على العناصر الصحيحة
  console.log(newPosts);
  
  showPost(newPosts, "postsProU");
  
  newPosts = [];
  // Check if usersfP is defined and an array
  if (!Array.isArray(usersfP)) {
    console.error("usersfP is not defined or is not an array.");
    return;
  }
  
  let user;
   
   for (let index in usersfP) {
     if(usersfP[index].userDate.name === name) {
       console.log(usersfP[index])
       user = usersfP[index];
     }
   }
    document.getElementById("imgSAU").src = user.userDate.proImg;
    document.getElementById("nameSAU").innerText = user.userDate.name;
    document.getElementById("followers").innerText = user.userDate.followers;

    updateFollowButton(user.userDate.name); // Call separate function for follow button handlin
}

function updateFollowButton(name) {
  let userIndex = 0;
  for (let i in usersfP) {
    if (usersfP[i].userDate.name === nameInput) {
      userIndex = i;
    }
  }
  
  let user;
  for (let i2 in usersfP) {
    if (usersfP[i2].userDate.name === name) {
      user = usersfP[i2];
    }
  }
  if (userIndex !== -1) {
    const followedList = usersfP[userIndex].userDate.followed;
    const isFollowing = followedList.includes(user.userDate.name);

    followBtn.style.background = isFollowing ? "#B4B4BA" : "#2977F6";
    followBtn.innerHTML = isFollowing ? "unfollow" : "follow";

    followBtn.onclick = function() {
      follow(name); // Call follow function for handling follow logic
    };
  }
}

async function follow(name) {
  lodingSean(true);

  let mainU;

  for (let iU in usersfP) {
    if (usersfP[iU].userDate.name === nameInput) {
      mainU = usersfP[iU];
    }
  }

  let clickU;

  for (let iC in usersfP) {
    if (usersfP[iC].userDate.name === name) {
      clickU = usersfP[iC];
    }
  }

  function removeElement(array, element) {
    return array.filter(e => e !== element);
  }

  if (mainU.userDate.followed.includes(name)) {
    try {
      // إنقاص عدد المتابعين
      let newFollowers = clickU.userDate.followers - 1;
      let newFollowed = removeElement(mainU.userDate.followed, name);

      // تحديث في قاعدة البيانات
      const userRefU = db.collection('users').doc(clickU.id);
      await userRefU.update({ followers: newFollowers });

      const userRefM = db.collection('users').doc(mainU.id);
      await userRefM.update({ followed: newFollowed });

      lodingSean(false);
      updateFollowButton(name)
    } catch (e) {
      lodingSean(false);
      alert(e, 'red');
    }
  } else {
    try {
      // زيادة عدد المتابعين
      let newFollowers = clickU.userDate.followers + 1;
      let newFollowed = [...mainU.userDate.followed, name]; // دمج الاسم الجديد مع المتابعين

      // تحديث في قاعدة البيانات
      const userRefU = db.collection('users').doc(clickU.id);
      await userRefU.update({ followers: newFollowers });

      const userRefM = db.collection('users').doc(mainU.id);
      await userRefM.update({ followed: newFollowed });

      lodingSean(false);
      updateFollowButton(name)
    } catch (e) {
      lodingSean(false);
      alert(e, 'red');
    }
  }

  
}
// Improved 'follow' function already provided in the previous response

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