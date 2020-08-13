

function verifierTailleText(){
    
    // if(champText.value.length > 10 ){
    //     alert('votre texte est trop long');
    //     champText.value = '';
    // }
}

function ecrireResult(){
    var champText = document.querySelector('.chaine');
    var result = document.querySelector('.result');
    if(champText.value.length > 10 ){
        alert('votre texte est trop long');
        champText.value = '';
    }
    result.innerHTML = 10 - champText.value.length;

}