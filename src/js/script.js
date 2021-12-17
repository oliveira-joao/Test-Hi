function showMessage(message){
    let div = document.querySelector('#response');
    div.innerText = message;
}

function formatResponse(infoAddress) {
    if (infoAddress.erro) {
        return "Não foi possível localizar o endereço";  
    }

    return `CEP: ${cep.value}
            Logradouro: ${infoAddress.logradouro} 
            Complemento: ${infoAddress.complemento} 
            Bairro: ${infoAddress.bairro} 
            Localidade: ${infoAddress.localidade} 
            UF: ${infoAddress.uf}
            Siafi: ${infoAddress.siafi}
            DDD: ${infoAddress.ddd}
            GIA: ${infoAddress.gia}
            IBGE: ${infoAddress.ibge}`
}

function searchCep(cep) {

    if (cep.length < 8 && cep.length > 9) {
        showMessage("CEP inválido")
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;
     
    fetch(url)
    .then(function(response){
        response.json().then(function(data){
            console.log(data)
            showMessage(formatResponse(data))
        })
    })
}