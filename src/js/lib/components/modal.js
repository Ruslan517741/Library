import $ from '../core';

$.prototype.calcScroll = function() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    return scrollWidth; 
};

$.prototype.modal = function() {
    const scroll = this.calcScroll();
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        });
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(200);
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        });
    });

    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(200);
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }
    });
};

$('[data-toggle="modal"]').modal();

/* $.prototype.createModal = function({text, btns} = {}) {
    for (let i; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));


    }
}; */