import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = (+width.replace(/\D/g, '') * (slides.length - 1));
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            console.log(dots[slideIndex]);
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            console.log(dots[slideIndex]);
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    }
};



$.prototype.createCarousel = function({srcSlides = [], srcNextIcon = false, srcPrevIcon = false, textNextIcon = '', textPrevIcon = ''} = {}) {
    function newElement (elemName, nodeName, className, parentName) {
        elemName = document.createElement(nodeName);
        elemName.classList.add(className);
        parentName.appendChild(elemName);

        return elemName;
    }


    for (let i = 0; i < this.length; i++) {
        let carouselIndicator;
        newElement(carouselIndicator, 'ol', 'carousel-indicators', this[i]);
        console.log(carouselIndicator);
        /* let carouselIndicator = document.createElement('ol');
        carouselIndicator.classList.add('carousel-indicators');
        this[i].appendChild(carouselIndicator); */
        
        for (let i = 0; i < srcSlides.length; i++) {
            let listItem = document.createElement('li');
            listItem.setAttribute('data-slide-to', `${i}`);
            carouselIndicator.appendChild(listItem);
            if (i == 0) {
                listItem.classList.add('active');
            }
        }

        let carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel-inner');
        this[i].appendChild(carouselInner);

        let carouselSlides = document.createElement('div');
        carouselSlides.classList.add('carousel-slides');
        carouselInner.appendChild(carouselSlides);

        for (let i = 0; i < srcSlides.length; i++) {
            let slide = document.createElement('div');
            slide.classList.add('carousel-item');
            slide.innerHTML = `
            <img src=${srcSlides[i]} alt="photo">
            `;
            carouselSlides.appendChild(slide);
        }

        let prevContent, nextContent;

        if (srcNextIcon) {
            nextContent = `<img src=${srcNextIcon} alt="photo">`;
        } else {
            nextContent = textNextIcon;
        }

        if (srcPrevIcon) {
            prevContent = `<img src=${srcPrevIcon} alt="photo">`;
        } else {
            prevContent = textPrevIcon;
        }

        let nextArrow = document.createElement('a');
        nextArrow.classList.add('carousel-next');
        nextArrow.setAttribute('href', '#');
        nextArrow.setAttribute('data-slide', 'next');

        let nextArrowSpan = document.createElement('span');
        nextArrowSpan.classList.add('carousel-next-icon');
        nextArrowSpan.innerHTML = `${nextContent}`;
        nextArrow.appendChild(nextArrowSpan);

        let prevArrow = document.createElement('a');
        prevArrow.classList.add('carousel-prev');
        prevArrow.setAttribute('href', '#');
        prevArrow.setAttribute('data-slide', 'prev');

        let prevArrowSpan = document.createElement('span');
        prevArrowSpan.classList.add('carousel-prev-icon');
        prevArrowSpan.innerHTML = `${prevContent}`;
        prevArrow.appendChild(prevArrowSpan);

        this[i].appendChild(nextArrow);
        this[i].appendChild(prevArrow);
        
    }
    $('.carousel').carousel();
};



