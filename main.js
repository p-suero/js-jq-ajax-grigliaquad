$(document).ready(function() {
    //recupero la struttura html del template
    var template_html = $("#entry-template").html();
    // preparo la funzione al fine di utilizzare il template con handlebars
    var template_function = Handlebars.compile(template_html);
    //creo l'oggetto con i valori del placeholder dell Handlebars
    var quadrato = {
        "forma" : "quadrato",
        "tipo"  : "numero"
    }
    //tramite handlebars preparo l'html con le proprietà dell'oggetto
    var html_finale = template_function(quadrato);
    //tramite il ciclo for aggiungo per 36 volte i quadrati nella pagina htmk
    for (var i = 0; i < 36; i++) {
        $("#griglia").append(html_finale)
    }

    //intercetto il click sul quadrato tramite la funzione on, vista l'aggiunta di elementi dinamici
    $("#griglia").on("click", ".quadrato", function() {
        //faccio una chiamata ajax per reperire un numero random da 1 a 9
        $.ajax({
            "url" : "https://flynn.boolean.careers/exercises/api/random/int",
            "method" : "GET",
            "success" : function(data) {
                var numero_random_pc = data.response
                console.log(numero_random_pc);
                console.log($(this));
                //aggiungo il numero nel quadrato corrente
                var add_numero = $(this).find(".numero").text(numero_random_pc)
                //creo la condizione
            },
            "error" : function() {
                alert("si è verificato un errore, impossibile recuperare il dato richiesto")
            }
        })
    } )

})
