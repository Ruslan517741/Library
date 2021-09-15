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