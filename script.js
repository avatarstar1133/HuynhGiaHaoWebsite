// Chờ cho tài liệu (DOM) được tải xong
document.addEventListener('DOMContentLoaded', () => {

    // Lấy nút bấm và body
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    // Lấy theme đã lưu từ localStorage (nếu có)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        // Cập nhật icon nút bấm
        if (savedTheme === 'dark-theme') {
            themeToggleButton.textContent = '☀️';
        } else {
            themeToggleButton.textContent = '🌙';
        }
    }

    // Thêm sự kiện click cho nút
    themeToggleButton.addEventListener('click', () => {
        // Bật/tắt class 'dark-theme' trên body
        body.classList.toggle('dark-theme');

        // Kiểm tra xem 'dark-theme' có đang được bật hay không
        if (body.classList.contains('dark-theme')) {
            // Nếu là dark mode, đổi icon thành mặt trời và lưu vào localStorage
            themeToggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            // Nếu là light mode, đổi icon thành mặt trăng và xóa khỏi localStorage
            themeToggleButton.textContent = '🌙';
            localStorage.setItem('theme', 'light-theme'); // Hoặc removeItem
        }
    });

});