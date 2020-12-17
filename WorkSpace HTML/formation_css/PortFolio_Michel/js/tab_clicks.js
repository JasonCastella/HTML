
function loadTemplate(templateName){
    $('#onglet-template-injecteur').load("templates/" + templateName + ".html");
    $(".bouton-onglet").removeClass("on");
    $(".bouton-onglet."+templateName).addClass("on");
}

$(function() {
    loadTemplate("competence");

    $('.bouton-onglet.competence').click(function(){
        loadTemplate("competence");
    });
    $('.bouton-onglet.experience').click(function(){
        loadTemplate("experience");
    });
    $('.bouton-onglet.formation').click(function(){
        loadTemplate("formation");
    });
});