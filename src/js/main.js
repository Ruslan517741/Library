import $ from './lib/lib';

/* $('#first').on('click', ()=> {
    $('div').eq(1).fadeOut(800);
    console.log($('div').eq(1));
});

$('[data-count="second"]').on('click', ()=> {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', ()=> {
    $('.w-500').fadeToggle(800);
}); */

/* $('.wrap').html(
    `<div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action2</a>
            <a href="#" class="dropdown-item">Action3</a>
        </div>
    </div>`
);

$('.dropdown-toggle').dropdown(); */ /* -Динамическая загрузка элементов */
$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolorum quod ut accusamus ipsa ullam voluptatibus amet, quibusdam, assumenda totam iusto voluptatem? Optio debitis nisi mollitia delectus eveniet! Tenetur, dolor?'
    },
    btns: {
        count: 2,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ]
        ]
    }
}));

$('.carousel').createCarousel({
    srcSlides: [
        "https://www.rgo.ru/sites/default/files/styles/full_view/public/media/2020-12-14/peyzazh_stepanenko_nikolay_-_dolina_oseni_-_2020_-_515869.jpg?itok=BtvZDoAB",
        "https://yablyk.com/wp-content/uploads/2017/05/golden-hour_in_photo.jpg",
        "https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/43191/ufu6rqhu4e8.jpg?itok=-OTBfiTc"
    ],
    textNextIcon: '&gt;',
    textPrevIcon: '&lt;'
});