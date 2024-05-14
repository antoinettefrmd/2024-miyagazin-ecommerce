// const { format } = require("path/posix");

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
    
    $('#ajoutCliente').on('click', function() {
        $('#gifts').toggleClass('hidden');
        $('#cacheAnniv').show();
        $('.formContainer').show();
        $('#myForm').attr('action', '/gerante/ajoutCliente');
    });


    $('.modifCliente').on('click', function() { 
        var idCliente = $(this).data('id'); 
        $('#cacheAnniv').hide();
        $('#myForm').attr('action', '/gerante/modifCliente');
        $.get("http://localhost:8080/gerante/returnOneClient", { idCliente : idCliente },
            function (data) {
                $('#id').val(idCliente);
                $('#nom').val(data[0].nom); 
                $('#prenom').val(data[0].prenom); 
                $('#email').val(data[0].mail); 
                $('#identifiant').val(data[0].identifiant); 
                $('#mdp').val(data[0].mdp); 
                $('#nbp').val(data[0].points); 
            });
    });

    $('.suppCliente').on('click', function() {
        var idCliente = $(this).data('id');
        console.log(idCliente);
        $.post("http://localhost:8080/gerante/suppCliente", { idCliente : idCliente }, function (data) {
            console.log(data);
        });
    });
});