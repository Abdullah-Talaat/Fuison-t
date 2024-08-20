let chatsFolloes = "";
let folllkjhh = [];
let userDatal = [];
let userFollowesD = [];
function getAllChats() {
  usersf.forEach(userObj => {
   let userData = userObj.userDate;
    if (userData.name === nameInput) {
      userData.followed.forEach(followedUser => {
        userFollowesD.push(followedUser);
        usersf.forEach(potentialChatUser => {
          let potentialUserData = potentialChatUser.userDate;
          if (potentialUserData.name === followedUser) {
            chatsFolloes += `
              <div onclick="showChat('${potentialUserData.name}','${potentialUserData.proImg}')" style="font-size: 20px" class="friend-foll">
                ${potentialUserData.name}
                <div class="box-pro-im" style="heght: 50%;">
                  <img loading="lazy" src="${potentialUserData.proImg}" alt="">
                </div>        
              </div>
            `;
          }
        });
      });
    }
  });

  document.getElementById("friendsFolloes").innerHTML = chatsFolloes;
  chatsFolloes = "";
  
  disNav(document.querySelector('#chatsF'), book, friends, videos);
  document.querySelector('.profiledivp').style.display = "none";
  document.querySelector('#chatsF').style.display = "flex";
  home.style.display = "none";
  document.getElementById("chatsM").style.display = "none";
}

function searchChats() {
  let postSerchCon = "";
  document.getElementById("friendsFolloes").innerHTML = "";
  let seachChatsValue = document.getElementById("inpSF").value.trim().toLowerCase();

  for (let i in userFollowesD) {
    let follower = userFollowesD[i].trim().toLowerCase();

    if (follower.includes(seachChatsValue)) {
      for (let f in usersf) {
        if (userFollowesD[i] === usersf[f].userDate.name) {
          let user = usersf[f].userDate;
          postSerchCon += `
              <div onclick="showChat('${user.name}')" style="font-size: 20px" class="friend-foll">
                            ${user.name}
                            <div class="box-pro-im" style="heght: 50%;">
                              <img loading="lazy" src="${user.proImg}" alt="">
                            </div>        
                          </div>
          `;
        }
      }
    }
  }
  if(postSerchCon) document.getElementById("friendsFolloes").innerHTML = postSerchCon;
  else document.getElementById("friendsFolloes").innerHTML = '<p class="p-nan">لا توجد نتائج مطابقة للبحث</p>';
}

function sendMsg(name, body, imgSrc, key) {
  lodingSean(true);
  let dateComent = new Date();
  let dateComentNow = dateComent.getFullYear() + "/" + (dateComent.getMonth() + 1) + "/" + dateComent.getDate();
  db.collection('chats').add({
    name: name,
    key: key,
    imgSrc: imgSrc,
    body: body,
    date: dateComentNow,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    getChatByID(key);
    lodingSean(false);
  })
  .catch((error) => {
    lodingSean(false);
    alertt(`error is: ${error}`, "red")
  })
}

let chatData = [];
function getChatByID(key) {
  lodingSean(true);
  db.collection('chats').orderBy("timestamp", "asc").get()
       .then((querySnapshot) => {
         if (querySnapshot.empty) {
           lodingSean(false);
           console.log("No chats found");
         } else {
           let allChats = [];
           querySnapshot.forEach((doc) => {
            chatData = doc.data();  
             allChats.push({
               id: doc.id,
               data: chatData
             });
           });
           lodingSean(false);
           showChatById(allChats, key);
         }
       })
       .catch((error) => {
         console.error("Error getting chats: ", error);
         lodingSean(false);
       });
}

function showChatById(chats, key) {
    let seacrtKey = key.split('_');
    let response = "";
    for (let i = 0; i < chats.length; i++) {
      let chat = chats[i].data;
      let chatKey = chat.key.split('_');
  
      if ((seacrtKey[0] === chatKey[0] || seacrtKey[0] === chatKey[1]) &&
        (seacrtKey[1] === chatKey[0] || seacrtKey[1] === chatKey[1])
      ) {
        if (chat.name === nameInput) {
          response += `
            <div class="you" style="justify-content: right;">
              <div class="msg-chat" style="border-radius: 20px 0 20px  20px;align-items: end;">
                <p id="nameChat">${chat.name}</p>
                <p>${chat.body}</p>
              </div>
              <div class="box-pro-im" style="heght: 20%;">
                <img loading="lazy" src="${chat.imgSrc}" alt="">
              </div>
            </div>
                `;
        } else {
          response += `
            <div class="you" style="justify-content:left ;">
              <div class="box-pro-im" style="heght: 20%;">
                <img loading="lazy" src="${chat.imgSrc}" alt="">
              </div>
              <div class="msg-chat" style="border-radius:0 20px 20px 20px;align-items: start;">
                <p id="nameChat">${chat.name}</p>
                <p>${chat.body}</p>
              </div>
            </div>
          `;
        }
      }
    }
    
    if(response === ""){
      document.getElementById("chatsD").innerHTML = '<p class="p-nan"style="color:#f0f0f0; margin-top-:30px;">لا توجد رسائل</p>';
    }
    
    document.getElementById("chatsD").innerHTML = response;
    document.getElementById("chatsD").scrollTo({
      top: document.getElementById("chatsD").scrollHeight,
      behavior: "smooth"
    });
}

function showChat(name, img) {
  let key = `${name}_${nameInput}_seacrtKey/0727498je8eo`;
  getChatByID(key);
  
  let btnSend = document.getElementById("btnSend");
  let inpsend = document.getElementById("inpsend");
  
  btnSend.onclick = function () {
    if(inpsend.value.trim != ""){
      sendMsg(nameInput, inpsend.value.replace(/\n/g, '<br>'), imgProUrl, key);
      inpsend.value = "";
    } else alertt("enter your massage", 'red');
  }
  
  disNav(document.querySelector('#chatsF'), book, friends, videos);
  document.querySelector('.profiledivp').style.display = "none";
  document.querySelector('#chatsF').style.display = "none";
  home.style.display = "none";
  document.getElementById("chatsM").style.display = "flex";

  document.querySelector('.ch-img').src = img;
  document.querySelector('.ch-name').innerHTML = name;
}