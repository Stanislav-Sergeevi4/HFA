var BtnMenu = document.querySelector('.menu');
var divMenu = document.createElement('div');
var menu1 = document.createElement('div');
var menu2 = document.createElement('div');
var menu3 = document.createElement('div');
var menu4 = document.createElement('div');
var menu5 = document.createElement('div');


// Всплывающий_блок_кнопок_меню
divMenu.className='block_menu';
// divMenu.style.position = 'absolute';
divMenu.style.transition = '1s';
// Кнопки

// Кнопка_переходна_на_главную_страницу
menu1.className='btn_block_menu1';
menu1.innerHTML='Главная страница';

// Кнопка_'Отдам верного друга в хорошие руки'
menu2.className='btn_block_menu2';
menu2.innerHTML='Отдам верного друга<br> в хорошие руки';

// Кнопка_'Потерялся друг'
menu3.className='btn_block_menu3';
menu3.innerHTML='Потерялся друг';

// Кнопка_'Здоровье питомца'
menu4.className='btn_block_menu4';
menu4.innerHTML='Здоровье питомца';

// Кнопка_'Если вы хотите нам помочь'
menu5.className='btn_block_menu5';
menu5.innerHTML='Если вы хотите <br> нам помочь';

document.body.appendChild(divMenu);
divMenu.appendChild(menu1);
divMenu.appendChild(menu2);
divMenu.appendChild(menu3);
divMenu.appendChild(menu4);
divMenu.appendChild(menu5);

BtnMenu.addEventListener('click', clickMenu);

function clickMenu(){
    if(BtnMenu.style.marginTop === '300px'){
        BtnMenu.style.marginTop = '0px';
        BtnMenu.style.transition = '.3s';
        divMenu.style.top = '-302px';
    }else{
        BtnMenu.style.marginTop = '300px';
        BtnMenu.style.position = 'absolute';
        divMenu.style.top = '0px';
        divMenu.style.transition = '.3s';
        BtnMenu.style.transition = '.3s';
    }
} 

// Кнопка_перехода_на_главную_страницу_____________________
menu1.addEventListener('click', btnHome);

function btnHome(){
    BtnMenu.style.marginTop = '0px';
    BtnMenu.style.transition = '.3s';
    divMenu.style.top = '-302px';
    divMenu.style.transition = '.3s';
}