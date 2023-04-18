var btn = document.querySelector('.btn');
var list = document.querySelector('.list');
var icon = document.querySelector('.icon');

var deleteClasses = function(){
    list.classList.remove('listshow');
    list.classList.remove('listhide');
}

var hide = function(){
    list.classList.add('listhide');
    icon.classList.remove('fa-times');
    btn.classList.remove('btnclose');
    list.addEventListener('animationend', deleteClasses);
}

var show = function(){
    list.classList.add('listshow');
    icon.classList.add('fa-times');
    btn.classList.add('btnclose');
    list.removeEventListener('animationend', deleteClasses);
}

var click = function(){
    if(list.classList.contains('listshow')){
        hide();
    } else {
        show();
    }
}

btn.addEventListener('click', click);