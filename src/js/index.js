$(function() {
    Splitting();
    
    $('.trigger').on('click', () => {
        $('.trigger').toggleClass('on');
        $('.nav').toggleClass('on');
    })
});

