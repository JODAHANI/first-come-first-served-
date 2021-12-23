$(function() {
    Splitting();
    
    $('.trigger').on('click', () => {
        $('.trigger').toggleClass('on');
        $('.nav').toggleClass('on');
    })
    $('.modal-trigger').on('click', () => {
        $('.modal').css({'top' : '-15000px'})
    })
});

