
document
  .getElementById('loginForm')
  .addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document
                    .getElementById('username')
                    .value;
    const agreed = document
                  .getElementById('agree')
                  .checked;
  
    if (!username.trim()) {
      alert('İstifadəçi adı boş ola bilməz!');
      return;
    }
  
    if (!agreed) {
      alert('Zəhmət olmasa, şərtlərlə razılaşın.');
      return;
    }

    window.location.href = 'success.html';
  }
);
