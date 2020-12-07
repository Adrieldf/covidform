function init() {
    console.log("init");
}

window.init = init();

function setRisk(value) {

    for (i = 0; i < value; i++) {
        $("[name=riskQuad]")[i].attr("class", getRiskColor(i++));
    }
}
function getRiskColor(value) {
    if (value < 2)
        return "safeColor";
    else if (value < 4)
        return "warningColor";
    else
        return "dangerColor";
}

function sendAlert(message){
    alert("Campo " + message + " não preenchido, verifique todos os campos e tente enviar novamente!");
}

$("#btnEnviar").click(function () {

    if($("#txtNome").val() == null || $("#txtNome").val() == ""){
        sendAlert("nome completo");
        return;
    }

    if($("#txtDataNascimento").val() == null || $("#txtDataNascimento").val() == ""){

        sendAlert("data de nascimento");
        return;
    }

    if($("#txtCPF").val() == null || $("#txtCPF").val() == ""){
        sendAlert("CPF");
        return;
    }
    if($("#txtEndereco").val() == null || $("#txtEndereco").val() == ""){
        sendAlert("endereço");
        return;
    }
    if($("#txtNumeroEndereco").val() == null || $("#txtNumeroEndereco").val() == ""){
        sendAlert("número do endereço");
        return;
    }
    if($("#txtComplementoEndereco").val() == null || $("#txtComplementoEndereco").val() == ""){
        sendAlert("complemento do endereço");
        return;
    }
    if($("#txtCidade").val() == null || $("#txtCidade").val() == ""){
        sendAlert("cidade");
        return;
    }
    if($("#txtEstado").val() == null || $("#txtEstado").val() == ""){
        sendAlert("estado");
        return;
    }
    if($("#txtCEP").val() == null || $("#txtCEP").val() == ""){
        sendAlert("CEP");
        return;
    }
    if(($("#txtTelefone1").val() == null || $("#txtTelefone1").val() == "") && ($("#txtTelefone2").val() == null || $("#txtTelefone2").val() == "")){
        alert("Preencha pelo menos um dos telefones antes de enviar o formulário")
        return;
    }
});
