const input_idade = document.getElementById("idadeUsuario")
const btn_idade = document.getElementById("btnVerificarIdade")
const resultado_idade = document.getElementById("resultadoIdade")

 
btn_idade.addEventListener("click", () => {
    let valor_input_idade = input_idade.value.trim()
    if (!valor_input_idade) {
        resultado_idade.textContent = 'por favor preecher o valor para verificação de sua idade!'
    }
    else if (input_idade.value >= 18)  {
         resultado_idade.textContent = `você, é maior de idade!`
    }
    else  resultado_idade.textContent = `você, é menor de idade!`
   })


 const inputNumero = document.getElementById("numeroUsuario");
    const botaoVerificar = document.getElementById("btnVerificar");
    const divResultado = document.getElementById("resultadoVerificacao");
 
    // Adiciona o evento de clique ao botão
    botaoVerificar.addEventListener("click", () => {
        // Captura o valor e garante que ele seja tratado como um número
        const valorDigitado = inputNumero.value;
       
        // Validação: verifica se o campo não está vazio
        if (valorDigitado === "") {
            divResultado.innerText = "Por favor, digite um número antes de verificar.";
            return;
        }
 
        const numero = Number(valorDigitado);
 
        // Estrutura condicional idêntica ao seu exercício original
        if (numero > 0) {
            divResultado.innerText = `O número ${numero} é positivo.`;
        } else if (numero < 0) {
            divResultado.innerText = `O número ${numero} é negativo.`;
        } else {
            divResultado.innerText = "O número é igual a zero.";
        }
    });

 

const inputNota = document.getElementById("notaAluno");
const botaoVerificarNota = document.getElementById("btnVerificarNota");
const divResultadoNota = document.getElementById("resultadoNota");
 
// Adiciona o evento de clique ao botão
botaoVerificarNota.addEventListener("click", () => {
    // Captura o valor digitado
    const valorDigitado = inputNota.value;
   
    // Validação: verifica se o campo está vazio
    if (valorDigitado === "") {
        divResultadoNota.innerText = "Por favor, digite uma nota válida.";
        return;
    }
 
    const nota = Number(valorDigitado);
 
    // Validação de intervalo de notas comuns (0 a 10)
    if (nota < 0 || nota > 10) {
        divResultadoNota.innerText = "Por favor, digite uma nota entre 0 e 10.";
        return;
    }
 
    // Estrutura condicional utilizando if, else if e else conforme a imagem
    if (nota >= 7) {
        divResultadoNota.innerText = "Aprovado";
    } else if (nota >= 5) {
        // Como o 'if' anterior já removeu notas >= 7,
        // este bloco pega automaticamente tudo o que estiver entre 5 e 6.9
        divResultadoNota.innerText = "Recuperação";
    } else {
        // Qualquer nota menor que 5 cairá aqui automaticamente
        divResultadoNota.innerText = "Reprovado";
    }
});
 
 

function verificarPrioridade() {
    const entrada = document.getElementById("campoPrioridade").value;
    const prioridade = entrada.toLowerCase().trim();

    let mensagem;

    switch (prioridade) {
        case "urgente":
            mensagem = "Atenção redobrada!";
            break;
        case "alta":
            mensagem = "Prioridade alta.";
            break;
        case "media":
            mensagem = "prioridade média.";
            break;
        case "baixa":
            mensagem = "Prioridade baixa";
            break;
        default:
            mensagem = "Prioridade desconhecida.";
    }
    document.getElementById("resultado").innerText = mensagem;
}


