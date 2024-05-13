$(document).ready (function () {

        listpanier = $("#liste_panier");
        cadeaux = $("#cadeaux");
        listpanier.append($("<li><p></li>"))

        function adjustFontSize() {
                var giftsContainer = $('#gifts');
                var containerWidth = giftsContainer.width();
                var fontSize = containerWidth / 400;
                $('.gift-title').css('font-size', fontSize + 'rem');
        }
        
        $(window).resize(function() {
                adjustFontSize();
        });
        
        adjustFontSize();            
});