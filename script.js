// Lista de cidades do Paraná (Apenas algumas principais para o exemplo)
const cidadesPR = [
    "Almirante Tamandaré", "Apucarana", "Arapongas", "Araucária", "Cambé", "Campo Largo", 
    "Cascavel", "Cianorte", "Colombo", "Curitiba", "Fazenda Rio Grande", "Foz do Iguaçu", 
    "Guarapuava", "Irati", "Londrina", "Maringá", "Paranaguá", "Paranavaí", "Pato Branco", 
    "Pinhais", "Piraquara", "Ponta Grossa", "São José dos Pinhais", "Sarandi", "Toledo", "Umuarama"
];

const icons = [
    { icon: "💧", text: "Água", speak: "Eu quero água" },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro" },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer" },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar" },
    { icon: "😴", text: "Dormir", speak: "Estou com sono" },
    { icon: "🤕", text: "Ajuda", speak: "Preciso de ajuda" }
];

// Lógica de Login
document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    const cpf = document.getElementById('login-cpf').value;
    const senha = document.getElementById('login-senha').value;

    // Verificação com as suas novas credenciais
    if(cpf === "07356531941" && senha === "help123") {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('selection-screen').style.display = 'flex';
    } else {
        alert("Acesso Negado: CPF ou Senha incorretos.");
    }
};

function carregarCidades() {
    const estado = document.getElementById('select-estado').value;
    const cidadeSelect = document.getElementById('select-cidade');
    cidadeSelect.innerHTML = '<option value="">Selecione a Cidade...</option>';
    
    if (estado === "PR") {
        cidadesPR.forEach(cidade => {
            let opt = document.createElement('option');
            opt.value = cidade.toLowerCase().replace(/ /g, "-");
            opt.textContent = cidade;
            cidadeSelect.appendChild(opt);
        });
    } else if (estado !== "") {
        let opt = document.createElement('option');
        opt.value = "demo";
        opt.textContent = "Unidade de Demonstração";
        cidadeSelect.appendChild(opt);
    }
}

function carregarEscolas() {
    const cidade = document.getElementById('select-cidade').value;
    const escolaSelect = document.getElementById('select-escola');
    escolaSelect.innerHTML = '<option value="">Selecione a Escola...</option>';
    
    if (cidade) {
        for(let i=1; i<=3; i++) {
            let opt = document.createElement('option');
            opt.value = "escola-" + i;
            opt.textContent = "Escola Municipal Exemplo " + i;
            escolaSelect.appendChild(opt);
        }
    }
}

function entrarNaEscola() {
    const escola = document.getElementById('select-escola');
    if (!escola.value) return alert("Por favor, selecione uma escola!");

    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    document.getElementById('escola-tag').innerText = `UNIDADE: ${escola.options[escola.selectedIndex].text}`;
    
    const container = document.getElementById("icons-container");
    container.innerHTML = "";
    icons.forEach(item => {
        const card = document.createElement("div");
        card.className = "icon-card";
        card.innerHTML = `<span style="font-size: 3.5rem; display:block; margin-bottom:10px;">${item.icon}</span><strong>${item.text}</strong>`;
        card.onclick = () => speakText(item.speak);
        container.appendChild(card);
    });
}

function speakText(text) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    window.speechSynthesis.speak(speech);
}
