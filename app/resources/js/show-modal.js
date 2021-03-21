import {Instance} from "./utilis/Client.js"

document.getElementById('modal-new').addEventListener('click',
  function() {
    document.querySelector('.bg-modal').style.display = 'flex';
  });

document.getElementById('close').addEventListener('click',
  function() {
    document.querySelector('.bg-modal').style.display = 'none';

  });
document.getElementById('modal-create').addEventListener('click',
  function() {
    Instance.sendMessage("greeting", "hello");
  }
);