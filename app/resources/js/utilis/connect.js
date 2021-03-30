import { Instance } from "./utilis/client.js"

const inviteCode = document.getElementById('inviteCode');

function closeModal() {
  document.querySelector('.bg-modal').style.display = 'none';
}

function openModal() {
  document.querySelector('.bg-modal').style.display = 'flex';
}

//document.getElementById('modal-new').addEventListener('click', openModal);

//document.getElementById('close').addEventListener('click', closeModal);

document.getElementById('modal-create').addEventListener('click',
  function() {

    Instance.create("DrawingRoom").then(room => {
      console.log(room.sessionId, "joined new", room.name, " ", room.id);
      inviteCode.innerText = room.id;
      document.dispatchEvent(new CustomEvent(
        "RoomConnectEvent", { detail: room }));

      closeModal();
    }).catch(e => {
      console.log("JOIN ERROR", e);
    });
  }
);

document.getElementById('modal-join').addEventListener('click',
  function() {
    let roomID = document.getElementById("code").value;

    console.log("connecting with room " + roomID);
    Instance.joinById(roomID).then(room => {
      console.log(room.sessionId, "joined", room.name, " ", room.id);

      document.dispatchEvent(new CustomEvent(
        "RoomConnectEvent", { detail: room }));

      closeModal();
    }).catch(e => {
      console.log("JOIN ERROR", e);
    });
  }
);


function openInviteModal() {
  document.querySelector('.modal').style.display = 'flex';

}

function closeInviteModal() {
  document.querySelector('.modal').style.display = 'none';
}

document.getElementById('user').addEventListener('click', openInviteModal);




openModal();