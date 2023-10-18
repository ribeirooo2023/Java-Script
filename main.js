function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom

while(contador < 9){
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_clap');
    }
  contador =  contador +
}
    

