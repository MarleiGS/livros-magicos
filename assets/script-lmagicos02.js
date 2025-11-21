'use strict'

const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = " ";
    document.getElementById('bairro').value = " ";
    document.getElementById('cidade').value = " ";
    document.getElementById('estado').value = " ";
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
};

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => { //pesquisar cep preenche o formulario
    limparFormulario();

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`; 
    if (cepValido(cep)){
        const dados = await fetch(url); //recebendo os dados do fetch
        const endereco = await dados.json(); //pegando os dados e aplicando a função json
        if(endereco.hasOwnProperty('erro')){ //se cep estiver errado "CEP não encontrado" vai aparecer, caso contrario o cep será preenchido
            document.getElementById('endereco').value = 'CEP não encontrado';
        } else{
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
    
}

// o js vai pegar o documento com o elemento id e vai escutar um click e vai pesquisar o CEP (pesCep)
document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);

        
//TESTE PARA APARECER NO CONSOLE, SE QUISER EXCLUIR PODE
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault(); // impede de enviar só para testar

    const dados = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        cep: document.getElementById("cep").value,
        endereco: document.getElementById("endereco").value,
        bairro: document.getElementById("bairro").value,
        complemento: document.getElementById("complemento").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
    };

    console.log(dados); // <-- aqui você verá tudo no console
});