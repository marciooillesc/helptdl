const cidadesPR = [
    "Abatiá", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Altamira do Paraná", 
    "Alto Paraíso", "Alto Paraná", "Alto Piquiri", "Altônia", "Alvorada do Sul", 
    "Apucarana", "Arapongas", "Araucária", "Cascavel", "Colombo", "Curitiba", 
    "Foz do Iguaçu", "Guaratuba", "Londrina", "Maringá", "Paranaguá", "Ponta Grossa", 
    "São José dos Pinhais", "Toledo", "Umuarama"
]; // Lista resumida para exemplo, pode adicionar as 399 aqui.

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

    if(cpf === "073.565.319-41" && senha === "123") {
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
            opt.value = cidade.toLowerCase();
            opt.textContent = cidade;
            cidadeSelect.appendChild(opt);
        });
    } else if (estado !== "") {
        let opt = document.createElement('option');
        opt.value = "outra";
        opt.textContent = "Cidade de outro estado (Exemplo)";
        cidadeSelect.appendChild(opt);
    }
}

function carregarEscolas() {
    const cidade = document.getElementById('select-cidade').value;
    const escolaSelect = document.getElementById('select-escola');
    escolaSelect.innerHTML = '<option value="">Selecione a Escola...</option>';
    
    if (cidade) {
        for(let i=1; i<=2; i++) {
            let opt = document.createElement('option');
            opt.value = "escola-" + i;
            opt.textContent = "Escola Municipal " + i;
            escolaSelect.appendChild(opt);
        }
    }
}

function entrarNaEscola() {
    const escola = document.getElementById('select-escola');
    if (!escola.value) return alert("Selecione a unidade escolar!");

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

