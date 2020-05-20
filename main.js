$(document).ready(function() {
    //recupero la struttura html del template
    var template_html = $("#entry-template").html();
    //preparo la funzione al fine di utilizzare il template con handlebars
    var template_function = Handlebars.compile(template_html);
    //tramite handlebars preparo l'html
    var html_finale = template_function();
    //tramite il ciclo for aggiungo per 36 volte i quadrati nella pagina html
    for (var i = 0; i < 36; i++) {
        $("#griglia").append(html_finale)
    }

    //intercetto il click sul quadrato tramite la funzione one per evitare una ripetizione del click
    $(".quadrato").one("click", function() {
        //salvo la variabile con l'elemento corrente al fine di riutilizzarla nella funzione ajax
        var elemento_corrente = $(this);
        //faccio una chiamata ajax per reperire un numero random da 1 a 9
        $.ajax({
            "url": "https://flynn.boolean.careers/exercises/api/random/int",
            "method": "GET",
            "success": function(data) {
                //recupero il numero restituito dall'api
                var numero_random_pc = data.response
                //aggiungo il numero nel quadrato corrente
                elemento_corrente.find(".numero").text(numero_random_pc);
                //creo la condizione per impostare il background al quadrato corrente
                if (numero_random_pc <= 5) {
                    elemento_corrente.addClass("yellow");
                } else {
                    elemento_corrente.addClass("green");
                }
            },
            "error": function() {
                alert("si è verificato un errore, impossibile recuperare il dato richiesto")
            }
        })
    })
})
