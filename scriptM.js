const card = document.getElementById('card');
const flipButtons = document.querySelectorAll('.flip-btn');
const qrCode = document.getElementById('qrCode');

// URL GitHub
const githubURL = 'https://github.com/XXXLQBXXXSTD';

// Tạo mã QR thật bằng API
function generateQRCode() {
  const qrAPIUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(githubURL)}`;
  
  const img = document.createElement('img');
  img.src = qrAPIUrl;
  img.alt = 'QR Code';
  img.style.width = '100%';
  img.style.height = '100%';
  
  // Thêm loading state
  qrCode.innerHTML = '<div style="color: #999;">Loading...</div>';
  
  img.onload = () => {
    qrCode.innerHTML = '';
    qrCode.appendChild(img);
  };
  
  img.onerror = () => {
    qrCode.innerHTML = '<div style="color: #e74c3c; font-size: 14px;">Failed to load QR</div>';
  };
}

// Xử lý lật card với touch support
flipButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    card.classList.toggle('flipped');
    
    // Haptic feedback cho mobile (nếu hỗ trợ)
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  });
});

// Ngăn zoom khi double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, false);

// Khởi tạo QR code
generateQRCode();
