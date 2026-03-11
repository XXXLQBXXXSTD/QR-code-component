const card = document.getElementById('card');
const flipButtons = document.querySelectorAll('.flip-btn');
const qrCode = document.getElementById('qrCode');

// URL GitHub của bạn
const githubURL = 'https://github.com/XXXLQBXXXSTD';

// Tạo mã QR thật bằng API
function generateQRCode() {
  // Sử dụng API miễn phí từ QR Server
  const qrAPIUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(githubURL)}`;
  
  // Tạo thẻ img để hiển thị QR code
  const img = document.createElement('img');
  img.src = qrAPIUrl;
  img.alt = 'QR Code';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.borderRadius = '10px';
  
  qrCode.appendChild(img);
}

// Xử lý lật card
flipButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Khởi tạo QR code khi trang load
generateQRCode();
