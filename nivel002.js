
function TestaChave2(){
    var inSenha = document.getElementById("inChave");
    var senha = inSenha.value.toUpperCase();
    // HUMM Espertinho , venho olhar diretamente no código, ganhará muito tempo com isso ! 
    if (senha=="MORANGO01001100" ||senha=="MORANGO01101100 "){
        window.location.replace('nivel003.html');
    } else{
        alert ("Chave incorreta !");
    }

}

