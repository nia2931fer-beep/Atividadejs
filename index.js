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


const resultado_tarefas = document.getElementById("resultadoTarefas");
const verificar_tarefas = document.getElementById("verificarTarefa");
const btn_tarefas = document.getElementById("tarefasAtrasadas");
const prioridade = "alta"
const atrasada = true;

btn_tarefas.addEventListener("click", () => {
    if (prioridade === "urgente" || prioridade === "alta" && atrasada) {
        resultado_tarefas.textContent = "Precisa de atenção agora!";
    }
    else {
        resultado_tarefas.textContent = "Pode aguardar.";
    }

})


const login_usuarios = document.getElementById("loginUsuarios");
const senha_usuarios = document.getElementById("senhaUsuarios");
const btn_login = document.getElementById("btnLogin");
const resultado_login = document.getElementById("resultadoLogin");

btn_login.addEventListener("click", () => {
    const login = login_usuarios.value.trim();
    const senha = senha_usuarios.value.trim();

    if (login === "admin" && senha === "1234") {
        resultado_login.textContent = "Login realizado com sucesso!";
    } 
    else if (login !== "admin" && senha === "1234"){
        resultado_login.textContent = "Usuario incorretos.";
    }
    else {
        resultado_login.textContent = "Senha incorreta.";
    }
})


const btnTernario = document.getElementById("btnTernario");
const inputTernario = document.getElementById("numeroTernario");
const resultadoTernario = document.getElementById("resultadoTernario");

btnTernario.addEventListener("click", () => {
    const idade = Number(inputTernario.value); // Exemplo de idade, você pode alterar conforme necessário
    const situacao = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
    resultadoTernario.textContent = situacao;
});

const valorProduto = document.getElementById("valorProduto");
const btnDesconto = document.getElementById("btnDesconto");
const resultadoDesconto = document.getElementById("resultadoDesconto");


btnDesconto.addEventListener("click", () => {
    const valor = Number(valorProduto.value);
    let desconto;

    if (valor >= 500) {
        desconto = valor * 0.2; // 20% de desconto
    }
    else if (valor >= 200 && valor < 500) {
        desconto = valor * 0.1; // 10% de desconto
    }
    else {
        desconto = 0;
    }
    

    resultadoDesconto.textContent = `valor da compra: R$ ${valor.toFixed(2)} - Desconto: R$ ${desconto.toFixed(2)} - Valor final: R$ ${(valor - desconto).toFixed(2)}`;
});
