let lodingScreanLet = document.querySelector('#lA');
function lodingSean(show) {
  if (show && lodingScreanLet) {
    lodingScreanLet.style.display = "flex";
  } else if (!show && lodingScreanLet) {
    lodingScreanLet.style.display = "none";
  }
}
let p = prompt('كلمة السر')
let db;
if ( p != "__userID-p/adimen") {
  document.querySelector('.not-adime').style.display = 'flex';
  document.querySelector('.users').style.display = 'none';
}
else {
  document.querySelector('.not-adime').style.display = 'none';
  document.querySelector('.users').style.display = 'block';
  alert("hello Abdullah in users adime");
  
  const firebaseConfig = {
  apiKey: "AIzaSyC2oLuDwObmTkwi3wXRu3qTi9IfkLxMsjg",
  authDomain: "fuison.firebaseapp.com",
  projectId: "fuison",
  storageBucket: "fuison.appspot.com",
  messagingSenderId: "272997929295",
  appId: "1:272997929295:web:bec659cdb8efa26192f53a",
  measurementId: "G-6030NS4W6P"
};

firebase.initializeApp(firebaseConfig);
db = firebase.firestore();

}

async function showUsers() {
  let users = [];
  lodingSean(true);
  users = []; // تنظيف مصفوفة المستخدمين
  try {
    let querySnapshot = await db.collection('users').get();
    lodingSean(false);
    if (querySnapshot.empty) {
      console.log("No users found");
    } else {
      querySnapshot.forEach((doc) => {
        let userDate = doc.data();
        users.push({
          userDate: userDate,
          id: doc.id
        });
      });
    }
  } catch (error) {
    lodingSean(false);
    alert(`error is: ${error}`);
    return;
  }

  let usersD = "";
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    usersD += `
      <div class="user">
        <div class="box-img">
          <img src="${user.userDate.proImg}" alt="">
        </div>
        <span>${user.userDate.name}</span>
        <span>${user.userDate.phone}</span>
        <span>${user.id}</span>
        <span>${user.userDate.password}</span>
        <button id="true" onclick="trueue('${user.id}')" class="material-symbols-outlined">check</button>
        <button id="delete" class="material-symbols-outlined" onclick="deleteUser('${user.id}')">delete</button>
      </div>
    `;
  }
  document.querySelector('.users').innerHTML = usersD;
}

async function deleteUser(id) {
  console.log("Deleting user:", id);
  lodingSean(true);

  try {
    const docRef = db.collection('users').doc(id);
    await docRef.delete();
    lodingSean(false);
    alert("Document successfully deleted!");
    showUsers();
  } catch (error) {
    lodingSean(false);
    alert("Error removing document: " + error);
    return;
  }
}


async function trueue(id) {
  lodingSean(true); // إضافة تحميل الشاشة في البداية
  try {
    const docRef = db.collection('users').doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      const userDate = doc.data();
      const userName = userDate.name; // اسم المستخدم

      if (!userDate.ture) {
        await docRef.update({ ture: true });

        const postsQuery = db.collection('posts').where('name', '==', userName);
        const postsSnapshot = await postsQuery.get();
        postsSnapshot.forEach(async (postDoc) => {
          await postDoc.ref.update({ trueP: true });
        });

        alert("Document successfully updated!");
      } else {
        await docRef.update({ ture: false });

        const postsQuery = db.collection('posts').where('name', '==', userName);
        const postsSnapshot = await postsQuery.get();
        postsSnapshot.forEach(async (postDoc) => {
          await postDoc.ref.update({ trueP: false });
        });

        alert("Document successfully updated!");
      }
    } else {
      alert("No such document!");
    }
    showUsers();
  } catch (error) {
    alert("Error updating document: " + error);
  } finally {
    lodingSean(false); // تأكد من إيقاف تحميل الشاشة بعد العملية
  }
}

showUsers();