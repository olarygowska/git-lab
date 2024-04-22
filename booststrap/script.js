$(document).ready(function() {
    // Obsługa zmiany motywu po kliknięciu na ikonę dnia/nocy
    $('#themeToggle').click(function() {
        $('body').toggleClass('dark-theme');
        // Zmiana ikony na ikonę odpowiednią do aktualnego motywu
        $(this).find('i').toggleClass('fa-sun fa-moon');
    });

    // Obsługa kliknięcia przycisku "Fetch Data"
    $('#fetchDataBtn').click(function() {
        // Wywołanie funkcji do pobierania danych z API
        fetchData();
    });
});

// Funkcja do pobierania danych z API
function fetchData() {
    // Pobranie danych z wybranego API (tu możesz dodać odpowiednie zapytanie do API)
    $.getJSON('https://api.example.com/data', function(data) {
        // Wyświetlenie pobranych danych w sekcji "apiData"
        $('#apiData').html(JSON.stringify(data));
    });
}
$(document).ready(function(){
    // Funkcja do obsługi kliknięć na elementy nawigacyjne
    $(".nav-link").click(function(event){
        event.preventDefault(); // Zapobiega domyślnej akcji po kliknięciu na link

        // Pobierz nazwę strony z atrybutu data-page
        var page = $(this).data("page");
        
        // Użyj metody load() do dynamicznego ładowania zawartości
        $("#content").load(page + ".html");
    });
});