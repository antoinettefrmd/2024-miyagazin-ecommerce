$(document).ready(function() {

    // Expand Gifts
    function expandedGifts() {
        $('#clients').removeClass('expanded').toggleClass('hidden');
        $('#gifts').removeClass('hidden').toggleClass('expanded');
    }

    function expandedClients() {
        $('#gifts').removeClass('expanded').toggleClass('hidden');
        $('#clients').removeClass('hidden').toggleClass('expanded');
    }

    function reduceGifts()
    {
        $('#gifts').removeClass('expanded').removeClass('hidden');
    }

    $('#expandGifts').on('click', function() {
        expandedGifts();
    });

    $('#expandClients').on('click', function() {
        expandedClients();
    });
  
    $('#formContainer').hide();
    
    $('#ajoutCliente').on('click', function() {
        $('#gifts').toggleClass('hidden');
        $('#formContainer').show();
    });

    $('.modifCliente').on('click', function() {
        $('#gifts').toggleClass('hidden');
    });

    $('.suppCliente').on('click', function() {
        var idCliente = $(this).data('id');
        console.log(idCliente);
        $.post("http://localhost:8080/gerante/suppCliente", { idCliente : idCliente }, function (data) {
            console.log(data);
        });
    });
});