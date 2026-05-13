// ============================================
// KONFIGURASI APP
// ============================================

// TODO: Ganti URL ini dengan Web App URL dari Google Apps Script Anda nanti
const GOOGLE_APP_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

// ============================================
// INISIALISASI
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi AOS Animation
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });

    // Inisialisasi Dark Mode
    initDarkMode();

    // Bagian rendering Daftar Siswa telah dihapus
});

// ============================================
// DARK MODE LOGIC
// ============================================
function initDarkMode() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Cek preferensi awal di localStorage atau OS settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function() {
        // Toggle icons
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // Jika set ke dark
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
}

// ============================================
// FITUR DAFTAR SISWA TELAH DIHAPUS
// ============================================
