function TestaChave(){


    var inSenha = document.getElementById("inChave");
    var senha = inSenha.value.toUpperCase();


    // HUMM Espertinho , venho olhar diretamente no código, ganhará muito tempo com isso ! 
    if (senha=="SALMONELLA18/05/2022"){
        window.location.replace('nivel002.html');
    } else{
        alert ("Chave incorreta !");
        document.getElementById("inSenha").value ="";
     
    }



 

         
 
}

   



