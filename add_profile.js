var addProfile = document.querySelector('.btn_nav_halp3');
var Body = document.createElement('div');
var Form = document.createElement('form');
var H3 = document.createElement('h3');
var AddPhoto = document.createElement('h5');
var Photo = document.createElement('input');
var AboutAnimal = document.createElement('h5');
var About = document.createElement('textarea');
var Submit = document.createElement('input');

addProfile.addEventListener('click', add_profile);

function add_profile(){
    Body.className='div_registration_enter_js';
    Form.className='form_add_profile';
    Form.enctype='multipart/form-data';
    Form.action='index.html';
    Form.method='POST';
    H3.className='h_3';
    H3.innerHTML='Заполните анкету';
    AddPhoto.className='add_photo';
    AddPhoto.innerHTML='Добавить фотографию';
    Photo.className='photo';
    Photo.name='userfile';
    Photo.type='file';
    Photo.multiple='image/*,image/jpeg';
    AboutAnimal.className='about_animal';
    AboutAnimal.innerHTML='О животном';
    About.className='about';
    Submit.className='submit';
    Submit.value='Отправить';
    Submit.type='submit';

    document.body.appendChild(Body);
    document.body.appendChild(Form);
    Form.appendChild(H3);
    Form.appendChild(AddPhoto);
    Form.appendChild(Photo);
    Form.appendChild(AboutAnimal);
    Form.appendChild(About);
    Form.appendChild(Submit);
}