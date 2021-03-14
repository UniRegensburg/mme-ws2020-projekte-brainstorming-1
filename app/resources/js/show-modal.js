document.getElementById('modal-new').addEventListener('click',
  function() {
    document.querySelector('.bg-modal').style.display = 'flex';
  });

document.getElementById('close').addEventListener('click',
  function() {
    document.querySelector('.bg-modal').style.display = 'none';

  });