function showHide(){
    if (menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }
    else{
        menu.classList.add('is-active');
    }
}

function searcherEvent(event){
    if (event.matches) {
        button.addEventListener('click', showHide);
        button1.addEventListener('click', showHide);
    }
    else {
        button.removeEventListener('click', showHide);
        button1.removeEventListener('click', showHide);
    }
}

const menu = document.querySelector('.searcher');
const button = document.querySelector('.searcher-initializer');
const button1 = document.querySelector('.finalizer');
const mediaQ768 = window.matchMedia('screen and (max-width: 768px)');

mediaQ768.addListener(searcherEvent);

searcherEvent(mediaQ768);

