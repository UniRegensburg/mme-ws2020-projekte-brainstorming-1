import { Instance } from "./client.js";
import Config from "./config.js";

//function to close modal, when task is done
function closeModal() {
  document.querySelector(".bg-modal").style.display = "none";
}

//function to open modal, when task is done
function openModal() {
  document.querySelector(".bg-modal").style.display = "flex";
}

//create room, when create button is clicked
document.getElementById("modal-create").addEventListener("click",
  function() {

    Instance.create("DrawingRoom").then(room => {
      console.log(room.sessionId, "joined new", room.name, " ", room.id);
      Config.INVITECODE.innerText = room.id;
      document.dispatchEvent(new CustomEvent(
        "RoomConnectEvent", { detail: room }));

      closeModal();
    }).catch(e => {
      console.log("JOIN ERROR", e);
    });
  }
);

//joind room, when join button is clicked and code is paste
document.getElementById("modal-join").addEventListener("click",
  function() {
    let roomID = document.getElementById("code").value;

    console.log("connecting with room " + roomID);
    Instance.joinById(roomID).then(room => {
      console.log(room.sessionId, "joined", room.name, " ", room.id);
      Config.INVITECODE.innerText = room.id;
      document.dispatchEvent(new CustomEvent(
        "RoomConnectEvent", { detail: room }));

      closeModal();
    }).catch(e => {
      console.log("JOIN ERROR", e);
    });
  }
);

//function to open the inviteModal
function openInviteModal() {
  document.querySelector(".modal").style.display = "flex";

}

//function to close the iviteModal
function closeInviteModal() {
  document.querySelector(".modal").style.display = "none";

}

document.getElementById("invite-modal").addEventListener("click",
  closeInviteModal);

document.getElementById("user").addEventListener("click", openInviteModal);

openModal();