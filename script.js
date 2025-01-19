
const toggleBtn = document.querySelector('.toggle-btn');
const submenu = document.querySelector('.submenu');

toggleBtn.addEventListener('click', function () {
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block'; // عرض القائمة
        toggleBtn.textContent = '×'; // تحويل الزر إلى ×
    } else {
        submenu.style.display = 'none'; // إخفاء القائمة
        toggleBtn.textContent = '+'; // إعادة الزر إلى +
    }
});
