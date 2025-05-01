// Translations
const translations = {
    en: {
        myProfile: "My Profile",
        settings: "Settings",
        theme: "Theme",
        signOut: "Sign Out",
        jokes: {
            1: "Why don't eggs tell jokes? Because they'd crack each other up!",
            2: "What do you call fake spaghetti? An impasta!",
            3: "Why did the scarecrow win an award? He was outstanding in his field!",
            4: "What do you call a bear with no teeth? A gummy bear!",
            5: "Why don't scientists trust atoms? Because they make up everything!",
            6: "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
            7: "Why did the cookie go to the doctor? Because it was feeling crumbly!",
            8: "What do you call a fish wearing a crown? King salmon!",
            9: "Why did the math book look sad? Because it had too many problems!",
            10: "What do you call a sleeping bull? A bulldozer!",
            11: "Why did the bicycle fall over? Because it was two-tired!",
            12: "What do you call a snowman with a six-pack? An abdominal snowman!",
            13: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            14: "What do you call a bear with no ears? B!",
            15: "Why don't oysters donate to charity? Because they're shellfish!",
            16: "What did the janitor say when he jumped out of the closet? Supplies!",
            17: "Why did the cookie go to the nurse? Because it was feeling crumbly!",
            18: "What do you call a fake noodle? An impasta!",
            19: "Why did the gym close down? It just didn't work out!",
            20: "What do you call a pig that does karate? A pork chop!",
            21: "Why don't eggs tell jokes? They'd crack each other up!",
            22: "What do you call a bear with no teeth? A gummy bear!",
            23: "Why did the cookie go to the doctor? Because it was feeling crumbly!",
            24: "What do you call a fish wearing a crown? King salmon!",
            25: "Why did the scarecrow win an award? Because he was outstanding in his field!",
            26: "What do you call a snowman with a six-pack? An abdominal snowman!",
            27: "Why did the bicycle fall over? Because it was two-tired!",
            28: "What do you call a bear with no ears? B!",
            29: "Why don't scientists trust atoms? Because they make up everything!",
            30: "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
            31: "What do you call a pig that does karate? A pork chop!"
        }
    },
    lv: {
        myProfile: "Mans Profils",
        settings: "Iestatījumi",
        theme: "Tēma",
        signOut: "Iziet",
        jokes: {
            1: "Kāpēc olas nestāsta jokus? Jo tās saplīstu no smiekliem!",
            2: "Kā sauc viltus spageti? Par blēdīgo makaronu!",
            3: "Kāpēc biedēklis saņēma balvu? Jo viņš bija izcils savā laukā!",
            4: "Kā sauc lāci bez zobiem? Par gumijas lācīti!",
            5: "Kāpēc zinātnieki neuzticas atomiem? Jo tie visu izdomā!",
            6: "Ko teica vīnoga, kad to samina? Neko, tikai mazliet pavaidēja!",
            7: "Kāpēc cepums aizgāja pie ārsta? Jo tas jutās drupans!",
            8: "Kā sauc zivi ar kroni? Par karali lasi!",
            9: "Kāpēc matemātikas grāmata izskatījās skumja? Jo tai bija pārāk daudz problēmu!",
            10: "Kā sauc guļošu vērsi? Par buldozeru!",
            11: "Kāpēc velosipēds nokrita? Jo tas bija pārāk noguris!",
            12: "Kā sauc sniegavīru ar sešiem kubiciņiem? Par muskuļoto sniegavīru!",
            13: "Kāpēc golferis paņēma līdzi divas bikses? Gadījumam, ja viņš trāpītu bedrītē ar vienu sitienu!",
            14: "Kā sauc lāci bez ausīm? Par L!",
            15: "Kāpēc austeres neziedo labdarībai? Jo tās ir savtīgas!",
            16: "Ko teica apkopējs, kad izlēca no skapja? Pārsteigums!",
            17: "Kāpēc cepums aizgāja pie medmāsas? Jo tas jutās drupans!",
            18: "Kā sauc viltus nūdeli? Par blēdīgo makaronu!",
            19: "Kāpēc sporta zāle aizvērās? Vienkārši neizdevās!",
            20: "Kā sauc cūku, kas nodarbojas ar karatē? Par karbonādi!",
            21: "Kāpēc olas nestāsta jokus? Jo tās saplīstu no smiekliem!",
            22: "Kā sauc lāci bez zobiem? Par gumijas lācīti!",
            23: "Kāpēc cepums aizgāja pie ārsta? Jo tas jutās drupans!",
            24: "Kā sauc zivi ar kroni? Par karali lasi!",
            25: "Kāpēc biedēklis saņēma balvu? Jo viņš bija izcils savā laukā!",
            26: "Kā sauc sniegavīru ar sešiem kubiciņiem? Par muskuļoto sniegavīru!",
            27: "Kāpēc velosipēds nokrita? Jo tas bija pārāk noguris!",
            28: "Kā sauc lāci bez ausīm? Par L!",
            29: "Kāpēc zinātnieki neuzticas atomiem? Jo tie visu izdomā!",
            30: "Ko teica vīnoga, kad to samina? Neko, tikai mazliet pavaidēja!",
            31: "Kā sauc cūku, kas nodarbojas ar karatē? Par karbonādi!"
        }
    }
};

let currentLanguage = 'en';

// Function to update all text content
function updatePageLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    // Update jokes
    document.querySelectorAll('.card:not(.empty)').forEach(card => {
        const dayNumber = card.querySelector('.day-number').textContent;
        const cardBack = card.querySelector('.card-back');
        cardBack.textContent = t.jokes[dayNumber];
    });
    
    // Update current language display
    document.querySelector('.current-lang').textContent = lang.toUpperCase();
}

// Language switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
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

// Card flip functionality
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card:not(.empty)');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('flipped');
                }
            });
            card.classList.toggle('flipped');
        });
    });
});

// Initial setup
updatePageLanguage('en');
  

