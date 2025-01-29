// Theme switcher
const darkModeIcon = document.getElementById('theme-btn');
console.log(darkModeIcon);

// Set the starting theme
function setInitialTheme() {
    let prefferedTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Check local storage for theme
    const localTheme = localStorage.getItem('theme');

    if (localTheme) {
        prefferedTheme = localTheme
    }

    // Set theme
    document.documentElement.setAttribute('data-theme', prefferedTheme);

    // Update icon
    if (prefferedTheme === 'dark') {
        darkModeIcon.classList.add('fa-sun');
    } else {
        darkModeIcon.classList.add('fa-moon');
    }
}

setInitialTheme();

darkModeIcon.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    darkModeIcon.classList.toggle('fa-moon');
    darkModeIcon.classList.toggle('fa-sun');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
});

// --- 

const navLauncher = document.getElementById('nav-btn');

navLauncher.addEventListener('click', () => {
    const aside = document.querySelector('aside');
    const content = document.getElementById('content');
    aside.classList.toggle('aside-active');
    content.classList.toggle('content-active');
    navLauncher.classList.toggle('fa-bars');
    navLauncher.classList.toggle('fa-times');
});

// ---

const time = document.querySelector('time');
// Set time text to current date and datetime attribute to current date
time.textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
time.setAttribute('datetime', new Date().toISOString().split('T')[0]);

// ---

const dialog = document.querySelector('dialog');
const dialogLauncher = document.getElementById('dialog-btn');
const dialogCloser = document.getElementById('dialog-close');

dialogLauncher.addEventListener('click', () => {
    dialog.showModal();
});

dialogCloser.addEventListener('click', () => {
    dialog.close();
});