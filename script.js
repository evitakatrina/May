// Translations
const translations = {
    en: {
        myProfile: "My Profile",
        settings: "Settings",
        theme: "Theme",
        signOut: "Sign Out"
    },
    lv: {
        myProfile: "Mans Profils",
        settings: "Iestatījumi",
        theme: "Tēma",
        signOut: "Iziet"
    }
};

let currentLanguage = 'en';

// Function to update all text content
function updatePageLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    

    // Update dropdown menu items
    document.querySelectorAll('.dropdown-item .item-text').forEach(item => {
        switch(item.parentElement.querySelector('.item-icon').textContent) {
            case '👤':
                item.textContent = t.myProfile;
                break;
            case '⚙️':
                item.textContent = t.settings;
                break;
            case '🎨':
                item.textContent = t.theme;
                break;
            case '🚪':
                item.textContent = t.signOut;
                break;
        }
    });
    
    // Update time display
    updateTime();
}

// Language switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLang = document.querySelector('.current-lang');
    
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            currentLang.textContent = lang.toUpperCase();
            updatePageLanguage(lang);
        });
    });
});

// Profile dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    profileIcon.addEventListener('click', (e) => {
        const dropdown = profileIcon.querySelector('.profile-dropdown');
        dropdown.style.opacity = dropdown.style.opacity === '1' ? '0' : '1';
        dropdown.style.visibility = dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
        dropdown.style.transform = dropdown.style.transform === 'translateY(0px)' ? 'translateY(-10px)' : 'translateY(0px)';
        e.stopPropagation();
    });

    document.addEventListener('click', () => {
        const dropdown = profileIcon.querySelector('.profile-dropdown');
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('logout')) {
                console.log('Logging out...');
            } else {
                console.log('Clicked:', item.textContent.trim());
            }
        });
    });
});

// Time update functionality
function updateTime() {
    const timeElement = document.getElementById('time');
    
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Europe/Helsinki',
    };
    const formattedTime = new Intl.DateTimeFormat(currentLanguage === 'lv' ? 'lv-LV' : 'en-GB', options).format(now);
    
    timeElement.textContent = formattedTime;
}

setInterval(updateTime, 60000);

// Theme switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const startColor = option.style.getPropertyValue('--gradient-start');
            const endColor = option.style.getPropertyValue('--gradient-end');
            
            document.documentElement.style.setProperty('--gradient-start', startColor);
            document.documentElement.style.setProperty('--gradient-end', endColor);
            
            // Save theme preference
            localStorage.setItem('theme-start', startColor);
            localStorage.setItem('theme-end', endColor);
        });
    });
    
    // Load saved theme if exists
    const savedStartColor = localStorage.getItem('theme-start');
    const savedEndColor = localStorage.getItem('theme-end');
    if (savedStartColor && savedEndColor) {
        document.documentElement.style.setProperty('--gradient-start', savedStartColor);
        document.documentElement.style.setProperty('--gradient-end', savedEndColor);
    }
});

// Initial setup
updatePageLanguage('en');
  

