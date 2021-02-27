
var btnEnter = document.querySelector('.btn_enter');
var btnRegistration = document.querySelector('.btn_registration');

// ________Вход_____________
btnEnter.addEventListener('click', btnter);

function btnter() {
    var d = document.createElement('div');
    var modWindowEnter = document.createElement('div');
    var modWindowName = document.createElement('h2');
    var loginText = document.createElement('h3');
    var inputLogin = document.createElement('input');
    var passwordText = document.createElement('h3');
    var inputPassword = document.createElement('input');
    var inputBtn = document.createElement('div');
    var inputClose = document.createElement('div');

    // Окно
    d.className='div_registration_enter_js';
    modWindowEnter.className='blanck_registration';
    // Название
    modWindowName.innerHTML= 'Вход';
    modWindowName.className='valeu_html';
    // Логин
    loginText.innerHTML= 'Логин';
    loginText.className='login_text';
    inputLogin.className='inputLogin';
    // Пароль
    passwordText.innerHTML= 'Пароль';
    passwordText.className='password_text';
    inputPassword.className='input_password';
    inputPassword.type = 'password';
    // Отправить
    inputBtn.innerHTML='Войти';
    inputBtn.className='input_Btn';
    inputBtn.addEventListener('click', btnEnterForm);
    function btnEnterForm(){
        d.style.display='none';
        modWindowEnter.style.display='none';
        modWindowName.style.display='none';
        loginText.style.display='none';
        inputLogin.style.display='none';
        passwordText.style.display='none';
        inputPassword.style.display='none';
        inputBtn.style.display='none';
        inputClose.style.display='none';
    }
    // Закрыть
    inputClose.innerHTML='&#215;';
    inputClose.className='input_close';
    inputClose.addEventListener('click', btnCloseForm);
    function btnCloseForm(){
        d.style.display='none';
        modWindowEnter.style.display='none';
        modWindowName.style.display='none';
        loginText.style.display='none';
        inputLogin.style.display='none';
        passwordText.style.display='none';
        inputPassword.style.display='none';
        inputBtn.style.display='none';
        inputClose.style.display='none';
    }
    document.body.appendChild(d);
    document.body.appendChild(modWindowEnter);
    document.body.appendChild(modWindowName);
    document.body.appendChild(loginText);
    document.body.appendChild(inputLogin);
    document.body.appendChild(passwordText);
    document.body.appendChild(inputPassword);
    document.body.appendChild(inputBtn);
    document.body.appendChild(inputClose);
}



// ______Регистрация___________________
btnRegistration.addEventListener('click', btnreg);

function btnreg() {
    var d = document.createElement('div');
    var modWindowEnter = document.createElement('div');
    var modWindowName = document.createElement('h2');
    var loginText = document.createElement('h3');
    var inputLogin = document.createElement('input');
    var passwordText = document.createElement('h3');
    var inputPassword = document.createElement('input');
    var inputBtn = document.createElement('div');
    var inputClose = document.createElement('div');

    // Окно
    d.className='div_registration_enter_js';
    modWindowEnter.className='blanck_registration';
    // Название
    modWindowName.innerHTML= 'Регистрация';
    modWindowName.style.fontSize = '24px';
    modWindowName.style.marginLeft = '-100px';
    modWindowName.className='valeu_html';
    // Логин
    loginText.innerHTML= 'Логин';
    loginText.className='login_text';
    inputLogin.className='inputLogin';
    // Пароль
    passwordText.innerHTML= 'Пароль';
    passwordText.className='password_text';
    inputPassword.className='input_password';
    inputPassword.type = 'password';
    // Отправить
    inputBtn.innerHTML='Зарегистрироваться';
    inputBtn.style.fontSize = '22px';
    inputBtn.style.width= '220px';
    inputBtn.style.marginLeft='-120px';
    inputBtn.style.top='474px';
    inputBtn.className='input_Btn';
    inputBtn.addEventListener('click', btnEnterForm);
    function btnEnterForm(){
        d.style.display='none';
        modWindowEnter.style.display='none';
        modWindowName.style.display='none';
        loginText.style.display='none';
        inputLogin.style.display='none';
        passwordText.style.display='none';
        inputPassword.style.display='none';
        inputBtn.style.display='none';
        inputClose.style.display='none';
    }
    // Закрыть
    inputClose.innerHTML='&#215;';
    inputClose.className='input_close';
    inputClose.addEventListener('click', btnCloseForm);
    function btnCloseForm(){
        d.style.display='none';
        modWindowEnter.style.display='none';
        modWindowName.style.display='none';
        loginText.style.display='none';
        inputLogin.style.display='none';
        passwordText.style.display='none';
        inputPassword.style.display='none';
        inputBtn.style.display='none';
        inputClose.style.display='none';
    }
    document.body.appendChild(d);
    document.body.appendChild(modWindowEnter);
    document.body.appendChild(modWindowName);
    document.body.appendChild(loginText);
    document.body.appendChild(inputLogin);
    document.body.appendChild(passwordText);
    document.body.appendChild(inputPassword);
    document.body.appendChild(inputBtn);
    document.body.appendChild(inputClose);
}