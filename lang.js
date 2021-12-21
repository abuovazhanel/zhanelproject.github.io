var txt = {
    en: {
        'home': 'Home', 'ticket': 'Railway tickets', 'help': 'Help', 'sign in': 'Sign in', 'log in': 'Log in', 'best': 'Book the best tickets. Enjoy your travel.',
        'qwer': 'Наши города', 'nur': 'NUR-SULTAN', 'alm': 'ALMATY', 'akt': 'AKTOBE', 'hom': 'Home', 'ticke': 'Railway tickets', 'hel': 'Help', 'sig in': 'Sign in', 'lo in': 'Log in',
      

    }
    , ru: {
        'home': 'Главная', 'ticket': 'ЖД билеты', 'help': 'Помощь', 'sign in': 'Войти', 'log in': 'Регистрация', 'best': 'Забронируйте лучшие билеты. Приятного путешествия.',
        'qwer': 'Наши города', 'nur': 'НУР-СУЛТАН', 'alm': 'АЛМАТЫ', 'akt': 'АКТОБЕ', 'hom': 'Главная', 'ticke': 'ЖД билеты', 'hel': 'Помощь', 'sig in': 'Войти', 'lo in': 'Регистрация',

        
    }
};
document.getElementById('e-lang-en').addEventListener('click', setLang.bind(null, 'en'));
document.getElementById('e-lang-ru').addEventListener('click', setLang.bind(null, 'ru'));

function setLang(lang) {
    var p;
    if (!txt.hasOwnProperty(lang)) return;
    if (window.hasOwnProperty('localStorage'))
        window.localStorage.setItem('lang', lang);
    for (p in txt[lang]) {
        document.getElementById(p).innerText = txt[lang][p];
    }
}

var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);