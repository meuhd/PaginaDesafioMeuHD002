function TestaChave3(){
    var inSenha = document.getElementById("inChave");
    var senha = inSenha.value.toUpperCase();
    // HUMM Espertinho , venho olhar diretamente no código, ganhará muito tempo com isso ! 
    if (senha=="DADINHOD+UM"){
        window.location.replace('nivel004.html');
    } else{
        alert ("Chave incorreta !");
    }

}

