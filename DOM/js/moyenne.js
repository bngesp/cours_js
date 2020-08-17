function controlSaisieNote(id) {
    var matier = document.getElementById(id);

    if(parseInt(matier.value)<0 || parseInt(matier.value)>20 ) {
        alert("saisie incorrecte");
        matier.value = "";
    }
}

function calculMoyenne() {
    var php = document.getElementById('php');
    var uml = document.getElementById('uml');
    var java = document.getElementById('java');
    var sql = document.getElementById('sql');

    var moyenne = (parseInt(php.value)+parseInt(uml.value)+parseInt(java.value)+parseInt(sql.value)) / 4;
    
    var moyenneResult = document.getElementById('moyen');
    moyenneResult.innerHTML = moyenne;
}