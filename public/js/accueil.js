$(document).ready (function () {
        console.log("accueil");
        $("#afficher").on ({
                click: function() {
                        if($(this).is(":checked")) {
                                $("input[name=pswd").attr("type","text")
                                $("input[name=pswd").css({
                                        color: 'lightgray'
                                })
                                $("input[name=pswdconf").attr("type","text")
                                $("input[name=pswdconf").css({
                                        color: 'lightgray'
                                })
                        } else {
                                $("input[name=pswd").attr("type","password")
                                $("input[name=pswd").css({
                                        color: 'black'
                                })
                                $("input[name=pswdconf").attr("type","password")
                                $("input[name=pswdconf").css({
                                        color: 'black'
                                })
                        }
                }
        });

        $('#connexion').submit(function(event) {
                var identifiant = $('input[name="identifiant"]').val();
                var password = $('input[name="pswd"]').val();
                if (identifiant == '' || password == '') {
                    event.preventDefault();
                    alert('Veuillez remplir tous les champs.');
                }
        });
});