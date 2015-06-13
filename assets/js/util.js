$(document).ready(function(){
  $('body').vegas({
    delay: 5000,
    timer: false,
    shuffle: true,
    transition: ['fade', 'fade2'],
    slides: [
        { src: 'assets/img/background-2.jpg' },
        { src: 'assets/img/background-3.jpg' },
        { src: 'assets/img/background-4.jpg' },
        { src: 'assets/img/background.jpg' }
    ]
});
});