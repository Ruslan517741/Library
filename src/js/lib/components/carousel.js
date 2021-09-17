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
    let carousel = document.createElement('div');
    carousel.classList.add('carousel');

    let carouselIndicator = document.createElement('ol');
    carouselIndicator.classList.add('carousel-indicators');
    carousel.appendChild(carouselIndicator);
    
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
    carousel.appendChild(carouselInner);

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
        prevContent = srcPrevIcon;
    }

    carousel.innerHTML = `
        <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">${prevContent}</span>
        </a>
        <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-next-icon">${nextContent}</span>
        </a>
    `;

    document.body.appendChild(carousel);
};

$('.carousel').createCarousel({
    srcSlides: [
        "https://www.rgo.ru/sites/default/files/styles/full_view/public/media/2020-12-14/peyzazh_stepanenko_nikolay_-_dolina_oseni_-_2020_-_515869.jpg?itok=BtvZDoAB",
        "https://yablyk.com/wp-content/uploads/2017/05/golden-hour_in_photo.jpg",
        "https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/43191/ufu6rqhu4e8.jpg?itok=-OTBfiTc"
    ],
    textNextIcon: '&lt;',
    textPrevIcon: '&gt;'
});

$('.carousel').carousel();