$(document).ready(function(){
    // Po jednokrotnym kliknięciu zmień kolor i rozmiar napisu
    $('#textColumn').on('click', function(){
        $(this).toggleClass('colored');
    });

    // Po podwójnym kliknięciu zmień kolor tła kolumny i zniknij z napisem
    $('#textColumn').on('dblclick', function(){
        $(this).toggleClass('blue-background');
        $(this).toggle();
    });
});
