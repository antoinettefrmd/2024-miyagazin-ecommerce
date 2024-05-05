$(document).ready(function() {
    // Expand Gifts
    $('#expandGifts').on('click', function() {
        $('#clients').removeClass('expanded').toggleClass('hidden');
        $('#gifts').removeClass('hidden').toggleClass('expanded');
    });

    // Expand Clients
    $('#expandClients').on('click', function() {
        $('#gifts').removeClass('expanded').toggleClass('hidden');
        $('#clients').removeClass('hidden').toggleClass('expanded');
    });

    // Show All
    $('#showAll').on('click', function() {
        $('#gifts').removeClass('hidden').removeClass('expanded');
        $('#clients').removeClass('hidden').removeClass('expanded');
    });
});
