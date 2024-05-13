$(document).ready (function () {

        function adjustFontSize() {
                var gifts = $('#gifts');
                var largeur = gifts.width();
                var taille = largeur / 500;
                $('.gift-title').css('font-size', taille + 'rem');
        }
        
        $(window).resize(function() {
                adjustFontSize();
        });
        
        adjustFontSize();

        $("#valider_panier").on('click', function() {
                $("#liste_panier").empty();
                $.post("http://localhost:8080/clientele/valider-panier", async function(response) {
                });
        });
            
});